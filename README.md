# Memory
Brief n°2 Création jeu de Memory Javascript

Règles du jeu
Au début du jeu toutes les faces des cartes sont cachées. 
Le joueur retourne 2 cartes à la fois pour trouver une paire.
Si le joueur obtient les deux mêmes motifs, il remporte 1 point
et les 2 cartes disparaissent. 
S'il se trompe, les 2 cartes sont retournées face cachée. 
Le but du jeu est de trouver toutes les paires. 

Javascript est utilisé pour :
Récupérer les variables (section, bouton, score) et créer les 16 cartes du jeu
Mélanger les cartes à chaque début de jeu
Créer un évènement au clic pour retourner les cartes (toggle + click + rotate CSS)
Vérifier si les cartes sont identiques
Si elles sont identiques elles disparaissent et le score s'incrémente de 1
Si elles sont différentes elles se retournent face cachée
Empêcher de cliquer sur une 3ème carte si 2 cartes sont déjà retournées (setTimeout)
Remettre à jour le tableau des cartes quand on recommence le jeu
Ajouter un score et un timer
Quand la partie est finie, renvoyer un message "vous avez gagné
en ... minutes et ... secondes"


