import { useState } from 'react';

function App() {
  // 1. Data mentah (simulasi data dari database)
  const dataServis = [
    { id: 1, nama: "Honda BeAT", mekanik: "Budi", status: "Selesai" },
    { id: 2, nama: "Yamaha NMAX", mekanik: "Andi", status: "Proses" },
    { id: 3, nama: "Honda Vario", mekanik: "Budi", status: "Proses" },
    { id: 4, nama: "Suzuki Satria", mekanik: "Dedi", status: "Selesai" },
  ];

  // 2. State untuk menyimpan kata kunci pencarian
  const [search, setSearch] = useState("");
  

  // 🛠️ TANTANGAN LOGIKA LU DI SINI:
  // Buat variabel `dataFilter` yang berisi hasil filter dari `dataServis`
  // berdasarkan apa yang diketik user di `search`.
  // (Petunjuk: Pakai .filter() dan .includes() atau .toLowerCase())
  
  const dataFilter = dataServis.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>🛠️ Sistem Filter Servis</h2>

      {/* Input Search */}
      <input
        type="text"
        placeholder="Cari nama motor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px', width: '250px' }}
      />

      {/* Daftar Hasil Filter */}
      <ul>
        {dataFilter.map((item) => (
          <li key={item.id} style={{ marginBottom: '8px' }}>
            <strong>{item.nama}</strong> — Mekanik: {item.mekanik} | Status: {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;