---
title: >
    Welche Daten werden aufgezeichnet?
slug: welche-daten-werden-aufgezeichnet
weight: 10
---

Der OpenBikeSensor ermittelt eine ganze Menge Daten, die in der Datei zu jeder
Fahrt gespeichert werden:

* Datum und Uhrzeiten
* GPS-Koordinaten
* GPS-Zustand, inkl. Genauigkeit und weiteren Zusatzinfos
* Rohdaten der Einzelmessungen beider Sensoren
* Gemessener Mindestabstand links und rechts
* Bestätigungen durch den Knopf am Lenker
* Batteriezustand
* ID des Gerätes, Firmwareversion, sowie einige Einstellungen und Eigenschaften des Gerätes

Die veränderlichen Werte werden etwa im Sekundentakt aufgezeichnet, die
Abstandsmessungen noch viel öfter, und das auch wenn gerade nichts gemessen
oder kein Überholvorgang bestätigt wird. Dies erlaubt die spätere Auswertung
und Weiterentwicklung der Auswertungsalgorithmen.
