console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
titulo:"",
autor:"",
imagen:"",
stock:0,
precio:0,
//url:'http://promero.pythonanywhere.com/productos/'+id,
//url:'http://localhost:5000/productos/'+id,
url:'https://fido9397.pythonanywhere.com/productos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id=data.id
this.titulo = data.titulo;
this.autor=data.autor
this.imagen=data.imagen
this.stock=data.stock
this.precio=data.precio
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let producto = {
titulo:this.titulo,
autor:this.autor,
precio: this.precio,
stock: this.stock,
imagen:this.imagen
}
var options = {
body: JSON.stringify(producto),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "../templates/libros.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')
