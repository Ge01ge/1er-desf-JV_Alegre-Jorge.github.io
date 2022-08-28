
let x = Number(prompt("  Ingrese valores del 1 al 6 para coorroborar la función: (y = x + x*2)"));

while (x <= 6){
    document.write( ` y= ${x + x*2}  <br>` );
    x++;
} 
// si ingreso 7 no imprime nada ¿Como haria para que imprima un mj valor erroneo?

// -------------------------------------------

/* 
let x = Number(prompt("  Ingrese valores del 1 al 6 para coorroborar la función: (y = x + x*2)"));

do{
    document.write( ` y= ${x + x*2}  <br>` );
    x++;
} while (x <= 6){
}
<<DUDA>>
Si ingreso 7 no cumple la condicion pero ejecuta igual una vez por el "Do" dando y=21 
¿Como haria para que imprima solo el 7 pero al no cumplir la condicion de "While" no imprima el y=21?
*/









