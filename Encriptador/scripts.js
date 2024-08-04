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
    const textarea = document.querySelector(`#text-input`);
    const text = textarea.value;
    if (text !== text.toLowerCase()) {
        alert("No se permiten mayúsculas")
    } else {
        return text.toLowerCase();
    }
}

function setText (text) {
    divText = document.querySelector(`.text-encrypt-container`);
    copybtn = document.querySelector(`.copy-btn`)

    divText.textContent = text;
    divText.style.display = "flex";
    divText.style.padding = "30px 20px 0 29px";
    divText.style.fontSize = "large";
    divText.style.color = "#495057"
    divText.style.boxSizing = "border-box";

    copybtn.style.cursor = "copy";
    copybtn.style.backgroundColor = "white";
    copybtn.style.color = "#0A3871";
    copybtn.style.borderColor = "#0A3871";

    copybtn.addEventListener('mouseover', function() {
        copybtn.style.backgroundColor = '#D8DFE8';
        copybtn.style.color = '#1155a8';
    });

    copybtn.addEventListener('mouseout', function() {
        copybtn.style.backgroundColor = 'white';
        copybtn.style.color = '#0A3871';
    });
}

function deleteButton() {
    const newBtn = document.querySelector(`.btn-aux`);

    
    if (window.innerWidth > 780 && newBtn) {
        newBtn.parentElement.removeChild(newBtn);
    }
}

function spawnButton () {
    const newBtn = document.createElement("button");

    newBtn.className = "btn-aux";
    newBtn.style.backgroundColor = "#F3F5FC";
    newBtn.style.height = "50%";
    newBtn.style.margin = "5vh 0 3vh 0";
    newBtn.style.borderRadius = "24px";
    newBtn.style.fontSize = "16px";
    newBtn.style.color = "#0A3871";
    newBtn.style.border = "1px solid #CACACA";
    newBtn.style.textAlign = "center";
    newBtn.style.boxSizing = "border-box"
    newBtn.textContent = "Copiar";

    newBtn.addEventListener("Click", copyText());

    const section = document.querySelector(`.text-encrypt-container`);
    section.style.display = "flex";
    section.style.flexDirection = "column";
    section.appendChild(newBtn)
}

function copyText() {
    let divText = document.querySelector(`.text-encrypt-container`);
    let copiedText = divText.innerText || divText.textContent;
    navigator.clipboard.writeText(copiedText);
}


function encript_function () {
    text = getText();
    if (text === "") {
        alert("No hay ningún texto que para encriptar")
    } else {
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
        spawnButton();
        return (`${word_encript.join("")}`);
    }
}

function desencript_function () {
    text = getText()
    if (text === "") {
        alert("No hay ningún texto que para desencriptar") 
    } else {
        word_desencript = text.replace(/ai/g, "a")
        .replace(/enter/g , "e")
        .replace(/imes/g , "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
        setText(word_desencript)
    }
    spawnButton();
        
}


window.addEventListener('load', deleteButton);
setInterval(deleteButton, 1);


