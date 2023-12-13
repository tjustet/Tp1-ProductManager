const arrayproductos = [
    {
        ID: 0,
        nombre: '',
        price: '',
        stock: ''
    }
]

let ID=0;

function getProducts(nombre, price, stock) {
    let nuevoProduct = {
        ID,
        nombre,
        price,
        stock
    }

    let i = 0
    while (arrayproductos.length >= i){
        console.log(i)
        i++
        if (arrayproductos[i].nombre != nombre){
            arrayproductos.splice(ID, 0,nuevoProduct);
            for (let i=1; i<=ID; i++) {
                console.log(arrayproductos[i])
            }
            return addProduct()
        } else {
            console.log("El elemento Existente")
            return addProduct()
        }
    }
}

function addProduct() {
    ID++;
    const nombre = prompt('nombre del producto: ')
    const price = prompt('Precio del producto: ')
    const stock = prompt('Stock del producto: ')
    return getProducts(nombre, price, stock)
}


addProduct()



