(mon_jeu.part2)=

# 2. Partie 2 — La traversée pirate

Dans cette partie, tu fais vivre l'aventure : voyage, recherche du trésor, marché aux enchères et menu principal.

Tu réutiliseras les fonctions des exercices précédents :

- `calcul_or()`
- `affichage()`
- `reparer_navire()`
- `est_naufrage()`
- `grade_capitaine()`
- `calculer_valeur()`
- `appliquer_taxe_portuaire()`
- `annoncer_titre()`

Les notions utilisées sont : `while`, `for`, `range`, les compteurs, les accumulateurs, `break`, `continue`, la validation de saisie, les boucles imbriquées et le module `random`.

## Exercice 1 — Création du capitaine sécurisée

Reprends la création du capitaine, mais empêche la personne utilisatrice de saisir une donnée incorrecte.

````{admonition} Exercice 1.1 — Nom du capitaine
:class: note
Redemande le nom tant qu'il est vide.

```{codeplay}
:file: tp2_nom_capitaine.py
nom = ""

# À compléter : redemander le nom tant que nom == ""
...

print("Capitaine :", nom)
```
````

````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```python
nom = ""

while nom == "":
    nom = input("Nom du capitaine : ")
    if nom == "":
        print("Erreur : le nom ne peut pas être vide.")

print("Capitaine :", nom)
```
````

````{admonition} Exercice 1.2 — Expérience valide
:class: note
Redemande l'expérience tant qu'elle n'est pas un entier compris entre `0` et `50`.

```{codeplay}
:file: tp2_experience_capitaine.py
def demander_experience():
    ...

experience = demander_experience()
print("Expérience :", experience)
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: tp2_experience_capitaine.py
def demander_experience():
    while True:
        saisie = input("Expérience (0 à 50) : ")
        try:
            experience = int(saisie)
        except ValueError:
            print("Erreur : entrez un nombre entier.")
            continue

        if 0 <= experience <= 50:
            return experience

        print("Erreur : l'expérience doit être comprise entre 0 et 50.")

experience = demander_experience()
print("Expérience :", experience)
```
````

```{codeplay}
:file: tp2_fiche_capitaine.py
def calcul_or(experience):
    return 100 + experience * 20

def grade_capitaine(experience):
    if experience < 2:
        return "Mousse"
    if experience <= 6:
        return "Matelot"
    if experience <= 15:
        return "Capitaine"
    return "Seigneur des mers"

nom = ""
while nom == "":
    nom = input("Nom du capitaine : ")

while True:
    try:
        experience = int(input("Expérience (0 à 50) : "))
        if 0 <= experience <= 50:
            break
        print("Erreur : l'expérience doit être comprise entre 0 et 50.")
    except ValueError:
        print("Erreur : entrez un nombre entier.")

or_en_poche = calcul_or(experience)
print("**********************************************")
print("** Capitaine :", nom)
print("** Expérience :", experience)
print("** Or :", or_en_poche)
print("** Grade :", grade_capitaine(experience))
print("**********************************************")
````

## Exercice 2 — La traversée

Le navire commence avec `100` unités de solidité et doit tenir `10` jours en mer.

Chaque jour, une tempête inflige des dégâts aléatoires entre `0` et `10` avec `random.randint(0, 10)`.

````{admonition} Exercice 2.1 — Boucle des dix jours
:class: note
Pour chaque jour :

1. tire les dégâts aléatoires ;
2. soustrais-les à la solidité ;
3. affiche le jour, les dégâts, la solidité restante et le titre obtenu avec `annoncer_titre()` ;
4. tous les trois jours, utilise `reparer_navire()` pour ajouter `15` points sans dépasser `100` ;
5. si `est_naufrage()` vaut `True`, utilise `break` pour arrêter la traversée ;
6. sinon, après dix jours, affiche `"Terre en vue !"`.

```{codeplay}
:file: tp2_traversee.py
import random

solidite = 100

# Complète les fonctions reparer_navire, est_naufrage et annoncer_titre
...

for jour in range(1, 11):
    ...
```
````

````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: tp2_traversee.py
import random

solidite = 100

def reparer_navire(solidite_actuelle, reparation):
    return min(solidite_actuelle + reparation, 100)

def est_naufrage(solidite):
    return solidite <= 0

def annoncer_titre(degats):
    if degats < 15:
        return "Traversée tranquille"
    if degats < 40:
        return "Belle frayeur"
    if degats < 80:
        return "Tempête redoutable"
    return "NAUFRAGE ÉVITÉ DE JUSTESSE !"

for jour in range(1, 11):
    degats = random.randint(0, 10)
    solidite = max(0, solidite - degats)

    print("Jour", jour)
    print("Dégâts :", degats)
    print("Solidité restante :", solidite)
    print("Titre :", annoncer_titre(degats))

    if jour % 3 == 0:
        solidite = reparer_navire(solidite, 15)
        print("Réparation : solidité", solidite)

    if est_naufrage(solidite):
        print(f"Le navire a sombré au jour {jour}")
        break
else:
    print("Terre en vue !")
    print("Solidité finale :", solidite)
```
````

