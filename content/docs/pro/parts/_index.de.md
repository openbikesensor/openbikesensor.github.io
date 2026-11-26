---
title: Bauteile
weight: 20
description: >
    Diese Seite listet alle Bauteile auf, die notwendig sind,
    um einen OpenBikeSensor Pro zusammenzubauen. Stelle dir
    anhand dieser Liste einen Bausatz zusammen, oder überprüfe
    die Vollständigkeit deines vorhandenen Bausatzes.
---


{{% alert title="Verfügbarkeit von Bauteilen" color="warning" %}}
Viele Bauteile, besonders elektronische Komponenten von LCSC, unterliegen starker Schwankungen in ihrer Verfügbarkeit. Wir versuchen, stets einige alternative Teilenummern
anzugeben. Das Problem kann durch den Kauf eines Bausatzes, der alle nötigen Teile enthält, umgangen werden.
{{% /alert %}}

Auf dieser Bauteileliste sind alle Einzelteile zu finden, die für die vollständige Konstruktion eines OBS Pro notwendig sind. Dabei wir vorausgesetzt, dass bereits eine
Platine vorhanden ist, dessen SMD-Komponenten maschinell vorbestückt worden sind. Willst du diese Platine selbst fertigen, findet sich die dafür nötige Stückliste in den Designdateien.

## Bausatz

Aufgrund der Komplexität der Platine wird dringend empfohlen, eine vorbestückte Platine zu erwerben, oder den OBS Pro direkt aus einem fertig zusammengestellten Bausatz zu konstruieren.
Ein Bausatz enthält die vorbestückte Platine und alle weiteren Einzelteile, die zur Fertigung notwendig sind.

## Hinweise

* **Alternative Teile**: Die exakte Ausführung ist bei einigen Bauteilen nicht
  wichtig, sie können auch durch vorhandene Alternativen ersetzt werden. Die in
  der Bauteilliste aufgeführten Modelle wurden erfolgreich mit dem Gerät getestet.
  Zu diesen Bauteilen gehören unter anderem:

  * **SD-Karte:** Billige SD-Karten haben schon häufiger Probleme verursacht,
    die Wahl eines Markenprodukts ist daher ratsam. Die Datenrate sollte außerdem
    nach möglichkeit unter 100 MB/s liegen, Karten mit 120 MB/s sind beispielsweise
    aufgrund einer neueren Schnittstelle teils inkompatibel.
  * **GPS-Antenne:** Es gibt zahlreiche unterschiedliche Ausführungen von
    GPS-Antennen, welche genau verwendet wird, ist nicht allzu wichtig. Achte
    darauf, dass sie nicht zu groß für das Gehäuse ist, den richtigen Stecker besitzt
    und speziell für GPS-Signale ausgelegt ist.
  * **Displaykabel**: Während jedes beliebige fünfpolige Kabel grundsätzlich nicht
    ungeeignet ist, als Displaykabel zu dienen, gab es mit Kabeln niedriger
    Qualität häufiger Probleme. Empfohlen wird qualitatives Sensorkabel, zudem sollte
    auf eine ausreichende Wetterfestigkeit geachtet werden. Zwei Meter Länge sind
    vollkommen ausreichend.

* **Platine**: Während des Zusammenbaus werden nur noch die bedrahteten Komponenten,
  also die Buchsen und Ultraschallsensoren bestückt. Abgesehen davon sollte die
  Platine fertig vorbestückt sein.

* **Gehäuse**: Möchtest du Gehäuseteile selbst fertigen, sollten diese
  in PETG 3D-gedruckt werden. Es gibt verschiedene Versionen für
  verschiedene Zwecke und von verschiedenen Leuten, wobei es dabei hauptsächlich um die
  Montageteile am Rad geht. Suchst du etwas bestimmtes, schau dich im
  [Gehäuse-Repository](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase)
  auf GitHub um.


## Bauteile

