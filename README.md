# School-Exercises

﻿# 1. Feladat 
A Repülő Kacsa légitársaság levelező szolgáltatásával saját e-mail fiókot hozhatunk létre. 
A fiók létrehozásakor megadjuk a teljes nevünket és a születési évünket, majd ezekből a rendszer generál egy javasolt e-mail címet a következőképpen:

- vesszük a teljes névben szereplő összes szóközzel elválasztott névnek az első 3 betűjét, csupa kisbetűvel
 (ha egy ilyen string rövidebb 3 betűnél, akkor a teljes stringet vesszük), ha ékezetes karakter, akkor vesszük az ékezet nélküli megfelelőjét
- ezután vesszük a születési év utolsó számjegyét
- végül az így kapott azonosítóhoz hozzáfűzzük a @kacsa.hu szöveget.
Írj egy emailCimetGeneral nevű függvényt, amely két paramétert vár: a teljes nevet és a születési évet, és visszatér a fenti szabályok alapján 
legenerált e-mail címmel! 
A születési évet ne legyen kötelező megadni, alapértéke legyen 1970!
Hibakezeléssel nem kell foglalkoznod, feltesszük, hogy a paraméterek helyesek.

Példa:

Input: 'Nagy Péter Imre', 1966
Return: 'nagpetimr6@kacsa.hu'

#2. feladat: Egyszámjáték
Kati két  barátnőjével egyszámjátékot játszik. Ennek a lényege, hogy mindenki választ magának egy-egy pozitív egész számot, és az nyer, 
aki a legnagyobb olyan számot választotta, amit senki más.

Írj egy egyszamjatek nevű függvényt, amely egy pozitív egész számokból álló tömböt kap paraméterben, 
és ezek közül visszaadja a legnagyobb olyan számot, amely ismétlődés nélkül szerepel a tömbben!
Amennyiben nincs olyan szám, amit csak egy valaki tippelt, a függvény térjen vissza -1-gyel!

##Példa:

###Input: [100, 42, 92, 100, 81, 99, 100, 1, 99, 100]
###Return: 92

###Input: [70, 90, 90, 80, 70, 80]
###Return: -1


