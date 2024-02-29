---
title: Bauteile
weight: 20
aliases:
- /bauteile/lite
description: >
    Diese Seite listet alle Bauteile auf, die bestellt oder hergestellt werden
    müssen, um einen OpenBikeSensor Lite zusammenzubauen.

---


## Hinweise

* **ESP32 Development Board**: Von diesem Modul existieren einige verschiedene
  Versionen. Du brauchst die Variante mit 30 Pins. Diese wird oft unter der
  Bezeichnung "ESP32 DEVKIT" verkauft. Es empfiehlt sich außerdem, eine
  Variante USB-C Steckverbinder zu nehmen, da du dann kein Adapterkabel
  ("USB-OTG / on-the-go") benötigst, und ein einfaches zweiseitiges USB-C
  Datenkabel verwenden kannst.

* **JSN-SR04T-3.0**: Hier musst du auf die richtige Version achten. Es gibt
  eine ganze Menge Varianten, von denen viele nicht funktionieren. Insbesondere
  benötigen wir eine Variante, bei der die Ultraschallsensoren direkt auf die
  Modulplatine aufgelötet sind, und nicht mit einem langen Kabel verbunden werden.

* Die Kabelverbindung zwischen dem Sensor und dem Knopf am Lenker kannst du
  gestalten, wie du möchtest. Hier reicht ein beliebiges 2-poliges Kabel der
  richtigen Länge vollkommen aus (z. B. Kabel für Fahrradlicht oder altes
  Telefonkabel).
  - Klingeldraht (einzelner Kupferleiter) ist wegen der Bewegung des Kabels nicht zu
    empfehlen, er kann leichter brechen.
  - Wenn du möchtest, kannst du das Kabel direkt auf die Platine und an
    den Knopf anlöten, oder eine gewinkelte JST-Buchse auf die Platine auflöten und
    das eine Ende des Kabels crimpen und mit einem JST-Stecker versehen.
  - Du kannst auch eine Steckverbindung in die Mitte des Kabels einbauen,
    vielleicht hast du sogar wasserfeste Steckverbinder, und dann deinen Knopf
    immer am Fahrrad befestigt lassen.
  - Die Bauteileliste umfasst nur die einfachste Variante mit permanent
    verbundenem Knopf (verlötet).

* Einige Bauteile können in größeren **Mengen** zu wesentlich günstigeren
  Preisen gekauft werden. Bildet Sammelbestellungen, um viel Geld zu sparen!

* Von besonders günstigen Teile kannst du gern etwas mehr bestellen, als
  **Ersatz**, falls etwas verloren oder kaputtgeht (Widerstände, Schrauben und
  Muttern, Crimp-Kontakte, Kabel und Litze, ...)

* **Gehäuse** müssen [in PETG 3D-gedruckt]({{< relref "../case" >}}) werden. Es
  gibt viele Versionen für verschiedene Zwecke und von verschiedenen Leuten.
  Die Community pflegt aktiv ein bestimmtes Gehäuse für jede PCB-Version.
  Schau' dich im
  [Gehäuse-Repository](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase)
  auf GitHub um. Du kannst dein Gehäuse selbst drucken, andere Mitglieder der
  Community darum bitten, oder fertige Drucke anhand der Designdateien von
  einem 3D-Druck-Service bestellen (das ist aber in der Regel relativ teuer).

* **PCB**: Du benötigst ein PCB der passenden Version, speziell [anhand der
  Designdateien hergestellt]({{< relref "pcb" >}}). Dies sollte am besten
  ebenfalls in großen Mengen bestellt werden, da der Stückpreis dann stark
  sinkt. Frag' auf jeden Fall im Slack nach, ob irgendwer noch welche auf Lager
  hat, bevor du neue anfertigen lässt!


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
  <td>ESP32-WROOM Development Board USB Type-C (Hinweis beachten)</td>
  <td>
    <a href="https://www.amazon.de/-/en/gp/product/B0CF9HF3PG/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">amazon.de</a>
  </td>
</tr>
<tr>
  <td>2</td>
  <td> JSN-SR04T-3.0 Sensormodule (Hinweis beachten)</td>

  <td>
    <a href="https://de.aliexpress.com/item/1005004176343247.html">EC-Buying, aliexpress.com (JSN-SR04T-v3.0)</a>
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
  <td>ca. 1m</td>
  <td>Kabel für Knopf (Hinweis beachten)</td>
  <td></td>
</tr>


