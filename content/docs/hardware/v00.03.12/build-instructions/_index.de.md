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

## Schritt 1: SMD-Widerstände

* Widerstände R6 und R7 anbringen:
  * Einen Lötpunkt auf ein Pad setzen.
  * Widerstand flach auf das PCB legen, Lötpunkt erneut schmelzen und
    das Bauteil mit der Pinzette darauf schieben.
  * Andere Seite normal festlöten.

{{< slider >}}
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

## Schritt 2: Buchsenleisten

* Eine der beiden Buchsenleisten muss auf 15 Pins gekürzt werden.
* Mit dem Seitenschneider kürzen und mit dem Cuttermesser nacharbeiten.
* Buchsenleisten so an ESP32 stecken, dass die gekürzte Seite den Platz für C3 frei lässt
* Beachten: Erster Kontakt der gekürzten Buchsenleiste an C3 (ESP32 Board Richtung USB-Buchse) zeigt nach innen
* Kontakte auf der gegenüberliegenden Seite zeigen versetzt nach innen
* Längere Buchsenleiste steht gegenüber der Position von C3 über
* Buchsenleisten mit gestecktem ESP32 positionieren
* Beim Positionieren darauf achten, dass die inneren Kontakte auf den längeren
  Lötfahnen auf der Platine sitzen: Auf Seite von J7 zeigt erster Pin nach
  außen, auf der anderen Seite erster Pin nach innen
* Jede Leiste an 2 Ecken festlöten
* Danach alle äußeren Verbindungen löten
* ESP32 abziehen und dann die inneren Kontakte löten.

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

## Schritt 3: Stromversorgung

* Für den roten Spannungsregler 1x1 und 1x2 Stifte vorbereiten.
* Spannungsregler mit Stiften in zwei gegenüber liegenden Lötstellen fixieren
* Stifte nicht verlöten!
* Mit Stiften ausgerichtetes Modul an den anderen beiden SMD-Pads verlöten
* Stifte abziehen und die restlichen Kontakte verlöten

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

* Für das blaue Lademodul 2x2 Stifte und 2x1 Stift vorbereiten.
* Modul mit Stiften fixieren und darauf achten, dass es am PCB anliegt
* Von unten 2 Stifte verlöten. Stifte auf der anderen Seite fixieren
* Umdrehen und restliche Kontakte löten
* Die schwarzen Plastikteile entfernen und diese Seite auch verlöten
* Alle Stifte mit dem Seitenschneider kürzen

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

## Schritt 4: Kondensatoren

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

## Schritt 5: Den Transistor überbrücken

* Den Transistor NICHT verwenden. Einige mit Transistor gebaute Module funktionieren nicht.
* Statt des Transistors eine Drahtbrücke aus den vorher abgekniffenen Kondensatorpins einlöten
* Drahtbrücke verbindet die beiden äußeren Kontakte der Transistor-Position.

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_05_Transistorbruecke_01_Bruecke.jpg"
    alt="Aus einem Stück Draht eine Brücke biegen" >}}
  {{< slider-image
    src="PCB00.03.10_05_Transistorbruecke_01_BrueckeEinsetzen.jpg"
    alt="Die Brücke bei Q1 von der Oberseite einsetzen" >}}
  {{< slider-image
    src="PCB00.03.10_05_Transistorbruecke_01_BrueckeVerloetenUndKuerzen.jpg"
    alt="Auf der Rückseite verlöten und kürzen" >}}
{{< /slider >}}

## Schritt 6: THT-Widerstände

* Widerstände richtig zuordnen:
  * R1=10kOhm (braun - schwarz - orange - gold)
  * R2=150kOhm (braun - grün - gelb - gold)
  * R3=300kOhm (orange - schwarz - gelb - gold)
* Widerstände stecken, verlöten, abkneifen.

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
{{< /slider >}}

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

* Beim Sensorboard mit Kontakten Richtung ESP32:
  * Plastikteil der Buchse zum Sensor vorsichtig entfernen
  * Kontakte nach oben umbiegen – von den Steckkontakten weg
* Beide Sensorboards stecken, dabei Beschriftung (+3V3, TRIG, ECHO, GND) beachten
* Boards gerade und dicht am OBS-PCB ausrichten und verlöten
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
* Die langen schwarzen Kabel der Sensoren auf etwa 10cm kürzen, da die langen Kabel nicht in das Gehäuse passen und auch die Plastikeinfassung der bestehenden Stecker zu starr und zu dick für das Gehäuse ist
* Vorsichtig! Koax-Kabel – der innere Leiter ist sehr dünn und kann leicht durchtrennt werden.
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

## Schritt 17: Display-Kabel

**Hinweis: Beim Display ist die Reihenfolge sehr wichtig! Ein Kabel mit
Steckern auf beiden Seiten oder gelötetem Kabel/Knopf passt nicht mehr durch
das Gehäuse.**

* Kabel abisolieren und auf einer Seite 5x crimpen. Dabei **nur 1-2mm
  abisolieren und für stabilen Halt mit Isolierung crimpen**.
