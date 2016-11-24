/**
* @Author: Julien SOBRITZ
* @Date:   2016-11-23T14:22:47+01:00
* @Email:  julien.s@codeur.online
* @Filename: test.js
* @Last modified by:   Julien SOBRITZ
* @Last modified time: 2016-11-24T09:24:37+01:00
*/

function unmatchingPaternError(name) {
  var errorHandler = document.getElementById(name + "Error");

  errorHandler.innerHTML = name + " is not matching a correct pattern.";
}

function tooShortError(name) {
  var errorHandler = document.getElementById(name + "Error");

  errorHandler.innerHTML = name + " is too short.";
}

function tooLongError(name) {
  var errorHandler = document.getElementById(name + "Error");

  errorHandler.innerHTML = name + " is too long.";
}

function redColoring(name) {
  var coloringContent = document.getElementById(name);
  var errorHandler = document.getElementById("errorHandler");

  errorHandler.innerHTML += "<br/>" + name + " isn't correct.";
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
  }
  else if (array.name == "message" && array.value.length > 1024) {
    tooLongError(array.name);
    redColoring(array.name);
  }
  else if (array.name != "message" && array.value.length > 255) {
    tooLongError(array.name);
    redColoring(array.name);
  }
  else {
    greenColoring(array.name);
  }
}

function checkMail(name) {
  var patt = new RegExp("^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,6}$");
  var result;

  result = patt.test(name.value);
  if (result == true)
    greenColoring(name.name);
  else {
    unmatchingPaternError(name.name);
    redColoring(name.name);
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

function checkAll() {
  var nom = document.getElementById("nom");
  var email = document.getElementById("email");
  var objet = document.getElementById("objet");
  var message = document.getElementById("message");
  var errorHandler = document.getElementById("errorHandler");

  errorHandler.innerHTML = "";
  clearError();
  check(nom);
  checkMail(email);
  check(objet);
  check(message);
}
