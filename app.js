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

