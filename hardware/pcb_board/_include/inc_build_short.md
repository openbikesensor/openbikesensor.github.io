# Kurzanleitung für den PCB {{ include.version }}

<figure>
  {% if include.version == '00.02' %}
  <img src="Grafiken/20200726_184611.jpg" class="inline"/>
  {% elsif include.version == '00.03' %}
  <img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short5.jpg" class="inline"/>
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

Inhalt: Bestücken des PCBs v00\.03\.10
<figure>
  <img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short0.jpg" alt="Full Board" class="inline"/>
  <figcaption>Fully equipped PCB v00.03.10</figcaption>
</figure>

<figure>
  <img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short1.jpg" alt="Sensor on Bike" class="inline" />
  <figcaption>Sensor with vertical case mounted on bike</figcaption>
</figure>



## Part 1: SMD
Widerstände R6 & R7
Lötpunkt auf ein Pad setzen
Widerstand mit der Pinzette auf das Pad schieben und gleichzeitig mit Lötkolben erhitzen
Schieben, bis er an der richtigen Stelle sitzt
Zweite Lötstelle des nun fixierten Widerstandes ausführen
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

## Part 2: Buchsenleisten
Eine der beiden Buchsenleisten muss auf 15 Pins gekürzt werden. Mit dem Seitenschneider kürzen und mit dem Cuttermesser nacharbeiten.
Buchsenleisten so stecken, dass die gekürzte Seite den Platz für C3 frei lässt

Buchsenleisten mit gestecktem ESP32 positionieren und jede Leiste an 2 Ecken festlöten. Danach alle äußeren Verbindungen löten, ESP32 abziehen und dann die inneren Kontakte löten.
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite01_zuschneiden.jpg" alt="PCB00.03.10_02_DetailBuchsenleite01_zuschneiden.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite01_zuschneiden.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite02_ausrichten.jpg" alt="PCB00.03.10_02_DetailBuchsenleite02_ausrichten.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite02_ausrichten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite03_ausrichten.jpg" alt="PCB00.03.10_02_DetailBuchsenleite03_ausrichten.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite03_ausrichten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite04_an4Eckenloeten.jpg" alt="PCB00.03.10_02_DetailBuchsenleite04_an4Eckenloeten.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite04_an4Eckenloeten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_02_DetailBuchsenleite04_aufPCBplatzieren.jpg" alt="PCB00.03.10_02_DetailBuchsenleite04_aufPCBplatzieren.jpg" class="inline" />
<figcaption>PCB00.03.10_02_DetailBuchsenleite04_aufPCBplatzieren.jpg</figcaption>
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

## Part 3: Spannungsmodule
Für den roten Spannungsregler 1x1 und 1x2 Stifte vorbereiten.
Stifte stecken, aber nicht verlöten! Das mit den Stiften ausgerichtete Modul an den SMD-Pads verlöten. Dann Stifte ziehen und die restlichen Kontakte verlöten.

Für das blaue Lademodul 2x2 Stifte und 2x1 Stift vorbereiten.
Modul mit Stiften fixieren und darauf achten, dass es am PCB anliegt. Von unten 2 Stifte verlöten, dann umdrehen und restliche Kontakte löten. Die schwarzen Plastikteile entfernen und diese Seite auch verlöten. Alle Stifte mit dem Seitenschneider kürzen.

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
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_05_fertigloeten.jpg" alt="PCB00.03.10_03_Spannunsversorgung_05_fertigloeten.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_05_fertigloeten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_06_Stifte_entfernen.jpg" alt="PCB00.03.10_03_Spannunsversorgung_06_Stifte_entfernen.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_06_Stifte_entfernen.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_07_LademodulmitStiften.jpg" alt="PCB00.03.10_03_Spannunsversorgung_07_LademodulmitStiften.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_07_LademodulmitStiften.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_07_Lademodulplatziert.jpg" alt="PCB00.03.10_03_Spannunsversorgung_07_Lademodulplatziert.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_07_Lademodulplatziert.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_09_vonUntenAnloten.jpg" alt="PCB00.03.10_03_Spannunsversorgung_09_vonUntenAnloten.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_09_vonUntenAnloten.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_03_Spannunsversorgung_10_Oberseitemit2Loetstellen.jpg" alt="PCB00.03.10_03_Spannunsversorgung_10_Oberseitemit2Loetstellen.jpg" class="inline" />
<figcaption>PCB00.03.10_03_Spannunsversorgung_10_Oberseitemit2Loetstellen.jpg</figcaption>
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

