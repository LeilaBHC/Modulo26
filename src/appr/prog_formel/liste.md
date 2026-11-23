(prog_formel.liste)=

# 7. Les listes

<a href="https://perso.limsi.fr/pointal/_media/python:cours:mementopython3.pdf" target="_blank">Mémento Python</a>  
<a href="https://support.apple.com/fr-ch/HT201236" target="_blank">Raccourcis clavier</a>

Chaque partie du cours se termine par un exercice à faire seul, suivi de son corrigé. Essaie toujours de répondre avant de lire la solution.

## 1. Qu'est-ce qu'une liste ?

Une **liste** est une collection ordonnée d’éléments que l’on peut modifier. On peut y mettre des nombres, du texte, ou même un mélange des deux.

Imagine une liste de courses : on peut y ajouter un article, en barrer un ou en changer un autre. C’est exactement ce que permettent les listes en programmation.

Les listes sont :

* **ordonnées** : chaque élément a une position fixe ;
* **modifiables** : on peut changer, ajouter ou retirer des éléments ;
* **indexées** : la position commence à `0`, et non à `1`.

````{admonition} Exercice 1 : vrai ou faux ?
:class: note
1. Une liste peut contenir à la fois des nombres et du texte.
2. Le premier élément d’une liste a l’indice `1`.
3. Une liste est modifiable.
````

````{admonition} Corrigé
```{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
1. Vrai.
2. Faux : l’indice du premier élément est `0`.
3. Vrai.
```
````

## 2. Créer une liste

On utilise des crochets `[]`, avec les éléments séparés par des virgules.

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
notes = [12, 15, 9, 18]
melange = ["Léa", 17, True]
vide = []

print(fruits)
```

On peut aussi créer une liste vide, puis la remplir plus tard avec `vide = []`.

Pour afficher une liste :

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
print(fruits)
```

Pour connaître sa taille :

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
print(len(fruits))
```

````{admonition} Exercice 2 : création
:class: note
Crée une liste `couleurs` contenant `"rouge"`, `"vert"` et `"bleu"`. Affiche-la, puis affiche sa taille.

```{codeplay}
:file: ex_liste_2.py
couleurs = ...
print(...)
print(...)
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_liste_2.py
couleurs = ["rouge", "vert", "bleu"]
print(couleurs)
print(len(couleurs))  # 3
```
````
`````

## 3. Accéder aux éléments

Chaque élément est repéré par son indice, c’est-à-dire sa position.

| Élément | Indice | Indice négatif |
|---|---:|---:|
| `"pomme"` | `0` | `-3` |
| `"banane"` | `1` | `-2` |
| `"cerise"` | `2` | `-1` |

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
print(fruits[0])   # pomme
print(fruits[2])   # cerise
print(fruits[-1])  # cerise : le dernier élément
```

Attention : `fruits[3]` provoque une erreur (`IndexError`), car il n’y a pas d’élément à cette position.

On peut extraire une partie d’une liste avec une **tranche** :

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
print(fruits[0:2])  # ['pomme', 'banane'] : le 2 est exclu
```

````{admonition} Exercice 3 : accès
:class: note
Avec la liste `couleurs`, affiche le premier élément, le dernier élément, puis les deux premiers sous forme de tranche.

```{codeplay}
:file: ex_liste_3.py
couleurs = ["rouge", "vert", "bleu"]
print(...)
print(...)
print(...)
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_liste_3.py
couleurs = ["rouge", "vert", "bleu"]
print(couleurs[0])    # rouge
print(couleurs[-1])   # bleu
print(couleurs[0:2])  # ['rouge', 'vert']
```
````
`````

## 4. Modifier un élément

Pour changer un élément, on lui affecte une nouvelle valeur à l’aide de son indice.

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
fruits[1] = "kiwi"
print(fruits)
```

````{admonition} Exercice 4 : modification
:class: note
Dans `couleurs`, remplace `"vert"` par `"jaune"`, puis affiche la liste.

```{codeplay}
:file: ex_liste_4.py
couleurs = ["rouge", "vert", "bleu"]
...
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_liste_4.py
couleurs = ["rouge", "vert", "bleu"]
couleurs[1] = "jaune"
print(couleurs)  # ['rouge', 'jaune', 'bleu']
```
````
`````

## 5. Ajouter des éléments

### À la fin avec `append()`

```{codeplay}
fruits = ["pomme", "banane"]
fruits.append("cerise")
print(fruits)
```

### À une position précise avec `insert()`

`insert(indice, valeur)` place la valeur à l’indice voulu et décale les autres éléments vers la droite.

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
fruits.insert(1, "fraise")
print(fruits)
```

### Plusieurs éléments avec `extend()`

```{codeplay}
fruits = ["pomme", "banane"]
fruits.extend(["kiwi", "mangue"])
print(fruits)
```

À retenir :

* `append()` ajoute un élément à la fin ;
* `insert()` ajoute un élément à une position précise ;
* `extend()` ajoute plusieurs éléments à la fin.

````{admonition} Exercice 5 : ajout et insertion
:class: note
À partir de `couleurs`, ajoute `"noir"` à la fin, insère `"blanc"` en deuxième position, puis ajoute `"orange"` et `"rose"` en une seule instruction. Affiche la liste.

