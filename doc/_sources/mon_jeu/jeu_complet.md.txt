(mon_jeu.jeu_complet)=

# 3. Jeu complet

Dans ce chapitre, tu vas assembler toutes les parties de ton jeu pour obtenir un programme complet.

## Assemblage du jeu sans IA

Avant de terminer, vérifie que ton programme pour ce jeu contient :




- [ ] un titre;
- [ ] les fonctions utiles;
- [ ] une boucle pour permettre au joueur ou à la joueuse de rejouer.
- [ ] une condition de victoire ou de défaite ;
- [ ] un message affiché à la fin.

````{admonition} Exercice 1.1 — Assemblage 
:class: note
Grace aux parties 1 et 2 écris et teste ton jeu
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




## Création du jeu en utilisant l'IA

Essaye de donner toules les consignes du jeu (partie 1 et 2) à une IA de ton choix.
demande une version graphique du jeu si tu veux.

Voila un exemple de résultat obtenu avec Claude IA 
`````{admonition} Solution IA
````{dropdown} <span style="color:grey">Cliquer ici pour voir la réponse</span>
:animate: fade-in-slide-down

```{codeplay}
:file: chasse_au_tresor.py
"""
LA CHASSE AU TRÉSOR — TP 1 + TP 2 
Jeu graphique réalisé avec tkinter (aucune installation nécessaire).

Lancer :  python chasse_au_tresor.py

Organisation du fichier
  1) Les fonctions du TP 1 (calcul_or, Affichage, reparer_navire, ...)
  2) Les fonctions « logique de jeu » du TP 2 (traversee, evaluer_essai, ...)
     -> elles reçoivent l'état du jeu et retournent le nouvel état
  3) La partie graphique (classe Jeu) qui affiche tout cela
"""

import math
import random
import tkinter as tk


# =====================================================================
#  1) FONCTIONS DU TP 1
# =====================================================================

def calcul_or(experience):
    """Or de départ du capitaine : 100 + (experience * 20)."""
    quantite_or = 100 + (experience * 20)
    return quantite_or


def Affichage(nom, experience, pieces_or, carte):
    """Construit (et affiche dans la console) la fiche du capitaine."""
    etoiles = "*" * 46
    lignes = [
        etoiles,
        f"** {'Capitaine :':<22}{nom}",
        f"** {'Expérience :':<22}{experience}",
        f"** {'Quantité d’or :':<22}{pieces_or}",
        f"** {'une carte au trésor :':<22}{carte}",
        etoiles,
    ]
    texte = "\n".join(lignes)
    print(texte)
    return texte


def etat_coque(solidite):
    """Exercice 2 (TP1) : état de la coque."""
    if solidite <= 0:
        return "Le navire coule !"
    return "Le navire tient bon."


def annoncer_titre(degats):
    """Titre donné selon les dégâts subis (0 à 100)."""
    if degats < 15:
        return "Traversée tranquille"
    elif degats < 40:
        return "Belle frayeur"
    elif degats < 80:
        return "Tempête redoutable"
    else:
        return "NAUFRAGE ÉVITÉ DE JUSTESSE !"


def afficher_carte(possede_carte_tresor):
    """Message selon que le capitaine possède une carte ou non."""
    if possede_carte_tresor:
        message = "Cap sur le trésor !"
    else:
        message = "Il faut d'abord en trouver une..."
    print(message)
    return message


def reparer_navire(solidite_actuelle, reparation):
    return solidite_actuelle + reparation


def est_naufrage(solidite):
    return solidite <= 0


def grade_capitaine(experience):
    if experience < 2:
        return "Mousse"
    elif experience <= 6:
        return "Matelot"
    elif experience <= 15:
        return "Capitaine"
    else:
        return "Seigneur des mers"


def calculer_valeur(valeur_unitaire, quantite):
    return valeur_unitaire * quantite


def appliquer_taxe_portuaire(total):
    """Retourne (taux de la taxe en %, total final après taxe)."""
    if total > 200:
        taux = 20
    elif total >= 80:
        taux = 10
    else:
        taux = 0
    total_final = total * (1 - taux / 100)
    return taux, total_final


# =====================================================================
#  2) LOGIQUE DU TP 2 (état reçu -> état retourné)
# =====================================================================

NB_JOURS = 10
MAX_TENTATIVES = 5
NB_ILES = 20


def traversee(solidite):
    """Exercice 2 : 10 jours de tempête.
    Reçoit la solidité, retourne (solidité finale, jour du naufrage ou None,
    journal des jours) — le journal sert à l'animation graphique."""
    journal = []
    jour_naufrage = None
    for jour in range(1, NB_JOURS + 1):
        degats = random.randint(0, 10)
        solidite = max(0, solidite - degats)
        evenement = {
            "jour": jour,
            "degats": degats,
            "solidite_tempete": solidite,
            "titre": annoncer_titre(degats),
            "coque": etat_coque(solidite),
            "repare": False,
            "solidite": solidite,
            "naufrage": False,
        }
        if est_naufrage(solidite):
            evenement["naufrage"] = True
            journal.append(evenement)
            jour_naufrage = jour
            break                                   # on arrête la traversée
        if jour % 3 == 0:                           # tous les 3 jours
            solidite = min(100, reparer_navire(solidite, 15))
            evenement["repare"] = True
            evenement["solidite"] = solidite
        journal.append(evenement)
    return solidite, jour_naufrage, journal


