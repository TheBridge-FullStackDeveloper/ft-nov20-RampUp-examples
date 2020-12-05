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
    //alert("He salido del H1");
    titulo.setAttribute("style","background-color:white");
    titulo.innerHTML = "Probando arrays y funciones";
    
})



console.log(document.getElementById('miId1').title) // uno
console.log(document.querySelector('#miDiv .miClase').title) // cinco
console.log(document.querySelector('#miDiv #miId1.miClase').title) // uno
console.log(document.querySelector('#miDiv .miClase[title^=u]').title)// uno


//Ejercicios DOM:
//Hacer un boton que esconda/enseñe el texto de un parrafo cada vez que se pulsa el mismo boton. Por defecto, el párrafo debe estar visible
//document.getElementById("myP").style.visibility = "hidden";
//document.getElementById("p4").style.visibility ="visible";

/* document.getElementById("boton").addEventListener("click",function(){
    var estado = document.getElementById("p4").style.visibility; 
    
    if(estado=="visible"){
        document.getElementById("p4").style.visibility="hidden";
    }
    else{ // está escondido
        document.getElementById("p4").style.visibility="visible";
    }
}); */
document.getElementById("boton").addEventListener("click",function(){
    document.getElementById("p4").classList.toggle("agradecimiento");
})



/* Hacer que con onmouseover y mouseout, se muestre/esconda un parrafo escondido, cuando pases el raton sobre el otro parrafo */

document.getElementById("p2").addEventListener("mouseover",function(){
    document.getElementById("p3").classList.toggle("agradecimiento");
});

document.getElementById("p2").addEventListener("mouseout",function(){
    document.getElementById("p3").classList.toggle("agradecimiento");
});


/* Crea un objeto de nombre Avion que tenga las propiedades: numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando'  */

let Avion = {
	numPasajeros:100,
	destino: "paris",
	despegar: function (orig){
		console.log(`despegando desde ${orig}`)
	},
	volar: function(){
		console.log(`volando a ${this.destino}`)
	},
	aterrizar: function(){
		console.log(`aterrizando en ${this.destino}`)
	}
}

// Selectores
// Modificar clases CSS
/*
Añadir una clase - el.classList.add(className);
Verificar una clase - el.classList.contains(className);
Eliminar una clase - el.classList.remove(className);
Alternar una clase - el.classList.toggle(className);
Remplazar una clase - element.classList.replace('old', 'new');
*/


// Otros selectores
/*
document.getElementsByTagName("p")[0].id
document.getElementsByTagName("p")[0].innerText
documents.getElementsByClassName("nombreclase")
documents.getElementsByClassName("nombreclase")
document.getElementsByName("fname")[0].value;
*/

// Modificar clases CSS
/*
Añadir una clase - el.classList.add(className);
Verificar una clase - el.classList.contains(className);
Eliminar una clase - el.classList.remove(className);
Alternar una clase - el.classList.toggle(className);
Remplazar una clase - element.classList.replace('old', 'new');
*/

//Query Selector
console.log(document.getElementById('miId1').title) // uno
console.log(document.querySelector('#miDiv .miClase').title) // cinco
console.log(document.querySelector('#miDiv #miId1.miClase').title) // uno


// querySelectorAll

//let allButtons = document.querySelectorAll(".btn.red");
//let myForm = document.querySelector("#dataForm");

console.log(document.querySelectorAll('#miDiv .miClase')) // [<span id="miId5" ... ]

console.log(document.querySelectorAll('p')) // todos los parrafos
/*
document.querySelectorAll('div, img') // todos los divs e imágenes
document.querySelectorAll('a > img') // todos las imágenes contenidas en enlaces
*/


// Formulario
document.getElementById("formulario").addEventListener("submit",function(event){
    console.log("holaaaa");
    // para el envio del formulario
    event.preventDefault();

    let nombre = document.getElementById("fname").value;
    let apellido = document.getElementById("lname").value;
    
    let acepta = document.getElementById("acepta").checked;
    console.log("Has aceptado???: "+acepta);
    //console.log(nombre);
    //console.log(apellido);
    if(nombre == "" || apellido == "" || acepta == false){
        console.log("Porfa, rellene todos los campos!!!!!");
        document.getElementById("mensaje").innerText = "Porfa, rellene todos los campos!!!!!";
        document.getElementById("mensaje").setAttribute("class","warning");
    }
    else{
        //Enviar formulario
        console.log("Se envia el formulario!!!");
        // Hace que continúe el envío formulario (de momento la URL no existe)
        // Descomentar siguiente línea para terminar envío de formulario
        //event.target.submit();
    }

 



})



