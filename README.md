# WDD notes

## HCD notities

### Week 1

In de eerste week kregen wij vrij weinig informatie met betrekking tot onze opdracht. Wel konden we op donderdag in een interview met Eric wat meer informatie verzamelen over wat er van ons verwacht wordt.

Dit zijn de ruwe aantekeningen:

**Interview Eric (03/04/2024)**

- Hoe groot zijn de belemmeringen in de trein? Kan je helemaal uitschieten met je vinger of gaat het meer om de precisie van een kleine knop?
- Eric (52) heeft een aandoening vanaf de geboorte waarbij pezen en spieren niet ontwikkeld zijn.
- Kan zijn arm niet naar buiten en ook niet hoger dan een paar centimeter.

**Het probleem:**

- Bepaalde bewegingen zijn minimaal.
- Zodra er met de trein gereisd wordt, is er te veel beweging en wil hij graag specifieker kunnen typen. Spraak is geen optie.
- In de trein luistert hij veel naar podcasts en verstuurt hij berichten.
- Swipen gaat moeizaam doordat de stylus wat ouder is.
- Arm en schouder worden moe doordat er geen ondersteuning is.
- Cijfers in beeld brengen is belangrijk, want dat scheelt extra stappen.
- Het mag wat langzamer gaan, zolang het maar functioneert.
- Autocorrect is een 'nice to have'.
- De notitiegrootte verschilt per bericht heel erg. Nu wordt er, zodra de trein stilstaat, snel getypt.
- Toetsenbord moet kunnen switchen tussen de normale en de speciale versie.
- Testen volgende week: neem een prototype mee, deze wordt getest.
- Horizontaal gebruik wordt moeilijk doordat er geen goede reikwijdte is; ook valt de telefoon dan naar beneden.
- Verder is er met de verticale stand geen probleem met reikwijdte voor alle hoeken.
- Swipen is mogelijk. Van boven naar beneden is zeker een oplossing; er zitten geen haperingen in.
- Android-telefoon (Pixel) en werktelefoon (iPhone).

### Week 2

In week 2 hadden we de eerste test met Eric in de trein. Deze hadden we de week ervoor ingepland, maar hij bleek op het laatste moment afgemeld te worden. Dit gaf ons extra inzicht in hoe het is om een beperking te hebben. Verder zijn we gaan testen in de metro en mocht ik als eerste mijn test doen. Daarin heb ik een heel duidelijk beeld gekregen.

Mijn prototype bestaat uit het normale toetsenbord in 3 knoppen, maar zodra je een knop indrukt en naar links of rechts swipet, scroll je door het toetsenbord heen. Als je loslaat, typ je de desbetreffende letter in.

Bij de test bleek al heel gauw dat de trein van links naar rechts beweegt. Dat is verschrikkelijk onhandig als het toetsenbord ook van links naar rechts beweegt, want daardoor schiet je dus erg snel uit.

In de feedbackronde bleek ook al heel snel dat we verticaal gaan swipen in plaats van horizontaal. Verder waren er nog wat kleine feedbackpuntjes waarmee ik de week erop weer verder kon.

<img src="readme-img/Screenshot 2025-04-24 at 14.36.43.png">

### Week 3

Week 3 was duidelijk: ik wist wat ik moest doen. We gaan verticaal swipen en een preview maken, zodat wat je gaat invullen niet onder de stylus te zien is, maar groot in beeld verschijnt. Dit heb ik met behulp van een preview-div aangemaakt.

Deze komt nu groot boven in het scherm in een groen vlak, wat ook te zien is in de afbeelding van de test.
De test deze week gaf opnieuw waardevol inzicht: de rolstoel van Eric was kapot en werd die dag gerepareerd. Dit betekende dat hij niet in Amsterdam kon komen om met ons te testen. Nu was het aan ons om met behulp van klasgenoten elkaars prototypes te testen. Ik liet mijn prototype testen door Quy en daar kwamen ook een aantal verbeterpunten naar voren.

<img src="readme-img/Screenshot 2025-04-24 at 14.17.28.png">

Zoals je ziet, is het previewvak duidelijk in beeld. Wel was hier nog een verbeterpunt: je kunt niet duidelijk zien waar je bent op het toetsenbord. Hierdoor moet je gaan zoeken naar de juiste letter. Een verbetering zou zijn om in de preview nog wat meer letters te laten zien die ervoor en erna komen.

Ook was de gevoeligheid van de letters iets te laag, waardoor het uitschieten te snel ging. Hiervoor moest ik de pixels verhogen. Verder moesten uiteraard nog de spatie-, nummer-, shift- en backspace-knoppen toegevoegd worden. Dat was voor mij genoeg om de laatste week in te gaan.

### Week 4

De laatste week, en ook de meest productieve, want ik heb veel mogen doen deze week.
Als eerste heb ik de preview verbeterd. Ik heb hiervoor extra divjes aangemaakt om meer te laten zien. Met behulp van JavaScript laat ik zien welke letters er moeten komen.

Verder is ook het volledige toetsenbord naar boven gebracht. Hierin moesten de nodige functies verwerkt worden.

<img src="readme-img/Screenshot 2025-04-24 at 14.22.39.png">

Ook deze week hebben we weer een test gedaan, en gelukkig wel weer met Eric. Nu heb ik de laatste feedback ontvangen en daaruit kwam eigenlijk niet zoveel als ik had verwacht. Eric gaf eigenlijk alleen aan dat hij wat meer knoppen prettig zou vinden. Je ziet nu bijvoorbeeld bij de bovenste knop dat daar veel letters in zitten. Hierdoor moet je heel veel slepen op het scherm, wat wat ongemakkelijk wordt.

**Wat te doen als ik nog tijd had:**

Helaas kom ik nu tijd tekort om nog dingen aan te passen voor de deadline. Mocht ik nog wat willen aanpassen, dan zou ik het volgende doen:

1. **Meer knoppen, zoals Eric aangaf**
    
    Hiermee maak ik het makkelijker voor Eric om sneller door het toetsenbord te gaan. Ik kan daarmee het invoerveld wat kleiner maken om dan meer ruimte te reserveren voor de knoppen.
    
2. **Meer feedback op het indrukken van knoppen**
    
    Zodra er op een knop gedrukt wordt, zoals spatie of backspace, krijgt de gebruiker hier geen feedback op. Dat verslechtert de gebruikerservaring.
    
3. **Personalisatie in de gevoeligheid**
    
    Nu gaat de volgende letter na 70px zodra je sleept op het toetsenbord. Dit wil ik overlaten aan de gebruiker, zodat hij kan kiezen hoe ver je moet swipen. Dit wil ik dan het liefst doen met behulp van een slider.


    Bronnen:
    https://chatgpt.com/share/680b4f57-376c-8006-b3f6-b50d2d57208e

    https://developer.mozilla.org/en-US/docs/Web/API/Element/touchmove_event

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

    https://chatgpt.com/share/680b57f8-d288-8006-b3ee-c44a8fba4a36 
    