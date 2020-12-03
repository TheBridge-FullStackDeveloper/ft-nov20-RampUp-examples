// Objetos
let persona = {
    id: 1,
    nombre:"Alex",
    direccion:"recoletos",
    dni:"11327637A",
    saludar: function(){
        console.log("Buenos días amiguis. Me llamo "+this.nombre);
    }
};

console.log(persona["id"]);
console.log(persona.id);

//Ejecutar función
persona.saludar();
persona["direccion"] = "Puerta del SOL"; // cambia valor
console.log(persona.direccion);

//borrar
delete persona["dni"];
console.log(persona);

/* Crea un objeto de nombre Avion que tenga las propiedades: numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando' */


// DOM
document.getElementById("resultado").innerHTML = "Hola desde mi JS";

//Crear parrafo desde JS
//Crear Texto
let texto = document.createTextNode("Hola Nodo!");
// Crear etiqueta P
let parrafo = document.createElement("p");
parrafo.setAttribute("class","parrafillo");

//Anexar el texto a la etiqueta
parrafo.appendChild(texto);

//anexar al HTML
document.body.appendChild(parrafo);
console.log(parrafo);

//Jugando con template string

let a = 2;
let b = 3;
console.log("Resultado"+a+"+"+b+"="+(a+b))
console.log(`Resultado: ${a} + ${b} = ${a+b}`) 

/* 
Ejercicios DOM:
1- Añadir dos elementos <li> a un <ul>, y unirlos al DOM de tu página HTML
	Usar:
	- innerHTML
	- appendChild()
	- createElement()
	- createAttribute()
    - createTextNode()
*/

// Textos

function crearLista(){
    let txt1 = document.createTextNode("Me gustan las 'Papas'");
    let txt2 = document.createTextNode("Ensalada");
    let txt3 = document.createTextNode("mi lista de comida");
    // Elementos
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let ul = document.createElement("ul");
    let cabecera = document.createElement("h3");

    cabecera.appendChild(txt3);
    // junta nodos LIs con textos
    li1.appendChild(txt1);
    li2.appendChild(txt2);

    //Juntar nodo UL con nodos LIs
    ul.appendChild(li1);
    ul.appendChild(li2);

    // Unir lista al div con id=lista
    document.getElementById("lista").appendChild(cabecera);
    document.getElementById("lista").appendChild(ul);
}

//Listener para el botón
document.getElementById("alerta").addEventListener('click',function(){
    alert("has pulsado!!!!");
})
// Crear lista
document.getElementById("productos").addEventListener('click',crearLista);

// Cambiar valor de h1
let titulo = document.getElementById("titulo");

titulo.addEventListener('mouseover',function(){
    titulo.setAttribute("style","background-color:red");
    //titulo.setAttribute("class","colorfondo");
    titulo.innerHTML = "Me encanta que esto funcione";
})

titulo.addEventListener('mouseout',function(){
    alert("He salido del H1");
    titulo.setAttribute("style","background-color:white");
    titulo.innerHTML = "Probando arrays y funciones";
    
})




