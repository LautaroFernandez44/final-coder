// let cantidad = prompt(`Vamos a calcular el promedio de edad de tus mascotas. Ingresá cuantas mascotas tenés.`)
// let nombres = prompt(`Ingresá sus nombres`)
// let eM; //(eM = Edad de las mascotas). Acá se registran las edades.
// let sE = 0; //(sE= Sumatoria de edades). Acá se acumulan.
// let n; //Esto para que muestre el número correctamente.


// function sumar(num1, num2) {
//    const resultado = num1 + num2 //Agregué una funcion para sumar.
//    return resultado;
// }

// function pedirDatosMascota() {
//    const edad = parseInt(prompt(`Ingresá la edad en años de tu mascota número `+n)); //Función para pedir datos.
//    return edad;
// }

// function mostrarPromedio() {

//    alert(`${nombres} llevan haciéndote feliz ${sE/cantidad} años en promedio. Dales sus buenas caricias por éso =)`)

//    //Función para mostrar promedio.
// }


// for(n=1;n<=cantidad;){
//     eM = pedirDatosMascota();

//     if (isNaN(eM)) {
//         alert('No es un número'); //Agregué la alerta por ingresar un string acompañado de un condicional.

//       } else {
//          sE = sumar(sE, eM)
//          n++
//    }

// }

// mostrarPromedio();

// const Felicitaciones = ["¡Tú y tus mascotas son geniales!", "¡Nada como los buenos amigos!", "¡Que los miaus y los woofs te acompañen!", "¡Lindo día para salir a pasear!", "¡Mi comida no se va a comprar sola!", "¡Quiero caricias en la panza!", "¡Esos muebles se ven masticables!"]; //Incorporé un array para guardar las felicitaciones si llegase a tocar un promedio justo!


// if (sE/cantidad===1){
//    console.log(Felicitaciones[0])
// } else if (sE/cantidad===2){
//    console.log(Felicitaciones[1])
// } else if (sE/cantidad===3){
//    console.log(Felicitaciones[2])
// } else if (sE/cantidad===4){
//    console.log(Felicitaciones[3])
// } else if (sE/cantidad===5){
//    console.log(Felicitaciones[4])
// } else if (sE/cantidad===6){
//    console.log(Felicitaciones[5])
// } else {console.log("¡Que sean felices por siempre juntos!")}

// console.log( "En éste array existían " +Felicitaciones.length +" Felicitaciones posibles y te tocó la correspondiente al promedio de edad " + `${sE/cantidad}`); //Utilicé la propiedad "lenght" para imprimir por consola la cantidad de felicitaciones contenidas en el array

// //Agregué el método de búsqueda y filtrado de array "IndexOf" y le di salida por consola.

// if (sE/cantidad===1){
//    console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Tú y tus mascotas son geniales!"))
// } else if (sE/cantidad===2){
//    console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Nada como los buenos amigos!"))
// } else if (sE/cantidad===3){
//    console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Que los miaus y los woofs te acompañen!"))
// } else if (sE/cantidad===4){
//    console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Lindo día para salir a pasear!"))
// } else if (sE/cantidad===5){
//    console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Mi comida no se va a comprar sola!"))
// } else if (sE/cantidad===6){
//    console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Quiero caricias en la panza!"))
// } 


// //Construí un objeto que voy a utilizar en el futuro.

// class Mascota{
//    constructor(nombre, edad, especie) {
//        this.nombre = nombre;
//        this.edad   = edad;
//        this.especie  = especie;
//    }
//    hablar(){
//        console.log("Hola yo soy "+ this.nombre+ " Tengo "+ this.edad+ " años y soy un " + this.especie);
//    }
// }
// const mascota1 = new Mascota("Jacky", 5, "Gatito");
// mascota1.hablar();


// //Agregué un objeto "Date" para clarificar la hora de juego con salida por consola.


// console.log( "El día y la hora a la que jugaste "+new Date() )



// //Defini el innerHTML del elemento con una plantilla de texto.

// const michis = [{ id: 1,  nombre: "Soldado", edad: 12 },
//                   {  id: 2,  nombre: "Andromeda", edad: 5 },
//                   {  id: 3,  nombre: "Platón"  , edad: 7},
//                   {  id: 4,  nombre: "Merlín" , edad: 10}];

// //Iteré el array con "for...of"

// for (const animales of michis) {
//     let contenedor = document.createElement("div");
    
//     contenedor.innerHTML = `<h3> ¡Hola! Yo soy el michi número ${animales.id} :D </h3>
//                             <p>  Mi nombre es: ${animales.nombre}</p>
//                             <b> Y tengo ${animales.edad} añitos :3 </b>`;
//     document.body.appendChild(contenedor);
// }

// //Le dí la órden de crear nodos modificando el DOM con el nombre de los gatitos en el array.

// //Manipulé el DOM de mi HTML a través de un evento. Añadiendo un event listener y una respuesta que en este caso crea un nuevo gatito. 

// let boton = document.getElementById("btnPrincipal")
//       boton.addEventListener("click", respuestaClick)
//       function respuestaClick(){
//         console.log("¡Soy Ever!");
//         document.body.append(parrafo);
//       }

// let parrafo = document.createElement("p");
      
// parrafo.innerHTML = "<h2> Yo soy el quinto michi y me llamo Ever :3 </h2>"


//Comenté todo el código anterior para comenzar con el simulador final. =)


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

