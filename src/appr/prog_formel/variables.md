(prog_formel.variables)=

# 2. Les variables

<a href="https://perso.limsi.fr/pointal/_media/python:cours:mementopython3.pdf" target="_blank">Mémento Python</a>  
<a href="https://support.apple.com/fr-ch/HT201236" target="_blank">Raccourcis clavier</a>

## Les types de variables simples

Une variable est une valeur **nommée et stockée en mémoire** qui va varier au cours du programme.  
En Python, les types de données  stockés dans les variables  sont les suivants :

1. Les **nombre entiers**, appelés **int**: 2, 45, -4, 56.
2. Les **nombres à virgules**, appelés **float**: 2.3, 6.5, 78.9, -89.0. La décimale est indiquée par un point (et non une virgule) comme cela est l’usage dans les pays anglo-saxons.
3. Les **chaines de caractères**, appelés **str** (pour string, chaîne): "bonjour", "au revoir", "3432", "232.543". Il s’agit simplements d’une suite de caractères placée entre guillemets (`"`) ou entre apostrophes (`'`).
4. Les **booléens**, appelés **bool**: True, False. Ce type de variable ne peut prendre que deux valeurs : True (vrai) et False (faux), à écrire avec une majuscule.  

Il est possible de vérifier le type d’une variable à l’aide de la fonction `type` 😉

````{admonition} Exercice 3
:class: note
Quel est le type des valeurs suivantes ?  
Vous pouvez utiliser la fonction `type()` pour vérifier vos réponses.  
a) "rewr"  
b) 34  
c) 5.0  
d) ’julien34’  
e) "65.5"  
f) True  
g) "False"  
h) rewr

```{codeplay}
:file: ex_3.py
print(type(...))
```
````

````{admonition} Solution
```{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
a) Chaîne de caractères (str)  
b) Nombre entier (int)  
c) Nombre à virgule (float)  
d) Chaîne de caractères (str)  
e) Chaîne de caractères (str)  
f) Valeur logique (bool)  
g) Chaîne de caractères (str)  
h) ⚠️ erreur ⚠️ Il s'agit d'une variable (inconnue) ayant pour nom rewr.
```
````

## Les opérateurs

Pour chaque type de variable, plusieurs opérateurs sont définis qui permettent de manipuler ces variables.  
Pour les nombres entiers, les **opérateurs arithmétiques** suivants sont les plus courants :

* \+ (addition),
* \- (soustraction)
* \* (multiplication)
* / (division)
* // (division entière)
* \% (modulo ou reste de la division entière)

Toutes les opérations ci-dessus retournent un nombre entier, sauf la division (/) qui retourne un nombre à virgule.
Les opérateurs similaires sont définis pour les nombres à virgules.
Il existe également les **opérateurs de comparaison** qui retournent des booléens (True ou False):

* \> (plus grand que)
* \< (plus petit que)
* \>= (plus grand ou égal à)
* \<= (plus petit ou égal à)
* == (égal à)
* != (non égal à)

Enfin, les **opérateur logiques** suivants sont définis sur les booléens:

* and (et)
* or (ou)
* not (non)

Les opérateurs sur les nombres **suivent le même ordre de priorité qu’en mathématique**.
Les opérateurs arithmétiques ont la priorité sur les autres types d’opérateurs.  
Il est fortement recommandé d’utiliser les parenthèses pour clarifier l’ordre des opérations en cas de doute. 🤔

## Assignation de variables

Afin de manipuler des valeurs, il est utile de leur **donner des noms**, c’est ce qu’on appelle une **assignation**.  
**Une variable est donc créée qu'on l'on assigne un nom à une valeur**.  
Ceci se fait en utilisant l’opérateur `=` (à ne pas confondre avec l’opérateur `==` et qui est différent du `=` mathématique).

```{codeplay}
a = "Bonjour"
print(a)
```

Dans l’exemple ci-dessus, on donne le nom `a` à la chaîne de caractère "bonjour".
On peut dire que la variable `a` contient la chaîne de caractère "bonjour".
**Une fois une variable nommée, on peut la manipuler en l’appelant par son nom**.
On demande ensuite à l’ordinateur d’écrire le contenu de `a` dans le terminal, c’est-à-dire "bonjour".

````{admonition} Exercice 4
:class: note
⚠️ Python ne permet pas d’utiliser n’importe quel nom de variable. ⚠️  
Essayez d’utiliser les noms suivants pour nommer vos variables:  
a) 38b  
b) ’variable’  
c) mon age  
d) def  
Par exemple, écrivez `38b = 5`.  
Lancez votre programme. Qu’observez-vous ?

```{codeplay}
:file: ex_4.py
38b = 5  # Ca fonctionne ça ??
```
````

