const wordBank = ["dog", "cat", "fish", "Minecraft Wither Storm, Roy, Ryan, Mom, Dad, Rhea, Roy, Angela, Ryhonhong"]

let pickedWord = [];
let currentStatus = [];
document.querySelector(".start-button").addEventListener("click", function() {
    console.log("Plz press this amazing, horrifiying, disgusting button!")

    // pick a random wordBank
const randomIndex = Math.floor(Math.random() * wordBank.length);
console.log(wordBank[randomIndex]);
const randomWord = wordBank[randomIndex]
// create picked word array
for (let i = 0; i < randomWord.length; i++) {
    pickedWord.push(randomWord[i]);
    console.log(randomWord[i]);

    currentStatus.push("_");
    console.log(randomWord[i]);
    document.querySelector(".word-blanks").textContent =  currentStatus.join(" ");
}

console.log(pickedWord, currentStatus);
});

document.addEventListener("keydown", function(e) {
    console.log(e.key)
    for(let i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === e.key) {
            currentStatus[i] = e.key;
        }
    }

    if (currentStatus.join)
    document.querySelector(".word-blanks").textContent = currentStatus.join(" ");
});