// Load a character from the database

// Define constants for buttons and elements
const strengthScoreEl = document.querySelector("#strength-score");
const intelligenceScoreEl = document.querySelector("#intelligence-score");
const wisdomScoreEl = document.querySelector("#wisdom-score");
const dexterityScoreEl = document.querySelector("#dexterity-score");
const constitutionScoreEl = document.querySelector("#constitution-score");
const charismaScoreEl = document.querySelector("#charisma-score");



// Handle incrementing or decrementing stats
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
            targetEl.textContent = "10"
        }
        else {
            targetEl.textContent = "11"
        }

        // TODO: PUT the new score to the database
    }
    else {
        console.log("Not an increment button");
    }
})

// Handle randomizing stats

// Handle changing the name

// Handle submit button
