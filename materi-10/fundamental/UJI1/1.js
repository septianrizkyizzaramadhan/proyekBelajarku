const users = [
  { id: 1, name: "Revy", role: "admin" },
  { id: 2, name: "Andi", role: "user" },
  { id: 3, name: "Budi", role: "user" }
];

function getUserById(daftarUser, idYangDicari) {
    return daftarUser.find(user => user.id === idYangDicari ) ?? null; // jika id tidak ada maka output menjadi null 
}

console.log(getUserById(users, 21));