import { useState } from "react";

function App() {
    const [sparepart] = useState([
        {id: 1, nama: 'Oli Mesin', harga: 45000},
        {id: 2, nama: 'Kampas Rem', harga: 60000},
        {id: 3, nama: 'Busi', harga: 15000}
    ])

    const totalBiaya = sparepart.reduce((total, item) => {
        return total + item.harga
    }, 0)



return(
    <div>
        <h2>Rincian harga sparepart</h2>
        <ul>
            {sparepart.map((item) => (
                <li key={item.id}>
                    {item.nama} - {item.harga.toLocaleString()}
                </li>
            ))}
        </ul>

        <hr/>

        <h3>Total biaya: {totalBiaya.toLocaleString()}</h3>
    </div>
)
}

export default App