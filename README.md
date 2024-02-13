# Memory
Brief n°2 Création jeu de Memory avec Javascript

Contexte du brief
Créer un jeu avec utilisation des objets Javascript d'une manière ou d'une autre.
Avoir des données dans le JS qui seront modifiées en cours de jeu (barre de vie, score, progression, etc.), l'idée est de travailler la séparation des données et de l'affichage. Le code est propre, DRY, commenté.

Règles du jeu : Memory
Au début du jeu toutes les faces des cartes sont cachées. 
Le joueur retourne 2 cartes à la fois pour trouver une paire.
Si le joueur obtient les deux mêmes motifs, il remporte 1 point
et les 2 cartes disparaissent. 
S'il se trompe, les 2 cartes sont retournées face cachée. 
Le but du jeu est de trouver toutes les paires. 

Javascript est utilisé pour :
- Créer le tableau des cartes dans le HTML
- Ajouter les écouteurs d'évènements pour retourner les cartes quand on clique dessus 
- Empêcher de retourner plus de 2 cartes à la fois
- Vérifier si les 2 cartes retournées sont identiques
- Si les 2 cartes sont identiques : le score augmente d'un point + les cartes disparaissent
- Si les 2 cartes sont différentes : elles se retournent face cachée
- Ajouter un score et un timer
- Si toutes les paires sont trouvées, ajouter une alerte qui
reprend les valeurs du timer "Bravo, vous avez gagné en ... minutes et ... secondes"









