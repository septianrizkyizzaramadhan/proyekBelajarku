import { useState } from "react"

function App() {
    const [sparepart, setSparepart] = useState([
        { id: 1, nama: "Oli Federal Oil", harga: 55000, stok: 10 },
        { id: 2, nama: "Kampas Rem Depan", harga: 35000, stok: 5 },
        { id: 3, nama: "Busi NGK Racing", harga: 25000, stok: 15 }
    ]) 

    const [namaBaru, setNamaBaru] = useState('')
    const [hargaBaru, setHargaBaru] = useState('') 

    const headleTambahBarang = (e) => {
        e.preventDefault()
        if (!namaBaru || !hargaBaru) return;

        const barangBaru = {
            id: Date.now(),
            nama: namaBaru,
            harga: Number(hargaBaru),
            stok: 10
        }

        setSparepart([...sparepart, barangBaru])

        setNamaBaru('')
        setHargaBaru('')
    }

    const toggleHapus = (idYangMauDihapus) => {
        const dataSisa = sparepart.filter((item) => item.id !== idYangMauDihapus)
        setSparepart(dataSisa)
    }

        return (
        <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '500px', margin: 'auto' }}>
        <h2>🛠️ Kelola Gudang Sparepart Genesis</h2>

        {/* FORM INPUT BARANG BARU */}
        <form onSubmit={headleTambahBarang} style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <h4>Tambah Sparepart Baru</h4>
            <div style={{ marginBottom: '10px' }}>
            <input 
                type="text" 
                placeholder="Nama Barang..." 
                value={namaBaru} 
                onChange={(e) => setNamaBaru(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
            </div>
            <div style={{ marginBottom: '10px' }}>
            <input 
                type="number" 
                placeholder="Harga (Rp)..." 
                value={hargaBaru} 
                onChange={(e) => setHargaBaru(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
            </div>
            <button type="submit" style={{ background: '#2196F3', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '4px' }}>
            Simpan Barang
            </button>
        </form>

        {/* DAFTAR LIST BARANG (Dirender pakai .map()) */}
        <h3>Daftar Barang ({sparepart.length} jenis)</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {sparepart.map((item) => (
            <li 
                key={item.id} 
                style={{ 
                background: '#f1f1f1', 
                padding: '12px', 
                marginBottom: '8px', 
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
                }}
            >
                <div>
                <strong>{item.nama}</strong> <br />
                Harga: Rp {item.harga.toLocaleString()} | Stok: {item.stok} pcs
                </div>

                {/* Tombol Hapus pakai .filter */}
                <button 
                onClick={() => toggleHapus(item.id)}
                style={{ background: '#f44336', color: 'white', border: 'none', padding: '6px 10px', cursor: 'pointer', borderRadius: '4px' }}
                >
                Hapus
                </button>
            </li>
            ))}
        </ul>
        </div>
    );
    }

export default App;
