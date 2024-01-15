---
title: Logo-Druck (mehrfarbig)
weight: 80
---

{{< imgproc "main-case-printed" Resize 600x >}}
  Ein Hauptgehäuse mit eingedrucktem Logo.
{{< /imgproc >}}

## Logo-Dateien

Statt der Bauteile `MainCase` und `MainCaseLid` werden entsprechende Bauteile
gedruckt, die geometrisch identisch sind, aber das Logo enthalten. 

Je nach Logo und Filamentwahl kann es sinnvoll sein, das Logo zu invertieren. 

* **Normal**: Das Logo hat eine andere Farbe als der Rest des Bauteils.
* **Invertiert**: Die Grundfläche, auf der das Logo gedruckt wird, hat eine
  andere Farbe als der Rest des Bauteils. Das Logo hat die gleiche Farbe wie
  die Wände und das Innere des Bauteils.
 
Je nach Drucktechnik sind pro Bauteil eine oder zwei Dateien notwendig, nämlich
das Logo an sich, und das Bauteil, aus dem das Logo herausgeschnitten wurde.

* **Main**: Der Hauptteil des Bauteils ohne Logo, bzw. bei invertierten Logo
  der Hauptteil mit Logo, aber ohne Grundfläche.
* **Highlight**: Das Logo, das herausgeschnitten wurde, bzw. bei invertierten
  Logo die Grundfläche ohne Logo.

{{< imgproc "main-case-parts.png" Resize 600x >}}
  Bezeichnungen der vier Dateien für den Logo-Druck des Hauptgehäuses (nur
  das Gehäuse, nicht der Deckel).
{{< /imgproc >}}

Jede dieser vier Dateien gibt es für das Hauptgehäuses und seinen Deckel,
insgesamt pro Logo also acht Dateien. Die vorgenerierten STL-Dateien für das
OpenBikeSensor-Logo werden ebenfalls auf GitHub veröffentlicht und liegen dort
im Verzeichnis
[`export/logo/OpenBikeSensor/`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/main/export/logo/OpenBikeSensor).

## OpenSCAD Logo Generator

Die Anleitung hierfür folgt demnächst. Möchtest du jetzt schon dein eigenes
Logo auf einen OpenBikeSensor drucken? Bestimmt wird dir [im Forum]({{< relref
"community" >}}) geholfen!


## Mehrfarbendruck

Zu diesem Thema haben wir noch keine ausführliche Dokumentation, aber es gibt
einen Diskussionsfaden im Forum. Vielleicht hilft dir das schon weiter,
ansonsten kannst du gern dort deine Fragen und Ideen einbringen:

https://forum.openbikesensor.org/t/mehrfarbiger-gehaeusedruck/111
