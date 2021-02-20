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
const ModalForm = document.querySelector("#modal-form");
const closeModal = document.querySelector("#close"); /*Cette constante permet de cibler l'élément du DOM ayant l'id "close" (la croix qui ferme la modale)*/

/*let isValid = true;*/

let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let age = document.querySelector("#birthdate");
let participations = document.querySelector("#quantity");
let city = document.querySelector('input[name="location"]');
let acceptCGU = document.querySelector("#checkbox1");
/*Ces variables correspondent à chacune des entrées du formulaire,
je vais les appeler dans une fonction qui va permettre de vérifier la valeur qui a été entrée par l'utilisateur pour chacune de ces variables,
et définir si cela doit valider le champ ou renvoyer un message d'erreur.*/

let firstNameError = document.querySelector("#firstname-error");
let lastNameError = document.querySelector("#lastname-error");
let emailError = document.querySelector("#email-error");
let ageError = document.querySelector("#age-error");
let participationsError = document.querySelector("#participations-error");
let cityError = document.querySelector("#city-error");
let acceptCGUError = document.querySelector("#cgu-error")
/*Ces variables correspondent aux messages d'erreurs qui seront modifiés en fonction de la valeur entrée ou non par l'utilisateur
dans chaque champ du formulaire*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// launch closing-modal event
closeModal.addEventListener('click', e => {
  modalBg.style.display = "none";
})
/*Cette fonction modifie le style de l'élément ayant la classe ".bground"
(le parent le plus haut de la modale, qui contient tous les éléments enfants de celle-ci)
et passe sa propriété display en none, lorsque l'utilisateur clique sur la croix (qui a l'id "close").
Cela fonctionne avec un listener de l'événement "click"*/

// check entries validity
/*Champ 1:
Fonctions checkFirstName
		 checkLastName
		 check.... :
.Quand l'utilisateur soumet le formulaire (=eventListener),
- Si le champ du prénom/du nom/du mail/... est vide,
(empêcher la fermeture de la modale et la validation des données -> je vais peut-être créer une autre fonction qui permet de stopper ce comportement, cf. plus bas)
afficher message erreur correspondant à cette situation
- Si le champ du prénom/du nom/du mail/... est rempli & si la valeur est incorrecte
(empêcher la fermeture de la modale et la validation des données)
afficher message d'erreur correspondant à cette situation

.Quand l'utilisateur soumet le formulaire (=eventListener),
- Si un champ est correct et si un message d'erreur était affiché pour ce champ,
supprimer le message d'erreur

Conditions qui doivent empêcher fermeture de la modale (fonction 'validate' ?):
.Quand l'utilisateur soumet le formulaire (=eventListener),
- Si Prénom vide || Prénom incorrect || Nom vide || Nom incorrect || email vide || email incorrect || date de naissance non renseignée || date de naissance - de ... ans ou + de 120 ans || nombre de tournois vide || nombre de tournois > 99 || ville non sélectionnée || CGU décoché
empêcher la fermeture de la modale et la validation des données

Du coup, est-il possible de créer une fonction globale (du coup ce serait ça la fonction 'validate') de ce style :

.Quand l'utilisateur soumet le formulaire (=eventListener),

- Si Prénom vide || Prénom incorrect || Nom vide || Nom incorrect || email vide || email incorrect || date de naissance non renseignée || date de naissance - de ... ans ou + de 120 ans || nombre de tournois vide || nombre de tournois > 99 || ville non sélectionnée || CGU décoché
empêcher la fermeture de la modale et la validation des données

- Si le champ du prénom/du nom/du mail/... est vide,
afficher message erreur correspondant à cette situation

- Si le champ du prénom/du nom/du mail/... est rempli & si la valeur est incorrecte
afficher message d'erreur correspondant à cette situation

- Si un champ est rempli correctement et si un message d'erreur était affiché pour ce champ,
supprimer le message d'erreur

*/

/*Traduction en JaVascript de ce qui est écrit ci-dessus :*/

let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function checkFirstName(){
	if(!firstName.value){
		firstNameError.innerHTML = "Veuillez renseigner un prénom";
		firstNameError.style.display = "block";
	}
	if(firstName.minlength < 2){
		firstNameError.innerHTML = "Le prénom doit comporter 2 caractères minimum";
		firstNameError.style.display = "block";
	} else{
		firstNameError.style.display = "none";
	}
}

function checkLastName(){
	if(!lastName.value){
		lastNameError.innerHTML = "Veuillez renseigner un nom de famille";
		lastNameError.style.display = "block";
	}
	if(lastName.minlength < 2){
		lastNameError.innerHTML = "Le nom doit comporter 2 caractères minimum";
		lastNameError.style.display = "block";
	} else{
		lastNameError.style.display = "none";
	}
}

function checkEmail(){
	if(!email.value){
		emailError.innerHTML = "Veuillez renseigner une adresse email";
		emailError.style.display = "block";
	}
	if(email != emailRegExp){
		emailError.innerHTML = "L'adresse mail n'est pas valide";
		emailError.style.display = "block";
	} else{
		emailError.style.display = "none";
	}
}

function checkAge(){
	if(!age.value){
		ageError.innerHTML = "Veuillez renseigner une date de naissance";
		ageError.style.display = "block";
	}
	if(1 > age < 120){
		ageError.innerHTML = "La date de naissance n'est pas valide";
		ageError.style.display = "block";
	} else{
		ageError.style.display = "none";
	}	
}

function checkParticipations(){
	if(!participations.value){
		participationsError.innerHTML = "Veuillez renseigner une date de naissance";
		participationsError.style.display = "block";
	}
	if(participations > 99){
		participationsError.innerHTML = "La date de naissance n'est pas valide";
		participationsError.style.display = "block";
	} else{
		participationsError.style.display = "none";
	}	
}

function checkCity(){
	if((!city.location[0].checked)
	& (!city.location[1].checked)
	& (!city.location[2].checked)
	& (!city.location[3].checked)
	& (!city.location[4].checked)
	& (!city.location[5].checked)){
		cityError.innerHTML = "Veuillez renseigner une ville pour participer";
		cityError.style.display = "block";
	} else{
		cityError.style.display = "none";
	}
}

function checkCGU(){
	if(!acceptCGU.checked){
		acceptCGUError.innerHTML = "Veuillez accepter les conditions générales d'utilisation";
		acceptCGUError.style.display = "block";
	} else{
		acceptCGUError.style.display = "none";
	}
}

function validate (e){
	if ((!firstName.value) || (firstName.minlength < 2)
	|| (!lastName.value) || (lastName.minlength < 2)
	|| (!email.value) || (email != emailRegExp)
	|| (!age.value) || (1 > age < 120)
	|| (!participations.value) || (participations > 99)
	|| ((!city.location[0].checked) & (!city.location[1].checked) & (!city.location[2].checked) & (!city.location[3].checked) & (!city.location[4].checked) & (!city.location[5].checked))
	|| (acceptCGU.checked == false)){
		e.preventDefault;
	}
	/*else{
		envoyer les données et fermer la modale (+ petit message pour dire que c'est tout bon ?)
	} -> y a-t-il besoin de ce "else" vu que c'est le comportement par défaut ? (oui si je veux que ça affiche un message je pense mais sinon pas sûr)*/
}
	
modalForm.onsubmit.addEventListener("submit", e =>{
	validate(); /*-> Y a-t-il besoin d'écrire cette ligne vu que la fonction validate est déjà appelée dans le HTML ?*/
	checkFirstName();
	checkLastName();
	checkEmail();
	checkAge();
	checkParticipations();
	checkCity();
	checkCGU();
});