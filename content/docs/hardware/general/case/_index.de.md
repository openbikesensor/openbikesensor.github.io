---
title: Gehäusedruck
weight: 30
---

{{< imgproc case Resize 600x >}}
OpenBikeSensor-Bausatz der Version 00.03.10, mit einem "Vertical Case"
{{< /imgproc >}}

TODO:

## Vorwort?
Diese Anleitung entstand weil ich versucht hatte selbst ein komplettes OBS Gehäuse zu drucken aber keine Erfahrung weder mit dem 3D-Druck noch mit File respositories auf Git hatte. Viele Leute haben mit geholfen und dieses Wissen möchte ich weitergeben in einer hoffentlich verständlichen und einfachen Form. 
Da ich Gehäuse für den ADFC (Ulm, Neu-Ulm) benötige, sind die Beispiele oft mit ADFC Logo, Farben etc. gezeigt. Das ist nur eine Option, design und Farben sind belieging austauschbar, das Gehäuse ist generisch und der Druckvorgang immer der gleiche. 

## Wie komme ich an ein Gehäuse?
Idealerweise könnte man ein Gehäuse einfach kaufen. Doch es gibt keine Serienfertigung weder einen offiziellen Dienstleister der den Gehäusedruck ünernimmt.
unter Umständen findet man in der Community hifreiche Basteler die einem ein Gehäuse mit herstellen.
In dieser Anleitung geht es darum ein Gehäuse selbst zu drucken und herzustellen.
Der Druck eines kompletten OBS Gehäusesatzes oder auch nur Teile ist problemlos möglich, vorrausgesetzt man hat einen 3D Drucker zur Verfügung. Der 3D-Druck kostet ca 5€ Material (Filamentkosten können variieren), Verschleiß, Stromkosten und Zeit. Dazu aber ca. 10-20h Druckzeit.

## Material, Farben, Druckeinstellungen 
### Material - PETG
Für den Druck verwende ich PETG da dieses Material die meisten Vorteile für unser Projet bietet:
+ hohe Schlagfestigkeit und dennoch flexibel - wichtig für den Einsatz am Fahrrad
+ Hydrophob, geringe Wasseraufnahme - wichtig für Außeneinsatz
+ niedrige Viskosität
+ geruchsneutrales Drucken - erleichtert das Drucken auch zuHause in den 4 Wänden.
+ gute Witterungsbeständigkeit - Wichtig für Montage am Fahrrad
- allerdings ist die UV Beständigkeit nicht so hoch wie bei ABS oder ASA doch die Vorteile überwiegen diese Einschränkuzng

### Farben
PETG ermöglicht eine Fülle von Farben auch transparente Filamente kann man kaufen, was 
{{< imgproc 20210608_100901 OBS Gehäuse crop Resize 600x >}} 
Beispiel eines gedruckten Gehäuses {{< /imgproc >}}

## Welche Dateien wähle ich um mein Gehäuse zu drucken?
Alle Dateien für den Openbikesensor wie SW, FW, Docs und auch die 3D Druckdateien liegen auf Github unter "OpenBikeSensor3dPrintableCase/MainCase/VerticalCase_JSN-AJ".
Die Gehäuselemente werden unterschieden in 
+ Sensor Gehäuse - main case
+ Fahrradhalterung für Sensor Gehäuse - Mounting
+ Anzeige mit Lenkerhalterung - Display
### Sensor gehäuse - Main case
Die Sensoren und Elektronik wird im Sensorgehäuse eingebaut. Empfohlen wird hier das Gehäuse mit dem OBS logo zu drucken, einmal aus Respekt zur OBS Community aber auch um damit zu werden. 5 Teile sind zum Drucken
1. Für das Gehäuse mit dem OBS Logo habe ich folgende 2 files verwendet:
[OBS-MainCase-B-001a_MainCase_with_0.4mm_OBS-logo.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/MainCase/VerticalCase_JSN-AJ/OBS-MainCase-B-001a_MainCase_with_0.4mm_OBS-logo.stl)
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

 3. Display montage 3 Alternativen
3.1 einfache Kabelbinder schiene
[OBS-Display-A-005_Kabelbinder_Schiene_v0.1.1.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-A-005_Kabelbinder_Schiene_v0.1.1.stl)

3.2 Kabelbinder schiene gedreht (2Teile)
[OBS-Display-C-005_Kabelbinder_Schiene_gedreht_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-C-005_Kabelbinder_Schiene_gedreht_v0.1.0.stl)
[OBS-Display-C-006_Kabelbinder_Halter_gedreht_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-C-006_Kabelbinder_Halter_gedreht_v0.1.0.stl)

3.3. Schraubklammer 3 Teile
[OBS-Display-B-005_Schiene_v0.1.0.stl](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-005_Schiene_v0.1.0.stl)
[OBS-Display-B-006_Oberschale_v0.1.0.stp](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-006_Oberschale_v0.1.0.stp)
[OBS-Display-B-007_Unterschale_v0.1.0.stp](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/master/DisplayCase/SlideOnDisplay/OBS-Display-B-007_Unterschale_v0.1.0.stp)

### Materialverbrauch und Zeitbedarf

## Druckeigenheiten
### Lage der Druckteile

## Zusammenbau


