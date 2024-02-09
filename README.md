# Memory
Brief n°2 Création jeu de Memory Javascript

Règles du jeu
Au début du jeu toutes les faces des cartes sont cachées. 
Le but est de retrouver les paires en ne retournant que deux cartes à la fois. 
Si le joueur obtient les deux mêmes motifs, il remporte la paire puis rejoue. 
S'il se trompe, il retourne les deux cartes faces cachées exactement au même endroit. 

Javascript est utilisé pour :
Récupérer les variables (section, bouton, score) et créer les 16 cartes du jeu
Mélanger les cartes à chaque début de jeu
Créer un évènement au clic pour retourner les cartes (toggle + click + rotate CSS)
Vérifier si les cartes sont identiques
Si elles sont identiques elles disparaissent et le score s'incrémente de 1
Si elles sont différentes elles se retournent face cachée
Empêcher de cliquer sur une 3ème carte si 2 cartes sont déjà retournées (setTimeout)
Remettre à jour le compteur de score
Remettre à jour le tableau des cartes


