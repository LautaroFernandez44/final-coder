
const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

const carrito = JSON.parse(localStorage.getItem('carrito')) || [] // 1) Pero luego me di cuenta que el proceso era mucho más simple con un OR.
//document.addEventListener('DOMContentLoaded', () => {
//    localStorage.getItem('carrito') && carrito(JSON.parse(localStorage.getItem('carrito'))) //Recupero la información almacenada en el storage JSON con parse.
//actualizarCarrito()
    
//}) // 1) Primero utilicé el operador lógico AND. A diferencia del código previo dónde utilizaba un if. 

    //if (localStorage.getItem('carrito')){
    //carrito = JSON.parse(localStorage.getItem('carrito')) //Recupero la información almacenada en el storage JSON con parse.
    //actualizarCarrito()}

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Peso: ${producto.peso}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)
    
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        //Función para agregar al carrito.
        agregarAlCarrito(producto.id)
        //
    })
})

//Agrego al carrito.
const agregarAlCarrito = (prodId) => {

    //Aumento cantidad.
    const existe = carrito.some (prod => prod.id === prodId) //Para comprobar si ya existe.

    if (existe){ //Si existe, actualizo cantidad.
        const prod = carrito.map (prod => { //Array iterado que aumenta cantidad si encuentra dos elementos iguales con la ayuda de map.
            if (prod.id === prodId){
                prod.cantidad++
            } //Aquí me gustaría aplicar algún ternario pero no sé cómo hacerlo correctamente.
        })
    } else { //Si no encuentra, se agrega.
        const item = stockProductos.find((prod) => prod.id === prodId)
        //Obtengo ID y hago un push al carrito.
        carrito.push(item)
    }
    //Busco el item, lo agrego al carrito y llamo a la funcion actualizarCarrito.

    actualizarCarrito() //Actualizo el carrito.
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busco el elemento y obtengo su índice.

    carrito.splice(indice, 1) //Para borrar items.
    actualizarCarrito() //Actualizo cuando borra.
    console.log(carrito)
}

const actualizarCarrito = () => {
    
    
    contenedorCarrito.innerHTML = "" 

    //Por cada producto creé un div y le hice un append al contenedor Carrito.
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito)) //Convierto a mi carrito en JSON.

    })

    contadorCarrito.innerText = carrito.length //Actualizo con la longitud del carrito.
    
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto sumo precio.
    

}

//Añadí Toastify! 

const btn = document.querySelector('#vaciar-carrito')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Carrito Vaciado Exitosamente',
        text: 'Hecho!',
        icon: 'success',
        confirmButtonText: 'Cool'
})
})


const cargarGatito = async () => {
    try{
        const respuesta = await fetch('https://api.thecatapi.com/v1/images/search')
        console.log(respuesta)
        if (respuesta.status===200){
            const datos = await respuesta.json()
            console.log(datos)

            let catApi = ''
            catApi = catApi + `<img src="${datos[0].url}"></p>`

            document.getElementById('gatito').innerHTML = catApi

            
        }
    } catch (error)  {

    }
}

cargarGatito() //Consumí una API de gatitos que responde con un url de una imágen. 

