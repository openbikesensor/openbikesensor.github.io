---
title: Gehäusebauteile
linkTitle: Bauteile
weight: 30
---

Hier möchten wir eine Übersicht über alle verfügbaren Gehäusebauteile geben.
Die Links führen jeweils zur Quelldatei (OpenSCAD) und zum STL-Export für den
3D-Druck. Alle Dateien lassen sich auch auf einmal herunterladen, direkt von
Github in der neuesten Version als ZIP-Archiv. Darin finden sich im Ordner
`export` alle Dateien für den 3D-Druck:

<div class="text-center my-4">
<a class="btn btn-primary btn-lg" href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/archive/refs/heads/main.zip">Alles herunterladen<a>
</div>

{{% alert title="Achtung: Kompatibilität zwischen Versionen" color="warning" %}}
Wir halten die Teile zu Halterungen älterer Versionen kompatibel. Aber Teile für ein Geräteelement (z.B. Gehäuse und Deckel, Display und Deckel, die verschiedenen 
Elemente der Sattelhalterung) können sich zwischen Versionen verändern. Wenn du ein einzelnes Gehäuseteil (z.B. Deckel mit Logo) bekommst, prüfe genau im Slicer, ob
es zu deinen Gehäusedateien passt. Wenn du z.B. ein ``MainCaseLid`` mit Logo weitergeben möchtest, gib ihn am besten im Bundle mit ``MainCase`` weiter. 
{{% /alert %}}

Eine detaillierte Anleitung zum Gehäusedruck gibt es [hier]({{< relref "." >}}).

### Hauptgehäuse

{{< 3dpart-table >}}
{{< 3dpart name="MainCase/MainCase">}}Das Hauptgehäuse, in dem die Elektronik untergebracht ist.{{< /3dpart >}}
{{< 3dpart name="MainCase/MainCaseLid">}}Der Deckel für das Hauptgehäuse, mit Batteriehalterung.{{< /3dpart >}}
{{< 3dpart name="MainCase/UsbCover">}}Ein kleiner Deckel für die Öffnung des USB-C Ladesteckers im Hauptgehäuse.{{< /3dpart >}}
{{< 3dpart name="MainCase/GpsAntennaLid">}}Ein kleiner Deckel für die GPS-Antenne im Hauptgehäuse.{{< /3dpart >}}
{{< /3dpart-table >}}

### Displaygehäuse

{{< 3dpart-table >}}
{{< 3dpart name="DisplayCase/DisplayCableStrainRelief">}}Zugsicherung für das Displaykabel im Displaygehäuse (2x drucken).{{< /3dpart >}}
{{< 3dpart name="DisplayCase/DisplayCaseBottom">}}Die untere Hälfte des Displaygehäuses.{{< /3dpart >}}
{{< 3dpart name="DisplayCase/DisplayCaseTop">}}Die obere Hälfte des Displaygehäuses.{{< /3dpart >}}
{{< /3dpart-table >}}

### Halterungen

Die verschiedenen Halterungen und ihre Montage werden in der [Montageanleitung]({{< relref "mounting" >}}) beschrieben.

{{< 3dpart-table >}}
{{< 3dpart name="Mounting/AttachmentCover">}}Eine Abdeckung für ungenutzte Montagepunkte am Hauptgehäuse (z. B. für kombinierte Back Rider und Top Rider Gehäuse).{{< /3dpart >}}
{{< 3dpart name="Mounting/BikeRackMountCenter">}}Das Mittelstück für die Gepäckträgerhalterung in Quermontage.{{< /3dpart >}}
{{< 3dpart name="Mounting/BikeRackMountCenterLongitudinal">}}Das Mittelstück für die Gepäckträgerhalterung in Längsmontage (ungewöhnlich).{{< /3dpart >}}
{{< 3dpart name="Mounting/BikeRackMountSide">}}Ein Seitenstück der Gepäckträgerhalterung (2x drucken).{{< /3dpart >}}
{{< 3dpart name="Mounting/HandlebarRail">}}Die Schiene für die Befestigung des Displays am Lenker.{{< /3dpart >}}
{{< 3dpart name="Mounting/LockingPin">}}Der Befestigungsstift für das Hauptgehäuse.{{< /3dpart >}}
{{< 3dpart name="Mounting/SeatPostMount">}}Die Sattelstützenhalterung.{{< /3dpart >}}
{{< 3dpart name="Mounting/StandardMountAdapter">}}Wird am Hauptgehäuse montiert und ermöglicht das Aufschieben auf die Schienen der Halterungen. Wirkt ebenfalls als Zugsicherung für das Displaykabel am Hauptgehäuse.{{< /3dpart >}}
{{< 3dpart name="Mounting/TopTubeMount">}}Die Halterung für das Oberrohr.{{< /3dpart >}}
{{< /3dpart-table >}}
