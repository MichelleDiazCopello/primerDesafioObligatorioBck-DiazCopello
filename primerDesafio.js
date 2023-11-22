class ProductManager {
    constructor () {
        this.products = [];
    }

    addProduct ( title, description, price, thumbnail, code, stock) {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        this.products.push ( product );
    }    
}

// Validar que no se repita el campo “code” y que todos los campos sean obligatorios
// Al agregarlo, debe crearse con un id autoincrementable
// Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
// Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
// En caso de no coincidir ningún id, mostrar en consola un error “Not found”


// Formato del entregable

// Archivo de Javascript listo para ejecutarse desde node.
// Proceso de testing de este entregable ✅
