//Array de productos.

const stockProductos = [
    {id: 1, nombre: "Comida 1", tipo: "comida", cantidad: 1, desc: "Lo mejor para tu amigo", precio: 4099, peso: "4kg", img: '../assets/img/Whiskas.jpg'},
    {id: 2, nombre: "Comida 2", tipo: "comida", cantidad: 1, desc: "Lo mejor para tu amigo", precio: 10999, peso: "15kg", img: '../assets/img/Catchow.png'},
    {id: 3, nombre: "Comida 3", tipo: "comida", cantidad: 1, desc: "Lo mejor para tu amigo", precio: 8199, peso: "10kg", img: '../assets/img/Agility.jpg'},
    {id: 4, nombre: "Comida 4", tipo: "comida", cantidad: 1, desc: "Lo mejor para tu amigo", precio: 15399, peso: "30kg", img: '../assets/img/Starprime.jpg'},

]

// const stockProductos = {id: 1, nombre: "Comida 1", tipo: "comida", cantidad: 1, desc: "Lo mejor para tu amigo", precio: 4099, peso: "4kg", img: '../assets/img/Whiskas.jpg'} 

// const {id, nombre, tipo, cantidad, desc, precio, peso, img} = stockProductos (Cuándo lo quiero desestructurar me saltan errores. Me gustaría desestructurar el array completo de objetos pero eso no lo vimos en clase, entonces no sé cómo hacerlo. D:)


console.log(...stockProductos) //Apliqué spread.  