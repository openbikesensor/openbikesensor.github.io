---
title: Bauanleitung für v00.03.12
linkTitle: Bauanleitung
aliases:
- /bauanleitung
- /bauanleitung/v00.03.12
---

{{% alert title="Achtung" color="danger" %}}
Diese Bauanleitung enthält möglicherweise noch Fehler und Teile die noch nicht aktualisiert wurden seit der letzte Version.
{{% /alert %}}

Dies ist die Anleitung zum Aufbau des vertikalen OpenBikeSensors v00.03.12.
Andere Versionen können über das Dokumentationsmenü aufgerufen werden.

{{< imgproc "images/PCB00.03.10_short5" Fit "800x600" >}}
Das fertig bestückte PCB eines OBS v00.03.
{{< /imgproc >}}

## Voraussetzungen

Diese Anleitung setzt voraus, dass die Grundtechniken wie Löten, das Abisolieren von Kabeln und das Crimpen von JST-Verbindern bereits bekannt sind. Für letzteres empfehlen wir das [JST-Crimp-Tutorial](https://www.youtube.com/watch?v=jHfYzrSF4pY). Warnhinweise und Tipps zu Werkzeugbenutzung finden sich am Anfang der Bauanleitung für das [Vorgängermodell v00.02]({{<relref "/docs/hardware/v00.02/build-instructions">}}).

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
    src="PCB00.03.10_02_DetailBuchsenleite01_zuschneiden.jpg"
    alt="Buchsenleite zuschneiden" >}}
  {{< slider-image
    src="PCB00.03.10_02_DetailBuchsenleite02_ausrichten.jpg"
    alt="Buchsenleisten auf ESP32 aufstecken" >}}
  {{< slider-image
    src="PCB00.03.10_02_DetailBuchsenleite03_ausrichten.jpg"
    alt="Buchsenleisten auf ESP32 aufstecken" >}}
  {{< slider-image
    src="PCB00.03.10_02_DetailBuchsenleite04_aufPCBplatzieren.jpg"
    alt="Gemeinsam auf dem PCB platzieren" >}}
  {{< slider-image
    src="PCB00.03.10_02_DetailBuchsenleite04_an4Eckenloeten.jpg"
    alt="Zunächst an einem Eckpunkt fixieren" >}}
  {{< slider-image
    src="PCB00.03.10_02_DetailBuchsenleite06_an4Eckenloeten.jpg"
    alt="Ausrichten und auf der gegenüberliegenden Seite ebenfalls fixieren" >}}
  {{< slider-image
    src="PCB00.03.10_02_DetailBuchsenleite07_an4Eckenloeten.jpg"
    alt="Ebenso die andere Seite" >}}
  {{< slider-image
    src="PCB00.03.10_02_DetailBuchsenleite08_alleLoetstellen.jpg"
    alt="Alle äußeren Pins festlöten" >}}
  {{< slider-image
    src="PCB00.03.10_02_DetailBuchsenleite09_alleLoetstellen.jpg"
    alt="Alle äußeren Pins festlöten" >}}
  {{< slider-image
    src="PCB00.03.10_02_DetailBuchsenleite10_innereLoetstellen.jpg"
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
    src="PCB00.03.10_03_Spannunsversorgung_02_Stiftleisten_ablaengen.jpg"
    alt="Vorbereitete Stiftleisten" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_03_Boardplatzieren.jpg"
    alt="Board platzieren und mit Stiften ausrichten" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_04_Boardloeten01.jpg"
    alt="Freie Kontakte löten" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_06_Stifte_entfernen.jpg"
    alt="Stifte entfernen" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_05_fertigloeten.jpg"
    alt="Restliche Kontakte löten" >}}
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
    src="PCB00.03.10_03_Spannunsversorgung_07_LademodulmitStiften.jpg"
    alt="Lademodul mit Stiften" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_07_Lademodulplatziert.jpg"
    alt="Lademodul platziert" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_10_Oberseitemit2Loetstellen.jpg"
    alt="Oberseite mit 2 Lötstellen" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_09_vonUntenAnloten.jpg"
    alt="Von unten anlöten" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_08_schwarze_Plastikteile_von_Stiftleiste_entfernt.jpg"
    alt="Schwarze Plastikteile von Stiftleiste entfernen" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_11_Oberseitefertigverloetet.jpg"
    alt="Oberseite fertig verlötet" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_12_Unterseite.jpg"
    alt="Unterseite" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_13_AufBeidenSeitenStifteKuerzen.jpg"
    alt="Auf beiden Seiten Stifte kürzen" >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_13_UnterseiteVerloetet.jpg"
    alt="Unterseite verlöten" >}}
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

