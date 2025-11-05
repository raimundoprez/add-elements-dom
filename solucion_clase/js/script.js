// Capturar los elementos que voy a utilizar id:Lista, id:agregar OK
// prompt para escribir y guardar el dato a mostrar OK
// Cuando pulse el botón agregar tiene que salir el prompt y a al aceptar se añadirá a la lista OK
// Necesitaré hacerlo con propiedades de JS que cree un elemento, ñada el dato dentro y pueda escribirlo en la pantalla OK
// CSS muy bonitas

const lista = document.getElementById("lista")
const agregar = document.getElementById("agregar")
const input = document.getElementById("input")

// agregar.addEventListener("click", function() {
//   const producto = prompt("Añade un producto")
//   if(producto && producto.trim() !== "") {
//     const li = document.createElement("li")
//     li.textContent = producto
//     lista.appendChild(li)
//   }
// })

// agregar.addEventListener("click", function() {
//   const producto = input.value
//   if(producto && producto.trim() !== "") {
//     const li = document.createElement("li")
//     li.textContent = producto
//     lista.appendChild(li)
//     input.value = ""
//   }
// })

agregar.addEventListener("click", function() {
  const producto = input.value
  if(producto && producto.trim() !== "") {
    lista.innerHTML += `<li>${producto}</li>`
    input.value = ""
  }
})





