

const loopMe = document.querySelector('#loopMe');

const userInput = document.querySelector('#userInput');

const outPut =document.querySelector('#loopOutput');

let O ="";
let addO =0;

loopMe.addEventListener('click', () => {
    let Inp = userInput.value;
while (addO < Number(Inp) ) {
        addO  = addO + 1;
        O = O + "o";
    }
    outPut.innerHTML = `L${O}p`;
})

