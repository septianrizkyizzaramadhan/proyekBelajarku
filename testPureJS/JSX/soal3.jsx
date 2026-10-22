import { useState } from "react";

function App() {
    const [daftarBarang] = useState([
        'Laptop',
        'Power Supply', 
        'SSD',
        'CPU'
    ])

    const [keyword, setKeyword] = useState('')
    const barangSaringan  = daftarBarang.filter((item) => 
        item.toLowerCase().includes(keyword.toLowerCase())
    )

    return (
        <div>
            <h1>Daftar Barang</h1>

            <input
                type="text"
                placeholder="Cari barang..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />

            <ul>
                {barangSaringan.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {barangSaringan.length === 0 && (
                <p>Barang tidak ditemukan.</p>
            )}
        </div>
    );
}

export default App;

