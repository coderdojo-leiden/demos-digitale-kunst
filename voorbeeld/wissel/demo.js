function maakDemo()
{ 

// --------- HIER BEGINT JE DEMO --------------

laag(Achtergrond)
wijzig("kleur", "lichtblauw")

laag(Vorm)
wijzig("vorm", vorm.wissel(50, vorm.cirkel(), vorm.hart(), vorm.ster()))
wijzig("kleur", "zwart")
laag(Vermenigvuldig)
wijzig("variatie", 2)
wijzig("aantal", getal.wissel(20, 3, 6, 12))
wijzig("afstand", getal.golf(10, 200, 260))
laag(Draai)
wijzig("hoek", getal.golf(50, 90))

// --------- HIER EINDIGT JE DEMO --------------

}
