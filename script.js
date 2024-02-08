//Récupérer la section HTML où ira le tableau
document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('section');
  const restartButton = document.getElementById('btn');
  const scoreSpan = document.querySelector('.score');
  let score = 0; 

// Tableau des cartes retournées
let flippedCards = []; 


//Créer le tableau des cartes
let cardData = [
    { imgSrc: 'images/biscuit.png', name: 'biscuit'},
    { imgSrc: 'images/biscuit.png', name: 'biscuit'},
    { imgSrc: 'images/chantilly.png', name: 'chantilly'},
    { imgSrc: 'images/chantilly.png', name: 'chantilly'},
    { imgSrc: 'images/creme.png', name: 'creme'},
    { imgSrc: 'images/creme.png', name: 'creme'},
    { imgSrc: 'images/cupcake.png', name: 'cupcake'},
    { imgSrc: 'images/cupcake.png', name: 'cupcake'},
    { imgSrc: 'images/cupcakecoeur.png', name: 'cupcakecoeur'},
    { imgSrc: 'images/cupcakecoeur.png', name: 'cupcakecoeur'},
    { imgSrc: 'images/cupcakejaune.png', name: 'cupcakejaune'},
    { imgSrc: 'images/cupcakejaune.png', name: 'cupcakejaune'},
    { imgSrc: 'images/gateaurosefraise.png', name: 'gateaurosefraise'},
    { imgSrc: 'images/gateaurosefraise.png', name: 'gateaurosefraise'},
    { imgSrc: 'images/gateauchoco.png', name: 'gateauchoco'},
    { imgSrc: 'images/gateauchoco.png', name: 'gateauchoco'},   
  ];
  
  //Mélanger les images quand on rafraîchit la page
  function randomize(cardData) {
    cardData.sort(() => Math.random() - 0.5)
    return cardData;
  };
  function cardGenerator() {
    cardData = randomize(cardData);
  }
  
  cardGenerator();

//Créer les 16 cartes avec leurs paramètres
  cardData.forEach((card) => {
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    
    let frontFace = document.createElement('img');
    frontFace.classList.add('front-face');
    frontFace.src = card.imgSrc;
    frontFace.alt = card.name;
    
    let backFace = document.createElement('img');
    backFace.classList.add('back-face');
    backFace.src = 'images/logo.png';
    backFace.alt = 'Logo';

    newCard.appendChild(frontFace);
    newCard.appendChild(backFace);

    section.appendChild(newCard);
  });


const cards = document.querySelectorAll('.card');


// Créer un évènement au click pour retourner la carte
function flipCard(event) {
  if (flippedCards.length < 2) {
      let card = event.currentTarget;
      card.classList.toggle('flip');
      flippedCards.push(card);

  if (flippedCards.length === 2) {
      setTimeout(() => match(), 1000);
      }
  }
}
//Vérifier si les cartes sont identiques
function match() {
    const [card1, card2] = flippedCards;
    const name1 = card1.firstChild.alt;
    const name2 = card2.firstChild.alt;
    console.log(name1);
    console.log(name2);
//Si les cartes sont identiques elles disparaissent
    if (name1 === name2) {
      score += 1;
      updateScore();
      setTimeout(() => {
            card1.style.display = 'none';
            card2.style.display = 'none';
        }, 500);
    } else {
//Si les cartes sont différentes elles se retournent
        setTimeout(() => {
            card1.classList.toggle('flip');
            card2.classList.toggle('flip');
        }, 500); 
    }
// Mettez à jour le texte du span avec le nouveau score
function updateScore() {
scoreSpan.textContent = score;
  }
// Remettre à jour le tableau des cartes retournées
    flippedCards = []; 
}

cards.forEach(card => card.addEventListener('click', flipCard));
});

function match(){
  setTimeout
}