{{% alert title="Achtung" color="danger" %}}
Die Bilder sind noch nicht angepasst für diese Version. Text beachten!
{{% /alert %}}

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_06_Widerstaende_01_bereitlegen.jpg"
    alt="Die Widerstände bereitlegen" >}}
  {{< slider-image
    src="PCB00.03.10_06_Widerstaende_01_platzieren.jpg"
    alt="Auf dem Board platzieren" >}}
  {{< slider-image
    src="PCB00.03.10_06_Widerstaende_01_verloetenUndKuerzen.jpg"
    alt="Auf der Rückseite verlöten und kürzen" >}}
  {{< slider-image
    src="DetailSMDResistor_01_Loetpunkt"
    alt="Einen Lötpunkt auf eines der Pads von R7 setzen" >}}
  {{< slider-image
    src="PCB00.03.10_01_DetailSMDResistor_02_Loetpunktgesetzt.jpg"
    alt="Der Lötpunkt ist auf ein Pad von R7 gesetzt" >}}
  {{< slider-image
    src="PCB00.03.10_01_DetailSMDResistor_03_Widerstandaufschieben.jpg"
    alt="Den Widerstand flach von der Seite darauf schieben" >}}
  {{< slider-image
    src="PCB00.03.10_01_DetailSMDResistor1.jpg"
    alt="Widerstand R6 ebenfalls so anbringen" >}}
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
    src="PCB00.03.10_04_Kondesatoren_01_KondensatorenPlatzieren.jpg"
    alt="Kondensatoren platzieren, auf Polung achten!" >}}
  {{< slider-image
    src="PCB00.03.10_04_Kondesatoren_01_KondensatorenUmbiegen.jpg"
    alt="Draht auf der Rückseite umbiegen" >}}
  {{< slider-image
    src="PCB00.03.10_04_Kondesatoren_01_KondensatorenVerloetenUndKuerzen.jpg"
    alt="Verlöten und Drähte kürzen" >}}
{{< /slider >}}

## Schritt 6: Lötpunkt / Brücke

* JP1 mit einem Lötpunkt versehen und damit überbrücken

## Schritt 7: Sicherung

* Sicherung an Position F1 stecken, verlöten, abkneifen

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_07_Sicherung_01.jpg"
    alt="Die Sicherung (oben rechts) anbringen" >}}
{{< /slider >}}

## Schritt 8: Batteriekabel /-stecker

* Stecker zusammenstecken
* Beschriftung auf der Platine beachten (Rot: „Plus“, Schwarz: „Minus“)
* Auf der Rückseite anlöten
* Kabel wieder abziehen

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_08_Batteriestecker_01.jpg"
    alt="Der Batterieverbinder mit Kabel, um die Polung zu prüfen" >}}
  {{< slider-image
    src="PCB00.03.10_08_Batteriestecker_02.jpg"
    alt="Auf der Rückseite verlöten" >}}
{{< /slider >}}

## Schritt 9: Diode

