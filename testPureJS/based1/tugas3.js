const ambilDataServis = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve('Data servis berhasil ditarik dari server')
        }, 1000)
    })
}

const jalankanApp = async () => {
    console.log('memuat data...')
    const hasil = await ambilDataServis()

    console.log(hasil)
}

jalankanApp()