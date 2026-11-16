interface product {
    id: number,
    name: string,
    price: number
}

const produk: Readonly<product> = {
    id: 1,
    name: 'handphone',
    price: 12000000
}

produk.id = 2

console.log(produk)