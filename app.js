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



/*  ENTREGA UNO Y DOS 

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