//Récupérer les variables et charger le jeu
document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('section');
  const restartButton = document.getElementById('btn');
  const scoreSpan = document.querySelector('.score');
  let score = 0;
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

// Mélanger les cartes lors du rafraîchissement de la page
function randomize(cardData) {
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
  }

function cardGenerator() {
    cardData = randomize(cardData);
  }

// Fonction pour recommencer le jeu
function restartGame() {
    score = 0;
    updateScore();
    flippedCards = [];

// Supprimer toutes les cartes existantes
    while (section.firstChild) {
        section.removeChild(section.firstChild);
      }

// Générer et afficher de nouvelles cartes
    cardGenerator();
    createCards(); 
  }

// Fonction pour créer les cartes dans le DOM
function createCards() {
    cardData.forEach((card) => {
        let newCard = document.createElement('div');
        newCard.classList.add('card');

        let frontFace = document.createElement('img');
        frontFace.classList.add('front-face');
        frontFace.src = card.imgSrc;
        frontFace.alt = card.name;

        let backFace = document.createElement('img');
        backFace.classList.add('back-face');
        backFace.src = 'images/LAURA’S cake house.png';
        backFace.alt = 'Logo';

        newCard.appendChild(frontFace);
        newCard.appendChild(backFace);

        section.appendChild(newCard);
      });

 // Réinitialiser les gestionnaires d'événements pour les nouvelles cartes
    addEventListenersToCards();
  }

// Fonction pour ajouter les gestionnaires d'événements aux cartes
function addEventListenersToCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', flipCard));
  }

// Gestionnaire d'événements pour retourner une carte
function flipCard(event) {
    if (flippedCards.length < 2) {
          let card = event.currentTarget;
          card.classList.toggle('flip');
          flippedCards.push(card);

          if (flippedCards.length === 2) {
              setTimeout(() => match(), (100));
          }
      }
  }
function checkVictory() {
    const totalPairs = cardData.length / 2;
    if (score === totalPairs) {
        // Afficher le message de victoire
        alert('Bravo, vous avez gagné !');
        restartGame();
    }
}
 // Fonction pour vérifier si les cartes sont identiques
  function match() {
      const [card1, card2] = flippedCards;
      const name1 = card1.firstChild.alt;
      const name2 = card2.firstChild.alt;

      // Si les cartes sont identiques
      if (name1 === name2) {
          score += 1;
          updateScore();
          setTimeout(() => {
              card1.style.display = 'none';
              card2.style.display = 'none';
              checkVictory();
          }, 600);
      } else {
          // Si les cartes sont différentes
          setTimeout(() => {
              card1.classList.toggle('flip');
              card2.classList.toggle('flip');
          }, 600);
      }

      // Réinitialiser le tableau des cartes retournées
      flippedCards = [];
  }

  // Fonction pour mettre à jour le score affiché
  function updateScore() {
      scoreSpan.textContent = score;
  }

  // Ajouter un gestionnaire d'événements au bouton "Recommencer"
  restartButton.addEventListener('click', restartGame);

  // Générer et afficher les cartes au chargement initial
  cardGenerator();
  createCards();
});
