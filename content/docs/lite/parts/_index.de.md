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
    <a href="https://www.aliexpress.com/item/1005001636295529.html">aliexpress.com</a> - Wanzai Store (Variante <i>ESP-32 30P</i>)<br>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>40-Pin Buchsenleiste (2.54mm pitch)</td>
  <td>
    <a href="https://www.aliexpress.com/item/1005001636295529.html">aliexpress.com</a> - Wanzai Store (Variante <i>ESP-32 30P</i>)<br>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>40-Pin Buchsenleiste (2.54mm pitch)</td>
  <td>
    <a href="https://www.aliexpress.com/item/1005001636295529.html">aliexpress.com</a> - Wanzai Store (Variante <i>ESP-32 30P</i>)<br>
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
  <td>JSN-SR04T Sensormodule (Hinweis beachten)</td>

  <td>
    <a href="https://de.aliexpress.com/item/4000057298353.html">EC-Buying, aliexpress.com (JSN-SR04T-v3.0)</a>
    <br/>
    <a href="https://de.aliexpress.com/item/32863960886.html">EC-Buying, aliexpress.com (JSN-SR04T-v3.0)</a>
    <br/>
    <a href="https://www.androegg.de/shop/jsn-sr04t-ver-2-ttl-ultraschall-distanz-naeherungs-sensor-set">androegg.de (JSN-SR04T-v3.0)</a>
  </td>

</tr>   



<tr><th colspan="3">Spezialanfertigungen</th></tr>
<tr>
  <td>1</td>
  <td>PCB 1.0.0 <br/>Im Zip im Unterverzeichnis <code>OpenBikeSensor</code> - Je nach Hersteller mit den Kicad Dateien oder via <code>generated/OpenBikeSensor1.0.0-Gerber.zip</code>. z.B. bei <a href="https://aisler.net/?lang=de-DE">aisler.de</a> oder <a href="jlcpcb.com">jlpcb</a></td>
  <td>
    -<a href="https://github.com/openbikesensor/OpenBikeSensor_PCB_Board/releases/tag/1.0.0">1.0.0 PCB als zip</a><br/>
    -<a href="https://github.com/openbikesensor/OpenBikeSensor_PCB_Board">PCB git repo</a>


  </td>
</tr>
<tr>
  <td>1</td>
  <td>3D-Druck: Hauptgehäuse, Displaygehäuse, Halterung(en)</td>
  <td>
    <a href={{< relref "docs/classic/case" >}}>Link</a>
  </td>
</tr>

</tbody>
</table>
</div>


{{< include-markdown-partial "parts-tools.md" >}}
