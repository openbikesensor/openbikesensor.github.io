---
linkTitle: Aufzeichnung
title: Aufzeichnung einer Messfahrt
weight: 30
---

## Vorbereitung

Grundsätzlich muss vor Beginn einer Messfahrt der Ladezustand des Akkus geprüft
werden. Dazu das Gerät einschalten und die Spannungsanzeige im Display oben
rechts ablesen. Sie muss größer als 3,6 V sein. Bei Bedarf vor der Messfahrt
mittels USB-C Ladekabel nachladen.
  
Das Gerät im Freien platzieren, einschalten und auf den korrekten GPS-Empfang
warten.  Dies kann eine Weile dauern, auch mal bis zu 10 Minuten. Wir arbeiten
daran, dass dies in Zukunft eventuell schneller klappt.

Bei empfangenen GPS Signal erscheint die reguläre Distanzanzeige für den linken
Überholabstand.  Die korrekte Funktion kann gegen eine Wand überprüft werden:

* Linken Sensor ins Freie ohne Hindernisse richten. Die Anzeige sollte `--- cm` zeigen.
* Linken Sensor gegen eine Wand gerichtet (max. 2,50 m Abstand). Die Anzeige
  sollte den Abstand, minus der halben Lenkerbreite (also bei
  Standardeinstellung minus 35cm) anzeigen.

Gerät am Fahrrad befestigen, wie unter „Montage“ beschrieben, und Messfahrt
beginnen.  Die gefahrene Strecke (Track) wird aufgezeichnet.

## Datenschutz für Privatzonen

Um in den veröffentlichten Aufzeichnungen den eigenen Wohnort unkenntlich zu
halten, wird empfohlen, die Messfahrt entfernt vom Wohnort zu starten und zu
beenden.

## Überholvorgänge markieren

Prinzipiell werden kontinuierlich die Abstände links und rechts gemessen und
auf einer SD-Karte gespeichert.  Darin sind alle Hindernisse innerhalb des
maximalen Messbereiches (285 cm) enthalten, auch Häuser, Masten, Radfahrer,
Fußgänger usw., die nicht dem Messzweck dienen.  Nähert sich ein KFZ von
hinten, muss der Knopf am Display gedrückt werden, um diesen zu
erfassen. Bitte achte dabei auf deine eigene Sicherheit: Es ist nicht notwendig, während des Überholvorgangs selbst auf den Button zu drücken. Es ist ausreichend, dies innerhalb von ca. 5 Sekunden nach der ersten Erfassung des Seitenabstands zu tun. 

Das Display bestätigt den Überholvorgang:

* durch kurzes Invertieren der Anzeige
* durch Hochzählen der Anzeige „press“
* durch Hochzählen der Anzeige „conf“, falls dabei ein Objekt auf der linken Seite erkannt wurde

## Beenden der Messfahrt

Bei gedrücktem Knopf das Gerät ausschalten. Nur so werden alle Messungen zuverlässig gespeichert.

Die Aufzeichnung erfolgt in einer CSV-Datei mit einem Dateinamen, der von
Datum, Uhrzeit und der Geräte-ID abhängt, also zum Beispiel
`2021-01-20T13.32.52-4495.obsdata.csv`.