<div class="table-wide">
<table class="table">
<thead>
<tr>
<th width="10%">Menge</th>
<th width="*">Bauteil</th>
<th width="30%">Links</th>
</tr>
</thead>
<tbody>
<tr><th colspan="3"><br>PCB-Komponenten</th></tr>
<tr>
  <td>1</td>
  <td>OBS Pro Platine <b>(SMD vorbestückt)</b></td>
  <td>
    Noch nicht verfügbar<br>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Buchse für Displaykabel</td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C263757.html">lcsc.com</a> - S5B-XH-A(LF)(SN)
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Buchse für Kippschalterkabel</td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C157931.html">lcsc.com</a> - S2B-XH-A(LF)(SN)
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Buchse für Akkukabel</td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C843326.html">lcsc.com</a> - X2510WR-02-N0SN
  </td>
</tr>
<tr>
  <td>2</td>
  <td>Ultraschallsensor</td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C17701106.html">lcsc.com</a> - HY40A16T12-1
  </td>
</tr>


<tr><th colspan="3"><br>Elektronik</th></tr>
<tr>
  <td>1</td>
  <td>GPS-Antenne</td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C784385.html">lcsc.com</a> - BWGNSCNX25-25B1Y2L120
  </td>
</tr>
<tr>
  <td>1</td>
  <td>18650 Li-Ion Akku</td>
  <td>
    Beliebiger 18650 mit Lötfahnen<br>
    <a href="https://www.akkuteile.de/lithium-ionen-akkus/18650/samsung/samsung-inr18650-20r-2000mah-3-7v-10c-20a-powertoolzelle-u-loetfahne_1006511_1668">akkuteile.de</a><br>
    <a href="https://akkuservice-krueger.de/?suche=18650&kf=788">akkuservice-krueger.de</a> (Lötfahnen können als Variation ausgewählt werden)
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Kippschalter</td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C1788492.html">lcsc.com</a> - MT-0-102-A101-M200-RS
  </td>
</tr>
<tr>
  <td>1</td>
  <td>OLED-Display</td>
  <td>
    <a href="https://de.aliexpress.com/item/32896971385.html">aliexpress.com</a><br>
    <a href="https://www.alibaba.com/product-detail/Factory-0-96-Inch-Oled-Display_1601666413315.html">alibaba.com</a><br>
    <a href="https://www.lcsc.com/product-detail/C5248080.html">lcsc.com</a> (Gehäuseteil "DisplayTopLarge" erforderlich)
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Display-Drucktaster</td>
  <td>
    <a href="https://www.chinadaier.com/pbs-33b-mini-round-momentary-push-button-switch/">chinadaier.com</a> (große Stückzahlen)<br>
    <a href="https://de.aliexpress.com/item/1005003302861259.html">aliexpress.com</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>SD-Karte</td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C55141983.html">lcsc.com</a> - MKUS128M-IXTM1<br>
    <a href="https://www.lcsc.com/product-detail/C51885972.html">lcsc.com</a> - SDSDQAB-256M-SDWHA
  </td>
</tr>


<tr><th colspan="3"><br>Stecker, Kabel, Crimp</th></tr>
<tr>
  <td>1</td>
  <td>
    Vollständiges Kabel für Akku<br>
    <b>Wird dieses Kabel genutzt, entfallen die folgenden drei Komponenten!</b>
  </td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C7423671.html">lcsc.com</a> - X2510T-02-PSN-A22RB-L300-T5
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Stecker für Akku</td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C843320.html">lcsc.com</a> - X2510H-02-N0
  </td>
</tr>
<tr>
  <td>2</td>
  <td>Crimpkontakte für Akku</td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C883292.html">lcsc.com</a> - X2510T-PSN
  </td>
</tr>
<tr>
  <td>2</td>
  <td>Beliebiges Stück Litze (&asymp;&thinsp;0,25&thinsp;mm²)</td>
  <td>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>
    Vollständiges Kabel für Kippschalter<br>
    <b>Wird dieses Kabel genutzt, entfallen die folgenden drei Komponenten!</b>
  </td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C5363463.html">lcsc.com</a> - 2.54-2P DT 200mm 24AWG
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Stecker für Kippschalter</td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C144401.html">lcsc.com</a> - XHP-2
  </td>
</tr>
<tr>
  <td>2</td>
  <td>
    Crimpkontakte für Kippschalter<br>
    <i>(Identisch zu Kontakten für Displaykabel)</i>
  </td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C140573.html?s_z=n_C140573">lcsc.com</a> - SXH-001T-P0.6
  </td>
