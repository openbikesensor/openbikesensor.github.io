---
layout: default
title: Hardware
has_children: true
nav_order: 4
---

# Hardware 

The hardware list for the [pcb version](/hardware/pcb_board/pcb_board.html) you can [find here](https://htmlpreview.github.io/?https://github.com/Friends-of-OpenBikeSensor/OpenBikeSensor_PCB_Board/blob/Mit_Verpolschutz/BOM_for%20overview_and_ordering_Rev_00.02.07.html)

Starting to build an OpenBikeSensor, there are three "models" to choose from.

"HC-SR04P" featuring the correspondent sensors and the PCB 00.02.xx.

"JSN-SR04T Vertical" featuring the JSN-SR04T sensors, the 00.03.xx PCB and which is mounted vertically on the seat post.
<img src="/data/OBSVerticalMount.jpg" alt="hi" class="inline"/>

"JSN-SR04T Horizontal" also featuring the JSN-SR04T sensors, the 00.03.xx PCB, but which ist mounted horizontally.
<img src="/data/OBSHorizontalMount.jpg" alt="hi" class="inline"/>

They all share these components:

* [30 pin ESP32](https://de.aliexpress.com/item/32928267626.html)
* [12mm Push Button](https://www.aliexpress.com/item/4000295670163.html)
* [0.96 inch OLED Display](https://www.aliexpress.com/item/32896971385.html)
* [USB-C Charging Module](https://www.ebay.de/itm/173893903484)
* [SD card module](https://de.aliexpress.com/item/32865801075.html)
* [Automatic Buck-Boost Step Up Down Module for LiPo usage](https://www.ebay.de/itm/264075497616)
* [LiIon Battery](https://www.akkuteile.de/lithium-ionen-akkus/18650/samsung/samsung-inr18650-29e-2900mah-3-7v-lithium-akku-loetfahne-u_1006211_1652)
* [SD Card](https://www.google.com/search?q=sandisk+ultra+16gb&tbm=shop) NOTE: Cheap SD cards have caused multiple problems in the first OpenBikeSensor prototypes
* [Power Switch](https://www.reichelt.de/miniatur-kippschalter-1x-ein-ein-rnd-210-00435-p240567.html)
* [GPS-NEO-6M Module](https://www.ebay.de/itm/GPS-NEO-6M-7M-8M-GY-GPS6MV2-Module-Aircraft-Flight-Controller-For-Arduino/272373338855) NOTE: consider the [large antenna variant](https://de.aliexpress.com/item/1550843440.html) (optional in "JSN-SR04T Vertical" but mandatory in "JSN-SR04T Vertical")
* [Cable for display connection](https://www.automation24.de/pur-sensorleitung-lapp-unitronic-sensor-lify11y-5x0-25-bk-7038862)

Parts needed for the "HC-SR04P" variant:
* [5-pin XS9 Aviation Connector](https://www.aliexpress.com/item/32512693653.html)
* 2x[HC-SR04P](https://www.google.com/search?q=HC-SR04P&tbm=shop)
* Screws and nuts, probably still valid from the below "obsolete" list.

Parts needed in the 2 "JSN-SR04T" variants:

* 2x[JSN-SR04T](https://de.aliexpress.com/item/32737648330.html)
* [resistors, capacitors, connectors, etc.](https://www.reichelt.de/my/1746485)
* [PCB v00.03.xx](https://github.com/Friends-of-OpenBikeSensor/OpenBikeSensor_PCB_Board/tree/JSN-SR04T)
* 2xSMD connector - [10pcs](https://www.ebay.de/itm/10-pcs-SMD-Buchsenleiste-1x-16-polig-RM-2-54mm-NEU-BP/231930033721), [100pcs](https://www.ebay.de/itm/100-pcs-SMD-Buchsenleiste-1x-16-polig-RM-2-54mm-NEW/233091176275)

Parts needed for the "JSN-SR04T vertical"
* [Vertical Case](https://github.com/Friends-of-OpenBikeSensor/OpenBikeSensor3dPrintableCase/tree/master/VerticalCase)
* [4x 20x10x2mm magnets](https://www.amazon.de/dp/B085CBZTQJ)
* [4x 3x3x3mm magnets](https://www.amazon.de/dp/B079KDYBZ8)
* Screws and nuts

Parts needed for the "JSN-SR04T horizontal"
* [Horizontal Case](https://github.com/Friends-of-OpenBikeSensor/OpenBikeSensor3dPrintableCase/tree/master/PCB_Case_Horizontal)
* Screws and nuts






obsolete list form 1st prototype:
* [ESP32](https://www.az-delivery.de/products/esp32-developmentboard) UPDATE: In the next version we will use the [30pin variant](https://de.aliexpress.com/item/32928267626.html)
* [HC-SR04P](https://www.google.com/search?q=HC-SR04P&tbm=shop) NOTE: with the new version, you should have a choice of also using the waterproof sensor [JSN-SR04T](https://de.aliexpress.com/item/32737648330.html)
* [12mm Push Button](https://www.aliexpress.com/item/4000295670163.html)
* [0.96 inch OLED Display](https://www.aliexpress.com/item/32896971385.html)
* [USB-C Charging Module](https://www.ebay.de/itm/173893903484)
* [GPS Module](https://www.ebay.de/itm/GPS-NEO-6M-7M-8M-GY-GPS6MV2-Module-Aircraft-Flight-Controller-For-Arduino/272373338855) NOTE: consider the [large antenna variant](https://de.aliexpress.com/item/1550843440.html)
* [SD card adapter](https://de.aliexpress.com/item/32865801075.html)
* [Push Button 12mm](https://de.aliexpress.com/item/4000295670163.html)
* Plenty of wires (0.25mm^2) and heat-shrink tubing

To power the sensor you have a choice of Lithium-Iron or Lithium-Ion batteries:

* [Automatic Buck-Boost Step Up Down Module for LiPo usage](https://www.ebay.de/itm/264075497616)
* [LiIon battery](https://www.akkuparts24.de/Samsung-INR18650-25R-36V-2500mAh-Li-Ion-Zelle)

or

* [Battery-Protection-Board](https://www.ebay.de/itm/1S-Cell-18650-LiFePo4-Battery-Charger-12A-3-2V-BMS-Protection-PCB-Board-Circuit/122651145073)
* [LiFePo charging module](https://www.ebay.de/itm/MicroUSB-TP5000-3-6v-1A-Charger-Module-3-2v-LiFePO4-Lithium-Battery-Charging-/122164745507) or [alternative](https://de.aliexpress.com/item/4000310107151.html)
* [LiFePo-Battery](https://www.akkuteile.de/lifepo-akkus/18650/a123-apr18650m-a1-1100mah-3-2v-3-3v-lifepo4-akku/a-1006861/)

Li-Ion batteries are usually cheaper and have higher capacity at the same size. Lithium-Iron batteries are considered quite safe.
NOTE: It looks like most people are prefering the Li-Ion variant now. So do we in the next couple of sensors being built for testing.

Screws and nuts:
* [1x M5x35](https://www.amazon.de/gp/product/B078TNC9H1)
* [2x M4x30](https://www.amazon.de/gp/product/B01IMGZTT0)
* [7x M3x45](https://www.amazon.de/gp/product/B07KTBYPFP)
* [4x M2x12](https://www.amazon.de/gp/product/B078TQYZVX)
* [1x M2x10](https://www.amazon.de/gp/product/B01GQX070W)
* [1x M5 Nut](https://www.amazon.de/gp/product/B07961ZH1B)
* [2x M4 Nut](https://www.amazon.de/gp/product/B07961ZH19)
* [7x M3 Nut](https://www.amazon.de/gp/product/B01H8XN99A)
* [5x M2 Nut](https://www.amazon.de/gp/product/B01H8XN7VK)

You can consider getting slotted-head screws for the M2 ones, if you're worried about damaging the tiny Allen screws.
