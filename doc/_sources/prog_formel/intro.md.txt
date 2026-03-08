(prog_formel.intro)=

# 1. Introduction

<a href="https://perso.limsi.fr/pointal/_media/python:cours:mementopython3.pdf" target="_blank">Mémento Python</a>  
<a href="https://support.apple.com/fr-ch/HT201236" target="_blank">Raccourcis clavier</a>

## Votre tout premier programme 🤩

Voici un exemple d’un tout petit programme en Python qui ne contient qu’une seule instruction:

```{codeplay}
print("bonjour")
```

En anglais, "print" signifie “imprime". En Python, l’instruction `print` demande à l’ordinateur **d’afficher à l’écran le contenu de la parenthèse qui vient après**.

````{admonition} Exercice 1
:class: note
1. Changez le texte pour que l’ordinateur écrive autre chose, par exemple "au revoir !".  
2. Faites lui écrire un nombre (sans guillemets car ils ne sont utilisés que pour le texte)
3. Faites lui écrire le résultat d'une opération mathématique (sans guillemets)
```{codeplay}
:file: ex_1.py
print("bonjour")
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_1.py
print('au revoir !')
print(42)
print(6 * 7 + 5)
``` 
Assurez-vous de bien maîtriser la sauvegarde de vos fichiers !  
Savoir sauvegarder et retrouver des fichiers dans les bons dossiers est primordial 😉
````
`````

## Les commentaires

Il est souvent utile de mettre des commentaires dans un programme, pour expliquer ce qu’il fait.
En Python, un commentaire est introduit par le caractère `#`.  
**Tout ce qui vient après et jusqu’à la fin de la ligne n’est pas lu par l’ordinateur**.  
Cela sert uniquement à l’humain qui va lire le programme 🤓

```{codeplay}
# un tout petit programme
print("bonjour")  # salutations
```



## Exercices Turtle 🐢 

`turtle` est un module Python permettant de faire du **dessin en codant**. La tortue peut se déplacer et dessiner une trace avec les 4 fonctions:

1. `forward(d)` pour avancer d’une distance `d` (en pixels).
2. `backward(d)` pour reculer.
3. `left(a)` pour tourner à gauche d’un angle `a` (en degrés).
4. `right(a)` pour tourner à droite

Ce code permet de dessiner un carré, testez-le !

```{codeplay}
import turtle  # Importe le module

turtle.forward(100)  # Avance de 100 pixels
turtle.left(90)  # Tourne a gauche de 90 degres
turtle.forward(100)
turtle.left(90)
turtle.forward(100)
turtle.left(90)
turtle.forward(100)
turtle.left(90)

turtle.done()  # Termine le dessin
```

Si vous êtes curieux, la plateforme <a href="https://apprendre.modulo-info.ch/prog1/dessiner.html" target="_blank">Modulo</a> propose beaucoup d’autres exemples et exercices dans son chapitre **Programmation**.

````{admonition} Exercice - Le triangle
:class: note
Ecrivez un programme qui dessine un triangle équilatéral avec chaque côté ayant une longueur de 100 pixels.  
(Rappel : chaque angle d’un triangle équilatéral fait 60 degrés).

```{codeplay}
:file: triangle.py
import turtle  # Importe le module

...

turtle.done()  # Termine le dessin
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: triangle.py
import turtle # Importe le module

turtle.forward(100) # Avance de 100 pixels
turtle.left(120) # Tourne a gauche de 120 degres (180-60)
turtle.forward(100)
turtle.left(120)
turtle.forward(100)
turtle.left(120)

turtle.done() # Termine le dessin
``` 

````
`````

## THONNY

`THONNY` est un **environnement de développement intégré (IDE)** libre et open-source pour le langage de programmation Python.  Il comporte un éditeur de script et une console. Il s’installe dans un environnement virtuel et permet d’y installer facilement des modules supplémentaires.

Son interface comporte essentiellement:
*   des boutons (Nouveau, Ouvrir, Executer, etc.)
*   l’éditeur de script
*   la console

### Script et console¶

Thonny comporte un éditeur de script dans la partie supérieure et une console dans la partie du bas. L’éditeur de script permet d’écrire un programme de multiples lignes. Dans l’exemple ci-dessous, le script hello.py comporte une seule ligne de code

```{codeplay}
print('hello')
```

La console est utile pour exécuter et tester rapidement des expressions simples telles que

```{codeplay}
a = 3
a * 2 + 1
```

Assurez-vous de bien maîtriser la sauvegarde de vos fichiers !  
Savoir sauvegarder et retrouver des fichiers dans les bons dossiers est primordial 😉