```{codeplay}
:file: ex_liste_5.py
couleurs = ["rouge", "vert", "bleu"]
...
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_liste_5.py
couleurs = ["rouge", "vert", "bleu"]
couleurs.append("noir")
couleurs.insert(1, "blanc")
couleurs.extend(["orange", "rose"])
print(couleurs)
```
````
`````

## 6. Supprimer des éléments

### Par valeur avec `remove()`

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
fruits.remove("banane")
print(fruits)
```

### Par position avec `pop()` ou `del`

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
dernier = fruits.pop()
print(dernier)
del fruits[0]
print(fruits)
```

`pop()` retire le dernier élément et le renvoie. On peut donc le stocker dans une variable.

### Tout vider avec `clear()`

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
fruits.clear()
print(fruits)
```

````{admonition} Exercice 6 : suppression
:class: note
Partant de `couleurs = ["rouge", "jaune", "bleu", "noir", "orange", "rose"]` :

1. supprime `"rouge"` avec `remove()` ;
2. retire le dernier élément avec `pop()` et affiche-le ;
3. supprime le premier élément avec `del` ;
4. affiche la liste finale.

```{codeplay}
:file: ex_liste_6.py
couleurs = ["rouge", "jaune", "bleu", "noir", "orange", "rose"]
...
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_liste_6.py
couleurs = ["rouge", "jaune", "bleu", "noir", "orange", "rose"]
couleurs.remove("rouge")
print(couleurs.pop())  # rose
del couleurs[0]
print(couleurs)        # ['jaune', 'bleu', 'noir', 'orange']
```
````
`````

## 7. Parcourir une liste

Avec une boucle `for`, on traite chaque élément un par un.

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
for fruit in fruits:
    print(fruit)
```

Pour avoir aussi l’indice :

```{codeplay}
fruits = ["pomme", "banane", "cerise"]
for i in range(len(fruits)):
    print(i, fruits[i])
```

````{admonition} Exercice 7 : parcours
:class: note
Avec une boucle `for`, affiche chaque couleur de la liste. Puis, avec `range`, affiche chaque couleur précédée de son indice.

```{codeplay}
:file: ex_liste_7.py
couleurs = ["rouge", "vert", "bleu"]
...
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_liste_7.py
couleurs = ["rouge", "vert", "bleu"]
for c in couleurs:
    print(c)

for i in range(len(couleurs)):
    print(i, couleurs[i])
```
````
`````

## 8. Quelques outils pratiques

```{codeplay}
notes = [12, 15, 9, 18]
print(len(notes))   # 4 : nombre d’éléments
print(max(notes))   # 18 : plus grande valeur
print(min(notes))   # 9 : plus petite valeur
print(sum(notes))   # 54 : somme
print(15 in notes)  # True : test d’appartenance

notes.sort()
print(notes)        # [9, 12, 15, 18]

notes.reverse()
print(notes)        # [18, 15, 12, 9]
```

````{admonition} Exercice 8 : outils pratiques
:class: note
À partir de `notes = [12, 15, 9, 18]`, affiche la plus grande note, la plus petite, la moyenne, puis la liste triée par ordre décroissant.

```{codeplay}
:file: ex_liste_8.py
notes = [12, 15, 9, 18]
...
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_liste_8.py
notes = [12, 15, 9, 18]
print(max(notes))                  # 18
print(min(notes))                  # 9
print(sum(notes) / len(notes))     # 13.5
notes.sort()
notes.reverse()
print(notes)                       # [18, 15, 12, 9]
```
````
`````

## 9. Tableau récapitulatif

| Je veux… | Je fais… |
|---|---|
| Créer une liste | `ma_liste = [1, 2, 3]` |
| Lire un élément | `ma_liste[0]` |
| Modifier un élément | `ma_liste[0] = 10` |
| Ajouter à la fin | `ma_liste.append(4)` |
| Insérer à une position | `ma_liste.insert(1, 99)` |
| Ajouter plusieurs éléments | `ma_liste.extend([5, 6])` |
| Supprimer une valeur | `ma_liste.remove(99)` |
| Supprimer par position | `ma_liste.pop(0)` ou `del ma_liste[0]` |
| Compter les éléments | `len(ma_liste)` |
| Trier | `ma_liste.sort()` |

## 10. Exercice de synthèse

````{admonition} Exercice 9 : la liste de courses
:class: note
Reprends tout ce que tu as appris :

1. Crée une liste vide `courses`.
2. Ajoute `"pain"`, `"lait"` et `"oeufs"`.
3. Insère `"beurre"` en première position.
4. Remplace `"lait"` par `"lait d’avoine"`.
5. Supprime `"oeufs"`.
6. Affiche chaque article précédé de son numéro, en commençant à `1`.
7. Affiche le nombre d’articles.

```{codeplay}
:file: ex_liste_synthese.py
courses = []
...
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_liste_synthese.py
courses = []
courses.extend(["pain", "lait", "oeufs"])
courses.insert(0, "beurre")
courses[2] = "lait d’avoine"
courses.remove("oeufs")

for i in range(len(courses)):
    print(i + 1, courses[i])

print(len(courses))  # 3
```
````
`````
