var inputCenter=document.querySelector("#inp");
var outputCenter=document.querySelector("#op");
var btnTranslate=document.querySelector(".content-translate");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function constructURL(text){
    var newURL = serverURL+"?text="+encodeURI(text);
    return newURL;
}
function errorHandler(error){
    console.log(error)
    outputCenter.value="Please try again later";
}
function clickHandler(){
    var iv=inputCenter.value;
    var targetURL=constructURL(iv);
    fetch(targetURL).then(response=>response.json()).then(json=>{
        var x=json.contents.translated;
        outputCenter.value=x;
    }).catch(errorHandler)
}
btnTranslate.addEventListener("click",clickHandler);