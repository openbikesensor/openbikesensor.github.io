---
title: Gehäusedruck
weight: 30
---

{{< imgproc "OBS_vertical_case_alle_Teile.jpg" Fit "800x600" >}}
OpenBikeSensor-Bausatz der Version 00.03.10, mit einem "Vertical Case"
{{< /imgproc >}}

## Vorwort
Diese Anleitung entstand, weil ich versuche selbst ein komplettes OpenBikeSensor Gehäuse zu drucken, selbst aber keine Erfahrung weder mit dem 3D-Druck noch mit File respositories auf GitHub hatte. Viele Leute haben mit geholfen und letztendlich haben wir 10 Gehäuse gedruckt. Dieses Wissen möchte ich weitergeben in einer hoffentlich verständlichen und einfachen Form. Deswegen ist die Beschreibung auch aus meiner Sicht geschrieben, es gibt bestimmt andere effizientere Wege um zu einem ähnlichen Ergebnis zu gelangen
Da ich Gehäuse für den ADFC Ulm, Neu-Ulm benötige, sind die Beispiele oft mit ADFC Logo, Farben etc. gezeigt. Das ist nur eine Option, Design und Farben sind beliebig austauschbar, das Gehäuse ist generisch und der Druckvorgang immer der gleiche. 

## Wie komme ich an ein Gehäuse?
+ Idealerweise könnte man ein Gehäuse einfach kaufen. Doch es gibt weder eine Serienfertigung, noch kenne ich einen offiziellen Dienstleister, der den Gehäusedruck übernehmen würde.
+ Unter Umständen findet man in der Community hilfreiche Bastler, die einem ein Gehäuse mit herstellen. Dazu am besten in Slack anfragen. Eine andere Möglichkeit ist einen lokalen "Makerspace" zu finden die 3D Drucker und Know-How zur Verfügung stellen.
+ In dieser Anleitung geht es darum ein komplettes Gehäuse mit Halterungen selbst zu drucken und herzustellen.
Der Druck eines kompletten OBS Gehäusesatzes oder auch nur Teile ist problemlos möglich, vorausgesetzt man hat einen 3D Drucker zur Verfügung. Der 3D-Druck kostet ca 5€ Material (Filamentkosten können variieren), Verschleiß, Stromkosten und vor allem Zeit, ca. 10-20h Druckzeit muß man schon einplanen.  
Die nachfolgende Beschreibung verwendet für das Sensorgehäuse die Dateien von [VerticalCase_JSN-AJ](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/master/MainCase/VerticalCase_JSN-AJ). Für den Lenker Auslöseknopf und Anzeige werden die Dateien von [SlideOnDisplay](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/master/DisplayCase/SlideOnDisplay) verwendet. Aus der Vielzahl der angebotenen Modelle sind das die beiden Standardmodelle.  

## Drucker, Material, SW, Druckeinstellungen 
### Drucker und Material - PETG
{{< imgproc "Ultimaker_at_work.jpg" Resize 400x >}} 
Ultimkaer 3 fertig mit Displaygehäuse und Zugentlastung {{< /imgproc >}}
Für den Druck verwende ich einen Ultimaker 3 dieser hat 2 Extruder so das man mit 2 Filamenten gleichzeitig drucken kann. Das vereinfacht den Druck des Sensorgehäuses und des Deckels, da für das OBS Logo und das ADFC logo 2 Farben verwendet werden. Bei einem Drucker mit nur einem Extruder, muß man während des Drucks das Filament wechseln. Ansonsten können alle Teile mit einem Filament gedruckt werden.

Wichtig ist die Slicer Software, die den Druck für den jeweiligen Durcker aufbereitet. Für den Ultimaker (und viele andere Drucker) kann Cura von der offiziellen Website https://ultimaker.com/software/ultimaker-cura heruntergeladen und kostenlos verwendet werden (für Linux, Windows und Apple). (Ein Vorteil für mich ist: Cura Läuft offline auf meinem privaten PC und darauf erstelle ich die Druckfiles. Die ferigen Druckfiles (gcode format) lade ich auf einem USB stick mit und stecke ihn den Ultimaker3 der sich in einem anderen Gebäude befindet.) 

### Material und Farben

PETG ist das Material, welches die meisten Vorteile für unser Projekt bietet:

+ hohe Schlagfestigkeit und dennoch flexibel - wichtig für den Einsatz am Fahrrad
+ Hydrophob, wasserabweisend - wichtig für Außeneinsatz
+ niedrige Viskosität (Zähigkeit)
+ geruchsneutrales Drucken - erleichtert das Drucken auch zu Hause in den 4 Wänden.
+ gute Witterungsbeständigkeit - Wichtig für Montage am Fahrrad
- nachteilig ist allerdings die UV Beständigkeit, die nicht so hoch ist wie bei ABS oder ASA. Doch die Vorteile überwiegen diese Einschränkung

PETG ermöglicht auch den Kauf vieler verschieden farbiger und auch transparenter Filamente 
{{< imgproc "OBS_main_case_and_lid_with_logos.jpg" Resize 800x >}} 
Beispiel eines gedruckten Gehäuses mit Logos {{< /imgproc >}}

