---
title: Lessons learned and possible pitfalls
description: >
  The current state of the project is still in development.
  This means changes in hardware or design are anytime possible.

linkTitle: Collective Orders
weight: 50
---

## Some information we gathered during previous collective orders

The most sensible parts of the OBS are the two ultrasonic sensors.
There are various models on the market, but most sold under the same name, JSN-SR04T.

---
### AJ-SR04M

characteristics:

* resistor R17 is used to control the behavior
* 8 MHz crystal
* working voltage range 3 - 5.5 volt

documentation:

https://github.com/tomaskovacik/kicad-library/tree/master/library/datasheet/K02-AJ-SR04

pictures:

{{< imgproc "aj-sr04m-general.png" Resize 600x >}}
general PCB
{{< />}}

{{< imgproc "aj-sr04m-order-2021-02.png" Resize 600x >}}
model from collective order Feb 2021
{{< />}}

---
### JSN-SR04T

characteristics:

* probably no resistor to control the behavior
* transverse IC on the connector side
* 11.0592 MHz crystal
* working voltage 5 volt

documentation:

* https://web.archive.org/web/20180712193526/http://www.ekt2.com/pdf/412_CH_ULTRASONIC_MODULE_4PIN_WATERPROOF.pdf
* a document found often cited on Chinese webpages is 'JSN-SR04T一体化超声波测距说明书.pdf', for which was no free download found

pictures:

{{< imgproc "jsn-sr04t-front-1.png" Resize 300x >}}
front 1
{{< />}}

{{< imgproc "jsn-sr04t-front-2.png" Resize 300x >}}
front 2
{{< />}}

{{< imgproc "jsn-sr04t-back-1.png" Resize 300x >}}
back 1
{{< />}}

{{< imgproc "jsn-sr04t-back-2.png" Resize 300x >}}
back 2
{{< />}}

---
### JSN-SR04T-2.0

characteristics:
* resistor R27 is used to control the behavior
* 8 MHz crystal
* working voltage range 3.3 - 5.5 volt

documentation:

https://www.jahankitshop.com/getattach.aspx?id=4635&Type=Product

pictures:

{{< imgproc "jsn-sr04t-2.0.png" Resize 600x >}}
JSN-SR04T-2.0
{{< />}}

---
### JSN-SR04T-V3.0

characteristics:
* resistor "mode" and the shorts "M1" and "M2" are used to control the behavior
* 8 MHz crystal
* working voltage range 3.3 - 5.5 volt

documentation:

https://de.aliexpress.com/item/32863960886.html

pictures:

{{< imgproc "jsn-sr04t-v3.0.png" Resize 600x >}}
JSN-SR04T-v3.0
{{< />}}
