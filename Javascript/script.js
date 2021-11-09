const casualNumbers = document.querySelector(".number-container");

// fai creare al programma 5 numeri casuali da 10 a 99 con un ciclo for 
const numberList = [];

while (numberList.length < 5) {
    const num = Math.floor(Math.random() * 90) + 10;

    let duplicateNum = false;

    for (i = 0; i < numberList.length; i ++) {
        if(num === numberList[i]){
            duplicateNum = true;
        }
    }
    if (duplicateNum == false){
        numberList.push(num);
    }
}

console.log(numberList);
casualNumbers.innerHTML = `<p>${numberList}</p>`;

// Da lì parte un timer di 30 secondi.

// alla fine del timer crea un ciclo di prompt che chiede i 5 numeri, quando sono corretti vengono pushati in un array vuoto

// display dell'array vuoto che mostra quanti numeri corretti sono stati ricordati

