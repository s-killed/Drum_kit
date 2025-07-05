//button press !!
for(var i = 0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
});
}

//keyboard press!!
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// sounds !!
function makeSound(key){

    switch (key) {
        case "l":
                var tom_4sound = new Audio('sounds/tom-4.mp3');
                tom_4sound.play();
            break;
        case "k":
                var tom_3sound = new Audio('sounds/tom-3.mp3');
                tom_3sound.play();
            break;

        case "j":
                var tom_2sound = new Audio('sounds/tom-2.mp3');
                tom_2sound.play();
            break;

        case "d":
                var tom_1sound = new Audio('sounds/tom-1.mp3');
                tom_1sound.play();
            break;

        case "s":
            var snareSound = new Audio('sounds/snare.mp3');
            snareSound.play();
            break;

            case "a":
            var kickSound = new Audio('sounds/kick-bass.mp3');
            kickSound.play();
            break;

            case "w":
            var crashSound = new Audio('sounds/crash.mp3');
            crashSound.play();
            break;
    
        default:console.log(key) ;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 150);

}