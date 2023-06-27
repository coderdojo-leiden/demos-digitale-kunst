
// Maak het scherm leeg
class Achtergrond {

  constructor() {
    this.kleur = kleur.code("#000044")
  }

  teken() {
    background(this.kleur())
  }
}



// Vul het scherm met parallelle lijnen
class Lijnen {

  constructor() {
    this.kleur = kleur.hsb()
    this.kleurverloop = getal.vast(0)
    this.dikte = getal.vast(8)
    this.afstand = getal.vast(40)
  }

  lijnen(stap) {
    // Teken de lijnen wat groter dan het scherm, omdat we ze ook gaan draaien/verplaatsen
    const overloop = 2

    let y = BOVEN * overloop
    let dt = 0
    while (y <= ONDER * overloop) {
      stroke(this.kleur(dt))
      dt += this.kleurverloop() / 100

      // Teken horizontale lijn
      line(LINKS * overloop, y, RECHTS * overloop, y)

      // Door naar de volgende lijn
      y += stap
    }
  }

  teken() {
    // Zet de juiste kleur en lijndikte
    strokeWeight(this.dikte())
    stroke(this.kleur())
    this.lijnen(this.afstand())
  }
}


// Base class voor een effect dat op de laatst toegevoegde laag werkt
class LaagEffect  {
  constructor(effect) {
    this.laag = undefined
  }

  init(lagen) {
    this.laag = lagen.pop()
  }
}


// Teken een laag meerdere keren
class Vermenigvuldig extends LaagEffect {

  constructor() {
    super()
    this.duur = getal.vast(2)  // hoeveel wijzigt de vormgrootte van vorm naar vorm?
    this.aantal = getal.vast(7)
    this.afstand = getal.vast(200)
    // @@@ meerdere concentrische cirkels?
  }
  
  teken() {
    if (!this.laag)
      return
    let i = 0
    const n = floor(this.aantal())
    const d = this.duur()
    while (i < n) {
      const hoek = i * (360 / n)
      const dt = i / n * d
      push()
      try {
        rotate(radians(hoek))
        translate(0, this.afstand(dt))
        tijd += dt
        this.laag.teken()
        tijd -= dt
      } finally {
        pop()
      }

      // Door naar de volgende
      i += 1
    }
  }
}

class Grootte extends LaagEffect {

  constructor() {
    super()
    this.laag = undefined
    this.grootte = getal.golf(20, 100, 200)
  }

  init(lagen) {
    this.laag = lagen.pop()
  }

  teken() {
    if (!this.laag)
      return
    push()
    try {
      scale(this.grootte() / 100)
      this.laag.teken()
    } finally {
      pop()
    }
  }
}

// Toon debuglijnen voor translatie?
DEBUG_PLOT = loadVar("DEBUG_PLOT")

class Verplaats extends LaagEffect {

  constructor() {
    super()
    this.laag = undefined
    this.pad = pad.geen()
  }

  init(lagen) {
    this.laag = lagen.pop()
  }

  teken() {
    if (!this.laag)
      return
    push()
    try {
      const [x, y] = this.pad()
      if (DEBUG_PLOT) {
        blendMode(DIFFERENCE)
        stroke('white')
        strokeWeight(2)
        line(0, 0, x, y)
        blendMode(BLEND)
      }
      translate(x, y)
      this.laag.teken()
    } finally {
      pop()
    }
  }
}

class Draai extends LaagEffect {

  constructor() {
    super()
    this.laag = undefined
    this.hoek = getal.golf2()
  }

  init(lagen) {
    this.laag = lagen.pop()
  }

  teken() {
    if (!this.laag)
      return
    push()
    try {
      rotate(radians(this.hoek()))
      this.laag.teken()
    } finally {
      pop()
    }
  }
}


// plot een functie (nuttig voor debug)
class Plot {
  constructor() {
    this.tijdvak = getal.vast(5)
    this.getal = getal.golf(20)
    this.kleur = kleur.hsb(255, 0, 100)
    this.dikte = getal.vast(3)
    this.gap   = getal.vast(1)
  }

  teken() {
    // Zet kleur en dikte van de lijn
    stroke(this.kleur())
    strokeWeight(this.dikte())

    // Teken een aantal stukjes lijn die samen de functie vormen
    const gap = this.gap()
    const stappen = (RECHTS - LINKS) / gap
    const tijdstap = this.tijdvak() / stappen // hoeveel tijd verstrijkt er per stukje lijn?
    let nummer = 1
    let x1 = undefined
    let y1 = undefined
    let dt = 0;
    while (nummer <= stappen) {
      dt += tijdstap            // zet de tijd een klein beetje vooruit
      // bepaal het volgende punt
      let y2 = this.getal(dt)
      let x2 = nummer * gap - (RECHTS - LINKS) / 2
      if (x1 !== undefined)
        line(x1, y1, x2, y2)      // teken een stukje lijn
      x1 = x2                     // teken volgende lijnstuk vanaf dit punt
      y1 = y2
      nummer += 1                 // door naar het volgende lijnstuk
    }
  }
}


class Slang {
  constructor() {
    this.pad = pad.lissa()
    this.kleur = kleur.naam("wit")
    this.dikte = getal.vast(50)
    this.lengte = getal.vast(20)
  }

  set lijndikte(d) {
    this.dikte = d
  }

  set lijnkleur(c) {
    this.kleur = c
  }

