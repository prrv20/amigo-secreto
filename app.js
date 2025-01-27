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
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agrega nombres antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}