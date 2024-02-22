---
title: Bauteile
weight: 20
notoc: true
aliases:
- /bauteile
- /bauteile/v00.03.12
- /docs/hardware/v00.03.12/parts
description: >
    Diese Seite listet alle Bauteile auf, die bestellt oder hergestellt werden
    müssen, um einen OpenBikeSensor Classic zusammenzubauen.

---


{{% pageinfo color="warning" %}}
Bei manchen Komponenten funktionieren die Links auf die Produkte nicht mehr. Wir arbeiten zurzeit daran, welche bei neuen Lieferanten bestellen.
Wenn du gerade bestellst, kannst du `@gluap` im Forum kontaktieren, um bei der Testbestellung dieser Komponenten mitzumachen.
{{% /pageinfo %}}

{{< include-markdown-partial "parts-notes.md" >}}

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
<tr><th colspan="3">Module</th></tr>
<tr>
  <td>1</td>
  <td>ESP32-WROOM Development Board (Hinweis beachten)</td>
  <td>
    <a href="https://www.aliexpress.com/item/1005001636295529.html">aliexpress.com</a> - Wanzai Store (Variante <i>ESP-32 30P</i>)<br>
    <a href="https://www.aliexpress.com/item/32959541446.html">aliexpress.com</a> - Win win. (Variante <i>ESP-32 30P</i>)<br>
    <a href="https://www.aliexpress.com/item/1005001929935550.html">aliexpress.com</a> - KEWEITE Store (Variante <i>ESP-32</i>)<br>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>0.96-Zoll OLED Display</td>
  <td>
    <a href="https://www.aliexpress.com/item/32896971385.html">aliexpress.com</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>USB-C Lademodul</td>
  <td>
    <a href="https://de.aliexpress.com/item/4000126454159.html">aliexpress.com 1</a>
    <br/>
    <a href="https://de.aliexpress.com/item/1005001859371001.html">aliexpress.com 2</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>SD-Karten-Modul</td>
  <td>
    <a href="https://de.aliexpress.com/item/32865801075.html">aliexpress.com</a>
    <a href="https://www.androegg.de/shop/esp8266-stm-32-arduino-spi-kartenleser-33v/">androegg.de</a>[<a href="https://forum.openbikesensor.org/t/erfahrungen-mit-bauteilen-von-anderen-haendlern-lieferanten/1301/8?u=gluap">forenthread</a>]
  </td>
</tr>
<tr>
  <td rowspan="2" class="align-middle">1</td>
  <td>Alternative A "Rotes Modul" Buck-Boost Modul for LiPo, 3.3V (Spannungsregler). Eines der verlinkten Module reicht.</td>
  <td>
    <span style="color: red; font-face: bold;">Derzeit ist kein zuverlässiger Händler für dieses Modul bekannt. Module mit Beschriftung `A1731i` auf dem sechsbeinigen Bauteil **funktionieren NICHT**.</span>
  </td>
</tr>
<tr>
  <td>Alternative B: Spannungsregler von Adafruit, Modelle: <ul><li>Adafruit 2745 - LM3671</li><li>Adafruit 4711 - TLV62569</li></ul></td>
  <td>
<a href="https://mou.sr/429zrNp">mouser.com 2745</a><br/>
<a href="https://mou.sr/3u3wphg">mouser.com 4711</a><br/>
<a href="https://www.adafruit.com/product/4711">adafruit.com 2745</a><br/>
<a href="https://www.adafruit.com/product/2745">adafruit.com 4711</a>

  </td>
</tr>
<tr>
  <td>1</td>
  <td>18650 LiIon-Akku (mit Lötfahnen)</td>
  <td>
    <a href="https://www.akkuteile.de/lithium-ionen-akkus/18650/samsung/samsung-inr18650-29e-2900mah-3-7v-lithium-akku-loetfahne-u_1006211_1652">akkuteile.de</a>
    <br/>
    <a href="https://www.nkon.nl/catalogsearch/result/?q=INR18650-29E">nkon.nl</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>SD-Karte, 16 GB / 32 GB (Hinweis beachten)</td>
  <td>
    <a href="https://www.amazon.de/gp/product/B008RDCC26/ref=ox_sc_saved_image_6?smid=A3JWKAKR8XB7XF&psc=1">amazon.de</a>
    <br/>
    <a href="https://www.google.com/search?q=sandisk+ultra+16gb&tbm=shop">google Suche</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>GPS-NEO-6M Modul (Hinweis beachten)</td>
  <td>
    <a href="https://de.aliexpress.com/item/1005001621909155.html">aliexpress.com 1</a>
    <br/>
    <a href="https://de.aliexpress.com/item/1005001825455846.html">aliexpress.com 2</a>
    <br/>
    <a href="https://de.aliexpress.com/item/32582974860.html">aliexpress.com 3</a>
    <br/>
    <a href="https://de.aliexpress.com/item/4000781171314.html">aliexpress.com 4</a>
  </td>
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

