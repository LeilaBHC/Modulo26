(mon_jeu.jeu_complet)=

# 3. Jeu complet

Dans ce chapitre, tu vas assembler toutes les parties de ton jeu pour obtenir un programme complet.

## Assemblage du jeu sans IA

Avant de terminer, vérifie que ton jeu contient :


- [ ] les fonctions utiles;
- [ ] une condition de victoire ou de défaite ;
- [ ] un message affiché à la fin.
````{admonition} Exercice 1.1 — Assemblage 
:class: note
Grace aux parties 1 et 2 écris et test ton jeu
```{codeplay}
:file: tp2_jeu_complet.py
import random

nom = "Barbe-Noire"
experience = 5
or_en_poche = 200
solidite = 100

def grade_capitaine(experience):
    ...

def afficher_fiche(nom, experience, or_en_poche, solidite):
    ...


while True:
    print("===== LA CHASSE AU TRÉSOR =====")
    print("1. Voir la fiche du capitaine")
    print("2. Prendre la mer")
    print("3. Chercher le trésor")
    print("4. Aller au marché")
    print("5. Quitter")

    choix = input("Votre choix : ")

    if choix == "1":
        afficher_fiche(nom, experience, or_en_poche, solidite)
    elif choix == "2":
        ...

```
````


`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: tp2_jeu_complet.py
import random

nom = "Barbe-Noire"
experience = 5
or_en_poche = 200
solidite = 100

def grade_capitaine(experience):
    if experience < 2:
        return "Mousse"
    if experience <= 6:
        return "Matelot"
    if experience <= 15:
        return "Capitaine"
    return "Seigneur des mers"

def afficher_fiche(nom, experience, or_en_poche, solidite):
    print("**********************************************")
    print("Capitaine :", nom)
    print("Expérience :", experience)
    print("Or :", or_en_poche)
    print("Solidité :", solidite)
    print("**********************************************")

def reparer_navire(solidite_actuelle, reparation):
    return min(solidite_actuelle + reparation, 100)

def prendre_la_mer(solidite):
    for jour in range(1, 11):
        degats = random.randint(0, 10)
        solidite = max(0, solidite - degats)
        print("Jour", jour, "— dégâts :", degats, "— solidité :", solidite)

        if jour % 3 == 0:
            solidite = reparer_navire(solidite, 15)

        if solidite <= 0:
            print(f"Le navire a sombré au jour {jour}")
            return solidite
    print("Terre en vue !")
    return solidite

def chercher_tresor(or_en_poche):
    ile_tresor = random.randint(1, 20)
    for essai in range(1, 6):
        try:
            proposition = int(input(f"Tentative {essai}/5 — île : "))
        except ValueError:
            print("Erreur : entrez un nombre entier.")
            continue

        if proposition < 1 or proposition > 20:
            print("Erreur : choisissez une île entre 1 et 20.")
            continue

        if proposition < ile_tresor:
            print("Plus haut")
        elif proposition > ile_tresor:
            print("Plus bas")
        else:
            gain = 50 * (6 - essai)
            or_en_poche = or_en_poche + gain
            print("Trésor trouvé ! Gain :", gain)
            return or_en_poche

    print("Échec : le trésor était sur l'île", ile_tresor)
    return or_en_poche

def calculer_valeur(valeur_unitaire, quantite):
    return valeur_unitaire * quantite

def appliquer_taxe_portuaire(total):
    if total > 200:
        taux = 20
        total_percu = total * 0.80
    elif total >= 80:
        taux = 10
        total_percu = total * 0.90
    else:
        taux = 0
        total_percu = total
    return taux, total_percu

def aller_au_marche(or_en_poche):
    total_percu_escale = 0
    while True:
        saisie = input("Valeur unitaire (fin pour arrêter) : ")
        if saisie.lower() == "fin":
            break

        try:
            valeur_unitaire = float(saisie)
            quantite = int(input("Quantité vendue : "))
        except ValueError:
            print("Saisie invalide.")
            continue

        total = calculer_valeur(valeur_unitaire, quantite)
        taux, total_percu = appliquer_taxe_portuaire(total)
        total_percu_escale = total_percu_escale + total_percu
        print(f"Taxe : {taux}% — Perçu : {total_percu} pièces d'or")

    return or_en_poche + total_percu_escale

while True:
    print("===== LA CHASSE AU TRÉSOR =====")
    print("1. Voir la fiche du capitaine")
    print("2. Prendre la mer")
    print("3. Chercher le trésor")
    print("4. Aller au marché")
    print("5. Quitter")

    choix = input("Votre choix : ")

    if choix == "1":
        afficher_fiche(nom, experience, or_en_poche, solidite)
    elif choix == "2":
        solidite = prendre_la_mer(solidite)
        if solidite <= 0:
            print("Partie terminée — Navire coulé")
            print("Grade :", grade_capitaine(experience))
            print("Or final :", or_en_poche)
            break
    elif choix == "3":
        or_en_poche = chercher_tresor(or_en_poche)
    elif choix == "4":
        or_en_poche = aller_au_marche(or_en_poche)
    elif choix == "5":
        print("Au revoir !")
        break
    else:
        print("Choix invalide.")
```
````
`````




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
