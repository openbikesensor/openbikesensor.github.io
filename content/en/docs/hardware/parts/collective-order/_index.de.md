---
title: Sammelbestellungen
weight: 10
---

Diese Seite soll einige Informationen bereitstellen, die wir bei früheren
Sammelbestellungen gesammelt haben.


## Überprüfe alles noch einmal

Bitte beachte, dass sich das Projekt noch in der Entwicklung befindet, d.h.
Änderungen in Hardware oder Design sind zu jeder Zeit möglich. Bevor du Teile
bestellst, speziell bei größeren Mengen, überprüfe bitte dass das zugrundeliegende
Design und die Teileliste zusammenpassen. Und nicht das Eine neuer ist als
das Andere.


## Ultraschallsensor-Boards

Die sensibelsten Teile des OBS sind die beiden Ultraschallsensoren.
Es gibt verschiedene Modelle auf dem Markt, aber viele werden unter der gleichen
Bezeichnung verkauft, JSN-SR04T.

### AJ-SR04M

* Eigenschaften:
  * Betriebsmodus wird über Widerstand R19 gesteuert
  * 8 MHz Schwingquarz
  * Betriebsspannung: 3V bis 5,5V
* [Datenblatt](https://github.com/tomaskovacik/kicad-library/tree/master/library/datasheet/K02-AJ-SR04)

{{< imgproc "aj-sr04m-general.png" Resize 600x >}}
AJ-SR04M: generelles Aussehen
{{< />}}

{{< imgproc "aj-sr04m-order-2021-02.png" Resize 600x >}}
AJ-SR04M: das Modell von der Sammelbestellung im February 2021
{{< />}}


### JSN-SR04T

* Eigenschaften:
  * vermutlich kein Widerstand um den Betriebsmodus zu ändern
  * quer liegender IC an der Anschlussseite 
  * 11.0592 MHz Schwingquarz
  * Betriebsspannung: 5V
* Das Datenblatt, das oft auf Chinesischen Seiten erwähnt wird ist `JSN-SR04T一体化超声波测距说明书.pdf` ([Englische Übersetzung](jsn-sr04t-en.pdf)).

{{< imgproc "jsn-sr04t-front-1.png" Resize 300x >}}
JSN-SR04T: Vorderseite (1)
{{< />}}

{{< imgproc "jsn-sr04t-front-2.png" Resize 300x >}}
JSN-SR04T: Vorderseite (2)
{{< />}}

{{< imgproc "jsn-sr04t-back-1.png" Resize 300x >}}
JSN-SR04T: Rückseite (1)
{{< />}}

{{< imgproc "jsn-sr04t-back-2.png" Resize 300x >}}
JSN-SR04T: Rückseite (2)
{{< />}}

### JSN-SR04T-2.0

* Eigenschaften:
  * Betriebsmodus wird über Widerstand R27 gesteuert
  * 8 MHz Schwingquarz
  * Betriebsspannung: 3,3V bis 5,5V
* [Datenblatt](https://www.jahankitshop.com/getattach.aspx?id=4635&Type=Product)

{{< imgproc "jsn-sr04t-2.0.png" Resize 600x >}}
JSN-SR04T-2.0
{{< />}}

### JSN-SR04T-V3.0

* Eigenschaften:
  * der Widerstand "mode" und die Überbrückungen "M1" und "M2" steuern den Betriebsmodus
  * 8 MHz Schwingquarz
  * Betriebsspannung: 3,3V bis 5,5V
* [Dokumentation](https://de.aliexpress.com/item/32863960886.html)

{{< imgproc "jsn-sr04t-v3.0.png" Resize 600x >}}
JSN-SR04T-v3.0
{{< />}}
