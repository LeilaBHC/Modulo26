(prog_formel.tuples)=

# 8. Les tuples

<a href="https://perso.limsi.fr/pointal/_media/python:cours:mementopython3.pdf" target="_blank">Mémento Python</a>

Chaque partie du cours se termine par un exercice à faire seul, suivi de son corrigé. Essaie toujours de répondre avant de lire la solution.

## 1. Qu'est-ce qu'un tuple ?

Un **tuple** ressemble beaucoup à une liste : c'est une collection ordonnée d'éléments. Mais il a une différence essentielle : il est **immuable**, c'est-à-dire qu'il n'est pas modifiable après sa création.

Imagine une date de naissance `(12, 5, 2008)` ou des coordonnées `(48.85, 2.35)`. Ces valeurs vont ensemble et n'ont pas vocation à changer.

Les tuples sont :

* **ordonnés** : chaque élément a une position fixe ;
* **indexés** : la position commence à `0`, comme pour les listes ;
* **immuables** : on ne peut ni changer, ni ajouter, ni supprimer un élément après sa création.

````{admonition} Exercice 1 : vrai ou faux ?
:class: note
1. Un tuple est ordonné.
2. On peut ajouter un élément à un tuple avec `append()`.
3. Le premier élément d'un tuple a l'indice `0`.
````

````{admonition} Corrigé
```{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
1. Vrai.
2. Faux : `append()` ne fonctionne pas avec un tuple.
3. Vrai.
```
````

## 2. Créer un tuple

On utilise des parenthèses `()`, avec les éléments séparés par des virgules.

```{codeplay}
couleurs = ("rouge", "vert", "bleu")
point = (3, 7)
melange = ("Léa", 17, True)
vide = ()

print(couleurs)
print(type(vide))
```

Les parenthèses sont facultatives : c'est la virgule qui crée le tuple.

```{codeplay}
point = 3, 7
print(point)  # (3, 7)
```

Piège du tuple à un seul élément : il faut une virgule après l'élément.

```{codeplay}
a = (5,)  # tuple d'un élément
b = (5)   # simple nombre
print(type(a))
print(type(b))
```

Pour connaître sa taille :

```{codeplay}
couleurs = ("rouge", "vert", "bleu")
print(len(couleurs))  # 3
```

````{admonition} Exercice 2 : création
:class: note
Crée un tuple `jours` contenant `"lundi"`, `"mardi"` et `"jeudi"`. Affiche-le, puis affiche sa taille. Crée ensuite un tuple `un_seul` contenant uniquement le nombre `10`.

```{codeplay}
:file: ex_tuple_2.py
jours = ...
print(...)
print(...)
un_seul = ...
print(un_seul)
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_tuple_2.py
jours = ("lundi", "mardi", "jeudi")
print(jours)
print(len(jours))  # 3
un_seul = (10,)
print(un_seul)
```
````
`````

## 3. Accéder aux éléments

L'accès fonctionne exactement comme pour les listes : par indice avec des crochets `[]`.

| Élément | Indice | Indice négatif |
|---|---:|---:|
| `"rouge"` | `0` | `-3` |
| `"vert"` | `1` | `-2` |
| `"bleu"` | `2` | `-1` |

```{codeplay}
couleurs = ("rouge", "vert", "bleu")
print(couleurs[0])
print(couleurs[-1])
print(couleurs[0:2])  # ('rouge', 'vert') : le 2 est exclu
```

Attention : `couleurs[3]` provoque une erreur (`IndexError`) puisqu'il n'y a pas d'élément à cette position.

````{admonition} Exercice 3 : accès
:class: note
Avec le tuple `jours`, affiche le premier élément, le dernier élément, puis les deux derniers sous forme de tranche.

```{codeplay}
:file: ex_tuple_3.py
jours = ("lundi", "mardi", "jeudi")
print(...)
print(...)
print(...)
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_tuple_3.py
jours = ("lundi", "mardi", "jeudi")
print(jours[0])
print(jours[-1])
print(jours[1:3])
```
````
`````

## 4. Un tuple ne se modifie pas

Contrairement à une liste, essayer de changer un élément provoque une erreur.

```{codeplay}
jours = ("lundi", "mardi", "jeudi")
# Cette instruction provoque une erreur :
# jours[2] = "mercredi"
print(jours)
```

`append()`, `insert()`, `remove()`, `pop()` et `del couleurs[0]` ne peuvent pas modifier un tuple.

Pourquoi utiliser un tuple ? Parce que son **immuabilité protège les données** : on est sûr que personne ne les modifiera par erreur.

````{admonition} Exercice 4 : prédire l'erreur
:class: note
Cette instruction fonctionne-t-elle ? Que se passe-t-il ?

```python
jours = ("lundi", "mardi", "jeudi")
jours[2] = "mercredi"
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
Elle provoque une erreur `TypeError`, car un tuple est immuable.

```{codeplay}
jours = ("lundi", "mardi", "jeudi")
print(type(jours))
# jours[2] = "mercredi"  # TypeError
```
````
`````

## 5. « Modifier » un tuple malgré tout

On ne peut pas modifier directement un tuple, mais on peut en créer un nouveau.

### Par concaténation avec `+`

```{codeplay}
couleurs = ("rouge", "vert")
couleurs = couleurs + ("bleu",)
print(couleurs)
```

### Passer par une liste

On convertit le tuple en liste avec `list()`, on modifie la liste, puis on reconvertit avec `tuple()`.