## Druckvorbereitung und Auswahl der Druckdateien
Alle Dateien für das OpenBikeSensor projekt wie Software, Firmware, Dokumentation und auch die 3D Druckdateien liegen auf GitHub. Unter "OpenBikeSensor3dPrintableCase/MainCase/VerticalCase_JSN-AJ" sind viele verschiedene Druckdateien für unsere Gehäuse vorhanden
Die Gehäuselemente werden unterschieden in 
+ Sensor Gehäuse - main case
+ Fahrradhalterung für Sensor Gehäuse - Mounting
+ Anzeige mit Lenkerhalterung - Display

Auf GitHub findet man für jedes Teil eine Druckdatei in 3 verschiedenen Formaten stp, itp und stl.

  *(.STEP oder .stp: das STEP Format ist ein Standard zum Austausch von Produkt Model Daten. Diese Dateien stellen 3D-Objekte in CAD-Software dar und können zugehörige Informationen enthalten.)*  
  *(.ipt beschreibt ein einzelnes Konstruktionselement im Autodesk Inventor)*  
  *(.stl file format beschreibt die Oberflächenform und -fläche einer 3D-CAD-Konstruktion. Es beschreibt die Rohdaten ohne spezifische Einheiten)*

In dieser Beschreibung wurden ausschließlich die *.stl Dateien von GitHub für den 3D Druck verwendet, diese werden dann mit Cura weiter verarbeitet. 


### Schritte um Dateien von GitHub zu laden und für den 3D Drucker vorzubereiten?

1. Der Import einer .stl Datei in eine slicer SW (wie z.B. Cura) ist der erste Schritt um ein 3D Objekt zu drucken
2. In der slicer SW wird die .stl Datei (oder mehrere Dateien) so auf die Druckplatte gelegt, daß es möglichst wenig Überhänge gibt
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
    alt="4. starte slicing" >}}
 {{< /slider >}}

4. Slicen starten: Cura erstellt nun eine Datei im format .gcode, der alle Befehle für den speziellen Drucker enthält (z.B. Druckdichte, Material, etc.). 
{{< slider >}}
{{< slider-image
    src="UM3_CuraUI_case_slice_information.jpg"
    alt="1. Nachdem alle Einstellungen erfolgt sind, wird das Slicing gestartet " >}}
{{< slider-image
    src="UM3_CuraUI_case_slice_preview.jpg"
    alt="2. Slicing information gibt es im Preview, mit den beiden Schiebern unten und rechts kann man jede einzelne Bahn des Extruders verfolgen" >}}
 {{< /slider >}}

5. Übertrag auf den 3D Drucker: Wenn der 3D-Drucker am PC oder im Netz angeschlossen ist, kann man die *.gcode Datei direkt auf den Drucker übertragen. In meinem Fall steht der verwendete 3D-Drucker in einem anderen Gebäude, und deswegen speichere ich die .gcode Datei auf einen USB stick und stecke diesen dann an den Drucker. 
6. Im Ultimaker 3 Menu wird dann diese *.gcode Datei für den Druck ausgewählt und der Druck gestartet.

### Sensor gehäuse - Main case
{{< imgproc "OBS_Gehäuse_mit_Deckel_und_text.jpg" Resize 600x >}} 
Sensorgehäuse mit Deckel und Montage{{< /imgproc >}}
Die Sensoren und Elektronik wird im Sensorgehäuse eingebaut. Empfohlen wird hier das Gehäuse mit dem OBS logo zu drucken, einmal aus Respekt zur OBS Community, aber auch um damit für das OpenBikeSensor Projekt zu werben.

5 Teile sind zum Drucken
1. Für das Gehäuse mit dem OBS Logo habe ich folgende 2 files verwendet:   
[OBS-MainCase-B-001a_MainCase_with_0.4mm_OBS-logo.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-B-001a_MainCase_with_0.4mm_OBS-logo.stl)   
und [OBS-MainCase-B-001b_inner_logo_part.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-B-001b_inner_logo_part.stl)
2. Das zweite Teil ist der Gehäusedeckel (lid), diesen gibt es ohne text, oder mit dem OBS logo, oder mit ADFC logo wie ich ihn gedruckt habe. Dazu braucht man 2 files:
liegen auf ADFC page
3. GPS deckel: Zusätzlich zum Sensorgehäuse braucht man:   
[OBS-MainCase-A-004_GPS-Cover_v0.1.2.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-A-004_GPS-Cover_v0.1.2.stl)

4. USB Cover:   
[OBS-MainCase-A-003_USB-Cover_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-A-003_USB-Cover_v0.1.1.stl)
5. Anschluß für die Fahrradhalterungen   
[OBS-Mounting-A-001_StandardOBSMount_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-A-001_StandardOBSMount_v0.1.1.stl)

{{< imgproc "UM3_curaUI_OBS-Maincase-all_pieces.jpg" Resize 800x >}} 
Lage der Sensorgehäuse elemente auf dem Drucker {{< /imgproc >}}


### Fahrradhalterungen - Mounts
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


