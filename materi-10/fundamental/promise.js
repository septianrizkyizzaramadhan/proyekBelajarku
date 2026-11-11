const getUser = new Promise((resolve, reject) => {
    const sukses = true

    if(sukses) {
        resolve({ id: 1, name: 'revy', role: "backend"})
    } else {
        reject(new Error('gagal mengambil user'))
    }
})

getUser
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err.message)
    })