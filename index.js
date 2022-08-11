

function sounds(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/neta-neta-har-koi-kheta.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/bhauXD.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/chala-ja-bsdk.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/abelavde.mp3");
            tom4.play();
            break;
        case "j":
            var kick = new Audio("sounds/fuck_me_daddy_sick_dropgrabvidtomp3-mp3cut.mp3");
            kick.play();
            break;
        case "k":
            var snare = new Audio("sounds/yamate-kudesai.mp3");
            snare.play();
            break;
        case "l":
            var crash = new Audio("sounds/dhabe-pe.mp3");
            crash.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);

}

for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {

    document.querySelectorAll(".drum")[index].addEventListener("click",function () {

        var buttonInnerHTML = this.innerHTML;

        sounds(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keydown",function (event) {
    
    sounds(event.key);
    buttonAnimation(event.key);

});

