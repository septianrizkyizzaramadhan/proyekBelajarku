const nilaiSiswa = [75, 40, 90, 60, 85, 30, 100];

const status = nilaiSiswa
    .filter(nilai => nilai > 75)
    .map(nilai => `${nilai}-LULUS`)

console.log(status)