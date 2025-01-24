// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo(){
    const nombreAgregado = document.getElementById('amigo');
    const nombre = nombreAgregado.value.trim();

    if ( nombre === ""){
        alert("Por favor, inserte un nombre");
        return;
    }
    amigos.push(nombre);
    console.log(amigos)
    nombreAgregado.value="";
}