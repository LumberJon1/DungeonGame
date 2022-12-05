
// Define constants for buttons and elements...

// Ability score elements
const strengthScoreEl = document.querySelector("#strength-score");
const intelligenceScoreEl = document.querySelector("#intelligence-score");
const wisdomScoreEl = document.querySelector("#wisdom-score");
const dexterityScoreEl = document.querySelector("#dexterity-score");
const constitutionScoreEl = document.querySelector("#constitution-score");
const charismaScoreEl = document.querySelector("#charisma-score");

// Header elements
const currentHPEl = document.querySelector("#currentHP");
const maxHPEl = document.querySelector("#maxHP");
const armorClassEl = document.querySelector("#armorClass");
const nameEl = document.querySelector("#characterName");
const levelEl = document.querySelector("#level");
const xpEl = document.querySelector("#xp");
const nfnlEl = document.querySelector("#nfnl");

// Randomizer elements
const randomizeScoresEl = document.querySelector("#randomizeScores");
const randomizeNameEl = document.querySelector("#randomizeName");


// Load a character from the database
const loadCharacter = () => {
    // Query the database with a general GET request for all characters

    // Store the length of the response and randomly select a character from the array of responses

    // Load the character's attributes into the elements defined above
}


// Handle randomizing stats
const randomizeStats = () => {
    let abilityScoresArray = document.getElementsByClassName("abilityScore");

    for (let i = 0; i < abilityScoresArray.length; i++) {
        // Max roll will be 18 but min is 3 to avoid validation errors on creating record
        let randomRoll = Math.floor(Math.random() * 16) + 3;
        abilityScoresArray[i].textContent = randomRoll;
    }
}

// Handle listeners for randomizing, incrementing or decrementing stats
document.addEventListener("click", (event) => {
    let modifier = event.target.dataset.modifier;
    let target = event.target.dataset.target;

    // Only enter into the conditional if these data attributes exist for the clicked element
    if (target) {
        console.log("Target is "+target);
        console.log("Modifier is "+modifier);

        // Use the data attribute to find the element that corresponds to the button
        let targetEl = document.querySelector(`#${target}-score`);
        console.log(targetEl.textContent);
        // Conditionally add to or subtract from the score
        if (modifier === "minus") {
            targetEl.textContent = parseInt(targetEl.textContent)-1;
        }
        else {
            targetEl.textContent = parseInt(targetEl.textContent)+1;
        }

        // TODO: PUT the new score to the database
    }
    else if (event.target.getAttribute("id") === "randomizeScores") {
        randomizeStats();
    }
    else {
        console.log("Not an increment button");
    }
})


// Handle changing the name

// Handle submit button