  teken() {
    // Zet kleur en dikte van de lijn
    stroke(this.kleur())
    strokeWeight(this.dikte());

    // Teken een aantal stukjes lijn die samen de slang vorm
    const tijdstap = 3 / 100            // hoeveel tijd verstrijkt er per stukje lijn?
    const stappen = this.lengte() / 10 / tijdstap
    let nummer = 1
    let x1 = undefined
    let y1 = undefined
    let dt = 0;
    while (nummer <= stappen) {
      dt += tijdstap            // zet de tijd een klein beetje vooruit
      // bepaal het volgende punt
      let [x2, y2] = this.pad(dt)
      if (x1 !== undefined)
        line(x1, y1, x2, y2)      // teken een stukje lijn
      x1 = x2                     // teken volgende lijnstuk vanaf dit punt
      y1 = y2
      nummer += 1                 // door naar het volgende lijnstuk
    }
  }
}



class Plaatje {

  constructor() {
    this.naam = tekst.vast('logo.png')
    this.kleur = kleur.naam("wit")
  }

  // Roept tekenfunctie aan
  teken() {
    const naam = this.naam()

    // Teken het logo
    this.teken_plaatje(naam)
  }


  // Teken het logo
  teken_plaatje(naam, nummer, aantal, dt) {
    // Zet kleurtint
    tint(this.kleur(dt))

    // Teken logo
    push()
    scale(1, -1)
    try {
      image(plaatjes[naam], 0, 0)
    } finally {
      pop()
    }
  }
}

MAP_FONT = {
  "cartoon": "Coiny",
  "boek": "Bitter",
  "handschrift": "Satisfy",
  "computer": "Major Mono Display",
};

function mapFont(f) {
  if (f in MAP_FONT)
    return MAP_FONT[f];
  return f;
}

class LaagMetKleurEnRand {
  constructor() {
    this.kleur = kleur.naam("wit")
    this.lijnkleur  = undefined
    this.lijndikte = getal.vast(2)
  }

  voorTeken() {
    fill(this.kleur())
    if (this.lijnkleur === undefined)
      noStroke()
    else {
      stroke(this.lijnkleur())
      strokeWeight(this.lijndikte())
    }
  }
}


class Vorm extends LaagMetKleurEnRand{

  constructor() {
    super()
    this.vorm = vorm.vierkant()
    this.kleur = kleur.naam("rood")
  }

  teken() {
    // Zet kleurtint
    this.voorTeken()

    // Teken logo
    push()
    scale(1, -1)
    try {
      this.vorm()
    } finally {
      pop()
    }
  }

}

class Tekst extends LaagMetKleurEnRand {

  constructor() {
    super()
    this.tekst = tekst.vast("Hallo")
    this._lettertype = tekst.vast("Bitter")
  }

  set lettertype(t) {
    this._lettertype = (dt) => {
      return mapFont(t(dt));
    };
  }

  teken() {
    const t = this.tekst()

    textSize(80)
    textFont(this._lettertype())
    textAlign(CENTER, CENTER)

    this.voorTeken()

    // Teken logo
    push()
    scale(1, -1)
    try {
      text(t, 0, 0)
    } finally {
      pop()
    }
  }

}


class Tekstrol extends LaagMetKleurEnRand {
  constructor() {
    super()
    this.spaties = " ".repeat(100)
    this._tekst = this.spaties + "DIT IS EEN TE(K)ST!                  "
    this.snelheid = getal.vast(10)
    this.grootte = getal.vast(80)
    this.lettertype = tekst.vast("Coiny")
    this.hoogte = getal.vast(0) //getal.golf(20, -100, 100)
    this.kleur = kleur.hsb(40) //kleur.regenboog(10)
    this.kleurvariatie = getal.vast(10)

    this._scrollChar = 0;       // Index in tekst van de eerste letter die we tonen
    this._charWidth = -1;       // Breedte van huidige karakter
    this._scrollPos = 0;        // Hoeveel pixels we deze letter naar LINKS hebben verschoven (bepaalt wanneer we de volgende letter tonen)
  }

  set tekst(t) {
    if (typeof t !== "string")
      t = t()
    // Zorg dat de tekstrol rechts begint
    this._tekst = this.spaties + t;
  }

  teken() {
    push();
    scale(1, -1);
    try {
      /*
      fill(0, 80)
      noStroke()
      rect(0, 0, RECHTS - LINKS, 200)
      */

      textSize(this.grootte());
      textFont(this.lettertype()); 
      textAlign(LEFT, CENTER);

      this.voorTeken()

      // Teken de tekst
      let i = this._scrollChar
      if (this.cha_charWidthrWidth == -1)
        this._charWidth = textWidth(this._tekst[i])
      const OVERLOOP = 50
      let x = -this._scrollPos + LINKS - OVERLOOP
      while (x < RECHTS + OVERLOOP) {
        fill(this.kleur(i * this.kleurvariatie() / 100))
        text(this._tekst[i], x, this.hoogte(i / 30))
        x += textWidth(this._tekst[i])
        i += 1
        if (i >= this._tekst.length)
          i = 0
      }

      // Scroll naar links
      this._scrollPos += this.snelheid()
      while (this._scrollPos >= this._charWidth) {
        // Deze letter is van het scherm af; begin volgende keer bij de volgende letter
        this._scrollChar += 1
        if (this._scrollChar >= this._tekst.length)
          this._scrollChar = 0
        this._scrollPos -= this._charWidth
        this._charWidth = textWidth(this._tekst[this._scrollChar])
      }
    } finally {
      pop()
    }
  }
}


// Groepeer lagen
class Groep {
  constructor() {
    this.aantal = 2
    this.lagen = []
  }

  init(lagen) {
    for (let i = 0; i < this.aantal; i++) {
      const e = lagen.at(-this.aantal + i);
      this.voegToe(e);
    }
    lagen.splice(-this.aantal, this.aantal, groep);
  }

  voegToe(...lagen) {
    this.lagen.push(...lagen)
  }

  teken() {
    for (let laag of this.lagen) {
      if (!laag.verberg)
        laag.teken()
    }
  }
}
