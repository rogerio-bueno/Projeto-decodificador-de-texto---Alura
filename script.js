//Função para criptografar
function criptografarTexto() {

    var output = document.querySelector("#textosaida");

    document.getElementById("digitetexto").style.display = "none";
    document.getElementById("resultadoTextoEntrada").style.display = "inline-block";

    var input = document.querySelector("#textoEntrada");
    var mensagem = input.value;
    var novaMensagem = "";

    var listaCaractere = mensagem.split("");

    for (var i = 0; i < listaCaractere.length; i++) {

        if (listaCaractere[i] == "a") {
            listaCaractere[i] = "ai";
        }
        else if (listaCaractere[i] == "e") {
            listaCaractere[i] = "enter";
        }
        else if (listaCaractere[i] == "i") {
            listaCaractere[i] = "imes";
        }
        else if (listaCaractere[i] == "o") {
            listaCaractere[i] = "ober";
        }
        else if (listaCaractere[i] == "u") {
            listaCaractere[i] = "ufat";
        }
        novaMensagem = novaMensagem + listaCaractere[i];
    }

    output.value = novaMensagem;
}

//Função para descriptografar
function descriptografarTexto() {

    var output = document.querySelector("#textosaida");

    document.getElementById("digitetexto").style.display = "none";
    document.getElementById("resultadoTextoEntrada").style.display = "inline-block";

    var input = document.querySelector("#textoEntrada");
    var mensagem = input.value;

    mensagem = mensagem.replaceAll("ai", "a");
    mensagem = mensagem.replaceAll("enter", "e");
    mensagem = mensagem.replaceAll("imes", "i");
    mensagem = mensagem.replaceAll("ober", "o");
    mensagem = mensagem.replaceAll("ufat", "u");
    output.value = mensagem;
}

//Função para copiar o texte
function copiarTexto() {

    var output = document.querySelector("#textosaida");
    navigator.clipboard.writeText(output.value);
    alert("Texto copiado!");
}