// Declarar funciones
function sumar(a,b){
    let resultado = a + b;
    // ...
    //if
    //while
    if(a<0 || b<0){
        console.log("porfa, introduce sólo num positivos");
        return undefined;
    } //a>=0 y b>=0
        
    return resultado;
    console.log(resultado);
}
function restar(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;
}
let dividir = function(a,b){
    return a/b;
}
// Arrow function
let calculaResto = (a,b) => a%b;


//Ejecutar funciones
let suma = sumar(2,2);
console.log("La suma es:"+suma);
console.log("La suma es:"+sumar(2,2));
console.log("La division es:"+dividir(4,2));
console.log("El resto es:"+calculaResto(4,3));


dividir(3,2);
calculaResto(8,3);

function cruzarCalle(){
    let exito = undefined;
    let color = undefined;
    do{
        exito = true; // Inicializo a true
        color = prompt("color de semáforo");
        switch(color){
            case "rojo": 
            case "verde":
            case "amarillo":
                alert("Color de semaforo válido");
                break;
            default:
                exito = false;
                alert("Introduce sólo rojo, verde,amarillo!!");
        }
    }while(exito === false); 
    return color; // Devuelvo el color del semaforo
}

//Ejecutar funcion
//console.log("El color es:"+cruzarCalle());

// Array - intro 0...N-1 --> 0...productos.length-1
let productos = ["patatas","pescado","naranjas","huevos","pan"];
console.log("longitud: "+productos.length); // 5 elementos
console.log("El elemento es: "+productos[2]);
console.log("El elemento es: "+productos[2000]); // No definido
console.log(productos); // El array entero --> Imprime el objeto

// Introduce elementos en el array
productos.push("carne");
productos.push("limones");
productos.splice(1, 0, "bacalao"); // Incluir elemento en pos 1
productos[0] = "patatas rojas"; // sobreescribir objeto en pos 0

// Iterar array con for
for(let i=0;i < productos.length;i++){
    console.log(i)
    console.log("El producto es:"+productos[i]);
}





