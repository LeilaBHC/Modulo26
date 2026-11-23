(mon_jeu.jeu_complet)=

# 3. Jeu complet

Dans ce chapitre, tu vas assembler toutes les parties de ton jeu pour obtenir un programme complet.

## Liste de contrôle

Avant de terminer, vérifie que ton jeu contient :

- [ ] une présentation claire ;
- [ ] des règles compréhensibles ;
- [ ] une interaction avec la personne utilisatrice ;
- [ ] des variables utiles ;
- [ ] des conditions ;
- [ ] une boucle ;
- [ ] au moins une fonction ;
- [ ] une condition de victoire ou de défaite ;
- [ ] un message affiché à la fin.

## Modèle de programme

```{codeplay}
score = 0
nombre_tours = 3

def afficher_regles():
    print("Bienvenue dans mon jeu !")
    print("Tu as", nombre_tours, "tours pour gagner.")

def demander_action(tour):
    return input(f"Tour {tour} - Quelle est ton action ? ")

def verifier_action(action):
    if action.lower() == "gagner":
        return True
    return False

afficher_regles()

for tour in range(1, nombre_tours + 1):
    action = demander_action(tour)
    if verifier_action(action):
        score = score + 1
        print("Action réussie !")
    else:
        print("Action incorrecte.")

if score >= 2:
    print("Tu as gagné ! Score final :", score)
else:
    print("Tu as perdu ! Score final :", score)
```

````{admonition} Exercice final : mon jeu complet
:class: note
Crée ton jeu complet dans un seul programme.

Ton programme doit :

1. avoir un titre et des règles ;
2. permettre plusieurs tours ou plusieurs actions ;
3. utiliser au moins une fonction ;
4. utiliser au moins une condition ;
5. afficher un score ou une autre mesure de progression ;
6. annoncer clairement la fin de la partie ;
7. permettre au joueur ou à la joueuse de rejouer.

```{codeplay}
:file: mon_jeu_complet.py
# Titre du jeu

# Variables du jeu

# Fonctions

# Déroulement de la partie

# Fin du jeu
```
````

`````{admonition} Améliorations possibles
````{dropdown} <span style="color:grey">Cliquer ici pour voir des idées</span>
:animate: fade-in-slide-down
- ajouter un chronomètre ;
- tirer des questions ou des objets au hasard ;
- ajouter plusieurs niveaux de difficulté ;
- utiliser une liste de mots ou d'options ;
- conserver les meilleurs scores ;
- afficher une image ou un dessin avec `turtle` ;
- ajouter plusieurs personnages ou joueurs.
````
`````
