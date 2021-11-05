---
title: Bauanleitung für v00.03.12
linkTitle: Bauanleitung
aliases:
- /bauanleitung
- /bauanleitung/v00.03.12
---

{{% alert title="Veraltete Bilder" color="danger" %}}
Die Bilder sind noch nicht angepasst für diese Version. Im Zweifel Texte beachten!
{{% /alert %}}

Dies ist die Anleitung zum Aufbau des vertikalen OpenBikeSensors v00.03.12.
Andere Versionen können über das Dokumentationsmenü aufgerufen werden.

Die beschriebene Vorgehensweise ist nur eine Möglichkeit, zu einem
funktionierenden Modell zu kommen. Wenn du alternative Wege gehen möchtest,
kannst du das natürlich tun. Solltest du einen massentauglichen besseren oder
einfacheren Weg für einen der Schritte finden, freuen wir uns über
[Änderungsvorschläge](https://github.com/openbikesensor/openbikesensor.github.io/pulls),
oder eine kurze Nachricht im Slack.

{{< imgproc "v00.03.12/19_Assembly/DSC08101.JPG" Fit "800x600" >}}
Ein fertig gebauter OpenBikeSensor der Version v00.03.12
{{< /imgproc >}}

## Voraussetzungen

Diese Anleitung setzt voraus, dass die Grundtechniken wie Löten, das
Abisolieren von Kabeln und das Crimpen von JST-Verbindern bereits bekannt sind.
Für letzteres empfehlen wir das
[JST-Crimp-Tutorial](https://www.youtube.com/watch?v=jHfYzrSF4pY). Warnhinweise
und Tipps zu Werkzeugbenutzung finden sich am Anfang der ausführlichen
Bauanleitung für das [Modell v00.02]({{<relref
"/docs/hardware/v00.02/build-instructions">}}).

## Schritt 1: Buchsenleisten

* Falls nur Buchsenleisten mit 16 Pins vorhanden sind, müssen diese auf 15 Pins gekürzt werden:
  * Mit dem Seitenschneider kürzen.
  * Mit dem Cuttermesser oder Schleifpapier nacharbeiten, um keine scharfe Kante zu hinterlassen.
* Buchsenleisten auf ESP32 stecken
  * Auf Ausrichtung achten! Die Pads sind nicht symmetrisch, auf je einer Seite
    ist nur jeder zweite Pin mit Pad versehen. Vor dem Verlöten mit Footprint
    vergleichen, ob jeder Pin auch ein Pad bekommt.
* Buchsenleisten mit gestecktem ESP32 positionieren.
* Jede Leiste an 2 äußeren Pins festlöten.
* Danach alle äußeren Verbindungen verlöten.
* ESP32 abziehen und die inneren Kontakte anlöten.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07898.JPG"
    alt="Bauteile bereitlegen" >}}
  {{< slider-image
    src="PCB00.03.10_02_DetailBuchsenleite01_zuschneiden.jpg"
    alt="Buchsenleite wenn nötig auf 15 Pins zuschneiden" >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07901.JPG"
    alt="Buchsenleisten auf ESP32 aufstecken" >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07902.JPG"
    alt="Gemeinsam auf dem PCB platzieren. Ausrichtung der abwechselnden Pins (innen) prüfen." >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07903.JPG"
    alt="Zunächst an einem Eckpunkt fixieren" >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07905.JPG"
    alt="Ausrichten und auf der gegenüberliegenden Seite ebenfalls fixieren" >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07913.JPG"
    alt="Alle äußeren Pins festlöten (beidseitig)" >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07915.JPG"
    alt="Alle äußeren Pins festgelötet" >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07926.JPG"
    alt="Dann den ESP32 entfernen und die Innenseite verlöten" >}}
{{< /slider >}}

## Schritt 2: Spannungsregler (rot)

* Für den roten Spannungsregler 1x1 und 1x2 Stifte vorbereiten.
* Spannungsregler mit Stiften in zwei gegenüber liegenden Lötstellen fixieren
* Stifte nicht verlöten!
* Mit Stiften ausgerichtetes Modul an den anderen beiden SMD-Pads verlöten.
* Stifte abziehen und die restlichen Kontakte in SMD-Bauweise verlöten.

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_01_Stiftleisten_ablaengen.jpg"
    alt="Stiftleisten ablängen" >}}
  {{< slider-image
    src="v00.03.12/02_Regulator/DSC07928.JPG"
    alt="Bauteile bereitlegen" >}}
  {{< slider-image
    src="v00.03.12/02_Regulator/DSC07934.JPG"
    alt="Board platzieren und mit Stiften ausrichten, anderes Pad wie SMD verlöten" >}}
  {{< slider-image
    src="v00.03.12/02_Regulator/DSC07935.JPG"
    alt="Freie Kontakte löten" >}}
  {{< slider-image
    src="v00.03.12/02_Regulator/DSC07938.JPG"
    alt="Stifte entfernen und restliche Kontakte löten" >}}
{{< /slider >}}

