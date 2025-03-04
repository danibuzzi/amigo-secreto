
/* 
   Challenge Alura 
   Agregado de amigos a una lista y sorteo de amigo elegido
   Autor: Daniel Alejandro Buzzi
*/


/*Declaracion variables almacenar lista de amigos
seleccion de campo lista de amigos y de resultados*/

let amigos = []
const listaAmigos=document.getElementById("listaAmigos");
const resultado=document.getElementById("resultado");

//Agregado de amigos a la lista 

function agregarAmigo(){

    let nombreAmigo=document.getElementById("amigo");

    //Comprogbacion que hemos ingresado un nombre de amigo 

    if (!nombreAmigo){
        alert("Por favor inserte un nombre de amigo");
        return;
    }

    /*Se agrega el amigo a la lista y 
    ,borramos la lista evitando duplicados 
    y se actualiza la lista de amigos */
       
        amigos.push(nombreAmigo.value);
        nombreAmigo.value="";
        actualizarListaAmigos();
        nombreAmigo.focus();
    
}

//Actualizacion de la lista de amigos

function actualizarListaAmigos(){

     //Vaciamos la lista para evitar duplicados y añadimos los amigos  a la lista.
  
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
        
        resultado.innerHTML=""; 
        let li=document.createElement('li');
        li.textContent="El amigo secreto es: "+amigos[amigoSorteado];
        resultado.appendChild(li);
        
     
     }   



}
    
/* Pisbles cambios
   function seleccionLista(lista){
        const lista=document.getElementById(lista);
   
   }
   
   functionCrearElementoLista(lista){
       const li=document.createElement('li');
       return li;
   
   
   }
*/