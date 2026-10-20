const keranjang = [
  { nama: "Oli Mesin", harga: 50000, jumlah: 2 }, // Total: 100.000
  { nama: "Busi", harga: 20000, jumlah: 4 },        // Total: 80.000
  { nama: "Kampas Rem", harga: 75000, jumlah: 1 }   // Total: 75.000
];

const totalHarga = keranjang.reduce((total, item) => {
    const subTotal =  item.harga * item.jumlah
    return subTotal + total
}, 0)

console.log(totalHarga)