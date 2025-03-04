
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

    //Comprobacion que hemos ingresado un nombre de amigo 

    if (!nombreAmigo.value){
        alert("Por favor inserte un nombre de amigo");
        return;
    }

    //Comprobacion que no se ingreso un nombre de amigo repetido

    if (comprobarNombreAmigo(nombreAmigo.value)){
       alert("Este nombre ya fue ingresado");
       return;

    } 

    /*Se agrega el amigo a la lista y 
    ,borramos la lista evitando duplicados 
    y se actualiza la lista de amigos */
       
        amigos.push(nombreAmigo.value);
        nombreAmigo.value="";
        nombreAmigo.focus();
        actualizarListaAmigos();
    
}

//Validacion repeticion nombre de amigo

function comprobarNombreAmigo(nombre){

  if (amigos.includes(nombre)){
      return true;
  }
  return false;
     

}

//Actualizacion de la lista de amigos

function actualizarListaAmigos(){

     //Vaciamos la lista para evitar duplicados y añadimos los amigos  a la lista.
  
     listaAmigos.innerHTML=" ";
     for(i=0;i<amigos.length;i++){
        const item=document.createElement('li');
        item.textContent=amigos[i];
        listaAmigos.appendChild(item);
     }

}

//Sorteo de  amigo

function sortearAmigo(){

    //Comprobacion que haya amigos previamente agregados

     if (amigos.length===0){
        alert("No hay amigos para sortear");
        return;
     }
        
      /*Sorteo de amigo: elegimos un indice de la lista de amigos al azar, 
      borramos la lista de amigos y mostramos  el amigo elegido*/

      let amigoSorteado=Math.floor(Math.random()*amigos.length);
      listaAmigos.innerHTML="";
      resultado.innerHTML=""; 
      let li=document.createElement('li');
      li.textContent="El amigo secreto es: "+amigos[amigoSorteado];
      resultado.appendChild(li);
        
     
 } 
 
 




