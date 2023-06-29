# DEMO 5 - (Veel) meer mogelijkheden

Begrijp je nu precies hoe `laag()` en `wijzig()` werken? Als het goed is kun je nu een nieuwe teken-laag toevoegen, een aantal eigenschappen wijzigen, en 1 of meer effect-lagen zoals `Draai`, `Verplaats` en `Grootte` toevoegen.

Hieronder staan een heleboel mogelijkheden uitgelegd. Kies iets wat er leuk uitziet, probeer het uit en maak iets moois!

Helemaal onderaan vind je nog een paar ideetjes die je kunt proberen.

Hier staan (bijna) alle mogelijkheden uitgelegd:
- [Teken-lagen](#teken-lagen)
- [Effect-lagen](#effect-lagen)
- [Getallen](#getallen)
- [Kleuren](#kleuren)
- [Vormen](#vormen)
- [Paden](#paden)
- [Lettertypes](#lettertypes)
- [Plaatjes](#plaatjes)
- [Toetsen tijdens de demo](#toetsen-tijdens-de-demo)
- [Zomaar een paar ideetjes](#zomaar-een-paar-ideetjes)

## Teken-lagen

We hebben al de lagen `Achtergrond`, `Vorm` en `Tekst` gezien, maar er zijn er meer.
Hieronder zie je ze allemaal, plus welke eigenschappen je kunt wijzigen.

**LET OP:** alle teken-lagen hebben een eigenschap `kleur`, dus die noemen we niet meer.

| **Laag**              | **Beschrijving**                                        | **Eigenschap**  | **Beschrijving**                                                        | **Standaardwaarde**       |
|:----------------------|:--------------------------------------------------------|-----------------|-------------------------------------------------------------------------|:--------------------------|
| `Achtergrond`         | Vult het scherm met een kleur                           |                 |                                                                         |                           |
|                       |
| `Vorm`                | Tekent een vorm                                         | `vorm`          | Welke vorm?                                                             | `"donkerblauw"`           |
|                       |                                                         | `lijnkleur`     | Kleur van de rand                                                       | (geen rand)               |
|                       |                                                         | `lijndikte`     | Dikte van de rand (als je `lijnkleur` zet)                              | `2`                       |
|                       |
| `Tekst`               | Schrijft tekst                                          | `tekst`         | Welke tekst?                                                            | `"Hallo"`                 |
|                       |                                                         | `lettertype`    | Naam van het lettertype (het soort letter). Zie **Lettertypes**         | `"boek"`                  |
|                       |
| `Plaatje`             | Tekent een plaatje                                      | `naam`          | Naam van het plaatje. Zie **Plaatjes**                                  | `"logo.png"`              |
|                       |
| `Slang`               | Tekent een slang die een pad volgt                      | `pad`           | Welk pad volgt de slang?                                                | `pad.lissa()`             |
|                       |                                                         | `dikte`         | Hoe dik is de slang?                                                    | `50`                      |
|                       |                                                         | `lengte`        | Hoe lang is de slang?                                                   | `20`                      |
|                       |
| `Lijnen` of `Cirkels` | Tekent horizontale lijnen of cirkels vanuit het midden. | `afstand`       | Afstand tussen de lijnen of cirkels                                     | `40`                      |
|                       |                                                         | `dikte`         | Dikte van de lijn of cirkel                                             | `8`                       |
|                       |                                                         | `kleurvariatie` | Hoe snel verandert de kleur van lijn naar lijn (of cirkel naar cirkel)? | `10`                      |
|                       |
| `Tekstrol`            | Lange tekst die voorbij schuift                         | `tekst`         | Welke tekst?                                                            | `"DIT IS EEN TE(K)ST..."` |
|                       |                                                         | `snelheid`      | Hoe snel gaat de tekst?                                                 | `10`                      |
|                       |                                                         | `lettertype`    | Naam van het lettertype (het soort letter). Zie **Lettertypes**         | `cartoon`                 |
|                       |                                                         | `kleurvariatie` | Hoe snel verandert de kleur van letter naar letter?                     | `10`                      |
|                       |                                                         | `grootte`       | Hoe groot zijn de letters?                                              | `80`                      |
|                       |                                                         | `hoogte`        | Hoe hoog worden de letters getekend?                                    | `0`                       |
|                       |
| `Plot`                | Toont een getalfunctie zoals `getal.golf()`             | `getal`         | Getal om te plotten                                                     | `getal.golf(20)`          |
|                       |                                                         | `tijdvak`       | Hoeveel seconden van de functie tekenen we op het scherm?               | `5`                       |
|                       |                                                         | `dikte`         | Hoe dik tekenen we de lijn?                                             | `3`                       |

## Effect-lagen

Deze hebben we ook al gezien, maar hier zijn ze nog een keer:

| **Naam**         | **Beschrijving**                               | **Eigenschap** | **Beschrijving**                                                                                            |        **Standaardwaarde** |
|:-----------------|:-----------------------------------------------|----------------|:------------------------------------------------------------------------------------------------------------|---------------------------:|
| `Verplaats`      | Verplaats laag                                 | `pad`          | Over welk pad beweegt de laag?                                                                              |             `pad.cirkel()` |
|                       |
| `Grootte`        | Maakt laag groter of kleiner                   | `grootte`      | Hoe verandert de grootte van de laag? (200=twee keer zo groot, 50=twee keer zo klein, 100=geen verandering) | `getal.golf(20, 100, 200)` |
|                       |
| `Draai`          | Draait de laag                                 | `hoek`         | Hoe draait de laag? (90=kwart slag, 180=ondersteboven, 360=helemaal rond)                                   |             `getal.golf()` |
|                       |
| `Vermenigvuldig` | Kopieert de laag een aantal keer in een cirkel | `aantal`       | Hoeveel keer de laag gekopieerd wordt                                                                       |                        `7` |
|                  |                                                | `afstand`      | Hoe groot wordt de cirkel waarin de vormen staan?                                                           |                      `200` |
|                  |                                                | `variatie`     | (moeilijk) Hoeveel varieert afstand en grootte per vorm?                                                    |                       `20` |

## Getallen

Overal waar je hierboven een getal moet invoeren, kun je kiezen uit deze mogelijkheden.

### Vast getal

| **Naam**                       | **Beschrijving**                                                 |
|:-------------------------------|:-----------------------------------------------------------------|
| `1` of `100` of `-10`          | Een getal dat niet verandert                                     |

### Golf

| **Naam**                       | **Beschrijving**                                                 |
|:-------------------------------|:-----------------------------------------------------------------|
| `getal.golf()`                 | Een getal dat "golft"                                            |
| `getal.golf(200)`              | Langzamere golf                                                  |
| `getal.golf(50)`               | Snellere golf                                                    |
| `getal.golf(50, 50)`           | Lagere golf                                                      |
| `getal.golf(50, 200)`          | Hogere golf                                                      |
| `getal.golf(50, 100, 200)`     | Golft precies tussen `100` en `200`                              |
| `getal.golf(50, 100, 200, 25)` | Zoals de vorige, maar verschoven (de golf begint halverwege)     |

### Zigzag

| **Naam**                       | **Beschrijving**                                                 |
|:-------------------------------|:-----------------------------------------------------------------|
| `getal.zigzag()`               | Lijkt op een golf, maar is hoekiger                              |
| `getal.zigzag(200)`            | Langzamere zigzag                                                |
| `getal.zigzag(50)`             | Snellere zigzag                                                  |
| `getal.zigzag(50)`             | Snellere zigzag                                                  |

### Puls

| **Naam**                       | **Beschrijving**                                                 |
|:-------------------------------|:-----------------------------------------------------------------|
| `getal.puls()`                 | Geeft af en toe een "puls" (wordt even groter en dan weer klein) |
| `getal.puls(200)`              | Langzamere puls                                                  |
| `getal.puls(50)`               | Snellere puls                                                    |

### Teller

| **Naam**                   | **Beschrijving**       |
|:---------------------------|:-----------------------|
| `getal.teller()`           | Telt van `0` tot `100` |
| `getal.teller(200)`        | Langzamere teller      |
| `getal.teller(50)`         | Snellere teller        |
| `getal.teller(50, 0, 360)` | Telt van `0` tot `360` |
| `getal.teller(50, 360, 0)` | Telt van `360` tot `0` |

## Kleuren

Overal waar je hierboven een kleur moet invoeren, kun je kiezen uit deze mogelijkheden.

### Vaste kleur

Deze kleuren verandering niet met de tijd.

| **Naam**                | **Beschrijving**                                                                                                               |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| `"rood"`                | De kleur rood                                                                                                                  |
| `20`                    | De kleur geel (probeer waardes van `0` tot `100`!)                                                                             |
| `#ff00ff`               | De kleur paars als hexwaarde                                                                                                   |
| `kleur.rgb(0, 100, 0)`  | Een kleur opgebouwd uit (R)ood, (G)roen en (B)lauw. Dit is puur groen.                                                         |
| `kleur.hsb(20, 50, 50)` | Een kleur opgebouwd uit kleurtint, verzadiging (is de kleur flets of helder?)<br>en intensiteit (is de kleur donker of licht?) |

### Regenboog

Laat alle kleuren van de regenboog voorbijkomen!

| **Naam**               | **Beschrijving**                        |
|:-----------------------|:----------------------------------------|
| `kleur.regenboog()`    | Kleuren van de regenboog in 10 seconden |
| `kleur.regenboog(200)` | Langzamere regenboog                    |
| `kleur.regenboog(50)`  | Snellere regenboog                      |

### Wissel

Je kunt ook wisselen tussen een aantal gekozen kleuren.

| **Naam**                                    | **Beschrijving**                                       |
|:--------------------------------------------|:-------------------------------------------------------|
| `kleur.wissel(20, "wit", "zwart")`          | Wisselt elke 2 seconden tussen wit en zwart            |
| `kleur.wissel(5, "rood", "groen", "blauw")` | Wisselt elke halve seconde tussen rood, groen en blauw |

### Willekeurig

| **Naam**                | **Beschrijving**                          |
|:------------------------|:------------------------------------------|
| `kleur.willekeurig()`   | Elke 2 seconden een willekeurige kleur    |
| `kleur.willekeurig(5)`  | Elke halve seconde een willekeurige kleur |
| `kleur.willekeurig(40)` | Elke 4 seconden een willekeurige kleur    |


## Vormen

Overal waar je hierboven een vorm moet invoeren, kun je kiezen uit deze mogelijkheden.

### Vaste vorm

| **Naam**           | **Beschrijving**                                                  |
|:-------------------|:------------------------------------------------------------------|
| `vorm.vierkant()`  | Een vierkant                                                      |
| `vorm.cirkel()`    | Een cirkel                                                        |
| `vorm.driehoek()`  | Een driehoek                                                      |
| `vorm.veelhoek(5)` | Een vijfhoek (_pentagon_)                                           |
| `vorm.veelhoek(6)` | Een zeshoek (_hexagon_)                                             |
| `8`                | Gewoon een getal opgeven werkt ook, dit is een achthoek (_octagon_) |

### Wisselende vorm

| **Naam**                            | **Beschrijving**                                           |
|:------------------------------------|:-----------------------------------------------------------|
| `vorm.wissel(20, vorm.cirkel(), 7)` | Wisselt elke 2 seconden tussen een cirkel en een zevenhoek |

### Veelhoek met een getalfunctie

| **Naam**                                 | **Beschrijving**                              |
|:-----------------------------------------|:----------------------------------------------|
| `vorm.veelhoek(getal.teller(100, 3, 8))` | Wat denk je dat dit doet? Probeer het eens... |

## Paden

Overal waar je hierboven een pad moet invoeren, kun je kiezen uit deze mogelijkheden.

### Vaste positie

Een positie die niet verandert. Gebruik dit om een laag op een bepaalde plek op het scherm te zetten. Bijvoorbeeld een stukje tekst bovenaan het scherm met `laag(Verplaats)` en `wijzig("pad", pad.omhoog(300))`

| **Naam**            | **Beschrijving**                 |
|:--------------------|:---------------------------------|
| `pad.omhoog(150)`   | 150 naar boven                   |
| `pad.omlaag(150)`   | 150 naar onder                   |
| `pad.links(100)`    | 150 naar links                   |
| `pad.rechts(100)`   | 150 naar rechts                  |
| `pad.xy(-100, 150)` | 100 naar links en 150 naar boven |

### Beweging

Deze paden leveren verschillende bewegingen op.

| **Naam**              | **Beschrijving**                                                                                        |
|:----------------------|:--------------------------------------------------------------------------------------------------------|
| `pad.cirkel()`        | Beweegt in een cirkel                                                                                   |
| `pad.cirkel(30)`      | Snellere cirkelbeweging                                                                                 |
| `pad.cirkel(100)`     | Langzamere cirkelbeweging                                                                               |
| `pad.stuiter()`       | Stuiteren over het scherm                                                                               |
| `pad.stuiter(20, 30)` | De eerste twee getallen bepalen het pad en de snelheid. Kleinere getallen leveren snellere beweging op. |
| `pad.lissa()`         | Slingeren over het scherm (een _Lissajous-figuur_)                                                      |
| `pad.lissa(20, 30)`   | De eerste twee getallen bepalen het pad en de snelheid. Kleinere getallen leveren snellere beweging op. |
| `pad.x(getal.golf())` | Golft naar links en rechts                                                                              |
| `pad.y(getal.golf())` | Golft omhoog en omlaag                                                                                  |

## Lettertypes

Probeer deze lettertypes bij `Tekst` en `Tekstrol`:
- `"cartoon"`
- `"boek"`
- `"handschrift"`
- `"computer"`

## Plaatjes

In de `plaatjes/` map staan al een paar plaatjes die je kunt gebruiken met de laag `Plaatje` (eigenschap `naam`):
- `"logo.png"`
- `"logo2.png"`
- `"logo3.png"`

Je kunt ook je eigen plaatje gebruiken: zoek een leuk plaatje, download het en sleep het uit de Download map naar de `plaatjes` map. Vraag het aan een mentor als het niet lukt.

## Toetsen tijdens de demo

Je kunt je demo een beetje 'besturen' met een aantal speciale toetsen.

| **Naam**       | **Beschrijving**                                                                                                             |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------|
| `1`, `2`, ...  | Verberg of toon een teken-laag. Wat gebeurt er als je op `0` drukt? Druk nog eens op `0` om weer terug naar normaal te gaan! |
| `~`            | Terug naar normaal: toon alle lagen, ga naar normale snelheid                                                                |
| `<`, `>`       | Vertraag of versnel je demo                                                                                                  |
| `<spatiebalk>` | Pauzeer je demo                                                                                                              |
| `-`            | Toon `Verplaats` effecten met een lijn                                                                                       |


Als de demo in de browser actief is (klik er op met de muis, dan weet je het zeker), kun je met de toetsen <kbd>1</kbd> en <kbd>2</kbd> de lagen aan- en uitzetten. Probeer maar eens!

Je kunt zelfs de `Achtergrond` laag uitzetten door op <kbd>0</kbd> te drukken. Wat gebeurt er dan?

Om alle lagen weer zichtbaar te maken: druk op <kbd>~</kbd> (tilde, linksboven op je keyboard).


## Zomaar een paar ideetjes

Hier zijn nog een paar dingen die je kunt proberen:
- Gebruik `vorm.wissel()` om tussen verschillende vormen te wisselen!
- Maak een `Tekstrol` met een hele lange tekst (zet je tekst tussen `` `...` `` (omgekeerde apostrof, linksboven op je toetsenbord) in plaats van `"..."`, dan kun je hem over meerdere regels verdelen). Laat de tekst op en neer golven door `hoogte` te wijzigen naar `getal.golf()`.
- Maak twee `Lijnen` lagen, en laag een van de twee lagen draaien met `hoek` op `getal.golf(10, 20)`. De twee overlappende lijnen-lagen zorgen voor een leuk effect! (dit heet en _Moiré-patroon_). Zulke patronen kun je ook maken met twee `Cirkels` lagen waarvan je er beweegt met `Verplaats` en `pad.rechts(getal.golf())`.
  Succes!
