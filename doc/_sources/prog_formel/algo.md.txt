(prog_formel.algo)=

# 9. Les algorithmes

<a href="https://perso.limsi.fr/pointal/_media/python:cours:mementopython3.pdf" target="_blank">Mémento Python</a>  
<a href="https://support.apple.com/fr-ch/HT201236" target="_blank">Raccourcis clavier</a>

Dans ce chapitre, nous allons découvrir quelques algorithmes récurrents en informatique. Nous allons surtout nous pencher sur le tri qui est une fonctionnalité fondamentale. **L'énorme succès de Google est basé sur un tri efficace de l’information**, car dans une liste triée, on peut retrouver un élément beaucoup plus vite ! 💡

```{question}
C'est déjà quoi un algorithme ?

{f}`une suite finie et non-ambigüe d'étapes menant à la résolution d'un problème en particulier`  
{f}`une suite infinie et subjective d'étapes menant à la résolution d'une classe de problèmes`  
{v}`une suite finie et non-ambigüe d'étapes menant à la résolution d'une classe de problèmes`  
{f}`un truc compliqué qui fait des trucs compliqués mais efficacement`
```

Lorsque vous jouez aux cartes, vous triez vos cartes par valeur et dans ce cas, vous utilisez sans le savoir un algorithme de tri.

```{image} ../media/cartes.webp
:width: 300px
```

Nous allons voir que :

- la fonction `min(liste)` retourne le **minimum de la liste** en argument,
- la fonction `max(liste)` retourne le **maximum de la liste** en argument,
- la fontion `sorted(liste)` **trie la liste** en argument dans l'ordre croissant.

Pour visualiser les listes de nombres, nous allons utiliser le module `turtle` pour dessiner des points representant chaque nombre.  
**La hauteur du point représente sa valeur** alors que sa position (de gauche à droite) indique sa position dans la liste.

```{codeplay}
from turtle import *
from random import *

def create(size):
    getscreen().bgcolor('skyblue')
    d = 600/size
    x0 = 300 - d//2
    y0 = 200 - d//2
    turtles = [Turtle() for _ in range(size)]
    for i, t in enumerate(turtles):
        t.speed(0)
        t.penup()
        t.goto(-x0 + i*d, randint(-y0, y0))
        t.pendown()
        t.color('blue')
        t.shape('circle')
        #t.shapesize(d/20, d/20, 1)
    return turtles
===
longueur_liste = 20
liste = create(longueur_liste)  # La fonction create (dont la définition est cachée) permet de créer une liste aléatoire de points
done()
```

## Fonctions min et max

Les fonctions `min()` et `max()` retournent le minimum et le maximum d'une liste à l'aide d'un algorithme.  

```{codeplay}
liste = [3, 4, 1, 2, 6, 5]

print(min(liste))
print(max(liste))
```

Mais comment fonctionnent ces algorithmes ? 🤔

Eh bien nous allons voir comment les écrire nous-mêmes !  
Pour trouver le minimum dans une liste, une manière courante de faire est de:

- initialiser une variable `minimum` avec une très grande valeur (infini),
- parcourir la liste de nombres,
- mettre à jour `minimum` à chaque fois que l'on trouve un nombre plus petit.

```{codeplay}
def calcule_min(liste):
    minimum = float('inf')  # Plus grand nombre possible (infini)
    for valeur in liste:
        if valeur < minimum:
            minimum = valeur
    return minimum

liste = [3, 4, 1, 2, 6, 5]
minimum = calcule_min(liste)  
print(f'Le minimum est {minimum}')
```

`````{admonition} Vidéo explicative (facultative)
:class: hint
````{dropdown} <span style="color:grey">Clique ici</span>
:animate: fade-in-slide-down
Cette vidéo peut aider à comprendre l'algorithme du minimum (jusqu'à 1.55 min).
```{youtube} N0dFeoCV_tg
```
````
`````

