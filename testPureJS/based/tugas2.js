const userProfile = {
  id: 42,
  username: "septianrizky",
  profile: {
    namaLengkap: "Septian Rizky",
    peran: "Frontend Developer",
    lokasi: "Solo"
  },
  aktif: true
};

const {namaLengkap, peran} = userProfile.profile

console.log(`nama: ${namaLengkap} peran: ${peran}`)