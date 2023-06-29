// Opstartcode
// ==========================================

tijd = 0

let SCHERMVERHOUDING = 1
let LINKS = 0
let RECHTS = 0
let BOVEN = -500
let ONDER = 500
let TRANSPARANT = null // set in setup()

plaatjes = {}

demoObj = undefined

demoSetup = []

// Wordt aangeroepen om plaatjes te laden
function preload() {
  maakDemo()
}

// Laad een aantal plaatjes in de images map
function laadPlaatjes(...namen) {
  if (namen.length == 1 && Array.isArray(namen[0]))
    namen = namen[0]
  for (naam of namen) {
    plaatjes[naam] = loadImage(`plaatjes/${naam}`)
  }
}

// Wordt 1x aangeroepen aan het begin
function setup() {
  // Wijzig kleurmode
  colorMode(HSB, 100);

  // Teken rechthoeken vanuit het midden
  rectMode(CENTER);
  imageMode(CENTER);
  
  // Maak canvas aan
  createCanvas(window.innerWidth, window.innerHeight)

  // Maak canvas leeg
  background(0)

  // Maak offscreen buffer, voor e.g. transparante effecten,
  // fade-in/out, etc. (TODO)
  //buffer = createGraphics(width, height)
  
  TRANSPARANT = color(0, 0, 0, 0)


  // Voer de commando's in het demo array uit om het
  // demo object te maken dat we kunnen tekenen
  const lagen = []
  demoSetup.forEach(cmd => cmd(lagen))
  demoObj = new Groep()
  demoObj.voegToe(...lagen)
}

gepauzeerd = false
snelheid = 1.0

// Wordt elk frame aangeroepen
function draw() {
  // Zet de variable tijd op de huidige tijd
  if (!gepauzeerd) {
    tijd += snelheid/60 //millis() / 1000
  }

  // Schaal alles zodat we van -500 tot 500 werken
  // (of iets meer in 1 richting, omdat we de aspect ratio behouden)
  if (width > height) {
    LINKS = -500 * width / height
    RECHTS = 500 * width / height
    BOVEN = -500
    ONDER = 500
  } else {
    BOVEN = -500 * height / width
    ONDER = 500 * height / width
    LINKS = -500
    RECHTS = 500
  }
  grootte = min(width, height) / 1000
  push()
  translate(width / 2, height / 2)
  scale(grootte, -grootte)
  try {
    if (demoObj)
    demoObj.teken()
  } finally {
    pop()
  }
}

// Teken effect met evt. modifiers
function tekenEffect(effect) {
  effect.teken()
}

// Wanneer het venster van grootte verandert...
function windowResized(e) {
  // ...verander dan ons canvas mee!
  resizeCanvas(window.innerWidth, window.innerHeight)
  //resizeGraphics()
  background(0)
}

function keyTyped(event) {
  switch (event.key) {
  case ' ':
    gepauzeerd = !gepauzeerd
    if (snelheid === 0) {
      snelheid = 1
      gepauzeerd = false
    }
    break
  case '.': case '>':
    if (gepauzeerd) {
      gepauzeerd = false
      snelheid = 1
      break
    }
    snelheid++
    if (snelheid > 5)
      snelheid = 5
    console.log(`snelheid = ${snelheid}`)
    break
  case ',': case '<':
    if (gepauzeerd) {
      gepauzeerd = false
      snelheid = -1
    }
    snelheid--
    if (snelheid < -5)
      snelheid = -5
    console.log(`snelheid = ${snelheid}`)
    break
  case '-':
    setDebugPlot(!DEBUG_PLOT)
    break
  }
}

function setDebugPlot(b) {
  DEBUG_PLOT = b
  saveVar('DEBUG_PLOT', DEBUG_PLOT);
  console.log(`DEBUG_PLOT = ${DEBUG_PLOT}`)
}

