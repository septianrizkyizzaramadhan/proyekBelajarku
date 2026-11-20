# TypeScript Utility Types — Backend

Utility Types adalah fitur TypeScript untuk memodifikasi atau mengambil tipe data yang sudah ada tanpa harus menulis ulang interface.

## 1. `Partial<T>`

Mengubah semua properti dalam sebuah tipe menjadi opsional (`?`).

**Kegunaan:** Biasanya digunakan untuk fitur update data (PATCH).

```ts
interface User {
    id: number;
    username: string;
    email: string;
}

function updateUser(data: Partial<User>) {
    console.log(data);
}

updateUser({
    username: 'revy'
});
```

## 2. `Pick<T, K>`

Mengambil beberapa properti tertentu dari sebuah tipe.

**Kegunaan:** Membuat tipe data yang hanya berisi properti yang dibutuhkan.

```ts
interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

type PublicUser = Pick<User, 'id' | 'username' | 'email'>;
```

Hasil tipe `PublicUser`:

```ts
{
    id: number;
    username: string;
    email: string;
}
```

## 3. `Omit<T, K>`

Mengambil semua properti dari sebuah tipe, kecuali properti yang ditentukan.

**Kegunaan:** Menghilangkan data sensitif seperti password dari tipe response.

```ts
interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

type SafeUser = Omit<User, 'password'>;
```

Hasil tipe `SafeUser`:

```ts
{
    id: number;
    username: string;
    email: string;
}
```

> Catatan: `Omit` hanya mengatur tipe saat development. Data sensitif tetap harus benar-benar dihapus dari response saat runtime.

## 4. `Record<K, T>`

Membuat tipe object dengan kumpulan key dan value yang sudah ditentukan.

**Kegunaan:** Menyimpan data konfigurasi, kategori, atau mapping.

```ts
type Product = 'laptop' | 'phone' | 'tablet';

type ProductStock = Record<Product, number>;

const stock: ProductStock = {
    laptop: 10,
    phone: 20,
    tablet: 15
};
```

Artinya:
- Key harus `laptop`, `phone`, dan `tablet`.
- Semua value harus bertipe `number`.

## 5. `ReturnType<T>`

Mengambil tipe data dari hasil kembalian sebuah function.

**Kegunaan:** Menggunakan kembali tipe hasil function tanpa menulis interface secara manual.

```ts
function getUser() {
    return {
        id: 1,
        username: 'revy',
        email: 'revy@gmail.com'
    };
}

type UserData = ReturnType<typeof getUser>;
```

Penjelasan:
- `typeof getUser` mengambil tipe function.
- `ReturnType` mengambil tipe hasil kembalian function.
- `UserData` menjadi alias untuk tipe tersebut.

## 6. Generic Function (`<T>`)

Generic memungkinkan function atau tipe menerima berbagai jenis tipe data tanpa kehilangan informasi tipenya.

**Kegunaan:** Membuat function dan struktur response API yang bisa digunakan ulang.

```ts
function identity<T>(data: T): T {
    return data;
}

const username = identity<string>('revy');
const userId = identity<number>(1);
```

Contoh untuk response API:

```ts
interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

interface User {
    id: number;
    username: string;
}

const response: ApiResponse<User> = {
    success: true,
    message: 'User berhasil ditemukan',
    data: {
        id: 1,
        username: 'revy'
    }
};
```

## Ringkasan

| Utility / Fitur | Fungsi |
|---|---|
| `Partial<T>` | Membuat semua properti opsional |
| `Pick<T, K>` | Mengambil properti tertentu |
| `Omit<T, K>` | Menghilangkan properti tertentu |
| `Record<K, T>` | Membuat object dengan key dan value tertentu |
| `ReturnType<T>` | Mengambil tipe hasil function |
| `Generic<T>` | Membuat tipe atau function yang fleksibel |

## Prioritas Belajar Backend

Fokus kuasai urutan berikut:

1. `Partial<T>`
2. `Pick<T, K>`
3. `Omit<T, K>`
4. `Record<K, T>`
5. `ReturnType<T>`
6. `Generic<T>`

**Catatan:** Tidak perlu menghafal semuanya. Pahami fungsi, cara penggunaan, dan kapan masing-masing fitur dibutuhkan dalam project backend.
