---
linkTitle: Aufzeichnung
title: Aufzeichnung einer Messfahrt
weight: 30
description: >
  Du hast einen fertigen OpenBikeSensor und möchtest endlich damit Fahren?
  Folge diesen Schritten, um deine erste Messfahrt aufzuzeichnen.
---

Grundsätzlich muss vor Beginn einer Messfahrt der **Ladezustand des Akkus**
geprüft werden. Schalte das Gerät dafür ein und lies die Spannungsanzeige im
Display oben rechts ab. Die Spannung sollte größer als 3,6 V sein. Bei Bedarf
lade also vor der Messfahrt mittels USB-C Ladekabel deinen OpenBikeSensor auf.

Platziere dann das Gerät im Freien, schalte es ein und warte auf den korrekten
GPS-Empfang. Dies kann eine Weile dauern, auch mal bis zu 10 Minuten. Wir
arbeiten daran, dass dies in Zukunft schneller klappt.

Sobald der OpenBikeSensor ein GPS-Signal empfangen kann, erscheint die reguläre
Distanzanzeige für den linken Überholabstand. Die korrekte Funktion kann gegen
eine Wand überprüft werden:

* Richte den linken Sensor ins Freie ohne Hindernisse. Die Anzeige sollte `---
  cm` zeigen.
* Richte den linken Sensor gegen eine Wand in maximal 2,5 m Entfernung. Die
  Anzeige sollte den Abstand, minus der halben Lenkerbreite (also bei
  Standardeinstellung minus 35&thinsp;cm) anzeigen.

Jetzt kann's losgehen. Befestige den Sensor am Fahrrad wie unter [Montage]({{<
relref "mounting" >}}) beschrieben, und beginne deine Messfahrt. Die gefahrene
Strecke (Track) wird ständig aufgezeichnet, während die Messung läuft.

## Datenschutz für private Zonen

Um in den veröffentlichten Aufzeichnungen den eigenen Wohnort unkenntlich zu
halten, empfehlen wir, die Messfahrt entfernt vom Wohnort zu starten und zu
beenden. Alternativ kannst du auch [Privatsphärezonen]({{< relref "privacy-zones" >}}) nutzen.

## Überholvorgänge markieren

Prinzipiell werden kontinuierlich die Abstände links und rechts gemessen und
zusammen mit den GPS-Daten auf einer SD-Karte gespeichert. Darin sind alle Hindernisse innerhalb des
maximalen Messbereiches (ca. 285&thinsp;cm) enthalten, auch Häuser, Masten, Radfahrer,
Fußgänger usw., die nicht dem Messzweck dienen. Nähert sich ein KFZ von
hinten, muss der Knopf am Display gedrückt werden, um den Überholvorgang zu
erfassen.

Bitte achte dabei auf **deine eigene Sicherheit**: Es ist nicht notwendig,
während des Überholvorgangs selbst auf den Button zu drücken. Es ist
ausreichend, dies innerhalb von ca. 5 Sekunden nach der ersten Erfassung des
Seitenabstands zu tun. Und wenn du gar nicht sicher auf den Knopf drücken
kannst und dich lieber auf den Verkehr konzentrieren möchtest, ist das
natürlich auch voll okay eine Messung auszulassen.

Das Display bestätigt den Überholvorgang:

* durch kurzes Aufleuchten der Anzeige
* durch Hochzählen der Anzeige „press“
* durch Hochzählen der Anzeige „conf“, falls dabei ein Objekt auf der linken Seite erkannt wurde

## Beenden der Messfahrt

Schalte den OpenBikeSensor bitte nicht einfach aus, denn das kann zu
Datenverlust führen. Um den OpenBikeSensor sicher herunterzufahren, halte den
Knopf am Display gedrückt, und betätige dann gleichzeitig den Stromschalter.
Nur so werden alle Messungen zuverlässig gespeichert.