function keyPressed(event) {

  const lagen = demoObj.lagen
  if (event.code === 'Backquote') {
    // Schakel alle lagen aan en zet snelheid op normaal
    for (let i = 0; i < lagen.length; i++) {
      lagen[i].verberg = false
    }
    snelheid = 1.0
    gepauzeerd = false
    setDebugPlot(false)
    return false;
  }
  if (event.code.substr(0, 5) === 'Digit') {
    let n = parseInt(event.code.substr(5))
    const onlyThis = event.ctrlKey
    if (event.shiftKey)
      n += 10;
    console.log(n)
    if (n < lagen.length) {
      if (onlyThis) {
        for (let i = 1; i < lagen.length; i++) {
          lagen[i].verberg = i != n
        }
      } else {
        lagen[n].verberg = !lagen[n].verberg
      }
    }
    return false;
  }
}

function saveVar(name, value) {
  localStorage.setItem(name, JSON.stringify(value))
}

function loadVar(name, defaultValue) {
  const value = localStorage.getItem(name)
  return value === null ? defaultValue : JSON.parse(value)
}

// Kleuren
// ==========================================

function _knipper(kleur, duur = 10, start = 0) {
  tr = color(hue(kleur), saturation(kleur), lightness(kleur), 50)
  duur /= 10
  return lerpColor(TRANSPARANT, kleur, sin((tijd + start) * TWO_PI / duur) * 0.5 + 0.5)
}

// Maak een kleur doorzichtig
function _doorzichtig(kleur, doorzichtigheid = 50) {
  tr = color(hue(kleur), saturation(kleur), lightness(kleur), 0)
  return lerpColor(kleur, tr, doorzichtigheid / 100)
}

const KLEUREN_NL = {
  rood: "red",
  groen: "green",
  blauw: "blue",
  cyaan: "cyan",
  paars: "purple",
  geel: "yellow",
  oranje: "orange",
  roze: "pink",
  bruin: "brown",
  grijs: "gray",
  zwart: "black",
  wit: "white",
}

const kleur = {
  waarde(v) {
    if (typeof v === 'string')
      return kleur.naam(v)
    return kleur.hsb(echtEenGetal(v))
  },
  naam(n) {
    let prefix = '';
    if (n.startsWith("donker")) {
      n = n.substr(6)
      prefix = 'dark'
    } else if (n.startsWith("licht")) {
      n = n.substr(5)
      prefix = 'light'
    }
    if (KLEUREN_NL[n])
      n = KLEUREN_NL[n]
    if (prefix.length > 0)
      n = prefix + n
    return (dt=0) => color(n)
  },
  code(c) {
    return kleur.naam(c)
  },
  hsb(h = 100, s = 100, b = 100) {
    return (dt=0) => color(h, s, b)
  },
  rgb(r = 100, g = 100, b = 0) {
    return (dt=0) => {
      colorMode(RGB, 100)
      const c = color(r, g, b)
      colorMode(HSB, 100)
      return c
    }
  },
  regenboog(duur = 100, start = 0, doorzichtigheid = 0, sat = 100, val = 100) {
    function _regenboog(duur, start, doorzichtigheid, sat, val) {
      _tint = ((tijd + start + 100000) * 100 / duur) % 100
      return color(_tint, sat, val, 100 - doorzichtigheid)
    }
    duur /= 10
    start /= 10
    return (dt=0) => {
      return _regenboog(duur, start + dt, doorzichtigheid, sat, val)
    }
  },
  willekeurig(d = 10) {
    d /= 10
    return (dt=0) => {
      const t = tijd + dt;
      randomSeed(floor(t / d))
      colorMode(RGB, 100)
      const c = color(random(100), random(100), random(100))
      colorMode(HSB, 100)
      return c
    }
  },
  doorzichtig(kleur, doorzichtigheid = 50) {
    return (dt=0) => _doorzichtig(kleur(dt), doorzichtigheid)
  },
  wissel(duur = 10, ...kleuren) {
    kleuren = kleuren.map(k => echtEenFunctie(k, 'kleur'))
    duur /= 10
    return (dt=0) => {
      const i = floor((tijd + dt) / duur) % kleuren.length
      return kleuren[i](dt)
    }
  }
}


// Getalfuncties
// ==========================================

