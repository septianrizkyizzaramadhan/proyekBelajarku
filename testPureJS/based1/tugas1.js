// Destructuring & Array of Objects

const daftarMotor = [
  { id: 1, merk: "Honda BeAT", cc: 110, status: "Tersedia" },
  { id: 2, merk: "Yamaha NMAX", cc: 155, status: "Diservis" },
  { id: 3, merk: "Honda Vario", cc: 125, status: "Tersedia" }
];

daftarMotor.map(({ merk, cc, status }) => {
  console.log(`Merk: ${merk}, CC: ${cc}, Status: ${status}`);
});

