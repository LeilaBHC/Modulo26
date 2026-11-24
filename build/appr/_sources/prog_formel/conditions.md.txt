(prog_formel.conditions)=

# 5. Branchement

<a href="https://perso.limsi.fr/pointal/_media/python:cours:mementopython3.pdf" target="_blank">Mémento Python</a>  
<a href="https://support.apple.com/fr-ch/HT201236" target="_blank">Raccourcis clavier</a>

Les structures de contrôle sont un élément central de la programmation.
**Elles permettent de moduler l’exécution d'un programme selon la valeur de ses variables**.  
Les structures de contrôle se retrouvent de façon presque identique dans tous les autres langages de programmation.

## Branchement conditionnel (`if` / `elif` / `else`)

Un branchement conditionnel permet d'exécuter du code selon une condition. La condition est généralement obtenue avec une opération de comparaison et possède donc une valeur booléenne : `True` ou `False`.

```{codeplay}
if condition:
    # exécuté si condition est True
elif autre_condition:
    # exécuté si condition est False et autre_condition est True
else:
    # exécuté si aucune condition n'est vraie
```

Dans cet exemple, `elif` permet de tester une autre condition uniquement si les conditions précédentes sont fausses. Le bloc `else` est facultatif : il est exécuté lorsque aucune condition n'est vraie.

⚠️ **L'indentation est importante.** En Python, les blocs de code appartenant à `if`, `elif`, `else` et aux fonctions sont délimités par l'indentation, généralement quatre espaces.

### Opérateurs de comparaison

| Opérateur | Signification |
|:---:|:---|
| `==` | égal à |
| `!=` | différent de |
| `>` | supérieur à |
| `<` | inférieur à |
| `>=` | supérieur ou égal à |
| `<=` | inférieur ou égal à |

### Opérateurs logiques

| Opérateur | Effet |
|:---:|:---|
| `and` | vrai si les deux conditions sont vraies |
| `or` | vrai si au moins une condition est vraie |
| `not` | inverse la condition |

```{codeplay}
age = 17

if 18 <= age < 65:
    print("Adulte actif")

if age < 12 or age > 80:
    print("Tarif réduit")
```

### Exemple complet

```{codeplay}
note = 5

if note == 6:
    print("Très bien")
elif note >= 4:
    print("Passable")
else:
    print("Insuffisant")
```

## L'instruction if

L’instruction `if` (si, en anglais) permet d’**effectuer une liste d’instructions uniquement si une valeur booléenne (appelée la condition) est True (vraie)**.

```{codeplay}
ok = True
if ok:
	print("la variable ok est vraie")
else:
	print("la variable ok est fausse")
```

Dans l’exemple ci-dessus, on définit la variable booléenne `ok` à True (vrai).
L’instruction `if` teste cette variable.

* Si elle est vraie, le bloc d’instructions (décalé à droite) qui vient après les deux points est exécuté. 
* Sinon, le bloc `else` (sinon, en français) est exécuté à la place.  

⚠️ Notez que le bloc `else` n'est pas obligatoire. ⚠️

