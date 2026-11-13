const users = [
    { id: 1, username: 'revy', age: 18, email: 'revy@genesis.dev' },
    { id: 2, username: 'andi', age: 20, email: 'andi@gmail.com' },
    { id: 3, username: 'budi', age: 22, email: 'budi@gmail.com' }
];

function getUserFromAPI(id) {

    return new Promise((resolve, reject) => {

        const founderId = users.find(user => user.id === id)

        if (founderId) {
            setTimeout(() => {
                resolve(founderId)
            }, 1000);
        } else {
            reject (new Error('User not found'))
        }
    })
}


async function main() {
    try {
        console.log('mengambil data...')
        
        const user = await getUserFromAPI(99)
        console.log(user)
    } catch(err) {
        console.log(err.message)
    }
}
main()