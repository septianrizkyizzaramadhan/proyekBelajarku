const antreanServis = [
  { id: 1, nama: "Revy", motor: "Honda BeAT", status: "Proses" },
  { id: 2, nama: "Andi", motor: "Honda Vario", status: "Proses" },
  { id: 3, nama: 'Riko', motor: 'Lambo Hijau', status: 'Proses'}
];

const servisSelesaiSemua = antreanServis.map(item => {
    if (item.status === 'Proses') {
        return { ...item, status: 'Selesai' };
    }
    return item;
});

console.log(servisSelesaiSemua)