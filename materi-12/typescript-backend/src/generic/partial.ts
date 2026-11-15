interface product {
    id: number,
    name: string,
    price: number,
    description: string
}

function updateProduct(data: Partial<product>) {
    console.log(data)
}

updateProduct({
    price: 2500000
})