Le maximum peut être trouvé de manière similaire, **en mettant à jour le plus grand nombre trouvé**.  
Voici une visualisation des algorithmes `min()` et `max()` où les points rouges représentent les plus petites et plus grandes valeurs trouvées dans la liste:

```{codeplay}
from turtle import *
from random import *

def create(size):
    getscreen().bgcolor('skyblue')
    d = 600/size
    x0 = 300 - d//2
    y0 = 200 - d//2
    turtles = [Turtle() for _ in range(size)]
    for i, t in enumerate(turtles):
        t.speed(0)
        t.penup()
        t.goto(-x0 + i*d, randint(-y0, y0))
        t.pendown()
        t.color('blue')
        t.shape('circle')
        #t.shapesize(d/20, d/20, 1)
    return turtles

def dessine_min_max(points):
    t_min = Turtle()
    t_max = Turtle()
    t_min.hideturtle()
    t_max.hideturtle()
    t_min.up()
    t_max.up()
    t_min.color('red')
    t_max.color('red')
    d = 600/len(points)
    for i in range(len(points)):
        if i == 0:
            t_min.speed(0)
            t_max.speed(0)
            min = points[i].ycor()
            max = points[i].ycor()
        else:
            t_min.speed(6)
            t_max.speed(6)
            t_min.down()
            t_max.down()
            if points[i].ycor() < min:
                min = points[i].ycor()
            if points[i].ycor() > max:
                max = points[i].ycor()
        t_min.goto(points[i].xcor(), min)
        t_min.dot(d/2)
        t_max.goto(points[i].xcor(), max)
        t_max.dot(d/2)
===
longueur_liste = 20
liste = create(longueur_liste)

dessine_min_max(liste)

done()
```

`````{admonition} Logigramme de la fonction max()
:class: hint
````{dropdown} <span style="color:grey">Clique ici</span>
:animate: fade-in-slide-down
Ce logigramme (que nous avons vus en cours) utilise une boucle `while` pour parcourir la liste.
En python, il est possible d'utiliser une boucle `for` afin de ne pas avoir à se soucier des index.
```{image} ../media/max.png
:width: 500px
```
````
`````

````{admonition} Exercice 25 - Max (moyen 🤓)
:class: note
Ecrivez la fonction `calcule_max(liste)` qui retourne la valeur maximum d'une liste.

```{codeplay}
:file: ex_25.py
def calcule_min(liste):
    minimum = float('inf')
    for valeur in liste:
        if valeur < minimum:
            minimum = valeur
    return minimum

def calcule_max(liste):
    ...

liste = [3, 4, 1, 2, 6, 5]
minimum = calcule_min(liste)  
print(f'Le minimum est {minimum}')
maximum = ...
print(f'Le maximum est {maximum}')
```
````

`````{admonition} Solution
:class: hint
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_25.py
def calcule_min(liste):
    minimum = float('inf')
    for valeur in liste:
        if valeur < minimum:
            minimum = valeur
    return minimum

def calcule_max(liste):
    maximum = -float('inf')  # float('-inf') fonctionne aussi
    for valeur in liste:
        if valeur > maximum:
            maximum = valeur
    return maximum

liste = [3, 4, 1, 2, 6, 5]
minimum = calcule_min(liste)  
print(f'Le minimum est {minimum}')
maximum = calcule_max(liste)  
print(f'Le maximum est {maximum}')
```
````
`````

## L'index du minimum/maximum

Souvent, on ne doit pas seulement trouver la valeur minimum, **mais aussi sa position** (son index) dans la liste afin de pouvoir éventuellement le déplacer dans la liste.  
Contrairement au cas précédent, ici nous ne parcourons pas les valeurs, mais les index grâce à une `range`.

```{codeplay}
liste = [3, 4, 1, 2, 6, 5]

minimum = float('inf')
index_minimum = 0

n = len(liste)  # La fonction len() calcule la longueur de la liste
for i in range(n):
    if liste[i] < minimum:
        minimum = liste[i]
        index_minimum = i
        
