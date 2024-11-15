# Bieb in Bloei - Styleguide
Hier vind je de styleguide die gebruikt wordt door het team Bieb in Bloei van squad G1. In deze styleguide gaan we in op de styling van kleuren, typografie, formulieren, knoppen en afspraken.

Linkje naar de styleguide: https://kimnikitaschijf.github.io/look-and-feel-styleguide/

## Kleuren
We hebben de kleuren opgedeeld in 2 categoriëen: Elementkleuren & tekstkleuren. De elementkleuren bevatten een omschrijving van de kleur zoals 'lightgreen' en de tekstkleur wordt omschreven als: 'text-darkgreen'.

<img width="566" alt="image" src="https://github.com/user-attachments/assets/ec1a6a04-d15d-440e-938d-3c0fb85f5a9d">

## Typografie
Over de hele website heen wordt er gebruik gemaakt van het font 'Poppins'. De font wordt ingeladen doormiddel van font-faces. Hierin staan verschillende fontweights: Black, Bold, Medium, Regular. Voor de fontsizes maken we gebruik van een clamp. Op deze manier kunnen we de heading en overige tekst elementen responsive laten meeschalen waardoor we geen onnodige media queries hoeven te schrijven.

- Tekstuele elementen
<img width="146" alt="image" src="https://github.com/user-attachments/assets/034ea7ce-1514-42ff-87f1-8c04df990a22">
<img width="500" alt="image" src="https://github.com/user-attachments/assets/64404628-3c68-459f-8f1c-2d72071c9c7b">

## Formulieren
De formulieren hebben een styling gekregen in de kleuren en lettertypes van het huisstijl. De volgende elementen hebben we gestyled: 'Form', 'Input', 'Fieldset' & 'Legend'. 

<img width="500" alt="image" src="https://github.com/user-attachments/assets/4e1656df-8cb0-4027-a8b8-32f16744b601">

## Knoppen
De knoppen hebben we opgedeeld in 4 verschillende kleuren: Bruin, oranje, beige en groen. Deze knoppen hebben we allemaal doormiddel van een class los een styling gegeven. Op deze manier kan je de buttons gemakkelijk gebruiken op iedere pagina. Ook hebben linkjes een aparte styling gegeven. Zodra je een 'a' zonder class gebruikt zal hij automatisch de styling van de link overnemen.

<img width="180" alt="image" src="https://github.com/user-attachments/assets/c26d6a08-0937-4d3b-bdc4-8558908b3a06">

## Afspraken/overeenkomsten
Dit zijn de afgesproken regels m.b.t de stylesheet en het documenteren van classes in ieders individuele document:
1. Als je iets heb aangepast in de stylesheet overleg eerst met je teamleden voordat je deze code pusht naar Github. Dit zorgt ervoor dat je conflicten voorkomt.
2. Bij elke commit schrijf je de eerste letter van je naam en in het kort wat je hebt gedaan. Bijvoorbeeld: A - hier de omschrijving. Zo weten we wie welke commits heeft gedaan.
3. Iedereen luistert naar elkaar en respecteert elkaars mening.
4. We houden ons aan de besproken class namen. (zie voorbeeld)

Voorbeeld benaming classes:
<br>
<img width="400" alt="image" src="https://github.com/user-attachments/assets/f7166e8e-7e22-46ac-b4ef-d795c021c749">

Wanneer je een kleur wilt toevoegen kan je deze variaties gebruiken:
```css
/* Kleuren */
  --lightgreen: #4e7141;
  --beige: #f9e9c2;
  --orange: #ff8d06;
  --brown: #491b02;
  --darkgreen: #3c593e;

  --text-off-white: #fefefe;
  --text-darkgreen: #2C402D;
  --error-red: #ff0000;

  --button-active: #ff8d06;
  --button-hover: #ff8d06;
```
## -Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

