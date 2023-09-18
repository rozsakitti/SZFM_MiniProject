# Követelmény specifikáció

## 1. Jelenlegi helyzet leírása
Mai fiatalok egy nagyobb része nem ismeri a legtöbb európai országokat, és még kevesebben ismerik azok fővárosait. Szerintünk ez azért lehet, mert a fiatalság már nem érzi fontosnak megjegyezni a hagyományos módon tanult dolgokat. Könnyebben tanulnak, ha a folyamat online, játékos formában történik, hiszen ekkor akarva akaratlanul is rájuk ragad a tudás.

## 2. Vágyálomrendszer leírása
Célunk egy olyan szoftver létrehozása, amely segít megismerni európa országait, illetve összekötni ezeket az országokat a hozzájuk tartozó fővárossal. Adott egy kérdés, illetve ehhez kapcsolódó 4 válasz lehetőség, ami mind az adott országban található város lesz, azonban természetesen 1 válasz lesz majd a helyes. Vágyunk egy olyan webes felület elkészítése, ami segít a felhasználónak könnyen tanulni, ismételni európa országait, városait. A rendszer elsősorban a diákoknak (illetve az őket oktató tanároknak) szól, azonban bárki aki szeretné fejleszteni tudását, vagy csak szimplán szeretne jól szórakozni a barátaival/ismerőseivel, azok számára ajánlott a program használata

## 3. Jelenlegi üzleti folyamatok leírása
* 3.1) Eszközök beszerzése
  
  * 3.1.1) Tankönyv vásárlás: sok eseteben ez a családokat terheli, illetve azokat a fákat, amelyeket kivágtak a papírlapok miatt. Drága és nem környezetbarát megoldás.
  * 3.1.2) Térkép vásárlás: a probléma ugyanaz mint a tankönyvnél, azzal a módosítással, hogy ezt az iskola intézi.
* 3.2) Számonkérés
  
  * 3.2.1) Előkészületek
    * 3.2.1.1) Első lépés: az oktatónak ki kell találni, hogy mennyi ország fővárosát szeretné visszakérni a diákoktól.
    * 3.2.1.2) Második lépés: papírra vetni az előző pontban kigondolt dolgokat és sokszorosítani.
    * 3.2.1.3) Probléma: ha ezen folyamatok után mégis meggondolná magát, és módosítani szeretné a számonkérést, hiszen ekkor az egész folyamatot meg kell ismételni, ami sok felesleggel jár.
      
  * 3.2.2) Javítása
    
    * 3.2.2.1) Oktatót terheli, hiszen neki kell kijavítani a sok dolgozatot, amelyet sokszor otthon van ideje javítani.
    * 3.2.2.2) Tanulóknak sem a legjobb hiszen előfordulhat, hogy akár egy teljes hetet is várni kell arra, hogy ki legyen javítva.

* 3.3) Javító számonkérés
  
  * 3.3.1) Sajnos előfordul, hogy jó pár tanulónak nem úgy sikerül az első számonkérés mint azt ő elképzelte. Ilyenkor az oktatók javító lehetőséget szoktak biztosítani, amelynek a folyamata ugyanaz mint a 3.pontban végig tárgyaltak(csak valamennyivel kevesebb papírlapra van szükség).

## 4. Igényelt üzleti folyamatok modellje
* 4.1) Rendszer előkészületek
  
  * 4.1.1) Országok és fővárosaik felvitele az adatbázisba
  * 4.1.2) Kérdések és válaszok felvitele az adatbázisba
  
* 4.2) Online megjelenés
  
  * 4.2.1) Előkészületek
    * 4.2.1.1) A letisztult felületre érve, a felhasználó kiválasztja, hogy hány kérdést tegyen fel a rendszer illetve, hogy mennyi idő legyen a határidő 1-1 kérdésre.
    * 4.2.1.2) A felhasználónak lehetősége van olyan játék indítására, amelyben előre megadott országok szerepelnek.
  * 4.2.2) Játék folyamata
    * 4.2.2.1) A megadott idő alatt van lehetősége a felhasználónak válaszolni a feltett kérésre
    * 4.2.2.2) Ha válaszolt az összes kérdésre a felhasználó, akkor azonnali kiértékelés történik

## 5. A rendszerre vonatkozó szabályok 
- 5.1 A webes felület szabványos eszközökkel készüljön, html/css/javascript + python.

- 5.2 Minden kérdésre legyen pontosan négy válaszlehetőség.

- 5.3 Minden kérdésre pontosan egy helyes válasz legyen, ne legyen lehetőség több választ megjelölni.

- 5.4 Az oldal legyen moduláris - legyen lehetőség másféle kvízek megjelenítésére.

## 6. Követelménylista
|               Követelménylista               |
|---------|:----------------------------------:|
| **K01** |   Könnyen üzemeltethető rendszer   |
| **K02** |    Grafikus felhasználói felület   |
| **K03** |          Reszponzív dizájn         |
| **K04** |          Könnyű használat          |
| **K05** | Biztonságos és lokális adattárolás |
| **K06** |     Grafikus költség kimutatás     |
| **K07** |         Adat mozgathatóság         |

## 7. Fogalomszótár


