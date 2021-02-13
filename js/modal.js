function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector("#close"); /*Cette constante permet de cibler l'élément du DOM ayant l'id "close" (la croix qui ferme la modale)*/
const email = document.querySelector("#email"); /*Cette constante permet de cibler l'élément du DOM ayant l'id "email"*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// launch closing-modal event
closeModal.addEventListener('click', event => {
  modalBg.style.display = "none";
})
/*Cette fonction modifie le style de l'élément ayant la classe ".bground"
(le parent le plus haut de la modale, qui contient tous les éléments enfants de celle-ci)
et passe sa propriété display en none, lorsque l'utilisateur clique sur la croix (qui a l'id "close").
Cela fonctionne avec un listener de l'événement "click"*/

// check entries validity
let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/*Ici j'utilise du Regex pour respecter la spécification html5 pour le format de l'adresse mail de l'utilisateur
Note : "2@2" et "2@2.2" fonctionnent, cela mérite d'être revérifié.*/