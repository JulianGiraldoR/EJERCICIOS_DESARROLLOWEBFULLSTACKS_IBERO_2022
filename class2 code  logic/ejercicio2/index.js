
// ejercicio tasa de conversion

let monto = prompt ("ingrese el monto a convertir");
let divisa = prompt("ingrese el tipo de divisa que desea cambiar: 1. euro, 2. dolar, 3. yenes");
switch(divisa){
    case "1" :

        euro= monto * 4489.32;
        alert("la conversion a euros es de: "  + euro);
        break;

    case "2":
        dolar= monto * 4,402.39;
        alert("la conversion a dolares es de:  "  + dolar);
        break;
    case "3":
        yen = monto * 32.02;
        alert("la conversion a yenes  es de: "  + yen);
        break;

    default :

        alert("opcion no valida");
   
}


