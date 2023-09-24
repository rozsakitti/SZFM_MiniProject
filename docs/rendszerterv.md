# Rendszerterv

## A rendszer célja
A rendszer fő célja, hogy a diákok könnyebben tanulják meg az európai országokat, illetve azok fővárosát. A rendszer további céljai közt szerepel az is, hogy az oktatók számára megkönnyítse a számonkérést. Illetve nem utolsó sorban egy remek szórakozást nyújt bárki számára amellett, hogy közben tanul is az illető.
## Projektterv

1. A program alap UI-át megcsinálni, ebbe beleértve a főoldalon lévő gombokat és a kérdések gombjait is (ha lesz nehézségi szint azok elérését is). 
 2. Megcsinálni a programunkhoz tartózó fájlrendszert ebbe:
      * Beolvasni a fájlban lévő adatokat és beilleszteni a gombjainkba
      * Számmal tartani az elért pontokat
3. Elválasztani a hibás és helyes válaszokat.
4. Nehézségi fokozatok lekezelése, tesztelése.
5. Lépésenként önellenőrzésre való lehetőség megadása, ezzel elősegítve a tanulást.
6. Játék közben kilépési lehetőség.


### Projekt szerepkörök
| Név       | Szerepkör |
|-------------|-----------|
| Halász Kata | Programozó |
| Rózsa Kitti | Programozó |
| Tolvaj Péter | Programozó |
| Kovács Dávid  | Programozó |

### Ütemterv

| Feladat | Határidő |
|---------|----------|
| Json file feltöltése adatokkal | 2023. 09. 22 |
| A program üzleti folyamatának pontos leírása | 2023. 09. 22 |
| A program üzleti folyamatok programozása | 2023. 09. 24 |
| A program tesztelése | 2023. 09. 24 | 
| A program kinézetének megvalósítása | 2023. 09. 24 |

### Mérföldkövek

| Feladat |
|---------|
| A program alapvető kinézetének megléte |
| A program a nehézségi szintnek megfelőlő játékot indít |
| A program összegzi az elért eredményt |
| A program tesztelése |
| A tesztlog kitöltése |
| A program kinézetének dizájnolása |

## Üzleti folyamatok modellje
### Üzleti szereplők: 
 **_1.)_ Felhasználók**
  Ők azok, akik a kvízjátékot használják, tehát a kérdésekre válaszolnak, valamint a fő résztvevői az alkalmazásnak. Lehetnek gyerekek, felnőttek, oktatók vagy bárki, aki tesztelni szeretné tudását egy földrajzi kvíz kitöltésével.

 **_2.)_ Kérdési adatbázis szolgáltató (JSON fájl):**
  A kérdési adatbázis szolgáltató egy adatforrás, amely a kvízjáték számára biztosítja a kérdéseket. Jelen esetben egy JSON fájl formájában található. Ez a fájl tartalmazza a különböző kérdéseket, valamint a hozzájuk tartozó helyes és helytelen válaszokat. A kvízjáték ezen adatforrás alapján működik, és ezen keresztül jeleníti meg a felhasználóknak a kérdéseket. Ez a folyamat biztosítja, hogy a felhasználók mindig friss, változatos és helyes válaszokat találjanak a kvíz során. Ha a kérdések frissítése vagy változtatása szükséges, akkor ezt a JSON fájlt lehet módosítani, így a változások azonnal érvénybe lépnek a kvízjátékban.

  ### Üzleti folyamatok:
**_1.)_** A felhasználó a Start gombra kattint.

**_2.)_** A játék indítása után eldöntheti, hogy könnyű vagy nehéz módban szeretné a kvízt kitölteni, ami pedig a kérdések számától függ, hiszen a könnyű 5 kérdést jelent, a nehéz pedig 10-et.

**_3.)_** Ezután betöltődnek a kérdések a JSON fájlból, ami véletlenszerűen történik.

**_4.)_** A felhasználó kijelöl egy választ és megjelenik az ellenőrző gomb, amivel értelemszerűen leellenőrizheti válaszának helyességét. Ha jól válaszol +1 pont, ha nem akkor marad az addig megszerzett pontjainak száma, illetve láthatja mi lett volna a helyes válasz. 

**_5.)_** Ezt követően megjelenik a következő gomb, ami egyértelműen azt jelenti, hogy a felhasználó továbbléphet a következő kérdésre. Illetve elérhető lesz egy olyan gomb is, amivel vissza tud lépni a Start-ra a felhasználó. 

**_6.)_** Az eredmények pedig a játék befejeztével kiértékelődnek majd, ami a könnyű kvíznél elért pontszám/5, a nehéz kvíznél pedig elért pontszám/10.

## Követelmények

### Funkcionális követelmények
-Kérdések, válaszok tárolása JSON fájlban.

-Megfelelő működés webes eszközön.

-Felhasználóbarát, könnyen értelmezhető felület kialakítása.

-Helyes, helytelen válaszok megjelenítése.

### Nem funkcionális követelmények
-Nem regisztrációhoz kötött a használata, ezáltal nem tárolja el az eredményeket.

-Hatékonyság: Fontos, hogy a program képes legyen minimális költségű eszközökön is működni.

-Megbízhatóság: Mivel oktatás céljából fejlesztjük ezt a programot, fontos a megbízható és ellenőrzött adatok használata.

-Felhasználhatóság: A program felhasználói felületét olyan módon kell elkészíteni, hogy akár a legfiatalabb korosztály is képes legyen minél egyszerűbben értelmezni és használni azt.

### Törvényi előírások, szabványok

1.	Adatvédelem és Adatvédelmi Irányelvek (GDPR):
•	A felhasználók személyes adatainak védelméről és kezeléséről szóló európai rendelet. Biztosítani kell, hogy az adatokat biztonságosan tároljuk és kezeljük.

