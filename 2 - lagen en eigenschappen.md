# DEMO 2 - Lagen en eigenschappen


## Lagen

Een demo bestaat uit lagen, bijvoorbeeld:

- een achtergrond
- dan een aantal bewegende vormen
- en bovenop rondvliegende tekst

Het startproject heeft 2 lagen: `laag(Achtergrond)` en `laag(Tekst)`.

Voeg nu tussen deze twee lagen een nieuwe laag toe:

```js
laag(Vorm)
```

Wat verandert er nu?

Probeer ook eens om de lagen om te wisselen. Wat gebeurt er dan? Begrijp jij hoe lagen getekend worden?


## Kleuren wijzigen

Elke laag heeft een aantal eigenschappen die je kunt wijzigen.

Voeg bijvoorbeeld dit toe na de regel `laag(Achtergrond)`:

```js
wijzig("kleur", "donkergroen")
```

Wat verandert er?

Probeer andere kleuren! Je kunt een naam opgeven (`"lichtblauw"`), een getal van 0 tot 100 (`0` is bijvoorbeeld rood, `20` is geel, enz.).

Kun je de `Vorm` en `Tekst` lagen ook andere kleuren geven?

Wat gebeurt er als je als kleur `kleur.regenboog()` gebruikt (zonder aanhalingstekens!)? En `kleur.regenboog(10)`?

> **TIP:** Als er iets misgaat, kun je je laatste wijzigingen ongedaan maken met <kbd>Ctrl+Z</kbd>: houd <kbd>Ctrl</kbd> ingedrukt en druk (een paar keer) op <kbd>Z</kbd>.



## Andere eigenschappen wijzigen

Elke laag heeft andere eigenschappen die je kunt wijzigen.

Als je bijvoorbeeld de `Vorm` laag een cirkel wilt laten tekenen:

```js
wijzig("vorm", vorm.cirkel())
```

Let op waar je deze regel plaatst! Zet `wijzig` altijd *na* de `laag` die je wilt wijzigen.

Er zijn ook andere vormen:

![vormen](./images/vormen.png)

Natuurlijk kun je de tekst aanpassen:

```js
wijzig("tekst", "Coding is cool!")
```

<img style='float: right;' src='./images/lettertypes.png' alt='lettertypes' />

> **TIP**: wil je tekst op meerdere regels? Gebruik `\n` om een nieuwe regel te beginnen!

Je kunt ook een ander lettertype gebruiken:

```js
wijzig("lettertype", "handschrift")
```

Alles staat nu nog stil, maar daar gaan we verandering in brengen, met [effecten](3%20-%20effecten.html)!

<p style='font-size: 150%; font-weight: bold; text-align: right;'>
    <a href='./3%20-%20effecten.html'>Volgende stap <img style='margin: -0.4em 0.5em; float: right; width: 10%' src='images/arrow.png'></a>
</p>

<blockquote>
<details>
  <summary><u><b>TIP:</b> wil je liever meteen de zomervakantie-demo bekijken en veranderen? Klik hier!</u></summary>

<p>In plaats van stap voor stap leren kun je ook in het diepe springen en zelf met de code van de zomervakantie-demo spelen:</p>

<ul>
<li><a target='_blank' href='voorbeeld/zomervakantie/'>Draai de demo</a></li>
<li><a target='_blank' href='voorbeeld/zomervakantie/demo.js'>Bekijk de code</a> (kopieer/plak stukjes in je eigen demo!)</li>
</ul>

</details>
</blockquote>