const users = [
    { id: 1, name: "Revy", age: 18, isActive: true },
    { id: 2, name: "Andi", age: 20, isActive: false },
    { id: 3, name: "Budi", age: 22, isActive: true }
];

// all user
function getAllUsers() {
    return users
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
const user = []
function createUser(id, name, age, isActive) {
    const idExit = user.some(user => user.id === id)
    if (idExit === id) {
        throw new Error('ID sudah digunakan, gunakan ID lain!')
    } 

    const newUser = {
        id,
        name, 
        age,
        isActive
    }

    user.push(newUser)
    return newUser

}
console.log('\n create user:')
console.log(createUser(1, 'rusdi', 19, true))

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
