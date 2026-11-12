const transactions = [
  { id: 1, amount: 50000, status: "success" },
  { id: 2, amount: 25000, status: "failed" },
  { id: 3, amount: 100000, status: "success" },
  { id: 4, amount: 75000, status: "pending" }
];

const totalHarga = transactions
    .filter(status => status.status === 'success')
    .reduce((produk, harga) => {
        return produk + (harga.amount)
    }, 0)

    console.log(totalHarga)