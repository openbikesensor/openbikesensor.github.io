# Kurzanleitung für {{ include.version }}

**Achtung:** Diese Bauanleitung ist ein Entwurf. Sie enthält Fehler und falsche Bilder und muss noch 
{%- if include.version == '00.02' %}
auf die PCB-Version 00.02.xx angepasst
{%- elsif include.version == '00.03' %}
vervollständigt
{%- endif %}
werden.

Dies ist die Kurzanleitung zum Aufbau eines OpenBikeSensors. In dieser
Anleitung wird nicht erklärt, wie die einzelnen Schritte genau durchzuführen
sind. Stattdessen gehen wir davon aus, dass die Grundtechniken wie Löten, das
Abisolieren von Kabeln und das Crimpen von JST-Verbindern bereits bekannt sind.
Für eine ausführlichere Anleitung mit Hilfestellung zu diesen Themenbereichen
gibt es die [detaillierte Aufbauanleitung](/hardware/v{{ include.version
}}/build-instructions.html).

<figure>
  {% if include.version == '00.02' -%}
    <img src="/assets/images/v00.02/20200726_184611.jpg" class="inline" />
    {%- assign current_version = '00.02.07' -%}
  {%- elsif include.version == '00.03' -%}
    <img src="/assets/images/v00.03/PCB00.03.10_short5.jpg" class="inline" />
    {%- assign current_version = '00.03.10' -%}
  {%- endif %}
  <figcaption>Das fertig bestückte PCB eines OBS v{{ current_version }}.</figcaption>
</figure>

## Hilfreiche Links und Anleitungen

