/*Buttons Setup*/

function HowToPlay() {
    let HowToPlay = Swal.fire({
        title: "'It was the beginning of a very long education...' - Garret, The Thief",
        imageUrl: 'trainer.png',
        imageAlt: 'Tutorial image',
        imageHeight: 250,
        text: "Welcome, young adventurer! I will instruct you the various skills you need to know before embarking on your quest.\n" +
            "This games plays around prompt() method. When you need to make a decision, write the desired choice in the text box, respectively the letter of the corresponding choice.\n" +
            "Each background and class offers different set of skills and abilities.\n" +
            "Now you are ready, listen to the prologue. Enjoy!",
        showClass: {
            popup: "animate__animated animate__zoomIn"
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutDown"
        }
    })
}

/*Prologue setup*/
let Audio = document.getElementById("PrologueAudio")
function PlayAudio() {
    Audio.play()
}


/*Chapter 1*/

function Start() {

/*Caracter Setup*/
    function Caracter (name, sneak, persuade) {
        this.name = name;
        this.sneak = sneak;
        this.persuade = persuade;
    }


    let Hero = new Caracter("Thief", 5, 4)
    //var hammerite = new Caracter("Hammerite, 4, 5)
    //let pagan = new Caracter("Pagan", 6, 4) - to be further tested


    alert("Chapter 1: When light becomes shadow, fear the age of darkness - Pagan prayer")
    alert("{??}: It was about like any other day; rob the rich, don't get caught by the city guard... Business as usual. I was about to go the Clocktower to get some rest when I saw that the entrance's door opened; I had a surprise guest.")
    let Clocktower = prompt("A - To through the door/ B - Find an alternative.")

    if (Clocktower === "A" || Clocktower === "B")
        alert("Achievement unlocked! First Step - Make your first choice")
    if (Clocktower === "A") {
        alert("Keeper: I've heard a lot about you. Your skill proceeds your reputation, Master Thief.\n" +
            "{??}: Who are you?\n" +
            "Keeper Marthus: My name is Keeper Marthus and we need you help.\n" +
            "{??}: I knew something was up, but the instinct told me there will be lot of coins to be made.")
    } else if (Clocktower === "B") {
        alert("{??}: I climbed over the rooftops and got to my hideout. It took a while, but nobody was here. On the table, there was a note\n" +
            "\t{Note}: Master Thief, we need your help. Come to St. John's Cathedral." +
            "{??}: Keepers... Something tells me this is not good.")
    }

    /**------------------------------------------**/


    let HeroName = prompt("Master Thief, you are a sight for the sore eyes. Or should i call you... (What is the name of your character?)")
    let gender = prompt("What is the gender of your character? (Male, Female)")
    let race = prompt("What is your race? (Human, Elf, Tiefling")


    if (race === "Human") {
        Hero.persuade--;
    } else if (race === `Elf`) {
        Hero.sneak++;
    } else if (race === "Tierfling") {
        Hero.sneak++;
        Hero.persuade++;
    }

    /**------------------------------------------**/

    let background = prompt("What was your previous job? (Knight, Scholar, Bard)")
    if (gender === "Male") {
        alert("Master " + HeroName + ", we require your services.")
    } else if (gender === "Female" && race === "Elf") {
        alert("Master " + HeroName + ". Your agility is cunning is unmatched. Never thought you will be an elf. Nevermind, to the matters at hand.")
    } else if (gender === "Female")
        alert(HeroName + ". I'm glad you came because we need you help.")

    alert("Keeper Marthus: Those damn Pagans managed to steal your Book of Glyphs. We need you to go in their territory and steal it back")
    if (background === "Scholar") {
        alert("(Scholar Perk - The First Sin): That book contains secrets of the Glyphs, including their location and how nullifies Pagan magic. This is bad...")
    } else if (background === "Knight" || background === "Bard") {
        alert(HeroName +": I suspect a substantial reward.")
    }

    alert("Keeper Marthus: You will take the quest then.")


    if (Clocktower === "A" && background === "Bard") {
        alert("(Ability activated - Toss a coin to your thief) Your man said something earlier in the Clocktower about lot of coins. Guess he was speaking the truth.")
    }

    alert("Achievement unlocked! 2 Minutes to Midnight - Finish Chapter 1")


    /*Chapter 2*/

    alert("Chapter 2\n\n" +
        "'The Hammer is the most blessed of all the Builder's works: ‘Tis both a tool for building, and a weapon against thy foes.' - The Hammer Book of Lessons")
    alert(HeroName + ": Those Keepers said something that Pagans will have special artifacts that I need to destroy to prevent them from using the book's power. It's Hammer time!")
    alert("*You arrived at the Hammerite's Cathedal*\n\n" +
           HeroName +": Here we are. That 'holy' thing must be somewhere in there. Hmm...")
    if (race === "Elf" && background === "Bard") {
        alert("(Ability activated - Whisper Ways) *footsteps*\n\n" +

            "{Hammerite Guard 1}: Shall we gather for whisky and cigars tonight?\n" +
            "{Hammerite Guard 2}: Are you kidding? We need to keep watch on The Builder's Hammer. Those Pagans may attack anytime.\n" +
            "{Hammerite Guard 1}: Oh, yeah. They moved it to the Master Forger's Quarters.\n" +
            "{Hammerite Guard 2}: SHHHHHHH, IDIOT! You don't know who could listen from the shadows.")
        var guard = prompt(HeroName + ": Only 1 guard at the entrance. This should be pretty easy.\n\n" +
            "A - Sneak past the guard and go inside" +
            "B - Knock him out with your trusty Blackjack")

    } else if (race === "Human", "Tierfling"){
        let entrance = prompt(HeroName + ": Only 1 guard at the entrance. This should be pretty easy.\n\n" +
            "A - Sneak past the guard and go inside" +
            "B - Persuade the guard to tell you about the Hammer's location")
    }
    if (guard === "A" && Hero.sneak >= 6) {
        alert("Succes")
    } else if (guard === "A" && Hero.sneak < 7){
                alert("Fail")
    }
}