* Polung beachten!
* Diode umbiegen und stehend auf dem weiter vom Batteriestecker entfernten Kontakt aufsetzen
* Der markierte Ring muss oben stehen
* Löten, Enden abkneifen

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_09_Diode_01.jpg"
    alt="Die verlötete Diode" >}}
{{< /slider >}}

## Schritt 10: Verbinder für Taster und Display

* J5: 5-Pin-Konnektor gemäß Markierung auf Platine aufsetzen (Aussparungen zeigen Richtung Platine).
  * 2 Punkte von unten verlöten
  * Platine umdrehen, restliche Pins verlöten.

* J6 (Taster-Stecker) hat keine Polung
  * 2-Pin-Connector so aufsetzen, dass er möglichst wenig über den Rand der
    Platine übersteht und verlöten

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_10_Steckerleisten_01.jpg"
    alt="Verbinder für Schalter und Display auf der Oberseite anbringen" >}}
{{< /slider >}}

## Schritt 11: Sensorboards

* Falls gewinkelte, 2-polige JST-Steckerverbinder vorhanden sind:
  * Die JST-Stecker aus dem Sensorboard auslöten.
  * Gewinkelte JST-Stecker stattdessen einlöten.
  * Das Kabel, wenn eingesteckt, sollte weg von den 4 Pins des Boards zeigen
    (nach oben, wenn montiert).
* Andernfalls:
  * Weißes Plastikteil der JST-Buchse vorsichtig entfernen
  * Kontakte nach oben umbiegen – von den Steckkontakten weg
* Beide Sensorboards stecken, dabei Beschriftung (+3V3, TRIG, ECHO, GND) beachten
* Boards senkrecht und direkt auf der Grundplatine aufliegend verlöten
* Überstehende Stifte kürzen

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_11_Sensormodule_01_platzieren.jpg"
    alt="Boards grob platzieren" >}}
  {{< slider-image
    src="PCB00.03.10_11_Sensormodule_02_ausrichten.jpg"
    alt="Ausrichten, sodass sie senkrecht stehen und sich nicht berühren" >}}
  {{< slider-image
    src="PCB00.03.10_11_Sensormodule_04_loeten.jpg"
    alt="Kontakte auf der Rückseite verlöten" >}}
  {{< slider-image
    src="PCB00.03.10_11_Sensormodule_05_kuerzen.jpg"
    alt="Beine kürzen" >}}
{{< /slider >}}

## Schritt 12: SD-Modul

* Gewinkelte Stiftleiste mit 6 Pins vorbereiten.
* Gewinkelte Stiftleiste genau wie in der Abbildung gezeigt in SD-Modul stecken.
* Die Ausrichtung ist wichtig: Es gibt 8 Arten die Stiftleiste zu stecken, 7 funktionieren nicht.
* Stiftleiste mit Modul verlöten und überstehende Pins abkneifen
* Modul auf OBS-PCB stecken (Ausrichtung und Beschriftung beachten)
* Verlöten und Stifte kürzen

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_12_SD-Karte_01_mit_Stiftleisten.jpg"
    alt="SD-Karten Modul und Stiftleiste" >}}
  {{< slider-image
    src="PCB00.03.10_12_SD-Karte_02_Stiftleiste_gesteckt.jpg"
    alt="Stiftleiste in Modul einstecken und verlöten (Richtung beachten)" >}}
  {{< slider-image
    src="PCB00.03.10_12_SD-Karte_03_Modul_platziert.jpg"
    alt="Modul platzieren" >}}
  {{< slider-image
    src="PCB00.03.10_12_SD-Karte_04_Modul_geloetet.jpg"
    alt="Auf der Rückseite anlöten und kürzen" >}}
{{< /slider >}}

## Schritt 13: GPS-Modul

* Gewinkelte Stiftleiste mit 4 Pins vorbereiten
* Stiftleiste in OBS-PCB verlöten (Unterseite, langes Ende der Pins seitlich herausschauend)
* Eng anliegend verlöten
* GPS-Modul aufstecken
* Verlöten und Stifte kürzen