</tr>
<tr>
  <td>2</td>
  <td>Beliebiges Stück Litze (&asymp;&thinsp;0,25&thinsp;mm²)</td>
  <td>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>
    Vollständiges Kabel für Display<br>
    <b>Wird dieses Kabel genutzt, entfallen die folgenden drei Komponenten!</b>
  </td>
  <td>
    Noch nicht verfügbar
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Stecker für Display</td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C144404.html">lcsc.com</a> - XHP-5<br>
    <a href="https://www.lcsc.com/product-detail/C339274.html">lcsc.com</a> - A2501H-5P
  </td>
</tr>
<tr>
  <td>5</td>
  <td>
    Crimpkontakte für Display<br>
    <i>(Identisch zu Kontakten für Akkukabel)</i>
  </td>
  <td>
    <a href="https://www.lcsc.com/product-detail/C140573.html">lcsc.com</a> - SXH-001T-P0.6
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Displaykabel (2&thinsp;m)</td>
  <td>
    <a href="https://www.automation24.de/pur-sensorleitung-lapp-unitronic-sensor-lify11y-5x0-25-bk-7038862">automation24.de</a>
  </td>
</tr>


<tr><th colspan="3"><br>Mechanik</th></tr>
<tr>
  <td>2</td>
  <td>Kabelbinder (Breite &le;&thinsp;4,5&thinsp;mm, Länge &ge;&thinsp;70&thinsp;mm)</td>
  <td>
    <a href="https://de.aliexpress.com/item/1005013407398773.html">aliexpress.com</a><br>
    <a href="https://de.aliexpress.com/item/1005007138138071.html">aliexpress.com</a><br>
    Auf die Schnelle natürlich auch im lokalen Baumarkt erhältlich!
  </td>
</tr>
<tr>
  <td>8</td>
  <td>Gewindeeinsatz M3 (Außendurchmesser &asymp;&thinsp;4,2&thinsp;mm, Länge &asymp;&thinsp;5&thinsp;mm)</td>
  <td>
    <a href="https://de.aliexpress.com/item/1005010325121347.html">aliexpress.com</a><br>
    <a href="https://de.aliexpress.com/item/1005010155305523.html">aliexpress.com</a><br>
    <a href="https://www.ruthex.de/products/ruthex-gewindeeinsatz-m3-100-stuck-rx-m3x5-7-messing-gewindebuchsen?variant=52123751121160">ruthex.de</a><br>
    <a href="https://www.amazon.de/Einpressmuttern-Einschmelzgewinde-Gewindeeins%C3%A4tze-Inschmelzmuttern-Kunststoffteile/dp/B0D3DZXT4R/">amazon.de</a><br>
    <a href="https://www.amazon.de/Gewindeeinsatz-Einschmelzgewinde-Einpressmuttern-Gewindebuchse-Kunststoffschale/dp/B0D17FGQWW/">amazon.de</a>
  </td>
</tr>
<tr>
  <td>6</td>
  <td>Mutter M3 (DIN934)</td>
  <td>
    <a href="https://www.gedex-shop.de/de/MUTTERN/Sechskantmuttern-FORM-B--NIEDRIG--MIT-FASE--DIN-5206/Sechskantmuttern-DIN-934/Sechskantmuttern-DIN-934-M3/">gedex-shop.de</a><br>
    <a href="https://www.lcsc.com/product-detail/C24866.html">lcsc.com</a>
  </td>
</tr>
<tr>
  <td>14</td>
  <td>Schraube M3x8 (DIN912)</td>
  <td>
    <a href="https://www.gedex-shop.de/de/schrauben/INNENSECHKANT/Zylinderkopf-DIN-912/DIN-912-M3-Innensechskantschrauben-mit-Zylinderkopf-Edelstahl-rostfrei-A2/DIN-912-M3-Innensechskantschrauben-mit-Zylinderkopf-Edelstahl-rostfrei-A2-637/">gedex-shop.de</a><br>
    <a href="https://www.lcsc.com/product-detail/C7576553.html">lcsc.com</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Schraube M3x30 (DIN912)</td>
  <td>
    <a href="https://www.gedex-shop.de/de/schrauben/INNENSECHKANT/Zylinderkopf-DIN-912/DIN-912-M3-Innensechskantschrauben-mit-Zylinderkopf-Edelstahl-rostfrei-A2/DIN-912-M3-Innensechskantschrauben-mit-Zylinderkopf-Edelstahl-rostfrei-A2-644/">gedex-shop.de</a><br>
    <a href="https://www.lcsc.com/product-detail/C7576562.html">lcsc.com</a>
  </td>