## Schritt 3: Lademodul (blau)

* Für das blaue Lademodul 2x2 Stifte und 2x1 Stift vorbereiten.
* Modul mit Stiften fixieren und darauf achten, dass es flach am PCB anliegt.
* Von unten 2 Stifte verlöten. Stifte auf der anderen Seite fixieren
* Umdrehen und restliche Kontakte löten.
* Die schwarzen Plastikteile entfernen und diese Seite auch verlöten.
* Alle Stifte mit dem Seitenschneider kürzen.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07944.JPG"
    alt="Bauteile bereitlegen" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07945.JPG"
    alt="Lademodul und Stifte platziert" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07951.JPG"
    alt="Auf Oberseite verlöten" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07954.JPG"
    alt="Alle Stifte auf Oberseite verlötet" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07959.JPG"
    alt="Schwarze Plastikteile von Stiftleiste entfernen" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07961.JPG"
    alt="Schwarze Plastikteile von Stiftleiste entfernt" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07964.JPG"
    alt="Oberseite verlöten" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07968.JPG"
    alt="Stifte kürzen" >}}
{{< /slider >}}

## Schritt 4: Widerstände

* Widerstände richtig zuordnen (Farbcodes z.B. via [kiloohm.info](http://kiloohm.info/) decodieren):
  * **R1:** 10&thinsp;kΩ (braun - schwarz - orange - gold)
  * **R2:** 150&thinsp;kΩ (braun - grün - gelb - gold)
  * **R3:** 300&thinsp;kΩ (orange - schwarz - gelb - gold)
  * **R6, R7:** 1,1&thinsp;kΩ (braun - braun - rot - gold) oder 1&thinsp;kΩ (braun - schwarz - rot - gold)
* **Achtung!** R7 wird anders verlötet!
  * Leider enthält die Platine einen Fehler, und R7 kann nicht wie vorgesehen platziert werden, sonst ist der Widerstand dem einen Sensorboard im Weg.
  * Statt auf der Oberseite verlöten wir den Widerstand auf der Unterseite.
  * Die Beinchen werden dabei nicht durch die Löcher gesteckt. Wir behandeln den Widerstand wie ein SMD-Bauteil.
  * Pads identifizieren. Eines der Pads auf der Platinenunterseite mit etwas
    Lötzinn benetzen. Sehr wenig Zinn verwenden, sonst sickert es durch das
    Loch durch und bildet auf der Rückseite eine Perle, die dann im Weg ist.
  * Zinn wieder verflüssigen, Widerstand mit einem Bein darin fixieren. Der
    Widerstand liegt flach auf der Unterseite der Platine auf, mit nicht
    gebogenen Beinen.
  * Anderes Bein mit Lötzinn auf anderes Pad löten.
  * Beine kürzen.
  * Falls doch Lötzinn zur Oberseite der Platine durchgesickert ist, mit
    Entlötlitze reduzieren.
* Falls ein SMD-Widerstand für R6 verwendet werden soll:
  * Einen Lötpunkt auf ein Pad setzen.
  * Widerstand flach auf das PCB legen, Lötpunkt erneut schmelzen und
    das Bauteil mit der Pinzette darauf schieben.
  * Andere Seite normal festlöten.
  * R7 **nicht** so verbauen (s.o.)
* Normale THT-Widerstände (R1, R2, R3, R6) stecken, verlöten, Beine kürzen.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R7/DSC07880.JPG"
    alt="R7: Eines der Pads verzinnen" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R7/DSC07885.JPG"
    alt="R7: Den Widerstand wie ein SMD-Bauteil einseitig anlöten" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R7/DSC07889.JPG"
    alt="R7: Die zweite Seite verlöten" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R7/DSC07890.JPG"
    alt="R7: Fertig montiert" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R6/DSC07891.JPG"
    alt="Ein Widerstand (R6) platziert" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R6/DSC07893.JPG"
    alt="Auf der Rückseite verlöten" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R6/DSC07895.JPG"
    alt="Beine kürzen. Widerstände R1-R3 ebenso montieren." >}}
{{< /slider >}}

## Schritt 5: Kondensatoren

