const products = [
    {
        id: "1",
        name: "Iphone12",
        price: 1000,
        category: "celular",
        img: "link",
        stock: 25,
        description: "Descripcion de Iphone 12"
    },
    {
        id: "2",
        name: "Iphone12",
        price: 1000,
        category: "celular",
        img: "link",
        stock: 25,
        description: "Descripcion de Iphone 12"
    },
    {
        id: "3",
        name: "Iphone12",
        price: 1000,
        category: "celular",
        img: "link",
        stock: 25,
        description: "Descripcion de Iphone 12"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}