function maakDemo()
{ 

// --------- HIER BEGINT JE DEMO --------------


laag(Achtergrond)
wijzig("kleur", "lichtblauw")

laag(Lijnen)
wijzig("kleur", "#bbbbff")
wijzig("afstand", 40)
laag(Verplaats)
wijzig("pad", pad.omlaag(getal.teller(5, 0, 40)))
laag(Draai)
wijzig("hoek", 10);

laag(Vorm)
wijzig("vorm", vorm.vierkant())
wijzig("kleur", kleur.regenboog(100, 50))
laag(Vermenigvuldig)
wijzig("aantal", 2)
wijzig("variatie", 0)
laag(Draai)
wijzig("hoek", getal.teller(30, 0, 360))

laag(Vorm)
wijzig("vorm", vorm.cirkel())
wijzig("kleur", kleur.regenboog())
laag(Verplaats)
wijzig("pad", pad.x(getal.golf(30, -400, 400)))

laag(Vorm)
wijzig("vorm", vorm.cirkel())
wijzig("kleur", kleur.regenboog())
laag(Verplaats)
wijzig("pad", pad.x(getal.golf(-30, -400, 400)))


// --------- HIER EINDIGT JE DEMO --------------

}
