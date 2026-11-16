interface Product {
    id: number;
    name: string;
    price: number;
    status: boolean;
}

type ProductPreview = Pick<Product, 'name' | 'price'>;

function updateUser(data: ProductPreview) {
    console.log(data)
}

updateUser({
    name: 'laptop',
    price: 150000000
})