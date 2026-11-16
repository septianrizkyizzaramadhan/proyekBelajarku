# TypeScript – Generics & Utility Types

## 1. Generics

Generics memungkinkan kita membuat function, interface, atau type yang bisa menerima berbagai tipe data tanpa kehilangan type safety.

Contoh:

```ts
function getData<T>(data: T): T {
    return data;
}

getData<string>('Revy');
getData<number>(100);
```

### Generic Interface

Generics juga bisa digunakan pada interface.

```ts
interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

interface User {
    id: number;
    name: string;
}

const response: ApiResponse<User> = {
    success: true,
    message: 'User ditemukan',
    data: {
        id: 1,
        name: 'Revy'
    }
};
```

Jika data berupa array, gunakan `ApiResponse<User[]>`.

## 2. Utility Types

Utility Types adalah fitur TypeScript untuk memodifikasi atau mengambil bagian tertentu dari tipe data yang sudah ada.

### A. Partial<T>

Membuat semua properti menjadi optional.

```ts
interface Product {
    id: number;
    name: string;
    price: number;
}

type UpdateProduct = Partial<Product>;
```

**Kegunaan:** Cocok untuk update data menggunakan PATCH karena tidak semua field harus dikirim.

### B. Pick<T, K>

Mengambil properti tertentu dari sebuah type.

```ts
type ProductPreview = Pick<Product, 'name' | 'price'>;
```

**Kegunaan:** Membuat tipe data yang hanya membutuhkan beberapa properti.

### C. Omit<T, K>

Menghilangkan properti tertentu dari sebuah type.

```ts
interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

type PublicUser = Omit<User, 'password'>;
```

**Kegunaan:** Membuat tipe data publik tanpa menyertakan properti sensitif seperti password. Tetap lakukan filtering saat runtime.

### D. Required<T>

Membuat semua properti menjadi wajib, termasuk properti yang sebelumnya optional.

```ts
interface Product {
    id: number;
    name: string;
    price?: number;
}

type CompleteProduct = Required<Product>;
```

**Kegunaan:** Memastikan semua properti wajib tersedia dalam suatu tipe data.

### E. Readonly<T>

Membuat semua properti tidak bisa diubah melalui pengecekan tipe TypeScript.

```ts
interface Product {
    id: number;
    name: string;
}

const product: Readonly<Product> = {
    id: 1,
    name: 'Laptop'
};

// product.id = 2; // TypeScript Error
```

**Catatan:** `Readonly` hanya bekerja saat type-checking, bukan perlindungan runtime.

### F. Record<K, T>

Membuat object dengan key dan value yang sudah ditentukan tipenya.

```ts
type Category = 'laptop' | 'phone' | 'tablet';

type ProductStock = Record<Category, number>;

const stock: ProductStock = {
    laptop: 10,
    phone: 25,
    tablet: 8
};
```

**Kegunaan:** Membuat mapping seperti role-permission, kategori-stok, dan status-jumlah.

### G. Exclude<T, U>

Menghapus tipe tertentu dari sebuah union type.

```ts
type Status = 'pending' | 'success' | 'failed';

type ActiveStatus = Exclude<Status, 'failed'>;
```

Hasilnya:

```ts
type ActiveStatus = 'pending' | 'success';
```

**Kegunaan:** Membuat tipe baru dengan mengecualikan nilai tertentu.

### H. ReturnType<T>

Mengambil tipe data dari nilai yang dikembalikan sebuah function.

```ts
function getUser() {
    return {
        id: 1,
        name: 'Revy'
    };
}

type User = ReturnType<typeof getUser>;
```

**Kegunaan:** Mengambil tipe return function tanpa menulis ulang struktur datanya.

## 3. Kesimpulan

Generics dan Utility Types membantu membuat kode TypeScript lebih fleksibel, konsisten, dan mudah dikelola.

Dalam backend development, konsep ini sering digunakan untuk:

- Membuat struktur response API.
- Mengatur tipe data request dan update.
- Mengelola data pengguna.
- Membuat mapping role dan permission.
- Menghindari penulisan tipe data yang berulang.

**Tujuan utama:** Menulis kode backend yang lebih terstruktur dengan type safety yang baik.