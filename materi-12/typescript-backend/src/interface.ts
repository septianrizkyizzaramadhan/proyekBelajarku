interface product {
    id: number,
    name: string,
    price: number
}

interface DigitalProduct extends product {
    downloadUrl: string
}

const produk: DigitalProduct = {
    id: 1,
    name: 'website',
    price: 1000000,
    downloadUrl: 'https://genesis.dev'
}

console.log(produk)