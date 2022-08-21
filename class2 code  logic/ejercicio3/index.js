// ejercicio 3

let nota1 = prompt ("ingrese la primera nota (entre 1 y 5)");
let int_nota1 =parseInt(nota1);
let nota2 = prompt ("ingrese la segunda nota (entre 1 y 5)");
let int_nota2 =parseInt(nota2);
let nota3 = prompt ("ingrese la tercera nota (entre 1 y 5)");
let int_nota3 =parseInt(nota3);

promedio = (int_nota1+int_nota2+int_nota3)/3;

if(promedio <3){
    alert("su promedio esta por debajo de 3.0  va perdiendo la materia  "+ promedio );
}else
if(promedio >= 3){

    alert("paso la materia con un promedio de  " + promedio);
};




