document.getElementById("mainTitle").innerText = "Point and CLick adventure";
document.getElementById("mainTitle").style.textAlign = "center";

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");


gameWindow.onclickz =  function(){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.Client - rect.left; //x position within the element.
    var y = e.ClientY - rect.top; //y position within the element.
    mainCharacter.style.left = x + "px";
    mainCharacter.style.top = y + "px";
    //console.log(x);
}