function maakDemo()
{ 

laag(Achtergrond)
wijzig("kleur", "lichtblauw")

laag(Vorm)
wijzig("vorm", vorm.cirkel())
wijzig("kleur", kleur.wissel(10, "rood", "groen", "blauw"))
laag(Verplaats)
wijzig("pad", pad.lissa())

laag(Tekst)
laag(Verplaats)
wijzig("pad", pad.omhoog(250))
laag(Draai)
wijzig("hoek", getal.golf(20, 50))
laag(Grootte)
wijzig("grootte", 120)

// groepeer_lagen(3)
// laag(Grootte)
// wijzig("grootte", getal.puls(20, 100, 250))
// laag(Draai)
// wijzig("hoek", getal.golf(50, 20))
// laag(Verplaats)
// wijzig("pad", pad.lissa())

}
