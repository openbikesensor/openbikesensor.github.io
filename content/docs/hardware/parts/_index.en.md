---
title: Parts Lists for all versions
linkTitle: Purchase Parts
weight: 40
---

This page is used for reference when ordering parts. Please make sure to read
it carefully, and read the "Notes" section as well. Some items need a bit of
care when selecting from the available choices and vendors.

Note that some of these links may break in the future, we'll try to update them
with working links to vendors we've had good experience with.

There might be errors in this list or it might become outdated, you should
refer to the design files you planning to use for building your sensor, to see
if there are any differences. Especially on orders of high value or larger
quantities, and on orders from China which take a few weeks to arrive, double
checking everything is important. 

### Notes

* **ESP32 Development Board**: There are different versions of this module, you will need one with 30 pins. Which often referenced as "ESP32 DEVKIT v1".
* **SD Card**: Cheap cards have caused multiple problems, choose a brand name like SanDisk.
* **GPS Module**: Consider the [large antenna variant](https://de.aliexpress.com/item/1550843440.html) (optional in "JSN-SR04T Vertical" but mandatory in "JSN-SR04T Horizontal"), [alternative link with antenna only option](https://de.aliexpress.com/item/1005001635722164.html)
* **Display cable**: Do not go cheap on this cable, buy name brand LifY11Y, or the display connection might not work reliably. Two meters should be plenty even for large bikes and a few failed attempts at crimping its ends. Cat5 or Cat6 cable might work electrically as well, but usually isn't as flexible and "nice".
* **JSN-SR04T**: Take care to get the right version, there are numerous variants out there, some of which do not work at all. Refer to [this page]({{< relref "collective-order" >}}) for some more details.
* Some items can be ordered for much cheaper in bulk, some are only available in bulk. Form collective orders to save a lot of money.
* On some cheap items, it makes sense to order a few more than you need as spare parts (SMD resistors, screws and nuts, crimping contacts, wire). See also "Consumables" below.
* For most of the "Passive and various components" there is a predefined [shopping list](https://www.reichelt.de/my/1746485) (*note*: Some parts can no longer be ordered from this dealer and have been replaced with alternatives.) 
* **Cases** need to be [3D printed in PETG]({{< relref "case" >}}). There are various different designs for each use case, we've just listed the most common combinations here. Have a look around the [case design repository](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase) on Github. You can print these yourself, ask on Slack, or purchase prints of the provided files from a 3d printing service, though this is usually rather expensive. 
* **PCB**: You will need a [special PCB manufactured]({{< relref "pcb" >}}) according to the design files. This is best done in bulk as well, somebody might have spares and can send them to you. Ask in Slack! 


## Parts

<table class="table-bordered">
<thead>
<tr>
<th width="40%">Part</th>
<th width="20%">00.03 Vertical</th>
<th width="20%">00.03 Horizontal</th>
<th width="20%">00.02</th>
</tr>
</thead>
<tbody>
<tr><th colspan="4">Modules</th></tr>
<tr>
  <td><a href="https://de.aliexpress.com/item/32928267626.html">ESP32-WROOM Development Board</a> (see note)</td>
  <td colspan="3" align="center">1x</td>
</tr>
<tr>
  <td><a href="https://www.aliexpress.com/item/32896971385.html">0.96 inch OLED Display</a></td>
  <td colspan="3" align="center">1x</td>
</tr>
<tr>
  <td><a href="https://www.ebay.de/itm/173893903484">USB-C Charging Module</a></td>
  <td colspan="3" align="center">1x</td>
</tr>
<tr>
  <td><a href="https://de.aliexpress.com/item/32865801075.html">SD card module</a></td>
  <td colspan="3" align="center">1x</td>
</tr>
<tr>
  <td><a href="https://www.ebay.de/itm/264075497616">Buck-Boost Module for LiPo, 3.3V</a></td>
  <td colspan="3" align="center">1x</td>
</tr>
<tr>
  <td><a href="https://www.akkuteile.de/lithium-ionen-akkus/18650/samsung/samsung-inr18650-29e-2900mah-3-7v-lithium-akku-loetfahne-u_1006211_1652">18650 LiIon Battery</a>, with U solder tags</td>
  <td colspan="3" align="center">1x</td>
</tr>
<tr>
  <td><a href="https://www.google.com/search?q=sandisk+ultra+16gb&tbm=shop">SD Card</a> (see note)</td>
  <td colspan="3" align="center">1x</td>
</tr>
<tr>
  <td><a href="https://www.ebay.de/itm/GPS-NEO-6M-7M-8M-GY-GPS6MV2-Module-Aircraft-Flight-Controller-For-Arduino/272373338855">GPS-NEO-6M Module</a> (see note)</td>
  <td colspan="3" align="center">1x</td>
</tr>

<tr><th colspan="4">Basic parts</th></tr>
<tr>
  <td><a href="https://www.aliexpress.com/item/4000295670163.html">12mm Push-Button</a></td>
  <td colspan="3" align="center">1x</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/miniatur-kippschalter-1x-ein-ein-rnd-210-00435-p240567.html">Power Switch</a></td>
  <td colspan="3" align="center">1x</td>
</tr>
<tr>
  <td><a href="https://www.automation24.de/pur-sensorleitung-lapp-unitronic-sensor-lify11y-5x0-25-bk-7038862">Cable for display connection</a> (see note)</td>
  <td colspan="3" align="center">ca. 2m</td>
</tr>

<tr>
  <td>Passive and various components</td>
  <td colspan="3" align="center">see notes</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/jst-crimpkontakt-buchse-xh-jst-xh-ckb-p185091.html">JST contact BXH-001T-P0.6</a></td>
  <td colspan="3" align="center">15</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/jst-buchsengehaeuse-1x2-polig-xh-jst-xh2p-bu-p185085.html">JST housing XHP-2</a></td>
  <td colspan="3" align="center">3</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/jst-buchsengehaeuse-1x4-polig-xh-jst-xh4p-bu-p185087.html">JST housing XHP-4</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/jst-buchsengehaeuse-1x5-polig-xh-jst-xh5p-bu-p185088.html">JST housing XHP-5</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/jst-stiftleiste-gerade-1x2-polig-xh-jst-xh2p-st-p185073.html">JST shrouded header B2B-XH-A</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/jst-stiftleiste-gerade-1x5-polig-xh-jst-xh5p-st-p185076.html">JST shrouded header B5B-XH-A</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/widerstand-kohleschicht-10-kohm-0207-250-mw-5--1-4w-10k-p1338.html">Resistor (THT) 10 kΩ, 250 mW, 5 %</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/widerstand-kohleschicht-150-kohm-0207-250-mw-5--1-4w-150k-p1355.html">Resistor (THT) 150 kΩ, 250 mW, 5 %</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/widerstand-kohleschicht-300-kohm-0207-250-mw-5--1-4w-300k-p1407.html">Resistor (THT) 300 kΩ, 250 mW, 5 %</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.conrad.de/de/p/tru-components-tc-1206s4f1101t5e203-dickschicht-widerstand-1-1-k-smd-1206-0-25-w-1-1-st-tape-cut-1584104.html">SMD resistor 1.1 kΩ, 1206, 0.25 W, 1 %<br>(for PCB 00.03.12 it is a THT type)</a></td>
  <td colspan="3" align="center">2</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/vielschicht-keramikkondensator-100n-10--x7r-2-5-100n-p22853.html">Ceramic capacitor 100 nF, 10 %</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/elko-radial-22-uf-10-v-1000-h-low-esr-aec-q200-rad-fc-22-10-p84587.html">Radial electrolytic capacitor 22 µF, 10 V, low ESR</a></td>
  <td colspan="3" align="center">2</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/schottkydiode-60-v-5-a-do-201ad-sb-560-p16081.html">Schottky diode, 60 V, 5 A</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/rueckstellende-sicherungen-max-40a-30v-6-6s-pfra-110-p35211.html">Resettable fuse, max. 40 A - 30 V, 6.6 sec</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/platinensteckverbinder-gerade-weiss-2-polig-ps-25-2g-ws-p14825.html">PCB connector straight, 2-pin (pin and socket, hard wired)</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/de/de/36pol-stiftleiste-gewinkelt-rm-2-54-sl-1x36w-2-54-p19505.html">36-pin header, angled, pitch 2.54</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.reichelt.de/de/de/40pol-stiftleiste-gerade-rm-2-54-sl-1x40g-2-54-p19506.html">40-pin header, straight, pitch 2.54</a></td>
  <td colspan="3" align="center">1</td>
</tr>
<tr>
  <td><a href="https://www.fischerelektronik.de/web_fischer/de_DE/$catalogue/fischerData/PR/BL_LP5SMD_/datasheet.xhtml?branch=Steckverbinder">15 pin 2.54mm SMD connectors (BL LP 5 SMD)</a></td>
  <td colspan="3" align="center">2x</td>
</tr>
<tr>
  <td><a href="https://www.aliexpress.com/item/32512693653.html">5-pin XS9 Aviation Connector</a></td>
  <td colspan="2" align="center">&ndash;</td>
  <td align="center">1x</td>
</tr>


<tr><th colspan="4">Sensor modules</th></tr>
<tr>
  <td><a href="https://de.aliexpress.com/item/32737648330.html">JSN-SR04T</a> (see note)</td>
  <td colspan="2" align="center">2x</td>
  <td align="center">&ndash;</td>
</tr>
<tr>
  <td>HC-SR04P</td>
  <td colspan="2" align="center">&ndash;</td>
  <td align="center">2x</td>
</tr>


<tr><th colspan="4">Custom parts</th></tr>
<tr>
  <td>PCB</td>
  <td colspan="2" align="center"><a href="https://github.com/openbikesensor/OpenBikeSensor_PCB_Board/tree/merged/OpenBikeSensor03">v00.03.xx</a></td>
  <td colspan="1" align="center"><a href="https://github.com/openbikesensor/OpenBikeSensor_PCB_Board/tree/merged/OpenBikeSensor02">v00.02.xx</a></td>
</tr>
<tr>
  <td>Case</td>
  <td align="center"><a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/master/MainCase/VerticalCase">Vertical Case</a></td>
  <td align="center"><a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/master/PCB_Case_Horizontal">Horizontal Case</a></td>
  <td align="center">TBD</td>
</tr>
<tr>
  <td>Display Case</td>
  <td colspan="2" align="center"><a href="https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase/tree/master/DisplayCase/SlideOnDisplay">SlideOnDisplay</a></td>
  <td align="center">TBD</td>
</tr>

<tr>
  <td><a href="https://www.amazon.de/dp/B085CBZTQJ">Magnets 20mm x 10mm x 2mm</a></td>
  <td colspan="2" align="center">4x</td>
  <td align="center">TBD</td>
</tr>
<tr>
  <td><a href="https://www.amazon.de/dp/B079KDYBZ8">Magnets 3mm x 3mm x 3mm</a></td>
  <td align="center">4x</td>
  <td align="center">TBD</td>
  <td align="center">TBD</td>
</tr>
<tr>
  <td>M3x8mm DIN912</td>
  <td align="center">15x</td>
  <td align="center">TBD</td>
  <td align="center">TBD</td>
</tr>
<tr>
  <td>M3x16mm DIN912</td>
  <td align="center">3x</td>
  <td align="center">TBD</td>
  <td align="center">TBD</td>
</tr>
<tr>
  <td>M3x45mm DIN912</td>
  <td align="center">5x</td>
  <td align="center">TBD</td>
  <td align="center">TBD</td>
</tr>
<tr>
  <td>M3x30mm DIN912</td>
  <td align="center">5x</td>
  <td align="center">TBD</td>
  <td align="center">TBD</td>
</tr>
<tr>
  <td>M3 nut DIN934</td>
  <td align="center">27x</td>
  <td align="center">TBD</td>
  <td align="center">TBD</td>
</tr>

</tbody>
</table>

## Tools

These are the tools you probably need for building the sensor. The most
specialized tool is the crimping tool, which might be available in a hacker
space / maker space / fab lab near you. It might not be needed to purchase any
of these if you can lend them.

* [Crimping tool](https://www.amazon.de/gp/product/B07VX6YGQ8) for JST-XH connectors (other brands or versions for these connectors, such as Engineer PA-09, are fine, too)
* A decent temperature regulated soldering iron or station and a fume extraction solution (or work outside in the summer)
* Tweezers, side cutters, M3 hex key
* Safety eyewear, possibly gloves
* ESD protection equiment (not really required, but use it if you have it)

## Consumables

Most of these items should also be available in any electronics workspace, so if you're in a maker space or similar, you can probably get the small quantities you need of these

* Quality solder wire
* Desoldering wick
* Electrical tape (preferably Kapton tape)
* Shrink tube (optional)
* About 25cm of 0.25&thinsp;mm<sup>2</sup> / 23&thinsp;AWG stranded wire


### See also

* [Full overview of all parts for PCB 00.02.07](https://htmlpreview.github.io/?https://github.com/openbikesensor/OpenBikeSensor_PCB_Board/blob/Mit_Verpolschutz/BOM_for%20overview_and_ordering_Rev_00.02.07.html)