* Bei C2 und C3: Polung auf Platine und Kondensator beachten! (Langer Pin: „Plus“, mit Streifen markierte Seite: „Minus“)
* Kondensatoren C1 bis C3 stecken
* Zum Fixieren umbiegen
* Verlöten und Draht abkneifen

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_04_Kondesatoren_01_Kondensatoren.jpg"
    alt="Die Kondensatoren" >}}
  {{< slider-image
    src="v00.03.12/05_Caps/DSC07970.JPG"
    alt="Kondensatoren platzieren, auf Polung achten!" >}}
  {{< slider-image
    src="v00.03.12/05_Caps/DSC07971.JPG"
    alt="Auf der Rückseite umbiegen und verlöten" >}}
  {{< slider-image
    src="v00.03.12/05_Caps/DSC07979.JPG"
    alt="Drähte kürzen" >}}
  {{< slider-image
    src="v00.03.12/05_Caps/DSC07984.JPG"
    alt="Widerstände und Kondensatoren fertig platziert" >}}
{{< /slider >}}

## Schritt 6: Lötpunkt / Brücke

* JP1 mit einem Lötpunkt versehen und damit überbrücken
* Erstes Bild im nächsten Schritt zeigt das Ergebnis

## Schritt 7: Stromversorgung

* Sicherung
  * Position F1
  * Richtung egal
  * Die kleinen Biegungen in den Beinchen sorgen für den richtigen Abstand
  * Einstecken, senkrecht verlöten, Beine abkneifen
* Batteriestecker
  * Stecker und Kabel zusammenstecken
  * Beschriftung auf der Platine beachten (Rot: „Plus“, Schwarz: „Minus“)<br>
    (**ACHTUNG**: wenn ihr ein schwarzes und braunes Kabel habt, dann ist der Stecker
    auf der Platine um 180 ° gedreht, auf dem Bild ist der Stecker für das
    schwarze und rote Kabel zu sehen)
  * Auf der Rückseite anlöten
  * Kabel wieder abziehen
* Diode
  * **Polung beachten**: Die Diode "steht" auf dem Kreis auf dem PCB, aber der
    weiße Ring auf der Diode dabei zeigt nach oben.
  * Diode umbiegen und aufstecken
  * Enden vor dem Löten etwas kürzen, um beim Löten weniger Metall aufheizen zu
    müssen
  * Verlöten: Eigentlich sollen Halbleiter nur kurz gelötet werden, aber dieses
    ist ein sehr großes Bauteil, und auch erstaunlich robust. Arbeite zügig,
    aber erwarte dass es eine Weile dauert, bis das Bauteil und die Pads auf
    Temperatur gebracht sind und das Lötzinn schmilzt.
  * Achtung, die Diode nimmt viel Hitze auf und ist noch lange nach dem Löten
    sehr heiß.
  * Enden nachkürzen


{{< slider >}}
  {{< slider-image
    src="v00.03.12/07_Power/DSC08004.JPG"
    alt="Die fertig platzierten Bauteile (oben links)" >}}
{{< /slider >}}

## Schritt 8: Verbinder für Taster und Display

* J5: 5-Pin-Konnektor gemäß Markierung auf Platine aufsetzen (Aussparungen zeigen Richtung Platine).
  * 2 Punkte von unten verlöten
  * Platine umdrehen, restliche Pins verlöten.

* J6 (Taster-Stecker) hat keine Polung
  * 2-Pin-Connector so aufsetzen, dass er möglichst wenig über den Rand der
    Platine übersteht und verlöten

{{< slider >}}
  {{< slider-image
    src="v00.03.12/08_Connectors/DSC08005.JPG"
    alt="5-poligen Stecker richtigherum aufstecken" >}}
  {{< slider-image
    src="v00.03.12/08_Connectors/DSC08006.JPG"
    alt="Auf der Rückseite verlöten, auf guten Sitz achten" >}}
  {{< slider-image
    src="v00.03.12/08_Connectors/DSC08010.JPG"
    alt="2-poligen Stecker ebenso montieren" >}}
{{< /slider >}}

## Schritt 9: Sensorboards

* Falls gewinkelte, 2-polige JST-Steckerverbinder vorhanden sind:
  * Die JST-Stecker aus dem Sensorboard auslöten.
  * Gewinkelte JST-Stecker stattdessen einlöten.
  * Das Kabel, wenn eingesteckt, sollte weg von den 4 Pins des Boards zeigen
    (nach oben, wenn montiert).
* Andernfalls:
  * Weißes Plastikteil der JST-Buchse vorsichtig entfernen
  * Kontakte nach oben umbiegen – von den Steckkontakten weg
* Beide Sensorboards stecken, dabei Beschriftung (+3V3, TRIG, ECHO, GND) beachten
* Boards senkrecht und direkt auf der Grundplatine aufliegend verlöten
* Überstehende Stifte kürzen

