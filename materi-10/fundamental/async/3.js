function getUser() {
    return new Promise((resolve, reject) => {
        const sukses = true

        if (sukses === true) {
            setTimeout(() => {
                resolve ({id: 1, name: "Revy"})
            }, 2000);
        }
        if (sukses === false) {
            reject (new Error('Failed to fetch user'))
        }
    })
}

async function main() {
    try {
        console.log('mengambil data...')

        const user = await getUser() 
        console.log(user)
    } catch (err) {
        console.log(err.message)
    }
}
main()