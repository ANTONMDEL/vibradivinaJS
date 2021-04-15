
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


const pagoU= array ;

function pagoss(pagoU) {
 
    for (let valor of pagoU){
       if (valor.pago == false) {
     
           console.log(valor.id + " " +"no pago");
       }
       else{
        
           console.log(valor.id + " " +"pago")
       }
    }
}
pagoss(pagoU);



// ENTREGA 5 OBJETOS  

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


//Practica Local y Session storage
localStorage.setItem("nombre", "Marco")
localStorage.setItem("edad", 19);

let name = localStorage.getItem(nombre);
let aye = localStorage.getItem(edad);
console.log(typeof eye);
console.log(typeof name);