* **Achtung!** Achte darauf, dass das kurze Ende der Stiftleiste in das Board und das lange Ende in das GPS-Modul eingelötet wird. Ansonsten ragt das GPS-Modul aus dem Gehäuse heraus.

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_13_GPS-Module_01_Modul.jpg"
    alt="Das GPS-Modul mit Antenne (große Variante). Überstehenden Teil der Platine abknicken und entfernen." >}}
  {{< slider-image
    src="PCB00.03.10_13_GPS-Module_02_Modul_mit_Stiftleiste.jpg"
    alt="Das GPS-Modul mit Stiftleiste" >}}
  {{< slider-image
    src="PCB00.03.10_13_GPS-Module_03_Stiftleiste_ohne_Modul_ins_PCB_stecken.jpg"
    alt="Stiftleiste ohne Modul von unten ins PCB stecken" >}}
  {{< slider-image
    src="PCB00.03.10_13_GPS-Module_05_Stiftleiste_anloeten.jpg"
    alt="Stiftleiste auf Vorderseite anlöten" >}}
  {{< slider-image
    src="PCB00.03.10_13_GPS-Module_06_Stiftleiste_geloetet.jpg"
    alt="Stiftleiste gelötet" >}}
  {{< slider-image
    src="PCB00.03.10_13_GPS-Module_07_GPS-Modul_ausgerichtet.jpg"
    alt="GPS-Modul aufstecken und ausrichten" >}}
  {{< slider-image
    src="PCB00.03.10_13_GPS-Module_08_GPS-Modul_geloetet.jpg"
    alt="GPS-Modul anlöten, Kontakte kürzen" >}}
{{< /slider >}}


**Damit ist das PCB fertig bestückt!!!**

## Schritt 14: Ein/Aus-Schalter

* 2x10cm Kabel crimpen und in 2-fach Stecker einführen
* Andere Kabelenden seitlich an den Schalter löten.
* **Achtung**:
  * Orientierung der Kabelenden und Auswahl der beiden Kontakte am Schalter beachten und eventuell mit Multimeter nachmessen, damit Schalterzustand später mit der Beschriftung am OBS-Gehäuse übereinstimmt (0 unten, I oben).
  * Nur seitlich angelötet passen die Kabel später in das Gehäuse.
  * Zu viel Hitze lässt den Schalter innen schmelzen, was zu Wackelkontakten führen kann.

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_14_Schalter_01_Schalter_mit_Kabel_und_Stecker.jpg"
    alt="Schalter mit Kabel und stecker" >}}
{{< /slider >}}

## Schritt 15: Ultraschallsensor-Kabel kürzen und crimpen

* Tipp: Zunächst mit überschüssigen Kabelteilen und Crimpkontakten üben!
* Die langen schwarzen Kabel der Sensoren auf etwa 10cm kürzen, da die langen
  Kabel nicht in das Gehäuse passen und auch die Plastikeinfassung der
  bestehenden Stecker zu starr und zu dick für das Gehäuse ist
* Empfehlung: Schrumpfschlauch (sofern vorhanden, optional) direkt nach dem
  Kürzen auf das schwarze Sensorkabel aufziehen, noch bevor es abisoliert und
  gecrimpt wird.
* Vorsichtig! Koax-Kabel – der innere Leiter ist sehr dünn und kann leicht
  durchtrennt werden.
* Crimpkontakt muss für optimale Verbindung Leiter und Isolierung greifen

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_15_Sensor_01_Sensor_mit_gekuerztem_Kabel_und_Stecker.jpg"
    alt="Sensor mit gekürztem Kabel und Stecker" >}}
  {{< slider-image
    src="PCB00.03.10_15_Sensor_03_Sensor_Detail_Stecker.jpg"
    alt="Detailaufnahme Stecker und Schirmung" >}}
{{< /slider >}}

## Schritt 16: Batteriekabel anlöten

