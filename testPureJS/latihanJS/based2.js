const kotakAlat = [
  { nama: "Kunci Pas", harga: 15000, status: "Baik" },
  { nama: "Obeng", harga: 10000, status: "Rusak" },
  { nama: "Dongkrak", harga: 150000, status: "Baik" },
];

const totalSemuaHarga = kotakAlat.reduce((hargaSementara, item) => {
    return hargaSementara  + item.harga
}, 0)
console.log(totalSemuaHarga)