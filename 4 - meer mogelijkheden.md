# DEMO 4 - (Veel) meer mogelijkheden

## Teken-lagen

We hebben al de lagen `Achtergrond`, `Vorm` en `Tekst` gezien, maar er zijn er meer.
Hieronder zie je ze allemaal, plus welke eigenschappen je kunt wijzigen.

**LET OP:** alle teken-lagen hebben een eigenschap `kleur`, dus die noemen we niet meer.

| **Laag**      | **Beschrijving**                            | **Eigenschap**  | **Beschrijving**                                                | **Type** |
|:--------------|:--------------------------------------------|-----------------|-----------------------------------------------------------------|:---------|
| `Achtergrond` | Vult het scherm met een kleur               |                 |                                                                 |          |
| `Vorm`        | Tekent een vorm                             | `vorm`          | Welke vorm?                                                     | Vorm     |
|               |                                             | `lijnkleur`     | Kleur van de rand                                               | Kleur    |
|               |                                             | `lijndikte`     | Dikte van de rand                                               | Getal    |
| `Tekst`       | Schrijft tekst                              | `tekst`         | Welke tekst?                                                    | Tekst    |
|               |                                             | `lettertype`    | Naam van het lettertype (het soort letter). Zie **Lettertypes** | Tekst    |
| `Plaatje`     | Tekent een plaatje                          | `naam`          | Naam van het plaatje. Zie **Plaatjes**                          | Tekst    |
| `Slang`       | Tekent een slang die een pad volgt          | `pad`           | Welk pad volgt de slang?                                        | Pad      |
|               |                                             | `dikte`         | Hoe dik is de slang?                                            | Getal    |
|               |                                             | `lengte`        | Hoe lang is de slang?                                           | Getal    |
| `Tekstrol`    | Lange tekst die voorbij schuift             | `tekst`         | Welke tekst?                                                    | Tekst    |
|               |                                             | `snelheid`      | Hoe snel gaat de tekst?                                         | Getal    |
|               |                                             | `lettertype`    | Naam van het lettertype (het soort letter). Zie **Lettertypes** | Tekst    |
|               |                                             | `kleurvariatie` | Hoe snel verandert de kleur van letter naar letteer?            | Getal    |
|               |                                             | `grootte`       | Hoe groot zijn de letters?                                      | Getal    |
|               |                                             | `hoogte`        | Hoe hoog worden de letters getekend?                            | Getal    |
| `Plot`        | Toont een getalfunctie zoals `getal.golf()` | `getal`         | Getal om te plotten                                             | Getal    |
|               |                                             | `tijdvak`       | Hoeveel seconden van de functie tekenen we op het scherm?       | Getal    |
|               |                                             | `dikte`         | Hoe dik tekenen we de lijn?                                     | Getal    |

## Effect-lagen

Deze hebben we ook al gezien, maar hier zijn ze nog een keer:

| **Naam**    | **Beschrijving**             | **Eigenschap** | **Beschrijving**                                                                                            | **Type** |
|:------------|:-----------------------------|----------------|:------------------------------------------------------------------------------------------------------------|:---------|
| `Verplaats` | Verplaats laag               | `pad`          | Over welk pad beweegt de laag?                                                                              | Pad      |
| `Grootte`   | Maakt laag groter of kleiner | `grootte`      | Hoe verandert de grootte van de laag? (200=twee keer zo groot, 50=twee keer zo klein, 100=geen verandering) | Getal    |
| `Draai`     | Draait de laag               | `hoek`         | Hoe draait de laag? (90=kwart slag, 180=ondersteboven, 360=helemaal rond)                                   | Getal    |

## Getallen

Overal waar je hierboven een Getal moet invoeren, kun je kiezen uit deze mogelijkheden.

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

## Kleur

Overal waar je hierboven een Kleur moet invoeren, kun je kiezen uit deze mogelijkheden.

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

| **Naam**               | **Beschrijving**                              |
|:-----------------------|:----------------------------------------------|
| `kleur.regenboog()`    | Alle kleuren van de regenboog, in 10 seconden |
| `kleur.regenboog(200)` | Langzamere regenboog                          |
| `kleur.regenboog(50)`  | Snellere regenboog                            |

### Wissel

| **Naam**                                    | **Beschrijving**                                       |
|:--------------------------------------------|:-------------------------------------------------------|
| `kleur.wissel(20, "wit", "zwart")`          | Wisselt elke 2 seconden tussen wit en zwart            |
| `kleur.wissel(5, "rood", "groen", "blauw")` | Wisselt elke halve seconde tussen rood, groen en blauw |


## Vorm

Overal waar je hierboven een Vorm moet invoeren, kun je kiezen uit deze mogelijkheden.

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