{{< slider >}}
  {{< slider-image
    src="v00.03.12/09_Sensor_Boards/DSC08012.JPG"
    alt="Ein einzelnes Sensorboard" >}}
  {{< slider-image
    src="v00.03.12/09_Sensor_Boards/DSC08013.JPG"
    alt="Das weiße Kunststoffteil entfernen" >}}
  {{< slider-image
    src="v00.03.12/09_Sensor_Boards/DSC08014.JPG"
    alt="Kontakte des alten Steckers auslöten, neuen Stecker einlöten" >}}
  {{< slider-image
    src="v00.03.12/09_Sensor_Boards/DSC08020.JPG"
    alt="Sensorboards platzieren (neue JST-Stecker bereits montiert)" >}}
  {{< slider-image
    src="v00.03.12/09_Sensor_Boards/DSC08024.JPG"
    alt="Auf der Rückseite verlöten, Beine kürzen" >}}
{{< /slider >}}

## Schritt 10: SD-Modul

* Gewinkelte Stiftleiste mit 6 Pins vorbereiten.
* Gewinkelte Stiftleiste genau wie in der Abbildung gezeigt in SD-Modul stecken.
* Die Ausrichtung ist wichtig: Es gibt 8 Arten die Stiftleiste zu stecken, 7 funktionieren nicht.
* Stiftleiste mit Modul verlöten und überstehende Pins abkneifen
* Modul auf OBS-PCB stecken (Ausrichtung und Beschriftung beachten)
* Verlöten und Stifte kürzen

{{< slider >}}
  {{< slider-image
    src="v00.03.12/10_SD_Module/DSC08025.JPG"
    alt="SD-Karten Modul und Stiftleiste" >}}
  {{< slider-image
    src="v00.03.12/10_SD_Module/DSC08026.JPG"
    alt="Stiftleiste in Modul einstecken (Richtung beachten)" >}}
  {{< slider-image
    src="v00.03.12/10_SD_Module/DSC08027.JPG"
    alt="Stiftleiste in Modul verlöten" >}}
  {{< slider-image
    src="v00.03.12/10_SD_Module/DSC08028.JPG"
    alt="Modul platzieren" >}}
  {{< slider-image
    src="v00.03.12/10_SD_Module/DSC08032.JPG"
    alt="Auf der Rückseite anlöten und kürzen" >}}
{{< /slider >}}

## Schritt 11: GPS-Modul

* Gewinkelte Stiftleiste mit 4 Pins vorbereiten
* Stiftleiste in OBS-PCB verlöten (Unterseite, langes Ende der Pins seitlich herausschauend)
* Eng anliegend verlöten
* GPS-Modul aufstecken
* Verlöten und Stifte kürzen

* **Achtung!** Achte darauf, dass das kurze Ende der Stiftleiste in das Board und das lange Ende in das GPS-Modul eingelötet wird. Ansonsten ragt das GPS-Modul aus dem Gehäuse heraus.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/11_GPS_Module/DSC08033.JPG"
    alt="4-polige Winkelstiftleiste abkürzen und stecken (Richtung beachten)" >}}
  {{< slider-image
    src="v00.03.12/11_GPS_Module/DSC08034.JPG"
    alt="Auf der Oberseite verlöten" >}}
  {{< slider-image
    src="v00.03.12/11_GPS_Module/DSC08035.JPG"
    alt="GPS-Modul senkrecht aufstecken und verlöten" >}}
{{< /slider >}}


**Damit ist das PCB fertig bestückt!!!**

## Schritt 12: Ein/Aus-Schalter

* 2x10cm Kabel crimpen und in 2-fach Stecker einführen
* Andere Kabelenden seitlich an den Schalter löten.
* **Achtung**:
  * Orientierung der Kabelenden und Auswahl der beiden Kontakte am Schalter beachten und eventuell mit Multimeter nachmessen, damit Schalterzustand später mit der Beschriftung am OBS-Gehäuse übereinstimmt (0 unten, I oben).
  * Nur seitlich angelötet passen die Kabel später in das Gehäuse.
  * Zu viel Hitze lässt den Schalter innen schmelzen, was zu Wackelkontakten führen kann.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/12_Switch/DSC08041.JPG"
    alt="Schalter mit Kabel und Stecker" >}}
{{< /slider >}}

## Schritt 13: Ultraschallsensor-Kabel kürzen und crimpen

* Tipp: Zunächst mit überschüssigen Kabelteilen und Crimpkontakten üben!
* Die langen schwarzen Kabel der Sensoren auf etwa 10cm kürzen, da die langen
  Kabel nicht in das Gehäuse passen und auch die Plastikeinfassung der
  bestehenden Stecker zu starr und zu dick für das Gehäuse ist
* Empfehlung: Schrumpfschlauch (sofern vorhanden, optional) direkt nach dem
  Kürzen auf das schwarze Sensorkabel aufziehen, noch bevor es abisoliert und
  gecrimpt wird.
* Vorsichtig! Koax-Kabel – der innere Leiter ist sehr dünn und kann leicht
  durchtrennt werden.
* Crimpkontakt muss für optimale Verbindung Leiter und Isolierung greifen

