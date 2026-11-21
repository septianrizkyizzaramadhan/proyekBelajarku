interface admin {
    username: string,
    role: 'ADMIN'
}

interface clinet {
    username: string,
    role: 'client'
}

function getUser(user: admin | clinet) {
    if(isAdmin(user)) {
        console.log('admin', user.username)
    } else {
        console.log('client', user.username)
    }
}

getUser()