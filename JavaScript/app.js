const usuario1 = {
    id: 1,
    puntos: 750,
    curso: "meditacion",
    pago: true
};
const usuario2 = {
    id: 2,
    puntos: 50,
    curso: "reiki",
    pago: false
}
const usuario3 = {
    id: 3,
    puntos: 600,
    curso: "registros",
    pago: true
}
const array = [usuario1, usuario2, usuario3];

const usuario4 = {
    id: 4,
    puntos: 300,
    curso: "registros",
    pago: false
}

array.push(usuario4);

//El objetivo es mostrar el ID de cada usuario y que se imprima quien pago y quien no.
for (const value of array) {
    console.log(value.id);
    console.log(value.pago);
}

//Funcion para ordenes el elemento "puntos" de mi array, de mayor a menor. 
function puntajeUsuario(a, b) {
    return b.puntos - a.puntos;
}
let puntajeU = array.sort(puntajeUsuario);
console.log(puntajeU);







/* ENTREGA 6a ARRAY 
const usuario = [123] ;
let gasto = parseInt(prompt('Cuanto queres gastar del 1 al 5 ?'));

for (let index = 0; index < gasto; index++) {
    let nombre = prompt("ingrese su nombre completo");
    let usuarioNumero =  parseInt((prompt("ingrese su numero de usuario")));
    let descuento = prompt("Tiene codigo de descuento ?");
 usuario.push(nombre);
 usuario.push(usuarioNumero)
usuario.push(descuento);
}

const descuentoUtilizado = usuario.slice(3,4);


console.log(usuario.length);
console.log(usuario.join(" "));
console.log(descuentoUtilizado); */



/* ENTREGA 5 OBJETOS  
const Reiki = new Cursos ("Reiki", 300 , 3 );
console.log(Reiki.nombre);
console.log(Reiki.costo);
console.log(Reiki.duracion);
Reiki.bienvenida();

const Meditacion = new Cursos ("Meditacion", 500 , 6 );
console.log(Meditacion.nombre);
console.log(Meditacion.costo);
console.log(Meditacion.duracion);
Meditacion.bienvenida();


const Registros = new Cursos ("Registros", 600 , 8 );
console.log(Registros.nombre);
console.log(Registros.costo);
console.log(Registros.duracion);
Registros.bienvenida();
*/

/* ENTREGA 4 
var nombre = prompt("ingrese su nombre para ingresar !")
var cumple = prompt(" Ingrese el nombre del anfitrion")

function boliche(nombre) {
    console.log("Hola" + " " + nombre);

}
let edad = prompt("ingrese su edad !");

function mayor(edad) {
    if (edad >= 18) {
        return (alert("Bienvenido" + " " + nombre))
    } else if (edad == 17) {
        return (alert("No puede pasar, volve cuando cumplas 18"))
    } else {
        return (alert("No puede pasar" + " " + nombre))
    }
}

function feliz(cumple) {
    switch (cumple) {
        case "Alejandro":
            console.log("Invitado de " + " " + "Alejandro")
            break;
        case "Marco":
            console.log("Invitado de" + " " + "Marco")
            break;
        default:
            break;
    }
}

boliche(nombre);
mayor(edad);
feliz(); */





/*  ENTREGA 3
for (let i = 1; i <= 3; i++) {
    let socio = prompt("ingrese su nombre y apellido");
    if (socio == "Marco De Luca") {
        alert("Hola" + " Dr" + " " + socio + " " + "sos el primero !");
        break;
    }
    alert("Hola" + " " + socio + " " + "su turno es el " + i);

}



let palabraClave = prompt(" ingrese su codigo clave !")
while (palabraClave != "1234") {
    switch (palabraClave) {
        case "luis":
            console.log("Bienvenido" + " " + "luis")
            break;
        case "marco":
            console.log("Bienvenido" + " " + "marco")
            break;

        default:
            console.log("chau")
            break;
    }
    palabraClave = prompt(" ingrese su codigo clave !");
}

*/

/*  ENTREGA 1 y 2 

let sintomas = prompt("Tiene sintomas ? Ingrese sintomas");
let sintomaUno = "fiebre";
let sintomaDos = "tos";
let sintomaTres = "Dolor de cabeza";
let sintomaCuatro = "falta de aire";
let sintomaX = "otro";

if (((sintomas == sintomaUno) || (sintomas == sintomaDos) || (sintomas == sintomaTres) || (sintomas == sintomaCuatro))) {
    alert("Llama al 0800-covid")
} else if (sintomas == "") {
    alert("No ingreso informacion");
}  else if (sintomas == sintomaX){
    alert("Si tiene sintomas como tos, fiebre, dolor de cabeza o falta de aire, llamar al 0800-covid")
}
else {
    alert("Esos sintomas no son de COVID");
}

*/