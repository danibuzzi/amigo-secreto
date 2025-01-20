// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*Declaracion variables almacenar lista de amigos
seleccion de campo lista de amigos*/

let amigos = []
const listaAmigos=document.getElementById("listaAmigos");

//Agregado de amigos a la lista 

function agregarAmigo(){
    
    let nombre=document.getElementById("amigo");

    //Comprogbacion que hemos ingresado un nombre de amigo 

    if (nombre.value===""){
        alert("Por favor inserte un nombre");

    }else {

    /*Se agrega el amigo a la lista y 
    ,borramos la lista evitando duplicados 
    y se actualiza la lista de amigos */
       
        amigos.push(nombre.value);
        nombre.value="";
        actualizarListaAmigos();
    }
}

//Actualizacion de la lista de amigos

function actualizarListaAmigos(){
     console.log("Vector amigos "+amigos);

     //Vaciamos la lista para evitar duplicados y añadimos los amigos  a la lista
  
     listaAmigos.innerHTML=" ";
     for(i=0;i<amigos.length;i++){
        const li=document.createElement('li');
        li.textContent=amigos[i];
        listaAmigos.appendChild(li);
     }

}

//Sorteo de  amigo

function sortearAmigo(){

    //Comprobacion que haya amigos previamente agregados

     if (amigos.length===0){
        alert("Primero debe ingresar amigos");
     }else{
        
        /*Sorteo de amigo: elegimos un indice de la lista de amigos al azar, 
        borramos la lista de amigos y mostramos  el amigo elegido*/

        let amigoSorteado=Math.floor(Math.random()*amigos.length);
        console.log(amigoSorteado) 
        listaAmigos.innerHTML="";
        const li=document.createElement('li');
        li.textContent="Amigo elegido: "+amigos[amigoSorteado];
        listaAmigos.appendChild(li);
     
     }   

}