def evaluer_essai(saisie, ile_tresor):
    """Exercice 3 : analyse une saisie.
    Retourne ('invalide'|'gagne'|'plus haut'|'plus bas', nombre)
    Une saisie invalide ne consomme PAS de tentative (rôle du « continue »)."""
    try:
        n = int(saisie.strip())
    except ValueError:
        return "invalide", None
    if n < 1 or n > NB_ILES:
        return "invalide", None
    if n == ile_tresor:
        return "gagne", n
    if n < ile_tresor:
        return "plus haut", n
    return "plus bas", n


def gain_tresor(tentatives_restantes):
    """50 pièces par tentative restante (la tentative gagnante est comptée)."""
    return 50 * tentatives_restantes


def lire_valeur_unitaire(texte):
    """Retourne un float > 0 ou None si invalide."""
    try:
        v = float(texte.strip().replace(",", "."))
    except ValueError:
        return None
    return v if v > 0 else None


def lire_quantite(texte):
    """Retourne un entier > 0 ou None si invalide."""
    try:
        q = int(texte.strip())
    except ValueError:
        return None
    return q if q > 0 else None


# =====================================================================
#  3) PARTIE GRAPHIQUE
# =====================================================================

W, H = 920, 300           # taille de la scène
HOR = 140                 # ligne d'horizon
SHIP_Y = 192              # ligne de flottaison du navire
PARCH = "#f3e2b3"
BRUN = "#5b3a1e"
OR = "#e9b82a"
ROUGE = "#a01818"

F_TITRE = ("Georgia", 19, "bold")
F_TXT = ("Georgia", 12)
F_GRAS = ("Georgia", 12, "bold")
F_BTN = ("Georgia", 13, "bold")
F_MONO = ("Courier New", 11, "bold")

CIELS = {
    "port": ("#3d9ad8", "#cdeeff"),
    "tempete": ("#1b1f2b", "#47505f"),
    "ile": ("#35a0e0", "#d6f1ff"),
    "marche": ("#e0703a", "#ffd9a0"),
    "naufrage": ("#4d5762", "#aab5be"),
}
MERS = {
    "port": ("#2b86c5", "#1f78b4", "#196a9f", "#145a88"),
    "tempete": ("#2a4a63", "#1f3b52", "#182f42", "#10222f"),
    "ile": ("#35a7c9", "#2a95b8", "#2185a8", "#197595"),
    "marche": ("#3b6f9e", "#315f8a", "#285077", "#204266"),
    "naufrage": ("#3d5a70", "#33505f", "#2a4552", "#213843"),
}


def melange(c1, c2, f):
    a = [int(c1[i:i + 2], 16) for i in (1, 3, 5)]
    b = [int(c2[i:i + 2], 16) for i in (1, 3, 5)]
    return "#%02x%02x%02x" % tuple(int(a[i] + (b[i] - a[i]) * f) for i in range(3))


