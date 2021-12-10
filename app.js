var inputText = document.querySelector("#txt-input");

var translateBtn = document.querySelector("#btn-translate");
var outputText = document.querySelector("#input");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error occured", error);
  alert("Something wrong with server try again");
}

function clickEventHandler() {
  var inputText2 = inputText.value; //taking input

  fetch(translationURL(inputText2))
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      var translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch(errorHandler);
}

translateBtn.addEventListener("click", clickEventHandler);