{{< slider >}}
  {{< slider-image
    src="v00.03.12/13_Sensor_Wiring/DSC08040.JPG"
    alt="Sensor mit gekürztem Kabel und Stecker" >}}
  {{< slider-image
    src="PCB00.03.10_15_Sensor_03_Sensor_Detail_Stecker.jpg"
    alt="Detailaufnahme Stecker und Schirmung" >}}
{{< /slider >}}

## Schritt 14: Batteriekabel anlöten

* Die Akkus sind mit Lötfahnen ausgestattet.
* Auf 12cm gekürztes Batteriekabel an die Enden der Fahnen angelöten
* Polung beachten: Pluspol an Akku auf der Seite mit Einkerbung im Akku-Gehäuse
* **Polung Im Zweifel nachmessen**
* Die Batterie und Kabel werden mit einem kleinen Kabelbinder im Deckel fixiert
* Batteriekontakte mit Isolierband o.Ä. isolieren

**Batterie noch nicht einstecken.**

{{< slider >}}
  {{< slider-image
    src="v00.03.12/14_Battery_Wiring/DSC08044.JPG"
    alt="Akku mit Kabel und Stecker (Polung beachten!)" >}}
  {{< slider-image
    src="v00.03.12/14_Battery_Wiring/DSC08045.JPG"
    alt="Kontakte isolieren" >}}
{{< /slider >}}

## Schritt 15: Gehäuse vorbereiten

* Einpressmuttern ("heat-set inserts") einbauen:
  - Den Lötkolben auf ca. 180-220°C einstellen, gut reinigen (kein Lot an der
    Spitze). Nach Möglichkeit eigene Spitze für diese Aufgabe verwenden, und
    danach wieder wechseln.
  - Einpressmutter so weit wie möglich von Hand in das vorgesehene Loch drücken.
  - Lötkolben auflegen, nur sehr leichten Druck ausüben.
  - Mutter so senkrecht wie möglich behutsam versinken lassen.
  - Die Mutter sollte lieber etwas zu tief sitzen, als über den Rand
    überstehen, um die Gehäuseteile bündig miteinander verbinden zu können.
  - Die Muttern mit denen das PCB befestigt wird nicht zu tief versenken, sonst
    bildet sich eine Ausbuchtung auf der Außenseite, wo das Logo ist.
* Einpressmuttern hier platzieren:
  * 3 Muttern in Hauptgehäuse für das PCB (mit Montagelöchern der Platine vergleichen)
  * 2 Muttern in Hauptgehäuse beim GPS-Deckel
  * 5 Muttern in Hauptgehäuse für Hauptdeckel
  * 3 Muttern in Displaygehäuse
* Kleine Würfelmagnete in USB-Abdeckung einsetzen
  * Wenn Kompatibilität mit anderen OBS gewünscht ist, muss auf gleiche Polung
    geachtet werden, da sonst die Abdeckungen nicht austauschbar sind.
  * Erst Magnete in Abdeckung einsetzen.
  * Dann einen Magnet auf einen der eingesetzten platzieren und die
    Abdeckung ins Hauptgehäuse stecken, dabei den einzelnen Magneten ins
    Hauptgehäuse eindrücken. Mit der anderen Seite wiederholen.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/15_Prepare_Case/DSC08072.JPG"
    alt="Einpressmuttern in Displaygehäuse einschmelzen" >}}
  {{< slider-image
    src="v00.03.12/15_Prepare_Case/DSC08074.JPG"
    alt="Hauptgehäuse mit Einpressmuttern" >}}
  {{< slider-image
    src="v00.03.12/15_Prepare_Case/DSC08075.JPG"
    alt="USB-Abdeckung mit Magneten" >}}
{{< /slider >}}

## Schritt 16: Display-Kabel

{{% alert title="Reihenfolge beachten" color="warning" %}}
Beim Display ist die Reihenfolge sehr wichtig! Ein Kabel mit Steckern auf
beiden Seiten oder gelötetem Kabel/Knopf passt nicht mehr durch das Gehäuse.
{{% /alert %}}

* Zugentlastung in Displaygehäuse-Unterteil einsetzen:
  * Erste Hälfte der Zugentlastung einsetzen
  * Zweite Hälfte von außen angewinkelt eindrücken, bei Bedarf die unteren
    Ecken mit dem Seitenschneider leicht abrunden, damit sie sich leichter in
    die vorgesehene Position stecken lässt.
