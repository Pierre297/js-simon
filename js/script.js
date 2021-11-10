const casualNumbers = document.querySelector(".number-container");
const answerGame = document.querySelector(".container-answer");
const theEnd = document.querySelector(".container");

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
let partenza = 30;
let correctNum = [];

const clock = setInterval(() => {
    console.log(partenza);

    if(partenza === 0){
        // display none dei numeri iniziali
        theEnd.classList.add('the-end');
        
        clearInterval(clock);
        console.log("fine tempo");
        

        // alla fine del timer crea un ciclo di prompt che chiede i 5 numeri, quando sono corretti vengono pushati in un array vuoto
        for (var i = 0; i < 5; i++){
            
            simonNum = parseInt(prompt('Inserisci un numero della sequenza'));

            if (simonNum === numberList[i]) {
                console.log(partenza);
                
                // display dell'array vuoto che mostra quanti numeri corretti sono stati ricordati
                //numeri corretti
                correctNum.push(simonNum);
                answerGame.innerHTML = `<div>
                    <h2>I numeri corretti sono:</h2>
                    <div class="number-answer">${correctNum}</div>
                    </div>`;
            }
          }

    }else {
        partenza--;
    }
    
    
}, 1000);



    












