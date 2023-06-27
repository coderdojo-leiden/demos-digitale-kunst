# DEMO 9 - Diversen

## Laag kopieren

Laten we onze tekst een schaduw geven. Vervang de `Tekst`-laag door:

```js
laag(Tekst)
wijzig("kleur", "zwart")

kopieer_laag()
wijzig("kleur", "wit")
laag(Verplaats)
wijzig("pad", pad.xy(10, 10))
```

Zo maken we een witte tekst met zwarte schaduw. Zie je dat we een laag exact kunnen kopieren met `kopieer_laag()`? Alle eigenschappen en effecten worden meegekopieerd.



## Lagen groeperen

Stop even het stuiteren van de vorm door de regels met `Verplaats` uit te zetten:

```js
// laag(Verplaats)
// wijzig("pad", pad.stuiter(50, 13))
```

We hebben nu 1 `Vorm` laag en 2 `Tekst` lagen. Als we die allemaal samen over het scherm willen laten vliegen, en van grootte veranderen, zouden we effecten op alle 3 de lagen moeten toepassen.

Maar het kan makkelijker! Voeg de volgende code toe net na de tweede `Tekst` laag:

```js
groepeer_lagen(3)
```

De drie lagen zijn nu gegroepeerd en alle effecten die je toevoegt, worden op de groep toegepast! Probeer het maar uit:

```js
laag(Grootte)
wijzig("grootte", getal.puls(20, 100, 250))
laag(Draai)
wijzig("hoek", getal.wiegen())
laag(Verplaats)
wijzig("pad", pad.lissa())
```


## TIPS

### Lagen tonen en verbergen

Als de demo in de browser actief is (klik er op met de muis, dan weet je het zeker), kun je met de toetsen <kbd>1</kbd> en <kbd>2</kbd> de lagen aan- en uitzetten. Probeer maar eens!

Je kunt zelfs de `Achtergrond` laag uitzetten door op <kbd>0</kbd> te drukken. Wat gebeurt er dan?

Om alle lagen weer zichtbaar te maken: druk op <kbd>~</kbd> (tilde, linksboven op je keyboard).

### Wijzigingen ongedaan maken

Je kunt wijzigingen in je code ongedaan maken met <kbd>Ctrl+Z</kbd>: Houd <kbd>Ctrl</kbd> ingedrukt en druk (een paar keer) op <kbd>Z</kbd>.

### Kopieren en plakken

Gebruik kopieren en plakken om code over te nemen: selecteer de code die je wilt overnemen met de muis, druk dan <kbd>Ctrl+C</kbd> (kopieren), klik dan in je programma op de plek waar je de code wilt hebben en druk <kbd>Ctrl+V</kbd> (plakken).

### Replit console verbergen of tonen

<img style="float: right; margin: 10px;" src="images/button-devtools.png">
<b>LET OP:</b> Replit heeft een "console" waarin je uitleg krijgt als er iets misgaat met je programma. Dat is heel handig, maar het valt wel over je programma heen. Je kunt het uit- en inschakelen met het gereedschap-icoontje rechtsboven (zie plaatje).


