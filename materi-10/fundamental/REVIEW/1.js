const users = [
  { id: 1, name: "Revy", status: "active" },
  { id: 2, name: "Andi", status: "inactive" },
  { id: 3, name: "Budi", status: "active" },
];

const user = users
    .filter(item => item.status === 'active')
    .map(name => name.name)

console.log(user)