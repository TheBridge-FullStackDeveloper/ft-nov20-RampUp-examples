console.log("Bienvenido al mundo JS!");

//Crear variables
let a = 10;
let b = 5;
let c = 2.2;
let cadena = "pepe"; // string
let acierto = false; 

console.log("Hola "+cadena+", la suma es "+(a+b));

a = a+2; // +2
console.log("Hola "+cadena+", la suma es "+(a+b)); //17

a+=2; //+2 //a = a+2;
console.log("Hola "+cadena+", la suma es "+(a+b)); //19

a-=3;
console.log("Hola "+cadena+", la suma es "+(a+b+c)); //16

// Constantes
const PI = 3.1416;
//PI*=2; error reasignacion


// Comparación - devuelve booleano
console.log(1 == "1");
console.log(1 === "1"); //Comparación estricta
console.log(1 === 1); //Comparación estricta

// Forma 1
// Condicional If/else
/*
let user = prompt("Introduzca nombre de usuario");
let pwd = prompt("Hola "+user+".Introduzca password!");

 if(user ==="pepe" && pwd === "labuena"){
    acierto = true;
    console.log("usuario Logado: "+acierto+". Bienvenido a casa "+user);
}else{
    acierto = false;
    console.log("Contraseña incorrecta!!!!:"+acierto);
} */


// Forma 2 if..else if..else
let user = prompt("Introduzca nombre de usuario"); 
let pwd = prompt("Hola "+user+".Introduzca password!");
console.log("usuario: "+user+ ", password:"+pwd);

if(user !== "pepe"){
    console.log("Usuario no existe!!!!:"+acierto);
}else if(pwd !== "labuena"){
    console.log("Contraseña incorrecta!!!!:"+acierto);
}else{ // En caso de que user + password sea la buena
    acierto = true;
    console.log("usuario Logado: "+acierto+". Bienvenido a casa "+user);
}

// Forma 3
/* 
let user = prompt("Introduzca nombre de usuario"); 
let pwd = undefined;

if (user === "pepe"){
    //Chequear password
   pwd = prompt("Hola "+user+".Introduzca password!");
   if(pwd === "labuena"){
    acierto = true;
    console.log("usuario Logado: "+acierto+". Bienvenido a casa "+user);
   }
   else{
       console.log("Contraseña incorrecta!!!!:"+acierto);
   }
}else{
    console.log("Usuario no existe!!!!:");
} */




// Bucle for
// Ejecuta i de 0....9
for(let i=0;i<10;i++){
    console.log("El numero vale "+(i+1));
}

// Bucle while
let contador = 0;
while(contador < 10){
    console.log("El numero vale "+(contador+1));
    contador++; // Condicion de incremento 
}

// Do-while


