print(f"Le minimum est {minimum} et se trouve à l'index {index_minimum}")
```

````{admonition} Exercice 26 - Indice max (moyen 🤓)
:class: note
Modifier l'exemple précédent pour **en plus** afficher le maximum et son index.

```{codeplay}
:file: ex_26.py
liste = [3, 4, 1, 2, 6, 5]

minimum = float('inf')
index_minimum = 0

n = len(liste)
for i in range(n):
    if liste[i] < minimum:
        minimum = liste[i]
        index_minimum = i
        
print(f"Le minimum est {minimum} et se trouve à l'index {index_minimum}")
print(f"Le maximum est {maximum} et se trouve à l'index {index_maximum}")
```
````

`````{admonition} Solution
:class: hint
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_26.py
liste = [3, 4, 1, 2, 6, 5]

minimum = float('inf')
index_minimum = 0
maximum = -float('inf')
index_maximum = 0

n = len(liste)
for i in range(n):
    if liste[i] < minimum:
        minimum = liste[i]
        index_minimum = i
    if liste[i] > maximum:
        maximum = liste[i]
        index_maximum = i
        
print(f"Le minimum est {minimum} et se trouve à l'index {index_minimum}")
print(f"Le maximum est {maximum} et se trouve à l'index {index_maximum}")
```
````
`````

## Algorithmes de tri

La fonction `sorted(liste)` **trie une liste dans l'ordre croissant**. Cela fonctionne tant que la liste contient des éléments qui ont une relation d'ordre.  
Par exemple, une liste de textes sera triée alphabétiquement.

```{codeplay}
liste = [3, 4, 1, 2, 6, 5]
liste_triee = sorted(liste)
print(liste_triee)

liste = ['banane', 'carotte', 'ananas', 'courgette', 'pomme']
liste_triee = sorted(liste)
print(liste_triee)
```

La fonction `sorted()` de python est basée sur l'algorithme <a href="https://fr.wikipedia.org/wiki/Timsort#:~:text=Timsort%20est%20un%20algorithme%20de,le%20langage%20de%20programmation%20Python." target="_blank">Timsort</a> qui est plus efficace et complexe que ceux que nous allons voir ensemble.

### Échanger deux éléments

Pour échanger deux éléments d'une liste, nous pouvons utiliser une variable temporaire pour stocker une valeur.  
Ici nous échangeons les deux premiers éléments, donc les éléments avec les index 0 et 1.

```{codeplay}
liste = [3, 4, 1, 2, 6, 5]
print(liste)

tmp = liste[0]  # On stocke la valeur de liste[0] car elle sera écrasée par liste[1] et donc perdue autrement
liste[0] = liste[1]
liste[1] = tmp

print(liste)
```

Le programme devient plus lisible si nous définissons une fonction `echange()` qui s'en occupe.

```{codeplay}
liste = [3, 4, 1, 2, 6, 5]
print(liste)

def echange(liste, i, j):
    tmp = liste[i]
    liste[i] = liste[j]
    liste[j] = tmp

echange(liste, 0, 1)  # Echange de l'élément à l'index 0 avec celui à l'index 1
print(liste)
```

`````{admonition} Pour aller plus loin
:class: hint
````{dropdown} <span style="color:grey">Les affectations multiples</span>
:animate: fade-in-slide-down
Il est également possible d'échanger la valeur de 2 variables en utilisant une **affectation multiple**.
```python
def echange(liste, i, j):
    liste[i], liste[j] = liste[j], liste[i]
```
````
`````

Voici un exemple permettant de visualiser l'échange de valeurs dans une liste.