const getal = {
  // Waarde blijft hetzelfde
  vast(waarde = 0) {
    return (dt=0) => waarde
  },

  // Tel functies bij elkaar op
  som(...funcs) {
    funcs = funcs.map(f => echtEenFunctie(f))
    return (dt=0) => funcs.reduce((a, b) => a + b(dt), 0)
  },

  // Bepaal verschil van functie
  verschil(funca, funcb) {
    funca = echtEenFunctie(funca)
    funcb = echtEenFunctie(funcb)
    return (dt=0) => funca(dt) - funcb(dt)
  },

  // Deel een functie door de andere
  deel(funca, funcb) {
    funca = echtEenFunctie(funca)
    funcb = echtEenFunctie(funcb)
    return (dt=0) => {
      const d = funcb(dt)
      if (d === 0)
        d = 0.0001
      return funca(dt) / d
    }
  },

  // Vermenigvuldig functies met elkaar
  keer(funca, funcb) {
    funca = echtEenFunctie(funca)
    funcb = echtEenFunctie(funcb)
    return (dt=0) => funca(dt) * funcb(dt)
  },

  // Absolute waarde van een functie (negatief wordt positief)
  abs(func) {
    func = echtEenFunctie(func)
    return (dt=0) => abs(func(dt))
  },

  // Behoud alleen de positieve waarden van een functie
  pos(func, drempel = 0) {
    func = echtEenFunctie(func)
    return (dt=0) => max(func(dt), drempel)
  },

  // Rond af op gehele getallen
  afronden(func) {
    func = echtEenFunctie(func)
    return (dt=0) => round(func(dt))
  },

  // Waarde varieert met een golfpatroon tussen min en max
  golf(duur = 100, min, max, start = 0) {
    if (min === undefined && max === undefined) {
      // standaardwaardes
      min = -100
      max = 100
    } else if (max === undefined) {
      // derde argument weggelaten; tweede is amplitude
      max = abs(min)
      min = -max
    }
    if (duur == 0)
      duur = 100 // voorkom delen door nul
    duur /= 10
    start /= 10
    return (dt=0) => {
      return (max - min) * (sin( (tijd + start + dt) * TWO_PI / duur) + 1) / 2 + min
    }
  },

  zigzag(duur = 10, min, max, start = 0) {
    if (min === undefined && max === undefined) {
      // standaardwaardes
      min = -100
      max = 100
    } else if (max === undefined) {
      // derde argument weggelaten; tweede is amplitude
      max = abs(min)
      min = -max
    }
    if (duur == 0)
      duur = 100 // voorkom delen door nul
    duur /= 10
    const verschuif = (start / 100 - 0.25) * duur
    return (dt = 0) => {
      const q = (tijd - verschuif + dt) % duur
      if (q < duur / 2) {
        // Zig
        return (max - min) * (q / (duur / 2)) + min
      } else {
        // Zag
        return (max - min) * (1 - (q - duur / 2) / (duur / 2)) + min
      }
    }
  },

  puls(duur = 10, min, max, start = 0) {
    if (min === undefined && max === undefined) {
      // standaardwaardes
      min = -100
      max = 100
    } else if (max === undefined) {
      // derde argument weggelaten; tweede is amplitude
      max = abs(min)
      min = -max
    }
    const amp = (max - min) / 2
    return getal.som(getal.pos(
      getal.golf(duur, min - amp, max, start), 
      min + amp*0.6), -amp*0.6)
  },

  // Golfpatroon, alternatieve parameters
  golf2(snelheid = 100, grootte = 100, verticaal = 0, horizontaal = 0) {
    const duur = 100 / snelheid
    const verschuif = horizontaal * duur / 100
    return (dt = 0) => grootte * sin((tijd - verschuif + dt) * TWO_PI / duur) + verticaal
  },

  // Zigzag, alternatieve parameters
  zigzag2(snelheid = 100, grootte = 100, verticaal = 0, horizontaal = 0) {
    if (snelheid === 0)
      snelheid = 0.000001
    const duur = 100 / snelheid
    const verschuif = (horizontaal - 25) * duur / 100
    return (dt = 0) => {
      const q = (tijd - verschuif + dt) % duur
      if (q < duur / 2)
        return grootte * 2 * (q / (duur / 2) - 0.5) + verticaal
      else
        return grootte * 2 * ((1 - (q - duur / 2) / (duur / 2)) - 0.5) + verticaal
    }
  },

  // Waarde loopt op en begint weer overnieuw
  teller(duur = 100, min = 0, max = 100, start = 0) {
    const richting = max > min ? 1 : -1
    const bereik = Math.abs(max - min);
    return (dt=0) => richting * ((tijd + start + dt) * bereik * 10 / duur) % bereik + min
  },

  wilde_slinger() {
    return getal.som(30, getal.golf2(), getal.golf2(130, 50))
  },

  onregelmatige_puls() {
    return getal.pos(getal.wilde_slinger())
  },

  wiegen() {
    return getal.golf(50, 20)
  },

  langzaam_wiegen() {
    return getal.golf(100, 10)
  }
}

