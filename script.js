const cardsArray = ['apple', 'apple', 'banana', 'banana', 'pear', 'pear'];
let counter = 0;
let clicks = 0;
const clickCount = document.getElementById('click');
const cardsFlipped = [];
function flipImage(event) {
  const img = event.target;
  img.src = randomFruitsArray[Number(img.id)];
  cardsFlipped.push({ src: img.src, id: img.id });
  counter++;
  if (counter === 2) {
    setTimeout(checkCards, 500);
    clicks++;
    clickCount.innerText = `Clicks : ${clicks}`;
  }
}

let max = 5;
const tempArray = [...cardsArray];
const randomFruitsArray = [];

  for (let i = 1; i <= 6; i++) {
    let randomNum = Math.floor(Math.random() * max);
    const tempFruit = tempArray[randomNum];
    switch (tempFruit) {
      case 'apple':
        randomFruitsArray.push('./Images/green-apple.png');
        break;
      case 'pear':
        randomFruitsArray.push('./Images/pear.png');
        break;
      case 'banana':
        randomFruitsArray.push('./Images/banana.jpeg');
    }
    tempArray.splice(randomNum, 1);
    max--;
}

function checkCards() {
  counter = 0;
  if (cardsFlipped[0].src === cardsFlipped[1].src) {
    cardsFlipped.shift();
    cardsFlipped.shift();
  } else {
    const card1 = document.getElementById(cardsFlipped[0].id);
    card1.src = './Images/flat,128x,075,f-pad,128x128,f8f8f8.u2.jpg';
    const card2 = document.getElementById(cardsFlipped[1].id);
    card2.src = './Images/flat,128x,075,f-pad,128x128,f8f8f8.u2.jpg';
    cardsFlipped.shift();
    cardsFlipped.shift();
  }
}

function reset() {
  const resetAllCards = document.querySelectorAll('.Fruits').forEach((card) => {
    card.src = './Images/flat,128x,075,f-pad,128x128,f8f8f8.u2.jpg';
  });
  clicks = 0;
  clickCount.innerText=`Clicks : ${clicks}`
  counter = 0;
  max = 5;
  randomFruitsArray.splice(0, randomFruitsArray.length);
  cardsArray.forEach(element=>tempArray.push(element));
  for (let i = 1; i <= 6; i++) {
    let randomNum = Math.floor(Math.random() * max);
    const tempFruit = tempArray[randomNum];
    switch (tempFruit) {
      case 'apple':
        randomFruitsArray.push('./Images/green-apple.png');
        break;
      case 'pear':
        randomFruitsArray.push('./Images/pear.png');
        break;
      case 'banana':
        randomFruitsArray.push('./Images/banana.jpeg');
    }
    tempArray.splice(randomNum, 1);
    max--;
  
}
}