<tr><th colspan="3">Steckverbinder</th></tr>
<tr>
  <td>2</td>
  <td>Stiftleiste gerade (4-polig, 2.54&thinsp;mm RM)</td>
  <td>
    <a href="https://www.reichelt.de/de/de/40pol-stiftleiste-gerade-rm-2-54-sl-1x40g-2-54-p19506.html">reichelt.de</a>
  </td>
</tr>
<tr>
  <td>2</td>
  <td>Stiftleiste gerade (15-polig, 2.54&thinsp;mm RM)</td>
  <td>
    <a href="https://www.reichelt.de/de/de/40pol-stiftleiste-gerade-rm-2-54-sl-1x40g-2-54-p19506.html">reichelt.de</a>
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
  <td>28</td>
  <td>M3x8&thinsp;mm Zylinderschraube mit Innensechskant (DIN912). (3x Sensor, 3x Display, 2x für Kabelzugentlastung), je nach Variante können weniger Schrauben reichen.</td>
  <td></td>
</tr>
<tr>
  <td>2</td>
  <td>M3 Mutter (DIN934) (für Kabelzugentlastung), je nach Variante können weniger Muttern reichen</td>
  <td></td>
</tr>
<tr>
  <td>6</td>
  <td>Gewindeeinsatz / Einpressmutter M3x5.7 (3x Sensor, 3x Display), je nach Variante können weniger Muttern reichen.</td>
  <td>
    <a href="https://www.amazon.de/dp/B08BCRZZS3">amazon.de 1</a>
    <br/>
    <a href="https://turmberg3d.de/products/gewindeeinsatze-fur-kunststoffteile?variant=39376894066883">amazon.de 2</a>
  </td>
</tr>
<tr>
  <td>2</td>
  <td>Kabelbinder bis 4.5&thinsp;mm Breite (Displayhalterung Variante mit Kabelbinder)</td>
  <td></td>
</tr>
<tr>
  <td>1</td>
  <td><i>oder</i> O-Ring z.B. 42&thinsp;mm×2.5&thinsp;mm (Displayhalterung Variante mit O-Ring)</td>
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
  <td>PCB OpenBikeSensor Lite<br/><a href="{{< relref "pcb" >}}">Hinweise zum Bestellen (OBS Classic)</a></td>
  <td>
    <a href="https://github.com/openbikesensor/OpenBikeSensor_PCB_Board/raw/1dc54a2e6bce2f1ac1a33e07f4fe34e8968ecd67/OpenBikeSensorLite/generated/lite-0.1.3-gerber.zip">lite-0.1.3-gerber.zip</a><br/></br>
    <a href="https://github.com/openbikesensor/OpenBikeSensor_PCB_Board">PCB GitHub Repository</a>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>3D-Druck: Hauptgehäuse, Displaygehäuse, Halterung(en)</td>
  <td>
    <a href={{< relref "../case" >}}>Link</a>
  </td>
</tr>

</tbody>
</table>
</div>


## Werkzeuge

Diese Werkzeuge werden benötigt, um den Sensor zusammenzubauen. Eventuell musst
du nicht jedes dieser Werkzeuge kaufen, wenn du eines ausleihen kannst, zum
Beispiel in deinem lokalen Hackspace / Maker Space / Fab Lab.

* Persönliche Schutzausrüstung: **Schutzbrille (!)**, eventuell Handschuhe, ...
* Ein guter, regelbarer Lötkolben oder eine Lötstation, mit entsprechender Lösung zur Entlüftung
* Pinzetten
* Seitenschneider (z.B. [Knipex Super Knips](https://www.amazon.de/Knipex-78-61-125-Präzisionszange/dp/B005EXOF6S))
* evtl. Abisolierzange, (z.B. [Knipex](https://www.amazon.de/Knipex-12-62-180-Abisolierzange/dp/B000PAR60C), [Jokari](https://www.amazon.de/Jokari-20050-Abisolierzange-Super-plus/dp/B002BDNL4Q))
* Innensechskantschraubendreher 2,5&thinsp;mm für M3 ("Inbusschlüssel" oder Schraubendreher)
* ESD-Schutzausrüstung (nicht zwingend notwendig, aber nutze sie, wenn du sie hast)

## Verbrauchsgüter

Die meisten dieser Artikel gibt's in jedem Elektroniklabor, wenn du also in
einem Maker Space oder ähnlichem arbeitest, kannst du sicher kleine Mengen
hiervon bekommen, ohne die große Packung kaufen zu müssen.

* Gutes Lötzinn, bleifrei, nicht zu alt
* Entlötlitze
* Schrumpfschlauch (optional)

