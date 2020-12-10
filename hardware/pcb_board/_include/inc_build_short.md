# Kurzanleitung für den PCB {{ include.version }}

<figure>
  {% if include.version == '00.02' %}
  <img src="Grafiken/20200726_184611.jpg" class="inline" />
  {% elsif include.version == '00.03' %}
  <img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short5.jpg" class="inline" />
  {% endif %}
  <figcaption>Ein fertiger PCB in der Version {{ include.version }}</figcaption>
</figure>

  {% if include.version == '00.02' %}
* PCB v00.02.07
  {% elsif include.version == '00.03' %}
* PCB v00.03.10
  {% endif %}
  
{% if include.version == '00.02' %}

# Entwurf
**Diese Bauanleitung ist ein Entwurf. Sie enthält Fehler und falsche Bilder und muss noch auf die PCB-Version 00.02.xx angepasst werden.**
{% elsif include.version == '00.03' %}

# Entwurf
**Diese Bauanleitung ist ein Entwurf. Sie enthält Fehler und falsche Bilder und muss noch vervollständigt werden.**
{% endif %}
  
## Bebilderte Kurzanleitung

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
Inhalt: Bestücken des PCBs v00\.03\.10 
<figure>
	<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short0.jpg" alt="Full Board" class="inline" /> 
	<figcaption>
		Fully equipped PCB v00.03.10 
	</figcaption>
</figure>
<figure>
	<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short1.jpg" alt="Sensor on Bike" class="inline" /> 
	<figcaption>
		Sensor with vertical case mounted on bike 
	</figcaption>
</figure>
{% endif %}

