---
title: Collective Orders

weight: 10
---
 
This page shall provide some information that we gathered during previous
collective orders. 

 
## Re-check everything
 
Please note that the project is still in development, which means that changes
in hardware or design are possible anytime. Before ordering parts, especially
in large quantities, double check that the design you're working off of and the
list of items you are about to purchase match, and that neither is out of date
or ahead of the other.


## Ultrasonic Sensor Boards

The most sensible parts of the OBS are the two ultrasonic sensors.
There are various models on the market, but most sold under the same name, JSN-SR04T.

### AJ-SR04M

* Characteristics:
  * Resistor R19 is used to control the behavior
  * 8 MHz Crystal
  * Working Voltage: 3V to 5.5V
* [Datasheet](https://github.com/tomaskovacik/kicad-library/tree/master/library/datasheet/K02-AJ-SR04)

{{< imgproc "aj-sr04m-general.png" Resize 600x >}}
AJ-SR04M: General PCB
{{< />}}

{{< imgproc "aj-sr04m-order-2021-02.png" Resize 600x >}}
AJ-SR04M: Model from collective order in February 2021
{{< />}}


### JSN-SR04T

* Characteristics:
  * Probably no resistor to control the behavior
  * Transverse IC on the connector side
  * 11.0592 MHz Crystal
  * Working Voltage: 5 V
* The datasheet found often cited on Chinese webpages is `JSN-SR04T一体化超声波测距说明书.pdf` ([english translation](jsn-sr04t-en.pdf)).

{{< imgproc "jsn-sr04t-front-1.png" Resize 300x >}}
JSN-SR04T: Front (1)
{{< />}}

{{< imgproc "jsn-sr04t-front-2.png" Resize 300x >}}
JSN-SR04T: Front (2)
{{< />}}

{{< imgproc "jsn-sr04t-back-1.png" Resize 300x >}}
JSN-SR04T: Back (1)
{{< />}}

{{< imgproc "jsn-sr04t-back-2.png" Resize 300x >}}
JSN-SR04T: Back (2)
{{< />}}

### JSN-SR04T-2.0

* Characteristics:
  * Resistor R27 is used to control the behavior
  * 8 MHz Crystal
  * Working Voltage: 3.3V - 5.5V
* [Datasheet](https://www.jahankitshop.com/getattach.aspx?id=4635&Type=Product)

{{< imgproc "jsn-sr04t-2.0.png" Resize 600x >}}
JSN-SR04T-2.0
{{< />}}

### JSN-SR04T-V3.0

* Characteristics:
  * Resistor "mode" and the shorts "M1" and "M2" are used to control the behavior
  * 8 MHz Crystal
  * Working Voltage: 3.3V - 5.5V
* [Documentation](https://de.aliexpress.com/item/32863960886.html)

{{< imgproc "jsn-sr04t-v3.0.png" Resize 600x >}}
JSN-SR04T-v3.0
{{< />}}

### SR04M-2

After some initial testing, it seems this model does not work in the OpenBikeSensor device.

* Characteristics:
  * unknown

{{< imgproc "sr04m-2.png" Resize 600x >}}
SR04M-2
{{< />}}
