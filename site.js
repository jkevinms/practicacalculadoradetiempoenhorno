
const tiempomin = 40;


function TiempoTotalPreparacion(capas){
    if(capas == null || capas < 0 || capas == '')
    {
        alert("Error, ponga un valor válido");
        return 0;
    }
    else{
    
        return capas *= 2; 
    }
   

};

function TiempoRestanteHorno(tiempomin, tiempoPrevio){
    
    if (tiempoPrevio == null || tiempoPrevio < 0)
    {
        alert("error, ponga un valor válido");
        return "error";
    }
    else
    {
    
        return tiempomin - tiempoPrevio;
    }
};
function TiempoTotalTrabajo(TiempoHorno, tiempoPreparacion){
  
    if (TiempoHorno == null && tiempoPreparacion == null || TiempoHorno < 0 || tiempoPreparacion <0)
    {
        alert("Error, valores invalidos");
        return "error";
    }
    else
    {
        return  TiempoHorno + tiempoPreparacion;
    }
};

let tiempoPrevio = prompt("Ingrese el tiempo que la lasaña ha estado previamente en el horno");
let capas = prompt("Ingrese el numero de capas qeu tendra la lasaña");

let tiempoPreparacion = TiempoTotalPreparacion(Number(capas));
let TiempoRestante = TiempoRestanteHorno(tiempomin, Number(tiempoPrevio));
let TiempoTotal = TiempoTotalTrabajo(Number(tiempoPrevio), tiempoPreparacion);
document.write("<p>" + "El tiempo restante en el horno es de: " + TiempoRestante + "</p>");
document.write("<p>" + "El tiempo total de trabajo fue de: " + TiempoTotal + "</p>");
document.write("<p>" + "El tiempo total de preparacion fue de: " + tiempoPreparacion + "</p>");