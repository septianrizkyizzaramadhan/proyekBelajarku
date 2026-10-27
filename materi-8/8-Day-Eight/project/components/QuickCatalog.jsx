'use client'

import { useState } from "react"

export default function home() {
    const [items, setItems] = useState(['Laptop', 'Keyboard'])
    const [input, setInput] = useState('')

    function addItem() {
        if (input.trim === '') return

        setItems((prevItems) => [...prevItems, input])

        setInput('')
    }

    return (
        <main>
            <h1>Daftar Barang</h1>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="masukkan nama barang" />

            <button onClick={addItem}>tambah barang</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </main>
    )
}