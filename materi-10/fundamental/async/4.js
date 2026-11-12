function getUser() {
    const sukses = true
    return new Promise((resolve, reject) => {
        if (sukses === true) {
            setTimeout(() => {
                resolve({id: 1, name: 'revy'})
            }, 1000);
        } else {
            reject (new Error('gagal'))
        }
    })
}

function getUserPost() {
    const sukses = true

    return new Promise((resolve, reject) => {
        if (sukses === true) {
            setTimeout(() => {
                resolve('Belajar Node.js')
            }, 2000)
        } else {
            reject (new Error('gagal2'))
        }
    })
}

async function main() {
    try {
        const [user, post] = await Promise.all([
            getUser(),
            getUserPost()
        ])
        console.log('user: ', user)
        console.log('post: ', post)
    } catch (err) {
        console.log(err.message)
    }
}
main()