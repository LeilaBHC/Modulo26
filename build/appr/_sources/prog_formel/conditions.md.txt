(prog_formel.conditions)=

# 5. Branchement

<a href="https://perso.limsi.fr/pointal/_media/python:cours:mementopython3.pdf" target="_blank">Mémento Python</a>  
<a href="https://support.apple.com/fr-ch/HT201236" target="_blank">Raccourcis clavier</a>

Les structures de contrôle sont un élément central de la programmation.
**Elles permettent de moduler l’exécution d'un programme selon la valeur de ses variables**.  
Les structures de contrôle se retrouvent de façon presque identique dans tous les autres langages de programmation.

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

````{admonition} Exercice 1
:class: note
Ecrivez un programme qui demande son âge à l’utilisateur. 
Si l’utilisateur donne un nombre inférieur à 20, le programme écrit "Comme vous êtes jeune !", sinon il écrit "Comme vous êtes vieux !".

```{codeplay}
:file: ex_1.py
age = ...

...
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_1.py
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

````{admonition} Exercice 2
:class: note
Ecrivez la fonction maximum(a, b) qui prend 2 nombres en argument et retourne le plus grand.

```{codeplay}
:file: ex_2.py
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
:file: ex_2.py
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

````{admonition} Exercice 3
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
:file: ex_3.py
buts_domicile = ...
buts_exterieur = ...

...
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: ex_3.py
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

<!-- Fin du chapitre Branchement -->
