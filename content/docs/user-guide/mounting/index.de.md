---
linkTitle: Montage
title: Montage des Sensors am Fahrrad
weight: 15
aliases:
- /montage
---

{{% alert title="Hinweis" color="info" %}}
  Diese Montageanleitung beschreibt die Montage des OpenBikeSensors der [Standard-Variante]({{< relref "docs/hardware/general/models" >}}).
{{% /alert %}}

## Überblick

Diese Montageanleitung beschreibt die Möglichkeiten, wie ein OpenBikeSensor am
Fahrrad befestigt werden kann. Zur Auswahl stehen einige verschiedene Modelle,
um an möglichst vielen Fahrrädern eine einfache und sichere Montage zu
ermöglichen.

* **Sattelstützen-Halterung** (*Seat post mount*), für die Montage unter dem
  Sattel, an der Sattelstütze.
* **Oberrohr-Halterung** (*Top tube mount*) sitzt auf dem Oberrohr des Rahmens.
* **Gepäckträger-Halterung** (*Bike rack mount*) ist am Gepäckträger befestigt.

Für die Befestigung des Displays am Lenker wird die **Displayhalterung**
verwendet, die universell ist.

Die meisten Halterungen werden mit Kabelbindern befestigt. Sie bleiben
dauerhaft am Rad, das Gerät lässt sich davon jedoch abnehmen, um nicht im Regen
zu stehen oder gestohlen zu werden.

## Kompatibilität

* Bei der Sattelstützenhalterung zeigt die Schiene zum Aufschieben des
  Hauptgehäuses nach hinten. Hierfür passt ein OpenBikeSensor Hauptgehäuse der
  Variante "Back Rider" (das ist das Standardmodell) am besten, mit dem "Top
  Rider" an dieser Halterung stünde das Gehäuse senkrecht und so wäre das Logo
  verdreht.
* Die Halterungen für Oberrohr und Gepäckträger haben die Schiene oben, hierfür
  ist ein "Top rider" Hauptgehäuse nötig, oder ein Adapter der einen "Back
  rider" zu einem "Top rider" macht. Alternativ fährt der OpenBikeSensor
  senkrecht, was für die Messergebnisse keinen Unterschied macht, aber nicht so
  ästhetisch ist und zu einem um 90° gedrehten Logo führt.
* Die [Varianten "Back rider" und "Top Rider"]({{<relref
  "docs/hardware/general/case/variants/">}}) werden in der Gehäusedokumentation erläutert.
* Alle Halterungen haben die gleiche Schiene, die mit dem
  `StandardMountAdapter` kompatibel ist. Dieser wird an der passenden Stelle am
  Hauptgehäuse fest angeschraubt.
* Für das Displaygehäuse gibt es nur eine Halterung.

## Halterungen für das Hauptgehäuse

### Sattelstützen-Halterung

Diese Halterung wird mittels zweier Kabelbindern (max 8mm breit) an der
Sattelstütze befestigt. Zur Verdrehsicherung kann ein Stück Isolierband oder
Fahrradschlauch zwischen Sattelstütze und Halterung befestigt werden.

{{< imgproc OBS_Mounting_VerticalCase_MainCase_Mount Resize "600x" >}}
  Sattelstützenhalterung mit Kabelbindern an der Sattelstütze
{{< /imgproc >}}

### Gepäckträger-Halterung

Die Gepäckträger-Halterung besteht aus mehreren Teilen:

* 2 Seitenteile
* 1 Mittelteil, das es in längs- und Quervariante gibt
* 2 Stück Rundholz oder Aluminium-Rohr mit Durchmesser 10&nbsp;mm, je nach
  Größe des Gepäckträgers ca. 12-16&nbsp;cm lang.

Die Rundstäbe verbinden die drei 3D-gedruckten Teile und lassen sich auf die
benötigte Breite des Gepäckträgers anpassen. Seiten- und Mittelteile können
mithilfe von Einschmelzmuttern und M3x8 Schrauben auf die Stäbe geklemmt oder
für dauerhafte Montage mit den Stäben verklebt werden.

Die Seitenteile werden mit Kabelbindern befestigt. Es gibt viele Möglichkeiten,
diese Konstruktion am Fahrrad anzubringen:

{{< slider class="small" >}}
  {{< slider-image
    src="OBS_Mounting_BikeRack_Option1"
    alt="Option 1, unterhalb der Gepäckauflagefläche, hängend" >}}
  {{< slider-image
    src="OBS_Mounting_BikeRack_Option2"
    alt="Option 2, vorn auf dem Gepäckträger, vor dem Bügel" >}}
  {{< slider-image
    src="OBS_Mounting_BikeRack_Option3"
    alt="Option 3, unterhalb der Gepäckauflagefläche, auf den zweiten Längsrohren aufliegend" >}}
  {{< slider-image
    src="OBS_Mounting_BikeRack_Option4"
    alt="Option 4, unterhalb des Rücklichts" >}}
{{< /slider >}}

