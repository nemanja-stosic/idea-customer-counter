
let peopleCounter = document.getElementById('people-counter');
let previousEntries = document.getElementById('save-entries');

let count = 0;

//textContent is aware of spaces
function increment() {
    count++;
    peopleCounter.textContent = count;
}

function save() {
    let temp = count + ' - ';
    previousEntries.textContent += temp;
    count = 0;
    peopleCounter.textContent = count;
}

function finish() {
    let totalNumberOfCustomers = document.getElementById('total-number-of-customers');


    //The regular expression \d+ matches one or more digits, 
    //and the g flag ensures that all matches are returned as an array.
    let entries = previousEntries.innerHTML.match(/\d+/g);
    let total = 0;
    for (let i = 0; i < entries.length; i++) {
        total += parseInt(entries[i]);
    }
    totalNumberOfCustomers.innerHTML += total;
    totalNumberOfCustomers.style.fontSize = "x-large";

    document.querySelector('#add-button').disabled = true;
    document.querySelector('#save-button').disabled = true;
    document.querySelector('#finish-button').disabled = true;
}