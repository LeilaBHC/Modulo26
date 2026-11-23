(mon_jeu.part2)=

# 2. Partie 2

Dans cette deuxième partie, tu vas améliorer ton jeu pour qu'il puisse continuer pendant plusieurs tours.

## Faire évoluer une partie

Une partie peut évoluer grâce à :

- une boucle `while` ;
- un score ;
- un nombre de tentatives ;
- une liste de questions ou d'éléments possibles ;
- des fonctions pour organiser le code.

```{codeplay}
score = 0
continuer = True

while continuer:
    reponse = input("Tape continuer ou quitter : ")
    if reponse == "continuer":
        score = score + 1
        print("Score :", score)
    else:
        continuer = False

print("Partie terminée !")
```

## Organiser le jeu avec une fonction

```{codeplay}
def demander_action():
    return input("Que veux-tu faire ? ")

action = demander_action()
print("Tu as choisi :", action)
```

````{admonition} Exercice 1 : ajouter des tours
:class: note
Modifie ton jeu pour qu'il fasse plusieurs tours.

Tu peux utiliser :

- une boucle `while` ;
- une variable `score` ;
- une variable `nombre_tentatives` ;
- une condition pour arrêter la partie.

```{codeplay}
:file: mon_jeu_part2.py
score = 0
continuer = True

while continuer:
    # demande une action
    # modifie le score
    # vérifie si la partie doit s'arrêter
    ...

print("Score final :", score)
```
````

````{admonition} Exercice 2 : organiser le code
:class: note
Crée au moins une fonction utile à ton jeu, par exemple pour afficher les règles, demander une action ou vérifier une réponse.

```{codeplay}
:file: mon_jeu_fonctions.py
def afficher_regles():
    ...

def demander_action():
    ...

def verifier_reponse(reponse):
    ...
```
````
