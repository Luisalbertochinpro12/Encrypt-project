/* Encriptador de palabras
   Al digitar una palabra esta debe estar convertida en una palabra nueva
   Las conversiones son unicamente aplicables para las vocales
   "a" es convertida para "ai"
   "e" es convertida para "enter" 
   "i" es convertida para "imes"
   "o" es convertida para "ober"
   "u" es convertida para "ufat"*/

let letter_conv = {
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat",
};

function getText () {
    const textarea = document.querySelector(`#textAreaMain`);
    const text = textarea.value;
    return text;
}

function setText (text) {
    divText = document.querySelector(`#text-desencript-container`);
    divText.textContent = text
}

function copyText() {
    let divText = document.querySelector(`#text-desencript-container`);
    let copiedText = divText.innerText || divText.textContent;
    navigator.clipboard.writeText(copiedText);
}


function encript_function () {
    text = getText();
    let letters = text.split("");
    let word_encript = [];

    letters.forEach (letters => {
        if (letter_conv[letters]) {
            word_encript.push(letter_conv[letters]);
        } else {
            word_encript.push(letters);
        }
    })
    setText(`${word_encript.join("")}`);

    return (`${word_encript.join("")}`);
}

function desencript_function () {
        text = getText()
        word_desencript = text.replace(/ai/g, "a")
        .replace(/enter/g , "e")
        .replace(/imes/g , "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
        setText(word_desencript)
}