* [JST-Crimp-Tutorial](https://www.youtube.com/watch?v=jHfYzrSF4pY) Tutorial fürs Crimpen mit Zangen in 2 Schritten.


## Schritt 1: SMD-Widerstände

* Widerstände R6 und R7 anbringen:
  * Einen Lötpunkt auf ein Pad setzen.
  * Widerstand flach auf das PCB legen, Lötpunkt erneut schmelzen und
    das Bauteil mit der Pinzette darauf schieben.
  * Andere Seite normal festlöten.

{% if include.version == '00.02' -%}
**ToDo: Bilder für Version 00.02.xx hinzufügen.** 
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_ResistorsSMD" %}
{% endif %}

## Schritt 2: Buchsenleisten

{% if include.version == '00.02' -%}
**ToDo: Bilder für Version 00.02.xx hinzufügen.** 
{% elsif include.version == '00.03' %}

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

{% include slider.html selector="Instructions_00_03_10_PinHeaders" %}
{% endif %}

## Schritt 3: Spannungsregler und Lademodul

* Für den roten Spannungsregler 1x1 und 1x2 Stifte vorbereiten.
* Spannungsregler mit Stiften in zwei gegenüber liegenden Lötstellen fixieren
* Stifte nicht verlöten!
* Mit Stiften ausgerichtetes Modul an den anderen beiden SMD-Pads verlöten 
* Stifte abziehen und die restlichen Kontakte verlöten

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_Regulator" %}
{% endif %}

* Für das blaue Lademodul 2x2 Stifte und 2x1 Stift vorbereiten. 
* Modul mit Stiften fixieren und darauf achten, dass es am PCB anliegt 
* Von unten 2 Stifte verlöten. Stifte auf der anderen Seite fixieren
* Umdrehen und restliche Kontakte löten
* Die schwarzen Plastikteile entfernen und diese Seite auch verlöten
* Alle Stifte mit dem Seitenschneider kürzen

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_Charger" %}
{% endif %}

## Schritt 4: Kondensatoren

* Bei C2 und C3: Polung auf Platine und Kondensator beachten! (Langer Pin: „Plus“, mit Streifen markierte Seite: „Minus“)
* Kondensatoren C1 bis C3 stecken
* Zum Fixieren umbiegen
* Verlöten und Draht abkneifen

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_Capacitors" %}
{% endif %}

## Schritt 5: Den Transistor überbrücken

* Den Transistor NICHT verwenden. Einige mit Transistor gebaute Module funktionieren nicht.
* Statt des Transistors eine Drahtbrücke aus den vorher abgekniffenen Kondensatorpins einlöten
* Drahtbrücke verbindet die beiden äußeren Kontakte der Transistor-Position.

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_TransistorBridge" %}
{% endif %}

## Schritt 6: THT-Widerstände

* Widerstände richtig zuordnen: 
  * R1=10kOhm (braun - schwarz - orange - gold)
  * R2=150kOhm (braun - grün - gelb - gold)
  * R3=300kOhm (orange - schwarz - gelb - gold)
* Widerstände stecken, verlöten, abkneifen.

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_ResistorsTHT" %}
{% endif %}

## Schritt 7: Sicherung

* Sicherung an Position F1 stecken, verlöten, abkneifen

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_Fuse" %}
{% endif %}

## Schritt 8: Batteriekabel /-stecker

* Stecker zusammenstecken 
* Beschriftung auf der Platine beachten (Rot: „Plus“, Schwarz: „Minus“)
* Auf der Rückseite anlöten
* Kabel wieder abziehen

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_BatteryConnector" %}
{% endif %}

## Schritt 9: Diode

* Polung beachten!
* Diode umbiegen und stehend auf dem weiter vom Batteriestecker entfernten Kontakt aufsetzen
* Der markierte Ring muss oben stehen
* Löten, Enden abkneifen

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_Diode" %}
{% endif %}

## Schritt 10: Verbinder für Schalter und Display 

* J5: 5-Pin-Konnektor gemäß Markierung auf Platine aufsetzen (Aussparungen zeigen Richtung Platine). 
  * 2 Punkte von unten verlöten
  * Platine umdrehen, restliche Pins verlöten.

* J6 (Schalter-Stecker) hat keine Plung
  * 2-Pin-Connector so aufsetzen, dass er möglichst wenig über den Rand der
    Platine übersteht und verlöten

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_Connectors" %}
{% endif %}

## Schritt 11: Sensorboards

* Beim Sensorboard mit Kontakten Richtung ESP32:
  * Plastikteil der Buchse zum Sensor vorsichtig entfernen 
  * Kontakte nach oben umbiegen – von den Steckkontakten weg 
* Beide Sensorboards stecken, dabei Beschriftung (+3V3, TRIG, ECHO, GND) beachten 
* Boards gerade und dicht am OBS-PCB ausrichten und verlöten
* Überstehende Stifte kürzen

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_SensorBoards" %}
{% endif %}

## Schritt 12: SD-Modul

* Gewinkelte Stiftleiste mit 6 Pins vorbereiten. 
* Gewinkelte Stiftleiste genau wie in der Abbildung gezeigt in SD-Modul stecken. 
* Die Ausrichtung ist wichtig: Es gibt 8 Arten die Stiftleiste zu stecken, 7 funktionieren nicht.
* Stiftleiste mit Modul verlöten und überstehende Pins abkneifen
* Modul auf OBS-PCB stecken (Ausrichtung und Beschriftung beachten)
* Verlöten und Stifte kürzen

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_SDCardModule" %}
{% endif %}

## Schritt 13: GPS-Modul

* Gewinkelte Stiftleiste mit 4 Pins vorbereiten
* Stiftleiste in OBS-PCB verlöten (Unterseite, langes Ende der Pins seitlich herausschauend)
* Eng anliegend verlöten
* GPS-Modul aufstecken 
* Verlöten und Stifte kürzen

* **Achtung!** Achte darauf, dass das kurze Ende der Stiftleiste in das Board und das lange Ende in das GPS-Modul eingelötet wird. Ansonsten ragt das GPS-Modul aus dem Gehäuse heraus.

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_GPSModule" %}
{% endif %}

**Damit ist das PCB fertig bestückt!!!**

## Schritt 14: Schalter

* 2x10cm Kabel crimpen und in 2-fach Stecker einführen 
* Andere Kabelenden seitlich an Schaler löten
* Orientierung beachten, damit Schalterzustand mit der Beschriftung (0 / I) am OBS-Gehäuse übereinstimmt

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_Switch" %}
{% endif %}

## Schritt 15: Ultraschallsensor-Kabel kürzen und crimpen

* Tipp: Zunächst mit überschüssigen Kabelteilen und Crimpkontakten üben!
* Die langen schwarzen Kabel der Sensoren auf etwa 10cm kürzen.
* Vorsichtig! Koax-Kabel – der innere Leiter ist sehr dünn und kann leicht durchtrennt werden. 
* Crimpkontakt muss für optimale Verbindung Leiter und Isolierung greifen

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_SensorWires" %}
{% endif %}

## Schritt 16: Batteriekabel anlöten

* Die Akkus sind mit Lötfahnen ausgestattet. 
* Auf 12cm gekürztes Batteriekabel an die Enden der Fahnen angelöten 
* Polung beachten: Pluspol an Akku auf der Seite mit Einkerbung im Akku-Gehäuse
* **Polung Im Zweifel nachmessen** 
* Die Batterie und Kabel werden mit einem kleinen Kabelbinder im Deckel fixiert
* Batteriekontakte mit Isolierband o.Ä. isolieren

**Batterie noch nicht einstecken.**

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_BatteryWires" %}
{% endif %}


## Schritt 17: Display-Kabel

**Hinweis: Beim Display ist die Reihenfolge sehr wichtig! Ein Kabel mit
Steckern auf beiden Seiten oder gelötetem Kabel/Knopf passt nicht mehr durch
das Gehäuse.**

* Kabel abisolieren und auf einer Seite 5x crimpen. Dabei **nur 1-2mm
  abisolieren und für stabilen Halt mit Isolierung crimpen**.
* Gecrimpte Kabelenden in den 5er Stecker einführen. OBS-PCB und Display sind
  beschriftet. Zuordnung der Farben zu Beschriftung notieren. {% comment %}Empfehlung: 
	* Braun – VCC/VDD
	* Schwarz – GND
	* Blau – BUT
	* Weiß – SDA
	* Grau – SCL
{% endcomment %}

* **Vor Anschluss des Displays Kabel durch Displaygehäuse-Unterteil führen**
* Zwei Optionen für Anschluss an das OLED-Displayboard 
  1. Display-Seite crimpen
    *  Nur 4x Crimpen! 
    * Das Kabel, das im OBS mit „BUT“ verbunden wird, zunächst frei lassen
    * Kabel für VDD zusammen mit zweitem 2-3 cm Kabel crimpen
    * Am OLED-Displayboard Plastikteile an Steckkontakten entfernen und Pins um ca. 1/3 kürzen
    * Prüfen, ob Crimpstecker bündig auf Platine steckt, 
    * Ggf. Pins weiter kürzen, damit Board und Pins ins Displaygehäuse passen
  2. Display-Seite löten
    * VDD muss auch hier an Display UND Taster verbunden werden
    * Die andere Seite des Tasters mit dem am OBS mit „BUT“ beschrifteteten Kabel verbinden
    * Die übrigen 4 Kabel entsprechend Farbe und Beschriftung am PCB zuordnen.

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_DisplayWiring" %}
{% endif %}

* OLED-Boards haben teils etwas unterschiedliche Größen
* OLED Displayboard ggf. wie abgebildet etwas kürzen
* Board und Button in Displayoberseite einsetzen

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_DisplayFitting" %}
{% endif %}

* Kabel von BUT an ein Ende des Tasters anlöten
* Kurze Kabel von VDD an zweiten Pin des Tasters löten. **Achtung:** Taster ist
  hitzeempfindlich, bei zu langem/heißem Löten schmilzt der Kunststoff.

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_Button" %}
{% endif %}

**Display zusammensetzen**

* Magnete in Displaygehäuse und Lenkerhalterung passend zur Fixierung einlegen
* Muttern mit längeren Schrauben in Aussparungen in Gehäuse-Unterseite einziehen
* Längere Schrauben durch M3x18 ersetzen

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_DisplayAssembly" %}
{% endif %}

**Zugentlastung einsetzen**

* Erstes Teil der Zugentlastung einsetzen
* Zweites Teil der Zugentlastung von außen angewinkelt eindrücken
* Für optimale Zugentlastung Kabel auf ganzer Länge der Zugentlastung mit Isolierung fixieren (Muttern und Schrauben M3xXX anziehen)
* Fixierung für Sechskant-Muttern auf einem Teil der Zugentlastung beachten
 
{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_DisplayStrainRelief" %}
{% endif %}

## Schritt 18: Testen der elektronischen Komponenten vor Einbau in das Gehäuse

Folgende Tests in dieser Reihenfolge:

1. Ausschalten
2. Batteriekabel polungsrichtig einstecken.
3. Laden: Normales USB-C Ladegerät (5 V) anschließen
  * Einige Geräte funktionieren nur nach Anschluss an ein Ladegerät
  * Bei vollem Akku leuchtet das Modul blau, sonst rot
4. Einschalten 
  * Boot-Screen sollte auf dem Display erscheinen
  * Druck auf Taster wechselt von Boot-Screen zu einfacher Distanz-Anzeige (-- cm)
5. Bei angeschlossener GPS-Antenne GPS-Funktion im Freien testen
  * Nach einigen Minuten: GPS-Board blinkt, Boot-Screen wechselt zu Sensor-Anzeige
6. Sensoren-Funktion testen: Sensoren mit Sensor-Boards verbinden
  * Polung beachten

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_Testing" %}
{% endif %}

## Schritt 19: Gehäuse vorbereiten

Alle Muttern vor den elektronischen Bauteilen in das Gehäuse stecken. Manche können heraus fallen, andere sitzen sehr fest. 

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_PrepareCase" %}
{% endif %}

## Schritt 20: PCB einbauen, Komponenten zusammenstecken

{% if include.version == '00.02' %}
**ToDo: Bilder für Version 00.02.xx hinzufügen.**
{% elsif include.version == '00.03' %}
{% include slider.html selector="Instructions_00_03_10_FinalAssembly" %}
{% endif %}

{% comment %}
## Aufgabe 1: SMDs löten 1/2

1 von 2 Stiftleisten kürzen

Beide auf den ESP32 stecken

<img src="/assets/images/v00.03/PCB00.03.10_short2.jpg" alt="Alternative Text" class="inline" />

<img src="/assets/images/v00.03/PCB00.03.10_short3.jpg" alt="Alternative Text" class="inline" />

<img src="/assets/images/v00.03/PCB00.03.10_short4.jpg" alt="Alternative Text" class="inline" />

Zuerst an den Enden anlöten\, dann die Reihe\, dann ESP32 abnehmen und innen löten

Widerstände R6 und R7 löten\. Einen Lötpunktsetzen\, danach mit der Pinzette Widerstand an die Stelle schieben und erhitzen

<img src="/assets/images/v00.03/PCB00.03.10_short5.jpg" alt="Alternative Text" class="inline" />

## Part 2: Widerstände

R1: 10kOhm

R2: 150kOhm

R3: 300kOhm

<img src="/assets/images/v00.03/PCB00.03.10_short6.jpg" alt="Alternative Text" class="inline" />

## Part 3: Spannungsmodule anlöten mit Stiften

Stifte von oben durch Module und Board stecken und von unten anlöten

Oder: mit Stiften auf eine Lötunterlage drücken

<img src="/assets/images/v00.03/PCB00.03.10_short7.jpg" alt="Alternative Text" class="inline" />

## Part 4: GPS und SD-Modul vorbereiten

Gewinkelte Stiftleiste ablängen: 4/6pins

Stifte an SD\-Modul löten

GPS noch NICHT löten

<img src="/assets/images/v00.03/PCB00.03.10_short8.jpg" alt="Alternative Text" class="inline" />

## Part 5: Kondensatoren, Diode und Sicherung

C2 und C3: Polung beachten

Diode: Polung beachten

<img src="/assets/images/v00.03/PCB00.03.10_short9.jpg" alt="Alternative Text" class="inline" />

## Part 6: Steckerbuchsen anlöten (Batterie, Schalter, Display)

Von oben stecken\, von unten anlöten
Display-Stecker 5polig – Aussparungen zum Board hin ausrichten
Batterie-Stecker: Arretierungsstift zur Sicherung ausrichten
Schalter-Stecker: Orientierung egal

<img src="/assets/images/v00.03/PCB00.03.10_short10.jpg" alt="Alternative Text" class="inline" />

<img src="/assets/images/v00.03/PCB00.03.10_short11.jpg" alt="Alternative Text" class="inline" />

## Part 7:  SD+GPS anlöten

<img src="/assets/images/v00.03/PCB00.03.10_short12.jpg" alt="Alternative Text" class="inline" />

## Part 8: Sensorboards vorbereiten

Plastikteil vom Stecker abziehen

Pins vorsichtig nach oben umbiegen

<img src="/assets/images/v00.03/PCB00.03.10_short13.jpg" alt="Alternative Text" class="inline" />

## Part 9: Sensorboards anlöten

Stecken\, Board umdrehen

Gerade anlöten
Auf Abstand achten / Abschirmung muss dazwischen eingesteckt werden

<img src="/assets/images/v00.03/PCB00.03.10_short14.jpg" alt="Alternative Text" class="inline" />

## Part 10: Displaykabel crimpen

Braun – VCC

Schwarz – GND

Blau – BUT

Weiß – SDA

Grau – SCL

Nur 1\-2mmabisolieren

## Part 11: Displays mit Knopf löten

## Part 12: Sensorkabel kürzen und crimpen

<img src="/assets/images/v00.03/PCB00.03.10_short15.jpg" alt="Alternative Text" class="inline" />

## Part 13: Display zusammenbauen

Braun – VCC \+ Push Button

Schwarz – GND

Blau – Push Button

Weiß – SDA

Grau – SCL

## Part 14: Gerät zusammenbauen
{% endcomment %}

