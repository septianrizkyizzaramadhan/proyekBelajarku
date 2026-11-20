type product = 'laptop' | 'phone' | 'tablet'
type productStock = Record<product, number>

const permission: productStock = {
    laptop: 10,
    phone: 20,
    tablet: 15

}

console.log(permission)