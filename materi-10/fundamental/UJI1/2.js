const users = [
  { id: 1, name: "Revy", role: "admin" },
  { id: 2, name: "Andi", role: "user" },
  { id: 3, name: "Budi", role: "user" },
  { id: 4, name: "Dina", role: "admin" }
];

function getUsersByRole(daftarUser, role) {
    return daftarUser.filter(user => user.role === role)
}

console.log(getUsersByRole(users, "s"));