---
title: Gehäusedruck
weight: 10
---

In dieser Anleitung geht es darum, ein komplettes Gehäuse mit Halterungen
selbst zu drucken und herzustellen. Der Druck eines kompletten
OpenBikeSensor-Gehäusesatzes, oder auch nur von Teilen davon, ist problemlos
möglich, vorausgesetzt du hast einen 3D-Drucker zur Verfügung.

Der 3D-Druck kostet ca. 5 € Material (Filamentkosten können variieren),
Verschleiß, Stromkosten und vor allem Zeit, ca. 10-20h Druckzeit muss man schon
einplanen.

{{% alert title="Hinweis zu alten Gehäuseversionen" color="info" %}}
Bis Anfang 2022 gab es viele verschiedene Versionen des Gehäuses, einige mit
leichten Unterschieden, andere erheblich anders aufgebaut. Allerdings wurden
diese mit proprietären 3D-CAD Programmen erstellt, und waren somit nicht zugänglich
für die Allgemeinheit. Lediglich der Druck aus den STL-Dateien war für die
meisten möglich, eigene Anpassungen oder eine schrittweise kollaborative
Verbesserung waren aber ausgeschlossen.

Das hat sich mit der Portierung nach OpenSCAD geändert. Nachfolgend verwenden
wir in den Anleitungen nur diese neuen Modelle. Sie bieten aufgrund
der möglichen Parametrierung wesentlich mehr Optionen, wie leicht
angepasste Dimensionen für andere Hardware (z. B. ein neues Displaymodul), als auch
verschiedene Optionen für die Befestigung am Rad.

Eine Anleitung zum Generieren eigener Gehäusevarianten mit OpenSCAD wird [hier]({{< relref "variants" >}})
bald folgen.
{{% /alert %}}

## Drucker und Slicer

{{< imgproc "ultimaker" Resize 600x >}}
  Der Ultimaker 3 hat ein Displaygehäuse mit Zugentlastung fertig gedruckt.
{{< /imgproc >}}

Für den Beispieldruck in dieser Anleitung verwenden wir einen Ultimaker 3.
Dieser hat zwei Extruder, sodass mit zwei Filamenten gleichzeitig gedruckt
werden kann. Das vereinfacht den Druck des Sensorgehäuses und des Deckels, da
für die Logos eine zusätzliche Farbe verwendet werden kann. Bei einem Drucker
mit nur einem Extruder muss während des Drucks das Filament gewechselt werden.
Hierfür gibt es verschiedene Strategien, die je nach Drucker, Firmware und
Slicer variieren. Alternativ können alle Teile auch einfach ohne Logo mit nur
einem Filament gedruckt werden.