* Kabel durch Displaygehäuse-Unterteil und Zugentlastung führen.
* Button in Gehäuseoberteil einschrauben.
* Stecker OBS-Seite
  * Richtiges Kabelende identifizieren anhand Durchziehrichtung durch
    Displaygehäuse-Unterteil.
  * Die Außenisolierung kann gut auf ca. 5cm abisoliert werden.
  * Die einzelnen Litzen **nur 1-2mm abisolieren** und alle 5 Litzen crimpen.
    Für stabilen Halt müssen die äußeren Flügel des Crimpkontakts die
    Isolierung der jeweiligen Litze greifen.
  * Gecrimpte Kabelenden ins 5er-Gehäuse einführen. OBS-PCB und Display sind
    beschriftet. Zuordnung der Farben zu Beschriftung notieren. Unten gibt es
    eine Verkabelungstabelle mit Farbvorschlag.
* Stecker Display-Seite
  * Nur 3 Kabel crimpen: `GND`, `SDA`, `SCL`
  * `BUT` an eine Seite des Buttons löten. **Achtung:** Der Taster ist
    hitzeempfindlich, bei zu langem/heißem Löten schmilzt der Kunststoff.
  * Kleines Kabelstück (ca. 3cm):
    - vorbereiten, einseitig crimpen
    - mit `+3V3` zusammen an andere Buttonseite löten
    - Crimpkontakt entspricht jetzt `+3V3` bzw. `VDD` (am Display)
* Am OLED-Displayboard Plastikteile an Steckkontakten entfernen und Pins um
  knapp 1/3 kürzen
* Vom JST-Gehäuse (4-polig) die Arretierung (auf der einen Seite leicht
  hervorstehende Plastikflügel) entfernen, also eben abschneiden (Cuttermesser
  oder Seitenschneider)
* Modifizerten JST-Stecker auf die gekürzten Pins aufstecken (Polung beachten).
  Gegebenenfalls die Pins weiter kürzen, bis der Stecker ganz auf dem Board
  aufliegt, damit er ins Displaygehäuse passt.

| OBS-Seite   | Displayseite   | Button   | Vorschlag Farbe        |
| ----------- | -------------- | -------- | ---------------------- |
| `SDA`       | `SDA`          |          | blau                   |
| `GND`       | `GND`          |          | schwarz                |
| `BUT`       | -              | Pin 1    | grau                   |
| `SCL`       | `SCK`          | -        | weiß                   |
| `+3V3`      | -              | Pin 2    | braun                  |
| -           | `VDD`          | Pin 2    | (kurzes Stück Kabel)   |


{{< slider >}}
  {{< slider-image
    src="v00.03.12/16_Display_Wiring/DSC08046.JPG"
    alt="Das untere Teil des Displaygehäuses mit Zugentlastung" >}}
  {{< slider-image
    src="v00.03.12/16_Display_Wiring/DSC08061.JPG"
    alt="Kabel durch Unterteil geführt" >}}
  {{< slider-image
    src="v00.03.12/16_Display_Wiring/DSC08053.JPG"
    alt="Button in Displayoberteil eingeschraubt" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_02_alle_5_Adern_gecrimpt.jpg"
    alt="OBS-Seite: Alle 5 Adern crimpen" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_03_Stecker.jpg"
    alt="OBS-Seite in Stecker einführen" >}}
  {{< slider-image
    src="v00.03.12/16_Display_Wiring/DSC08054.JPG"
    alt="Zwei Kabel an Button löten (Pin 2)" >}}
  {{< slider-image
    src="v00.03.12/16_Display_Wiring/DSC08059.JPG"
    alt="Display-Seite: Button und Stecker fertig" >}}
{{< /slider >}}

## Schritt 17: Display Zusammenbau

* 0,96-Zoll OLED-Boards haben teils etwas unterschiedliche Größen
  * Platine des Displays nach Bedarf etwas zurechtschneiden, insbesondere an den Ecken (Seitenschneider)
  * Je nach Genauigkeit des 3D-Drucks das Gehäuse etwas weiter ausfräsen
* Schutzfolie von Display abziehen
* Display in Gehäuseoberteil (das mit dem Button) einsetzen
* Magnete in die Seitentasche einsetzen.
  * Wenn Kompatibilität mit anderen OBS gewünscht ist, muss auf gleiche Polung
    geachtet werden, da sonst die Halterungen nicht austauschbar sind.
* Gehäuseunterteil aufsetzen und mit Schrauben fixieren.
* Zugentlastung mit M3x8 Schrauben und Muttern fixieren, dabei auf sechseckige Fixierung
  für Sechskant-Muttern auf jeweils einer Seite der Zugentlastung achten.

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_05_verschiedene_Displays_vom_gleichen_Lieferanten.jpg"
    alt="Verschiedene Displays vom gleichen Lieferanten" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_07a_Display_mit_Seitenschneider_stutzen.jpg"
    alt="Wenn nötig, Display mit Seitenschneider stutzen" >}}
  {{< slider-image
    src="v00.03.12/17_Display_Assembly/DSC08060.JPG"
    alt="Display in Gehäuse einpassen, ohne Gewalt" >}}
  {{< slider-image
    src="v00.03.12/17_Display_Assembly/DSC08064.JPG"
    alt="Magnete passend einlegen" >}}
  {{< slider-image
    src="v00.03.12/17_Display_Assembly/DSC08066.JPG"
    alt="Das Display mit verschraubtem Gehäuse" >}}
  {{< slider-image
    src="v00.03.12/17_Display_Assembly/DSC08068.JPG"
    alt="Zugsicherung fixieren" >}}
{{< /slider >}}

