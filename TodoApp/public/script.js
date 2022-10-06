const socket = io.connect('http://localhost:8000/');

class Card {
    constructor(id, english, turkish) {
        this.id = id;
        this.english = english;
        this.turkish = turkish;
    }

    getEnglish() {
        return this.english;
    }


    getTurkish() {
        return this.turkish;
    }

    setEnglish(word) {
        this.english = word;
    }

    setTurkish(word) {
        this.turkish = word;
    }

    changeWords() {
        [this.english, this.turkish] = [this.turkish, this.english]
    }


    createCard() {

        let createdDiv = document.createElement("tr");
        createdDiv.id = counter;
        createdDiv.innerHTML =
            `
        <td>${this.getEnglish()}</td>
        <td>${this.getTurkish()}</td>
        <button class="btn" onclick="deleteCard(${createdDiv.id})">Delete</button>
        `;
        addWord.appendChild(createdDiv);
        counter++;
    }

    getCards() {
        for (let i = 0; i < cardArray.length; i++) {
            let createdDiv = document.createElement("tr");
            createdDiv.id = counter;
            createdDiv.innerHTML =
                `
                <td>${cardArray[i].getEnglish()}</td>
                <td>${cardArray[i].getTurkish()}</td>
                <button class="btn" onclick="deleteCard(${createdDiv.id})">Delete</button>
                `;
            addWord.appendChild(createdDiv);
        }
    }

}


let learnBtn = document.getElementById("learnBtn");
let testBtn = document.getElementById("testBtn");
let addWord = document.getElementById("Words");
let cardArray = [];
let counter = 0;





function main() {
    event.preventDefault();

    let englishWord = document.getElementById("formGroupExampleInput").value;
    let turkishWord = document.getElementById("formGroupExampleInput2").value;

    if (englishWord == "" || turkishWord == "") return;

    let card = new Card(counter, englishWord, turkishWord);

    cardArray.push(card);

    document.getElementById("form").reset();

    card.createCard();



    socket.emit('chat', {

        array: cardArray,

    });
    socket.on('chat', data => {
        console.log(data);
    });

}


function deleteCard(index) {

    let cardRemove = document.getElementById(index);
    addWord.removeChild(cardRemove);

    cardArray = cardArray.filter(card =>
        card.id != index
    );

    counter--;
}


socket.on("connect", () => {

    if (socket.connected) {
        console.log("connection is succesfully");
    }
});