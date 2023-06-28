function maakDemo()
{ 

// --------- HIER BEGINT JE DEMO --------------


laag(Achtergrond)
wijzig("kleur", "donkergroen")

laag(Cirkels)
wijzig("kleur", "groen")
wijzig("dikte", 3)
wijzig("afstand", 30)
laag(Cirkels)
wijzig("kleur", "groen")
wijzig("dikte", 3)
wijzig("afstand", 30)
laag(Verplaats)
wijzig("pad", pad.rechts(getal.golf()))

laag(Vorm)
wijzig("vorm", vorm.cirkel())
wijzig("kleur", kleur.regenboog())
laag(Grootte)
wijzig("grootte", getal.golf(30, 50, 150))
laag(Vermenigvuldig)
wijzig("variatie", 30)
wijzig("aantal", 10)
wijzig("afstand", getal.golf(10, 150, 250))
laag(Draai)
wijzig("hoek", getal.teller(100, 0, 360))
laag(Grootte)
wijzig("grootte", getal.golf(10, 90, 110))

laag(Tekst)
wijzig("tekst", "Coding is cool!")
laag(Verplaats)
wijzig("pad", pad.omhoog(250))
laag(Draai)
wijzig("hoek", getal.golf(20, 50))
laag(Grootte)
wijzig("grootte", 120)


// --------- HIER EINDIGT JE DEMO --------------

}