class Jeu:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("La Chasse au trésor")
        self.root.resizable(False, False)
        self.root.configure(bg=BRUN)
        self.cv = tk.Canvas(self.root, width=W, height=H, highlightthickness=0)
        self.cv.pack()
        self.cadre = tk.Frame(self.root, bg=PARCH, width=W, height=390)
        self.cadre.pack(fill="both", expand=True)
        self.cadre.pack_propagate(False)

        # --- état du jeu (voir exercice 5) ---
        self.etat = None
        # --- animation ---
        self.actif = True
        self.t = 0
        self.scene = "port"
        self.ship_x = self.ship_cible = 250.0
        self.sink = 0.0
        self.eclair = 0
        self.eclair_x = 400
        self.barre = self.barre_cible = 100.0
        self.coffre = None                     # None / "ferme" / "ouvert"
        self.particules = []
        self.nuages = [[random.randint(0, W), random.randint(20, 100),
                        random.uniform(0.7, 1.4), random.uniform(0.15, 0.5)]
                       for _ in range(5)]
        self.gouttes = [[random.randint(0, W), random.randint(0, H)] for _ in range(90)]
        self.menu_actif = False

        self.root.bind("<Key>", self.touche)
        self.root.protocol("WM_DELETE_WINDOW", self.fermer)
        self.animer()
        self.ecran_creation()

    def lancer(self):
        self.root.mainloop()

    def fermer(self):
        self.actif = False
        self.root.destroy()

    # ------------------------------------------------------------------
    #  Dessin de la scène
    # ------------------------------------------------------------------
    def animer(self):
        if not self.actif:
            return
        self.t += 1
        self.ship_x += (self.ship_cible - self.ship_x) * 0.03
        self.barre += (self.barre_cible - self.barre) * 0.08
        if self.scene == "tempete":
            if self.eclair == 0 and random.random() < 0.008:
                self.declencher_eclair()
        if self.eclair > 0:
            self.eclair -= 1
        if self.scene == "naufrage":
            self.sink = min(1.0, self.sink + 0.006)
        for n in self.nuages:
            n[0] += n[3] * (3 if self.scene == "tempete" else 1)
            if n[0] > W + 80:
                n[0] = -80
        for g in self.gouttes:
            g[0] -= 4
            g[1] += 16
            if g[1] > H:
                g[0], g[1] = random.randint(0, W + 60), -10
        for p in self.particules:
            p[0] += p[2]
            p[1] += p[3]
            p[3] += 0.5
        self.particules = [p for p in self.particules if p[1] < H + 10]
        self.dessiner()
        self.root.after(33, self.animer)

    def declencher_eclair(self):
        self.eclair = 8
        self.eclair_x = random.randint(100, 800)

    def dessiner(self):
        c = self.cv
        c.delete("all")
        sc = self.scene
        m = 2.4 if sc == "tempete" else 1.0

        # ciel
        haut, bas = CIELS[sc]
        if self.eclair > 0 and self.eclair % 2 == 0:
            haut, bas = "#dfe6ff", "#ffffff"
        bandes = 20
        for i in range(bandes):
            col = melange(haut, bas, i / (bandes - 1))
            c.create_rectangle(0, i * HOR / bandes, W, (i + 1) * HOR / bandes + 1,
                               fill=col, width=0)
        # soleil
        if sc in ("port", "ile", "marche"):
            sy = 120 if sc == "marche" else 62
            c.create_oval(790 - 52, sy - 52, 790 + 52, sy + 52,
                          fill=melange(bas, "#ffffff", 0.4), width=0)
            c.create_oval(790 - 32, sy - 32, 790 + 32, sy + 32, fill="#ffe36b", width=0)
        # nuages
        coul_nuage = "#5a6473" if sc == "tempete" else ("#9aa5af" if sc == "naufrage" else "#ffffff")
        for x, y, s, _v in self.nuages:
            for dx, dy, rx, ry in ((0, 0, 34, 13), (-22, 6, 24, 10), (24, 5, 26, 11), (6, -9, 22, 12)):
                c.create_oval(x + (dx - rx) * s, y + (dy - ry) * s,
                              x + (dx + rx) * s, y + (dy + ry) * s,
                              fill=coul_nuage, width=0)

        mer = MERS[sc]
        self.vague(HOR, 2, 0.5, mer[0])
        if sc in ("port", "marche"):
            self.ile(800, HOR + 2, 0.5)
        self.vague(165, 4 * m, 1.0, mer[1], dec=1)
        if sc == "ile":
            self.ile(560, 218, 2.0)
            self.dessiner_tresor(690, 218)
        self.navire()
        if sc == "marche":
            self.ponton()
        self.vague(214, 5 * m, 1.3, mer[2], dec=2)
        self.vague(254, 7 * m, 1.6, mer[3], dec=4)

        # bulles après naufrage
        if sc == "naufrage" and self.sink >= 1:
            for i in range(6):
                bx = self.ship_x + math.sin(self.t * 0.05 + i) * 18 + i * 3
                by = 250 - (self.t * 1.5 + i * 25) % 90
                c.create_oval(bx - 4, by - 4, bx + 4, by + 4, outline="#cfe8f5")

        # pluie + éclair
        if sc == "tempete":
            for gx, gy in self.gouttes:
                c.create_line(gx, gy, gx - 4, gy + 14, fill="#9fb6c9")
            if self.eclair > 0:
                x = self.eclair_x
                c.create_polygon(x, 0, x - 16, 52, x + 4, 58, x - 26, 135, x + 16, 90,
                                 x - 2, 84, x + 12, 30, fill="#fffbd0", outline="#ffe97a")

        # pièces d'or
        for px, py, _vx, _vy in self.particules:
            c.create_oval(px - 6, py - 4, px + 6, py + 4, fill=OR, outline="#8a6510")

        self.dessiner_hud()

    def vague(self, base, amp, vit, couleur, dec=0):
        pts = []
        for x in range(0, W + 20, 20):
            y = base + amp * math.sin(x * 0.015 + self.t * vit * 0.05 + dec)
            pts += [x, y]
        pts += [W, H, 0, H]
        self.cv.create_polygon(pts, fill=couleur, outline="")

    def poly(self, pts, x, y, ang, **kw):
        ca, sa = math.cos(ang), math.sin(ang)
        out = []
        for px, py in pts:
            out += [x + px * ca - py * sa, y + px * sa + py * ca]
        self.cv.create_polygon(out, **kw)

    def navire(self):
        if self.scene == "naufrage" and self.sink >= 1:
            return
        storm = self.scene == "tempete"
        ang = math.sin(self.t * 0.05) * (0.10 if storm else 0.035)
        bob = math.sin(self.t * 0.07) * (6 if storm else 2.5)
        x, y = self.ship_x, SHIP_Y + bob
        if self.scene == "naufrage":
            y += self.sink * 90
            ang += self.sink * 0.7
        p = self.poly
        p([(-4, -100), (4, -100), (4, -18), (-4, -18)], x, y, ang, fill="#4a2c14", outline="")
        p([(-4, -92), (-54, -70), (-50, -34), (-4, -40)], x, y, ang, fill="#f5ecd0", outline="#b9ab80")
        p([(4, -92), (54, -70), (50, -34), (4, -40)], x, y, ang, fill="#f5ecd0", outline="#b9ab80")
        flap = math.sin(self.t * 0.3) * 4
        p([(4, -100), (34, -93 + flap), (4, -84)], x, y, ang, fill="#161616", outline="")
        p([(12, -94), (16, -97), (20, -94), (16, -91)], x, y, ang, fill="#ffffff", outline="")
        p([(-72, -14), (72, -14), (52, 24), (-52, 24)], x, y, ang, fill="#6d4423", outline="#3a2210")
        p([(-72, -14), (72, -14), (72, -21), (-72, -21)], x, y, ang, fill="#4a2c14", outline="")
        p([(-67, -4), (67, -4), (65, 1), (-65, 1)], x, y, ang, fill="#d9a520", outline="")
        for hx in (-32, 0, 32):
            p([(hx - 5, 6), (hx + 5, 6), (hx + 5, 15), (hx - 5, 15)], x, y, ang,
              fill="#ffe27a", outline="#3a2210")
        p([(72, -16), (100, -30), (100, -27), (72, -10)], x, y, ang, fill="#4a2c14", outline="")

    def palmier(self, x, y, h, s):
        c = self.cv
        c.create_line(x, y, x + 8 * s, y - h * 0.5, x + 3 * s, y - h,
                      smooth=True, width=max(3, int(4 * s)), fill="#7b5a2f")
        tx, ty = x + 3 * s, y - h
        for ang in (-165, -125, -90, -55, -15):
            a = math.radians(ang)
            c.create_line(tx, ty,
                          tx + math.cos(a) * h * 0.30, ty + math.sin(a) * h * 0.25 - 4,
                          tx + math.cos(a) * h * 0.62, ty + math.sin(a) * h * 0.12 + h * 0.22,
                          smooth=True, width=max(3, int(4 * s)), fill="#2e7d32")

    def ile(self, x, y, s):
        c = self.cv
        c.create_oval(x - 110 * s, y - 22 * s, x + 110 * s, y + 22 * s, fill="#e8cf8f", outline="")
        c.create_oval(x - 60 * s, y - 40 * s, x + 60 * s, y - 4 * s, fill="#4c8f3a", outline="")
        self.palmier(x - 30 * s, y - 14 * s, 38 * s, s)
        self.palmier(x + 30 * s, y - 10 * s, 30 * s, s)

    def dessiner_tresor(self, cx, cy):
        c = self.cv
        if self.coffre is None:
            c.create_line(cx - 12, cy - 22, cx + 12, cy - 2, fill=ROUGE, width=5)
            c.create_line(cx + 12, cy - 22, cx - 12, cy - 2, fill=ROUGE, width=5)
            return
        c.create_rectangle(cx - 26, cy - 22, cx + 26, cy, fill="#8b5a2b", outline="#3a2210", width=2)
        c.create_rectangle(cx - 26, cy - 14, cx + 26, cy - 9, fill=OR, outline="")
        if self.coffre == "ferme":
            c.create_arc(cx - 26, cy - 46, cx + 26, cy - 8, start=0, extent=180,
                         fill="#a06a35", outline="#3a2210", width=2)
        else:
            c.create_polygon(cx - 26, cy - 22, cx + 26, cy - 22, cx + 20, cy - 60, cx - 20, cy - 60,
                             fill="#6d4423", outline="#3a2210", width=2)
            for i in range(7):
                ox = cx - 20 + i * 7
                oy = cy - 26 - (i % 3) * 4
                c.create_oval(ox - 7, oy - 4, ox + 7, oy + 4, fill=OR, outline="#8a6510")
        c.create_rectangle(cx - 4, cy - 17, cx + 4, cy - 6, fill="#d9a520", outline="#3a2210")

    def ponton(self):
        c = self.cv
        for px in (500, 600, 700, 800, 890):
            c.create_rectangle(px - 6, 200, px + 6, 300, fill="#3a2210", outline="")
        c.create_rectangle(470, 188, W, 204, fill="#9a6b3a", outline="#3a2210", width=2)
        for px in range(480, W, 36):
            c.create_line(px, 188, px, 204, fill="#6d4423")
        # caisses et tonneau
        c.create_rectangle(520, 150, 570, 188, fill="#b88747", outline="#3a2210", width=2)
        c.create_line(520, 150, 570, 188, fill="#3a2210")
        c.create_line(570, 150, 520, 188, fill="#3a2210")
        c.create_rectangle(575, 164, 612, 188, fill="#c9985a", outline="#3a2210", width=2)
        c.create_oval(640, 146, 684, 160, fill="#8b5a2b", outline="#3a2210")
        c.create_rectangle(640, 153, 684, 188, fill="#8b5a2b", outline="")
        c.create_oval(640, 181, 684, 195, fill="#8b5a2b", outline="#3a2210")
        c.create_line(640, 166, 684, 166, fill="#3a2210", width=2)

    def dessiner_hud(self):
        e = self.etat
        if not e:
            return
        c = self.cv
        c.create_rectangle(10, 10, 300, 94, fill=PARCH, outline=BRUN, width=3)
        nom = e["nom_capitaine"]
        if len(nom) > 16:
            nom = nom[:15] + "…"
        c.create_text(20, 26, anchor="w", font=F_GRAS, fill=BRUN,
                      text=f"{nom} — {grade_capitaine(e['experience'])}")
        c.create_oval(20, 42, 36, 56, fill=OR, outline="#8a6510")
        c.create_text(44, 49, anchor="w", font=F_TXT, fill=BRUN,
                      text=f"{e['or_en_poche']:.1f} pièces d'or")
        c.create_text(20, 76, anchor="w", font=F_TXT, fill=BRUN, text="Coque")
        c.create_rectangle(80, 67, 290, 85, fill="#d8c79a", outline=BRUN)
        val = max(0.0, min(100.0, self.barre))
        col = melange("#c62828", "#2e9d3a", val / 100)
        if val > 0:
            c.create_rectangle(81, 68, 81 + 208 * val / 100, 84, fill=col, width=0)
        c.create_text(185, 76, font=("Georgia", 10, "bold"), fill="#1b1b1b", text=f"{val:.0f} / 100")

    # ------------------------------------------------------------------
    #  Outils d'interface
    # ------------------------------------------------------------------
    def nouveau_panneau(self, titre):
        for w in self.cadre.winfo_children():
            w.destroy()
        self.menu_actif = False
        tk.Label(self.cadre, text=titre, font=F_TITRE, bg=PARCH, fg=BRUN).pack(pady=(14, 6))
        p = tk.Frame(self.cadre, bg=PARCH)
        p.pack(fill="both", expand=True)
        return p

    def bouton(self, parent, texte, commande, largeur=28):
        b = tk.Label(parent, text=texte, bg=BRUN, fg=OR, font=F_BTN, width=largeur,
                     pady=5, relief="raised", bd=3, cursor="hand2")
        b.bind("<Button-1>", lambda e: commande())
        b.bind("<Enter>", lambda e: b.config(bg="#7a5230"))
        b.bind("<Leave>", lambda e: b.config(bg=BRUN))
        return b

    def zone_log(self, parent, hauteur=9):
        z = tk.Text(parent, height=hauteur, width=84, bg="#fff8e1", fg="#3b2a14",
                    font=F_MONO, state="disabled", relief="sunken", bd=2, wrap="word")
        z.pack(pady=6)
        return z

    def ecrire(self, zone, texte):
        zone.config(state="normal")
        zone.insert("end", texte + "\n")
        zone.see("end")
        zone.config(state="disabled")

    def champ(self, parent, libelle, largeur=26):
        tk.Label(parent, text=libelle, font=F_TXT, bg=PARCH, fg=BRUN).pack(pady=(4, 0))
        e = tk.Entry(parent, font=F_TXT, width=largeur, justify="center", bd=3)
        e.pack()
        return e

    def synchroniser_barre(self):
        self.barre_cible = self.etat["solidite"]

    # ------------------------------------------------------------------
    #  Exercice 1 : création sécurisée du capitaine
    # ------------------------------------------------------------------
    def ecran_creation(self):
        self.etat = None
        self.scene = "port"
        self.coffre = None
        self.sink = 0.0
        self.ship_cible = 250.0
        p = self.nouveau_panneau("Création du capitaine")
        self.e_nom = self.champ(p, "Nom de ton capitaine :")
        self.e_exp = self.champ(p, "Années d'expérience (entier de 0 à 50) :")
        self.err = tk.Label(p, text="", font=F_GRAS, bg=PARCH, fg=ROUGE)
        self.err.pack(pady=6)
        self.bouton(p, "Hisser les voiles !", self.valider_capitaine).pack()
        self.e_nom.focus_set()
        self.e_nom.bind("<Return>", lambda e: self.e_exp.focus_set())
        self.e_exp.bind("<Return>", lambda e: self.valider_capitaine())

    def valider_capitaine(self):
        nom_capitaine = self.e_nom.get().strip()
        if nom_capitaine == "":                                   # while nom vide
            self.err.config(text="Erreur : le nom ne peut pas être vide !")
            self.e_nom.focus_set()
            return
        try:
            experience = int(self.e_exp.get().strip())
        except ValueError:
            self.err.config(text="Erreur : l'expérience doit être un nombre entier !")
            self.e_exp.focus_set()
            return
        if experience < 0 or experience > 50:
            self.err.config(text="Erreur : l'expérience doit être entre 0 et 50 !")
            self.e_exp.focus_set()
            return
        self.etat = {
            "nom_capitaine": nom_capitaine,
            "experience": experience,
            "or_en_poche": float(calcul_or(experience)),
            "possede_carte_tresor": False,
            "solidite": 100,
        }
        self.barre = self.barre_cible = 100
        self.voir_fiche("Bienvenue à bord !", "Lever l'ancre", self.ecran_menu)

    # ------------------------------------------------------------------
    #  Menu principal (exercice 5)
    # ------------------------------------------------------------------
    def ecran_menu(self):
        self.scene = "port"
        self.ship_cible = 250.0
        self.coffre = None
        p = self.nouveau_panneau("===== LA CHASSE AU TRÉSOR =====")
        options = [
            ("Voir la fiche du capitaine", self.voir_fiche),
            ("Prendre la mer", self.prendre_la_mer),
            ("Chercher le trésor", self.chercher_tresor),
            ("Aller au marché", self.aller_au_marche),
            ("Quitter", self.au_revoir),
        ]
        for i, (texte, cmd) in enumerate(options, 1):
            self.bouton(p, f"{i}. {texte}", cmd, largeur=32).pack(pady=3)
        self.msg_menu = tk.Label(p, text="(clique, ou tape un chiffre de 1 à 5)",
                                 font=("Georgia", 10, "italic"), bg=PARCH, fg=BRUN)
        self.msg_menu.pack(pady=4)
        self.menu_actif = True

    def touche(self, event):
        if not self.menu_actif:
            return
        ch = event.char
        if ch in ("1", "2", "3", "4", "5"):
            (self.voir_fiche, self.prendre_la_mer, self.chercher_tresor,
             self.aller_au_marche, self.au_revoir)[int(ch) - 1]()
        elif ch and ch.isprintable() and not ch.isspace():
            self.msg_menu.config(text="Choix invalide ! Tape un chiffre de 1 à 5.", fg=ROUGE)

    # ------------------------------------------------------------------
    #  Choix 1 : fiche du capitaine
    # ------------------------------------------------------------------
    def voir_fiche(self, titre="Fiche du capitaine", texte_bouton="Retour au menu", suite=None):
        e = self.etat
        p = self.nouveau_panneau(titre)
        fiche = Affichage(e["nom_capitaine"], e["experience"], e["or_en_poche"],
                          e["possede_carte_tresor"])
        tk.Label(p, text=fiche, font=F_MONO, bg=PARCH, fg=BRUN, justify="left").pack()
        tk.Label(p, text=f"Grade : {grade_capitaine(e['experience'])}     "
                         f"Solidité du navire : {e['solidite']} / 100",
                 font=F_GRAS, bg=PARCH, fg=BRUN).pack(pady=8)
        self.bouton(p, texte_bouton, suite or self.ecran_menu).pack(pady=4)

    # ------------------------------------------------------------------
    #  Choix 2 / Exercice 2 : la traversée
    # ------------------------------------------------------------------
    def prendre_la_mer(self):
        p = self.nouveau_panneau("La traversée : 10 jours en mer")
        self.log = self.zone_log(p, 9)
        self.zone_bas = tk.Frame(p, bg=PARCH)
        self.zone_bas.pack()
        self.scene = "tempete"
        self.ship_cible = 130.0
        solidite, jour_naufrage, journal = traversee(self.etat["solidite"])
        self.res_mer = (solidite, jour_naufrage)
        self.journal = journal
        self.idx = 0
        self.ecrire(self.log, "Le navire quitte le port... la mer s'agite !")
        self.root.after(1000, self.lire_evenement)

    def lire_evenement(self):
        if not self.actif:
            return
        if self.idx >= len(self.journal):
            self.arrivee_terre()
            return
        e = self.journal[self.idx]
        self.idx += 1
        self.ecrire(self.log, f"Jour {e['jour']:>2} | dégâts : {e['degats']:>2} | "
                              f"solidité : {e['solidite_tempete']:>3} | {e['titre']}")
        self.barre_cible = e["solidite_tempete"]
        self.ship_cible = 130.0 + e["jour"] * 62
        if e["degats"] >= 5:
            self.declencher_eclair()
        if e["naufrage"]:
            self.root.after(900, self.naufrage)
        elif e["repare"]:
            self.root.after(800, lambda: self.reparation(e))
        else:
            self.root.after(900, self.lire_evenement)

    def reparation(self, e):
        self.ecrire(self.log, f"        >>> Réparations (+15) : solidité {e['solidite']}")
        self.barre_cible = e["solidite"]
        self.root.after(800, self.lire_evenement)

    def naufrage(self):
        solidite, jour = self.res_mer
        self.etat["solidite"] = 0
        self.ecrire(self.log, f"\nLe navire a sombré au jour {jour} !")
        self.scene = "naufrage"
        self.sink = 0.0
        self.barre_cible = 0
        self.root.after(4500, self.fin_partie)

    def arrivee_terre(self):
        solidite, _ = self.res_mer
        e = self.etat
        e["solidite"] = solidite
        self.barre_cible = solidite
        self.scene = "port"
        self.ship_cible = 300.0
        coffre = float(random.randint(30, 120))
        e["or_en_poche"] += coffre
        e["possede_carte_tresor"] = True
        self.ecrire(self.log, f"\nTerre en vue ! Solidité finale : {solidite}")
        self.ecrire(self.log, f"Sur la plage, l'équipage trouve un coffre ({coffre:.1f} pièces d'or)"
                              f" et une CARTE AU TRÉSOR !")
        self.bouton(self.zone_bas, "Retour au port", self.ecran_menu, largeur=22).pack()

    # ------------------------------------------------------------------
    #  Choix 3 / Exercice 3 : à la recherche du trésor
    # ------------------------------------------------------------------
    def chercher_tresor(self):
        e = self.etat
        if not e["possede_carte_tresor"]:
            p = self.nouveau_panneau("À la recherche du trésor")
            tk.Label(p, text=afficher_carte(False), font=F_TITRE, bg=PARCH, fg=ROUGE).pack(pady=14)
            tk.Label(p, text="Pars en mer : une carte attend peut-être sur la prochaine île.",
                     font=F_TXT, bg=PARCH, fg=BRUN).pack()
            self.bouton(p, "Retour au menu", self.ecran_menu).pack(pady=18)
            return
        self.scene = "ile"
        self.ship_cible = 130.0
        self.coffre = None
        self.ile_tresor = random.randint(1, NB_ILES)
        self.essais = 0
        self.tresor_fini = False
        p = self.nouveau_panneau("À la recherche du trésor")
        tk.Label(p, text=afficher_carte(True) + "  Le trésor est caché sur une île de 1 à 20 "
                         f"({MAX_TENTATIVES} tentatives).",
                 font=F_TXT, bg=PARCH, fg=BRUN).pack()
        grille = tk.Frame(p, bg=PARCH)
        grille.pack(pady=8)
        self.cases = {}
        for n in range(1, NB_ILES + 1):
            lab = tk.Label(grille, text=str(n), width=4, font=F_GRAS, bg="#e8cf8f", fg=BRUN,
                           relief="raised", bd=2, cursor="hand2")
            lab.grid(row=(n - 1) // 10, column=(n - 1) % 10, padx=2, pady=2)
            lab.bind("<Button-1>", lambda ev, k=n: self.remplir_essai(k))
            self.cases[n] = lab
        ligne = tk.Frame(p, bg=PARCH)
        ligne.pack(pady=4)
        tk.Label(ligne, text="Ton île :", font=F_TXT, bg=PARCH, fg=BRUN).pack(side="left", padx=6)
        self.e_essai = tk.Entry(ligne, font=F_TXT, width=8, justify="center", bd=3)
        self.e_essai.pack(side="left", padx=6)
        self.e_essai.focus_set()
        self.e_essai.bind("<Return>", lambda ev: self.essai_tresor())
        self.btn_fouiller = self.bouton(ligne, "Fouiller", self.essai_tresor, largeur=12)
        self.btn_fouiller.pack(side="left", padx=6)
        self.lbl_tent = tk.Label(p, font=F_GRAS, bg=PARCH, fg=BRUN)
        self.lbl_tent.pack()
        self.lbl_indice = tk.Label(p, text=" ", font=F_GRAS, bg=PARCH, fg=BRUN)
        self.lbl_indice.pack(pady=4)
        self.zone_fin = tk.Frame(p, bg=PARCH)
        self.zone_fin.pack()
        self.maj_tentatives()

    def maj_tentatives(self):
        restantes = MAX_TENTATIVES - self.essais
        self.lbl_tent.config(text="Tentatives restantes : " + "● " * restantes
                                  + "○ " * (MAX_TENTATIVES - restantes))

    def remplir_essai(self, n):
        if self.tresor_fini:
            return
        self.e_essai.delete(0, "end")
        self.e_essai.insert(0, str(n))
        self.e_essai.focus_set()

    def essai_tresor(self):
        if self.tresor_fini:
            return
        resultat, n = evaluer_essai(self.e_essai.get(), self.ile_tresor)
        if resultat == "invalide":                    # « continue » : tentative non consommée
            self.lbl_indice.config(fg=ROUGE, text="Saisie invalide : tape un entier de 1 à 20 "
                                                  "(tentative non consommée).")
            self.e_essai.delete(0, "end")
            return
        tentatives_restantes = MAX_TENTATIVES - self.essais   # la tentative gagnante compte
        self.essais += 1
        self.maj_tentatives()
        self.e_essai.delete(0, "end")
        if resultat == "gagne":
            gain = gain_tresor(tentatives_restantes)
            self.etat["or_en_poche"] += gain
            self.etat["possede_carte_tresor"] = False
            self.coffre = "ouvert"
            self.cases[n].config(bg=OR)
            for _ in range(70):
                self.particules.append([690 + random.uniform(-15, 15), 190,
                                        random.uniform(-5, 5), random.uniform(-12, -5)])
            self.lbl_indice.config(fg="#1e7a2e", text=f"BRAVO ! Trésor trouvé sur l'île {n} : "
                                                      f"+{gain} pièces d'or !")
            self.fin_tresor()
        else:
            ton = "Plus haut" if resultat == "plus haut" else "Plus bas"
            self.lbl_indice.config(fg=BRUN, text=f"{ton} !")
            for k in self.cases:
                if (resultat == "plus haut" and k <= n) or (resultat == "plus bas" and k >= n):
                    self.cases[k].config(bg="#bdb7a6", fg="#777777")
            if self.essais >= MAX_TENTATIVES:
                self.etat["possede_carte_tresor"] = False
                self.coffre = "ferme"
                self.cases[self.ile_tresor].config(bg="#e05a4a", fg="white")
                self.lbl_indice.config(fg=ROUGE, text=f"Perdu... le trésor était sur l'île "
                                                      f"{self.ile_tresor}. La carte est détrempée.")
                self.fin_tresor()

    def fin_tresor(self):
        self.tresor_fini = True
        self.e_essai.config(state="disabled")
        self.btn_fouiller.destroy()
        self.bouton(self.zone_fin, "Retour au menu", self.ecran_menu, largeur=22).pack(pady=4)

    # ------------------------------------------------------------------
    #  Choix 4 / Exercice 4 : les enchères
    # ------------------------------------------------------------------
    def aller_au_marche(self):
        self.scene = "marche"
        self.ship_cible = 250.0
        self.ventes = []
        self.marche_ouvert = True
        p = self.nouveau_panneau("Le marché aux enchères")
        ligne = tk.Frame(p, bg=PARCH)
        ligne.pack()
        tk.Label(ligne, text="Valeur unitaire (ou « fin ») :", font=F_TXT, bg=PARCH, fg=BRUN).grid(row=0, column=0, padx=6)
        self.e_val = tk.Entry(ligne, font=F_TXT, width=10, justify="center", bd=3)
        self.e_val.grid(row=0, column=1, padx=6)
        tk.Label(ligne, text="Quantité :", font=F_TXT, bg=PARCH, fg=BRUN).grid(row=0, column=2, padx=6)
        self.e_qte = tk.Entry(ligne, font=F_TXT, width=8, justify="center", bd=3)
        self.e_qte.grid(row=0, column=3, padx=6)
        self.e_val.focus_set()
        self.e_val.bind("<Return>", lambda ev: self.e_qte.focus_set())
        self.e_qte.bind("<Return>", lambda ev: self.vendre())
        self.err_marche = tk.Label(p, text=" ", font=F_GRAS, bg=PARCH, fg=ROUGE)
        self.err_marche.pack()
        self.log = self.zone_log(p, 8)
        self.barre_btn = tk.Frame(p, bg=PARCH)
        self.barre_btn.pack()
        self.bouton(self.barre_btn, "Vendre", self.vendre, largeur=14).pack(side="left", padx=8)
        self.bouton(self.barre_btn, "Terminer l'escale", self.terminer_escale, largeur=18).pack(side="left", padx=8)
        self.ecrire(self.log, "Bienvenue au marché du port ! Entre « fin » comme valeur unitaire pour terminer.")

    def vendre(self):
        if not self.marche_ouvert:
            return
        brut = self.e_val.get().strip()
        if brut.lower() == "fin":
            self.terminer_escale()
            return
        valeur_unitaire = lire_valeur_unitaire(brut)
        if valeur_unitaire is None:
            self.err_marche.config(text="Valeur unitaire invalide (nombre > 0, ou « fin »).")
            return
        quantite = lire_quantite(self.e_qte.get())
        if quantite is None:
            self.err_marche.config(text="Quantité invalide (entier > 0).")
            return
        self.err_marche.config(text=" ")
        total = float(calculer_valeur(valeur_unitaire, quantite))
        taux, total_final = appliquer_taxe_portuaire(total)
        self.ventes.append(total_final)
        n = len(self.ventes)
        self.ecrire(self.log, f"-- Vente n°{n} : {valeur_unitaire:g} x {quantite}")
        self.ecrire(self.log, f"   Total avant taxe : {total:.1f} pièces d'or")
        self.ecrire(self.log, f"   Taxe appliquée : {taux}%")
        self.ecrire(self.log, f"   Total perçu : {total_final:.1f} pièces d'or")
        for _ in range(min(45, int(total_final / 8) + 3)):
            self.particules.append([random.uniform(600, 790), 175,
                                    random.uniform(-2, 2), random.uniform(-9, -4)])
        self.e_val.delete(0, "end")
        self.e_qte.delete(0, "end")
        self.e_val.focus_set()

    def terminer_escale(self):
        if not self.marche_ouvert:
            return
        self.marche_ouvert = False
        nb = len(self.ventes)
        total_percu = sum(self.ventes)
        meilleure = max(self.ventes) if self.ventes else 0.0
        self.etat["or_en_poche"] += total_percu
        self.ecrire(self.log, "\n===== BILAN DE L'ESCALE =====")
        self.ecrire(self.log, f"Nombre de ventes : {nb}")
        self.ecrire(self.log, f"Total perçu après taxes : {total_percu:.1f} pièces d'or")
        self.ecrire(self.log, f"Meilleure vente : {meilleure:.1f} pièces d'or")
        self.ecrire(self.log, f"Or du capitaine : {self.etat['or_en_poche']:.1f} pièces d'or")
        self.e_val.config(state="disabled")
        self.e_qte.config(state="disabled")
        self.barre_btn.destroy()
        self.bouton(self.cadre, "Retour au menu", self.ecran_menu, largeur=22).pack(pady=4)

    # ------------------------------------------------------------------
    #  Fins de partie
    # ------------------------------------------------------------------
    def fin_partie(self):
        if not self.actif:
            return
        e = self.etat
        p = self.nouveau_panneau("FIN DE LA PARTIE")
        tk.Label(p, text=f"Le navire du capitaine {e['nom_capitaine']} repose au fond de l'océan...",
                 font=F_TXT, bg=PARCH, fg=ROUGE).pack(pady=6)
        tk.Label(p, text=f"Grade : {grade_capitaine(e['experience'])}\n"
                         f"Or final : {e['or_en_poche']:.1f} pièces d'or",
                 font=F_TITRE, bg=PARCH, fg=BRUN).pack(pady=10)
        self.bouton(p, "Nouvelle partie", self.ecran_creation).pack(pady=3)
        self.bouton(p, "Quitter", self.fermer).pack(pady=3)

    def au_revoir(self):
        e = self.etat
        p = self.nouveau_panneau("À bientôt, capitaine !")
        tk.Label(p, text=f"{e['nom_capitaine']} range sa longue-vue.\n"
                         f"Grade : {grade_capitaine(e['experience'])}\n"
                         f"Or final : {e['or_en_poche']:.1f} pièces d'or",
                 font=F_TITRE, bg=PARCH, fg=BRUN).pack(pady=14)
        self.bouton(p, "Fermer le jeu", self.fermer).pack(pady=6)
        self.bouton(p, "Finalement, je reste", self.ecran_menu).pack(pady=3)


if __name__ == "__main__":
    Jeu().lancer()



```
````
`````
