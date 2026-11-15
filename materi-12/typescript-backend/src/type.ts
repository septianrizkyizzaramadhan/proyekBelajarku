type orderStatus = 'pending' | 'processing' | 'completed' | 'cancelled'

interface order {
    id: number,
    productName: string,
    status: orderStatus
}

const orders: order = {
    id: 1,
    productName: 'laptop',
    status: "cancelled"
}

console.log(orders)