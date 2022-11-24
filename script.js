var r1

// Constructor de recetas
function receta(nombre, ncomensales, ingredientes, cantidad) {
    this.nombre = nombre;
    this.ncomensales = ncomensales;
    this.ingredientes = ingredientes;
    this.cantidad = cantidad;

    this.aniadir= function(x,y){
        ingredientes.push(x);
        cantidad.push(y);          
       }

    this.modificar = function(x,y){
        for(let i=0;i<r1.ingredientes.length;i++){
            if(r1.ingredientes[i]==x){
                r1.cantidad[i]=y
            }
        }
    }
    this.modificaComensales = function (x){
        r1.ncomensales = x
    }
}

// Función para crear una receta
function crearReceta() {
    r1= new receta (
        document.getElementById("nom").value,
        document.getElementById("com").value,
        document.getElementById("in").value.split(','),
        document.getElementById("ingr").value.split(',')
    )
    document.getElementById("nom").value=""
    document.getElementById("com").value=""
    document.getElementById("in").value=""
    document.getElementById("ingr").value=""
    console.log(r1);
}

// Función para modificar ingredientes
function aniade(){
    let ingredienteAModificar = document.getElementById('ingreAMod').value
    let cantidadAModificar = document.getElementById('cantAmod').value
    r1.aniadir(ingredienteAModificar,cantidadAModificar);
    console.log(r1)
    document.getElementById('ingreAMod').value=""
    document.getElementById('cantAmod').value=""
}
// Función para modificar ingredientes
function modificar(){
    let ingredienteAModificar = document.getElementById('ingreAMod').value
    let cantidadAModificar = document.getElementById('cantAmod').value
    r1.modificar(ingredienteAModificar,cantidadAModificar)
    console.log(r1)
    document.getElementById('ingreAMod').value=""
    document.getElementById('cantAmod').value=""
}
// Función para eleminar los comensales
function eliminar() {
    var ingredienteeliminar = document.getElementById('ingeliminar').value;
    for (let i = 0; i < r1.ingredientes.length; i++)
     {
        if (r1.ingredientes[i] == ingredienteeliminar) {
            r1.ingredientes.splice(i, 1);
            r1.cantidad.splice(i, 1);
        }
    }
    document.getElementById('ingeliminar').value=""
}
// Función para modificar el número de comensales
function modificaComensales(){
    let comenAModif = document.getElementById('comenModif').value
    r1.modificaComensales(comenAModif)
    document.getElementById('comenModif').value=""
}
// Función para mostrar la receta
function mostrarReceta(){
    document.getElementById('popup').style.width = "100%"
    let cant = ""
    for(let i=0;i<r1.ingredientes.length;i++){
        cant += r1.ingredientes[i]+ " - "+parseInt(r1.cantidad[i]*r1.ncomensales)+ " Gramos<br/>"
    }
    console.log(cant)
    let res = "Nombre receta: "+r1.nombre+"<br/>Número de comensales: "+r1.ncomensales+"<br/>Ingredientes y sus cantidades:<br/>"+cant
    document.getElementById('resultadoReceta').innerHTML = res
}
// Función para cerrar el popUp
function cerrarPop(){
    document.getElementById('popup').style.width = "0%"
}