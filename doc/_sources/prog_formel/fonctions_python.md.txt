(prog_formel.fonctions_python)=

# 5. Les fonctions en Python

Une **fonction** est un bloc de code réutilisable auquel on donne un nom. On écrit son code une fois, puis on l'appelle autant de fois que nécessaire.

Python distingue notamment :

- les **fonctions prédéfinies**, déjà intégrées au langage, comme `print()`, `input()` ou `len()` ;
- les **fonctions définies par l'utilisatrice ou l'utilisateur**, créées avec le mot-clé `def`.

## Les fonctions prédéfinies

### Afficher avec `print()`

La fonction `print()` permet d'afficher des valeurs dans la console.

```{codeplay}
nom = "Julie"
age = 15
print("Prénom :", nom, "- Âge :", age)
```

Une f-string permet d'intégrer directement les variables dans une chaîne de caractères :

```{codeplay}
nom = "Julie"
age = 15
print(f"Prénom : {nom} - Âge : {age}")
```

### Demander une saisie avec `input()`

La fonction `input()` affiche un message, met le programme en pause et attend une réponse.

⚠️ `input()` retourne toujours une chaîne de caractères, même lorsque la personne saisit un nombre.

```{codeplay}
nom = input("Quel est ton prénom ? ")
age = int(input("Quel âge as-tu ? "))
print("Bonjour", nom, "! Tu auras bientôt", age + 1, "ans")
```

Pour effectuer un calcul, il faut donc convertir la saisie avec `int()` pour obtenir un entier ou `float()` pour obtenir un nombre décimal.

````{admonition} À retenir
:class: important
- `input()` retourne toujours une valeur de type `str`.
- `int()` convertit une chaîne en nombre entier.
- `float()` convertit une chaîne en nombre décimal.
- La chaîne peut être appelée une **saisie**.
````

````{admonition} Erreur fréquente
:class: warning
```python
age = input("Âge ? ")
print(age + 1)  # Erreur : str + int
```

```python
age = int(input("Âge ? "))
print(age + 1)  # Correct
```
````

### Fonctions prédéfinies utiles

| Fonction | Rôle | Exemple | Résultat |
|---|---|---|---|
| `len()` | longueur d'un texte ou d'une liste | `len("Julie")` | `5` |
| `type()` | type d'une valeur | `type(3.5)` | `float` |
| `int()`, `float()`, `str()` | conversion de type | `int("12")` | `12` |
| `abs()` | valeur absolue | `abs(-7)` | `7` |
| `round()` | arrondi | `round(3.14159, 2)` | `3.14` |
| `min()`, `max()` | plus petite ou plus grande valeur | `max(4, 9, 1)` | `9` |
| `sum()` | somme d'une liste | `sum([1, 2, 3])` | `6` |
| `range()` | suite de nombres | `list(range(3))` | `[0, 1, 2]` |

````{admonition} Exercice 1
:class: note
Écris un programme qui demande à une personne son prénom et son âge, puis affiche une phrase contenant ces deux informations.

```{codeplay}
:file: fonctions_ex_1.py
prenom = input(...)
age = int(input(...))
print(...)
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: fonctions_ex_1.py
prenom = input("Quel est ton prénom ? ")
age = int(input("Quel âge as-tu ? "))
print(f"Tu es {prenom} et tu as {age} ans.")
```
````
`````

## Définir sa propre fonction

Une fonction définie par la personne qui programme permet d'éviter de répéter le même code.

```python
def nom_fonction(parametre1, parametre2):
    # instructions exécutées par la fonction
    ...

nom_fonction(arg1, arg2)
```

Les éléments importants sont :

1. le mot-clé `def` ;
2. le nom de la fonction suivi de parenthèses ;
3. les paramètres, qui représentent les entrées de la fonction ;
4. les deux-points `:` ;
5. les instructions indentées de quatre espaces ;
6. éventuellement le mot-clé `return`.

### Exemple sans paramètre

```{codeplay}
def dire_bonjour():
    print("Bonjour !")

