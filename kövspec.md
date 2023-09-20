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
  
  * 4.1.1) Országok és fővárosaik felvitele a Json file-ba
  * 4.1.2) Kérdések és válaszok felvitele a Json file-ba
  
* 4.2) Online megjelenés
  
  * 4.2.1) Előkészületek
    * 4.2.1.1) A letisztult felületre érve, a felhasználó kiválasztja, hogy hány kérdést tegyen fel a rendszer.
  * 4.2.2) Játék folyamata
    * 4.2.2.1) A rendszer megjeleníti a kérdést
    * 4.2.2.2) A felhasználó válaszol a feltett kérdésre
    * 4.2.2.3) A rendszer jelzi, hogy helyes volt e a válasz
    * 4.2.2.4) Ha válaszolt az összes kérdésre a felhasználó, akkor egy teljes kiértékelés történik

## 5. A rendszerre vonatkozó szabályok 
- 5.1 A webes felület szabványos eszközökkel készüljön, html/css/javascript + python.

- 5.2 Minden kérdésre legyen pontosan négy válaszlehetőség.

- 5.3 Minden kérdésre pontosan egy helyes válasz legyen, ne legyen lehetőség több választ megjelölni.

- 5.4 Az oldal legyen moduláris - legyen lehetőség másféle kvízek megjelenítésére.

## 6. Követelménylista
|    ID   |            Név             |    Kifejtés    |
|---------|:----------------------------------:|--------|
| **K01** |   Könnyen üzemeltethető rendszer   |Felnőttek, gyerekek számára is egyaránt értelmezhető rendszer kialakítása. |
| **K02** |    Grafikus felhasználói felület   |Színes felület létrehozása a szórakoztathatóság érdekében, a tankönyvek helyett számítógépes formában. |
| **K03** |          Reszponzív dizájn         |Rugalmasan megjeleníthető legyen bármilyen eszközön. |
| **K04** |          Könnyű használat          |Gyerekek számára is könnyedén értelmezhető felület kialakítása.  |

## 7. Fejlesztői igényspecifikáció:
- 7.1 Hardveres, szoftveres, illetve emberi erőforrásokkal lefejleszhető legyen a termék.

- 7.2 A kommunikáció gördülékenységét biztosítani a megrendelővel.

- 7.3 Megfelelően becsülhető fejlesztési idő.

- 7.4 Homályos, kérdéses részek nélküli terv készítése.

- 7.5 Bármiféle extra kérés vagy terv módosításról időben való tudosítás.

- 7.6 Egy tiszta elképzelés arról hogy mit szeretnénk csinálni és ez alapján egy tervet készíteni.

- 7.7 Nem lehetetlen határidők szabása, hogy a munka tempója normális legyen és ne legyen a minőség kárára.

- 7.8 A szoftverben használt képek minősége megfelelő legyen és jogtiszták legyen.

- 7.9 Pontos, precíz terv kidolgozása ami mentén haladva a fejlesztés zökkenőmentes haladása biztosítva lesz.

- 7.10 Emberi erőforrás biztositása az állandó tesztelési folyamatokra.
## 8. A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása
## 9. Fogalomszótár: 
>*Moduláris:* Önállóan is működő modulokból (kisebb egységekből) álló.

>*Reszponzív dizájn:* Célja, hogy weboldalunk olyan kialakítással rendelkezzen, mely rugalmasan alkalmazkodik különböző böngészők képernyőjének méretéhez. 
