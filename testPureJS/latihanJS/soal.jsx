import { useState } from 'react';

function App() {
  const [daftarBelanja, setDaftarBelanja] = useState([
    { id: 1, item: "Oli Mesin", harga: 50000 },
    { id: 2, item: "Kampas Rem", harga: 75000 },
    { id: 3, item: "Busi Racing", harga: 25000 },
  ]);

  // 🛠️ TUGAS LU DI SINI:
  // Hitung total harga dari `daftarBelanja` pakai `.reduce()`
  const totalHarga = daftarBelanja.reduce((totalSementara, barang) => {

    return totalSementara + barang.harga
    // ✍️ TULIS LOGIKA LU DI SINI:
    // (Petunjuk: jumlahkan totalSementara dengan harga dari setiap barang)
    
  }, 0); // Nilai awal dompet mulai dari 0

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>🧾 Nota Pembayaran Bengkel</h2>

      <ul>
        {daftarBelanja.map((b) => (
          <li key={b.id} style={{ marginBottom: '6px' }}>
            {b.item} — Rp {b.harga.toLocaleString()}
          </li>
        ))}
      </ul>

      <hr style={{ margin: '15px 0' }} />

      {/* Menampilkan hasil .reduce() */}
      <h3>Total yang harus dibayar: Rp {totalHarga.toLocaleString()}</h3>
    </div>
  );
}

export default App;