## Schritt 18: Elektronik testen

Zunächst muss die [OpenBikeSensor Firmware auf den ESP32 geflashed werden](https://github.com/openbikesensor/OpenBikeSensorFirmware).

Vor dem Einbau ins Gehäuse testen wir die Elektronik in dieser Reihenfolge:

1. Ausschalten
2. Batteriekabel polungsrichtig einstecken.
3. Laden: Normales USB-C Ladegerät (5 V) anschließen
    * Einige Geräte funktionieren nur nach Anschluss an ein Ladegerät
    * Bei vollem Akku leuchtet das Modul blau, sonst rot. USB-C Kabel abstecken.
4. Einschalten per Kippschalter (ohne dabei den Knopf am Display zu drücken)
    * Boot-Screen sollte auf dem Display erscheinen. Wenn nicht, nochmal aus und, sofern nichts stinkt oder gar raucht, wieder einschalten.
    * Druck auf Taster wechselt von Boot-Screen zu einfacher Distanz-Anzeige (-- cm)
5. Bei angeschlossener GPS-Antenne GPS-Funktion im Freien testen
    * Nach einigen Minuten: GPS-Board blinkt, Boot-Screen wechselt zu Sensor-Anzeige. Werden 0 Satelliten angezeigt, wird trotzdem weitergesucht, was zu Beginn wegen des Downloads des Almanachs sehr lange dauern kann. 15 Minuten sind beim ersten Einschalten nicht ungewöhnlich.
6. Sensoren-Funktion testen: Sensoren mit Sensor-Boards verbinden
    * Polung beachten
    * Der Abstand wird abzüglich der Breite des Lenkers gemessen. In der Software kann man im [Konfigurationsmodus]({{<relref "/docs/user-guide/configuration">}}) dessen Breite einstellen.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/18_Testing/DSC08091.JPG"
    alt="Die Elektronik funktioniert" >}}
{{< /slider >}}

## Schritt 19: Zusammenbau

* Kabel und Halterung
  - Displaykabel durch rechteckiges Loch einführen (der 5-polige JST-Stecker
    passt diagonal hindurch).
  - Etwa 5-10cm des Kabels im Gehäuse lassen.
  - Die 4 Sechskant-Muttern einsetzen, Halterung mit Zugentlastung anbringen und
    damit das Kabel fixieren. Noch nicht festziehen, nur sicherstellen dass die
    Muttern nicht mehr herausfallen.
  - Später werden wir das Kabel auf die richtige Länge ziehen und die Schrauben
    dann fest anziehen.
* Einen Ultraschallsensor in den Deckel einbauen.
* PCB in Hauptgehäuse platzieren
  - SD-Karte einlegen.
  - ESP32 aufstecken.
  - Gesamtes Board in leichtem Winkel herabsenken, am Displaykabel vorbei
    navigieren, und auf Ausrichtung der USB-C Ladebuchse achten.
  - Bei Bedarf Unreinheiten des Gehäuses (vom 3D-Druck) entfernen, wenn das PCB
    daran hängen bleibt.
  - Mit 3 Stück M3x6 oder M3x8 in Unterseite verschrauben.
* Displaykabel in Gehäuse einstecken.
  - Das Kabel sollte außen um die Elektronik herumgeführt werden, *nicht*
    zwischen dem GPS- und SD-Karten-Modul hindurch. Im neuen Gehäuse sollte
    dort genug Platz sein.
  - Jetzt zeigt sich auch, warum ca. 5cm Abisolierung hier sinnvoll ist, denn
    ohne Isolierung ist das Kabel flexibler.
  - Stecker eindrücken (z.B. mit Pinzette)
  - Kabel so weit aus der Zugsicherung herausziehen, bis kein überschüssiges
    Kabel im Innenraum des Gehäuses ist, aber das Kabel nicht straff liegt.
  - Schrauben der Zugsicherung/Halterung anziehen
