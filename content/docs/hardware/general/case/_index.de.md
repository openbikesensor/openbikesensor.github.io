---
title: Gehäusedruck
weight: 30
---

{{< imgproc "OBS_vertical_case_alle_Teile.jpg" Fit "800x600" >}}
OpenBikeSensor-Bausatz der Version 00.03.10, mit einem "Vertical Case"
{{< /imgproc >}}

## Vorwort
Diese Anleitung entsteht, weil ich versuche selbst ein komplettes OBS Gehäuse zu drucken, selbst aber keine Erfahrung weder mit dem 3D-Druck noch mit File respositories auf Github hatte. Viele Leute haben mit geholfen und dieses Wissen möchte ich weitergeben in einer hoffentlich verständlichen und einfachen Form. 
Da ich Gehäuse für den ADFC Ulm, Neu-Ulm benötige, sind die Beispiele oft mit ADFC Logo, Farben etc. gezeigt. Das ist nur eine Option, design und Farben sind beliebig austauschbar, das Gehäuse ist generisch und der Druckvorgang immer der gleiche. 

## Wie komme ich an ein Gehäuse?
+ Idealerweise könnte man ein Gehäuse einfach kaufen. Doch es gibt weder eine Serienfertigung noch einen offiziellen Dienstleister der den Gehäusedruck übernemhen würde.
+ Unter Umständen findet man in der Community hifreiche Bastler die einem ein Gehäuse mit herstellen. Am besten anfragen in Slack
+ In dieser Anleitung geht es darum ein komplettes Gehäuse mit Halterungen selbst zu drucken und herzustellen.
Der Druck eines kompletten OBS Gehäusesatzes oder auch nur Teile ist problemlos möglich, vorrausgesetzt man hat einen 3D Drucker zur Verfügung. Der 3D-Druck kostet ca 5€ Material (Filamentkosten können variieren), Verschleiß, Stromkosten und Zeit. Dazu aber ca. 10-20h Druckzeit.
Die nachfolgende Beschreibung baut auf dem [VerticalCase_JSN-AJ](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/master/MainCase/VerticalCase_JSN-AJ) für das Sensorgehäuse auf und auf dem [SlideOnDisplay](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/master/DisplayCase/SlideOnDisplay) für den Lenker Auslöseknopf und Anzeige. Aus Menge der angebotenen Modelle sind das die beiden Standardmodelle.  

## Drucker, Material, SW, Druckeinstellungen 
### Drucker und Material - PETG
Für den Druck verwende ich einen Ultimaker 3 dieser hat 2 extruder so das man mit 2 Filamenten gleichzeitig drucken, das wurde nur relevant für das OBS Logo und das ADFC logo, ansonsten ist das Gehäuse mit einem Filament gedruckt. Man kann nei Drucker mit einem Extruder natürlich das Filament wechseln.

Wichtig ist die Slicer SW die den Druck für den jeweiligen Durcker aufbereitet. Für den Ultimaker (und viele andere Drucker) kann Cura https://ultimaker.com/software/ultimaker-cura verwendet werden (für Linux, Windows und Apple). Der Vorteil ist,  Cura kann man sich auf einen separaten PC laden und auf diesem offline probieren was die besten Einstellungen sind.  

### Material und Farben

PETG ist das Material das die meisten Vorteile für unser Projekt bietet:

+ hohe Schlagfestigkeit und dennoch flexibel - wichtig für den Einsatz am Fahrrad
+ Hydrophob, geringe Wasseraufnahme - wichtig für Außeneinsatz
+ niedrige Viskosität (Zähigkeit)
+ geruchsneutrales Drucken - erleichtert das Drucken auch zuHause in den 4 Wänden.
+ gute Witterungsbeständigkeit - Wichtig für Montage am Fahrrad
- nachteilig ist allerdings die UV Beständigkeit die nicht so hoch ist wie bei ABS oder ASA. Doch die Vorteile überwiegen diese Einschränkuzng

