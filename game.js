

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//              initializing buttons and variables                  //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


const buttons = [

    btn1 = document.getElementById("1"),
    btn2 = document.getElementById("2"),
    btn3 = document.getElementById("3"),
    btn4 = document.getElementById("4"),
    btn5 = document.getElementById("5"),
    btn6 = document.getElementById("6"),
    btn7 = document.getElementById("7"),
    btn8 = document.getElementById("8"),
    btn9 = document.getElementById("9"),
    btn10 = document.getElementById("10"),
    btn11 = document.getElementById("11"),
    btn12 = document.getElementById("12"),
    btn13 = document.getElementById("13"),
    btn14 = document.getElementById("14"),
    btn15 = document.getElementById("15"),

];

letter_button = document.getElementById("letter");
skip_button = document.getElementById("skip");
restart_button = document.getElementById("restart");

//50% of these letters
const high_letters = [

    "E", "T", "A", "I", "N", "O", "S", "H", "R", "D",

];

//35% of these letters
const med_letters = [

    "L", "U", "C", "M", "F", "W", "Y", "B",

];

//15% of these letters
const low_letters = [

    "V", "K", "Q", "J", "X", "Z",

];

//keeps track of how many skips are left
numOfSkips = 10;

getRandomLetter();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                           Game Logic                             //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


//clickable pyramid buttons
buttons.forEach(button => {

    button.addEventListener('click', event => {

        //gets the button ID of the one clicked
        const buttonId = event.target.id;

        //changes the text of the button with the letter 
        button.textContent = letter_button.textContent;

        //disabled the button and added the class
        event.target.disabled = true;
        event.target.className = 'disabled';

        //new letter
        getRandomLetter();

    });

});

//skip button
skip_button.addEventListener('click', function () {

    //making sure the skips is under 10
    if (numOfSkips != 0) {

        numOfSkips--;
        getRandomLetter();

        if (numOfSkips == 0) {

            skip_button.disabled = true;
            skip_button.className = 'disabled';

        }

    }

})

//restart button
restart_button.addEventListener('click', reset)

//gets a random letter
function getRandomLetter() {

    //chosing what set of letters to choose from
    random_number = Math.floor(Math.random() * 20);

    //50% to get the high frequency letters
    if (random_number < 10) {

        //chosing a number in that list with equal chance
        num = Math.floor(Math.random() * high_letters.length);
        letter = high_letters[num];

    }
    //35% to get the med frequency letters
    else if (random_number > 9 && random_number < 17) {

        //chosing a number in that list with equal chance
        num = Math.floor(Math.random() * med_letters.length);
        letter = med_letters[num];

    }
    //15% to get the low frequency letters
    else {

        //chosing a number in that list with equal chance
        num = Math.floor(Math.random() * low_letters.length);
        letter = low_letters[num];

    }

    //displaying the new letter
    letter_button.textContent = letter;

}

//resets the game board
function reset() {

    buttons.forEach(button => {

        button.classList.remove('disabled');
        button.disabled = false;
        button.textContent = "__";

    });

    getRandomLetter();

    skip_button.classList.remove('disabled');
    numOfSkips = 10;
    skip_button.disabled = false;


}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//