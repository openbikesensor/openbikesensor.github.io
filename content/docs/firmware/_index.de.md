---
title: Firmware
weight: 60
aliases:
- /flash
---

Firmware ist die Bezeichung für Software, die auf eingebetteten Systemen wie
dem ESP32 und anderen Mikroprozessoren läuft, und dort für die Funktionalität
der Hardware verantwortlich ist. Beim OpenBikeSensor ist dies also ein Programm
das wir selbst schreiben, mit dem der ESP32 bespielt wird, und das sich um die
Aufzeichnung der zu messenden Daten, die Anzeige im Display und die ganze
Konfigurationsoberfläche kümmert.

Die Firmware wird, wie alle Softwareteile, unter Open Source Lizenz auf GitHub
entwickelt: <https://github.com/openbikesensor/OpenBikeSensorFirmware>. Für die
Weiterentwicklung sind alle eingeladen, die sich für
Mikroprozessorprogrammierung interessieren.

Featurewünsche oder Fehlerberichte sammeln wir im [Issue
Tracker](https://github.com/openbikesensor/OpenBikeSensorFirmware/issues) auf
GitHub.

## Installation / Flashen

Ein etwas komplizierter Schritt beim Aufbau des Sensors, den alle Bastler:innen
mindestens einmal mit ihrem neuen Gerät durchlaufen müssen, ist die initiale
Installation der Firmware auf dem ESP32. Dies wird auch als "Flashen" (engl.
*to flash*) bezeichnet.

Hierfür muss das Mikroprozessor-Board aus dem OpenBikeSensor ausgebaut und mit
einem USB-Kabel an einen Computer angeschlossen werden. Die Anleitungen für das
Übertragen der Firmware auf den Mikroprozessor unterscheidet sich stark nach
Betriebssystem des Computers, daher haben wir sie hier getrennt aufgeführt:

* [Linux]({{< relref "flash-linux" >}})
* [Windows]({{< relref "flash-windows" >}})
* [macOS]({{< relref "flash-macos" >}})

## Versionsupgrade

Eine neue Version der Firmware kann direkt über die Bedienoberfläche
eingespielt werden. Hierfür gibt es entsprechende Menüpunkte im Hauptmenü. Ein
Auseinanderbauen des Geräts und der Anschluss an einen Computer sind dafür
nicht mehr nötig.

## Bauen und Flashen der Firmware aus dem gihub-Repository

### mit VisualStudio Code und PlatformIO

Zunächst [VS Code](https://code.visualstudio.com/) und darin die Erweiterung [PlatformIO](https://platformio.org/)
installieren. 

Danach den gewünschten Stand der OBS-Firmware aus dem [github-Repository](https://github.com/openbikesensor/OpenBikeSensorFirmware) klonen und das Verzeichnis in VS Code öffnen. Dann mit dem Upload-Befehl (Pfeil nach rechts in der Fußzeile von VS Code) oder per `pio run -t upload` in der PlatformIO CLI auf den ESP32 flashen.

