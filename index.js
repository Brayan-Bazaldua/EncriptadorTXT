function encriptar() {
    let text = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-msj");
    let parrafo = document.getElementById ("parrafo");
    let muneco = document.getElementById("img-des"); 

    let textoCifrado = text
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat")

    if (text.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
       muneco.src = "./img/rid.png";
    }

    else {
        muneco.src = "./img/riddler.png";
        tituloMensaje.textContent= "Nigún mensaje fue encontrado"; 
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto primero");
       
    }
}

function desencriptar() {
    let tituloMensaje = document.getElementById("titulo-msj");
    let text = document.getElementById("texto").value;
    let parrafo = document.getElementById ("parrafo");
    let muneco = document.getElementById("img-des");

    let textoCifrado = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (text.length != 0){

        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
       muneco.src = "./img/atrapado.png";

    }
    
    else {
        muneco.src = "./img/riddler.png";
        tituloMensaje.textContent= "Nigún mensaje fue encontrado"; 
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto primero");
    }
    
}




