This page describes the parts that need to be ordered or otherwise organized 
to assemble a device. Please read it carefully, and also the "Notes" section 
because, for some parts, you have to be careful to ensure you get the right one.

Some links may break in the future. We will try to find new ones and link to
sellers with whom we have had good experiences.

Of course, this list may be incorrect or outdated. Please compare the design 
files (PCB, schematic, case design, ...) with your order to see if there are 
any differences. This is especially important if you want to buy larger 
quantities (e.g., for collective orders) or if the components are delivered 
from China and have long delivery times. You should double-check everything.

## Notes

* **ESP32 Development Board**: There are several different versions of this 
  module. You need the version with 30 pins. This is often sold under the 
  name "ESP32 DEVKIT v1".

* **SD card**: Cheap SD cards have often caused problems. It's better to 
  choose a recognized brand.

* **GPS module**: It's better to choose the version with a larger antenna
  ([Link1](https://de.aliexpress.com/item/1550843440.html),
  [Link2](https://de.aliexpress.com/item/1005001635722164.html)). The 
  antennas have different quality and cable lengths. If you need a 
  replacement, there are also cheap resellers in Germany.

* **Display cable**: Here, it is important that you buy a high-quality 
  LifY11Y cable, or the display connection could suffer and work unreliably. 
  Two meters is enough to cover larger bikes and give you enough room to 
  ensure you have a few extra tries to get the crimping right. Cat5 or Cat6 
  network cables could also work electronically, but they are not as 
  flexible and do not feel as good.

* **JSN-SR04T**: Here, you have to pay attention to the version. There are 
  many variants, many of which do not work. We have documented [on this page]
  ({{ ref . "/docs/hardware/general/collective-order" }}) which ones we have 
  found and how well each one works.

* Some components can be bought in larger **quantities** at much lower 
  **prices**. Forming collective orders can save you a lot of money!

* It's not a bad idea to order a few more of the especially cheap parts as 
  **spares** in case something gets lost or broken (resistors, screws and 
  nuts, crimp contacts, cables and stranded wire, etc.)

* **Cases** need to be [3D printed in PETG]({{ ref . 
  "/docs/hardware/general/case" }}). There are many versions for different 
  purposes and by different people. The community actively maintains a 
  specific case for each PCB version.
  Have a look at the [case repository](https://github.
  com/openbikesensor/OpenBikeSensor3dPrintableCase) on Github. You can print 
  an enclosure yourself, ask other community members to do it, or order 
  ready-made prints using the design files and a 3D printing service (but 
  this is usually relatively expensive).

* **PCB**: You need a PCB of the appropriate version, specially [made from 
  the design files made]({{ ref . "/docs/hardware/general/pcb" }}). It is 
  also a good idea to order this in large quantities as the price drops 
  significantly when ordered in bulk. Be sure to ask in Slack if anyone has 
  any in stock before you have new ones made!