* Gecrimpte Kabelenden in den 5er Stecker einführen. OBS-PCB und Display sind
  beschriftet. Zuordnung der Farben zu Beschriftung notieren.
* **Vor Anschluss des Displays Kabel durch Displaygehäuse-Unterteil führen**
* Zwei Optionen für Anschluss an das OLED-Displayboard
  1. Display-Seite crimpen
    * Nur 4x Crimpen!
    * Das Kabel, das im OBS mit „BUT“ verbunden wird, zunächst frei lassen
    * Kabel für VDD zusammen mit zweitem 2-3 cm Kabel crimpen
    * Am OLED-Displayboard Plastikteile an Steckkontakten entfernen und Pins um knapp 1/3 kürzen
    * Prüfen, ob Crimpstecker bündig auf Platine steckt
    * Ggf. Pins weiter kürzen, damit Board und Pins ins Displaygehäuse passen
  2. Display-Seite löten
    * VDD muss auch hier an Display UND Taster verbunden werden
    * Die andere Seite des Tasters mit dem am OBS mit „BUT“ beschrifteten Kabel verbinden
    * Die übrigen 4 Kabel entsprechend Farbe und Beschriftung am PCB zuordnen.

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

* 0,96 Zoll OLED-Boards haben teils etwas unterschiedliche Größen
* OLED Displayboard ggf. wie abgebildet etwas kürzen, insbesondere an den Ecken
* Je nach Genauigkeit des 3D-Drucks das Gehäuse etwas weiter ausfräsen
* Board und Taster in Displayoberseite einsetzen

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
{{< /slider >}}

* Kabel von BUT an ein Ende des Tasters anlöten
* Kurze Kabel von VDD an zweiten Pin des Tasters löten. **Achtung:** Der Taster ist
  hitzeempfindlich, bei zu langem/heißem Löten schmilzt der Kunststoff.

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_06_kurzes_Stueck_Kabel_2-3cm.jpg"
    alt="Kurzes Stück Kabel (2-3cm) für Button" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_08_Gegenseite_nur_4_Adern_crimpen_1_Zusatzkabel_auf_VDD.jpg"
    alt="Auf Display-Seite 4 Adern crimpen, Zusatzkabel zu VDD dazu" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_09_Fuenftes_Kabel_und_VDD_Verbindung_an_Stecker_Anloeten.jpg"
    alt="Fünftes Kabel und VDD Verbindungsstück an Stecker anlöten" >}}
{{< /slider >}}

**Display zusammensetzen**

* Magnete in Displaygehäuse und Lenkerhalterung passend zur Fixierung einlegen
* Muttern mit längeren Schrauben in Aussparungen in Gehäuse-Unterseite einziehen. Man kann bei Bedarf alle im Folgenden genutzten Muttern am äußeren Rand mit Sekundenkleber fixieren, dabei aber den Kleber unbedingt von den Gewinden fernhalten!
* Längere Schrauben durch M3x18 ersetzen

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_10_Magnete_passend_einlegen.jpg"
    alt="Magnete passend einlegen" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_11_Muttern_in_Gehaeuse_ziehen_mit_groeßeren_Schrauben.jpg"
    alt="Muttern in Gehäuse ziehen mithilfe langer Schrauben" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_12_Grosse_Schrauben_durch_richtige_ersetzen.jpg"
    alt="Lange Schrauben durch die richtigen, kürzeren ersetzen" >}}
{{< /slider >}}

**Zugentlastung einsetzen**

* Erstes Teil der Zugentlastung einsetzen
* Zweites Teil der Zugentlastung von außen angewinkelt eindrücken, bei Bedarf die Seiten des einzusteckenden Endes zum Kabel hin schräg anschleifen
* Für optimale Zugentlastung Kabel auf ganzer Länge der Zugentlastung mit Isolierung fixieren (Muttern und Schrauben M3xXX anziehen)
* Fixierung für Sechskant-Muttern auf einem Teil der Zugentlastung beachten

{{< slider >}}
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
    src="PCB00.03.10_18_Test_Schalter_und_Batterie_anschließen_Testen.jpg"
    alt="Schalter und Batterie anschließen zum Testen" >}}
{{< /slider >}}

## Schritt 19: Gehäuse vorbereiten

Alle Muttern vor den elektronischen Bauteilen in das Gehäuse stecken. Manche können herausfallen, andere sitzen sehr fest. Auch hier kann Sekundenkleber verwendet werden.

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_19_Gehaeuse_03_GPS_Antenne_einsetzen_keine_Gewalt.jpg"
    alt="GPS-Antenne einsetzen (keine Gewalt)" >}}
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
{{< /slider >}}

## Schritt 20: Zusammenbau

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_01_Displaykabel_zwischen_SD-Kartenleser_und_GPS_fuehren.jpg"
    alt="Displaykabel zwischen SD-Kartenleser und GPS-Modul führen" >}}
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