## Hilfreiche Links und Anleitungen
* [JST-Crimp-Tutorial](https://www.youtube.com/watch?v=jHfYzrSF4pY) Tutorial fürs Crimpen mit Zangen in 2 Schritten.


## Part 1: SMD
* Widerstände R6 & R7
* Lötpunkt auf ein Pad setzen
* Widerstand mit der Pinzette auf das Pad schieben und gleichzeitig mit Lötkolben erhitzen
* Schieben, bis er an der richtigen Stelle sitzt
* Zweite Lötstelle des nun fixierten Widerstandes ausführen

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_01_DetailSMDResistor1.jpg" alt="PCB00.03.10_01_DetailSMDResistor1.jpg" class="inline" />
<figcaption>PCB00.03.10_01_DetailSMDResistor1.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_01_DetailSMDResistor_01_Loetpunkt.jpg" alt="PCB00.03.10_01_DetailSMDResistor_01_Loetpunkt.jpg" class="inline" />
<figcaption>PCB00.03.10_01_DetailSMDResistor_01_Loetpunkt.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_01_DetailSMDResistor_02_Loetpunktgesetzt.jpg" alt="PCB00.03.10_01_DetailSMDResistor_02_Loetpunktgesetzt.jpg" class="inline" />
<figcaption>PCB00.03.10_01_DetailSMDResistor_02_Loetpunktgesetzt.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_01_DetailSMDResistor_03_Widerstandaufschieben.jpg" alt="PCB00.03.10_01_DetailSMDResistor_03_Widerstandaufschieben.jpg" class="inline" />
<figcaption>PCB00.03.10_01_DetailSMDResistor_03_Widerstandaufschieben.jpg</figcaption>
</figure>
{% endif %}

## Part 2: Buchsenleisten
Eine der beiden Buchsenleisten muss auf 15 Pins gekürzt werden. 
* Mit dem Seitenschneider kürzen und mit dem Cuttermesser nacharbeiten.




{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite01_zuschneiden.jpg" alt="PCB00.03.10_02_DetailBuchsenleite01_zuschneiden.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite01_zuschneiden.jpg</figcaption>
</figure>

* Buchsenleisten so an ESP32 stecken, dass die gekürzte Seite den Platz für C3 frei lässt
* Beachten: Erster Kontakt der gekürzten Buchsenleiste an C3 (ESP32 Board Richtung USB-Buchse) zeigt nach innen
* Kontakte auf der gegenüberliegenden Seite zeigen versetzt nach innen
* Längere Buchsenleiste steht gegenüber der Position von C3 über

<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite02_ausrichten.jpg" alt="PCB00.03.10_02_DetailBuchsenleite02_ausrichten.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite02_ausrichten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite03_ausrichten.jpg" alt="PCB00.03.10_02_DetailBuchsenleite03_ausrichten.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite03_ausrichten.jpg</figcaption>
</figure>

* Buchsenleisten mit gestecktem ESP32 positionieren 
* Beim Positionieren darauf achten, dass die inneren Kontakte auf den längeren Lötfahnen auf der Platine sitzen: Auf Seite von J7 zeigt erster Pin nach außen, auf der anderen Seite erster Pin nach innen
* Jede Leiste an 2 Ecken festlöten
* Danach alle äußeren Verbindungen löten
* ESP32 abziehen und dann die inneren Kontakte löten.

<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite04_aufPCBplatzieren.jpg" alt="PCB00.03.10_02_DetailBuchsenleite04_aufPCBplatzieren.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite04_aufPCBplatzieren.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite04_an4Eckenloeten.jpg" alt="PCB00.03.10_02_DetailBuchsenleite04_an4Eckenloeten.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite04_an4Eckenloeten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite06_an4Eckenloeten.jpg" alt="PCB00.03.10_02_DetailBuchsenleite06_an4Eckenloeten.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite06_an4Eckenloeten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite07_an4Eckenloeten.jpg" alt="PCB00.03.10_02_DetailBuchsenleite07_an4Eckenloeten.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite07_an4Eckenloeten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite08_alleLoetstellen.jpg" alt="PCB00.03.10_02_DetailBuchsenleite08_alleLoetstellen.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite08_alleLoetstellen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite09_alleLoetstellen.jpg" alt="PCB00.03.10_02_DetailBuchsenleite09_alleLoetstellen.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite09_alleLoetstellen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite10_innereLoetstellen.jpg" alt="PCB00.03.10_02_DetailBuchsenleite10_innereLoetstellen.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite10_innereLoetstellen.jpg</figcaption>
</figure>
{% endif %}

## Part 3: Spannungsmodule
Für den roten Spannungsregler 1x1 und 1x2 Stifte vorbereiten.
* Spannungsregler mit Stiften in zwei gegenüber liegenden LÖtstellen fixieren
* Stifte nicht verlöten! 
* Mit Stiften ausgerichtetes Modul an den anderen beiden SMD-Pads verlöten 
* Stifte abziehen und die restlichen Kontakte verlöten


{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_01_Stiftleisten_ablaengen.jpg" alt="PCB00.03.10_03_Spannunsversorgung_01_Stiftleisten_ablaengen.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_01_Stiftleisten_ablaengen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_02_Stiftleisten_ablaengen.jpg" alt="PCB00.03.10_03_Spannunsversorgung_02_Stiftleisten_ablaengen.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_02_Stiftleisten_ablaengen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_03_Boardplatzieren.jpg" alt="PCB00.03.10_03_Spannunsversorgung_03_Boardplatzieren.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_03_Boardplatzieren.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_04_Boardloeten01.jpg" alt="PCB00.03.10_03_Spannunsversorgung_04_Boardloeten01.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_04_Boardloeten01.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_06_Stifte_entfernen.jpg" alt="PCB00.03.10_03_Spannunsversorgung_06_Stifte_entfernen.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_06_Stifte_entfernen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_05_fertigloeten.jpg" alt="PCB00.03.10_03_Spannunsversorgung_05_fertigloeten.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_05_fertigloeten.jpg</figcaption>
</figure>

Für das blaue Lademodul 2x2 Stifte und 2x1 Stift vorbereiten.
* Modul mit Stiften fixieren und darauf achten, dass es am PCB anliegt 
* Von unten 2 Stifte verlöten. Stifte auf der anderen Seite fixieren
* Umdrehen und restliche Kontakte löten
* Die schwarzen Plastikteile entfernen und diese Seite auch verlöten
* Alle Stifte mit dem Seitenschneider kürzen

<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_07_LademodulmitStiften.jpg" alt="PCB00.03.10_03_Spannunsversorgung_07_LademodulmitStiften.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_07_LademodulmitStiften.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_07_Lademodulplatziert.jpg" alt="PCB00.03.10_03_Spannunsversorgung_07_Lademodulplatziert.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_07_Lademodulplatziert.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_10_Oberseitemit2Loetstellen.jpg" alt="PCB00.03.10_03_Spannunsversorgung_10_Oberseitemit2Loetstellen.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_10_Oberseitemit2Loetstellen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_09_vonUntenAnloten.jpg" alt="PCB00.03.10_03_Spannunsversorgung_09_vonUntenAnloten.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_09_vonUntenAnloten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_08_schwarze_Plastikteile_von_Stiftleiste_entfernt.jpg" alt="PCB00.03.10_03_Spannunsversorgung_08_schwarze_Plastikteile_von_Stiftleiste_entfernt.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_08_schwarze_Plastikteile_von_Stiftleiste_entfernt.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_11_Oberseitefertigverloetet.jpg" alt="PCB00.03.10_03_Spannunsversorgung_11_Oberseitefertigverloetet.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_11_Oberseitefertigverloetet.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_12_Unterseite.jpg" alt="PCB00.03.10_03_Spannunsversorgung_12_Unterseite.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_12_Unterseite.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_13_AufBeidenSeitenStifteKuerzen.jpg" alt="PCB00.03.10_03_Spannunsversorgung_13_AufBeidenSeitenStifteKuerzen.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_13_AufBeidenSeitenStifteKuerzen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_13_UnterseiteVerloetet.jpg" alt="PCB00.03.10_03_Spannunsversorgung_13_UnterseiteVerloetet.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_13_UnterseiteVerloetet.jpg</figcaption>
</figure>
{% endif %}

## Part 4: Kondensatoren
Bei C2 und C3: Polung auf Platine und Kondensator beachten! (Langer Pin: „Plus“, mit Streifen markierte Seite: „Minus“)
* Kondensatoren C1 bis C3 stecken
* Zum Fixieren umbiegen
* Verlöten und Draht abkneifen

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_04_Kondesatoren_01_Kondensatoren.jpg" alt="PCB00.03.10_04_Kondesatoren_01_Kondensatoren.jpg" class="inline" />
<figcaption>PCB00.03.10_04_Kondesatoren_01_Kondensatoren.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_04_Kondesatoren_01_KondensatorenPlatzieren.jpg" alt="PCB00.03.10_04_Kondesatoren_01_KondensatorenPlatzieren.jpg" class="inline" />
<figcaption>PCB00.03.10_04_Kondesatoren_01_KondensatorenPlatzieren.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_04_Kondesatoren_01_KondensatorenUmbiegen.jpg" alt="PCB00.03.10_04_Kondesatoren_01_KondensatorenUmbiegen.jpg" class="inline" />
<figcaption>PCB00.03.10_04_Kondesatoren_01_KondensatorenUmbiegen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_04_Kondesatoren_01_KondensatorenVerloetenUndKuerzen.jpg" alt="PCB00.03.10_04_Kondesatoren_01_KondensatorenVerloetenUndKuerzen.jpg" class="inline" />
<figcaption>PCB00.03.10_04_Kondesatoren_01_KondensatorenVerloetenUndKuerzen.jpg</figcaption>
</figure>
{% endif %}

## Part 5: Der Transistor/die Brücke
Den Transistor NICHT verwenden. Einige mit Transistor gebaute Module funktionieren nicht. 
* Statt des Transistors eine Drahtbrücke aus den vorher abgekniffenen Kondensatorpins einlöten
* Drahtbrücke verbindet die beiden äußeren Kontakte der Transistor-Position

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_05_Transistorbruecke_01_Bruecke.jpg" alt="PCB00.03.10_05_Transistorbruecke_01_Bruecke.jpg" class="inline" />
<figcaption>PCB00.03.10_05_Transistorbruecke_01_Bruecke.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_05_Transistorbruecke_01_BrueckeEinsetzen.jpg" alt="PCB00.03.10_05_Transistorbruecke_01_BrueckeEinsetzen.jpg" class="inline" />
<figcaption>PCB00.03.10_05_Transistorbruecke_01_BrueckeEinsetzen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_05_Transistorbruecke_01_BrueckeVerloetenUndKuerzen.jpg" alt="PCB00.03.10_05_Transistorbruecke_01_BrueckeVerloetenUndKuerzen.jpg" class="inline" />
<figcaption>PCB00.03.10_05_Transistorbruecke_01_BrueckeVerloetenUndKuerzen.jpg</figcaption>
</figure>
{% endif %}

## Part 6: Widerstände
Widerstände richtig zuordnen: 
* R1=10kOhm (braun - schwarz - orange - gold)
* R2=150kOhm (braun - grün - gelb - gold)
* R3=300kOhm (orange - schwarz - gelb - gold)
Widerstände stecken, verlöten abkneifen.

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_06_Widerstaende_01_bereitlegen.jpg" alt="PCB00.03.10_06_Widerstaende_01_bereitlegen.jpg" class="inline" />
<figcaption>PCB00.03.10_06_Widerstaende_01_bereitlegen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_06_Widerstaende_01_platzieren.jpg" alt="PCB00.03.10_06_Widerstaende_01_platzieren.jpg" class="inline" />
<figcaption>PCB00.03.10_06_Widerstaende_01_platzieren.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_06_Widerstaende_01_verloetenUndKuerzen.jpg" alt="PCB00.03.10_06_Widerstaende_01_verloetenUndKuerzen.jpg" class="inline" />
<figcaption>PCB00.03.10_06_Widerstaende_01_verloetenUndKuerzen.jpg</figcaption>
</figure>
{% endif %}

## Part 7: Sicherung

* Sicherung an Position F1 stecken, verlöten, abkneifen

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_07_Sicherung_01.jpg" alt="PCB00.03.10_07_Sicherung_01.jpg" class="inline" />
<figcaption>PCB00.03.10_07_Sicherung_01.jpg</figcaption>
</figure>
{% endif %}

## Part 8: Batteriekabel /-stecker
Stecker zusammenstecken 
* Beschriftung auf der Platine beachten (Rot: „Plus“, Schwarz: „Minus“)
* Auf der Rückseite anlöten
* Kabel wieder abziehen

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_08_Batteriestecker_01.jpg" alt="PCB00.03.10_08_Batteriestecker_01.jpg" class="inline" />
<figcaption>PCB00.03.10_08_Batteriestecker_01.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_08_Batteriestecker_02.jpg" alt="PCB00.03.10_08_Batteriestecker_02.jpg" class="inline" />
<figcaption>PCB00.03.10_08_Batteriestecker_02.jpg</figcaption>
</figure>
{% endif %}

## Part 9: Diode
Polung beachten!
* Diode umbiegen und stehend auf dem weiter vom Batteriestecker entfernten Kontakt aufsetzen
* Der markierte Ring muss oben stehen
* Löten, Enden abkneifen

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_09_Diode_01.jpg" alt="PCB00.03.10_09_Diode_01.jpg" class="inline" />
<figcaption>PCB00.03.10_09_Diode_01.jpg</figcaption>
</figure>
{% endif %}

## Part 10: Stiftleisten für Stecker
J5: 5-Pin-Konnektor gemäß Markierung auf Platine aufsetzen (Aussparungen zeigen Richtung Platine). 
* 2 Punkte von unten verlöten
* Platine umdrehen, restliche Pins verlöten.

J6 (Schalter-Stecker) hat keine Plung
* 2-Pin-Connector so aufsetzen, dass er möglichst wenig über den Rand der Platine übersteht und Verlöten

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_10_Steckerleisten_01.jpg" alt="PCB00.03.10_10_Steckerleisten_01.jpg" class="inline" />
<figcaption>PCB00.03.10_10_Steckerleisten_01.jpg</figcaption>
</figure>
{% endif %}

## Part 11: Sensorboards
Beim Sensorboard mit Kontakten Richtung ESP32:
* Plastikteil der Buchse zum Sensor vorsichtig entfernen 
* Kontakte nach oben umbiegen – von den Steckkontakten weg 
* Beide Sensorboards stecken, dabei Beschriftung (+3V3, TRIG, ECHO, GND) beachten 
* Boards gerade und dicht am OBS-PCB ausrichten und verlöten
* Überstehende Stifte kürzen

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_11_Sensormodule_01_platzieren.jpg" alt="PCB00.03.10_11_Sensormodule_01_platzieren.jpg" class="inline" />
<figcaption>PCB00.03.10_11_Sensormodule_01_platzieren.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_11_Sensormodule_02_ausrichten.jpg" alt="PCB00.03.10_11_Sensormodule_02_ausrichten.jpg" class="inline" />
<figcaption>PCB00.03.10_11_Sensormodule_02_ausrichten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_11_Sensormodule_03_drehen.jpg" alt="PCB00.03.10_11_Sensormodule_03_drehen.jpg" class="inline" />
<figcaption>PCB00.03.10_11_Sensormodule_03_drehen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_11_Sensormodule_04_loeten.jpg" alt="PCB00.03.10_11_Sensormodule_04_loeten.jpg" class="inline" />
<figcaption>PCB00.03.10_11_Sensormodule_04_loeten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_11_Sensormodule_05_kuerzen.jpg" alt="PCB00.03.10_11_Sensormodule_05_kuerzen.jpg" class="inline" />
<figcaption>PCB00.03.10_11_Sensormodule_05_kuerzen.jpg</figcaption>
</figure>
{% endif %}

## Part 12: SD-Modul
Gewinkelte Stiftleiste mit 6 Pins vorbereiten. 
* Gewinkelte Stiftleiste genau wie in der Abbildung gezeigt in SD-Modul stecken. 
* Die Ausrichtung ist wichtig: Es gibt 8 Arten die Stiftleiste zu stecken, 7 funktionieren nicht.
* Stiftleiste mit Modul verlöten und überstehende Pins abkneifen
* Modul auf OBS-PCB stecken (Ausrichtung und Beschriftung beachten)
* Verlöten und Stifte kürzen

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_12_SD-Karte_01_mit_Stiftleisten.jpg" alt="PCB00.03.10_12_SD-Karte_01_mit_Stiftleisten.jpg" class="inline" />
<figcaption>PCB00.03.10_12_SD-Karte_01_mit_Stiftleisten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_12_SD-Karte_02_Stiftleiste_gesteckt.jpg" alt="PCB00.03.10_12_SD-Karte_02_Stiftleiste_gesteckt.jpg" class="inline" />
<figcaption>PCB00.03.10_12_SD-Karte_02_Stiftleiste_gesteckt.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_12_SD-Karte_03_Modul_platziert.jpg" alt="PCB00.03.10_12_SD-Karte_03_Modul_platziert.jpg" class="inline" />
<figcaption>PCB00.03.10_12_SD-Karte_03_Modul_platziert.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_12_SD-Karte_04_Modul_geloetet.jpg" alt="PCB00.03.10_12_SD-Karte_04_Modul_geloetet.jpg" class="inline" />
<figcaption>PCB00.03.10_12_SD-Karte_04_Modul_geloetet.jpg</figcaption>
</figure>
{% endif %}

## Part 13: GPS-Modul
* Gewinkelte Stiftleiste mit 4 Pins vorbereiten
* Stiftleiste in OBS-PCB verlöten (Unterseite, langes Ende der Pins seitlich herausschauend)
* Eng anliegend verlöten
* GPS-Modul aufstecken 
* Verlöten und Stifte kürzen

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_13_GPS-Module_01_Modul.jpg" alt="PCB00.03.10_13_GPS-Module_01_Modul.jpg" class="inline" />
<figcaption>PCB00.03.10_13_GPS-Module_01_Modul.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_13_GPS-Module_02_Modul_mit_Stiftleiste.jpg" alt="PCB00.03.10_13_GPS-Module_02_Modul_mit_Stiftleiste.jpg" class="inline" />
<figcaption>PCB00.03.10_13_GPS-Module_02_Modul_mit_Stiftleiste.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_13_GPS-Module_03_Stiftleiste_ohne_Modul_ins_PCB_stecken.jpg" alt="PCB00.03.10_13_GPS-Module_03_Stiftleiste_ohne_Modul_ins_PCB_stecken.jpg" class="inline" />
<figcaption>PCB00.03.10_13_GPS-Module_03_Stiftleiste_ohne_Modul_ins_PCB_stecken.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_13_GPS-Module_05_Stiftleiste_anloeten.jpg" alt="PCB00.03.10_13_GPS-Module_05_Stiftleiste_anloeten.jpg" class="inline" />
<figcaption>PCB00.03.10_13_GPS-Module_05_Stiftleiste_anloeten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_13_GPS-Module_06_Stiftleiste_geloetet.jpg" alt="PCB00.03.10_13_GPS-Module_06_Stiftleiste_geloetet.jpg" class="inline" />
<figcaption>PCB00.03.10_13_GPS-Module_06_Stiftleiste_geloetet.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_13_GPS-Module_07_GPS-Modul_ausgerichtet.jpg" alt="PCB00.03.10_13_GPS-Module_07_GPS-Modul_ausgerichtet.jpg" class="inline" />
<figcaption>PCB00.03.10_13_GPS-Module_07_GPS-Modul_ausgerichtet.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_13_GPS-Module_08_GPS-Modul_geloetet.jpg" alt="PCB00.03.10_13_GPS-Module_08_GPS-Modul_geloetet.jpg" class="inline" />
<figcaption>PCB00.03.10_13_GPS-Module_08_GPS-Modul_geloetet.jpg</figcaption>
</figure>
{% endif %}

Damit ist das PCB fertig bestückt!!!


## Part 14: Schalter
* 2x10cm Kabel crimpen und in 2fach Stecker einführen 
* Andere Kabelenden seitlich an Schaler löten
* Orientierung beachten, damit Schalterzustand mit der Beschriftung (0 / I) am OBS-Gehäuse übereinstimmt

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_14_Schalter_01_Schalter_mit_Kabel_und_Stecker.jpg" alt="PCB00.03.10_14_Schalter_01_Schalter_mit_Kabel_und_Stecker.jpg" class="inline" />
<figcaption>PCB00.03.10_14_Schalter_01_Schalter_mit_Kabel_und_Stecker.jpg</figcaption>
</figure>
{% endif %}

## Part 15: Ultraschallsensor-Kabel kürzen (10cm) und crimpen
Vorsichtig! Koax-Kabel – der innere Leiter ist sehr dünn und kann leicht durchtrennt werden. 
* Crimpkontakt muss für optimale verbindung Leiter und Isolierung greifen
* Tipp: Mit überschüssigen Kabelteilen und Crimpkontakten üben

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_15_Sensor_01_Sensor_mit_gekuerztem_Kabel_und_Stecker.jpg" alt="PCB00.03.10_15_Sensor_01_Sensor_mit_gekuerztem_Kabel_und_Stecker.jpg" class="inline" />
<figcaption>PCB00.03.10_15_Sensor_01_Sensor_mit_gekuerztem_Kabel_und_Stecker.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_15_Sensor_02_Sensor_mit_gekuerztem_Kabel_und_Stecker.jpg" alt="PCB00.03.10_15_Sensor_02_Sensor_mit_gekuerztem_Kabel_und_Stecker.jpg" class="inline" />
<figcaption>PCB00.03.10_15_Sensor_02_Sensor_mit_gekuerztem_Kabel_und_Stecker.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_15_Sensor_03_Sensor_Detail_Stecker.jpg" alt="PCB00.03.10_15_Sensor_03_Sensor_Detail_Stecker.jpg" class="inline" />
<figcaption>PCB00.03.10_15_Sensor_03_Sensor_Detail_Stecker.jpg</figcaption>
</figure>

{% endif %}

## Part 16: Batteriekabel anlöten
Die Akkus sind mit Lötfahnen ausgestattet. 
* Auf 12cm gekürztes Batteriekabel an die Enden der Fahnen angelöten 
* Polung beachten: Pluspol an Akku auf der Seite mit Einkerbung im Akku-Gehäuse
* **Polung Im Zweifel nachmessen** 
* Die Batterie und Kabel werden mit einem kleinen Kabelbinder im Deckel fixiert
* Batteriekontakte mit Isolierband o.Ä. isolieren
**Batterie noch nicht einstecken.**

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_16_Akku_01_Akku_mit_Kabel_und_Stecker.jpg" alt="PCB00.03.10_16_Akku_01_Akku_mit_Kabel_und_Stecker.jpg" class="inline" />
<figcaption>PCB00.03.10_16_Akku_01_Akku_mit_Kabel_und_Stecker.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_16_Akku_02_Kontakte_isolieren.jpg" alt="PCB00.03.10_16_Akku_02_Kontakte_isolieren.jpg" class="inline" />
<figcaption>PCB00.03.10_16_Akku_02_Kontakte_isolieren.jpg</figcaption>
</figure>
{% endif %}


## Part 17: Display-Kabel
**Hinweis: Beim Display ist die Reihenfolge sehr wichtig! Ein Kabel mit Steckern auf beiden Seiten oder gelötetem Kabel/Knopf passt nicht mehr durch das Gehäuse.**

Kabel abisolieren und auf einer Seite 5x crimpen. 
* OBS-PCB und Display sind beschriftet
* Gecrimpte Kabelenden in den 5er Stecker einführen
* Zuordnung Farben zu Beschriftung notieren
	Empfehlung: 
	Braun – VCC/VDD
	Schwarz – GND
	Blau – BUT
	Weiß – SDA
	Grau – SCL
**Kabel nur 1-2mm abisolieren und für stabilen Halt mit Isolierung crimpen**

{% if include.version == '00.02' %}**ToDo: Bilder für Version 00.02.xx hinzufügen.** {% elsif include.version == '00.03' %}
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_01_Kabel_abisoliert_Crimp_in_Zange.jpg" alt="PCB00.03.10_17_Display_01_Kabel_abisoliert_Crimp_in_Zange.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_01_Kabel_abisoliert_Crimp_in_Zange.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_02_alle_5_Adern_gecrimpt.jpg" alt="PCB00.03.10_17_Display_02_alle_5_Adern_gecrimpt.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_02_alle_5_Adern_gecrimpt.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_03_Stecker.jpg" alt="PCB00.03.10_17_Display_03_Stecker.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_03_Stecker.jpg</figcaption>
</figure>

* **Vor Anschluss des Displays Kabel durch Displaygehäuse-Unterteil führen**
Zwei Optionen für Anschluss an das OLED-Displayboard 
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


<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_04_Kabel_durch_Gehaeuseunterteil_ziehen.jpg" alt="PCB00.03.10_17_Display_04_Kabel_durch_Gehaeuseunterteil_ziehen.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_04_Kabel_durch_Gehaeuseunterteil_ziehen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_05_verschiedene_Displays_vom_gleichen_Lieferanten.jpg" alt="PCB00.03.10_17_Display_05_verschiedene_Displays_vom_gleichen_Lieferanten.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_05_verschiedene_Displays_vom_gleichen_Lieferanten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_06_kurzes_Stueck_Kabel_2-3cm.jpg" alt="PCB00.03.10_17_Display_06_kurzes_Stueck_Kabel_2-3cm.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_06_kurzes_Stueck_Kabel_2-3cm.jpg</figcaption>
</figure>

* OLED-Boards haben teils etwas unterschiedliche Größen
* OLED Displayboard ggf. wie abgebildet etwas kürzen
* Board und Button in Displayoberseite einsetzen

<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_07_Display_in_Geh&auml;use_einpassen_keine_Gewalt.jpg" alt="PCB00.03.10_17_Display_07_Display_in_Geh&auml;use_einpassen_keine_Gewalt.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_07_Display_in_Gehäuse_einpassen_keine_Gewalt.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_07a_Display_mit_Seitenschneider_stutzen.jpg" alt="PCB00.03.10_17_Display_07a_Display_mit_Seitenschneider_stutzen.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_07a_Display_mit_Seitenschneider_stutzen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_08_Gegenseite_nur_4_Adern_crimpen_1_Zusatzkabel_auf_VDD.jpg" alt="PCB00.03.10_17_Display_08_Gegenseite_nur_4_Adern_crimpen_1_Zusatzkabel_auf_VDD.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_08_Gegenseite_nur_4_Adern_crimpen_1_Zusatzkabel_auf_VDD.jpg</figcaption>
</figure>


* Kabel von BUT an ein Ende des Tasters anlöten
* Kurze Kabel von VDD an zweiten Pin des Tasters löten
**Achtung: Taster ist hitzeempfindlich, bei zu langem/heißem Löten schmilzt der Kunststoff**

<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_09_Fuenftes_Kabel_und_VDD_Verbindung_an_Stecker_Anloeten.jpg" alt="PCB00.03.10_17_Display_09_Fuenftes_Kabel_und_VDD_Verbindung_an_Stecker_Anloeten.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_09_Fuenftes_Kabel_und_VDD_Verbindung_an_Stecker_Anloeten.jpg</figcaption>
</figure>

**Display zusammensetzen**
* Magnete in Displaygehäuse und Lenkerhalterung passend zur Fixierung einlegen
* Muttern mit längeren Schrauben in Aussparungen in Gehäuse-Unterseite einziehen
* Längere Schrauben durch M3x18 ersetzen

<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_10_Magnete_passend_einlegen.jpg" alt="PCB00.03.10_17_Display_10_Magnete_passend_einlegen.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_10_Magnete_passend_einlegen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_11_Muttern_in_Gehaeuse_ziehen_mit_groeßeren_Schrauben.jpg" alt="PCB00.03.10_17_Display_11_Muttern_in_Gehaeuse_ziehen_mit_groeßeren_Schrauben.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_11_Muttern_in_Gehaeuse_ziehen_mit_groeßeren_Schrauben.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_12_Grosse_Schrauben_durch_richtige_ersetzen.jpg" alt="PCB00.03.10_17_Display_12_Grosse_Schrauben_durch_richtige_ersetzen.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_12_Grosse_Schrauben_durch_richtige_ersetzen.jpg</figcaption>
</figure>

**Zugsicherung einsetzen**
* Erstes Teil der Zugsicherung einsetzen
* Zweites Teil der Zugsicherung von außen angewinkelt eindrücken
* Für optimale Zugentlastung Kabel auf ganzer Länge der Zugsicherung mit Isolierung fixieren (Muttern und Schrauben M3xXX anziehen)
* Fixierung für Sechskant-Muttern auf einem Teil der Zugsicherung beachten

<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_13_Zugsicherung.jpg" alt="PCB00.03.10_17_Display_13_Zugsicherung.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_13_Zugsicherung.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_14_Zugsicherung_erstes_teil_eingesetzt.jpg" alt="PCB00.03.10_17_Display_14_Zugsicherung_erstes_teil_eingesetzt.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_14_Zugsicherung_erstes_teil_eingesetzt.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_15_Zugsicherung_zweites_Teil_eingesetzt.jpg" alt="PCB00.03.10_17_Display_15_Zugsicherung_zweites_Teil_eingesetzt.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_15_Zugsicherung_zweites_Teil_eingesetzt.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_17_Display_16_Zugsicherung_verschraubt.jpg" alt="PCB00.03.10_17_Display_16_Zugsicherung_verschraubt.jpg" class="inline" />
<figcaption>PCB00.03.10_17_Display_16_Zugsicherung_verschraubt.jpg</figcaption>
</figure>


{% endif %}

## Part 18: Testen der elektronischen Komponenten vor Einbau in das Gehäuse
Folgende Tests in dieser Reihenfolge:
1. Ausschalten
2. Batteriekabel polungsrichtig einstecken.
3. Laden: Normales USB-C Ladegerät (5 V) anschließen
*  Einige Geräte funktionieren nur nach Anschluss an ein Ladegerät
* Bei vollem Akku leuchtet das Modul blau, sonst rot
4. Einschalten 
* Boot-Screen sollte auf dem Display erscheinen
* Druck auf Taster wechselt von Boot-Screen zu einfacher Distanz-Anzeige (-- cm)
5. Bei angeschlossener GPS-Antenne GPS-Funktion im Freien testen
* Nach einigen Minuten: GPS-Board blinkt, Boot-Screen wechselt zu Sensor-Anzeige
6. Sensoren-Funktion testen: Sensoren mit Sensor-Boards verbinden
* Polung beachten
* Bei 
<figure>
  <img src="images_00.03.10/PCB00.03.10_18_Test_Schalter_und_Batterie_anschließen_Testen.jpg" alt="PCB00.03.10_18_Test_Schalter_und_Batterie_anschließen_Testen.jpg" class="inline" />
<figcaption>PCB00.03.10_18_Test_Schalter_und_Batterie_anschließen_Testen.jpg</figcaption>
</figure>

## Part 19: Gehäuse vorbereiten
Alle Muttern vor den elektronischen Bauteilen in das Gehäuse stecken. Manche können heraus fallen, andere sitzen sehr fest. 

<figure>
  <img src="images_00.03.10/PCB00.03.10_19_Gehaeuse_03_GPS_Antenne_einsetzen_keine_Gewalt.jpg" alt="PCB00.03.10_19_Gehaeuse_03_GPS_Antenne_einsetzen_keine_Gewalt.jpg" class="inline" />
<figcaption>PCB00.03.10_19_Gehaeuse_03_GPS_Antenne_einsetzen_keine_Gewalt.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_19_Gehaeuse_04_Akku_und_Ultraschallsensor_an_Deckel_montieren_Bezeichnung_UP_beachten.jpg" alt="PCB00.03.10_19_Gehaeuse_04_Akku_und_Ultraschallsensor_an_Deckel_montieren_Bezeichnung_UP_beachten.jpg" class="inline" />
<figcaption>PCB00.03.10_19_Gehaeuse_04_Akku_und_Ultraschallsensor_an_Deckel_montieren_Bezeichnung_UP_beachten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_19_Gehaeuse_05_GPS_anschliessen.jpg" alt="PCB00.03.10_19_Gehaeuse_05_GPS_anschliessen.jpg" class="inline" />
<figcaption>PCB00.03.10_19_Gehaeuse_05_GPS_anschliessen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_19_Gehaeuse_06_US-Sensore_anstecken.jpg" alt="PCB00.03.10_19_Gehaeuse_06_US-Sensore_anstecken.jpg" class="inline" />
<figcaption>PCB00.03.10_19_Gehaeuse_06_US-Sensore_anstecken.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_19_Gehaeuse_07_USB-C-Ladebuchse_ohne_Gewalt_in_Aussparung_einfaedeln.jpg" alt="PCB00.03.10_19_Gehaeuse_07_USB-C-Ladebuchse_ohne_Gewalt_in_Aussparung_einfaedeln.jpg" class="inline" />
<figcaption>PCB00.03.10_19_Gehaeuse_07_USB-C-Ladebuchse_ohne_Gewalt_in_Aussparung_einfaedeln.jpg</figcaption>
</figure>

## Part 20: PCB einbauen, Komponenten zusammenstecken

<figure>
  <img src="images_00.03.10/PCB00.03.10_20_Zusammenbau_01_Displaykabel_zwischen_SD-Kartenleser_und_GPS_fuehren.jpg" alt="PCB00.03.10_20_Zusammenbau_01_Displaykabel_zwischen_SD-Kartenleser_und_GPS_fuehren.jpg" class="inline" />
<figcaption>PCB00.03.10_20_Zusammenbau_01_Displaykabel_zwischen_SD-Kartenleser_und_GPS_fuehren.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_20_Zusammenbau_02_PCB_festschrauben.jpg" alt="PCB00.03.10_20_Zusammenbau_02_PCB_festschrauben.jpg" class="inline" />
<figcaption>PCB00.03.10_20_Zusammenbau_02_PCB_festschrauben.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_20_Zusammenbau_03_Halterung_und_Zugsicherung_festschrauben.jpg" alt="PCB00.03.10_20_Zusammenbau_03_Halterung_und_Zugsicherung_festschrauben.jpg" class="inline" />
<figcaption>PCB00.03.10_20_Zusammenbau_03_Halterung_und_Zugsicherung_festschrauben.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_20_Zusammenbau_04_Abschirmung_vorbereiten_8-10Lagen_Alufolien_mit_Klebeband_isoliert_oder_eingeschweisst.jpg" alt="PCB00.03.10_20_Zusammenbau_04_Abschirmung_vorbereiten_8-10Lagen_Alufolien_mit_Klebeband_isoliert_oder_eingeschweisst.jpg" class="inline" />
<figcaption>PCB00.03.10_20_Zusammenbau_04_Abschirmung_vorbereiten_8-10Lagen_Alufolien_mit_Klebeband_isoliert_oder_eingeschweisst.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_20_Zusammenbau_05_Abschirmung_platzieren.jpg" alt="PCB00.03.10_20_Zusammenbau_05_Abschirmung_platzieren.jpg" class="inline" />
<figcaption>PCB00.03.10_20_Zusammenbau_05_Abschirmung_platzieren.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_20_Zusammenbau_06_GPS-Deckel_festschrauben_Orientierung_Halterung.jpg" alt="PCB00.03.10_20_Zusammenbau_06_GPS-Deckel_festschrauben_Orientierung_Halterung.jpg" class="inline" />
<figcaption>PCB00.03.10_20_Zusammenbau_06_GPS-Deckel_festschrauben_Orientierung_Halterung.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_20_Zusammenbau_07_Deckel_festschrauben.jpg" alt="PCB00.03.10_20_Zusammenbau_07_Deckel_festschrauben.jpg" class="inline" />
<figcaption>PCB00.03.10_20_Zusammenbau_07_Deckel_festschrauben.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_20_Zusammenbau_08_Magnete_in_USB-Deckel_druecken.jpg" alt="PCB00.03.10_20_Zusammenbau_08_Magnete_in_USB-Deckel_druecken.jpg" class="inline" />
<figcaption>PCB00.03.10_20_Zusammenbau_08_Magnete_in_USB-Deckel_druecken.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_20_Zusammenbau_09_weitere_Magnete_draufsetzen.jpg" alt="PCB00.03.10_20_Zusammenbau_09_weitere_Magnete_draufsetzen.jpg" class="inline" />
<figcaption>PCB00.03.10_20_Zusammenbau_09_weitere_Magnete_draufsetzen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_20_Zusammenbau_10_mithilfe_des_Deckels_Magnete_in_Gehaeuse_druecken.jpg" alt="PCB00.03.10_20_Zusammenbau_10_mithilfe_des_Deckels_Magnete_in_Gehaeuse_druecken.jpg" class="inline" />
<figcaption>PCB00.03.10_20_Zusammenbau_10_mithilfe_des_Deckels_Magnete_in_Gehaeuse_druecken.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_20_Zusammenbau_11_fertig.jpg" alt="PCB00.03.10_20_Zusammenbau_11_fertig.jpg" class="inline" />
<figcaption>PCB00.03.10_20_Zusammenbau_11_fertig.jpg</figcaption>
</figure>














{% if false %}

## Aufgabe 1: SMDs löten 1/2

1 von 2 Stiftleisten kürzen

Beide auf den ESP32 stecken

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short2.jpg" alt="Alternative Text" class="inline" />

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short3.jpg" alt="Alternative Text" class="inline" />

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short4.jpg" alt="Alternative Text" class="inline" />

Zuerst an den Enden anlöten\, dann die Reihe\, dann ESP32 abnehmen und innen löten

Widerstände R6 und R7 löten\. Einen Lötpunktsetzen\, danach mit der Pinzette Widerstand an die Stelle schieben und erhitzen

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short5.jpg" alt="Alternative Text" class="inline" />

## Part 2: Widerstände

R1: 10kOhm

R2: 150kOhm

R3: 300kOhm

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short6.jpg" alt="Alternative Text" class="inline" />

## Part 3: Spannungsmodule anlöten mit Stiften

Stifte von oben durch Module und Board stecken und von unten anlöten

Oder: mit Stiften auf eine Lötunterlage drücken

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short7.jpg" alt="Alternative Text" class="inline" />

## Part 4: GPS und SD-Modul vorbereiten

Gewinkelte Stiftleiste ablängen: 4/6pins

Stifte an SD\-Modul löten

GPS noch NICHT löten

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short8.jpg" alt="Alternative Text" class="inline" />

## Part 5: Kondensatoren, Diode und Sicherung

C2 und C3: Polung beachten

Diode: Polung beachten

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short9.jpg" alt="Alternative Text" class="inline" />

## Part 6: Steckerbuchsen anlöten (Batterie, Schalter, Display)

Von oben stecken\, von unten anlöten
Display-Stecker 5polig – Aussparungen zum Board hin ausrichten
Batterie-Stecker: Arretierungsstift zur Sicherung ausrichten
Schalter-Stecker: Orientierung egal

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short10.jpg" alt="Alternative Text" class="inline" />

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short11.jpg" alt="Alternative Text" class="inline" />

## Part 7:  SD+GPS anlöten

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short12.jpg" alt="Alternative Text" class="inline" />

## Part 8: Sensorboards vorbereiten

Plastikteil vom Stecker abziehen

Pins vorsichtig nach oben umbiegen

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short13.jpg" alt="Alternative Text" class="inline" />

## Part 9: Sensorboards anlöten

Stecken\, Board umdrehen

Gerade anlöten
Auf Abstand achten / Abschirmung muss dazwischen eingesteckt werden

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short14.jpg" alt="Alternative Text" class="inline" />

## Part 10: Displaykabel crimpen

Braun – VCC

Schwarz – GND

Blau – BUT

Weiß – SDA

Grau – SCL

Nur 1\-2mmabisolieren

## Part 11: Displays mit Knopf löten

## Part 12: Sensorkabel kürzen und crimpen

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short15.jpg" alt="Alternative Text" class="inline" />

## Part 13: Display zusammenbauen

Braun – VCC \+ Push Button

Schwarz – GND

Blau – Push Button

Weiß – SDA

Grau – SCL

## Part 14: Gerät zusammenbauen
{% endif %}

