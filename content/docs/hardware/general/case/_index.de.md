---
title: Gehäusedruck
weight: 30
---

{{< imgproc "OBS_vertical_case_alle_Teile.jpg" Fit "800x600" >}}
OpenBikeSensor-Bausatz der Version 00.03.10, mit einem "Vertical Case"
{{< /imgproc >}}

{{% alert title="Vorwort" color="info" %}}
  Diese Anleitung entstand, weil ich versuche selbst ein komplettes Gehäuse für
  den OpenBikeSensor zu drucken, selbst aber keine Erfahrung habe, weder mit
  dem 3D-Druck noch mit Respositories auf GitHub. Viele Leute haben mitgeholfen
  und letztendlich haben wir zehn Gehäuse gedruckt. Dieses Wissen möchte ich in
  einer hoffentlich verständlichen und einfachen Form weitergeben.  Deswegen
  ist die Beschreibung auch aus meiner Sicht geschrieben, es gibt bestimmt
  andere effizientere Wege um zu einem ähnlichen Ergebnis zu gelangen.

  Da ich Gehäuse für den ADFC Ulm, Neu-Ulm benötige, sind die Beispiele oft mit
  ADFC Logo, Farben etc. gezeigt. Das ist nur eine Option, Design und Farben sind
  beliebig austauschbar, das Gehäuse ist generisch und der Druckvorgang immer der
  gleiche.

  Ein Paar Änderungen wurden durch die Community an der Anleitung vorgenommen,
  um auf neue Teile und neue Erkenntnisse hinzuweisen, die zum Zeitpunkt
  der Entstehung des Dokuments noch nicht bekannt waren.
{{% /alert %}}

## Wie komme ich an ein Gehäuse?

Unter Umständen findet man in der Community hilfreiche Bastler:innen, die einem
ein Gehäuse mit herstellen -- hierzu fragst du am besten [im Forum]({{<
relref "/community" >}}) nach. Eine andere Möglichkeit ist, einen lokalen
Maker- oder Hackspace zu finden, in dem 3D-Drucker und Know-How zur Verfügung
stehen.

In dieser Anleitung geht es darum, ein komplettes Gehäuse mit Halterungen
selbst zu drucken und herzustellen.  Der Druck eines kompletten OpenBikeSensor-Gehäusesatzes, oder auch nur von Teilen davon, ist problemlos möglich, vorausgesetzt man hat einen 3D-Drucker zur Verfügung.

Der 3D-Druck kostet ca. 5 € Material (Filamentkosten können variieren), Verschleiß, Stromkosten und vor allem Zeit, ca. 10-20h Druckzeit muss man schon einplanen.

Die nachfolgende Beschreibung verwendet für das Sensorgehäuse die Dateien von [VerticalCase_JSN-AJ](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/master/MainCase/VerticalCase_JSN-AJ). Für den Auslöseknopf und die Anzeige am Lenker werden die Dateien von [SlideOnDisplay](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/master/DisplayCase/SlideOnDisplay) verwendet. Aus der Vielzahl der angebotenen Modelle bilden diese beiden das [Standardmodell]({{< relref path="models" >}}).

## Drucker und Slicer

{{< imgproc "Ultimaker_at_work.jpg" Resize 600x >}}
  Der Ultimaker 3 hat ein Displaygehäuse mit Zugentlastung fertig gedruckt.
{{< /imgproc >}}

Für den Druck verwende ich einen Ultimaker 3. Dieser hat 2 Extruder, sodass mit
2 Filamenten gleichzeitig gedruckt werden kann. Das vereinfacht den Druck des
Sensorgehäuses und des Deckels, da für die Logos eine zusätzliche Farbe
verwendet werden kann. Bei einem Drucker mit nur einem Extruder muss während
des Drucks das Filament gewechselt werden. Hierfür gibt es verschiedene
Strategien, die je nach Drucker, Firmware und Slicer variieren. Alternativ
können alle Teile einfarbig, mit nur einem Filament gedruckt werden.

