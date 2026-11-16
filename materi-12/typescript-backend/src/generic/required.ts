interface product {
    id: number,
    name: string,
    price?: number,
    description?: string
}

type publicUser = Required<product>

function updateUser(data: publicUser) {
    console.log(data)
}

updateUser({
    id: 1,
    name: 'handphone',
    price: 120000000,
    description: 'oddo roni 12 promax'  
})