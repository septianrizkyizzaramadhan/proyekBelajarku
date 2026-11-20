interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

function updateUser(user: Partial<User>) {
    console.log(user)
}

updateUser({
    id: 1,
    username: 'revy'
})