## Part 4: Kondensatoren
Bei C2 und C3 muss die Polung beachtet werden!
Kondensatoren C1 bis C3 stecken, zum fixieren umbiegen, verlöten und abkneifen. Bei C2 und C3 ist der lange Pin +, die mit Streifen markierte Seite -.
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

## Part 5: Der Transistor/die Brücke
Den Transistor NICHT verwenden. Einige mit Transistor gebaute Module funktionieren nicht. Statt des Transistors wird eine Drahtbrücke aus den vorher abgekniffenen Kondensatorpins eingelötet, die die äußeren Kontakte verbindet.
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

## Part 6: Widerstände
Widerstände richtig zuordnen: aufsteigend R1=10kOhm, R2=150kOhm, R3=300kOhm. Widerstände stecken, verlöten abkneifen.
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

## Part 7: Sicherung
<figure>
  <img src="images_00.03.10/PCB00.03.10_07_Sicherung_01.jpg" alt="PCB00.03.10_07_Sicherung_01.jpg" class="inline" />
<figcaption>PCB00.03.10_07_Sicherung_01.jpg</figcaption>
</figure>

## Part 8: Batteriekabel /-stecker
Stecker zusammenstecken, Beschriftung auf der Platine beachten. Rot ist + und schwarz ist Minus.
<figure>
  <img src="images_00.03.10/PCB00.03.10_08_Batteriestecker_01.jpg" alt="PCB00.03.10_08_Batteriestecker_01.jpg" class="inline" />
<figcaption>PCB00.03.10_08_Batteriestecker_01.jpg</figcaption>
</figure>
<figure>
  <img src="images_00.03.10/PCB00.03.10_08_Batteriestecker_02.jpg" alt="PCB00.03.10_08_Batteriestecker_02.jpg" class="inline" />
<figcaption>PCB00.03.10_08_Batteriestecker_02.jpg</figcaption>
</figure>

## Part 9: Diode
Polung beachten. Diode umbiegen und stehend auf dem weiter vom Batteriestecker entfernten Kontakt aufsetzen. Der markierte Ring muss oben stehen. Löten und Enden abkneifen.
<figure>
  <img src="images_00.03.10/PCB00.03.10_09_Diode_01.jpg" alt="PCB00.03.10_09_Diode_01.jpg" class="inline" />
<figcaption>PCB00.03.10_09_Diode_01.jpg</figcaption>
</figure>

## Part 10: Stiftleisten für Stecker
J5: 5-Pin-Konnektor gemäß Markierung auf Platine aufsetzen. 2 Punkte von unten verlöten, umdrehen, den Rest verlöten.

J6 so aufsetzen, dass er möglichst wenig übersteht. Verlöten
<figure>
  <img src="images_00.03.10/PCB00.03.10_10_Steckerleisten_01.jpg" alt="PCB00.03.10_10_Steckerleisten_01.jpg" class="inline" />
<figcaption>PCB00.03.10_10_Steckerleisten_01.jpg</figcaption>
</figure>

## Part 11: Sensorboards
Bei einem Sensorboard das Plastikteil der Buchse zum Sensor vorsichtig entfernen und die Kontakte umbiegen. Die umgebogenen Kontakte sitzen auf der Seite des ESP32.
Sensorboards stecken, Beschriftung (+3V3, TRIG, ECHO, GND) beachten. Boards gerade und dicht am OBS-PCB ausrichten und verlöten.
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

