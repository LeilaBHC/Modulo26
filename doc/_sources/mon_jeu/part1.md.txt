(mon_jeu.part1)=

# 1. Partie 1 — La création du capitaine

Dans cette première partie, tu vas créer les éléments de départ du jeu **La Chasse au trésor**.

## Contexte

Tu es développeur ou développeuse pour un studio qui prépare un jeu de pirates à la recherche d'un trésor. Ton objectif est de coder les mécaniques de base du jeu :

- la création du capitaine ;
- les tempêtes en mer ;
- les sorts de navigation ;
- le marché aux enchères du port.

Chaque exercice correspond à une fonctionnalité du jeu. Fais-les dans l'ordre et teste ton programme après chaque exercice.

## Exercice 1 — Créer le capitaine

Avant de prendre la mer, la personne qui joue doit créer son capitaine.

Crée au moins quatre variables :

- `nom_capitaine` : le nom du capitaine ;
- `experience` : son niveau d'expérience ;
- `or_en_poche` : la quantité de pièces d'or ;
- `possede_carte_tresor` : indique si le capitaine possède une carte au trésor.

Demande ensuite au clavier le nom du capitaine et son niveau d'expérience.

```{codeplay}
nom_capitaine = input("Nom du capitaine : ")
experience = int(input("Niveau d'expérience : "))
or_en_poche = 0.0
possede_carte_tresor = True

print("**********************************************")
print("** Capitaine :         ", nom_capitaine)
print("** Expérience :        ", experience)
print("** Quantité d'or :     ", or_en_poche)
print("** Carte au trésor :   ", possede_carte_tresor)
print("**********************************************")
```

````{admonition} Exercice 1.1 — Calculer l'or initial
:class: note
Crée une fonction `calcul_or(experience)` qui calcule la quantité de pièces d'or initiale selon la formule :

```python
quantite_or = 100 + experience * 20
```

La fonction doit retourner `quantite_or`. Appelle-la ensuite pour calculer `or_en_poche` et affiche une nouvelle fiche du capitaine.

```{codeplay}
:file: chasse_tresor_capitaine.py
nom_capitaine = input("Nom du capitaine : ")
experience = int(input("Niveau d'expérience : "))
possede_carte_tresor = True

def calcul_or(experience):
    ...

or_en_poche = calcul_or(experience)

print("**********************************************")
print("** Capitaine :         ", nom_capitaine)
print("** Expérience :        ", experience)
print("** Quantité d'or :     ", or_en_poche)
print("** Carte au trésor :   ", possede_carte_tresor)
print("**********************************************")
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: chasse_tresor_capitaine.py
nom_capitaine = input("Nom du capitaine : ")
experience = int(input("Niveau d'expérience : "))
possede_carte_tresor = True

def calcul_or(experience):
    quantite_or = 100 + experience * 20
    return quantite_or

or_en_poche = calcul_or(experience)

print("**********************************************")
print("** Capitaine :         ", nom_capitaine)
print("** Expérience :        ", experience)
print("** Quantité d'or :     ", or_en_poche)
print("** Carte au trésor :   ", possede_carte_tresor)
print("**********************************************")
```
````
````{admonition} Exercice 1.2 — Trouver un coffre
:class: note
L'équipage trouve un coffre pendant l'escale.

Demande au clavier la quantité d'or trouvée dans le coffre, puis affiche le nouvel or total du capitaine. Le capitaine possédait `150.0` pièces d'or avant de trouver le coffre.

```{codeplay}
:file: coffre_au_tresor.py
or_en_poche = 150.0
quantite_trouvee = float(input("Quantité d'or trouvée dans le coffre : "))

...

print("Nouvel or en poche :", or_en_poche)
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: coffre_au_tresor.py
or_en_poche = 150.0
quantite_trouvee = float(input("Quantité d'or trouvée dans le coffre : "))

or_en_poche = or_en_poche + quantite_trouvee

print("Nouvel or en poche :", or_en_poche)
```
`````