Die gewählte Option hängt stark vom Gepäckträger, dem Fahrrad, und der
gewünschten Nutzung ab. Nicht jede Montageart erlaubt die volle Nutzung des
Gepäckträgers und schränkt z. B. die Nutzbarkeit der Gepäckauflagefläche oder
die Anbringung von Satteltaschen ein. Ob die Nutzbarkeit eingeschränkt wird
hängt je nach Montageoption außerdem davon ab, ob ein Sensor angebracht ist
oder nicht. Insgesamt ist die Wahl der Montageart also sehr individuell.

Ein alternatives Mittelteil ermöglicht auch eine Montage in Längsrichtung
(nicht gezeigt), bei der die "Seitenteile" auf zwei parallelen, quer zur
Fahrtrichtung verlaufenden Stangen aufliegen.

### Oberrohr-Halterung

Die Oberrohrhalterung ist eine modifizierte Sattelstützenhalterung, die einen
breiteren Radius zum Rohr hat und nicht angewinkelt ist. Bei horizontaler
Montage zeigt die Schiene nach oben, also ist ein *Top Rider* Hauptgehäuse
nötig.

Die Oberrohrhalterung sollte nur verwendet werden, wenn durch die Haltung
des/der Fahrer:in keine Beeinträchtigung der Messergebnisse vorliegt, z. B.
indem Arme oder Beine in den Bereich der Sensoren gelangen.

## Displayhalterung

Das Display wird am Lenker in der Nähe des linken oder rechten Handgriffes
befestigt. Die ehemals verfügbaren Halterungen zum Anschrauben haben sich nicht
bewährt, weil sie häufig gebrochen sind. Stattdessen wird nur noch eine
Displayhalterung angeboten, diese wird mit zwei Kabelbindern oder alternativ mit
einer Schlauchschelle befestigt. Auch hier hilft ein Stück Klebeband oder alter
Fahrradschlauch gegen Verdrehen oder Verrutschen.

{{< imgproc OBS_Mounting_SlideOnDisplay_MountOptions Resize "600x" >}}
  Eine Halterung sollte reichen! Die mittlere, weiße Halterung zeigt das
  aktuelle Modell mit Kabelbinder.
{{< /imgproc >}}

Optimal ist es, wenn der Druckknopf in direkter Reichweite des Daumens liegt,
um beim Drücken die Hand nicht vom Lenker nehmen zu müssen
(Verkehrssicherheit).

## Befestigung des Geräts

Zunächst muss der Sicherungsstift vorbereitet werden. Dafür wird in das
3D-gedruckte Bauteil ein Schraube (M3x16 bis M3x20) eingeschraubt. Diese sollte
fest darin sitzen, wenn sie nicht gut greift hilft ein wenig Sekundenkleber.

Dann wird das Gerät seitlich auf die Halterungsschiene geschoben und mit den
Sicherungsstift gesichert. Der Stift wird dafür um 180° im Loch gedreht.

{{< imgproc OBS_Mounting_VerticalCase_MainCase_Sliding_into_mount Resize "600x" >}}
  Gerät von der Seite einschieben
{{< /imgproc >}}

{{< imgproc OBS_Mounting_VerticalCase_Push_and_turn_safety_pin Resize "600x" >}}
  Sicherungsstift einstecken und drehen
{{< /imgproc >}}

Es gibt Geräte mit sehr unterschiedlichen Kabellängen. Für große Tiefeinsteiger
werden bis zu 1,8m Kabel benötigt. Das Kabel muss auf jeden Fall so verlegt
werden, dass es während der Fahrt die Sicherheit nicht beeinträchtigt. Es kann
durch Umwickeln, wiederverwendbare Kabelbinder, Klebeband oder geeignete
Kabelclips gesichert werden.

{{< imgproc OBS_Mounting_VerticalCase_Wrap_cable_around_bike Resize "600x" >}}
  Kabel um Rahmen gewickelt
{{< /imgproc >}}


Das Display wird von links auf die Halterung geschoben und hält sich selbst mit
den darin enthaltenen Magneten fest.

{{< imgproc OBS_Mounting_SlideOnDisplay_Slide_on Resize "600x" >}}
  Display auf die Halterung schieben
{{< /imgproc >}}
