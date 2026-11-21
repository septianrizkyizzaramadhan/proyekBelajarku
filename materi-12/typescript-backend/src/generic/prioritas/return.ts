interface Admin {
    id: number,
    username: string,
    email: string,
    role: 'Admin'
}

interface User {
    id: number,
    username: string,
    email: string,
    role: 'User'
}

function isAdmin(user: Admin | User): user is Admin {
    return user.role === 'Admin'
}

function getUser(user: Admin | User) {
    if (isAdmin(user)) {
        console.log('ADMIN: ', user.username)
    } else {
        console.log('User: ', user.username)
    }
}

const user1: Admin = {
    id: 1,
    username: 'revy',
    email: 'revy@genesis.dev',
    role: 'Admin'
}

getUser(user1)