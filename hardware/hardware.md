---
layout: default
title: Hardware
has_children: true
nav_order: 4
---

# Hardware 

Starting to build an OpenBikeSensor, there are three "models" to choose from.

"HC-SR04P" featuring the correspondent sensors and the PCB 00.02.xx.

"JSN-SR04T Vertical" featuring the JSN-SR04T sensors, the 00.03.xx PCB and which is mounted vertically on the seat post.
<img src="/data/OBSVerticalMount.jpg" alt="hi" class="inline"/>

"JSN-SR04T Horizontal" also featuring the JSN-SR04T sensors, the 00.03.xx PCB, but which ist mounted horizontally.
<img src="/data/OBSHorizontalMount.jpg" alt="hi" class="inline"/>

|                              | PCB 00.02.xx | PCB 00.03.xx |
|:----------------------------:|--------------|--------------|
| waterproof sensors JSN-SR04T |              | X            |
| inexpensive sensors HC-SR04P | X            |              |
| OpenBikeSensor_PCB_Case      | X            |              |
| PCB_Case_Horizontal          |              | X            |
| VerticalCase                 |              | X            |

Featured in the current workshops is the "JSN-SR04T Vertical"

<figure>
  <img src="hardware/images_00.03.xx/Bausatz_VerticalCase_pcb00.03.10_1000px.jpg" alt="Bausatz" class="inline"/>
  <figcaption>OpenBikeSensor Construction Kit featuring Vertical Case and PCB 00.03.10</figcaption>
</figure>


## JSN-SR04T Vertical hardware list:
### Basic items (same for all versions)
* [30 pin ESP32](https://de.aliexpress.com/item/32928267626.html)
* [12mm Push Button](https://www.aliexpress.com/item/4000295670163.html)
* [0.96 inch OLED Display](https://www.aliexpress.com/item/32896971385.html)
* [USB-C Charging Module](https://www.ebay.de/itm/173893903484)
* [SD card module](https://de.aliexpress.com/item/32865801075.html)
* [Automatic Buck-Boost Step Up Down Module for LiPo usage](https://www.ebay.de/itm/264075497616)
* [18650 LiIon Battery](https://www.akkuteile.de/lithium-ionen-akkus/18650/samsung/samsung-inr18650-29e-2900mah-3-7v-lithium-akku-loetfahne-u_1006211_1652)
* [SD Card](https://www.google.com/search?q=sandisk+ultra+16gb&tbm=shop) NOTE: Cheap SD cards have caused multiple problems in the first OpenBikeSensor prototypes
* [Power Switch](https://www.reichelt.de/miniatur-kippschalter-1x-ein-ein-rnd-210-00435-p240567.html)
* [GPS-NEO-6M Module](https://www.ebay.de/itm/GPS-NEO-6M-7M-8M-GY-GPS6MV2-Module-Aircraft-Flight-Controller-For-Arduino/272373338855) NOTE: consider the [large antenna variant](https://de.aliexpress.com/item/1550843440.html) (optional in "JSN-SR04T Vertical" but mandatory in "JSN-SR04T Horizontal"), [alternative link with antenna only option](https://de.aliexpress.com/item/1005001635722164.html)
* [Cable for display connection](https://www.automation24.de/pur-sensorleitung-lapp-unitronic-sensor-lify11y-5x0-25-bk-7038862)

### Sensor and pcb related parts
* 2x[JSN-SR04T](https://de.aliexpress.com/item/32737648330.html)
* [resistors, capacitors, connectors, etc.](https://www.reichelt.de/my/1746485)
* [PCB v00.03.xx](https://github.com/Friends-of-OpenBikeSensor/OpenBikeSensor_PCB_Board/tree/JSN-SR04T)
* 2xSMD connector - [10pcs](https://www.ebay.de/itm/10-pcs-SMD-Buchsenleiste-1x-16-polig-RM-2-54mm-NEU-BP/231930033721), [100pcs](https://www.ebay.de/itm/100-pcs-SMD-Buchsenleiste-1x-16-polig-RM-2-54mm-NEW/233091176275)

### Vertical Case
* [Vertical Case](https://github.com/Friends-of-OpenBikeSensor/OpenBikeSensor3dPrintableCase/tree/master/VerticalCase)
* [4x 20x10x2mm magnets](https://www.amazon.de/dp/B085CBZTQJ)
* [4x 3x3x3mm magnets](https://www.amazon.de/dp/B079KDYBZ8)
* 15x M3x8mm DIN912
* 3x M3x16mm DIN912
* 5x M3x45mm DIN912
* 5x M3x30mm DIN912
* 27x M3 nut DIN934


## JSN-SR04T Horizontal hardware
You need all items from above list, just replace the case with 

### Horizontal case
* [Horizontal Case](https://github.com/Friends-of-OpenBikeSensor/OpenBikeSensor3dPrintableCase/tree/master/PCB_Case_Horizontal)
* Screws and nuts

## "HC-SR04P" variant:
* [5-pin XS9 Aviation Connector](https://www.aliexpress.com/item/32512693653.html)
* 2x[HC-SR04P](https://www.google.com/search?q=HC-SR04P&tbm=shop)
* Screws and nuts, probably still valid from the below "obsolete" list.


## Tools
* [Crimp tool](https://www.amazon.de/gp/product/B07VX6YGQ8)


## Full overview of all PCB 00.02.07-parts
The hardware list for the [pcb version](/hardware/pcb_board/pcb_board.html) you can [find here](https://htmlpreview.github.io/?https://github.com/Friends-of-OpenBikeSensor/OpenBikeSensor_PCB_Board/blob/Mit_Verpolschutz/BOM_for%20overview_and_ordering_Rev_00.02.07.html)