```{codeplay}
from turtle import *
from random import *

def echange_elem(liste, i, j):
    liste[i], liste[j] = liste[j], liste[i]

def create(size):
    getscreen().bgcolor('skyblue')
    d = 600/size
    x0 = 300 - d//2
    y0 = 200 - d//2
    turtles = [Turtle() for _ in range(size)]
    for i, t in enumerate(turtles):
        t.speed(0)
        t.penup()
        t.goto(-x0 + i*d, randint(-y0, y0))
        t.pendown()
        t.color('blue')
        t.shape('circle')
        #t.shapesize(d/20, d/20, 1)
    return turtles

def move_simu(turtles, coordinates, nhops=10):
    deltas = []
    for t, coord in zip(turtles, coordinates):
        current_coord = (t.xcor(), t.ycor())
        diff = (coord[0]-current_coord[0], coord[1]-current_coord[1])
        delta = (diff[0] * (1.0/nhops), diff[1] * (1.0/nhops))
        deltas.append(delta)
    for _ in range(1, nhops+1):
        for t, delta in zip(turtles, deltas):
            t.goto(t.xcor() + delta[0], t.ycor() + delta[1])
    
def echange(turtles, i, j):
    turtles_to_move = [turtles[i], turtles[j]]
    coordinates = [(turtles[j].xcor(), turtles[i].ycor()), (turtles[i].xcor(), turtles[j].ycor())]
    turtles[i].color('green')
    turtles[j].color('green')
    move_simu(turtles_to_move, coordinates)
    turtles[i].color('black')
    turtles[j].color('black')
    echange_elem(turtles, i, j)
===
def bubble_sort(liste):
    N = len(liste)
    for iteration in range(N - 1):
        for i in range(N - 1):
            if liste[i] > liste[i+1]:
                echange(liste, i, i+1)
                print(liste)
    return liste

liste = [3, 4, 1, 2, 6, 5]
print(liste)
print('Début du tri ------')
liste = bubble_sort(liste)
print('Fin du tri --------')
print(liste)
```

Visualisons l'algorithme:

```{codeplay}
from turtle import *
from random import *

def echange_elem(liste, i, j):
    liste[i], liste[j] = liste[j], liste[i]

def create(size):
    getscreen().bgcolor('skyblue')
    d = 600/size
    x0 = 300 - d//2
    y0 = 200 - d//2
    turtles = [Turtle() for _ in range(size)]
    for i, t in enumerate(turtles):
        t.speed(0)
        t.penup()
        t.goto(-x0 + i*d, randint(-y0, y0))
        t.pendown()
        t.color('blue')
        t.shape('circle')
        #t.shapesize(d/20, d/20, 1)
    return turtles
    
def move_simu(turtles, coordinates, nhops=10):
    deltas = []
    for t, coord in zip(turtles, coordinates):
        current_coord = (t.xcor(), t.ycor())
        diff = (coord[0]-current_coord[0], coord[1]-current_coord[1])
        delta = (diff[0] * (1.0/nhops), diff[1] * (1.0/nhops))
        deltas.append(delta)
    for _ in range(1, nhops+1):
        for t, delta in zip(turtles, deltas):
            t.goto(t.xcor() + delta[0], t.ycor() + delta[1])
    
def echange(turtles, i, j):
    turtles_to_move = [turtles[i], turtles[j]]
    coordinates = [(turtles[j].xcor(), turtles[i].ycor()), (turtles[i].xcor(), turtles[j].ycor())]
    turtles[i].color('green')
    turtles[j].color('green')
    move_simu(turtles_to_move, coordinates)
    turtles[i].color('black')
    turtles[j].color('black')
    echange_elem(turtles, i, j)
===
def bubble_sort(liste):
    N = len(liste)
    for iteration in range(N - 1):
        for i in range(N - 1):
            if liste[i].ycor() > liste[i+1].ycor():  # ycor() est une méthode permettant de récupérer la hauteur du point (coordonnée y)
                echange(liste, i, i+1)
    return liste

longueur_liste = 20
liste = create(longueur_liste)

liste = bubble_sort(liste)

done()
```

### Tri par insertion

L’algorithme du **tri par insertion** est utilisé instinctivement par la plupart des gens pour trier des cartes à jouer.  
Il parcourt la liste d’éléments à trier du 2ème au dernier élément.
Pour chaque élément considéré, il l’insère à l’emplacement correct à gauche dans la liste déjà parcourue en redescendant l'index.

```{image} ../media/tri_par_insertion.gif
```

