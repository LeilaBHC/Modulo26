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

or_en_poche = or_en_poche + quantite_trouvee

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

## Exercice 2 — Tempête en mer

Le navire traverse une tempête. Demande au joueur ou à la joueuse le niveau de solidité de la coque, sur 100.

````{admonition} Exercice 2.1 — Solidité du navire
:class: note
Affiche :

- `"Le navire coule !"` si la solidité est inférieure ou égale à `0` ;
- `"Le navire tient bon."` sinon.

```{codeplay}
:file: tempete_solidite.py
solidite = int(input("Niveau de solidité de la coque (sur 100) : "))

if solidite <= 0:
    print("Le navire coule !")
else:
    print("Le navire tient bon.")
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: tempete_solidite.py
solidite = int(input("Niveau de solidité de la coque (sur 100) : "))

if solidite <= 0:
    print("Le navire coule !")
else:
    print("Le navire tient bon.")
```
`````

````{admonition} Exercice 2.2 — Titre de la tempête
:class: note
À la fin de la tempête, annonce un titre selon les dégâts subis :

- moins de `15` : `"Traversée tranquille"` ;
- de `15` inclus à `40` exclu : `"Belle frayeur"` ;
- de `40` inclus à `80` exclu : `"Tempête redoutable"` ;
- `80` ou plus : `"NAUFRAGE ÉVITÉ DE JUSTESSE !"`.

```{codeplay}
:file: titre_tempete.py
degats = int(input("Dégâts subis par le navire (entre 0 et 100) : "))

...
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: titre_tempete.py
degats = int(input("Dégâts subis par le navire (entre 0 et 100) : "))

if degats < 15:
    print("Traversée tranquille")
elif degats < 40:
    print("Belle frayeur")
elif degats < 80:
    print("Tempête redoutable")
else:
    print("NAUFRAGE ÉVITÉ DE JUSTESSE !")
```
`````

````{admonition} Exercice 2.3 — Carte au trésor
:class: note
Crée une fonction qui utilise la variable booléenne `possede_carte_tresor`.

- si `possede_carte_tresor` vaut `True`, affiche `"Cap sur le trésor !"` ;
- sinon, affiche `"Il faut d'abord en trouver une..."`.

```{codeplay}
:file: carte_tresor.py
def orienter_navire(possede_carte_tresor):
    ...

orienter_navire(True)
orienter_navire(False)
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: carte_tresor.py
def orienter_navire(possede_carte_tresor):
    if possede_carte_tresor:
        print("Cap sur le trésor !")
    else:
        print("Il faut d'abord en trouver une...")

orienter_navire(True)
orienter_navire(False)
```
`````

## Exercice 3 — Navigation et équipage

Ce exercice est proposé comme bonus pour approfondir les fonctions.

````{admonition} Exercice 3.1 — Réparer le navire
:class: note
Écris une fonction `reparer_navire(solidite_actuelle, reparation)` qui reçoit la solidité actuelle et la valeur d'une réparation, puis retourne la nouvelle solidité.

Teste-la avec `reparer_navire(30, 45)`.

```{codeplay}
:file: reparer_navire.py
def reparer_navire(solidite_actuelle, reparation):
    ...

print(reparer_navire(30, 45))
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: reparer_navire.py
def reparer_navire(solidite_actuelle, reparation):
    nouvelle_solidite = solidite_actuelle + reparation
    return nouvelle_solidite

print(reparer_navire(30, 45))
```
`````

````{admonition} Exercice 3.2 — Naufrage
:class: note
Écris une fonction `est_naufrage(solidite)` qui retourne `True` si la solidité est inférieure ou égale à `0`, et `False` sinon.

```{codeplay}
:file: est_naufrage.py
def est_naufrage(solidite):
    ...

print(est_naufrage(-5))
print(est_naufrage(20))
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: est_naufrage.py
def est_naufrage(solidite):
    if solidite <= 0:
        return True
    return False

print(est_naufrage(-5))
print(est_naufrage(20))
```
`````

````{admonition} Exercice 3.3 — Grade du capitaine
:class: note
Écris une fonction `grade_capitaine(experience)` qui retourne :

- `"Mousse"` si l'expérience est inférieure à `2` ;
- `"Matelot"` si elle vaut de `2` à `6` inclus ;
- `"Capitaine"` si elle vaut de `7` à `15` inclus ;
- `"Seigneur des mers"` si elle vaut `16` ou plus.

Appelle ensuite la fonction avec trois valeurs d'expérience différentes et affiche les résultats.

```{codeplay}
:file: grade_capitaine.py
def grade_capitaine(experience):
    ...

