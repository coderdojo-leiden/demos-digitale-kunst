function maakDemo()
{ 

// --------- HIER BEGINT JE DEMO --------------


laag(Achtergrond)
wijzig("kleur", "lichtblauw")

laag(Tekstrol)
wijzig("tekst", `
Dit is een tekstrol.
Je kunt hier je eigen tekst zetten.
Hij kan zo lang worden als je wilt.
Doei..................!
`)
wijzig("kleur", "zwart")
wijzig("lettertype", "boek")
wijzig("grootte", 120)
wijzig("hoogte", getal.golf(20, 200))

// --------- HIER EINDIGT JE DEMO --------------

}
