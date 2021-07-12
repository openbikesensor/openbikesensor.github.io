---
title: Gehäusedruck
weight: 30
---

{{< imgproc "OBS_vertical_case_alle_Teile.jpg" Fit "800x600" >}}
OpenBikeSensor-Bausatz der Version 00.03.10, mit einem "Vertical Case"
{{< /imgproc >}}

TODO:

## Vorwort
Diese Anleitung entstand, weil ich versuche selbst ein komplettes OBS Gehäuse zu drucken, selbst aber keine Erfahrung weder mit dem 3D-Druck noch mit File respositories auf Github hatte. Viele Leute haben mit geholfen und dieses Wissen möchte ich weitergeben in einer hoffentlich verständlichen und einfachen Form. 
Da ich Gehäuse für den ADFC Ulm, Neu-Ulm benötige, sind die Beispiele oft mit ADFC Logo, Farben etc. gezeigt. Das ist nur eine Option, design und Farben sind beliebig austauschbar, das Gehäuse ist generisch und der Druckvorgang immer der gleiche. 

## Wie komme ich an ein Gehäuse?
+ Idealerweise könnte man ein Gehäuse einfach kaufen. Doch es gibt weder eine Serienfertigung noch einen offiziellen Dienstleister der den Gehäusedruck übernemhen würde.
+ Unter Umständen findet man in der Community hifreiche Bastler die einem ein Gehäuse mit herstellen. Am besten anfragen in Slack
+ In dieser Anleitung geht es darum ein Gehäuse selbst zu drucken und herzustellen.
Der Druck eines kompletten OBS Gehäusesatzes oder auch nur Teile ist problemlos möglich, vorrausgesetzt man hat einen 3D Drucker zur Verfügung. Der 3D-Druck kostet ca 5€ Material (Filamentkosten können variieren), Verschleiß, Stromkosten und Zeit. Dazu aber ca. 10-20h Druckzeit.

## Drucker, Material, SW, Druckeinstellungen 
### Drucker und Material - PETG
Für den Druck verwende ich einen Ultimaker 3 dieser hat 2 extruder so das man mit 2 Filamenten gleichzeitig drucken, das wurde nur relevant für das OBS Logo und das ADFC logo, ansonsten ist das Gehäuse mit einem Filament gedruckt. Man kann nei Drucker mit einem Extruder natürlich das Filament wechseln.

Wichtig ist die Slicer SW die den Druck für den jeweiligen Durcker aufbereitet. Für den Ultimaker (und viele andere Drucker) kann Cura https://ultimaker.com/software/ultimaker-cura verwendet werden (für Linux, Windows und Apple). Der Vorteil ist,  Cura kann man sich auf einen separaten PC laden und auf diesem offline probieren was die besten Einstellungen sind.  

### Material und Farben

PETG ist das Material das die meisten Vorteile für unser Projekt bietet:

+ hohe Schlagfestigkeit und dennoch flexibel - wichtig für den Einsatz am Fahrrad
+ Hydrophob, geringe Wasseraufnahme - wichtig für Außeneinsatz
+ niedrige Viskosität
+ geruchsneutrales Drucken - erleichtert das Drucken auch zuHause in den 4 Wänden.
+ gute Witterungsbeständigkeit - Wichtig für Montage am Fahrrad
- nachteilig ist allerdings die UV Beständigkeit die nicht so hoch ist wie bei ABS oder ASA doch die Vorteile überwiegen diese Einschränkuzng

PETG ermöglicht auch den Kauf vieler verschieden farbiger und auch transparenter Filamente 
{{< imgproc "OBS_main_case_and_lid_with_logos.jpg" Resize 600x >}} 
Beispiel eines gedruckten Gehäuses mit Logos {{< /imgproc >}}

## Druckvorbereitung und Druckdateien auswahl
Alle Dateien für das Openbikesensor projekt wie SW, FW, Docs und auch die 3D Druckdateien liegen auf Github. Unter "OpenBikeSensor3dPrintableCase/MainCase/VerticalCase_JSN-AJ" sind viele verschiedene Druckdateien für unsere Gehäuse vorhanden
Die Gehäuselemente werden unterschieden in 
+ Sensor Gehäuse - main case
+ Fahrradhalterung für Sensor Gehäuse - Mounting
+ Anzeige mit Lenkerhalterung - Display

Auf Github findet man für jedes Teil eine Druckdatei in 3 verschiedene Formaten stp, itp und stl.

  *(.STEP oder .stp: ist das STEP format ein standard zum Austausch von Produkt model data. Diese Dateien stellen 3D-Objekte in CAD-Software dar und können zugehörige Informationen enthalten.)*  
  *(.ipt beschreibt ein einzelnes Konstruktionselement im Autodesk Inventor)*  
  *(.stl file format verwendet grobe Dreiecke, um die Oberflächenform und -fläche einer 3D-CAD-Konstruktion zu beschreiben. Es beschreibt die Rohdaten ohne spezifische Einheiten)*

Für meine Zwecke habe ich ausschließlich die stl Dateien verwendet, dieses kann mit Cura verwendet werden 


### Schritte um Dateien von Github zu laden und für den 3D Drucker vorzubereiten?

1. Der Import eines .stl files in eine slicer SW (wie z.B. Cura) ist der erste Schritt um ein 3D objekt zu drucken
2. In der slicer SW wird der .stl file (oder mehrere files) möglichst so gelegt das es wenig Überhänge gibt
{{< slider >}}
{{< slider-image
    src="1. OBS-MainCase-A02_lid_adfc-logo_gedreht.jpg"
    alt="So soll es aussehen, aber die Drucklage ist anders " >}}
{{< slider-image
    src="2. OBS-MainCase-A02_lid_adfc-logo_Drucklage.jpg"
    alt="Drucken mit dem Gesicht nach unten" >}}
 {{< /slider >}}