<tr><th colspan="3">Kleinteile</th></tr>
<tr>
  <td>1</td>
  <td>12&thinsp;mm Drucktaster</td>
  <td>
    <a href="https://www.aliexpress.com/item/4000295670163.html">aliexpress.com</a>
    <a href="https://de.aliexpress.com/item/32672509409.html">aliexpress.com</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Miniatur-Kippschalter</td>
  <td>
    <a href="https://www.reichelt.de/de/de/miniatur-kippschalter-ein-ein-3-a-250-v-goobay-10020-p285987.html">reichelt.de</a>
    <br/>
    <a href="https://de.aliexpress.com/item/32917875732.html">aliexpress.com</a>
  </td>
</tr>
<tr>
  <td>ca. 2m</td>
  <td>Displaykabel (Hinweis beachten)</td>
  <td>
    <a href="https://www.automation24.de/pur-sensorleitung-lapp-unitronic-sensor-lify11y-5x0-25-bk-7038862">automation24.de</a>
  </td>
</tr>

<tr><th colspan="3">Steckverbinder</th></tr>
<tr>
  <td>15 (+10 Ersatz) </td>
  <td>JST-XH Crimp-Kontakte (BXH-001T-P0.6)</td>
  <td>
    <a href="https://www.reichelt.de/jst-crimpkontakt-buchse-xh-jst-xh-ckb-p185091.html">reichelt.de</a>
    <br/>
    <a href="https://de.farnell.com/en-DE/jst-japan-solderless-terminals/bxh-001t-p0-6/crimp-terminal-xh-28-22awg/dp/1516301?ost=bxh-001t-p0-6">farnell.com</a></td>
</tr>
<tr>
  <td>3</td>
  <td>JST-XH Gehäuse 2-polig (XHP-2)</td>
  <td>
    <a href="https://www.reichelt.de/jst-buchsengehaeuse-1x2-polig-xh-jst-xh2p-bu-p185085.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>2</td>
  <td>JST-XH Platinenstecker 2-polig 90°</td>
  <td>
    <a href="https://www.reichelt.de/jst-stiftleiste-90-1x2-polig-xh-jst-xh2p-st90-p185079.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>JST-XH Gehäuse 4-polig (XHP-4)</td>
  <td>
    <a href="https://www.reichelt.de/jst-buchsengehaeuse-1x4-polig-xh-jst-xh4p-bu-p185087.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>JST-XH Gehäuse 5-polig (XHP-5)</td>
  <td>
    <a href="https://www.reichelt.de/jst-buchsengehaeuse-1x5-polig-xh-jst-xh5p-bu-p185088.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>JST-XH Platinenstecker 2-polig (B2B-XH-A)</td>
  <td>
    <a href="https://www.reichelt.de/jst-stiftleiste-gerade-1x2-polig-xh-jst-xh2p-st-p185073.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>JST-XH Platinenstecker 5-polig (B5B-XH-A)</td>
  <td>
    <a href="https://www.reichelt.de/jst-stiftleiste-gerade-1x5-polig-xh-jst-xh5p-st-p185076.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Batteriekabel (gerade, 2-polig)</td>
  <td>
    <a href="https://www.reichelt.de/platinensteckverbinder-gerade-weiss-2-polig-ps-25-2g-ws-p14825.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Platinenstecker für Batteriekabel (gerade, 2-polig, mit rot-schwarzen Kabeln, 2.54&thinsp;mm RM)</td>
  <td>
    <a href="https://www.pollin.de/p/buchsenleiste-serie-ps-451471">pollin.de 1</a>
    <br/>
    <a href="https://www.pollin.de/p/stiftleiste-serie-ps-451478">pollin.de 2</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Winkelstiftleiste (mind. 10-polig, 2.54&thinsp;mm RM)</td>
  <td>
    <a href="https://www.reichelt.de/de/de/36pol-stiftleiste-gewinkelt-rm-2-54-sl-1x36w-2-54-p19505.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Stiftleiste gerade (mind. 11-polig, 2.54&thinsp;mm RM)</td>
  <td>
    <a href="https://www.reichelt.de/de/de/40pol-stiftleiste-gerade-rm-2-54-sl-1x40g-2-54-p19506.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>2</td>
  <td>SMD-Buchsenleisten (15-polige, 2.54&thinsp;mm SMD, wechselseitig, BL LP 5 SMD)<br/> (15-polige Variante ist selten; 16-polige kann gekürzt werden)</td>
  <td>
    <a href="https://www.fischerelektronik.de/web_fischer/de_DE/$catalogue/fischerData/PR/BL_LP5SMD_/datasheet.xhtml?branch=Steckverbinder">fischerelektronik.de</a>
  </td>
</tr>

