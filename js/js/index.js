document.getElementById("mainTitle").innerText = "Point and Click Adventure";

const offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech")

gameWindow.onclick =  function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    mainCharacter.style.left = x + "px";
    mainCharacter.style.top = y + "px";

    //console.log(e.target.id);
    showSpeech("Does this work?");

    switch(e.target.id){
        case "door1":
            //something insert here
            characterAudio.play();
            showSpeech("This is door1 and it is locked");
            break;
        case "door2":
            //something insert here
            showSpeech("Nobody is home... Come back later...");
            break;
            case "Tree":
            //something insert here
            showSpeech("This is a tree....... it has an lock (stairs in it) on it?");
            break;
        default:
            // do something when it doest have a case
            showSpeech("Nothing worth is clicked");
            break;
    }

    //console.log(x);

    //put in css on main character "Transition: all us ease-in-out;

    function showSpeech(dialog){
        mainCharacterSpeech.style.opacity = 1;
        mainCharacterSpeech.innerHTML = dialog;
        
    }
    function hideSpeech(){
        mainCharacterSpeech.style.opacity = 0;
        mainCharacterSpeech.innerHTML = "...";
    }
}