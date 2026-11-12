const users = [
    { id: 1, name: "Revy", age: 18, isActive: true },
    { id: 2, name: "Andi", age: 20, isActive: false },
    { id: 3, name: "Budi", age: 22, isActive: true }
];

// all user
function getAllUsers() {
    users = [...users]
}
console.log('SEMUA USER: ')
console.log(users)

// user by id
function getUserById(daftarUser, IdYangDicari) {
    return daftarUser.find(user => user.id === IdYangDicari) ?? null
}
console.log('\n id yang dicari: ')
console.log(getUserById(users, 2))

// create user
function createUser(id, name, age, isActive) {
    return {
        id,
        name, 
        age,
        isActive
    }
}
console.log('\n create user:')
console.log(createUser(4, 'rusdi', 19, true))

// user aktif filter
function userActive() {
    return users
        .filter(acc => acc.isActive === true)
}
console.log('\n user aktif: ')
console.log(userActive(users))

function getTotalUsers() {
    return users.length
}
console.log(`\n total user: ${getTotalUsers()}`)
