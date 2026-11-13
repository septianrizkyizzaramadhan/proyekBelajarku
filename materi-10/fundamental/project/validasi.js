const users = [
    {id: 1, username: 'revy', age: 18, email: 'revy@genesis.dev', password: '1234'}
]

function createUser(id, username, age, email, password) {
    try {
        if (!id || !username || !age || !email || !password) {
            return {success: false, message: 'mohon lengkapi data anda!'}
        }
        if (age < 18) {
            return {success: false, message: 'mohon maaf usia anda tidak memenuhi syarat'}
        }
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            return {success: false, message: 'email tidak valid'}
        }
        const idExit = users.some(user => user.id === id || user.email === email)
        if (idExit) {
            return {success: false, message: 'ID dan email telah digunakan username lain, mohon gunakan data lain!'}
        } else {

            const newUser = {
                id, 
                username,
                age,
                email,
                password,
            } 

            users.push(newUser)
            return {
                success: true,
                    message: 'user berhasil dibuat',
                    data: newUser
            }
        }

    } catch (err) {
        console.log(err.message)
    }
}
console.log(createUser(users.length + 1, 'rephy', 29, 'rephy@genesis.dev', '12345'))