print(grade_capitaine(...))
print(grade_capitaine(...))
print(grade_capitaine(...))
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: grade_capitaine.py
def grade_capitaine(experience):
    if experience < 2:
        return "Mousse"
    elif experience <= 6:
        return "Matelot"
    elif experience <= 15:
        return "Capitaine"
    return "Seigneur des mers"

print(grade_capitaine(1))
print(grade_capitaine(5))
print(grade_capitaine(20))
```
`````

## Exercice 4 — Le marché aux enchères

À chaque escale, le capitaine peut vendre son butin au marché du port.

### Calculer la valeur du butin

````{admonition} Exercice 4.1 — Valeur totale
:class: note
Crée une fonction `calculer_valeur(valeur_unitaire, quantite)` qui retourne la valeur totale du butin.

```{codeplay}
:file: marche_valeur.py
def calculer_valeur(valeur_unitaire, quantite):
    ...

print(calculer_valeur(30, 8))
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: marche_valeur.py
def calculer_valeur(valeur_unitaire, quantite):
    return valeur_unitaire * quantite

print(calculer_valeur(30, 8))
```
````
`````

### Appliquer la taxe portuaire

````{admonition} Exercice 4.2 — Taxe du port
:class: note
Crée une fonction `appliquer_taxe_portuaire(total)` qui applique une taxe de `20 %` au-dessus de `200`, une taxe de `10 %` entre `80` et `200` inclus, ou aucune taxe en dessous de `80`. Elle retourne le taux et le total final.

```{codeplay}
:file: taxe_portuaire.py
def appliquer_taxe_portuaire(total):
    ...

taux, total_final = appliquer_taxe_portuaire(240)
print(taux, total_final)
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: taxe_portuaire.py
def appliquer_taxe_portuaire(total):
    if total > 200:
        taux = 20
        total_final = total * 0.80
    elif total >= 80:
        taux = 10
        total_final = total * 0.90
    else:
        taux = 0
        total_final = total

    return taux, total_final

taux, total_final = appliquer_taxe_portuaire(240)
print(taux, total_final)
```
````
`````

### Programme complet du marché

````{admonition} Exercice 4.3 — Vente au marché
:class: note
Dans le programme principal, demande la valeur unitaire et la quantité vendue, utilise les deux fonctions, puis affiche le total avant taxe, la taxe appliquée et le total perçu.

```{codeplay}
:file: marche_au_tresor.py
def calculer_valeur(valeur_unitaire, quantite):
    ...

def appliquer_taxe_portuaire(total):
    ...

valeur_unitaire = float(input("Valeur unitaire d'un objet : "))
quantite = int(input("Quantité vendue : "))

total = calculer_valeur(valeur_unitaire, quantite)
taux, total_percu = appliquer_taxe_portuaire(total)

print(f"Total avant taxe : {total} pièces d'or")
print(f"Taxe appliquée : {taux}%")
print(f"Total perçu : {total_percu} pièces d'or")
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: marche_au_tresor.py
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

valeur_unitaire = float(input("Valeur unitaire d'un objet : "))
quantite = int(input("Quantité vendue : "))

total = calculer_valeur(valeur_unitaire, quantite)
taux, total_percu = appliquer_taxe_portuaire(total)

print(f"Total avant taxe : {total} pièces d'or")
print(f"Taxe appliquée : {taux}%")
print(f"Total perçu : {total_percu} pièces d'or")
```
`````

**Exemple d'exécution attendu :**

```text
Valeur unitaire d'un objet : 30
Quantité vendue : 8
Total avant taxe : 240.0 pièces d'or
Taxe appliquée : 20%
Total perçu : 192.0 pièces d'or
```
