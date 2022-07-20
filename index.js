function handleClick(){
    let buttonSound=this.innerHTML;
    handleKey(buttonSound);
    createAnimation(buttonSound)
    // var audio=new Audio("sounds/tom-1.mp3");
    // audio.play();
   

}

function handleKey(keychar){
    switch (keychar) {
        case "w":
            let tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            let kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "k":
            let crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        default:
            console.log(buttonSound+" not a write button")
            break;
    }

}

function detectKey(event){
    handleKey(event.key);
    createAnimation(event.key)
}
// document.addEventListener("keydown",function(event){
//     handleKey(event.key);
//     createAnimation(event.key);
// });
document.addEventListener("keydown",detectKey);


for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
   
}


function createAnimation( currentKey)
{
    let activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