PETG ermöglicht auch den Kauf vieler verschieden farbiger und auch transparenter Filamente 
{{< imgproc "OBS_main_case_and_lid_with_logos.jpg" Resize 600x >}} 
Beispiel eines gedruckten Gehäuses mit Logos {{< /imgproc >}}

## Druckvorbereitung und Druckdateien auswahl
Alle Dateien für das Openbikesensor projekt wie SW, FW, Docs und auch die 3D Druckdateien liegen auf Github. Unter "OpenBikeSensor3dPrintableCase/MainCase/VerticalCase_JSN-AJ" sind viele verschiedene Druckdateien für unsere Gehäuse vorhanden
Die Gehäuselemente werden unterschieden in 
+ Sensor Gehäuse - main case
+ Fahrradhalterung für Sensor Gehäuse - Mounting
+ Anzeige mit Lenkerhalterung - Display

Auf Github findet man für jedes Teil eine Druckdatei in 3 verschiedenen Formaten stp, itp und stl.

  *(.STEP oder .stp: das STEP format ist ein standard zum Austausch von Produkt model daten. Diese Dateien stellen 3D-Objekte in CAD-Software dar und können zugehörige Informationen enthalten.)*  
  *(.ipt beschreibt ein einzelnes Konstruktionselement im Autodesk Inventor)*  
  *(.stl file format beschreibt die Oberflächenform und -fläche einer 3D-CAD-Konstruktion. Es beschreibt die Rohdaten ohne spezifische Einheiten)*

Für meine Zwecke habe ich ausschließlich die *.stl Dateien von Github verwendet, diese werden dann mit Cura weiter verarbeitet. 


### Schritte um Dateien von Github zu laden und für den 3D Drucker vorzubereiten?

1. Der Import eines .stl files in eine slicer SW (wie z.B. Cura) ist der erste Schritt um ein 3D objekt zu drucken
2. In der slicer SW wird der .stl file (oder mehrere files) möglichst so gelegt das es wenig Überhänge gibt
{{< slider >}}
{{< slider-image
    src="OBS-MainCase-A02_lid_adfc-logo_gedreht.jpg"
    alt="1. So soll es aussehen, aber die Drucklage ist anders " >}}
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

4. Slicen starten: Cura erstellt nun einen file im format .gcode, der alle Befehle für den speziellen Drucker enthält (z.B. Druckdichte, Material, etc.). 
{{< slider >}}
{{< slider-image
    src="UM3_CuraUI_case_slice_information.jpg"
    alt="1. Nachdem alle Einstellungen erfolgt sind, wird das slicing gestartet " >}}
{{< slider-image
    src="UM3_CuraUI_case_slice_preview.jpg"
    alt="2. Slicing information gibt es preview, mit den beiden Schiebern unten und rechts ist jede einzelne Bahn die gedruckt wird sichtbar" >}}
 {{< /slider >}}

5. Übertrag auf den 3D Drucker: Nachdem mein verwendeter Drucker in einem anderen Gebäude steht, speichere ich den .gcode file auf einem USB stick und stecke diesen an den Drucker. 
6. Im Ultimaker 3 Menu wird dann der File für den Druck ausgewählt und der Druck gestartet.

### Sensor gehäuse - Main case
Die Sensoren und Elektronik wird im Sensorgehäuse eingebaut. Empfohlen wird hier das Gehäuse mit dem OBS logo zu drucken, einmal aus Respekt zur OBS Community aber auch um damit zu werden. 5 Teile sind zum Drucken
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
Es gibt verschieden Möglichkeiten den OBS Sensor am Fahrrad zu montieren,  
1. Standard Sattelhalterung (Standard Seat post Mount):  
[OBS-Mounting-A-002_StandardSeatPostMount_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-A-002_StandardSeatPostMount_v0.1.1.stl)
2. verlängerte Sattelhalterung (Extended Seat Post Mount): steht weiter heraus, ist aufgrund der Hebelwirkung mechanisch mehr belastet   
[OBS-Mounting-C-002_ExtendedSeatPostMount.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-C-002_ExtendedSeatPostMount.stl)

