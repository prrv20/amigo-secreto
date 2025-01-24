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
    actualizarLista();
    nombreAgregado.value="";
}
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((nombre, index) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}