## Part 12: SD-Modul
Gewinkelte Stiftleiste mit 6 Pins vorbereiten. Wie in der Abbildung gezeigt stecken. Die Ausrichtung ist wichtig, es gibt 8 Arten die Stiftleiste zu stecken, 7 funktionieren nicht.
Stiftleiste mit Modul verlöten und überstehende Pins abkneifen. Modul auf OBS-PCB stecken (Beschriftung beachten). Verlöten und Stifte abkneifen.
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

## Part 13: GPS-Modul
Gewinkelte Stiftleiste mit 4 Pins vorbereiten. Stiftleiste in OBS-PCB verlöten (Unterseite, langes Ende der Pins seitlich herausschauend). Eng anliegend verlöten. Danach GPS-Modul aufstecken und verlöten. Stifte kürzen.

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

PCB fertig!!!


## Part 14: Schalter
2x10cm Kabel crimpen, in 2fach Stecker einführen und an seitlich an Stecker löten. Orientierung ist wichtig, damit Schalterzustand mit der Beschriftung am OBS übereinstimmt.
<figure>
  <img src="images_00.03.10/PCB00.03.10_14_Schalter_01_Schalter_mit_Kabel_und_Stecker.jpg" alt="PCB00.03.10_14_Schalter_01_Schalter_mit_Kabel_und_Stecker.jpg" class="inline" />
<figcaption>PCB00.03.10_14_Schalter_01_Schalter_mit_Kabel_und_Stecker.jpg</figcaption>
</figure>

## Part 15: Ultraschallsensor-Kabel kürzen (10cm) und crimpen
Vorsichtig! Das innere Kabel ist sehr dünn und kann leicht durchtrennt werden. Es gibt genug Kabel und Crimpkontakte zum Üben!
<figure>
  <img src="images_00.03.10/PCB00.03.10_15_Sensor_01_Sensor_mit_gekuerztem_Kabel_und_Stecker.jpg" alt="PCB00.03.10_15_Sensor_01_Sensor_mit_gekuerztem_Kabel_und_Stecker.jpg" class="inline" />
<figcaption>PCB00.03.10_15_Sensor_01_Sensor_mit_gekuerztem_Kabel_und_Stecker.jpg</figcaption>
</figure>

## Part 16: Batteriekabel anlöten
Die Akkus sind mit Lötfahnen ausgestattet. Das (auf 12cm gekürzte) Kabel wird an die Enden der Fahnen angelötet. Polung beachten. Im Zweifel nachmessen. Die Batterie wird mit dem kleinen Kabelbinder im Deckel fixiert. **Batterie noch nicht einstecken.**
<figure>
  <img src="images_00.03.10/PCB00.03.10_16_Akku_01_Akku_mit_Kabel_und_Stecker.jpg" alt="PCB00.03.10_16_Akku_01_Akku_mit_Kabel_und_Stecker.jpg" class="inline" />
<figcaption>PCB00.03.10_16_Akku_01_Akku_mit_Kabel_und_Stecker.jpg</figcaption>
</figure>

<figure>
<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short15.jpg" alt="Orientierung beachten!" class="inline"  />
<figcaption>Orientierung des Steckers beachten!</figcaption>
</figure>


## Part 17: Display-Kabel
**Hinweis: Beim Display ist die Reihenfolge sehr wichtig! Ein Kabel mit Steckern auf beiden Seiten oder gelötetem Kabel/Knopf passt nicht mehr durch das Gehäuse.**

Kabel abisolieren und auf einer Seite 5x crimpen. OBS-PCB und Display sind beschriftet. Gecrimpte Kabelenden entsprechend der Farben in den 5er Stecker einführen.

Kabel durch Displaygehäuse-Unterteil führen!!!
2 Optionen: 
1. Display-Seite crimpen
*  Nur 4x Crimpen! Das Kabel, das im OBS mit „BUT“ verbunden wird, wird an den Taster gelötet. In den Crimp für VDD muss zu dem Kabel ein zusätzliches kleines Kabel mit 2-3cm rein, das mit dem Taster verlötet wird.
2. Display-Seite löten
* VDD muss auch hier an Display UND Tasters verbunden werden. Die andere Seite des Tasters mit dem am OBS mit „BUT“ beschrifteteten Kabel verbinden. Die anderen 4 Kabel entsprechend Farbe und Beschriftung am PCB zuordnen.

