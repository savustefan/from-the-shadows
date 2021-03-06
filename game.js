/*Buttons Setup*/

function HowToPlay() {
    let HowToPlay = Swal.fire({
        title: "'It was the beginning of a very long education...' - Garrett, The Thief",
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

/*Character Setup*/
    function Character (name, sneak, persuade, notoriety) {
        this.name = name;
        this.sneak = sneak;
        this.persuade = persuade;
        this.notoriety = notoriety;
    }


    let Hero = new Character("Thief", 5, 5, 0)
    let hammerite = new Character("Hammerite", 6, 5, 0)


    alert("Chapter 1\n\n" +
        "When light becomes shadow, fear the age of darkness - Pagan prayer")
    alert("{??}: It was about like any other day; rob the rich, don't get caught by the city guard... Business as usual. I was about to go the Clocktower to get some rest when I saw that the entrance's door opened; I had a surprise guest.\n\n")
    let Clocktower = prompt("A - To through the door\n B - Find an alternative.")

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
    let race = prompt("What is your race? (Human, Elf, Tiefling)")


    if (race === "Human") {
        Hero.persuade--;
        Hero.sneak--;
    } else if (race === `Elf`) {
        Hero.notoriety++;
        Hero.sneak++;
    } else if (race === "Tierfling") {
        Hero.sneak++;
        Hero.persuade++;
        Hero.notoriety--;
    }

    /**------------------------------------------**/

    let background = prompt("What was your previous job? (Knight, Scholar, Bard)")
    if (gender === "Male") {
        alert("Master " + HeroName + ", we require your services.")
    } else if (gender === "Female" && race === "Elf") {
        alert("Master " + HeroName + ". Your agility is cunning is unmatched. Never thought you will be an elf. Nevermind, to the matters at hand.")
    } else if (gender === "Female")
        alert(HeroName + ". I'm glad you came because we need you help.")

    alert("Keeper Marthus: Those damn Pagans managed to steal your Book of Glyphs. We need you to go in their territory and steal it back.")
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
        "'The Hammer is the most blessed of all the Builder's works: ???Tis both a tool for building, and a weapon against thy foes.' - The Hammer Book of Lessons")
    alert(HeroName + ": Those Keepers said something that Pagans will have special artifacts that I need to destroy to prevent them from using the book's power. Time I pay those Hammerites a visit.")
    alert("*You arrived at the Hammerite's Cathedral*\n\n" +
           HeroName +": Here we are. That 'holy' thing must be somewhere in there. Hmm...")
    if (race === "Elf" && background === "Bard") {
        alert("(Ability activated - Whisper Ways) *footsteps*\n\n" +

            "{Hammerite Guard 1}: Shall we gather for whisky and cigars tonight?\n" +
            "{Hammerite Guard 2}: Are you kidding? We need to keep watch on The Builder's Hammer. Those Pagans may attack anytime.\n" +
            "{Hammerite Guard 1}: Oh, yeah. They moved it to the Master Forger's Quarters.\n" +
            "{Hammerite Guard 2}: SHHHHHHH, IDIOT! You don't know who could listen from the shadows.")
        var guard = prompt(HeroName + ": Only 1 guard at the entrance. I could...\n\n" +
            "A - Go inside Forger's Quarters" +
            "B - Knock him out with your trusty Blackjack")

    } else if (race === "Human", "Tierfling"){
        var entrance = prompt(HeroName + ": Only 1 guard at the entrance. This should be pretty easy.\n\n" +
            "A - Sneak past the guard and go inside\n" +
            "B - Persuade the guard to tell you about the Hammer's location")
    }

    if (guard === "B"){
       Hero.notoriety--;
       alert("*You knock down the guard with your trusty Blackjack, then enter the Cathedral*")
    }

    if (guard || entrance === "A" && Hero.sneak >= hammerite.sneak) {
        alert("*You sneaked past the guard and entered the Cathedral*")
    } else if (guard || entrance === "A" && Hero.sneak < hammerite.sneak){
        Hero.notoriety++;
        alert("*The guard notices you, but you managed to escape and entered the Cathedral. Stick to the shadows...*")
    }

    if (entrance === "B" && Hero.persuade > hammerite.persuade){
        alert("*You grab the guard from behind with your knife against his neck\n\n" +
              HeroName + ": Tell me where you keep your so-called holy relic\n" +
              "Hammerite Guard: I will never you. The Builder's Hammer is a sacred thing; not fit for an apostle like you")
        alert("*You start to make a small cut on his neck\n\n"+
               "Hammerite Guard: OKAY, OKAY! May St. Edgar watch over me! The Hammer is in the Master Forge.\n" +
                HeroName + ": See, it was that easy. Now good night\n\n" +
                "*You knock down the guard with your trusty Blackjack")
    } else if (entrance === "B" && Hero.persuade < hammerite.persuade){
        alert("*You grab the guard from behind with your knife against his neck\n\n" +
            HeroName + ": Tell me where you keep your so-called holy relic\n" +
            "Hammerite Guard: I will never you. The Builder's Hammer is a sacred thing; not fit for an apostle like you")
        alert("*You knock down the guard with your trusty Blackjack and start to search his pockets. There you find a key and a note.\n\n" +
            "{Note}: Notice to all Brothers,\n\n" +
            "The Builder's Hammer had been moved to Master Forger's Quarters on the occasion of St. Edgar's Day." +
            "Be ever diligent, For thine enemies are a multitude, And sin never sleeps.\n\n" +
            "May Master Builder watch over all of us!")
    }

    alert("*You entered the Cathedral and gone straight for the Hammer*")
    alert("Achievement unlocked! Hammer Time! - Finish Chapter 2")

    /*Chapter 3*/

    alert("Chapter 3\n\n" +
        "'There is nothing as promising as the opening of a book. There is nothing as final as its shutting. - Keeper Scribe Lessons, Part 4'")
    alert(HeroName + ": *After retrieving the Hammer, I enter pagan's territory via an old library...*")

    if (background === "Scholar" || race === "Tierfling"){
        alert(HeroName + ": So many books... *but one particularly caught my attention; Keeper Book of Truths.* 'There are glyphs that can cause suffering and those that can end it...and precious few who know the difference'." +
            "Huh, those glyphs imprisons their magic; their way of life. I will need to made a choice...* ")
    } else if (background === "Knight" || background === "Bard"){
        alert(HeroName + ": *and, with Blackjack in my hand, I was ready to put a stop to this.*")
    }

    alert("*Entering an old ruin, you see strange markings on the wall... Down a long corridor you see a chamber with strange artifacts*")
    var ending = prompt(HeroName + ": This must be it. Now I will...\n" +
        "A - Destroy the artifacts" +
        "B - Leave Pagans have thief fun; this is not your battle")

    if (ending === "A"){
        alert("*Begins to snow when you return back to 'The City'. Everything is peaceful, silence in the night...*\n" +
            HeroName + ": Huh, Keepers... Time I get my cut." +
            "{??}: And you should have it. But do you think you have won?" +
            HeroName + ":If you haven't noticed I just saved the world." +
            "{??}: As we knew you would, as it had to be." +
            HeroName + ":Now I remember why I hate doing jobs for Keepers." +
            "{??}: And I remember why we turn a blind eye to your misdeeds." +
            HeroName + ":What do you want from me now? To join your little cult?" +
            "{??}: Very well, I'l speak my mind; you have accomplished that It was written, and yes... You've done it well. You don't belong to us, yet you will have great need for us." +
            HeroName + ":I don't think so, I'm done with relics, and with your kind as well." +
            "{??}: You cannot run from life as you did with us, Garrett. Life has a way of finding you, sooner rather than later, no mather you great at sneaking you are. Listen, there is a book you aren't aware of. I tell you, it would be wise to read it now." +
            HeroName + ":You, Keepers, and all your books..." +
            "{??}: You have more friends than you know." +
            HeroName + ":Tell them I don't need any books, glyph or anything at all. Tell them I'm done. Tell them it's over; Garrett is done." +
            "{??}: I will tell them this: nothing is changed, all it is as it was written. The Pagans are gone, beware the dawn of The Metal Age...")
    } else if (ending === "A" && background === "Scholar" || race === "Tiefling"){
        alert("*Begins to snow when you return back to 'The City'. Everything is peaceful, silence in the night...*\n" +
            HeroName + ": Huh, Keepers... Time I get my cut." +
            "{??}: And you should have it. But do you think you have won?" +
            HeroName + ":If you haven't noticed I just saved the world." +
            "{??}: As we knew you would, as it had to be." +
            HeroName + ":Now I remember why I hate doing jobs for Keepers." +
            "{??}: And I remember why we turn a blind eye to your misdeeds." +
            HeroName + ":What do you want from me now? To join your little cult?" +
            "{??}: Very well, I'l speak my mind; you have accomplished that It was written, and yes... You've done it well. You don't belong to us, yet you will have great need for us." +
            HeroName + ":I don't think so, I'm done with relics, and with your kind as well." +
            "{??}: You cannot run from life as you did with us, Garrett. Life has a way of finding you, sooner rather than later, no mather you great at sneaking you are. Listen, there is a book you aren't aware of. I tell you, it would be wise to read it now." +
            HeroName + ":I find it in the library. I know what you planned to do from the start; to create a era, a new age, that of metal and destroy the old ways. I did just that, you used me as your pawn, now tell your Keeper friends I'm done. Tell them it's over; Garrett is done." +
            "{??}: Very well, Garrett. You services had been terminated and your task completed. You served a great cause. Now, goodbye...")
    } else if (ending === "B" && Hero.notoriety >= 2){
        alert(HeroName + ": *I found more than I bargained for. I didn't want to leave these precious relics on the hands of Pagans. Maybe the Keeper have gold, but these would sell well enough on the black market to make me rich for life.*" +
            "*Begins to snow when you return back to 'The City'.... On the road, you see corpses of the City guard, Pagans and Hammerites..." +
            HeroName + ": Huh, they fought until the last one. Their blood painted the Old Quarter red." +
            "{??}: This was not our deal." +
            HeroName + ":I thought I told you, I don't like being followed." +
            "{??}: And I thought you were told you to destroy the artifacts, not steal them" +
            HeroName + ":Plans have changed. I was a " + background + ", but those days are long gone. What did you expected from a thief, anyway?" +
            "{??}: I was wrong, to... to trust in you; you haven't changed a bit. You just disobeyed the scriptures. They will come for you, you know, no matter how good you are at sneaking." +
            HeroName + ": Tell your friends I can't wait to met them. See ya around... Keeper.")
    } else if (ending === "B"){
        alert("*Begins to snow when you return back to 'The City'.... On the road, you see corpses of the City guard, Pagans and Hammerites..." +
            HeroName + ": Huh, they fought until the last one. Their blood painted the Old Quarter red." +
            "{??}: This was not our deal." +
            HeroName + ":I thought I told you, I don't like being followed." +
            "{??}: And I thought you were told you to destroy the artifacts" +
            HeroName + ": I got tired of being a good little servant. I always hatted the Keeper." +
            "{??}: You know you won't get payed, right?" +
            HeroName + ": I'm a thief, remember. Stealing from Keeper is more fun than going destroy some old relics." +
            "{??}: The creation of Metal Age would be impossible now, it's all your fault. If you get caught, they will kill you on sight." +
            HeroName + "I will take my chances. I prefer shadows anyway. And I don't want to see you ever again..." +
            "{??}: Very well, my friend...")
    }

    alert("Achievement unlocked! A dawn of a new era - Finish the game")
    alert("Thank you for playing! I hope you enjoyed it. <3")
    
    }













