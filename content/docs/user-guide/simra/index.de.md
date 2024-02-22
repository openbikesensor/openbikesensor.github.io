---
title: OpenBikeSensor mit SimRa-App verbinden
linkTitle: OBS mit SimRa
weight: 100
description: >
  SimRa ist eine App, die beim Radfahren über die Sensoren gefährliche
  Situationen erkennen. Der OpenBikeSensor kann per Bluetooth mit SimRa
  verbunden werden und steuert dann Seitenabstände bei.

---

Wenn du SimRa mit dem OpenBikeSensor kombinieren möchtest, installiere dir zunächst die SimRa App
für [Android (Google Play)](https://play.google.com/store/apps/details?id=de.tuberlin.mcc.simra.app)
oder [iOS](https://apps.apple.com/de/app/simra/id1459516968).

In der Konfigurationsoberfläche des OpenBikeSensor aktivierst du im Untermenü
"General" ganz unten im Bereich "Operation" Bluetooth.

{{< imgproc settings None >}}
Bluetooth-Einstellungen im OpenBikeSensor
{{< /imgproc >}}

Du kannst auch den "SimRa Mode" einschalten. Normalerweise wählt sich der
OpenBikeSensor in ein WLAN ein bzw. stellt einen WLAN-Hotspot zur Verfügung,
wenn er ohne angeschlossenes Display eingeschaltet wird. Aktiviert man den
"SimRa Mode", dann passiert das nicht, und du kannst den OpenBikeSensor ohne
Display betreiben.

Nach dem Speichern kannst du das Gerät neu starten.

## SimRa auf Android einrichten

1. Aktiviere Bluetooth and einem Smartphone.
2. Starte die SimRa App.
2. In die Einstellungen gehen und unten "OpenBikeSensor" aktivieren:
    {{< imgproc enable_obs None />}}
3. Die OpenBikeSensor-Einstellungen öffnen. Verfügbare Geräte werden gesucht:
    {{< imgproc found None />}}
4. Auf den Eintrag mit "OpenBikeSensor xxx" drücken und anschließend auf
   "Verbinden" drücken:
    {{< imgproc connecting None />}}
5. Der jeweils gemessene Wert sollte jetzt angezeigt werden:
    {{< imgproc connected None />}}
6. Jetzt musst du noch einstellen, wie breit der Lenker des Fahrrad (von der
   Mitte aus gemessen) ist.
7. Optional kann aktiviert werden, dass ein Foto mit dem Smartphone gemacht
   werden soll, wenn der Überholabstand unterschritten wird. Dazu muss das
   Smartphone natürlich entsprechend am Fahrrad befestigt und ausgerichtet
   sein.

In der SimRa App wird nun links unten ein blaues Bluetooth Symbol angezeigt,
wenn Bluetooth aktiviert ist und ein grünes Symbol, wenn der OpenBikeSensor
verbunden werden konnte:

{{< imgproc mainview None />}}