## Part 18: Test
Folgende Test in dieser Reihenfolge:
1. Ausschalten
2. Jetzt die Batterie einstecken.
3. Laden - ein normales USB-C Ladegerät anschließen. Einige Geräte funktionieren nur nach Anschluss an ein Ladegerät. Bei vollem Akku leuchtet das Modul blau, sonst rot
4. Einschalten - Ein Boot-screen sollte auf dem Display erscheinen

## Part 19: Gehäuse vorbereiten
Alle Muttern vor den elektronischen Bauteilen in das Gehäuse stecken. Manche können heraus fallen, andere sitzen sehr fest. 


## Part 20: PCB einbauen, Komponenten zusammenstecken
















## Aufgabe 1: SMDs löten 1/2

1 von 2 Stiftleisten kürzen

Beide auf den ESP32 stecken

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short2.jpg" alt="Alternative Text" class="inline"  />

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short3.jpg" alt="Alternative Text" class="inline"  />

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short4.jpg" alt="Alternative Text" class="inline"  />

Zuerst an den Enden anlöten\, dann die Reihe\, dann ESP32 abnehmen und innen löten

Widerstände R6 und R7 löten\. Einen Lötpunktsetzen\, danach mit der Pinzette Widerstand an die Stelle schieben und erhitzen

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short5.jpg" alt="Alternative Text" class="inline"  />

## Part 2: Widerstände

R1: 10kOhm

R2: 150kOhm

R3: 300kOhm

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short6.jpg" alt="Alternative Text" class="inline"  />

## Part 3: Spannungsmodule anlöten mit Stiften

Stifte von oben durch Module und Board stecken und von unten anlöten

Oder: mit Stiften auf eine Lötunterlage drücken

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short7.jpg" alt="Alternative Text" class="inline"  />

## Part 4: GPS und SD-Modul vorbereiten

Gewinkelte Stiftleiste ablängen: 4/6pins

Stifte an SD\-Modul löten

GPS noch NICHT löten

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short8.jpg" alt="Alternative Text" class="inline"  />

## Part 5: Kondensatoren, Diode und Sicherung

C2 und C3: Polung beachten

Diode: Polung beachten

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short9.jpg" alt="Alternative Text" class="inline"  />

## Part 6: Steckerbuchsen anlöten (Batterie, Schalter, Display)

Von oben stecken\, von unten anlöten
Display-Stecker 5polig – Aussparungen zum Board hin ausrichten
Batterie-Stecker: Arretierungsstift zur Sicherung ausrichten
Schalter-Stecker: Orientierung egal

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short10.jpg" alt="Alternative Text" class="inline"  />

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short11.jpg" alt="Alternative Text" class="inline"  />

## Part 7:  SD+GPS anlöten

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short12.jpg" alt="Alternative Text" class="inline"  />

## Part 8: Sensorboards vorbereiten

Plastikteil vom Stecker abziehen

Pins vorsichtig nach oben umbiegen

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short13.jpg" alt="Alternative Text" class="inline"  />

## Part 9: Sensorboards anlöten

Stecken\, Board umdrehen

Gerade anlöten
Auf Abstand achten / Abschirmung muss dazwischen eingesteckt werden

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short14.jpg" alt="Alternative Text" class="inline"  />

## Part 10: Displaykabel crimpen

Braun – VCC

Schwarz – GND

Blau – BUT

Weiß – SDA

Grau – SCL

Nur 1\-2mmabisolieren

## Part 11: Displays mit Knopf löten

## Part 12: Sensorkabel kürzen und crimpen

<img src="images/OpenBikeSensor_PCB_v00.03.10_Building_short15.jpg" alt="Alternative Text" class="inline"  />

## Part 13: Display zusammenbauen

Braun – VCC \+ Push Button

Schwarz – GND

Blau – Push Button

Weiß – SDA

Grau – SCL

## Part 14: Gerät zusammenbauen

