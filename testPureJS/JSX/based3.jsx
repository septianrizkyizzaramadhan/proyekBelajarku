import { useState } from "react";

function App() {
  // State data barang di gudang
  const [gudang, setGudang] = useState([
    { id: 1, nama: "Oli Mesin", stok: 10 },
    { id: 2, nama: "Kampas Rem", stok: 5 }
  ]);

  // ✍️ TUGAS UTAMA LU DI SINI:
  // Buat fungsi untuk mengubah stok berdasarkan ID barang dan aksi ('tambah' atau 'kurang')
  const handleUbahStok = (idBarang, aksi) => {
    // 1. Petunjuk: Gunakan .map() untuk melintasi array `gudang`
    // 2. Kalau item.id cocok dengan idBarang:
    //    - Kalau aksinya 'tambah', stok bertambah 1 (item.stok + 1)
    //    - Kalau aksinya 'kurang', stok berkurang 1 (item.stok - 1)
    // 3. Kalau ID-nya gak cocok, kembalikan item aslinya tanpa diubah.
    
    const dataBaru = gudang.map((item) => {
      if (item.id === idBarang) {
        return { 
          ...item, 
          stok: aksi === 'tambah' ? item.stok + 1 : item.stok - 1  // <--- TITIK-TITIK YANG HARUS DIISI
        };
      }
      return item;
    });

    // Masukkan data baru ke useState
    setGudang(dataBaru);
  };

  return (
    <div style={{ padding: '25px', fontFamily: 'sans-serif' }}>
      <h2>🛠️ Kontrol Stok Gudang</h2>
      <ul>
        {gudang.map((barang) => (
          <li key={barang.id} style={{ marginBottom: '10px' }}>
            {barang.nama} (Stok: {barang.stok}) {' '}
            {/* Tombol Tambah */}
            <button onClick={() => handleUbahStok(barang.id, 'tambah')}> + </button> {' '}
            {/* Tombol Kurang */}
            <button onClick={() => handleUbahStok(barang.id, 'kurang')}> - </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;