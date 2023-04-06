document.getElementById("mainTitle").innerText = "Point and Click Adventure";
//document.getElementById("mainTitle").style.textAlign = "center";

const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");

const sec = 1000;
let tempTimeOut;

//Main character
const mainCharacter = document.getElementById("mainCharacter");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

//Counter Character
const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterPortrait = document.getElementById("counterCharacter");

//inventory
const inventory = [];
const inventoryList = document.getElementById("inventoryList");


gameWindow.onclick = function (e) {
    console.log("Hoi");
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    console.log(e.target.id);


    //showSpeech("Does this work?");

    switch (e.target.id) {
        case "Spikes":
            //something insert here
            if (checkItem("Lever1"))
            //It should get rid of the spikes
            {
                showMessage(mainCharacterSpeech, characterAudio, "You can now walk to the stairs");
            } else {
                showMessage(mainCharacterSpeech, characterAudio, "It is to dangerous to walk over the spikes..");

            }
            break;
        case "hatch":
            //something insert here
            showSpeech("You climbed down..");
            break;
        case "wizard":

            //something insert here
            /*setTimeout(showMessage, 0 * sec, mainCharacterSpeech, characterAudio, "Hello wizard!<br> do you have some tips for me?");
            setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Find a hatch");
            setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Oh.. and here you have a poison!");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Thank you Wizard!");
            */
            if (!checkItem("poison")) {
                getItem("Poison1");
                showMessage(mainCharacterSpeech, characterAudio, "You got the poison..");
                showMessage(mainCharacterSpeech, characterAudio, "Hello wizard!<br> do you have some tips for me?");
                setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Find a hatch");
                setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Find a hatch... Oh.. and here you have a poison!");
                setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Thank you Wizard!");
            } else {
                showMessage(mainCharacterSpeech, characterAudio, "Nope nothing here...");
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
            }
            break;
        case "LeverOne":
            if (!checkItem("Lever1")) {
                getItem("Lever1");
                showMessage(mainCharacterSpeech, characterAudio, "CLICK! It lowered the spikes..");
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
            } else {
                showMessage(mainCharacterSpeech, characterAudio, "Nope nothing here...");
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
            }
        case "Tower":
            counterPortrait.style.opacity = 1;
            showMessage(mainCharacterSpeech, characterAudio, "That`s the tower..<br> Wait, there is someone up there!");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Do you know where my sword is?");
            setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Try to find a way...");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "HUH");
            setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "I`ll meet you in the dungeon...");
            setTimeout(function () { counterPortrait.style.opacity = 0; }, 16 * sec);
            setTimeout(showMessage, 16 * sec, mainCharacterSpeech, characterAudio, "I hope you have my sword! >:(");
            break;
        //aan elkaar typen id
        case "HouseGhost":
            counterPortrait.style.opacity = 1;
            showMessage(mainCharacterSpeech, characterAudio, "Hello!");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Do you know where my sword is?");
            setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Look out for the ghost in purple...");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "The one up the watchtower?");
            setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "He is dangerous and not to be trusted...");
            setTimeout(function () { counterPortrait.style.opacity = 0; }, 16 * sec);
            setTimeout(showMessage, 16 * sec, mainCharacterSpeech, characterAudio, "Alright.... goodbye I guess..");
            break;
        case "tilemap":
            showSpeech("sdfg");
            break;
        default:
            // do something when it doesn't have a case
            hideSpeech(mainCharacterSpeech, characterAudio);
            hideSpeech(counterSpeech, counterAudio);
            break;
    }

    //console.log(x);
    function getItem(item) {
        if (!checkItem(item)) {
            inventory.push(item);
            showItem(item);
        }

    }

    function checkItem(item) {
        return inventory.includes(item);
    }

    function showItem(toDoValue) {
        //Make a list item from scratch and store it in a variable
        let listItem = document.createElement("li");

        //fill that list item with value of inputfield
        listItem.appendChild(document.createTextNode(toDoValue));

        //find UL with id todoContainer and attach the list item to it.
        inventoryList.appendChild(listItem);
    }

    //     function removeItem(itemName, itemId) {
    //         //remove item in Array
    //         inventory = inventory.filter(function(newInventory){
    //             return newInventory !== itemName;
    //         });
    //         //removes list element in HTML
    //     document.getElementById(itemId).remove();

    // }
    //     }
    //     getItem("Lever1");
    //     removeItem("Lever1");


    //put in css on main character "Transition: all us ease-in-out;

    function showMessage(targetBubble, targetAudio, dialog) {
        targetAudio.currentTime = 0;
        targetAudio.play();
        targetBubble.style.opacity = 1;
        targetBubble.innerHTML = dialog;
        setTimeout(hideSpeech, 4000);
    }
    function hideSpeech(targetBubble, targetAudio) {
        targetBubble.style.opacity = 0;
        targetBubble.innerHTML = "...";
        targetAudio.pause(); 
    }

}