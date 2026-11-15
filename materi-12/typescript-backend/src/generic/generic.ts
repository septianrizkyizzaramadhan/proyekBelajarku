interface ApiResponse<T> {
    success: boolean,
    message: string,
    data: T
}

interface product {
    id: number,
    name: string,
    price: number
}

const response: ApiResponse<product> = {
    success: true,
    message: '',
    data: {
        id: 1,
        name: 'handphone',
        price: 2000000
    }
}

console.log(response)