</tr>
<tr>
  <td>2</td>
  <td>Quadermagnet</td>
  <td>
    <a href="https://www.supermagnete.de/quadermagnete-neodym/quadermagnet-20mm-10mm-2mm_Q-20-10-02-N">supermagnete.de</a><br>
    <a href="https://www.sprintis.de/Magnete/Neodym-Magnete/Quadermagnete/Quadermagnete-aus-Neodym-selbstklebend-vernickelt-20-x-10-mm-2-mm.html?srsltid=AfmBOooFJYLF1w9vNQhUhhs5Xz6w4rUWuafPjBX82WW8DYnTrlxcYFAK">sprintis.de</a> - mit Klebefläche<br>
    <a href="https://www.sprintis.de/Magnete/Neodym-Magnete/Quadermagnete/Quadermagnete-aus-Neodym-vernickelt-20-x-10-mm-2-mm.html">sprintis.de</a> - ohne Klebefläche
  </td>
</tr>


<tr><th colspan="3"><br>Gehäuseteile</th></tr>
<tr>
  <td>1<br>1<br>1</td>
  <td>Gehäuse des Hauptgeräts</td>
  <td>
    <!-- TODO: USE THIS AFTER MERGE TO MAINLINE REPO
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/ProCase/ProCaseBottom.stl">MainCaseBottom</a><br>
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/ProCase/ProCaseTop.stl">MainCaseTop</a><br>
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/ProCase/ProCaseSlideCover.stl">MainCaseSlideCover</a>
    -->
    <a href="https://github.com/FabianSchwartau/OBSPro/blob/main/mechanics/MainCaseBottom.stl">ProCaseBottom</a><br>
    <a href="https://github.com/FabianSchwartau/OBSPro/blob/main/mechanics/MainCaseTop.stl">ProCaseTop</a><br>
    <a href="https://github.com/FabianSchwartau/OBSPro/blob/main/mechanics/MainCaseSlideCover.stl">ProCaseSlideCover</a>
  </td>
</tr>
<tr>
  <td>2<br>1<br>1<br>1</td>
  <td>Gehäuse des Displays</td>
  <td>
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/DisplayCase/DisplayCableStrainRelief.stl">DisplayCaseStrainRelief</a><br>
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/DisplayCase/DisplayCaseBottom.stl">DisplayCaseBottom</a><br>
    entweder <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/DisplayCase/DisplayCaseTop.stl">DisplayCaseTop</a><br>
    <!-- TODO: USE THIS AFTER MERGE TO MAINLINE REPO
    oder <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/DisplayCase/DisplayCaseTopLarge.stl">DisplayCaseTopLarge</a><br>
    -->
    oder <a href="https://github.com/Prismary/OpenBikeSensor3dPrintableCase/blob/14a1be595ee1ea29dbd748a9c77a316c3559e5a9/export/DisplayCase/DisplayCaseTopLarge.stl">DisplayCaseTopLarge</a><br>
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/Mounting/HandlebarRail.stl">HandlebarRail</a>
  </td>
</tr>
<tr>
  <td>1<br>1</td>
  <td>Notwendige Montageteile</td>
  <td>
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/Mounting/StandardMountAdapter.stl">StandardMountAdapter</a><br>
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/Mounting/LockingPin.stl">LockingPin</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Optionale Montageteile</td>
  <td>
    <a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/blob/main/export/Mounting/SeatPostMount.stl">SeatPostMount</a>
    oder ein beliebiges anderes Teil von <a href="https://www.openbikesensor.org/docs/classic/case/parts/">hier</a>.
  </td>
</tr>
</tbody>
</table>
</div>


{{< include-markdown-partial "parts-tools.md" >}}
