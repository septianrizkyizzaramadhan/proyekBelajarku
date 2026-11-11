function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'revy'
            })
        }, 1000);
    })
}

async function  main() {
    console.log('mengambil data...')
    const user = await getUser()
    console.log(user)
}
main()