(prog_formel.boucles)=

# 6. Les boucles

<a href="https://perso.limsi.fr/pointal/_media/python:cours:mementopython3.pdf" target="_blank">Mémento Python</a>

Une boucle permet de répéter plusieurs fois un bloc d'instructions. Cela évite de copier le même code encore et encore.

Python propose principalement deux boucles :

- `for`, pour répéter des instructions un nombre connu de fois ou parcourir une séquence ;
- `while`, pour répéter des instructions tant qu'une condition reste vraie.

## La boucle `for`

L'instruction `for valeur in sequence` parcourt chaque élément d'une séquence. Pour chaque élément, elle exécute une fois le bloc d'instructions indenté.

```{codeplay}
presidents = ["Bush", "Clinton", "Bush", "Obama", "Trump"]
for nom in presidents:
    print(nom)
```

La variable `nom` prend successivement chaque valeur de la liste. Elle est appelée **variable d'itération**.

L'exemple suivant dessine cinq cercles de couleurs différentes :

```{codeplay}
from turtle import *
up()
backward(200)

for couleur in ['yellow', 'cyan', 'orange', 'pink', 'lime']:
    dot(80, couleur)
    write(couleur, align='center')
    forward(80)
```
````{admonition} Exercice 1 - Somme des nombres
:class: note
Écrivez une boucle qui calcule la somme des nombres suivants : `2, 3, 5, 7, 11`.

```{codeplay}
:file: ex_1.py
somme = 0
for nombre in [2, 3, 5, 7, 11]:
    ...
print(somme)
```
````

