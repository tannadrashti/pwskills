let randomNumber;

while (true) {
    randomNumber = Math.floor(Math.random() * 16) + 10;
    
    if (randomNumber >= 10 && randomNumber <= 25) {
        break; 
    }
}

console.log(randomNumber);
