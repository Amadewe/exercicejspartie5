// Créer un tableau "languages" contenant "Html", "CSS", "Java", "PHP"
// L'objet global Array est utilisé pour créer des tableaux.
var languagesArrayCreation = function () {
var formLanguage = Array('Html', 'CSS', 'Java', 'PHP');
  return formLanguage;
}

// Créer un tableau "numbers" contenant les numbers de 0 à 5
var numbersArrayCreation = function () {
  var formNumbers = Array(0, 1, 2, 3, 4, 5);
    return formNumbers;
}

//  Remplacer le troisième élément du tableau par "Javascript"
var ElementReplacement = function (languages) {
  // return languages.splice(2, 1, 'Javascript');
  languages[2] = 'Javascript';
  return languages;
}

// Ajouter "Ruby" et "Python" à la fin du tableau
// La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby', 'Python');
  return languages;
}

// Ajouter "-2" et "-1" au début du tableau numbers
// La méthode unshift() ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.
var AddElementToNumbersArray = function (numbers) {
numbers.unshift(-2,-1);
  return numbers;
}

// Supprimer le premier élément du tableau languages
// La méthode shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la longueur du tableau.
var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}

//  Supprimer le dernier élément du tableau languages
// La méthode pop() supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.
var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}
//  Faire de la chaîne "socialMediaInString" un tableau "socialMedia"
var stringToArray = function (socialMediaInString) {
var socialMedia = socialMediaInString.split(',');
 return socialMedia;
}
// Faire du tableau "languages" une chaîne "languagesInString". Séparer les languages par une virgule
// La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau).
// La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
var arrayToString = function (languages) {
  return languages.join(',');
}
 // Trier le tableau "socialMedia"
 // La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau.
var arraySort = function (socialMedia) {
socialMedia.sort();
  return socialMedia;
}

// Bonus : Inverser le tableau "languages"
// La méthode reverse() transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.
var arrayInvert = function (languages){
languages.reverse();
  return languages;
}
