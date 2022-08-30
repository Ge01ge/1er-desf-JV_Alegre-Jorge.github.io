
let x = Number(prompt("  Ingrese un valor inicial del (1 al 6) para coorroborar la función: y = x*3"));
let y = Number(prompt("  Ingrese otro valor final del (1 al 6) para coorroborar la función: y = x*3"));

// si ingreso 7 no imprime nada ¿Como haria para que imprima un mj valor erroneo?
// para validar valores mayores a 6 habría que usar un if:

if(x > 6){
    alert("Ingrese un valor inical menor o igual a 6")
} else if(y > 6){
    alert("Ingrese un valor final menor o igual a 6")
}else {
    while (x <= y){
        document.write(  ` y= ${x*3} <br> ` );
        x++;
    }     
}










