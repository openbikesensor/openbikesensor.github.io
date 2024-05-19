---
title: Bauteile OpenBikeSensor Lite
linktitle: Bauteile
weight: 20
notoc: true
aliases:
- /bauteile
- /bauteile/lite
- /docs/hardware/lite/parts
description: >
    Diese Seite listet alle Bauteile auf, die bestellt oder hergestellt werden
    müssen, um einen OpenBikeSensor Lite zusammenzubauen.

---

{{% alert title="Betaversion" color="warning" %}}
Wir arbeiten noch am OpenBikeSensor Lite. Vor dir hat ihn kaum jemand gelötet, auch die Software ist noch sehr neu. Sicher funktioniert noch nicht alles. Manches kann umständlich sein. Toll, dass du es trotzdem probieren willst, wenn du Fehler findest, sag im Forum Bescheid!
{{% /alert %}}

## Hinweise

ESP-WROOM Development Board (USB-C)
: Bei diesem Board ist es wichtig, eine Variante zu bestellen, die über USB-C korrekt signalisiert, dass
  OTG-Stromversorgung benötigt wird. Signalisiert das Board das nicht korrekt, bekommt der OpenBikeSensor Lite
  keine Stromversorgung vom Handy. In diesem Fall kannst du versuchen, mit speziellen USB-OTG-Kabeln gegenzusteuern
  oder den ESP zu tauschen

JSN-SR04T-V3.0 Sensormodule
: Bei den Sensormodulen die Variante mit dem Ultraschalltransducer (schwarzer Zylinder) direkt auf der Platine wählen.

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
<tr><th colspan="3">Elektronikteile</th></tr>
<tr>
  <td>1</td>
  <td>ESP32-WROOM Development Board (USB-C Variante, 30 pins)</td>
  <td>
    <a href="https://de.aliexpress.com/item/1005006476900011.html">aliexpress.com</a><br>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>40-Pin Buchsenleiste (2.54mm pitch)</td>
  <td>
    <a href="https://de.aliexpress.com/item/33057778113.html">aliexpress.com</a><br>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>USB-C auf USB-C-Kabel in c.a. 2m Länge</td>
  <td>
    Aus deiner Kabelkiste.
  </td>
</tr>
<tr>
  <td>2m</td>
  <td>Zweiadriges Kabel. Abgeschnittene Koax-Ultraschallkabel von OpenBikeSensor Classic Bauaktionen funktionieren auch gut.</td>
  <td>
   Aus deiner Kabelkiste.
  </td>
</tr>

<tr>
  <td>3</td>
  <td>Gewindeeinsatz / Einpressmutter M3x5.7 </td>
  <td>
    <a href="https://www.amazon.de/dp/B08BCRZZS3">amazon.de 1</a>
    <br/>
    <a href="https://turmberg3d.de/products/gewindeeinsatze-fur-kunststoffteile?variant=39376894066883">amazon.de 2</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Low Profile Cherry Taste</td>
  <td>
    <a href="https://de.aliexpress.com/item/1005006217543375.html">aliexpress.com</a>
</td>
</tr>

<tr><th colspan="3">Kleinteile</th></tr>

<tr>
  <td>3</td>
  <td>M3x8&thinsp;mm Zylinderschraube mit Innensechskant (DIN912).</td>
  <td></td>
</tr>

<tr>
  <td>1</td>
  <td>M3x30&thinsp;mm Zylinderschraube mit Innensechskant (DIN912) (für den Locking Pin)</td>
  <td></td>
</tr>

<tr>
  <td>2</td>
  <td>JSN-SR04T Sensormodule <b>mit Ultraschalltransducer auf dem Board montiert</b> (Hinweis beachten)</td>

  <td>
    <a href="https://de.aliexpress.com/item/4000057298353.html">EC-Buying, aliexpress.com (JSN-SR04T-v3.0)</a>
    <br/>
  </td>

</tr>   



<tr><th colspan="3">Spezialanfertigungen</th></tr>
<tr>
  <td>1</td>
  <td>PCB 0.1.3 <br/>Im Zip im Unterverzeichnis <code>OpenBikeSensorLite/generated</code> - Je nach Hersteller mit den Kicad Dateien oder via <code>0.1.3.zip</code>. z.B. bei <a href="https://aisler.net/?lang=de-DE">aisler.de</a> oder <a href="jlcpcb.com">jlpcb</a></td>
  <td>
    -<a href="blob:https://github.com/d50e8422-0eab-4a9c-ba26-8e361a258cc3">0.1.3 PCB als zip</a><br/>
    -<a href="https://github.com/openbikesensor/OpenBikeSensor_PCB_Board">PCB git repo</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>3D-Druck: Hauptgehäuse, Displaygehäuse, Halterung(en)</td>
  <td>
    <a href={{< relref "docs/lite/lite_case" >}}>Link</a>
  </td>
</tr>

</tbody>
</table>
</div>


{{< include-markdown-partial "parts-tools.md" >}}