````{admonition} À retenir
:class: important
- `break` permet d'arrêter immédiatement une boucle ;
- la partie `else` d'une boucle `for` s'exécute uniquement si la boucle n'a pas été interrompue par `break` ;
- `jour % 3 == 0` permet de détecter les jours `3`, `6` et `9`.
````

## Exercice 3 — À la recherche du trésor

Le trésor est caché sur une île numérotée de `1` à `20`. Le joueur dispose de `5` tentatives.

````{admonition} Exercice 3.1 — Deviner l'île
:class: note
À chaque essai :

- indique `"Plus haut"` si le trésor se trouve sur une île plus élevée ;
- indique `"Plus bas"` si le trésor se trouve sur une île moins élevée ;
- utilise `continue` pour les saisies invalides ;
- ne consomme pas de tentative lorsque la saisie est invalide ;
- révèle l'île du trésor en cas d'échec.

```{codeplay}
:file: tp2_tresor.py
import random

ile_tresor = random.randint(1, 20)
tentatives = 5

for essai in range(1, tentatives + 1):
    ...
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: tp2_tresor.py
import random

ile_tresor = random.randint(1, 20)
tentatives = 5

for essai in range(1, tentatives + 1):
    saisie = input(f"Tentative {essai}/{tentatives} — île : ")

    try:
        proposition = int(saisie)
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
        tentatives_restantes = tentatives - essai + 1
        gain = 50 * tentatives_restantes
        print("Trésor trouvé !")
        print("Gain :", gain, "pièces d'or")
        break
else:
    print("Échec : le trésor était sur l'île", ile_tresor)
```
````

## Exercice 4 — Les enchères en continu

Pendant toute l'escale, le capitaine vend son butin.

````{admonition} Exercice 4 — Plusieurs ventes
:class: note
Tant que la personne utilisatrice ne saisit pas `fin` comme valeur unitaire :

1. demande la quantité vendue ;
2. utilise `calculer_valeur()` ;
3. utilise `appliquer_taxe_portuaire()` ;
4. compte le nombre de ventes ;
5. additionne le total perçu ;
6. conserve la meilleure vente.

À la fin, affiche les résultats et ajoute le total perçu à l'or du capitaine.

```{codeplay}
:file: tp2_encheres.py
def calculer_valeur(valeur_unitaire, quantite):
    ...

def appliquer_taxe_portuaire(total):
    ...

or_en_poche = 500
nombre_ventes = 0
total_percu_escale = 0
meilleure_vente = 0

while True:
    ...

print("Nombre de ventes :", nombre_ventes)
print("Total perçu à l'escale :", total_percu_escale)
print("Meilleure vente :", meilleure_vente)
print("Or final :", or_en_poche)
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: tp2_encheres.py
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

or_en_poche = 500
nombre_ventes = 0
total_percu_escale = 0
meilleure_vente = 0

while True:
    saisie = input("Valeur unitaire (tapez fin pour arrêter) : ")
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

    nombre_ventes = nombre_ventes + 1
    total_percu_escale = total_percu_escale + total_percu
    if total_percu > meilleure_vente:
        meilleure_vente = total_percu

    print(f"Taxe : {taux}% — Perçu : {total_percu} pièces d'or")

or_en_poche = or_en_poche + total_percu_escale
print("Nombre de ventes :", nombre_ventes)
print("Total perçu à l'escale :", total_percu_escale)
print("Meilleure vente :", meilleure_vente)
print("Or final :", or_en_poche)
```
`````

## Exercice 5 — Menu principal

Le menu principal permet d'accéder aux différentes fonctionnalités du jeu.

```{codeplay}
:file: tp2_jeu_complet.py
nom = "Barbe-Noire"
experience = 5
or_en_poche = 200
solidite = 100

# Définitions des fonctions
...

# Boucle du menu principal
while True:
    ...
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: tp2_jeu_complet.py
nom = "Barbe-Noire"
experience = 5
or_en_poche = 200
solidite = 100

def afficher_fiche(nom, experience, or_en_poche, solidite):
    print("**********************************************")
    print("Capitaine :", nom)
    print("Expérience :", experience)
    print("Or :", or_en_poche)
    print("Solidité :", solidite)
    print("**********************************************")

def prendre_la_mer(solidite):
    solidite = max(0, solidite - 30)
    print("Vous avez traversé une tempête. Solidité :", solidite)
    return solidite

def chercher_tresor():
    print("Fonction de recherche du trésor à compléter")

def aller_au_marche(or_en_poche):
    print("Fonction du marché à compléter")
    return or_en_poche

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
            print("Partie terminée : le navire a coulé")
            print("Or final :", or_en_poche)
            break
    elif choix == "3":
        chercher_tresor()
    elif choix == "4":
        or_en_poche = aller_au_marche(or_en_poche)
    elif choix == "5":
        print("Au revoir !")
        break
    else:
        print("Choix invalide.")
```
`````
