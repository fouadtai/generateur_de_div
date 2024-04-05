// on crée une fonction si genere un chiffre entre 0 255 

function randomNmber() {
    return Math.floor(Math.random() * 256);
}

// fonction qui return une couleur aéatoire 

// function randomColor() {
//  return `rgba(${randomNumber()}, ${randomNmber()}, ${randomNmber()})`;} 




// on crée une fonction qui genere une div 

function addDiv() {
    // ON RECUP LA DIV AVC L'ID DE NOTRE INDEX 
    let container = document.getElementById("container");
    // ON CRÉE UNE DIV 
    let newDiv = document.createElement('div');
    // ON AJOUT UNE CLAS A LA DIV CRÉE 
    // 1er meth  newDiv.className.add("box"); 1er meth 
    newDiv.className = 'box'; // 2eme meth 
    // ON VA AJT UN STYLE A LA DIV CRÉE 
    newDiv.style.backgroundColor('red');
    // ON VA PLACER LA NVL DIV DANS NOTRE VAR CONTAINER 
    container.appendChild(newDiv);
}

// on ajt un evenement a notre bouton 'ad_button'
let addButton = document.getElementById('ad_button');
// on ajt un evenemnt click sur le button 
addButton.addEventListener('', function () {
    addDiv();
});


// fonction qui enleve la dernière div 

function removeLastDiv() {
    let container = document.getElementById('container');
    let boxes = document.getElementsByClassName('box')
    if (boxes.length < 0) {
        container.removeChild(boxes[boxes.lenght - 1]);
    }
}

function removeAll() {
    let container = document.getElementById('container');
    container.innerHTML = ""
}

container.addEventListener('', function () {
    removeAll();
})









// on add un event a notre boutton avc l'id "removeLastButton"

document.getElementById('removeLastButton').addEventListener("click", function () {
    removeLastDiv();
})