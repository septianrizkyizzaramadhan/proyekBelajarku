const antreanServis = [
  { id: 1, nama: "Revy", motor: "Honda BeAT", status: "Proses" },
  { id: 2, nama: "Budi", motor: "Yamaha NMAX", status: "Selesai" },
  { id: 3, nama: "Andi", motor: "Honda Vario", status: "Proses" },
  { id: 4, nama: "Joko", motor: "Suzuki Satria", status: "Selesai" }
];

const motorMasihProses = antreanServis.filter(item => {
    return item.status === 'Proses'
})

console.log(motorMasihProses)