Wichtig ist die Slicer-Software, die den Druck für den jeweiligen Drucker
aufbereitet. Für den Ultimaker (und viele andere Drucker) kann Cura von der
[offiziellen Website](https://ultimaker.com/software/ultimaker-cura)
heruntergeladen und kostenlos verwendet werden (für Linux, Windows und Apple).
Eine starke Alternative ist der [Prusa
Slicer](https://www.prusa3d.com/prusaslicer/). Die Wahl des Slicers hängt von
persönlicher Präferenz und den unterstützten Druckern ab, sowie in
Spezialfällen den unterstützten Features. Beide Slicer eignen sich für den
Druck [von](von) OpenBikeSensor-Gehäuseteilen.

## Material und Farben

Das empfohlene Material für den Druck der Gehäuseteile ist PETG, das Material
mit den meisten Vorteilen für unser Projekt:

* hohe Schlagfestigkeit und dennoch flexibel -- wichtig für den Einsatz am Fahrrad
* hydrophob, wasserabweisend, witterungsbeständig -- wichtig für Außeneinsatz
* geruchsneutrales Drucken -- erleichtert das Drucken auch zu Hause
* niedrige Viskosität (Zähigkeit)
* verfügbar in vielen verschiedenen Farben, sogar transparent
* Glasübergangstemperatur von 80°C wird auch bei Sonnenschein normal nicht erreicht

Nachteilig ist allerdings die UV Beständigkeit, die nicht so hoch ist wie bei
ABS oder ASA. Doch die Vorteile überwiegen für die meisten Nutzer diese Einschränkung. 
Wer viel Erfahrung im maßhaltigen Drucken mit ABS oder einem anderen hitzebeständigen 
Material hat, kann natürlich auch auf dieses zurückgreifen.

Explizit abraten müssen wir von PLA - bei PLA-Gehäusen kann die 
Glasübergangstemperatur im Sonnenschein überschritten werden, wodurch sich
das Gehäuse verzieht.

{{< imgproc "OBS_main_case_and_lid_with_logos.jpg" Resize 800x >}}
    Beispiel eines gedruckten Gehäuses mit Logos
{{< /imgproc >}}

## Druckvorbereitung

Alle Dateien für das OpenBikeSensor Projekt wie Software, Firmware, Dokumentation und auch die 3D-Druckdateien liegen auf GitHub.  Das Repository für die Gehäusedaten ist:

https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase

Die Gehäuselemente werden unterschieden in

+ Das Hauptgehäuse (main case), Variante ["VerticalCase_JSN-AJ"](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/master/MainCase/VerticalCase_JSN-AJ)
+ Fahrradhalterung für Sensor Gehäuse (mounts)
+ Anzeige mit Lenkerhalterung (display)

Auf GitHub findet man für jedes Teil eine Druckdatei in 3 verschiedenen
Formaten.  In dieser Beschreibung wurden ausschließlich die `.stl`-Dateien von
GitHub für den 3D Druck verwendet, diese werden dann mit Cura weiter
verarbeitet.

{{% alert title="Hinweise zum Dateiformat" color="info" %}}
  - Das Format `.step` oder `.stp` ist ein Standard zum Austausch von
    Produktmodell Daten. Diese Dateien stellen 3D-Objekte in CAD-Software dar
    und können zugehörige Informationen enthalten.
  - Das Format `.ipt` beschreibt ein einzelnes Konstruktionselement im Autodesk
    Inventor.
  - Das Format `.stl` beschreibt die Oberflächenform und -fläche einer
    3D-CAD-Konstruktion. Es beschreibt die Rohdaten ohne spezifische Einheiten.
{{% /alert %}}

### Slicing

1. Der Import einer .stl Datei in eine Slicer Software (wie z.B. Cura) ist der erste Schritt um ein 3D Objekt zu drucken.
2. In der Slicer Software wird die .stl Datei (oder mehrere Dateien) so auf die Druckplatte gelegt, sodass es möglichst wenig Überhänge gibt:

{{< slider >}}
{{< slider-image
    src="OBS-MainCase-A02_lid_adfc-logo_gedreht.jpg"
    alt="1. So sollte es aussehen, kann aber in dieser Lage so nicht gedruckt werden" >}}
{{< slider-image
    src="OBS-MainCase-A02_lid_adfc-logo_Drucklage.jpg"
    alt="2. Drucken mit dem Gesicht nach unten" >}}
 {{< /slider >}}

3. Einstellungen beim Vorbereiten

{{< slider >}}
  {{< slider-image
    src="UM3_CuraUI_case_prepare.jpg"
    alt="1. Cura view auf main case im Vorbereitungsmode" >}}
  {{< slider-image
    src="UM3_CuraUI_case_extruder.jpg"
    alt="2. Einstellung auf PETG und 2 Extruder" >}}
 {{< slider-image
    src="UM3_CuraUI_case_settings.jpg"
    alt="3. Settings für Druckdichte (Infill), Support, Düsendurchmesser" >}}
{{< slider-image
    src="UM3_CuraUI_case_slice.jpg"
    alt="4. starte Slicing" >}}
 {{< /slider >}}

4. Slicen starten: Cura erstellt nun eine Datei im format .gcode, der alle
   Befehle für den speziellen Drucker und das Material enthält (z.B.
   Bewegungen, Temperaturen, etc.).

{{< slider >}}
{{< slider-image
    src="UM3_CuraUI_case_slice_information.jpg"
    alt="1. Nachdem alle Einstellungen erfolgt sind, wird das Slicing gestartet " >}}
{{< slider-image
    src="UM3_CuraUI_case_slice_preview.jpg"
    alt="2. Slicing information gibt es im Preview, mit den beiden Schiebern unten und rechts kann man jede einzelne Bahn des Extruders verfolgen" >}}
 {{< /slider >}}

5. Übertragung auf den 3D Drucker: Wenn der 3D-Drucker am PC oder im Netz angeschlossen ist, kann man die *.gcode Datei direkt auf den Drucker übertragen. Ansonsten muss die Datei auf einen Datenträger (USB-Stick oder SD-Karte) gespeichert und dieser in den Drucker eingesteckt werden.
6. Im Menü des Druckers wird dann diese *.gcode Datei für den Druck ausgewählt und der Druck gestartet.

### Hauptgehäuse
{{< imgproc "OBS_Gehäuse_mit_Deckel_und_text.jpg" Resize 600x >}}
Sensorgehäuse mit Deckel und Montage{{< /imgproc >}}
Die Sensoren und Elektronik wird im Sensorgehäuse eingebaut. Empfohlen wird hier das Gehäuse mit dem OBS logo zu drucken, einmal aus Respekt zur OBS Community, aber auch um damit für das OpenBikeSensor Projekt zu werben.

5 Teile sind zum Drucken
1. Für das Gehäuse mit dem OBS Logo habe ich folgende 2 files verwendet:
[OBS-MainCase-B-001a_MainCase_with_0.4mm_OBS-logo.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-B-001a_MainCase_with_0.4mm_OBS-logo.stl)
und [OBS-MainCase-B-001b_inner_logo_part.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-B-001b_inner_logo_part.stl)
2. Das zweite Teil ist der Gehäusedeckel (lid), diesen gibt es ohne Text, oder mit dem OBS logo, oder mit ADFC logo wie ich ihn gedruckt habe. Dazu braucht man 2 files:
liegen auf der [ADFC page - Vorlagen zum OpenBikeSensor ](https://aktiv.adfc.de/fileadmin/user_upload/Aktivenbereich/Arbeit_und_Engagement_im_ADFC/Verkehrspolitische_Themen/OpenBikeSensor/OpenBikeSensor_Case_mit_ADFC_Logo.zip) (Zugang für für aktive ADFC Mitglieder)
3. GPS deckel: Zusätzlich zum Sensorgehäuse braucht man:
[OBS-MainCase-A-004_GPS-Cover_v0.1.2.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-A-004_GPS-Cover_v0.1.2.stl)

4. USB Cover:
[OBS-MainCase-A-003_USB-Cover_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-A-003_USB-Cover_v0.1.1.stl)
5. Anschluß für die Fahrradhalterungen
[OBS-Mounting-A-001_StandardOBSMount_v0.1.2.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-A-001_StandardOBSMount_v0.1.2.stl). 
  {{< imgproc "Mounting-A-001.png" Resize 800x >}} 
  Der Anschluss für die Fahradhalterung ist das Gehäuseteil mit der höchsten 
  Belastung, es wird deshalb empfohlen, für dieses Teil mit höherem 
  Infill (>50%) zu drucken, und die Wandstärke auf 2.4mm zu erhöhen, 
  respektive je nach Slicer bei einer 0.4mm Düse 6 Perimeter zu wählen. Das
  Teil sollte seitlich stehend gedruckt werden, um die Extrusionsrichtung
  in Belastungsrichtung auszurichten, was das Teil zusätzlich verstärkt. Bei
  Haftungsproblemen kann das Teil in den Slicereinstellungen mit einem Brim
  versehen werden.
  {{< /imgproc >}}


{{< imgproc "case parts - prusaslicer.png" Resize 800x >}}
Lage der Sensorgehäuse elemente auf dem Drucker {{< /imgproc >}}


### Fahrradhalterung
{{< imgproc "Zwei_halterungen.jpg" Resize 800x >}}
Zwei Halterungen{{< /imgproc >}}
Es gibt verschieden Möglichkeiten den OBS Sensor am Fahrrad zu montieren,
1. Standard Sattelhalterung (Standard Seat Post Mount):
[OBS-Mounting-A-002_StandardSeatPostMount_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-A-002_StandardSeatPostMount_v0.1.1.stl)
2. Verlängerte Sattelhalterung (Extended Seat Post Mount): steht weiter heraus, ist aufgrund der Hebelwirkung mechanisch mehr belastet
[OBS-Mounting-C-002_ExtendedSeatPostMount.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-C-002_ExtendedSeatPostMount.stl)

3. Querstangenhalterung (Top Tube Mount): wenn die Sattelhalterungen nicht verwendbar sind, kann die Montage weiter vorne an der Querstange erfolgen
[OBS-Mounting-B-002_TopTubeMount.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-B-002_TopTubeMount.stl)

4. Sicherungspin (Locking pin): fixiert Sensorgehäuse an der Halterung
[OBS-Mounting-A-003_LockingPin_v0.1.3.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-A-003_LockingPin_v0.1.3.stl)

{{< imgproc "UM3_curaUI_OBS-Mounting-all_mounts_mit_text.jpg" Resize 800x >}}
Lage der 3 Halterungen und Sicherungspin auf dem Drucker {{< /imgproc >}}


### Anzeige und Auslöseknopf am Lenker
{{< imgproc "20210707_142649_OBS_Display_text.jpg" Resize 400x >}}
Display mit Sechskantmutter und Schraubklammer{{< /imgproc >}}

1. Anzeigegehäuse Unterteil
   * Variante mit Einpressmuttern: [OBS-Display-A-002_HeatSetInsert_Display_Bottom_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-002_HeatSetInsert_Display_Bottom_v0.1.0.stl)
   * Variante mit Sechskantmuttern: [OBS-Display-B-002_Sechskantmutter_Display_Bottom_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-002_Sechskantmutter_Display_Bottom_v0.1.0.stl)
2. Anzeigegehäuse Oberteil
   * Variante mit Einpressmuttern: [OBS-Display-A-001_HeatSetInsert_Display_Top_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-001_HeatSetInsert_Display_Top_v0.1.0.stl)
   * Variante mit Sechskantmuttern: [OBS-Display-B-001_Sechskantmutter_Display_Top_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-001_Sechskantmutter_Display_Top_v0.1.0.stl)
3. Displaymontage am Lenker - 3 Alternativen:
   * einfache Kabelbinderschiene: [OBS-Display-A-005_Kabelbinder_Schiene_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-005_Kabelbinder_Schiene_v0.1.1.stl)
   * Kabelbinderschiene gedreht:
     - [OBS-Display-C-005_Kabelbinder_Schiene_gedreht_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-C-005_Kabelbinder_Schiene_gedreht_v0.1.0.stl)
     - [OBS-Display-C-006_Kabelbinder_Halter_gedreht_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-C-006_Kabelbinder_Halter_gedreht_v0.1.0.stl)
   * Schraubklammer:
       - [OBS-Display-B-005_Schiene_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-005_Schiene_v0.1.0.stl)
       - [OBS-Display-B-006_Oberschale_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-006_Oberschale_v0.1.0.stl)
       - [OBS-Display-B-007_Unterschale_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-007_Unterschale_v0.1.0.stl)
     {{< imgproc "Halterung_Display.JPG" Resize 300x >}} Schraubklammer und Schiene für Display{{< /imgproc >}}
4. Kabelzugentlastung (muss 2x gedruckt werden):
   - [OBS-Display-A-003_Zugentlastung_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-003_Zugentlastung_v0.1.1.stl)
   {{< imgproc "Zugentlastung mit Schrauben.JPG" Resize 300x >}}
     Zugentlastung besteht aus zwei gleichen Teilen, die mit 2 Stück M3x10 Schrauben verbunden werden.
   {{< /imgproc >}}



## Materialverbrauch und Zeitbedarf

Nach dem Slicen wird angezeigt wie lange der Druckvorgang dauert und wie viel
Material für den Druck benötigt wird. Abhängig von den Einstellungen kann die
Druckdauer, sehr unterschiedlich sein. Oft geht mit mehr Druckgeschwindigkeit
ein Qualitätsverlust einher, sodass die beiden gegeneinander abgewogen werden
müssen.

Üblich für den Druck eines ganzen Gehäuses ist daher je nach Drucker etwa 10
Stunden in Summe. Die Kosten des Filaments belaufen sich auf ca. 3 €, wer
Verschleiß und Stromkosten einrechnet kommt auf etwa 5 € Gesamtkosten.

## Troubleshooting

### Lage der Druckteile und Überhänge

Beim Druck der Gehäuseteile ist die Lage des Teiles wichtig, denn man möchte Überhänge vermeiden, also wenn der Drucker in der luft drucken würde. Man positioniert ein Teil auf dem Drucker das es möglichst wenig oder unkritische Übergänge bildet.

Die *.stl Dateien auf GitHub sind meist nicht optimal für den Druck
ausgerichtet. Aber schon nach dem Laden des stl files in Cura werden in der
Vorschau die Überhänge in rot angezeigt.  Am Beispiel des Deckels (Bilder 1 und
2) ist es sehr offensichtlich das die Lage eine wesentliche Rolle spielt, wie
herum das Teil auf die Druckerplatte gelegt werden soll.

Aber selbst bei einer optimalen Lage wie im Beispiel des Sensorgehäuses zeigt
Cura wo sich trotzdem noch Überhänge bilden. Manche Überhänge wie
Schraubenlöcher sind unkritisch da der Drucker das selbst überbrücken kann
(Brigding). Doch wenn der Übergang zu groß wird können sich viele Fäden
ziehen. Um das zu vermeiden kann die Supportfunktion eingeschalten werden, der
Drucker erstellt dann leichte Stützstrukturen, die nach dem Druck wieder
entfernt werden. Mit gut eingestellten 3D-Druckern ist es aber auch schon gelungen,
Gehäuse ganz ohne Supportstrukturen zu drucken. Je nach Druckvolumen kann es sich
also lohnen, hier zu experimentieren, um ohne Supportstruktur auszukommen. Dazu 
können in manchen Slicern auch testweise Teilausschnitte aus dem Gehäuse gedruckt 
werden, um nur die kritischen Bereiche mit Überhängen einzeln testen zu können.

{{< slider >}}
{{< slider-image
    src="UM3_CuraUI_ lid_Überhänge.jpg"
    alt="1. schlechte Positionierung siehe in rot Überhänge" >}}
{{< slider-image
    src="UM3_CuraUI_ lid_richtige_Lage.jpg"
    alt="2. Richtig positionieren ist wichtig" >}}
{{< slider-image
    src="UM3_CuraUI_ case_Überhänge.jpg"
    alt="3. In der Vorschau werden bereits in rot Überhänge angezeigt " >}}
{{< slider-image
    src="UM3_CuraUI_ case_support_einschalten.jpg"
    alt="4. Wenn support gewünscht dann Häckchen setzen" >}}
{{< slider-image
    src="UM3_CuraUI_ case_supportstruktur.jpg"
    alt="5. Die zusätzliche supportstruktur kann man nach dem Slicing in Preview sehen" >}}
 {{< /slider >}}

Nach dem Druck mit Supportstruktur, muss diese mechanisch herausgebrochen und entfernt werden.

### Fehlerhafte Drucke
Einige Fehler traten während der Drucke auf:

{{< imgproc "OBS_prints_1418_support missing.JPG" Resize 400x >}}
Support fehlt, Düse vom 2. Extruder verstopft
{{< /imgproc >}}

{{< imgproc "OBS_prints_1422_broken_slide.JPG" Resize 400x >}}
Brüchige Verbindung, vermutlich Druckdichte (Infill) zu gering
{{< /imgproc >}}


## Weitere Anleitungen

* Detaillierte [Anleitung für den Zusammenbau](https://www.openbikesensor.org/docs/hardware/v00.03.12/build-instructions/) des gesamten OpenBikeSensors beschreibt den Einbau der elektronischen Komponenten in die beiden Gehäuse.
* Die [Montage des Sensors](https://www.openbikesensor.org/docs/user-guide/mounting/) am Fahrrad wird mit einem vertical case und verschiedenen Halterungen für das Displaygehäuse gezeigt


