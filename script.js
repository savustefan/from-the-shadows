/*Buttons Setup*/

function HowToPlay() {
    let HowToPlay = prompt("Welcome to your adventure! This games plays around prompt() method. When you need to make a decision, write the desired choice in the text box, respectively the letter of the corresponding choice. I strongly recommend to listen to the prologue before starting. Enjoy!", "Press Ok to close this window")
}

/*Prologue setup*/
let Audio = document.getElementById("PrologueAudio")
function PlayAudio() {
    Audio.play()
}

/*Chapter 1*/
function Start() {
    alert("Chapter 1: When light becomes shadow, fear the age of darkness - Pagan prayer")
    alert("{??} It was about like any other day; rob the rich, don't get caught by the city guard... Business as usual. I was about to go the Clocktower to get some rest when I saw that the entrance's door opened; i had a surprise guest.")
    let Clocktower = prompt("A - To through the door/ B - Find an alternative.")

    if (Clocktower === "A" || Clocktower === "B")
        alert("Achievement unlocked! First Step - Make your first choice")
    if (Clocktower === "A") {
        alert("Keeper: I've heard a lot about you. Your skill proceeds your reputation, Master Thief.\n" +
            "{??}: Who are you?\n" +
            "Keeper Marthus : My name is brother Marthus and we need you help.\n" +
            "{??}: I accepted right away, I knew there was gonna be lots of coin involved.")
    } else if (Clocktower === "B") {
        alert("{??} I climbed over the rooftops and got to my hideout. It took a while, but nobody was here. On the table, there was a note\n" +
            "\t{Note}Master Thief, we need your help. Come to St. John's Cathedral.")
    }


    let HeroName = prompt("I'm glad you came, Master Thief. Or should i call you... (What is the name of your character?)")
    let gender = prompt("What is the gender of your character? (Male, Female)")
    let race = prompt("What is your race? (Human, Elf, Tiefling")

    /**------------------------------------------**/
    if (race !== "Human", "Elf", "Tierfling") {
        prompt(race + "is not accepted into the City. Only Human, Elf and Tiefling")
    }

    let background = prompt("What was your previous job? (Knight, Scholar, Bard)")
    if (gender === "Male") {
        alert("Master " + HeroName + ", we require your services.")
    } else if (gender === "Female") {
        alert(HeroName + ". Huh, never thought that the Master Thief will be a woman. Unimportant, we have more pressing matters.")
    }

    alert("Keeper Marthus: Those damn Pagans managed to steal your Book of Glyphs. We need you to go in their territory and steal it back")
    if (background === "Scholar") {
        alert("That book contains secrets of the Glyphs, including their location, and how nullifies Pagan magic.")
    } else if (background === "Knight" || background === "Bard") {
        alert("I suspect a substantial reward.")
    }

    alert("Keeper Marthus: I will take that as a 'Ýes'.")

    /*Chapter 2*/

    alert("Chapter 2\n" +
        "The Hammer is the most blessed of all the Builder's works: ‘Tis both a tool for building, and a weapon against thy foes. - The Hammer Book of Lessons")
    alert(HeroName + ": Those Keepers said something that Pagans will have special artifacts that I need to destroy to prevent them from using the book's power. Hammer time!")
    if (race === "Elf" && background === "Bard") {
        alert("(Ability activated - Whisper Ways) *footsteps*\n" +
            "{Hammerite Guard 1}: Shall we gather for whisky and cigars tonight?\n" +
            "{Hammerite Guard 2}: Are you kidding? We need to keep watch on The Builder's Hammer. Those Pagans may attack anytime.\n" +
            "{Hammerite Guard 1}: Oh, yeah. They moved it to the Master Forger's Quarters.\n" +
            "{Hammerite Guard 2}: SHHHHHHH, IDIOT! You don't know who could listen from the shadows.")
    } else if (race === "Human", "Tierfling"){
        alert()
    }
}
