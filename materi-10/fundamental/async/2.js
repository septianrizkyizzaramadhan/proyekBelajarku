function getProduct(){
   return new Promise((resolve, reject) => {
        const sukses = true

        if (sukses ) {
            resolve ({ id: 1, name: "Laptop", price: 8000000 })
        }
        if (!sukses) {
            reject (new Error("Product not found"))
        }
    })
}

async function main() {
    try {
        const produk = await getProduct()
        console.log(produk)
    } catch (err) {
        console.log(err.message)
    }
}

main()