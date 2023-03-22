document.getElementById("mainTitle").innerText = "Point and Click Adventure";
document.getElementById("mainTitle").style.textAlign = "center";

const offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");


gameWindow.onclick =  function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    mainCharacter.style.left = x + "px";
    mainCharacter.style.top = y + "px";

    console.log(e.target.id);

    switch(e.target.id){
        case "door1":
            //something insert here
            console.log("this is door1 and it is locked");
            break;
        case "door2":
            //something insert here
            console.log("Nobody is home... Come back later...");
            break;
        default:
            // do something when it doest have a case
            console.log("Nothing worth is clicked");
            break;
    }
    //console.log(x);

    //put in css on main character "Transition: all us ease-in-out;
}