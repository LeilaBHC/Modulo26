(prog_formel.random)=

# 7. Hasard et nombres aléatoires

Le module `random` contient des fonctions permettant d'ajouter de l'aléatoire à un programme.

La fonction `randint(min, max)` permet de tirer un nombre entier aléatoire entre `min` et `max`, bornes comprises.

```{codeplay}
import random

n = random.randint(1, 100)
print(n)
```

Il est aussi possible d'utiliser le hasard pour afficher des objets de taille aléatoire à des emplacements aléatoires.

```{codeplay}
from turtle import *
from random import *

up()

for i in range(10):
    x = randint(-250, 250)
    y = randint(-150, 150)
    diametre = randint(1, 5)
    goto(x, y)
    dot(diametre * 10, 'cyan')
    write(diametre, align='center')
```

```{question}
En Python, `random` est

{v}`un module`  
{f}`une condition`  
{f}`une variable aléatoire`  
{f}`un mot-clé`
===
Un module est un recueil de fonctions prêtes à l'emploi que l'on peut importer dans notre code.
```

````{admonition} Exercice 1 - Devine mon nombre
:class: note
Écrivez un programme qui permet de jouer à « Devine mon nombre » :

1. Le programme tire un nombre aléatoire entre `1` et `50`.
2. La personne propose un nombre tant qu'elle n'a pas trouvé le bon.
3. À chaque proposition, le programme affiche `Plus grand` ou `Plus petit`.
4. Ajoutez un compteur de coups nécessaires pour trouver le nombre.

**Exemple d’exécution :**
```
Devine mon nombre : 32
Plus grand
Devine mon nombre : 43
Plus petit
Devine mon nombre : 38
Gagné ! (Il vous a fallu 6 coups)
```

```{codeplay}
:file: random_ex_1.py
import random

nombre_mystere = random.randint(1, 50)
nombre_propose = int(input("Devine mon nombre : "))
coups = 1

while nombre_propose != nombre_mystere:
    if nombre_propose > nombre_mystere:
        print("Plus petit")
    else:
        print("Plus grand")

    nombre_propose = int(input("Devine mon nombre : "))
    coups = coups + 1

print(f"Gagné ! (Il vous a fallu {coups} coups)")
```
````