const tekst = {
  vast(t) {
    return (dt=0) => t
  },
  wissel(duur = 10, ...teksten) {
    teksten = teksten.map(k => echtEenFunctie(k))
    duur /= 10
    return (dt=0) => {
      const i = floor((tijd + dt) / duur) % teksten.length
      return teksten[i](dt)
    }
  },
}


const pad = {
  lissa(d1 = 53, d2 = 39, a1 = 450, a2 = 450, s1 = 0, s2 = 0) {
    const g1 = getal.golf(d1, -a1, a1, s1)
    const g2 = getal.golf(d2, -a2, a2, s2)
    return (dt=0) => [g1(dt), g2(dt)]
  },
  stuiter(dx = 20, dy = 30, ax = 500, ay) {
    if (!ay)
      ay = ax
    return pad.xy(getal.zigzag(dx, ax), getal.zigzag(dy, ay))
  },
  cirkel(d = 60, a = 450, s = 0) {
    return pad.lissa(-d, -d, a, a, s, s - d / 4);
  },
  rechts(func) {
    func = echtEenFunctie(func)
    return (dt=0) => [func(dt), 0]
  },
  links(func) {
    func = echtEenFunctie(func)
    return (dt=0) => [-func(dt), 0]
  },
  omhoog(func) {
    func = echtEenFunctie(func)
    return (dt=0) => [0, func(dt)]
  },
  omlaag(func) {
    func = echtEenFunctie(func)
    return (dt=0) => [0, -func(dt)]
  },
  xy(funcx, funcy) {
    funcx = echtEenFunctie(funcx)
    funcy = echtEenFunctie(funcy)
    return (dt=0) => [funcx(dt), funcy(dt)]
  },
  geen() {
    return (dt=0) => [0, 0]
  },
  deel(func, n) {
    return pad.keer(func, 1 / n)
  },
  keer(func, n) {
    func = echtEenFunctie(func)
    return (dt=0) => func(dt).map(x => x * n)
  },
  som(...funcs) {
    funcs = funcs.map(f => echtEenFunctie(f))
    return (dt=0) => {
      const res = [0, 0]
      for (const f of funcs) {
        const [x, y] = f(dt)
        res[0] += x
        res[1] += y
      }
      return res
    }
  }
}
pad.x = pad.rechts;
pad.y = pad.omhoog;

// from https://p5js.org/examples/form-regular-polygon.html
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = -PI/2; a < PI * 1.5; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

