//var mensaje="Que tengas un grandioso día";
//document.getElementById("gracias").innerHTML = mensaje;

let boton=document.getElementById("boton");
boton.addEventListener("click",saludar);
boton.addEventListener("mousemove",despedir);
boton.addEventListener("mouseleave",despedir2);
boton.addEventListener("dblclick",saludar2);
function saludar(){
    gracias.innerHTML = "que tengas un grandioso dia";  
}
function despedir(){
    gracias.innerHTML = "vuelve pronto";  
}
function despedir2(){
    gracias.innerHTML = "Gracias por visitar mi sitio...";
    boton.innerHTML = "Gracias"; 
}
function saludar2(){
    boton.innerHTML = "BESOS";  
}


/*
click
dblclick
mouseenter
mouseleave
mousemove
mousedown

*/