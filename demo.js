function maakDemo()
{ 

// --------- HIER BEGINT JE DEMO --------------


laag(Achtergrond)
wijzig("kleur", "lichtblauw")

laag(Lijnen)
wijzig("kleur", "#bbbbff")
wijzig("afstand", getal.golf(100, 40, 50))

laag(Vorm)
wijzig("vorm", vorm.cirkel())
wijzig("kleur", kleur.regenboog())
laag(Verplaats)
wijzig("pad", pad.x(getal.golf(30, -100, 300)))

laag(Vorm)
wijzig("vorm", vorm.cirkel())
wijzig("kleur", kleur.regenboog())
laag(Verplaats)
wijzig("pad", pad.x(getal.golf(-30, -300, 100)))

laag(Tekst)
wijzig("tekst", "Coding is cool!")
wijzig("kleur", "zwart")
laag(Grootte)
wijzig("grootte", getal.golf(20, 75, 125))
laag(Verplaats)
wijzig("pad", pad.omhoog(250))


// --------- HIER EINDIGT JE DEMO --------------

}
