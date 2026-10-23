import { useState } from "react";

function App() {
    const [produk] = useState([
        { id: 1, nama: 'Laptop', harga: 2000000},
        { id: 2, nama: "Busi Racing", harga: 25000 },
        { id: 3, nama: "Kampas Rem", harga: 40000 }
    ])

    const [keranjang, setKeranjang] = useState([])
    const tambahKeranjang = (itemProduk) => {
        
        setKeranjang([...keranjang, itemProduk])
    }

    const totalHarga = keranjang.reduce((total, item) => {
        total + item.harga
        return total + item.harga;
    }, 0)
    return (
        <div style={{ padding: '25px', fontFamily: 'sans-serif' }}>
        <h2>🛒 Kasir Sparepart Genesis</h2>

        {/* Daftar Produk */}
        <h4>Produk Tersedia:</h4>
        <ul>
            {produk.map((p) => (
            <li key={p.id} style={{ marginBottom: '8px' }}>
                {p.nama} - Rp {p.harga.toLocaleString()} {' '}
                <button onClick={() => tambahKeranjang(p)}>Beli</button>
            </li>
            ))}
        </ul>

        <hr style={{ margin: '20px 0' }} />

        {/* Daftar Keranjang Belanja */}
        <h4>Keranjang Belanja ({keranjang.length} item):</h4>
        <ul>
            {keranjang.map((item, index) => (
            <li key={index}>
                {item.nama} - Rp {item.harga.toLocaleString()}
            </li>
            ))}
        </ul>

        {/* Tampilkan Total Harga */}
        <h3>Total Bayar: Rp {totalHarga.toLocaleString()}</h3>
        </div>
    );
    }

    export default App;