Wichtig ist die Slicer-Software, die den Druck für den jeweiligen Drucker
aufbereitet. Für den Ultimaker (und viele andere Drucker) kann Cura von der
[offiziellen Website](https://ultimaker.com/software/ultimaker-cura)
heruntergeladen und kostenlos verwendet werden (für Linux, Windows und macOS).
Eine starke Alternative ist der [Prusa
Slicer](https://www.prusa3d.com/prusaslicer/). Die Wahl des Slicers hängt von
persönlicher Präferenz und den unterstützten Druckern ab, sowie in
Spezialfällen den unterstützten Features. Beide Slicer eignen sich für den
Druck von OpenBikeSensor-Gehäuseteilen.

## Material und Farben

Das empfohlene Material für den Druck der Gehäuseteile ist PETG, das Material
mit den meisten Vorteilen für unser Projekt:

* hohe Schlagfestigkeit und dennoch flexibel -- wichtig für den Einsatz am Fahrrad
* hydrophob, wasserabweisend, witterungsbeständig -- wichtig für Außeneinsatz
* geruchsneutrales Drucken -- erleichtert das Drucken auch zu Hause
* niedrige Viskosität (Zähigkeit)
* verfügbar in vielen verschiedenen Farben, sogar transparent

Nachteilig ist allerdings die UV Beständigkeit, die nicht so hoch ist wie bei
ABS oder ASA. Doch die Vorteile überwiegen diese Einschränkung.

{{< imgproc "logo_preview" Resize 800x >}}
    Beispiel eines gedruckten Gehäuses mit Logos
{{< /imgproc >}}

## Druckvorbereitung

Alle Dateien für das OpenBikeSensor Projekt wie Software, Firmware, Dokumentation und auch die 3D-Druckdateien liegen auf GitHub.
Das Repository für die Gehäusedaten ist: [openbikesensor/OpenBikeSensor3dPrintableCase](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase)

Die Gehäuseelemente werden unterschieden in die Bestandteile

+ Hauptgehäuse (`MainCase`)
+ Displaygehäuse (`DisplayCase`)
+ Halterungen (`Mounting`)

Ein ZIP-Archiv mit allen aktuellen Dateien, sowohl dem Quelltext als auch den
exportierten STL-Dateien für den 3D-Druck können von GitHub direkt
heruntergeladen werden:

<div class="text-center my-4">
<a class="btn btn-primary btn-lg" href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/archive/refs/heads/main.zip">Gehäusedateien herunterladen</a>
</div>

Im Archiv befindet sich ein Ordner `export/` mit den obigen Kategorien, und
darin sind jeweils die STL-Dateien für den Slicer zu finden.

{{% alert title="Achtung: Kompatibilität zwischen Versionen" color="warning" %}}
Wir halten die Teile zu Halterungen älterer Versionen kompatibel, aber Teile für ein Geräteelement (z.B. Hauptgehäuse und Deckel, Display und Deckel, die verschiedenen 
Elemente der Sattelhalterung) können sich zwischen Versionen verändern. Wenn du ein einzelnes Gehäuseteil (z.B. Deckel mit Logo) als `.stl` bekommst, prüfe genau im Slicer, ob
es zu deinen Gehäusedateien passt. Wenn du z.B. ein `MainCaseLid` mit Logo weitergeben möchtest, gib es am besten im Bundle mit `MainCase` weiter. 
{{% /alert %}}


### Allgemeines Vorgehen

Der Import einer STL-Datei in eine Slicer Software (wie z.B. Cura) ist der
erste Schritt um ein 3D Objekt zu drucken. Im Slicer wird das 3D-Objekt so auf
die Druckplatte gelegt, sodass es möglichst wenig Überhänge gibt:

{{< slider >}}
  {{< slider-image
      src="adfc_logo_gedreht"
      alt="1. So sollte es aussehen, kann aber in dieser Lage so nicht gedruckt werden" >}}
  {{< slider-image
      src="adfc_logo_drucklage"
      alt="2. Drucken mit dem Gesicht nach unten" >}}
{{< /slider >}}

Die STL-Dateien werden in der Regel so generiert, dass sie nach dem Importieren
bereits in der empfohlenen Lage auf dem Druckbett liegen. Auf Support kannst du
dann in der Regel verzichten, denn bei der Modellierung wird bereits die
supportfreie Druckbarkeit beachtet. Du kannst dich natürlich auch anders
entscheiden und die Objekte drehen, sollte dein Drucker oder Slicer sonst keine
guten Ergebnisse liefern.

Als Nächstes werden der richtige Drucker, das Filament und die
Druckeinstellungen (Infull, Support, Geschwindigkeit, Schichtdicke, ...)
gewählt. Hier gilt, dass du dich am besten an den Vorgaben der Hersteller (von
Drucker und Filament) orientierst, aber auch immer ein bisschen experimentierst
und die für dich und deinen Anwendungsfall richtigen Einstellungen findest.
Informationsmaterial, Anleitungen und Tutorials gibt es massenweise im Netz.

{{< slider >}}
  {{< slider-image
    src="cura_case_prepare"
    alt="1. Cura view auf main case im Vorbereitungsmode" >}}
  {{< slider-image
    src="cura_case_extruder"
    alt="2. Einstellung auf PETG und 2 Extruder" >}}
 {{< slider-image
    src="cura_case_settings"
    alt="3. Settings für Druckdichte (Infill), Support, Düsendurchmesser" >}}
{{< slider-image
    src="cura_case_slice"
    alt="4. starte Slicing" >}}
 {{< /slider >}}

Beim eigentlichen "Slicen" erstellt Cura nun eine GCODE-Datei, die alle Befehle
für den speziellen Drucker und das Material enthält (z.B. Bewegungen,
Temperaturen, etc.).

{{< slider >}}
{{< slider-image
    src="cura_case_slice_information"
    alt="1. Nachdem alle Einstellungen erfolgt sind, wird das Slicing gestartet" >}}
{{< slider-image
    src="cura_case_slice_preview"
    alt="2. Slicing information gibt es im Preview, mit den beiden Schiebern unten und rechts kann man jede einzelne Bahn des Extruders verfolgen" >}}
 {{< /slider >}}

Die GCODE-Datei wird nun auf den 3D-Drucker übertragen. Je nach Druckermodell
geschieht dies über WLAN, mithilfe einer SD-Karte oder eines USB-Sticks, oder
der Drucker ist direkt (per USB) am PC angeschlossen. Das genaue Verfahren ist
im Handbuch des Druckers beschrieben.

Im Menü des Druckers wird die erstellte GCODE-Datei für den Druck ausgewählt
und der Druck gestartet. Ab hier übernimmt der Roboter die Arbeit für uns und
wenn wir alles richtig eingestellt haben, ist in einigen Minuten bis Stunden
ein neues Gehäuseteil fertig.

### Hauptgehäuse

Das Hauptgehäuse enthält den Großteil der Elektronik (PCB, Sensorboards,
SD-Karte, GPS, Hauptschalter, Ladeelektronik) sowie die zwei Abstandssensoren,
die GPS-Antenne und die Batterie.

Sowohl das Hauptgehäuse als auch der Deckel können mit einem Logo gedruckt werden.
Dies ist ein wenig mehr Aufwand, lohnt sich aber optisch sehr, und es hilft
erfahrungsgemäß auch dabei, auf der Straße auf das Gerät angesprochen zu werden
und dem Projekt mehr Aufmerksamkeit zu generieren.
Details zum Druck des Logos findest du hier: [Logo-Druck (mehrfarbig)]({{< relref "color-prints" >}}).

{{% alert title="Logo-Varianten" color="info" %}}
Wir freuen uns, wenn möglichst viele ihren OpenBikeSensor mit dem Projektlogo
versehen. Ebenso kann ein eigenes Logo verwendet werden, zum Beispiel für
Lokalgruppen oder -projekte. Dafür gibt es im Gehäuse repository eine technische
Dokumentation zum Generieren einer eigenen Logo-Variante. Wir empfehlen, den
Deckel mit eigenem Logo zu drucken, und das OpenBikeSensor-Logo auf dem
Hauptgehäuse beizubehalten. So sind alle Geräte einheitlich, und doch
individuell.
{{% /alert %}}

Die Teile zum Drucken:

* [`MainCase/MainCase.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/MainCase/MainCase.stl)
* [`MainCase/MainCaseLid.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/MainCase/MainCaseLid.stl)
* [`MainCase/UsbCover.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/MainCase/UsbCover.stl)
* [`MainCase/GpsAntennaLid.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/MainCase/GpsAntennaLid.stl)
* [`Mounting/StandardMountAdapter.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/Mounting/StandardMountAdapter.stl)
* [`Mounting/AttachmentCover.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/Mounting/AttachmentCover.stl)

Die ersten zwei Teile gibt es jeweils auch mit OpenBikeSensor-Logo. Für jedes
Bauteil sind hierfür vier Dateien verfügbar. Das Logo kann *invertiert* oder
*normal* gedruckt werden, und für den Zweifarben-Druck sind pro Bauteil zwei
Dateien nötig (*main* und *highlight*), die die in der jeweiligen Farbe zu
druckenden Bestandteile repräsentieren. Hier sind demnach [alle acht Dateien für das
OBS-Logo](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/main/export/logo/OpenBikeSensor).

Das Bauteil `StandardMountAdapter` gehört zwar eigentlich zu den Halterungen,
wird aber fest am Hauptgehäuse angebracht und bildet eine Hälfte des
Befestigungsmechanismus. Es gehört also auch irgendwie zum Hauptgehäuse.

Das Bauteil `AttachmentCover` verschließt die Öffnung des Standardgehäuses,
an der nicht die Halteklammer montiert wird. Dieses Teil wird nicht benötigt,
wenn das Gehäuse ohne zweite Öffnung verwendet wird.

{{< imgproc "cura_maincase_parts" Resize 800x >}}
Die Bauteile des Hauptgehäuses auf dem Druckbett
{{< /imgproc >}}


### Fahrradhalterung

{{< imgproc "mounts" Resize 800x >}}
    Zwei Halterungen, das <code>SeatPostMount</code> und eine alte Variante des <code>TopTubeMount</code>.
{{< /imgproc >}}

Es gibt verschiedene Möglichkeiten, den OBS Sensor am Fahrrad zu montieren.
Wie die Halterungen angebracht werden und aussehen, ist in der [Montageanleitung]({{< relref "mounting" >}}) zu sehen.

1. Standard: Sattelhalterung, an der Sattelstange hinter
   dem/der Fahrer:in montiert.
    - [`Mounting/SeatPostMount.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/Mounting/SeatPostMount.stl)
2. Oberrohr-Halterung: Wenn die Sattelhalterungen nicht
   verwendbar sind, kann die Montage weiter vorne an der Querstange erfolgen.
    - [`Mounting/TopTubeMount.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/Mounting/TopTubeMount.stl)
3. Gepäckträgerhalterung: Dreiteilig, wird mit etwas Rundstab oder
   Alu-Rundprofil verbunden. Kann auf, unter oder hinter dem Gepäckträger
   montiert werden.
    - [`Mounting/BikeRackMountSide`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/Mounting/BikeRackMountSide.stl) (2x drucken)
    - [`Mounting/BikeRackMountCenter.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/Mounting/BikeRackMountCenter.stl)
    - [`Mounting/BikeRackMountCenterLongitudinal.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/Mounting/BikeRackMountCenterLongitudinal.stl) (Alternative zu `BikeRackMountCenter` für die Längsmontage)

Außerdem nötig ist ein Sicherungsstift (`LockingPin`). Das Display wird mit der
dazugehörigen Schiene (`Mounting/HandlebarRail`) am Lenker befestigt.

{{< imgproc "cura_mounting_parts" Resize 800x >}}
    Lage dreier Halterungen und des Sicherungspin auf dem Druckbett (die
    verlängerte Variante kann parametrisch mit OpenSCAD erstellt werden).
    Der LockingPin sollte liegend gedruckt werden da er sonst brechen wird.
{{< /imgproc >}}


### Displaygehäuse (Anzeige und Knopf)

Im Displaygehäuse sind nur das Display und der Knopf verbaut. Die nötigen Bauteile sind:

* [`DisplayCase/DisplayCaseTop.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/DisplayCase/DisplayCaseTop.stl)
* [`DisplayCase/DisplayCaseBottom.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/DisplayCase/DisplayCaseBottom.stl)
* [`DisplayCase/DisplayCableStrainRelief.stl`](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/DisplayCase/DisplayCableStrainRelief.stl) (2x drucken)

In die Vertiefung der zwei Gehäusehälften werden zwei Magnete eingelegt, die
das Display während der Fahrt an der Schiene (`HandlebarRail`, siehe
"Fahrradhalterung" oben) halten.

{{< imgproc "display_labeled" Resize 400x >}}
    Fertiges Displaygehäuse (alte Version)
{{< /imgproc >}}


## Materialverbrauch und Zeitbedarf

Nach dem Slicen wird angezeigt, wie lange der Druckvorgang dauern wird und wie
viel Material für den Druck benötigt wird. Abhängig von den Einstellungen kann
die Druckdauer sehr unterschiedlich sein. Oft geht mit höherer
Druckgeschwindigkeit ein Qualitätsverlust einher, sodass beide
gegeneinander abgewogen werden müssen.

Üblich für den Druck eines ganzen Gehäuses ist daher je nach Drucker etwa 10
Stunden in Summe. Die Kosten des Filaments belaufen sich auf ca. 3 €, wer
Verschleiß und Stromkosten einrechnet, kommt auf etwa 5 € Gesamtkosten.

## Troubleshooting

### Lage der Druckteile und Überhänge

Beim Druck der Gehäuseteile ist die Lage des Teiles wichtig, denn Überhänge
sollten vermieden werden, sodass der Drucker nicht in der luft drucken muss.
Das Design der Modelle ist bereits darauf ausgelegt, möglichst gut druckbar zu
sein, die Positionierung auf dem Druckbett ist daher auch besonders wichtig.

Nach dem Laden der STL-Dateien in Cura werden in der Vorschau die Überhänge in
Rot angezeigt. Am Beispiel des Deckels (Bilder 1 und 2) ist es sehr
offensichtlich, dass die Lage eine wesentliche Rolle spielt, und zeigt, mit welcher Seite
das Teil auf die Druckerplatte gelegt werden soll.

Aber selbst bei einer optimalen Lage wie im Beispiel des Sensorgehäuses zeigt
Cura wo sich trotzdem noch Überhänge bilden. Manche Überhänge wie
Schraubenlöcher sind unkritisch, da der Drucker das selbst überbrücken kann
(*bridging*). Wenn der Übergang aber zu groß wird, können sich viele Fäden
ziehen. Um das zu vermeiden, kann die Supportfunktion eingeschalten werden, der
Drucker erstellt dann leichte Stützstrukturen, die nach dem Druck wieder
entfernt werden.

{{< slider >}}
{{< slider-image
    src="cura_lid_overhangs"
    alt="1. Schlechte Positionierung erzeugt Überhänge (rot)" >}}
{{< slider-image
    src="cura_lid_oriented"
    alt="2. Richtiges Positionieren ist wichtig" >}}
{{< slider-image
    src="cura_case_overhangs"
    alt="3. In der Vorschau werden bereits in Rot Überhänge angezeigt" >}}
{{< slider-image
    src="cura_case_enable_support"
    alt="4. Support einschalten" >}}
{{< slider-image
    src="cura_case_supports"
    alt="5. Die zusätzliche Supportstruktur ist nach dem Slicing in der Vorschau sichtbar" >}}
 {{< /slider >}}

### Fehlerhafte Drucke

Einige Fehler traten während der Drucke auf:

{{< imgproc "problem_support_missing" Resize 400x >}}
    Support fehlt, Düse vom 2. Extruder verstopft
{{< /imgproc >}}

{{< imgproc "problem_broken_slide" Resize 400x >}}
    Brüchige Verbindung, vermutlich Druckdichte (Infill) zu gering
{{< /imgproc >}}


## Weitere Anleitungen

* Detaillierte [Anleitung für den Zusammenbau]({{< relref
  "docs/classic/build-instructions" >}}) des gesamten
  OpenBikeSensors beschreibt den Einbau der elektronischen Komponenten in die
  beiden Gehäuse.
* Die [Montage des Sensors]({{< relref "mounting" >}}) am Fahrrad wird mit
  verschiedenen Halterungen und für das Displaygehäuse gezeigt.
