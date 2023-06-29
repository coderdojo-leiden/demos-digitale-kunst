# DEMO 3 - Effecten

<blockquote>
<details>
  <summary><u><b>TIP:</b> zo zou je project er nu uit moeten zien</u></summary>

<p>(andere kleuren, teksten of vormen zijn natuurlijk geen probleem)</p>

<pre>
laag(Achtergrond)
wijzig("kleur", "donkergroen")

laag(Vorm)
wijzig("vorm", vorm.cirkel())

laag(Tekst)
wijzig("tekst", "Coding is cool!")
</pre>

</details>
</blockquote>

## Effecten

Onze demo wordt een stuk leuker met beweging! Laten we kijken hoe we een laag kunnen verplaatsen, draaien en van grootte veranderen.


### Verplaats

Voeg deze regels toe na de regel `wijzig("vorm", vorm.cirkel())`:

```js
laag(Verplaats)
wijzig("pad", pad.stuiter())
```

Wat gebeurt er?

Je kunt het pad aanpassen door twee getallen mee te geven:

```js
wijzig("pad", pad.stuiter(50, 13))
```

Probeer ook andere getallen!

`pad.stuiter()` is maar 1 voorbeeld van een pad. Hoe zien `pad.cirkel()` en `pad.lissa()` er uit? Ook hier kun je getallen aan meegeven om het pad aan te passen.

<iframe src="https://coderdojo-leiden.github.io/demos-digitale-kunst/voorbeeld/verplaats/"></iframe>

### Draai

Voeg dit toe na `laag(Tekst)`:

```js
laag(Draai)
wijzig("hoek", getal.golf(50, 20))
```

`getal.golf()` is een waarde die steeds heen en weer "golft".

Probeer de getallen weer aan te passen. Begrijp je wat ze doen?

<iframe src="https://coderdojo-leiden.github.io/demos-digitale-kunst/voorbeeld/draai/"></iframe>

## Grootte

Schakel het `Draai` effect even uit door `//` voor de 2 regels te zetten:

```js
//laag(Draai)
//wijzig("hoek", getal.golf(50, 20))
```

Voeg daarna deze regels toe na `laag(Tekst)`:

```js
laag(Grootte)
wijzig("grootte", getal.golf(30, 50, 150))
```

Het eerste getal (`30`) is hoe lang de golf duurt. Een grotere waarde maakt de golf langzamer en een kleinere waarde maakt hem sneller.

Het tweede en derde getal (`50` em `150`) zijn de kleinste en grootste waarde waar de golf tussen heen en weer gaat. Alles kleiner dan 100 maakt de laag kleiner en alles groter dan 100 maakt hem groter.

Je hoeft al deze getallen niet precies te begrijpen; probeer gewoon verschillende getallen uit tot je tevreden bent met het resultaat!


## Effecten combineren

Zet nu deze effecten onder `laag(Tekst)` (en verwijder andere effecten bij deze laag):

```js
laag(Draai)
wijzig("hoek", getal.golf(20, 50))
laag(Verplaats)
wijzig("pad", pad.omhoog(250))
laag(Grootte)
wijzig("grootte", 120)
```

Wissel de regels met `Draai` en `Verplaats` nu eens om, dus zo:

```js
laag(Verplaats)
wijzig("pad", pad.omhoog(250))
laag(Draai)
wijzig("hoek", getal.golf(20, 50))
laag(Grootte)
wijzig("grootte", 120)
```

Wat is het verschil? Snap je waarom?

> **TIP:** Druk eens op de <kbd>-</kbd> toets! De `Verplaats` effecten zie je dan als lijnen.

Als meerdere effecten niet precies doen wat je verwacht, probeer dan dus eens een andere volgorde!

Bij de volgende stap gaan we onze vorm vermenigvuldigen: [Demo 4 - vermenigvuldig](./4%20-%20vermenigvuldig.html)