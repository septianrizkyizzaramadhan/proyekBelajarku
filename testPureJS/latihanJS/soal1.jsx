import { useState } from "react";

function App() {
    const [antrean, setAntrean] = useState([
        { id: 1, nama: "Revy", motor: "Honda BeAT", status: "Proses" },
        { id: 2, nama: "Andi", motor: "Honda Vario", status: "Proses" },
        { id: 3, nama: "Joko", motor: "Suzuki Satria", status: "Selesai" }
    ])

    const handleHapus = (itemYangMauDihapus) => {
        const dataBaru = antrean.filter((item) => item.id !== itemYangMauDihapus)
        setAntrean(dataBaru)
    }

    const handleSelesaikan = (itemYangDipilih) => {
        const dataBaru = antrean.map((item) => {
            if (item.id === itemYangDipilih) {
                return {...item, status: '<Sel></Sel>esai'}
            }
            return item;
          })
          setAntrean(dataBaru)
      };
return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <h2>🛠️ Dashboard Antrean Bengkel Genesis</h2>
      <p>Total antrean saat ini: {antrean.length} motor</p>

      {/* DAFTAR ANTREAN */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {antrean.map((item) => (
          <li 
            key={item.id} 
            style={{ 
              background: '#f4f4f4', 
              padding: '12px', 
              marginBottom: '10px', 
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <strong>{item.nama}</strong> ({item.motor}) <br />
              Status: <span style={{ color: item.status === 'Selesai' ? 'green' : 'orange' }}>{item.status}</span>
            </div>

            <div>
              {/* Tombol Selesaikan (Hanya muncul kalau status masih Proses) */}
              {item.status === 'Proses' && (
                <button 
                  onClick={() => handleSelesaikan(item.id)}
                  style={{ marginRight: '6px', padding: '6px 10px', cursor: 'pointer', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                  Selesaikan
                </button>
              )}

              {/* Tombol Hapus */
              <button 
                onClick={() => handleHapus(item.id)}
                style={{ padding: '6px 10px', cursor: 'pointer', background: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