```{codeplay}
def echange(liste, i, j):
    liste[i], liste[j] = liste[j], liste[i]
===
def insertion_sort(liste):
    N = len(liste)
    for i in range(1, N):
        for j in range(i, 0, -1):
            if liste[j] < liste[j-1]:
                echange(liste, j, j-1)
                print(liste)
    return liste

liste = [3, 4, 1, 2, 6, 5]
print(liste)
print('Début du tri ------')
liste = insertion_sort(liste)
print('Fin du tri --------')
print(liste)
```

```{codeplay}
from turtle import *
from random import *

def echange_elem(liste, i, j):
    liste[i], liste[j] = liste[j], liste[i]

def create(size):
    getscreen().bgcolor('skyblue')
    d = 600/size
    x0 = 300 - d//2
    y0 = 200 - d//2
    turtles = [Turtle() for _ in range(size)]
    for i, t in enumerate(turtles):
        t.speed(0)
        t.penup()
        t.goto(-x0 + i*d, randint(-y0, y0))
        t.pendown()
        t.color('blue')
        t.shape('circle')
        #t.shapesize(d/20, d/20, 1)
    return turtles
    
def move_simu(turtles, coordinates, nhops=10):
    deltas = []
    for t, coord in zip(turtles, coordinates):
        current_coord = (t.xcor(), t.ycor())
        diff = (coord[0]-current_coord[0], coord[1]-current_coord[1])
        delta = (diff[0] * (1.0/nhops), diff[1] * (1.0/nhops))
        deltas.append(delta)
    for _ in range(1, nhops+1):
        for t, delta in zip(turtles, deltas):
            t.goto(t.xcor() + delta[0], t.ycor() + delta[1])
    
def echange(turtles, i, j):
    turtles_to_move = [turtles[i], turtles[j]]
    coordinates = [(turtles[j].xcor(), turtles[i].ycor()), (turtles[i].xcor(), turtles[j].ycor())]
    turtles[i].color('green')
    turtles[j].color('green')
    move_simu(turtles_to_move, coordinates)
    turtles[i].color('black')
    turtles[j].color('black')
    echange_elem(turtles, i, j)
===
def insertion_sort(liste):
    N = len(liste)
    for i in range(1, N):
        for j in range(i, 0, -1):
            if liste[j].ycor() < liste[j-1].ycor():
                echange(liste, j, j-1)
    return liste

longueur_liste = 20
liste = create(longueur_liste)

liste = insertion_sort(liste)

done()
```

### Tri par sélection

L’algorithme du **tri par sélection** commence par rechercher le plus petit élément de la liste et l’échange avec le 1er élément de la liste.  
Il recherche ensuite le plus petit élément de la liste restante. Il sélectionne ainsi le 2ème plus petit élément de la liste et l’échange avec le 2ème élément de la liste.  
Et ainsi de suite...

Pour résumer, il met le plus petit élément en 1ère position (index 0), puis le 2ème plus petit élément à la 2ème position (index 1), puis le 3ème plus petit élément à la 3ème position (index 2), etc...

```{image} ../media/tri_par_selection.gif
```

```{codeplay}
def echange(liste, i, j):
    liste[i], liste[j] = liste[j], liste[i]
===
def selection_sort(liste):
    N = len(liste)
    for i in range(N-1):
        index_minimum = i
        minimum = float('inf')
        for j in range(i, N):
            if liste[j] < minimum:
                index_minimum = j
                minimum = liste[j]
        echange(liste, i, index_minimum)
        print(liste)
    return liste

liste = [3, 4, 1, 2, 6, 5]
print(liste)
print('Début du tri ------')
liste = selection_sort(liste)
print('Fin du tri --------')
print(liste)
```

