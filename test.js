/**
* @Author: Julien SOBRITZ
* @Date:   2016-11-23T14:22:47+01:00
* @Email:  julien.s@codeur.online
* @Filename: test.js
* @Last modified by:   Julien SOBRITZ
* @Last modified time: 2016-11-24T15:48:01+01:00
*/

function unmatchingPaternError(name) {
  var errorHandler = document.getElementById(name + "Error");

  errorHandler.innerHTML = " " + " ne correspond pas a une adresse mail !";
}

function tooShortError(name) {
  var errorHandler = document.getElementById(name + "Error");

  errorHandler.innerHTML = " " + " trop court !";
}

function tooLongError(name) {
  var errorHandler = document.getElementById(name + "Error");

  errorHandler.innerHTML = " " + " trop long !";
}

function redColoring(name) {
  var coloringContent = document.getElementById(name);
  var errorHandler = document.getElementById("errorHandler");

  if (countError == 0)
    errorHandler.innerHTML = "Veuillez saisir correctement le(s) champ(s) non valide :<br/>" + name;
  else {
    errorHandler.innerHTML += ", " + name;
  }
  countError +=1;
  coloringContent.style.border = "2px solid #FF0000";
}

function greenColoring(name) {
  var coloringContent = document.getElementById(name);

  coloringContent.style.border = "2px solid #00FF00";
}

function check(array) {
  if (array.value.length < 2) {
    tooShortError(array.name);
    redColoring(array.name);
    return (false);
  }
  else if (array.name == "message" && array.value.length > 1024) {
    tooLongError(array.name);
    redColoring(array.name);
    return (false);
  }
  else if (array.name != "message" && array.value.length > 255) {
    tooLongError(array.name);
    redColoring(array.name);
    return (false);
  }
  else {
    greenColoring(array.name);
    return (true);
  }
}

function checkMail(name, valeur) {
  var patt = new RegExp("^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,6}$");
  var result;

  valeur++;
  result = patt.test(name.value);
  if (result == true) {
    greenColoring(name.name);
    return (true);
  }
  else {
    unmatchingPaternError(name.name);
    redColoring(name.name);
    return (false);
  }
}

function clearError() {
  var nom = document.getElementById("nomError");
  var email = document.getElementById("emailError");
  var objet = document.getElementById("objetError");
  var message = document.getElementById("messageError");

  nom.innerHTML = "";
  email.innerHTML = "";
  objet.innerHTML = "";
  message.innerHTML = "";
}

var countError = 0;

function checkAll() {
  var nom = document.getElementById("nom");
  var email = document.getElementById("email");
  var objet = document.getElementById("objet");
  var message = document.getElementById("message");
  var errorHandler = document.getElementById("errorHandler");

  errorHandler.innerHTML = "";
  countError = 0;
  clearError();
  else if (check(nom) == false)
    return (false);
  else if (checkMail(email) == false)
    return (false);
  else if (check(objet) == false)
    return (false);
  else if (check(message) == false)
    return (false);
  else
    return (true);
}