* GPS-Antenne einsetzen
  - Kabel mit kleinem Stecker durch das kleine Loch fädeln.
  - GPS-Antenne mit Schirmung nach unten, Keramik nach oben, in Aussparung einsetzen.
  - Stecker in GPS-Board aufstecken (sehr filigran, aber auch schwer zu
    stecken, z.B. mit Pinzette zusammendrücken, dabei auf richtigen Sitz achten
    um den Stecker nicht zu beschädigen).
  - GPS-Deckel auf Antenne aufschieben und mit 2 Stück M3x6 oder M3x8 fixieren.
  - Falls das Antennenkabel nicht reicht, kann die GPS-Antenne mithilfe eines
    hinreichend langen Antennenkabels mit IPEX/U.FL Stecker verlängert werden.
    Hierzu:
       - Wird der Metallschild des GPS moduls abgelötet
       - Das neue Kabel wird vorsichtig durch Rollen unter Cuttermesser auf etwa 
         5-7mm abisoliert
       - Die Schirmung wird zurückgeschoben
       - Noch vorsichtiger wird die innere Isolierung durch ganz sanftes rollen
         mit dem Cuttermesser abisoliert.
       - Das kurze Kabel wird ab- und das neue, längere angelötet.
       - Der Metallschild des Moduls wird wieder in ursprünglicher Ausrichtung 
         aufgelötet.
* Schalter in Gehäuse einsetzen
  - Einschaltrichtung mit "I/O" Aufdruck des Gehäuses vergleichen.
  - Wenn möglich mit der mitgelieferten Unterlegscheibe und Mutter fixieren.
  - Andernfalls hält der Deckel den Schalter auch an Ort und Stelle, aber er
    könnte etwas wackeln.
  - Schalterkabel entlang der Gehäusewand zur Buchse führen. Möglichst
    beide Adern verdrillen oder falls vorhanden zweiadriges Kabel
    verwenden.
  - Schalter einstecken.
* Sensoren einbauen
  - Auf der Rückseite des Sensors gibt es einen Pfeil, der mit "UP" die
    Richtung markiert, wo später oben sein soll.
  - Einen Sensor ins Hauptgehäuse einbauen, den anderen in den Deckel.
  - Sensoren einstecken. Wenn möglich, den Sensor im Gehäuse an das nächste
    Sensorboard anschließen, den Sensor vom Deckel in das entferntere.
  - Bei Phantommessungen auf den Sensoren hat es in einigen Fällen geholfen,
    die Kabel der Sensoren möglichst weit voneinander entfernt zu führen:
      - Deckelsensorkabel an der Oberkante des Sensorboards beim ESP entlang
      - Gehäusesensorkabel möglichst weit vom Deckelsensor entfernt und von
        unten zum Steckkontakt des hinteren Sensorboards führen. So sind 
        beide Sensorkabel möglichst weit vom jeweils entegengesetzten Board
        entfernt.
    
* Akku einbauen
  - Akku im Deckel mit Kabelbinder fixieren.
  - Einstecken. Polung beachten!
  - Möglicherweise überstehendes Kabel möglichst auf der Seite des GPS 
    verstauen. Beide Adern verdrillen und parallel legen oder falls 
    vorhanden zweiadriges Kabel verwenden.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/19_Assembly/DSC08084.JPG"
    alt="Akku und Ultraschallsensor an Deckel montieren ('Up'-Pfeil beachten)" >}}
  {{< slider-image
    src="PCB00.03.10_19_Gehaeuse_06_US-Sensore_anstecken.jpg"
    alt="Ultraschallsensoren einstecken" >}}
  {{< slider-image
    src="PCB00.03.10_19_Gehaeuse_07_USB-C-Ladebuchse_ohne_Gewalt_in_Aussparung_einfaedeln.jpg"
    alt="Ladebuchse (USB-C) ohne Gewalt in die Aussparung einfädeln" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_02_PCB_festschrauben.jpg"
    alt="PCB festschrauben" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_03_Halterung_und_Zugsicherung_festschrauben.jpg"
    alt="Halterung und Zugentlastung (mit Kabelauslass Richtung Gehäusedeckel) festschrauben" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_04_Abschirmung_vorbereiten.jpg"
    alt="Abschirmung vorbereiten (8-10 Lagen Alufolie mit Klebeband isoliert oder eingeschweißt, alternativ der zugeschnittene Boden eines Teelichts, umwickelt mit einem Teil eines Gefrierbeutels)" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_05_Abschirmung_platzieren.jpg"
    alt="Abschirmung zwischen den Sensorboards platzieren und vor Einbau des Ein/Ausschalters innenliegenden Federring entfernen, um Einbauhöhe nicht zu überschreiten" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_06_GPS-Deckel_festschrauben_Orientierung_Halterung.jpg"
    alt="GPS-Deckel festschrauben" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_07_Deckel_festschrauben.jpg"
    alt="Deckel festschrauben" >}}
  {{< slider-image
    src="v00.03.12/19_Assembly/DSC08101.JPG"
    alt="Fertig!" >}}
{{< /slider >}}

Viel Spaß bei der [Nutzung]({{<relref "/docs/user-guide">}})!