### Anzeige und Auslöseknopf am Lenker - Display
{{< imgproc "20210707_142649_OBS_Display_text.jpg" Resize 400x >}} 
Display mit Sechskantmutter und Schraubklammer{{< /imgproc >}}
 1. Anzeigegehäuse Unterteil   
     mit Einpressmuttern [OBS-Display-A-002_HeatSetInsert_Display_Bottom_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-002_HeatSetInsert_Display_Bottom_v0.1.0.stl)   
     oder mit Sechskantmuttern [OBS-Display-B-002_Sechskantmutter_Display_Bottom_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-002_Sechskantmutter_Display_Bottom_v0.1.0.stl)

 2. Anzeigegehäuse Oberteil   
    mit Einpressmuttern [OBS-Display-A-001_HeatSetInsert_Display_Top_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-001_HeatSetInsert_Display_Top_v0.1.0.stl)   
    oder mit Sechskantmuttern [OBS-Display-B-001_Sechskantmutter_Display_Top_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-001_Sechskantmutter_Display_Top_v0.1.0.stl)


 3. Display montage am Lenker - 3 Alternativen:

    3.1 einfache Kabelbinderschiene   
[OBS-Display-A-005_Kabelbinder_Schiene_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-005_Kabelbinder_Schiene_v0.1.1.stl)

    3.2 Kabelbinderschiene gedreht (2 Teile)   
   [OBS-Display-C-005_Kabelbinder_Schiene_gedreht_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-C-005_Kabelbinder_Schiene_gedreht_v0.1.0.stl)   
[OBS-Display-C-006_Kabelbinder_Halter_gedreht_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-C-006_Kabelbinder_Halter_gedreht_v0.1.0.stl)

   
    3.3. Schraubklammer 3 Teile    
{{< imgproc "Halterung_Display.JPG" Resize 300x >}} Schraubklammer und Schiene für Display{{< /imgproc >}}

    [OBS-Display-B-005_Schiene_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-005_Schiene_v0.1.0.stl)   
[OBS-Display-B-006_Oberschale_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-006_Oberschale_v0.1.0.stl)    
[OBS-Display-B-007_Unterschale_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-007_Unterschale_v0.1.0.stl)

    3.4. Kabelzugentlastung 1 Teil (muss 2 mal gedruckt werden)  
{{< imgproc "Zugentlastung mit Schrauben.JPG" Resize 300x >}} 
Zugentlastung besteht aus zwei gleichen Teilen, die mit 2 M3 x10 Schrauben verbunden werden{{< /imgproc >}}

[OBS-Display-A-003_Zugentlastung_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-003_Zugentlastung_v0.1.1.stl)


### Materialverbrauch und Zeitbedarf
Nach dem slicen wird angezeigt wie lange der Durckvorgang dauert und wieviel Material für den Druck benötigt wird. Abhängig davon wie fein man druckt und mit welcher Druckdichte (Infill) kann die Druckdauer sehr unterschiedlich sein. 

## Troubleshooting
### Lage der Druckteile und Überhänge
Beim Druck der Gehäuseteile ist die Lage des Teiles wichtig, denn man möchte Überhänge vermeiden, also wenn der Drucker in der luft drucken würde. Man positioniert ein Teil auf dem Drucker das es möglichst wenig oder unkritische Übergänge bildet.   
Die *.stl Dateien auf GitHub sind meist nicht optimal für den Druck ausgerichtet. Aber schon nach dem Laden des stl files in Cura werden in der Vorschau die Überhänge in rot angezeigt.   
Am Beispiel des Deckels (Bilder 1 und 2) ist es sehr offensichtlich das die Lage eine wesentliche Rolle spielt, wie herum das Teil auf die Druckerplatte gelegt werden soll.
Aber selbst bei einer optimalen Lage wie im Beispiel des Sensorgehäuses zeigt Cura wo sich trotzdem noch Überhänge bilden. Manche Überhänge wie Schraubenlöcher sind unkritisch da der Drucker das selbst überbrücken kann (brigding).  
Doch wenn der Übergang zu groß wird können sich viele Fäden ziehen. Um das zu vermeiden kann die Support funktion eingeschalten werden, der Drucker erstellt dann leichte Stützstrukturen, die nach dem Druck wieder entfernt werden. 

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
{{< slider >}}
{{< slider-image
    src="OBS_prints_1418_support missing.JPG"
    alt="Support fehlt, Düse vom 2.Extruder verstopft" >}}
{{< slider-image
    src="OBS_prints_1422_broken_slide.JPG"
    alt="brüchige Verbindung, vermutlich Druckdichte (Infill) zu gering" >}}
 {{< /slider >}}



## Weitere Anleitungen
+ Detaillierte [Anleitung für den Zusammenbau](https://www.openbikesensor.org/docs/hardware/v00.03.12/build-instructions/) des gesamten OBS beschreibt den Einbau der elektronischen Komponenten in die beiden Gehäuse
+ Die [Montage des Sensors](https://www.openbikesensor.org/docs/user-guide/mounting/) am Fahrrad wird mit einem vertical case und verschiedenen Halterungen für das Displaygehäuse gezeigt