```{codeplay}
from turtle import *
from random import *

def echange_elem(liste, i, j):
    liste[i], liste[j] = liste[j], liste[i]

def create(size):
    getscreen().bgcolor('skyblue')
    d = 600/size
    x0 = 300 - d//2
    y0 = 200 - d//2
    turtles = [Turtle() for _ in range(size)]
    for i, t in enumerate(turtles):
        t.speed(0)
        t.penup()
        t.goto(-x0 + i*d, randint(-y0, y0))
        t.pendown()
        t.color('blue')
        t.shape('circle')
        #t.shapesize(d/20, d/20, 1)
    return turtles
    
def move_simu(turtles, coordinates, nhops=10):
    deltas = []
    for t, coord in zip(turtles, coordinates):
        current_coord = (t.xcor(), t.ycor())
        diff = (coord[0]-current_coord[0], coord[1]-current_coord[1])
        delta = (diff[0] * (1.0/nhops), diff[1] * (1.0/nhops))
        deltas.append(delta)
    for _ in range(1, nhops+1):
        for t, delta in zip(turtles, deltas):
            t.goto(t.xcor() + delta[0], t.ycor() + delta[1])
    
def echange(turtles, i, j):
    turtles_to_move = [turtles[i], turtles[j]]
    coordinates = [(turtles[j].xcor(), turtles[i].ycor()), (turtles[i].xcor(), turtles[j].ycor())]
    turtles[i].color('green')
    turtles[j].color('green')
    move_simu(turtles_to_move, coordinates)
    turtles[i].color('black')
    turtles[j].color('black')
    echange_elem(turtles, i, j)
===
def selection_sort(liste):
    N = len(liste)
    for i in range(N-1):
        index_minimum = i
        minimum = float('inf')
        for j in range(i, N):
            if liste[j].ycor() < minimum:
                index_minimum = j
                minimum = liste[j].ycor()
        echange(liste, i, index_minimum)
    return liste

longueur_liste = 20
liste = create(longueur_liste)

liste = selection_sort(liste)

done()
```

Le lien suivant vous permet de tester ces algorithmes et de les visualiser: <a href="http://lwh.free.fr/pages/algo/tri/tri.htm" target="_blank">Algo de tri</a>

````{admonition} Exercice 28 - Amélioration (difficile 🤯)
:class: note
L'algorithme du tri par sélection peut être simplifé à l'aide de la fonction `min()` et de la méthode `index()`.  
La méthode `liste.index(x)` retourne l'index de l'élément `x` dans la liste.  

Tentez de simplifier l'écriture de l'algorithme de tri par sélection.  
Indice: toute la boucle interne ne sert qu'à une seule chose, trouver l'index du minimum dans la liste restante (revoyez le concept de tranche du chapitre précédent). Elle peut donc être réécrite plus simplement avec `min()` et `liste.index()`.

```{codeplay}
def echange(liste, i, j):
    liste[i], liste[j] = liste[j], liste[i]
===
def selection_sort(liste):
    N = len(liste)
    for i in range(N-1):
        # Partie à modifier ------------
        index_minimum = i
        minimum = float('inf')
        for j in range(i, N):
            if liste[j] < minimum:
                index_minimum = j
                minimum = liste[j]
        # ------------------------------
        echange(liste, i, index_minimum)
        print(liste)
    return liste

liste = [3, 4, 1, 2, 6, 5]
print(liste)
print('Début du tri ------')
liste = selection_sort(liste)
print('Fin du tri --------')
print(liste)
```
````

`````{admonition} Solution
:class: hint
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
def echange(liste, i, j):
    liste[i], liste[j] = liste[j], liste[i]
===
def selection_sort(liste):
    N = len(liste)
    for i in range(N-1):
        # Partie à modifier ------------
        index_minimum = liste.index(min(liste[i:]))
        # ------------------------------
        echange(liste, i, index_minimum)
        print(liste)
    return liste

liste = [3, 4, 1, 2, 6, 5]
print(liste)
print('Début du tri ------')
liste = selection_sort(liste)
print('Fin du tri --------')
print(liste)
```
````
`````

Cette vidéo (un peu spéciale pour vos oreilles) montre toute une liste d'algorithmes de tri en musique !

```{youtube} kPRA0W1kECg
``````
