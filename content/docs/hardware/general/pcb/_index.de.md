---
title: Platine
weight: 20
---

Ein sehr wichtiger Bestandteil des Gerätes ist die Platine, auch
&bdquo;PCB&rdquo; (englisch _printed circuit board_) genannt. Der schwierige
Teil hieran ist das &bdquo;printed&rdquo; -- ein PCB ist ein professionell
hergestelltes Bauteil das schwierig selbst zu erstellen ist. Hier sind deine
Optionen:

* Das PCB anhand der Designdateien von einem Platinenhersteller anfertigen
  lassen. Je nachdem wo, in welcher Qualität und wie viele Platinen du
  bestellst wird dies erstaunlich wenig bis sehr viel kosten.
* Finde heraus, ob jemensch anders schon Platinen anhand der gleichen Dateien hat herstellen lassen. Eventuell hat er:sie noch
  Exemplare übrig, frag am besten im [Slack]({{< ref "slack" >}}) nach dafür.
* Bastel dir selbst eine Platine, ganz im DIY-Stil. Da unseren Platinen jedoch
  Durchkontaktierungen und beidseitige Leiterbahnen benötigen, ist das
  besonders schwierig. Je nach Ausrüstung und Erfahrung ist es aber machbar.
  Besonders viel günstiger als bestellen ist es allerdings vermutlich nicht.
* Benutze keine Platine. Du kannst einen kompatiblen Sensor ganz ohne Platine
  zusammenbauen, indem du die Komponenten mit Kabeln aneinander lötests.
  Allerdings haben wir hierfür keine Anleitung und das Gehäuse wird auch nicht
  passen. Orientiere dich am Schaltplan, den Rest musst du selbst herausfinden.


## PCB Layout-Parameter

Wenn du dich für einen Hersteller entscheidest, solltest du sicherstellen, dass
folgende Layoutparameter unterstützt sind. In der Regel listet jeder Hersteller
auf der Website diese Informationen auf, und die Minimal- und Maximalgrößen
dürfen nicht unter- bzw. überschritten werden, sonst könnte die Herstellung
fehlschlagen.

Wir verwenden in unseren Designs:

* TODO: Via size, minimum trace width, milling path restrictions

## Gerber-Dateien

TODO: Wo sind die Dateien zu finden?