```{codeplay}
couleurs = ("rouge", "vert", "bleu")
ma_liste = list(couleurs)
ma_liste[1] = "jaune"
ma_liste.append("noir")
couleurs = tuple(ma_liste)
print(couleurs)
```

À retenir : le tuple d'origine n'a pas changé ; on a simplement donné à la variable un nouveau tuple.

````{admonition} Exercice 5 : insertion
:class: note
À partir de `jours = ("lundi", "mardi", "jeudi")`, obtiens `("lundi", "mardi", "mercredi", "jeudi", "vendredi")` en passant par une liste.

```{codeplay}
:file: ex_tuple_5.py
jours = ("lundi", "mardi", "jeudi")
liste = ...
...
jours = ...
print(jours)
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_tuple_5.py
jours = ("lundi", "mardi", "jeudi")
liste = list(jours)
liste.insert(2, "mercredi")
liste.append("vendredi")
jours = tuple(liste)
print(jours)
```
````
`````

## 6. Le dépaquetage

Une grande force des tuples est de répartir leurs éléments dans plusieurs variables en une seule ligne.

```{codeplay}
point = (3, 7)
x, y = point
print(x)
print(y)
```

Le nombre de variables doit correspondre au nombre d'éléments.

C'est aussi ce qui permet d'échanger deux variables très simplement :

```{codeplay}
a = 1
b = 2
a, b = b, a
print(a, b)
```

````{admonition} Exercice 6 : dépaquetage
:class: note
Crée le tuple `eleve = ("Léa", 17)`, récupère le prénom et l'âge dans les variables `nom` et `age`, puis affiche-les. Ensuite, échange les valeurs de `a = 10` et `b = 20`.

```{codeplay}
:file: ex_tuple_6.py
eleve = ("Léa", 17)
...
a = 10
b = 20
...
print(a, b)
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_tuple_6.py
eleve = ("Léa", 17)
nom, age = eleve
print(nom, age)
a = 10
b = 20
a, b = b, a
print(a, b)
```
````
`````

## 7. Parcourir un tuple et outils pratiques

Le parcours se fait comme pour une liste :

```{codeplay}
couleurs = ("rouge", "vert", "bleu")
for couleur in couleurs:
    print(couleur)
```

Les outils qui ne modifient pas le tuple sont disponibles :

```{codeplay}
notes = (12, 15, 9, 15, 18)
print(len(notes))
print(max(notes))
print(min(notes))
print(sum(notes))
print(15 in notes)
print(notes.count(15))
print(notes.index(9))
```

````{admonition} Exercice 7 : outils pratiques
:class: note
À partir de `notes = (12, 15, 9, 15, 18)`, affiche le nombre de notes, la plus grande, la moyenne, le nombre de fois où la note `15` apparaît et la position de la note `18`.

```{codeplay}
:file: ex_tuple_7.py
notes = (12, 15, 9, 15, 18)
...
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_tuple_7.py
notes = (12, 15, 9, 15, 18)
print(len(notes))
print(max(notes))
print(sum(notes) / len(notes))
print(notes.count(15))
print(notes.index(18))
```
````
`````

## 8. Tuple ou liste ?

| Critère | Liste `[ ]` | Tuple `( )` |
|---|---|---|
| Modifiable | Oui | Non |
| Ajouter ou supprimer | `append`, `insert`, `remove` | Impossible |
| Usage typique | Collection qui évolue | Données fixes qui vont ensemble |
| Exemple | Liste de courses | Coordonnées, date, couleur RVB |

Règle simple : si les données doivent changer, utilise une liste ; si elles doivent rester fixes, utilise un tuple.

## 9. Tableau récapitulatif

| Je veux… | Je fais… |
|---|---|
| Créer un tuple | `t = (1, 2, 3)` |
| Créer un tuple à un élément | `t = (1,)` |
| Lire un élément | `t[0]` |
| Extraire une tranche | `t[0:2]` |
| Ajouter un élément | `t = t + (4,)` |
| Modifier un élément | `t = tuple(list(t))` après modification |
| Répartir dans des variables | `a, b, c = t` |
| Compter les éléments | `len(t)` |
| Compter une valeur | `t.count(2)` |
| Trouver une position | `t.index(2)` |

## 10. Exercice de synthèse

````{admonition} Exercice 8 : la fiche élève
:class: note
Reprends tout ce que tu as appris :

1. Crée un tuple `eleve = ("Léa", 17, "3B")`.
2. Récupère ses éléments dans les variables `nom`, `age` et `classe`.
3. Affiche : `Léa a 17 ans et est en 3B`.
4. Essaie de changer l'âge avec `eleve[1] = 18` et observe l'erreur.
5. Crée un nouveau tuple `eleve2` identique, mais avec l'âge `18`.
6. Crée la liste `eleves = [eleve2, ("Tom", 16, "3A")]`.
7. Parcours-la pour afficher chaque élève sous la forme `nom - age ans - classe`.

```{codeplay}
:file: ex_tuple_synthese.py
eleve = ("Léa", 17, "3B")
...
```
````

`````{admonition} Corrigé
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_tuple_synthese.py
eleve = ("Léa", 17, "3B")
nom, age, classe = eleve
print(nom, "a", age, "ans et est en", classe)

# eleve[1] = 18  # TypeError : les tuples sont immuables

eleve2 = (eleve[0], 18, eleve[2])
eleves = [eleve2, ("Tom", 16, "3A")]

for nom, age, classe in eleves:
    print(nom, "-", age, "ans -", classe)
```
````
`````
