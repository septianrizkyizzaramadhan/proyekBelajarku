import { useState } from 'react';

function App() {
  // 1. Definisikan state untuk stok awal, misal angkanya mulai dari 10
  const [stokOli, setStokOli] = useState(10);

  // 2. Fungsi buat nambahin stok (+1)
  const handleTambah = () => {
    setStokOli(stokOli + 1)
    // ✍️ TULIS KODE SETTER-NYA DI SINI:
    // (Petunjuk: ambil stokOli sekarang, lalu tambah 1)
    
  };

  // 3. Fungsi buat ngurangin stok (-1)
  const handleKurang = () => {
    setStokOli(stokOli - 1)
    // ✍️ TULIS KODE SETTER-NYA DI SINI:
    // (Petunjuk: ambil stokOli sekarang, lalu kurangi 1)
    
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <h2>📦 Kelola Stok Oli Mesin</h2>
      <h3>Stok saat ini: {stokOli} pcs</h3>

      {/* Tombol Tambah */}
      <button 
        onClick={handleTambah}
        style={{ padding: '8px 14px', marginRight: '10px', cursor: 'pointer' }}
      >
        Tambah Stok (+)
      </button>

      {/* Tombol Kurang */}
      <button 
        onClick={handleKurang}
        style={{ padding: '8px 14px', cursor: 'pointer' }}
      >
        Kurangi Stok (-)
      </button>
    </div>
  );
}

export default App;