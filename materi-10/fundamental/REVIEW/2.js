const products = [
  { name: "Laptop", price: 8000000, available: true },
  { name: "Mouse", price: 150000, available: true },
  { name: "Keyboard", price: 300000, available: false },
  { name: "Monitor", price: 2000000, available: true },
];

const totalHarga = products
  .filter(status => status.available === true)
  .reduce((index, harga) => {
    return index + (harga.price)
  }, 0)

  console.log(totalHarga)
  