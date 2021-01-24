---
layout: default
title: Messfahrt
parent: Benutzeranleitung
nav_order: 3
---

# Vorbereitung

Grundsätzlich muss vor Beginn einer Messfahrt der Ladezustand des Akkus geprüft werden. 

* Dazu das Gerät einschalten und die Spannungsanzeige im Display oben rechts ablesen. Sie muss größer als 3,6 V sein.
Bei Bedarf vor der Messfahrt mittels USB-C Ladekabel nachladen.
  
Das Gerät im Freien platzieren und auf den korrekten GPS-Empfang warten (bis zu 10 min). 

Bei empfangenen GPS Signal erscheint die reguläre Distanzanzeige für den linken Überholabstand.
Die korrekte Funktion kann gegen eine Wand überprüft werden:

* linken Sensor ins Freie ohne Hindernisse richten: <br> 
Anzeige: --- cm
* linken Sensor gegen eine Wand gerichtet (max. 2,50 m Abstand): <br> 
Anzeige: Abstand - 35 cm (die halbe Breite des Lenkers wird abgezogen)

Gerät am Fahrrad befestigen, wie unter „Montage“ beschrieben, und Messfahrt beginnen.
Die gefahrene Strecke (Track) wird aufgezeichnet.

# Datenschutz für Privatzonen

Um in den veröffentlichten Aufzeichnungen den eigenen Wohnort unkenntlich zu halten, wird empfohlen, die Messfahrt entfernt vom Wohnort zu starten und zu beenden.

# Überholvorgänge markieren („taggen“)

Prinzipiell werden kontinuierlich die Abstände links und rechts gemessen und auf einer SD-Karte gespeichert.
Darin sind alle Hindernisse innerhalb des maximalen Messbereiches (285 cm) enthalten, auch Häuser, Masten, Radfahrer, Fußgänger usw., die nicht dem Messzweck dienen.
Nähert sich ein KFZ von hinten, muss der grüne Knopf am Display gedrückt werden, um den Überholvorgang zu markieren.
Das Display bestätigt dies:
* durch kurzes Invertieren der Anzeige
* durch Hochzählen der Anzeige „press“
* durch Hochzählen der Anzeige „conf“, falls dabei ein Objekt auf der linken Seite erkannt wurde

# Beenden der Messfahrt

Bei gedrücktem Knopf das Gerät ausschalten.
Nur so werden alle Messungen zuverlässig gespeichert.
Die Aufzeichnung erfolgt in einer unformatierten CSV-Datei, die nicht direkt gelesen werden kann.

Format: `jjjj-mm-ddThh.mm.ss-[Geräte-ID].obsdata.csv`

z.B. `2021-01-20T13.32.52-4495.obsdata.csv`
