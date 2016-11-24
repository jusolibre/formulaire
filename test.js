/**
* @Author: Julien SOBRITZ
* @Date:   2016-11-23T14:22:47+01:00
* @Email:  julien.s@codeur.online
* @Filename: test.js
* @Last modified by:   Julien SOBRITZ
* @Last modified time: 2016-11-24T16:54:08+01:00
*/

function unmatchingPaternError(name) {
  var errorHandler = document.getElementById(name + "Error");

    /** affichage du message d'erreur pour une email non correspondante **/
  errorHandler.innerHTML = " " + " ne correspond pas a une adresse mail !";
}

function tooShortError(name) {
  var errorHandler = document.getElementById(name + "Error");

  /** affichage du message d'erreur pour un champ trop court **/
  errorHandler.innerHTML = " " + " trop court !";
}

function tooLongError(name) {
  var errorHandler = document.getElementById(name + "Error");

  /** affichage du message d'erreur pour un champ trop long **/
  errorHandler.innerHTML = " " + " trop long !";
}

function redColoring(name) {
  /** recupération de la boite du contenue et colorisation en rouge**/
  var coloringContent = document.getElementById(name);
  var errorHandler = document.getElementById("errorHandler");

  /** gestion de l'affichage du message d'erreur en haut de l'ecran**/
  /** le premier contient la partie "complexe" du message et les autres ajoute juste un espace et une virgule **/
  if (countError == 0)
    errorHandler.innerHTML = "Veuillez saisir correctement le(s) champ(s) non valide :<br/>" + name;
  else {
    errorHandler.innerHTML += ", " + name;
  }
  /** incrémentation du conteur d'erreur **/
  countError +=1;
  coloringContent.style.border = "2px solid #FF0000";
}

function greenColoring(name) {
  /** recupération de la boite du contenue et colorisation en vert**/
  var coloringContent = document.getElementById(name);

  coloringContent.style.border = "2px solid #00FF00";
}

function check(array) {
  if (array.value.length < 2) {
    /** gestion de l'erreur de message trop court et colorisation en rouge**/
    tooShortError(array.name);
    redColoring(array.name);
    return false;
  }
  else if (array.name == "message" && array.value.length > 1024) {
    /** gestion de l'erreur de message trop court et colorisation en rouge**/
    tooLongError(array.name);
    redColoring(array.name);
    return false;
  }
  else if (array.name != "message" && array.value.length > 255) {
    /** gestion de l'erreur de message trop long et colorisation en rouge**/
    tooLongError(array.name);
    redColoring(array.name);
    return false;
  }
  else {
    /** colorisation en vert**/
    greenColoring(array.name);
    return true;
  }
}

function checkMail(name) {
  var patt = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;
  var result;

  result = patt.test(name.value);
  console.log(result);
  console.log(name.value);
  if (result == true) {
    /** gestion de la colorisation en vert de la box mail**/
    greenColoring(name.name);
    return true;
  }
  else {
    /** gestion de l'erreur du mail et colorisation en rouge**/
    unmatchingPaternError(name.name);
    redColoring(name.name);
    return false;
  }
}

function clearError() {
  /** declaration des variables **/
  var nom = document.getElementById("nomError");
  var email = document.getElementById("emailError");
  var objet = document.getElementById("objetError");
  var message = document.getElementById("messageError");

  /** clear des conteneur d'erreur de chaque lignes **/
  nom.innerHTML = "";
  email.innerHTML = "";
  objet.innerHTML = "";
  message.innerHTML = "";
}

var countError = 0;

function checkAll() {
  /*******************************/
  /**                           **/
  /** declaration des variables **/
  /**                           **/
  /*******************************/
  var nom = document.getElementById("nom");
  var email = document.getElementById("email");
  var objet = document.getElementById("objet");
  var message = document.getElementById("message");
  var errorHandler = document.getElementById("errorHandler");
  var returnError = 0;

  /** reinisialisation de message handler (bloc d'erreur en haut)**/
  /** reinisialisation du conteur d'erreur (pour diffencier la première erreur des autres)**/
  errorHandler.innerHTML = "";
  countError = 0;
  /** appel des fonctions de check **/
  clearError();
  if (check(nom) == false)
    returnError++;
  if (checkMail(email) == false)
    returnError++;
  if (check(objet) == false)
    returnError++;
  if (check(message) == false)
    returnError++;
  if (returnError == 0)
    return true;
  else
    return false;
}
