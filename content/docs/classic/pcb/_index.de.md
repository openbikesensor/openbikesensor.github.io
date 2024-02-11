---
title: Platine
weight: 20
aliases:
- /docs/hardware/general/pcb
description: >
    Die Hauptplatine des OpenBikeSensor Classic verbindet alle Module
    und elektronisch Einzelbauteile miteinander. Hier beschreiben wir,
    wie du eine solche Platine bekommst.

---

Ein sehr wichtiger Bestandteil des Gerätes ist die Platine, auch
&bdquo;PCB&rdquo; (englisch _printed circuit board_) genannt. Der schwierige
Teil hieran ist das &bdquo;printed&rdquo; -- ein PCB ist ein professionell
hergestelltes Bauteil, das schwierig selbst zu erstellen ist. Hier sind deine
Optionen:

* Das PCB anhand der Designdateien von einem Platinenhersteller anfertigen
  lassen.
* Finde heraus, ob jemensch anders schon Platinen anhand der gleichen Dateien
  hat herstellen lassen. Eventuell hat er:sie noch Exemplare übrig, frag am
  besten [in der Community]({{< ref "/community" >}}) nach.

Die Gängigen PCB-Hersteller können unsere Platine herstellen, wir haben z.B.
gute Erfahrungen mit [Aisler](aisler.de) (deutscher Hersteller) oder 
[jlcpcb](jlcpcb.com) gemacht.

## Gerber-Dateien

Um deine Platine herstellen zu lassen benötigst du bei den meisten Herstellern
sogenannte Gerber Dateien [^](bei manchen kannst du aber auch die kicad Dateien
hochladen und bestellen). Du lädst die Datei hoch und der Hersteller rechnet
für dich aus was es kostet. Meist ein paar Euro pro Platine, bei großen Mengen
auch weniger als einen Euro.

Die aktuellen Gerber-Dateien findest du im Unterverzeichnis ``generated`` der
jeiweiligen PCB-Version, die auf der Teileliste verlinkt ist.