`````{admonition} Solution
```{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_1.py
somme = 0
for nombre in [2, 3, 5, 7, 11]:
    somme = somme + nombre
print(somme)
```
`````

## Le type `range`

Une `range` représente une suite de nombres entiers. Elle permet notamment de contrôler précisément le nombre de répétitions d'une boucle `for`.

La fonction `range(start, stop, step)` utilise :

- `start` : la première valeur ;
- `stop` : la limite finale, exclue ;
- `step` : l'écart entre deux valeurs.

```{codeplay}
nombres = range(1, 10)
for nombre in nombres:
    print(f"{nombre} au carré vaut {nombre ** 2}")
```

Avec seulement un argument, `range(10)` produit les nombres de `0` à `9`.

### Dessiner un polygone

```{codeplay}
from turtle import *

def polygone(longueur, nombre_sommets):
    for i in range(nombre_sommets):
        forward(longueur)
        left(360 / nombre_sommets)

polygone(50, 5)
```

### Parcourir des intervalles

L'argument `step` permet de choisir l'écart entre les nombres :

```{codeplay}
from turtle import *
up()

for x in range(-250, 251, 50):
    goto(x, 0)
    write(x, align='center')
```

### Imbriquer des boucles

Une boucle peut être placée à l'intérieur d'une autre boucle. Cela permet, par exemple, d'afficher toutes les tables de multiplication :

```{codeplay}
for i in range(1, 10):
    print(f"Table de {i}")
    for j in range(1, 10):
        print(f"{i} × {j} = {i * j}")
    print()
```

````{admonition} Exercice 2 - Nombres premiers
:class: note
1. Écrivez une fonction `est_premier(nombre)` qui retourne `True` si le nombre est premier et `False` sinon.
2. Affichez tous les nombres premiers inférieurs à 1000.

Pour rappel, un nombre premier est divisible uniquement par `1` et par lui-même.

```{codeplay}
:file: ex_2.py
def est_premier(nombre):
    if nombre < 2:
        return False

    # Testez les diviseurs possibles avec une boucle
    ...

# Affichez les nombres premiers inférieurs à 1000
...
```
````

`````{admonition} Solution
```{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_2.py
def est_premier(nombre):
    if nombre < 2:
        return False

    for diviseur in range(2, nombre):
        if nombre % diviseur == 0:
            return False

    return True

for nombre in range(1000):
    if est_premier(nombre):
        print(nombre)
```

Dès qu'un `return` est exécuté, la fonction s'arrête immédiatement.
````
`````

## La boucle `while`

La boucle `while` répète ses instructions tant que sa condition est vraie.

```{codeplay}
compteur = 0
while compteur < 5:
    print(compteur)
    compteur = compteur + 1
```

Il faut vérifier que la condition finira par devenir fausse. Sinon, la boucle ne s'arrête jamais.

L’instruction `while` peut aussi remplacer une répétition dont le nombre d’itérations n’est pas connu à l’avance : elle continue tant qu’une condition reste vraie.

```{codeplay}
a = 1
while a < 100:
    print(a)
    a = a * 2
print(f"Maintenant a vaut {a} !")
```

Dans cet exemple, on initialise la variable `a` à `1`. Puis, tant qu’elle est inférieure à `100`, on l’affiche à l’écran et on la double. Ainsi, `a` passe de `1` à `2`, `4`, `8`, etc. Le programme affiche toutes les puissances de deux inférieures à `100`.

````{admonition} Exercice 3
:class: note
Modifiez ce programme pour qu’il imprime toutes les puissances de `10` inférieures ou égales à `10000`.

```{codeplay}
:file: ex_3.py
a = 1
while a < 100:
    print(a)
    a = a * 2
print(f"Maintenant a vaut {a} !")
```
````

`````{admonition} Solution
```{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_3.py
a = 10
while a <= 10000:
    print(a)
    a = a * 10
print(f"Maintenant a vaut {a} !")
```
`````
`````

````{admonition} Exercice 4
:class: note
Écrivez un programme qui demande en boucle à l'utilisateur comment il va tant qu'il ne répond pas `"Bien merci et toi ?"`.

La fonction `input()` permet de demander à l'utilisateur d'entrer du texte.

**Exemple d’exécution :**
```
Comment tu vas ? Bien
Comment tu vas ? Bof
Comment tu vas ? Nickel !
Comment tu vas ? Bien merci et toi ?
Très bien, merci de demander !
```

```{codeplay}
:file: ex_4.py
reponse = input("Comment tu vas ? ")

while reponse != "Bien merci et toi ?":
    reponse = input("Comment tu vas ? ")

print("Très bien, merci de demander !")
```
````
`````

### Sortir d'une boucle avec `break`

L'instruction `break` permet d'arrêter immédiatement la boucle en cours.

```{codeplay}
nombre = 1
while True:
    print(nombre)
    nombre = nombre + 1
    if nombre > 5:
        break
```

````{admonition} Exercice 5 - Deviner un nombre
:class: note
Créez une boucle qui demande un nombre à la personne utilisatrice jusqu'à ce qu'elle entre `42`.

```{codeplay}
:file: ex_5.py
while True:
    nombre = int(input("Devine le nombre : "))
    if nombre == 42:
        print("Bravo !")
        break
    print("Ce n'est pas le bon nombre.")
```
````

## Le jeu du pendu

Le jeu du pendu consiste à trouver un mot en devinant ses lettres. Le jeu utilise plusieurs boucles :

- une boucle `while` pour faire continuer la partie ;
- une boucle `for` pour parcourir les lettres du mot ;
- une boucle `for` ou `while` pour construire l'affichage du mot.

```{codeplay}
:output_lines: 8
:file: ex_pendu.py
mot_a_trouver = "potiron"
lettres_trouvees = []
nb_erreurs = 0

while nb_erreurs < 6:
    mot_affiche = ""

    for lettre in mot_a_trouver:
        if lettre in lettres_trouvees:
            mot_affiche = mot_affiche + lettre
        else:
            mot_affiche = mot_affiche + "_"
        mot_affiche = mot_affiche + " "

    if "_" not in mot_affiche:
        print("Gagné !")
        break

    print(mot_affiche)
    lettre_proposee = input("Lettre : ")

    if lettre_proposee in mot_a_trouver:
        if lettre_proposee not in lettres_trouvees:
            lettres_trouvees.append(lettre_proposee)
    else:
        nb_erreurs = nb_erreurs + 1

if nb_erreurs == 6:
    print("Pendu !")
    print(f"Le mot était {mot_a_trouver}.")
```

````{admonition} Exercice du pendu
:class: note
Modifiez le programme pour que l'ordinateur choisisse aléatoirement un mot parmi une liste de mots.

Plusieurs pistes sont possibles :

- utiliser `random.choice(liste)` ;
- utiliser `random.randint()` pour choisir un index.

Faites en sorte que le programme s'arrête dès que le mot est trouvé.
````
