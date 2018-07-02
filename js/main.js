/* ----------Trivia---------- */
const triviaInput = document.querySelector('#triviaInput');
triviaInput.addEventListener('input', getTriviaFetch);

// Trivia Facts Text
const triviaFact = document.querySelector('#triviaFact');
const triviaText = document.querySelector('#triviaText');

/* ----------Math---------- */
const mathInput = document.querySelector('#mathInput');
mathInput.addEventListener('input', getMathFetch);

// Math Facts Text
const mathFact = document.querySelector('#mathFact');
const mathText = document.querySelector('#mathText');

/* ----------Date---------- */
const dateInput = document.querySelector('#dateInput');
dateInput.addEventListener('input', getDateFetch);

// Date Facts Text
const dateFacts = document.querySelector('#dateFact');
const dateText = document.querySelector('#dateText');


/* function getFactAjax() {
    let number = numberInput.value;
    if (number !== '') {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/' + number);

        xhr.onload = function () {
            if (this.status === 200) {
                fact.style.display = 'block';
                factText.innerText = this.responseText;
            }
        }

        xhr.send();
    }
} */

// Get trivia related facts
function getTriviaFetch() {
    let trivia = triviaInput.value;

    fetch('http://numbersapi.com/' + trivia)
        .then(response => response.text())
        .then(data => {
            if (trivia != '') {
                triviaFact.style.display = 'block';
                triviaText.innerText = data;
            }
        })
        .catch(err => console.log(err));
}

// Get math related facts
function getMathFetch() {
    let mathNumber = mathInput.value;

    fetch('http://numbersapi.com/' + mathNumber + '/math')
        .then(response => response.text())
        .then(data => {
            if (mathNumber != '') {
                mathFact.style.display = 'block';
                mathText.innerText = data;
            }
        })
        .catch(err => console.log(err));
}

// Get date related facts
function getDateFetch() {
    let dateInput = document.querySelector('#dateInput');
    let date = dateInput.value;

    fetch('http://numbersapi.com/' + date + '/date')
        .then(response => response.text())
        .then(data => {
            if (date != '') {
                dateFact.style.display = 'block';
                dateText.innerText = data;
            }
        })
        .catch(err => console.log(err));
}