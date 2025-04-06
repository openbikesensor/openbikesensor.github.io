---
title: Gehäusebauteile OpenBikeSensor Lite
linkTitle: Gehäuse
weight: 30
notoc: true
---
{{% alert title="Betaversion" color="warning" %}}
Wir arbeiten noch am OpenBikeSensor Lite. Vor dir hat ihn kaum jemand gelötet, auch die Software ist noch sehr neu. Sicher funktioniert noch nicht alles. Manches kann umständlich sein. Toll, dass du es trotzdem probieren willst, wenn du Fehler findest, sag im Forum Bescheid!
{{% /alert %}}

Es gibt viele Möglichkeiten, ein Gehäuse für deinen OpenBikeSensor Lite zu bekommen.
Unter Umständen findest du in der Community hilfreiche Bastler:innen, die dir
ein Gehäuse herstellen -- Frage hierzu am besten [im Forum]({{< relref
"/community" >}}) nach. Für mehr Infos zum 3D-Druck kannst du auch [in der Anleitung zum OpenBikeSensor Classic
nachschauen]({{< relref
"/docs/classic/case" >}}).

Hier möchten wir eine Übersicht über alle verfügbaren Gehäusebauteile für den OpenBikeSensor Lite geben.
Die Links führen jeweils zur Quelldatei (OpenSCAD) und zum STL-Export für den
3D-Druck. Alle Dateien lassen sich auch auf einmal herunterladen, direkt von
GitHub in der neuesten Version als ZIP-Archiv. Darin finden sich im Ordner
`export` alle Dateien für den 3D-Druck:

<div class="text-center my-4">
<a class="btn btn-primary btn-lg" href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/releases/download/v0.3.63/OpenBikeSensor3DPrintableCase-stl-v0.3.63.zip">Alles herunterladen</a>
</div>

{{% alert title="Achtung: Kompatibilität zwischen Versionen" color="warning" %}}
Wir halten die Teile zu Halterungen älterer Versionen kompatibel, aber Teile für ein Geräteelement (z.B. Gehäuse und Deckel, Buttonhalter und Taster, die verschiedenen 
Elemente der Sattelhalterung) können sich zwischen Versionen verändern. Wenn du ein einzelnes Gehäuseteil (z.B. Deckel mit Logo) bekommst, prüfe genau im Slicer, ob
es zu deinen Gehäusedateien passt.
{{% /alert %}}

Eine detaillierte Anleitung zum Gehäusedruck gibt es
[hier für den OpenBikeSensor Classic]({{< relref "/docs/classic/case" >}}). Die Informationen zum Druck sind allgemein
genug, dass du sicher abstrahieren kannst, was du davon auch für den OpenBikeSensor Lite brauchen kannst.

### Hauptgehäuse

{{< 3dpart-table >}}
{{< 3dpart name="LiteCase/LiteCase">}}Das Hauptgehäuse, in dem die Elektronik untergebracht ist. Die Modelle sind bereits in Druckausrichtung im stl. Gegebenenfalls kannst du für den Deckel einen Streifen manuellen Support entlang der Mittellinie ziehen und einen brim aktivieren, normalerweise funktioniert es aber auch mit Brücken einwandfrei.{{< /3dpart >}}

{{< /3dpart-table >}}

### Taster

{{< 3dpart-table >}}
{{< 3dpart name="LiteCase/HandlebarButton">}}Halterung und Taste für den Lenker. Hier bitte im Slicer so herum drehen, dass die Tastenoberfläche auf dem Druckbett gedruckt wird. Es sind keine Supports erforderlich.{{< /3dpart >}}

{{< /3dpart-table >}}

### Halterungen

Die verschiedenen Halterungen und ihre Montage werden in der [Montageanleitung]({{< relref "mounting" >}}) beschrieben.
Sie können für alle Versionen des OpenBikeSensor (also Lite, Classic, Pro) verwendet werden.


{{< 3dpart-table >}}
{{< 3dpart name="Mounting/LockingPin">}}Der Befestigungsstift für das Hauptgehäuse.{{< /3dpart >}}
{{< 3dpart name="Mounting/SeatPostMount">}}Die Sattelstützenhalterung.{{< /3dpart >}}
{{< 3dpart name="Mounting/TopTubeMount">}}Die Halterung für das Oberrohr.{{< /3dpart >}}
{{< 3dpart name="Mounting/BikeRackMountCenter">}}Das Mittelstück für die Gepäckträgerhalterung in Quermontage.{{< /3dpart >}}
{{< 3dpart name="Mounting/BikeRackMountCenterLongitudinal">}}Das Mittelstück für die Gepäckträgerhalterung in Längsmontage (ungewöhnlich).{{< /3dpart >}}
{{< 3dpart name="Mounting/BikeRackMountSide">}}Ein Seitenstück der Gepäckträgerhalterung (2x drucken).{{< /3dpart >}}
{{< /3dpart-table >}}
