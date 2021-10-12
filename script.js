function Start() {
    let HeroName = prompt("What is the name of your character?")
}

function HowToPlay() {
    let HowToPlay = prompt("Welcome to your adventure! This games plays around prompt() method. When you need to make a decision, write the desired choice in the text box. I strongly recommend to listen to the prologue before starting your adventure. Enjoy!", "Press Ok to close this window")
}

/*Prologue setup*/
let Audio = document.getElementById("PrologueAudio")
function PlayAudio() {
    Audio.play()
}
