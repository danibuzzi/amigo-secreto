// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []
const listaAmigos=document.getElementById("listaAmigos");

function agregarAmigo(){
    let nombre=document.getElementById("amigo");
    if (nombre.value===""){
        alert("Por favor inserte un nombre");

    }else {
        //alert("pase");
        //console.log(nombre.value);
        amigos.push(nombre.value);
        //console.log(amigos)
        nombre.value="";
        actualizarListaAmigos();
    }
}


function actualizarListaAmigos(){
     console.log("Vector amigos "+amigos);
  
     listaAmigos.innerHTML=" ";
     for(i=0;i<amigos.length;i++){
        const li=document.createElement('li');
        li.textContent=amigos[i];
        listaAmigos.appendChild(li);
     }

}


function sortearAmigo(){
     if (amigos.length===0){
        alert("Primero debe ingresar amigos");
     }else{
        //console.log(amigos.length);

        let amigoSorteado=Math.floor(Math.random()*amigos.length);
        console.log(amigoSorteado) 
        listaAmigos.innerHTML="";
        const li=document.createElement('li');
        li.textContent="Amigo elegido: "+amigos[amigoSorteado];
        listaAmigos.appendChild(li);
     
     }   

}