* Die Akkus sind mit Lötfahnen ausgestattet.
* Auf 12cm gekürztes Batteriekabel an die Enden der Fahnen angelöten
* Polung beachten: Pluspol an Akku auf der Seite mit Einkerbung im Akku-Gehäuse
* **Polung Im Zweifel nachmessen**
* Die Batterie und Kabel werden mit einem kleinen Kabelbinder im Deckel fixiert
* Batteriekontakte mit Isolierband o.Ä. isolieren

**Batterie noch nicht einstecken.**

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_16_Akku_01_Akku_mit_Kabel_und_Stecker.jpg"
    alt="Akku mit Kabel und Stecker (Polung beachten!)" >}}
  {{< slider-image
    src="PCB00.03.10_16_Akku_02_Kontakte_isolieren.jpg"
    alt="Kontakte isolieren" >}}
{{< /slider >}}

## Schritt 17: Gehäuse vorbereiten

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

## Schritt 18: Display-Kabel

{{% alert title="Reihenfolge beachten" color="warning" %}}
Beim Display ist die Reihenfolge sehr wichtig! Ein Kabel mit Steckern auf
beiden Seiten oder gelötetem Kabel/Knopf passt nicht mehr durch das Gehäuse.
{{% /alert %}}

* Kabel durch Displaygehäuse-Unterteil führen.
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
  aufliegt, damit er Displaygehäuse passt.

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
    src="PCB00.03.10_17_Display_01_Kabel_abisoliert_Crimp_in_Zange.jpg"
    alt="Kabel abisoliert, Crimp in Zange" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_02_alle_5_Adern_gecrimpt.jpg"
    alt="Alle 5 Adern crimpen" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_03_Stecker.jpg"
    alt="OBS-Seite in Stecker einführen" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_04_Kabel_durch_Gehaeuseunterteil_ziehen.jpg"
    alt="Kabel durch Gehäuseunterteil ziehen" >}}
{{< /slider >}}

## Schritt 19: Display Zusammenbau

* 0,96-Zoll OLED-Boards haben teils etwas unterschiedliche Größen
  * Platine des Displays nach Bedarf etwas zurechtschneiden, insbesondere an den Ecken (Seitenschneider)
  * Je nach Genauigkeit des 3D-Drucks das Gehäuse etwas weiter ausfräsen
* Schutzfolie von Display abziehen
* Display in Gehäuseoberteil (das mit dem Button) einsetzen
* Magnete in die Seitentasche einsetzen.
  * Wenn Kompatibilität mit anderen OBS gewünscht ist, muss auf gleiche Polung
    geachtet werden, da sonst die Halterungen nicht austauschbar sind.
* Gehäuseunterteil aufsetzen und mit Schrauben fixieren.
* Zugentlastung einsetzen:
  * Erste Hälfte der Zugentlastung einsetzen
  * Zweite Hälfte von außen angewinkelt eindrücken, bei Bedarf die unteren
    Ecken mit dem Seitenschneider leicht abrunden, damit sie sich leichter in
    die vorgesehene Position stecken lässt.
  * Mit M3x8 Schrauben und Muttern fixieren, dabei auf sechseckige Fixierung
    für Sechskant-Muttern auf jeweils einer Seite der Zugentlastung achten.

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_05_verschiedene_Displays_vom_gleichen_Lieferanten.jpg"
    alt="Verschiedene Displays vom gleichen Lieferanten" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_07_Display_in_Gehäuse_einpassen_keine_Gewalt.jpg"
    alt="Display in Gehäuse einpassen, ohne Gewalt" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_07a_Display_mit_Seitenschneider_stutzen.jpg"
    alt="Wenn nötig, Display mit Seitenschneider stutzen" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_09_Fuenftes_Kabel_und_VDD_Verbindung_an_Stecker_Anloeten.jpg"
    alt="Fünftes Kabel und VDD Verbindungsstück an Stecker anlöten" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_10_Magnete_passend_einlegen.jpg"
    alt="Magnete passend einlegen" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_13_Zugsicherung.jpg"
    alt="Die Teile der Zugentlastung" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_14_Zugsicherung_erstes_teil_eingesetzt.jpg"
    alt="Erstes Teil einsetzen" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_15_Zugsicherung_zweites_Teil_eingesetzt.jpg"
    alt="Zweites Teil einsetzen" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_16_Zugsicherung_verschraubt.jpg"
    alt="Zugentlastung verschrauben" >}}
{{< /slider >}}

