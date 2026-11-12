const getUser = new Promise((resolve, reject) => {
    const sukses = true

    if (sukses) {
        resolve('hallo world')
    } else {
        reject('gagal')
    }
})


getUser

    .then(user => {
        console.log(user)
    })
    .catch(err => {
        console.log(err.message)
    })