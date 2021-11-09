const casualNumbers = document.querySelector(".number-container");
const answerGame =document.querySelector(".number-answer");

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
// timer:
let partenza = 5;
let correctNum = [];

const clock = setInterval(() => {
    if(partenza === 0){

        clearInterval(clock);

        console.log("fine tempo");

        // alla fine del timer crea un ciclo di prompt che chiede i 5 numeri, quando sono corretti vengono pushati in un array vuoto
        

        for (var i = 0; i < 5; i++){

            simonNum = parseInt(prompt('Inserisci un numero della sequenza'));

            if (simonNum === numberList[i]) {
                console.log(partenza);
                
                //numeri corretti
                correctNum.push(simonNum);
                casualNumbers.innerHTML = `<div>
                    <h2>I numeri corretti sono:</h2>
                    <div">${correctNum}</div>
                    </div>`;

            }
          }

    }else {
        partenza--;
    }

    
}, 1000);

    











// display dell'array vuoto che mostra quanti numeri corretti sono stati ricordati