````{admonition} Solution
```{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
Tous ces noms de variables sont interdits et Python vous le fera savoir ! 😡  
Les règles expliquant le nommage de variables sont expliquées juste au dessous.  
Plus d'informations <a href="https://python.sdv.univ-paris-diderot.fr/02_variables/#23-nommage" target="_blank">ici</a> 😉
```
````

**Les noms de variable ne peuvent pas commencer par un chiffre, ni contenir d’accent, d’apostrophe, de guillement d’espace ou de caractères spéciaux**.
Il y a également quelques mot-clés réservés par Python (ex : `def`, `for`, `in`, `return`, etc.) qui ne peuvent pas être utilisés (nous verrons plus tard à quoi sont réservés ces mots).

Chaque nom ne peut correspondre qu’à une seule variable, donc si on redonne un nom déjà utilisé, l’ancienne variable désignée par ce nom est oubliée.
Autrement dit, **l’ancienne valeur de la variable est remplacée par la nouvelle valeur**.

```{codeplay}
a = "Bonjour"
a = "Au revoir"
print(a)
```

Dans le programme ci-dessus, la variable `a` désigne d’abord le string "Bonjour", puis elle désigne le string "Au revoir".
C’est cette dernière expression qui apparaît à l’écran avec la dernière ligne du programme.
Une variable peut apparaître des deux côtés d’une assignation (d’un signe `=`).
En ce cas, l’ordinateur calcule d’abord le côté droit, puis assigne le résultat à la variable apparaissant à gauche du signe `=`.

```{codeplay}
b = 5
b = b * 2
print(b)
```

Dans cet exemple, la première instruction assigne 5 à la variable `b`.
La seconde instruction multiplie `b` par 2 (ce qui donne 10), puis le résultat est assigné à `b` qui contient maintenant le nombre 10.

````{admonition} Exercice 5
:class: note
Mettez la valeur 6 dans une variable appelée `a`, affichez-la à l’écran puis divisez-la par trois et remettez-la dans `a`. 
Imprimez la nouvelle valeur de `a` à l’écran.

```{codeplay}
:file: ex_5.py
# Ecrivez votre code ici
...
``` 
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_5.py
a = 6
print(a)
a = a / 3
print(a)
``` 
````
`````

````{admonition} Exercice 6
:class: note
Qu’impriment les petits programmes suivants ? 
Vérifiez vos réponses.
```
x = 2			x = 2			x = 2
y = 3			y = 3			y = 3
x = y			y = x			x = x == y
print(x, y)		print(x, y)		print(x, y)


x = 2			x = 2			x = 2
y = 5			y = 3			y = 3
x = y // x		y = x % y		x = x < y
y = y * y		x = x * 2		y = not x
print(x, y)		print(x, y)		print(x, y)
```
````

````{admonition} Solution
```{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
a) 3, 3  
b) 2, 2  
c) False, 3  
d) 2, 25  
e) 2, 4  
f) True, False
```
````

Dans un programme écrit correctement, **les noms des variables doivent toujours représenter au mieux l’utilité de la variable**.

```python
# Bon exemple
prenom = 'Jules'
nom = 'Vernes'
age = 54
est_ecrivain = True

# Mauvais exemple
j = 'Jules'
a = 'Vernes'
k = 54
b = True
```

Vous serez très heureux d’avoir correctement nommé vos variables quand votre programme deviendra plus complexe.
Sans cela, il deviendrait rapidement illisible 🤯  
Ces conventions et bonnes pratiques sont écrites par la communauté dans des <a href="https://python.sdv.univ-paris-diderot.fr/15_bonnes_pratiques/" target="_blank">PEP</a>.
## Interaction avec l'utilisateur
Pour permettre l’interaction du programme avec l’utilisateur, par exemple la saisie de la valeur d’une valeur d’une variable, il faut procéder en deux temps : 
•	utiliser input()pour récupérer les caractères tapés au clavier par l’utilisateur,
•	utiliser int() pour convertir le texte en nombre si besoin

Tester l’interaction avec l’utilisateur avec ces programmes en observant à chaque fois le type de donnée des variables

```{codeplay}
# Ecrivez votre code ici
n = input("entrez un nombre : ")
a = int(n)
print("le nombre introduit est bien a ")

``` 




## Exercices à rendre (Thonny):
# Exercice 1

1) Écrivez un petit programme qui demande votre année de naissance et qui vous affiche votre âge.

2) Écrivez un programme qui demande à l’utilisateur d’entrer un nombre en secondes et qui l’affiche en heures ; minutes et secondes.

# Exercice2 Turtle 🐢

````{admonition} Exercice (a rendre) - Dessin au choix
:class: note
Ecrivez (sur Thonny) un programme qui dessine une des formes suivantes : 

```{image} ../media/formes.png

```

