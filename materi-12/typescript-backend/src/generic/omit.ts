interface user {
    id: number,
    username: string,
    email: string,
    password: string
}
type publicUser = Omit<user, 'password' | 'email'>

function updateUser(data: publicUser) {
    console.log(data)
}

updateUser({
    id: 1,
    username: 'revy',
})