2.	Szellemi Tulajdonjogok és Tartalomvédelem:
•	Meg kell győződni arról, hogy a kvíz tartalma nem sért semmilyen szerzői jogot vagy más szellemi tulajdont.
•	Nem szabad olyan alkalmazást létrehoznunk, amely bármilyen módon félrevezeti a felhasználókat.
•	Ne próbáljuk meg más személynek vagy alkalmazásnak tettetni magunkat.

3.	Spam és használhatóság:
•	Minimális követelmény az alkalmazások felé, hogy valamilyen alapszintű funkcionalitást és tisztességes felhasználói élményt biztosítsanak.
•	Ne omoljon össze az alkalmazás használat közben.

4.	Kiskorúak Védelme:
•	Fontos, hogy megfelelő intézkedéseket tegyünk annak érdekében, hogy a kvíz ne tartalmazzon olyan anyagokat, amelyek nem megfelelőek vagy károsak lehetnek kiskorúak számára.

5.	Hozzáférési és Használati Korlátozások:
•	Feltehetően szabályozni kell, ki használhatja az alkalmazást, valamint a felhasználókmit tehetnek és nem tehetnek.

6.	Fizetések és Tranzakciók (ha alkalmazható):
•	Ha az alkalmazásban fizetési folyamatok vannak, biztosítani kell, hogy azok biztonságosak és megfelelnek a vonatkozó jogszabályoknak.

## Funkcionális terv
![Folyamat](folyamat.png)

### Felhasználónak:
- a felhasználó a Start gomb megnyomásával elindítja a játékot
-értelemszerűen lépked kérdésről-kérdésre
- a játék végén látni fogja helyes pontszámát

### Webalkalmazásnak:
- böngészőből elérhetőnek kell lennie
- frontend megírása: HTML, CSS, JavaScript használatával készül
- backend megírása: JavaScript használatával készül
- az adatok tárolására JSON használata

## Fizikai környezet
- A rendszer Javascript nyelven fog íródni (természetesen HTML, CSS segítségével)
- A rendszer asztali számítógépekre készül jelenleg
- Használható Windows, Linux és MacOS rendszeren is használható
- Bármely ismert asztali számítógépen is futó böngészőre van szükség (Google Chrome, Firefox...)

##Fejlesztői eszközök:
  - Visual Studio Code
  - Visual Studio
  - Node.JS
  - Github

A fejlesztés során használt eszközök és technológiák magukban foglalják a Visual Studio Code-ot és a Visual Studio-t a kódszerkesztéshez, a Node.JS-t a JavaScript környezet biztosításához, valamint a GitHub-ot a verziókezeléshez és a csapatmunka támogatásához.
 
## Adatbázis terv
Jelenleg a rendszer mögött nem található valódi adatbázis, hiszen az adatokat Json file-ból fogjuk használni, illetve abban fogjuk tárolni a szükséges adatokat.

JSON file-ról:
* Az alkalmazásunk a kérdéseket és válaszlehetőségeket egy JSON fájlból tölti be.
* Ez a fájl tartalmazza a különböző kérdéseket, valamint a hozzájuk tartozó helyes és helytelen válaszokat.
* A JSON fájl könnyen szerkeszthető, ami lehetővé teszi a kérdések gyors frissítését vagy módosítását, így a változások azonnal érvénybe lépnek a kvízjátékban.
*  Ez biztosítja, hogy a felhasználók mindig friss, változatos és helyes válaszokat találjanak a kvíz során.

## Implementációs terv
**1.) Felhasználói interfész kialakítása:**
- Készíteni egy felhasználói felületet a kvízjátékhoz, amely tartalmazza a "Start" gombot.
- A "Start" gombra való kattintás elindul a kvízjáték.

**2.) Kérdések és válaszok megjelenítése:**
- A kvízjáték a kérdéseket és válaszlehetőségeket egy előre definiált JSON fájlból tölti be.
- A kérdéseket és válaszokat dinamikusan jeleníti meg a felhasználói felületen.
  
**3.) Kérdéskezelés:**
- A felhasználó választása után ellenőrizzük, hogy a válasz helyes-e.
- A helyes válasz esetén +1 pont, ellenkező esetben pedig megjelenik melyik lett volna a helyes válasz.

**4.) Pontszámítás:**
- A felhasználó pontszámainak nyomonkövetése a helyes és helytelen válaszok alapján. 
- A kvíz végén megjelennek a pontszámok.
  

## Tesztterv
Két fajta tesztet fogunk megkülönböztetni: 
- Egységteszt:
  - Ezzel szükséges lefedni az üzleti logikát (ezzel biztosítva, hogy a kód az elvárt modon működik)
- Kézi tesztelés:
  - Ide tartozik a frontend tesztelése (megnézve, hogy azok szerepelnek a felületen amit akarunk, és úgy ahogy elvárjuk)
  - Felhasználói élmény figyelése (Ha már a fejlesztő/tesztelő nem találja komfortosnak a felületet használva, akkor a felhasználó végképp nem fogja)

## Telepítési terv
Nincs szükség külön telepítő csomagokra, hiszen az alkalmazás webes rendszeren fut.(Esetleg ajánlott a szoftver webes felületéhez egy böngésző telepitése, Google Chrome, Firefox, Opera, Safari).
Alkalmazás "telepítési" folyamata: A link birtokában megnyitható a böngészőben.

## Karbantartási terv
ELsősorban a visszajelzésekre támaszkodva fogjuk karbantartani a rendszert. Nem csak az esetleges hibák javítását fogjuk végezni, de az olyan fejlesztési ötleteket is megvalósítjuk, amelyek javítják a felhasználói élményt.