<tr><th colspan="3">Elektronische Bauelemente</th></tr>
<tr>
  <td>1</td>
  <td>Widerstand (THT) 10 kΩ, 250 mW, 5 %</td>
  <td>
    <a href="https://www.reichelt.de/widerstand-kohleschicht-10-kohm-0207-250-mw-5--1-4w-10k-p1338.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Widerstand (THT) 150 kΩ, 250 mW, 5 %</td>
  <td>
    <a href="https://www.reichelt.de/widerstand-kohleschicht-150-kohm-0207-250-mw-5--1-4w-150k-p1355.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Widerstand (THT) 300 kΩ, 250 mW, 5 %</td>
  <td>
    <a href="https://www.reichelt.de/widerstand-kohleschicht-300-kohm-0207-250-mw-5--1-4w-300k-p1407.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>2</td>
  <td>Widerstand (THT) 1.1 kΩ, 250 mW, 5 %</td>
  <td>
    <a href="https://www.reichelt.de/widerstand-kohleschicht-1-1-kohm-0207-250-mw-5--1-4w-1-1k-p1318.html?&trstct=pos_0&nbc=1">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Keramikkondensator 100 nF, 10 %</td>
  <td>
    <a href="https://www.reichelt.de/vielschicht-keramikkondensator-100n-10--x7r-2-5-100n-p22853.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>2</td>
  <td>Elektrolytkondensator, radial, 22 µF, 10 V, niedrige ESR</td>
  <td>
    <a href="https://www.reichelt.de/elko-radial-22-uf-10-v-1000-h-low-esr-aec-q200-rad-fc-22-10-p84587.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Schottky-Diode, 60 V, 5 A, DO-201AD</td>
  <td>
    <a href="https://www.reichelt.de/schottkydiode-60-v-5-a-do-201ad-sb-560-p16081.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Rückstellende Sicherung, max. 40 A - 30 V, 6.6 sec<br>Typ PFRA, radiale Bauform</td>
  <td>
    <a href="https://www.reichelt.de/rueckstellende-sicherungen-max-40a-30v-6-6s-pfra-110-p35211.html">reichelt.de</a>
  </td>
</tr>


<tr><th colspan="3">Mechanische Bauteile</th></tr>
<tr>
  <td>4</td>
  <td>Neodym-Magnete, 20x10x2&thinsp;mm</td>
  <td>
    <a href="https://www.amazon.de/dp/B085CBZTQJ">amazon.de</a>
    <a href="https://www.supermagnete.de/quadermagnete-neodym/quadermagnet-20mm-10mm-2mm_Q-20-10-02-N">supermagnete.de (teuer, stark)</a>
  </td>
</tr>
<tr>
  <td>4</td>
  <td>Neodym-Magnete, 3x3x3&thinsp;mm</td>
  <td>
    <a href="https://www.amazon.de/dp/B079KDYBZ8">amazon.de</a>
    <a href="https://www.supermagnete.de/wuerfelmagnete-neodym/wuerfelmagnet-3mm_W-03-N">supermagnete.de</a>
  </td>
</tr>
<tr>
  <td>28</td>
  <td>M3x8&thinsp;mm Zylinderschraube mit Innensechskant (DIN912). (1x GPS, 8x für zwei Gehäuseöffnungen, 3x Platine, 5x Deckel, 3x Display, 6x 2 Gepäckträgerhalterungen, 2x für Kabelzugentlastung), je nach Variante können weniger Schrauben reichen.</td>
  <td></td>
</tr>
<tr>
  <td>1</td>
  <td>M3x30&thinsp;mm Zylinderschraube mit Innensechskant (DIN912) (für den Locking Pin)</td>
  <td></td>
</tr>
<tr>
  <td>10</td>
  <td>M3 Mutter (DIN934) (je 4x für zwei Gehäuseöffnungen, 2x für Kabelzugentlastung, je nach Variante können weniger Muttern reichen.)</td>
  <td></td>
</tr>
<tr>
  <td>18</td>
  <td>Gewindeeinsatz / Einpressmutter M3x5.7 (1x GPS, 5x Deckel, 3x Platine, 3x Display, 6x für 2 Gepäckträgerhalterungen, je nach Variante können weniger Muttern reichen.)</td>
  <td>
    <a href="https://www.amazon.de/dp/B08BCRZZS3">amazon.de 1</a>
    <br/>
    <a href="https://turmberg3d.de/products/gewindeeinsatze-fur-kunststoffteile?variant=39376894066883">amazon.de 2</a>
  </td>
</tr>
<tr>
  <td>2-4</td>
  <td>2 Kabelbinder bis 4.5&thinsp;mm Breite (Batterie)<br/>
      2 Kabelbinder bis 4.5&thinsp;mm Breite (Variante Displayhalterung Kabelbinder)<br/></td>
  <td>
  </td>
</tr>
<tr>
  <td>0-1</td>
  <td>1 O-Ring z.B. 42&thinsp;mm×2.5&thinsp;mm (Variante Displayhalterung O-Ring)</td>
  <td>
  </td>
</tr>
<tr>
  <td>2</td>
  <td>Kabelbinder bis 8&thinsp;mm Breite (Sattelhalterung)</td>
  <td></td>
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