3. Querstangen halterung (Top Tube Mount): wenn die Sattelhalterungen nicht möglich sind kann die Montage weiter vorne erfolgen   
[OBS-Mounting-B-002_TopTubeMount.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-B-002_TopTubeMount.stl)

4. Schließpin (Locking pin):   
[OBS-Mounting-A-003_LockingPin_v0.1.3.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-A-003_LockingPin_v0.1.3.stl) 

{{< imgproc "UM3_curaUI_OBS-Mounting-all_mounts_mit_text.jpg" Resize 800x >}} 
Lage der 3 Halterungen und Locking pin auf dem Drucker {{< /imgproc >}}


### Anzeige und Auslöseknopf am Lenker - Display
 1. Anzeigegehäuse Unterteil   
     mit Einpressmuttern [OBS-Display-A-002_HeatSetInsert_Display_Bottom_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-002_HeatSetInsert_Display_Bottom_v0.1.0.stl)   
     oder mit Sechskant muttern [OBS-Display-B-002_Sechskantmutter_Display_Bottom_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-002_Sechskantmutter_Display_Bottom_v0.1.0.stl)

 2. Anzeigegehäuse Oberteil   
    mit Einpressmuttern [OBS-Display-A-001_HeatSetInsert_Display_Top_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-001_HeatSetInsert_Display_Top_v0.1.0.stl)   
    oder mit Sechskant muttern [OBS-Display-B-001_Sechskantmutter_Display_Top_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-001_Sechskantmutter_Display_Top_v0.1.0.stl)


 3. Display montage am Lenker - 3 Alternativen:

     3.1 einfache Kabelbinder schiene   
[OBS-Display-A-005_Kabelbinder_Schiene_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-005_Kabelbinder_Schiene_v0.1.1.stl)

     3.2 Kabelbinder schiene gedreht (2Teile)   
[OBS-Display-C-005_Kabelbinder_Schiene_gedreht_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-C-005_Kabelbinder_Schiene_gedreht_v0.1.0.stl)   
[OBS-Display-C-006_Kabelbinder_Halter_gedreht_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-C-006_Kabelbinder_Halter_gedreht_v0.1.0.stl)

     3.3. Schraubklammer 3 Teile   
    [OBS-Display-B-005_Schiene_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-005_Schiene_v0.1.0.stl)   
    [OBS-Display-B-006_Oberschale_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-006_Oberschale_v0.1.0.stl)    
    [OBS-Display-B-007_Unterschale_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-007_Unterschale_v0.1.0.stl)

    3.4. Kabelzugentlastung 1 Teil (muss 2mal gedruckt werden)   
[OBS-Display-A-003_Zugentlastung_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-003_Zugentlastung_v0.1.1.stl)


### Materialverbrauch und Zeitbedarf
Nach dem slicen wird angezeigt wie lange der Durckvorgang dauert und wieviel Material für den Druck benötigt wird. Abhängig davon wie fein man durckt und mit welchem Infill kann die Zeit sehr unterschiedlich sein. 

## Troubleshooting
### Lage der Druckteile und Überhänge
Beim Druck der Gehäuseteile ist die Lage des Teiles wichtig, denn man möchte Überhänge vermeiden, also wenn der Drucker in der luft drucken würde. Man positioniert ein Teil auf dem Drucker das es möglichst wenig oder unkritische Übergänge bildet.   
Die *.stl Dateien auf Github sind meist nicht optimal für den Druck ausgerichtet. Aber schon nach dem Laden des stl files in Cura werden in der Vorschau die Überhänge in rot angezeigt.   
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

Nach dem Druck mit Supportstruktor, muss diese mechanisch herausgebrochen und entfernt werden.


## Weitere Anleitungen
+ Detaillierte [Anleitung für den Zusammenbau](https://www.openbikesensor.org/docs/hardware/v00.03.12/build-instructions/) des gesamten OBS beschreibt den Einbau der elektronischen Komponenten in die beiden Gehäuse
+ Die [Montage des Sensors](https://www.openbikesensor.org/docs/user-guide/mounting/) am Fahrrad wird mit einem vertical case und verschiedenen Halterungen für das Displaygehäuse gezeigt


