
// LOGICA QUE FUNCIONA <Y CUMPLE> LA CONSIGNA

let nro = Number(prompt("Ingrese un numero del 1 al 6"));
parseInt(nro)

for (let i=1; i<= nro; i++) {
    if (i<=3) {
        document.write(` ${i} pertenece al equipo ROJO <br>`);
    }else if(i>3 && i<=6){
        document.write(` ${i} pertenece al equipo VERDE <br>`);
    }else{
        document.write(` ${nro} valor invalido`)
    }
    /*¿Como hago para que aparezca un solo document.write?. 
    Si uso los alert me ejecuta los 3 alert  y si uso un break me corta en el la 1ra ejecucion... si por ej elijo 6 me corta en rojo (cuando deberia saltar al 2do else it para que me de verde) */
}


// LOGICA QUE FUNCIONA PERO <NO CUMPLE> LA CONSIGNA  

/*
let option = prompt(`Elija un valor, "sabra su equipo al finalizar la elección":
1: A
2: B
3: C
4: D
`);

switch (option) {
    case "1":
        alert(`Ud esta en el Equipo ROJO`);
        break;
    case "2":
        alert(`Ud esta en el Equipo VERDE`);
        break;
    case "3":
        alert(`Ud esta en el equipo VERDE`);
        break;
    case "4":
        alert(`Ud esta en el Equipo ROJO`);
        break;
    default:
        alert(`Opcion no valida, vuelva a probar`);
        break;
}
*/







