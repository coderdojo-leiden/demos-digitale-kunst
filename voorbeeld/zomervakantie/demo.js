function maakDemo()
{ 


//--------------------------------------------------------------------

// De achtegrond: effen kleur die verandert tussen twee tinten blauw
laag(Achtergrond)
wijzig("kleur", kleur.overgang(80, kleur.rgb(50,50,100), kleur.rgb(20,20,100)))


//--------------------------------------------------------------------
// Twee doorzichtige hartjes die door het beeld stuiteren

laag(Vorm)
wijzig("vorm", vorm.hart())
wijzig("kleur", kleur.rgb(100, 0, 0, getal.golf(50, 20, 100)))
laag(Verplaats)
wijzig("pad", pad.stuiter(90, 130, 700, 450))

laag(Vorm)
wijzig("vorm", vorm.hart())
wijzig("kleur", kleur.rgb(100, 0, 0, getal.golf(50, 20, 100, 25)))
laag(Verplaats)
wijzig("pad", pad.stuiter(150, 210, 700, 450))


//--------------------------------------------------------------------
// Twee lagen met cirkels die verschuiven, plus een zon die draait en groter en kleiner wordt
// De drie lagen samen bewegen op en neer!

laag(Cirkels)
wijzig("kleur", kleur.rgb(100, 100, 0, 15))
wijzig("dikte", 12)
wijzig("afstand", getal.golf(50, 70, 100))
laag(Verplaats)
wijzig("pad", pad.links(getal.golf(40, 50)))

laag(Cirkels)
wijzig("kleur", kleur.rgb(100, 100, 0, 15))
wijzig("dikte", 12)
wijzig("afstand", getal.golf(50, 70, 100))
laag(Verplaats)
wijzig("pad", pad.rechts(getal.golf(40, 50)))

// Zon
laag(Vorm)
wijzig("vorm", vorm.zon())
wijzig("kleur", kleur.rgb(100, 100, 30))
laag(Draai)
wijzig("hoek", getal.teller(40, 0, 360))
laag(Grootte)    // zon wordt groter en kleiner
wijzig("grootte", getal.golf(30, 100, 300))

// Groepeer de cirkel-lagen en de zon, zodat we ze samen kunnen verplaatsen
groepeer_lagen(3)
laag(Verplaats)
wijzig("pad", pad.y(getal.golf(60, 200)))


//--------------------------------------------------------------------
// De lange tekst die onderaan het scherm voorbij rolt

laag(Tekstrol)
wijzig("kleur", kleur.regenboog(100))
wijzig("lijnkleur", kleur.rgb(0,0,0))  // randje om de tekst
wijzig("lettertype", "wildwest")
wijzig("hoogte", getal.golf(30))          // laat de letters golven
wijzig("tekst", `
    Yessss! Het is zomervakantie!
    Ik ga lekker zwemmen, ijsjes eten, naar het strand en natuurlijk naar de CoderDojo!
    En ik ga ook nog op vakantie naar Frankrijk!
    Wat ga jij doen? Veel plezier alvast................................!
`)
// zet onderaan het scherm
laag(Verplaats)
wijzig("pad", pad.omlaag(350))



//--------------------------------------------------------------------
// Twee regels tekst die ten opzichte van elkaar bewegen
// en elke 6 seconden een andere tekst tonen

laag(Tekst)
wijzig("tekst", tekst.wissel(60, "Het is weer", "Lots of fun"))
wijzig("kleur", kleur.wissel(30, "rood", "groen", "paars", "oranje", "zwart", "cyaan", "roze", "bruin", "grijs"))
wijzig("lijnkleur", "zwart")    // randje om de tekst
wijzig("lettertype", "cartoon")
laag(Verplaats)
wijzig("pad", pad.links(getal.golf(20, 50)))

laag(Tekst)
wijzig("tekst", tekst.wissel(60, "zomervakantie!", "in the sun"))
wijzig("kleur", kleur.wissel(30, "rood", "groen", "paars", "oranje", "zwart", "cyaan", "roze", "bruin", "grijs"))
wijzig("lijnkleur", "zwart")
wijzig("lettertype", "cartoon")
laag(Verplaats)
wijzig("pad", pad.omlaag(60))
laag(Verplaats)
wijzig("pad", pad.rechts(getal.golf(20, 50)))

// Groepeer de twee regels tekst zodat we ze samen kunnen verplaatsen, draaien en schalen
groepeer_lagen(2)
laag(Grootte)
wijzig("grootte", 160)
laag(Draai)
wijzig("hoek", getal.golf(25, 20))
laag(Verplaats)
wijzig("pad", pad.lissa(30, 40, 500, 250))
laag(Verplaats)
wijzig("pad", pad.omhoog(200))


// Lekker deuntje eronder en klaar!
muziek('3EkGR2Y5QNY')


// --------- HIER EINDIGT JE DEMO --------------

}
