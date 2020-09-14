#CHANGELOG

## 0.1.2 Beta

### Fichiers

Nouveaux :

    - index.html
    
Supprimés :

    - index.php
    - log_line.php
    
### Code

index.html remplace index.php, le php n'était pas nécéssaire pour le moment, et l'affichage est mieux avec table. Ajout d'un bouton stop pour faire une pause.

log.js change également, maintenant il crée des lignes de tableaux.

test.js possède un bouton de démarage qui lance un décompte puis disparaît à la fin. Fonction init() qui se déclenche à la fin du fichier, elle permet de remettre le compteur start à 5. Ajout d'un handler pour le bouton stop, celui ci active la fonction init() et affiche le bouton start et la barre, et fait disparaître le bouton stop et le calcul. Ajout d'un second timer, qui en cas de réponse trop longue fait un nouveau calcul en faisant descendre d'un étage.

### TO-DO

Empeche le spam du bouton stop pour "choisir" son calcul

Faire le système de difficulté croissante



## 0.1 Beta

### Fichiers

Nouveaux :

    - index.css
    - index.php
    - log.js
    - log_line.php
    - test.js
    
### Code

log.js contient les fonctions permettant un log des calculs et réponses de l'utilisateur, ainsi que les fonctions permettant son affichage.

test.js contient les fonctions permettant de générer aléatoirement nombres et calculs, ainsi que leur affichage et l'interraction avec l'utilisateur. Il fait aussi le lien avec log.js. 

index.css contient le code mise en page, pour le moment très succin.

log_line.php est un template pour les lignes du log.

### TO-DO

Tester l'affichage du log avec table

Améliorer index.css

Changer test.js pour une version plus définitive