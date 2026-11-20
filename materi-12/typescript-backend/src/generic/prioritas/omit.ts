interface User {
    id: number,
    username: string,
    email: string,
    password: string
}

type safeUse = Omit<User, 'password' | 'email'>

function getSafeUser(user: safeUse) {
    console.log(user)
}

getSafeUser({
    id: 1,
    username: 'revy',
});