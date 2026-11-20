interface User {
    id: number,
    username: string,
    email: string,
    password: string
}

type publicUser = Pick<User, 'id' | 'username' | 'email'>

function updateUser(data: publicUser) {
    console.log(data)
}

updateUser({
    id: 1,
    username: 'revy',
    email: 'revy@genesis.dev'
})