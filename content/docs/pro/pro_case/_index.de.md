---
title: Gehäuse
weight: 30
description: >
    Hier findest du alle notwendigen und kompatiblen Gehäuseteile des OBS Pro.
    Lade dir hier die 3D-Dateien für den Druck deines Gehäuses herunter, und
    überprüfe, ob du alle Teile beisammen hast.
---

Es gibt viele Möglichkeiten, ein Gehäuse für deinen OpenBikeSensor Pro zu bekommen.
Sofern du planst, dir einen Bausatz zu beschaffen, gibt es Varianten, in denen alle
nötigen Gehäuseteile enthalten sind. Hast du diesen Luxus jedoch nicht, lohnt es sich
in der Regel am meisten, die Gehäuseteile selbst zu drucken oder jemanden zu finden, der
dich dabei unterstützt, beispielsweise in einem lokalen Maker Space.
Unter Umständen findest du in der Community hilfreiche Bastler:innen, die dir
ein Gehäuse herstellen -- Frage hierzu am besten [im Forum]({{< relref
"/community" >}}) nach. Für mehr Infos zum 3D-Druck kannst du auch [in der Anleitung zum OpenBikeSensor Classic
nachschauen]({{< relref "/docs/classic/case" >}}).

Hier möchten wir eine Übersicht über alle verfügbaren Gehäusebauteile für den OpenBikeSensor Pro geben.
Die Links führen jeweils zur Quelldatei (Autodesk FUSION) und zum STL-Export für den
3D-Druck. Alle Dateien lassen sich auch auf einmal herunterladen, direkt von
GitHub in der neuesten Version als ZIP-Archiv. Darin finden sich im Ordner
`export` alle Dateien für den 3D-Druck:

<!--
<div class="text-center my-4">
<a class="btn btn-primary btn-lg" href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/releases/download/v0.3.63/OpenBikeSensor3DPrintableCase-stl-v0.3.63.zip">Alles herunterladen</a>
</div>
-->
⚠️ Gesamtdownload für OBS Pro noch nicht verfügbar

{{% alert title="Achtung: Kompatibilität zwischen Versionen" color="warning" %}}
Wir halten die Teile zu Halterungen älterer Versionen kompatibel, aber Teile für ein Geräteelement (z.B. Gehäuse und Deckel, Einzelteile der Displayeinheit, die verschiedenen 
Elemente der Sattelhalterung) können sich zwischen Versionen verändern. Wenn du ein einzelnes Gehäuseteil (z.B. Deckel mit Logo) bekommst, prüfe genau im Slicer, ob
es zu deinen Gehäusedateien passt.
{{% /alert %}}

{{% alert title="Achtung: FUSION statt openSCAD" color="warning" %}}
Das aktuelle Design des Pro-Gehäuses wurde in Autodesk FUSION statt openSCAD erstellt. Das Programm ist kostenpflichtig, wobei für den privaten Bedarf
auch kostenlose Lizenzen bezogen werden können.

{{% /alert %}}

Eine detaillierte Anleitung zum Gehäusedruck gibt es
[hier für den OpenBikeSensor Classic]({{< relref "/docs/classic/case" >}}). Die Informationen zum Druck sind allgemein
genug, dass sie auch für den OpenBikeSensor Pro relevant sind.

### Hauptgehäuse

<div class="table-responsive">
<table class="table table-sm table-striped table-bordered" width="100%">
<thead><tr><th width="180">Bild</th><th>Bauteilname &amp; Beschreibung</th><th>Links</th></tr></thead>
<tbody>
<tr>
  <td>
    <a href="/images/ProCaseBottom.png">
    <img src="/images/ProCaseBottom.png" />
    </a>
  </td>
  <td><b>ProCase/ProCaseBottom</b><br>Das Hauptgehäuse, in dem die Elektronik untergebracht ist.</td>
  <td>
    <!-- TODO: USE THIS AFTER MERGE TO MAINLINE REPO
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/src/ProCase/ProCaseBottom.f3d">FUSION</a>, 
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/ProCase/ProCaseBottom.stl?raw=true">STL</a>
    -->
    <a href="https://github.com/FabianSchwartau/OBSPro/blob/main/mechanics/MainCaseBottom.f3d">FUSION</a>, 
    <a href="https://github.com/FabianSchwartau/OBSPro/blob/main/mechanics/MainCaseBottom.stl">STL</a>
  </td>
</tr>
<tr>
  <td>
    <a href="/images/ProCaseTop.png">
    <img src="/images/ProCaseTop.png" />
    </a>
  </td>
  <td><b>ProCase/ProCaseTop</b><br>Der Deckel für das Hauptgehäuse.</td>
  <td>
    <!-- TODO: USE THIS AFTER MERGE TO MAINLINE REPO
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/src/ProCase/ProCaseTop.f3d">FUSION</a>, 
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/ProCase/ProCaseTop.stl?raw=true">STL</a>
    -->
    <a href="https://github.com/FabianSchwartau/OBSPro/blob/main/mechanics/MainCaseTop.f3d">FUSION</a>, 
    <a href="https://github.com/FabianSchwartau/OBSPro/blob/main/mechanics/MainCaseTop.stl">STL</a>
  </td>
</tr>
<tr>
  <td>
    <a href="/images/ProCaseSlideCover.png">
    <img src="/images/ProCaseSlideCover.png" />
    </a>
  </td>
  <td><b>ProCase/ProCaseSlideCover</b><br>Bewegliche Abdeckung für die SD-Karte und den USB-C Port.</td>
  <td>
    <!-- TODO: USE THIS AFTER MERGE TO MAINLINE REPO
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/src/ProCase/ProCaseSlideCover.f3d">FUSION</a>, 
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/ProCase/ProCaseSlideCover.stl?raw=true">STL</a>
    -->
    <a href="https://github.com/FabianSchwartau/OBSPro/blob/main/mechanics/MainCaseSlideCover.f3d">FUSION</a>, 
    <a href="https://github.com/FabianSchwartau/OBSPro/blob/main/mechanics/MainCaseSlideCover.stl">STL</a>
  </td>
</tr>
</tbody>
</table>
</div>


### Displaygehäuse

Die Displayeinheiten von den Pro- und Classic-Varianten sind identisch. Hast du noch Teile vom Classic übrig, kannst du diese wiederverwenden.

{{< 3dpart-table >}}
{{< 3dpart name="DisplayCase/DisplayCableStrainRelief">}}Zugsicherung für das Displaykabel im Displaygehäuse (2x drucken).{{< /3dpart >}}
{{< 3dpart name="DisplayCase/DisplayCaseBottom">}}Die untere Hälfte des Displaygehäuses.{{< /3dpart >}}
{{< 3dpart name="DisplayCase/DisplayCaseTop">}}Die obere Hälfte des Displaygehäuses.<br><br>
    <b>ACHTUNG: </b>Für das Display von <a href="https://www.lcsc.com/product-detail/C5248080.html">LCSC</a> ist die Variante
    <a href="https://github.com/Prismary/OpenBikeSensor3dPrintableCase/blob/14a1be595ee1ea29dbd748a9c77a316c3559e5a9/export/DisplayCase/DisplayCaseTopLarge.stl">DisplayCaseTopLarge</a> notwendig!
    <!-- TODO: USE THIS AFTER MERGE TO MAINLINE REPO
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/DisplayCase/DisplayCaseTopLarge.stl">DisplayCaseTopLarge</a> notwendig!
    -->
{{< /3dpart >}}
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
