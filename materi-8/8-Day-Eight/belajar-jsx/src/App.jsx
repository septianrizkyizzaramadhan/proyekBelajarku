import { useState } from "react";

function App() {
    const [teksInput, setTeksInput] = useState('');
    const [daftarTugas, setDaftarTugas] = useState([
        'Belajar dasar React',
        'Memahami funsi useState'
    ])

    const tambahTugas = (e) => {
        e.preventDefault();

        if (teksInput.trim === '') {
            setDaftarTugas([...daftarTugas, teksInput])
        }

        setTeksInput()
    }
}