## Schritt 20: Elektronik testen

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
    src="PCB00.03.10_18_Test_Schalter_und_Batterie_anschließen_Testen.jpg"
    alt="Schalter und Batterie anschließen zum Testen" >}}
{{< /slider >}}

## Schritt 21: Zusammenbau

* Kabel und Halterung
  - Displaykabel durch rechteckiges Loch einführen (der 5-polige JST-Stecker
    passt diagonal hindurch).
  - Etwa 5-10cm des Kabels im Gehäuse lassen.
  - Die 4 Sechskant-Muttern einsetzen, Halterung mit Zugentlastung anbringen und
    damit das Kabel fixieren. Noch nicht festziehen, nur sicherstellen dass die
    Muttern nicht mehr herausfallen.
  - Später werden wir das Kabel auf die richtige Länge ziehen und die Halterung
    Schrauben fest anziehen.
* Einen Ultraschallsensor in den Deckel einbauen.
* PCB in Hauptgehäuse platzieren
  - SD-Karte einlegen.
  - ESP32 aufstecken.
  - Gesamtes Boad in leichtem Winkel herabsenken, am Displaykabel vorbei
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
* Schalter in Gehäuse einsetzen
  - Einschaltrichtung mit "I/O" Aufdruck des Gehäuses vergleichen.
  - Wenn möglich mit der mitgelieferten Unterlegscheibe und Mutter fixieren.
  - Andernfalls hält der Deckel den Schalter auch an Ort und Stelle, aber er
    könnte etwas wackeln.
  - Schalter einstecken.
* Sensoren einbauen
  - Auf der Rückseite des Sensors gibt es einen Pfeil, der mit "UP" die
    Richtung markiert, wo später oben sein soll.
  - Einen Sensor ins Hauptgehäuse einbauen, den anderen in den Deckel.
  - Sensoren einstecken. Wenn möglich, den Sensor im Gehäuse an das nächste
    Sensorboard anschließen, den Sensor vom Deckel in das entferntere.
* Akku einbauen
  - Akku im Deckel mit Kabelbinder fixieren.
  - Einstecken. Polung beachten!

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_19_Gehaeuse_04_Akku_und_Ultraschallsensor_an_Deckel_montieren_Bezeichnung_UP_beachten.jpg"
    alt="Akku und Ultraschallsensor an Deckel montieren ('Up'-Pfeil beachten)" >}}
  {{< slider-image
    src="PCB00.03.10_19_Gehaeuse_05_GPS_anschliessen.jpg"
    alt="GPS-Antenne anschließen" >}}
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
    src="PCB00.03.10_20_Zusammenbau_08_Magnete_in_USB-Deckel_druecken.jpg"
    alt="Magnete in die Abdeckung der Ladebuchse eindrücken (eventuell mit etwas Sekundenkleber)" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_09_weitere_Magnete_draufsetzen.jpg"
    alt="Weitere Magnete daraufsetzen (für korrekte Polung)" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_10_mithilfe_des_Deckels_Magnete_in_Gehaeuse_druecken.jpg"
    alt="Zusammen die Magnete in das Gehäuse drücken" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_11_fertig.jpg"
    alt="Fertig" >}}
{{< /slider >}}

Viel Spaß bei der [Nutzung]({{<relref "/docs/user-guide">}})!