dire_bonjour()
dire_bonjour()
```

Une fonction peut être appelée plusieurs fois. Tant qu'elle n'est pas appelée, son code n'est pas exécuté.

### Exemple avec un paramètre

```{codeplay}
def saluer(prenom):
    print(f"Bonjour {prenom} !")

saluer("Julie")
saluer("Ruben")
```

Les paramètres sont les noms utilisés dans la définition de la fonction. Lors de l'appel, les valeurs données sont appelées **arguments**.

````{admonition} Exercice 2
:class: note
Écris une fonction `saluer(prenom, nom)` qui affiche : `Bonjour Prénom Nom !` puis appelle-la avec ton prénom et ton nom.

```{codeplay}
:file: fonctions_ex_2.py
def saluer(prenom, nom):
    ...

# Appelle ici la fonction
...
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: fonctions_ex_2.py
def saluer(prenom, nom):
    print(f"Bonjour {prenom} {nom} !")

saluer("Julie", "Martin")
```
````
`````

## Renvoyer une valeur avec `return`

Une fonction peut renvoyer un résultat grâce à `return`. Ce résultat peut ensuite être stocké dans une variable ou utilisé dans un calcul.

```{codeplay}
def calculer_moyenne(note1, note2):
    moyenne = (note1 + note2) / 2
    return moyenne

resultat = calculer_moyenne(12, 16)
print(resultat)
```

Dès que Python rencontre `return`, la fonction s'arrête et retourne immédiatement la valeur indiquée.

```{codeplay}
def est_majeur(age):
    if age >= 18:
        return True
    return False

print(est_majeur(20))
print(est_majeur(15))
```

### `print()` ou `return` ?

| | `print()` | `return` |
|---|---|---|
| Rôle | affiche à l'écran | renvoie une valeur au programme |
| Réutilisable dans un calcul | non | oui |
| Sans valeur | il affiche une ligne | la fonction renvoie `None` |

```{codeplay}
def double_print(n):
    print(n * 2)

def double_return(n):
    return n * 2

x = double_print(4)
y = double_return(4)
print("x vaut", x)
print("y vaut", y)
```

### Renvoyer plusieurs valeurs

Python peut renvoyer plusieurs valeurs dans un tuple. On peut les « déballer » directement dans plusieurs variables.

```{codeplay}
def min_max(nombres):
    return min(nombres), max(nombres)

petit, grand = min_max([4, 9, 1, 7])
print(petit, grand)
```

````{admonition} Exercice 3
:class: note
Écris une fonction `calculer_carre(nombre)` qui retourne le carré du nombre reçu. Utilise-la pour afficher le carré de 7.

```{codeplay}
:file: fonctions_ex_3.py
def calculer_carre(nombre):
    ...

print(calculer_carre(7))
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: fonctions_ex_3.py
def calculer_carre(nombre):
    return nombre ** 2

print(calculer_carre(7))
```
````
`````

## Paramètres par défaut

Un paramètre peut avoir une valeur par défaut. Si aucun argument n'est fourni pour ce paramètre, sa valeur par défaut est utilisée.

```{codeplay}
def puissance(base, exposant=2):
    return base ** exposant

print(puissance(3))
print(puissance(3, 3))
```

Les paramètres avec valeur par défaut doivent toujours être placés après les paramètres obligatoires :

```python
def puissance(base, exposant=2):
    return base ** exposant
```

## Arguments nommés

Lors d'un appel, on peut nommer les arguments. Leur ordre n'a alors plus d'importance.

```{codeplay}
def presenter(prenom, age):
    print(f"{prenom} a {age} ans.")

presenter(age=15, prenom="Julie")
```

````{admonition} Exercice 4
:class: note
Écris une fonction `decrire(prenom, age=15)` qui affiche : `prenom a age ans.` puis appelle-la une fois avec un prénom seulement et une fois avec un prénom et un âge différents.

```{codeplay}
:file: fonctions_ex_4.py
def decrire(prenom, age=15):
    ...

decrire(...)
decrire(...)
```
````

`````{admonition} Solution
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down
```{codeplay}
:file: fonctions_ex_4.py
def decrire(prenom, age=15):
    print(f"{prenom} a {age} ans.")

decrire("Julie")
decrire(prenom="Ruben", age=17)
```
````
`````
