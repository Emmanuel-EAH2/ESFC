// el value me muestra lo que esta adentro del input
// let ejemplo = document.getElementsByTagName("p") selecciona toda una collecion de los elementos del DOM con la etiqueta P
// let ejemplo = document.querySelector(".ejemplo"); aqui selecciona por medio de la clase de CSS
let input = document.getElementsByTagName("input").value;

function validar(){
let nombre = document.getElementById('nombre').value;
let ApellidoP = document.getElementById('ApellidoP').value;
let ApellidoM = document.getElementById('ApellidoM').value;
 document.getElementById('guardar');

 if(nombre === '' || ApellidoP === '' || ApellidoM === '' ){
    alert("esta vacio carnal tengo que tener todos los datos");
    return false;
 }else if(nombre.length > 30){
    alert("Esta muy largo el nombre, se necesitan menos caracteres");
    return false;
 }
 else{
     return alert(`Hola ${nombre} ${ApellidoP} ${ApellidoM} te doy la bienvenida a la pagina web`);
 }
}


let remover =  document.querySelector(".Trabajo")
remover.remove();

let BtnS = document.getElementById('trabajoSi'); //obtenemos el boton por medio de su ID

function mostrarInfo(){
let ejemplo = document.querySelector(".trabajo2");
let calle = document.getElementById('calleTrabajo');
let numcalle = document.getElementById('numeroCalleTra');
let colonia = document.getElementById('coloniaTra');
let cp = document.getElementById('cpTra');
let nomEmpresa = document.getElementById('nomEmpresa');
let horario = document.getElementById('horario');
let tareas = document.getElementById('tareas');
}



// let nombre = document.getElementById('nombre');

// nombre.lowerCase();