**L’indentation du texte (le décalage à droite) est importante**.
Elle permet à l’ordinateur de savoir quelles sont les instructions qui appartiennent au bloc du `if` et quelles sont celles qui appartiennent au bloc du `else`.  
(L'indentation se fait de préférence avec la touche tabulation (**TAB**) du clavier.)

````{admonition} Exercice 15
:class: note
Ecrivez un programme qui demande son âge à l’utilisateur. 
Si l’utilisateur donne un nombre inférieur à 20, le programme écrit "Comme vous êtes jeune !", sinon il écrit "Comme vous êtes vieux !".

```{codeplay}
:file: ex_15.py
age = ...

...
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_15.py
age = int(input("Entrez votre age: "))

if age < 20:
    print("Comme vous êtes jeune !")
else:
    print("Comme vous êtes vieux !")
```
Ici nous utilisons la fonction `int` car nous supposons que l'utilisateur entrera un nombre entier.
Cependant le programme fonctionnerait de la même manière en utilisant la fonction `float`.
````
`````

````{admonition} Exercice 16
:class: note
Ecrivez la fonction maximum(a, b) qui prend 2 nombres en argument et retourne le plus grand.

```{codeplay}
:file: ex_16.py
def maximum(a, b):
    ...

print(maximum(3, 4)) # Affiche 4
print(maximum(-1, -5)) # Affiche -1
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_16.py
def maximum(a, b):
    if a > b:
        return a
    else:
        return b

print(maximum(3, 4)) # Affiche 4
print(maximum(-1, -5)) # Affiche -1
```
Cette fonction ne permet de comparer que 2 nombres mais nous verrons plus tard comment trouver le maximum dans une liste avec beaucoup de nombres 😉
````
`````

Le bloc `elif` peut être ajouté après le bloc `if` pour **tester des conditions supplémentaires**.
Notez que `elif` est la contraction de *else if* (sinon si, en français).
L'exemple suivant démontre son utilité quand on a 4 situations possibles:

```{codeplay}
il_est_tard = False
je_suis_fatigue = False

if il_est_tard and je_suis_fatigue:
	print("Je vais dormir")
elif il_est_tard and not je_suis_fatigue:
	print("Je joue à la console")
elif not il_est_tard and je_suis_fatigue:
	print("Je fais une sieste")
else:
	# Il ne reste plus qu'une seule possibilité
	print("Je vais courir dehors")
```

````{admonition} Exercice 17
:class: note
Ecrivez un programme qui demande à l'utilisateur d'entrer les buts de l'équipe domicile et de l'équipe extérieur.
Le programme affiche ensuite quelle équipe a gagné le match (ou match nul en cas d'égalité).
**Exemples d’exécution :**
```
Buts marqués par l'équipe domicile : 1
Buts marqués par l'équipe extérieur : 2
L'équipe extérieur a gagné !!

Buts marqués par l'équipe domicile : 0
Buts marqués par l'équipe extérieur : 0
Match nul !
```

```{codeplay}
:file: ex_17.py
buts_domicile = ...
buts_exterieur = ...

...
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_17.py
buts_domicile = int(input("Buts marqués par l'équipe domicile: "))
buts_exterieur = int(input("Buts marqués par l'équipe extérieur: "))

if buts_domicile > buts_exterieur:
    print("L'équipe domicile a gagné !!")
elif buts_exterieur > buts_domicile:
    print("L'équipe extérieur a gagné !!")
else:
    print("Match nul !")
```
````
`````

## Le module random

Le module `random` contient plein de fonctions permettant **d'ajouter de l'aléatoire à nos programmes**.  
Par exmple, la fonction `randint(min, max)` du module `random` permet de **tirer un nombre entier aléatoire** entre `min` et `max` (compris).

Voici un exemple où le programme tire un nombre aléatoire entre 1 et 100.

```{codeplay}
import random

n = random.randint(1, 100)
print(n)
```

Il est aussi possible d'afficher des objets de taille aléatoire à des emplacements aléatoires.

```{codeplay}
from turtle import *  # Importe toutes les fonctions du module turtle
from random import *  # Importe toutes les fonctions du module random
up()  # Lève le stylo

i = 0
while i < 10:
    x = randint(-250, 250)  # Position aléatoire sur l'axe x
    y = randint(-150, 150)  # Position aléatoire sur l'axe y
    d = randint(1, 5)  # Diamètre aléatoire entre 1 et 5
    goto(x, y)
    dot(d*10, 'cyan')  # Dessine un rond de diamètre d*10
    write(d, align='center')  # Ecris la valeur donnée en argument
    i = i + 1
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

````{admonition} Exercice 20 - Devine mon nombre !
:class: note
Ecrivez un programme qui permet de jouer à "Devine mon nombre":
1. Laissez le programme tirer un nombre aléatoire entre 1 et 50.
2. Demandez à l'utilisateur de proposer un nombre tant qu'il n'a pas trouvé le bon.
3. A chaque proposition de nombre, le programme affiche "Plus grand" ou "Plus petit" pour aider le joueur.
4. Ajoutez un compteur de coups nécessaires pour trouver le bon nombre.

**Exemple d’exécution :**
```
Devine mon nombre: 32
Plus grand
Devine mon nombre: 43
Plus petit
...
Devine mon nombre: 38
Gagné ! (Il vous a fallu 6 coups)
```

```{codeplay}
:file: ex_20.py
import random

nombre_mystere = ...
nombre_propose = ...
coups = 1
while ...:
    if ...:
        print('Plus petit')
    else:
        print('Plus grand')
    ...
print(f'Gagné ! (Il vous a fallu {coups} coups)')
```
````

<!-- `````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_20.py
import random

nombre_mystere = random.randint(1, 50)
nombre_propose = int(input('Devine mon nombre: '))
coups = 1
while nombre_propose != nombre_mystere:
    if nombre_propose > nombre_mystere:
        print('Plus petit')
    else:
        print('Plus grand')
    nombre_propose = int(input('Devine mon nombre: '))
    coups = coups + 1
print(f'Gagné ! (Il vous a fallu {coups} coups)')
```
````
````` -->