const vorm = {
  naam(n) {
    if (typeof n === "string")
      n = n.toLowerCase()
    if (n in vorm)
      return vorm[n]()
    throw `Onbekende vorm ${n}`
  },
  cirkel(grootte = 100) {
    return () => circle(0, 0, grootte)
  },
  vierkant(grootte = 100) {
    return () => rect(0, 0, grootte, grootte)
  },
  driehoek(grootte = 100) {
    return () => triangle(-grootte/2, grootte/2, grootte/2, grootte/2, 0, -grootte/2)
  },
  veelhoek(hoeken = 5, grootte = 100) {
    hoeken = echtEenFunctie(hoeken)
    return (dt=0) => polygon(0, 0, grootte, hoeken(dt))
  },
  zon(grootte = 100) {
    return vorm.ster(18, grootte)
  },
  ster(hoeken = 5, grootte = 100) {
    hoeken = echtEenFunctie(hoeken)
    return (dt=0) => {
      const hoek = TWO_PI / hoeken(dt)
      beginShape()
      for (let i = 0; i < hoeken(dt); i++) {
        const x = cos(-PI/2 + i * hoek) * grootte
        const y = sin(-PI/2 + i * hoek) * grootte
        vertex(x, y)
        const x2 = cos(-PI/2 + (i + 0.5) * hoek) * grootte * 0.4
        const y2 = sin(-PI/2 + (i + 0.5) * hoek) * grootte * 0.4
        vertex(x2, y2)
      }
      endShape(CLOSE)
    }
  },
  hart(grootte = 100) {
    return (dt=0) => {
      const x = 0, y = -grootte * 0.4;
      beginShape();
      vertex(x, y);
      bezierVertex(x - grootte / 2, y - grootte / 2, x - grootte, y + grootte / 3, x, y + grootte);
      bezierVertex(x + grootte, y + grootte / 3, x + grootte / 2, y - grootte / 2, x, y);
      endShape(CLOSE);
    }
  },
  wissel(duur = 10, ...vormen) {
    vormen = vormen.map(k => echtEenFunctie(k, 'vorm'))
    duur /= 10
    return (dt=0) => {
      const i = floor((tijd + dt) / duur) % vormen.length
      return vormen[i](dt)
    }
  }
  //@@@ ster? hartje? ...
}

// Shortcuts
const k = kleur;
const g = getal;
const v = vorm;
const p = pad;
const t = tekst;


function laag(cls) {
  demoSetup.push((lagen) => {
    const l = new cls();
    if (l.init)
      l.init(lagen);
    lagen.push(l);
  })
}

function kopieer_laag() {
  demoSetup.push((lagen) => {
    lagen.push(kopie(bovensteLaag(lagen)));
  })
}

// Groepeer de laatste n toegevoegde lagen
function groepeer_lagen(n = 2) {
  demoSetup.push((lagen) => {
    const groep = new Groep();
    for (let i = 0; i < n; i++) {
      const e = lagen.at(-n + i);
      groep.voegToe(e);
    }
    lagen.splice(-n, n, groep);
  })
}

// Wijzig eigenschap van een laag
function wijzig(naamEigenschap, nieuweWaarde) {
  nieuweWaarde = echtEenFunctie(nieuweWaarde, naamEigenschap);
  demoSetup.push((lagen) => {
    bovensteLaag(lagen)[naamEigenschap] = nieuweWaarde;
  })
}

// Geef laatst toegevoegde effect terug 
function bovensteLaag(lagen) {
  if (lagen.length == 0)
    throw "Kan commando niet uitvoeren, er zijn nog geen lagen!";
  return lagen.at(-1);
}

// deep copy obj
function kopie(obj) {
  return Object.assign(
      Object.create(
          Object.getPrototypeOf(obj)
      ),
      obj
  );
}

// Zet een getal of tekst om in een functie die de waarde retourneert
// (of een kleur, als optKleurEigenschap true is of op "kleur" eindigt)
function echtEenFunctie(waarde, naamEigenschap = '') {
  const isKleur = naamEigenschap.endsWith("kleur");
  const isVorm = naamEigenschap.endsWith("vorm");
  switch (typeof waarde) {
  case "number":
    if (isKleur)
      return kleur.hsb(waarde)
    if (isVorm)
      return vorm.veelhoek(waarde)
    return getal.vast(waarde)
  case "string":
    if (isKleur)
      return kleur.naam(waarde)
    else if (isVorm)
      return vorm.naam(waarde)
    return tekst.vast(waarde)
  }
  return waarde;
}

// Als de parameter geen getal is, retourneer dan 0
function echtEenGetal(n) {
  return typeof n === "number" ? n : 0;
}

function muziek(id) {
  document.getElementById("musicframe").src = `https://www.youtube.com/embed/${id}?autoplay=1`
}