3. Einstellungen beim Vorbereiten
{{< slider >}}
  {{< slider-image
    src="1. UM3_CuraUI_ case_prepare.jpg"
    alt="Cura view auf main case im Vorbereitungsmode" >}}
  {{< slider-image
    src="UM3_CuraUI_ case_extruder.jpg"
    alt="2. Einstellung auf PETG und 2 Extruder" >}}
 {{< slider-image
    src="UM3_CuraUI_ case_settings.jpg"
    alt="Settings für Druckdichte (Infill), Support, Düsendurchmesser" >}}
{{< slider-image
    src="UM3_CuraUI_ case_slice.jpg"
    alt="3. Einstellung auf PETG und 2 Extruder" >}}
 {{< /slider >}}

4. Slicen starten: Cura erstellt nun einen file im format .gcode, der alle Befehle für den speziellen Drucker enthält (z.B. Druckdichte, Material, etc.). 
{{< slider >}}
{{< slider-image
    src="UM3_CuraUI_ case_slice_information.jpg"
    alt="1. Nachdem alle Einstellungen erfolgt sind, wird das slicing gestartet " >}}
{{< slider-image
    src="UM3_CuraUI_ case_slice_preview.jpg"
    alt="2. Slicing information gibt es preview, mit den beiden Schiebern unten und rechts ist jede einzelne Bahn die gedruckt wird sichtbar" >}}
 {{< /slider >}}

5. Übertrag auf den 3D Drucker: Nachdem mein verwendeter Drucker in einem anderen Gebäude steht habe ich den .gcode file einfach auf einen USB stick gespeichet und diesen an den Drucker gesteckt. 
6. Im Ultimaker 3 Menu wird dann der File für den Druck ausgewählt und der Druck gestartet.

### Sensor gehäuse - Main case
Die Sensoren und Elektronik wird im Sensorgehäuse eingebaut. Empfohlen wird hier das Gehäuse mit dem OBS logo zu drucken, einmal aus Respekt zur OBS Community aber auch um damit zu werden. 5 Teile sind zum Drucken
1. Für das Gehäuse mit dem OBS Logo habe ich folgende 2 files verwendet:
[OBS-MainCase-B-001a_MainCase_with_0.4mm_OBS-logo.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-B-001a_MainCase_with_0.4mm_OBS-logo.stl) und 
[OBS-MainCase-B-001b_inner_logo_part.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-B-001b_inner_logo_part.stl)
2. Das zweite Teil ist der Gehäusedeckel (lid), diesen gibt es ohne text, oder mit dem OBS logo, oder mit ADFC logo wie ich ihn gedruckt habe. Dazu braucht man 2 files:
liegen auf ADFC page
3. GPS deckel: Zusätzlich zum Sensorgehäuse braucht man: 
[OBS-MainCase-A-004_GPS-Cover_v0.1.2.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-A-004_GPS-Cover_v0.1.2.stl)

4. USB Cover:
[OBS-MainCase-A-003_USB-Cover_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-A-003_USB-Cover_v0.1.1.stl)
5. Anschluß für die Fahrradhalterungen
[OBS-Mounting-A-001_StandardOBSMount_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-A-001_StandardOBSMount_v0.1.1.stl)

### Fahrradhalterungen - Mounts
Es gibt verschieden Möglichkeiten den OBS Sensor am Fahrrad zu montieren,  
1. Standard Sattelhalterung
[OBS-Mounting-A-002_StandardSeatPostMount_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-A-002_StandardSeatPostMount_v0.1.1.stl)
2. verlängerte Sattelhalterung: steht weiter heraus, ist aufgrund der Hebelwirkung mechanisch mehr belastet 
[OBS-Mounting-C-002_ExtendedSeatPostMount.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-C-002_ExtendedSeatPostMount.stl)

3. Querstangen halterung: wenn die Sattelhalterungen nicht möglich sind kann die Montage weiter vorne erfolgen
[OBS-Mounting-B-002_TopTubeMount.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-Mounting-B-002_TopTubeMount.stl)

### Anzeige und Auslöseknopf am Lenker - Display
 1. Anzeigegehäuse Unterteil
[OBS-Display-A-002_HeatSetInsert_Display_Bottom_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-002_HeatSetInsert_Display_Bottom_v0.1.0.stl)

 2. Anzeigegehäuse Oberteil 
[OBS-Display-A-001_HeatSetInsert_Display_Top_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-001_HeatSetInsert_Display_Top_v0.1.0.stl)

 3. Display montage - 3 Alternativen:

     3.1 einfache Kabelbinder schiene
[OBS-Display-A-005_Kabelbinder_Schiene_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-005_Kabelbinder_Schiene_v0.1.1.stl)

     3.2 Kabelbinder schiene gedreht (2Teile)
[OBS-Display-C-005_Kabelbinder_Schiene_gedreht_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-C-005_Kabelbinder_Schiene_gedreht_v0.1.0.stl)
[OBS-Display-C-006_Kabelbinder_Halter_gedreht_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-C-006_Kabelbinder_Halter_gedreht_v0.1.0.stl)

     3.3. Schraubklammer 3 Teile
[OBS-Display-B-005_Schiene_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-005_Schiene_v0.1.0.stl)
[OBS-Display-B-006_Oberschale_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-006_Oberschale_v0.1.0.stl)
[OBS-Display-B-007_Unterschale_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-007_Unterschale_v0.1.0.stl)

### Materialverbrauch und Zeitbedarf


## Druckeigenheiten
### Lage der Druckteile
Beim Druck der Gehäuseteile ist die Lage des Teiles wichtig, denn amn möchte vermeiden das es Überhänge gibt





## Zusammenbau des Gehäuses


