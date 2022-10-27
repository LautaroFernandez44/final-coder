//Separé el javascript para mayor claridad. Ésta es la parte del carrito.

const contenedorShop = document.getElementsByClassName('shop-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const shopCarrito = document.getElementsByClassName('shop-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorShop.classList.toggle('shop-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorShop.classList.toggle('shop-active')
})

contenedorShop.addEventListener('click', (event) =>{
    contenedorShop.classList.toggle('shop-active')

})
shopCarrito.addEventListener('click', (event) => {
    event.stopPropagation() //Stop con click.
    
})