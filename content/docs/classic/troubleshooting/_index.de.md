---
title: Fehlersuche
weight: 102
description: >
    Dieser Bereich enthält Anleitungen und Links zu Informationen, die bei
    bekannten Schwierigkeiten und Problemen Abhilfe schaffen könnten. 
    
---

Solltest du einem Problem begegnen, das hier noch nicht aufgeführt ist, könnte
eine [Suche im Forum](https://forum.openbikesensor.org/search) helfen. Findest
du auch dort nichts, ist die [Kategorie *Hilfe &
Support*](https://forum.openbikesensor.org/c/support/10) der richtige Ort, eine
Frage zu stellen und Unterstützung zu bekommen.

## Displaymeldung SD Error
Es wird eine SD-Karte im Format FAT32 benötigt - Neuere SD-Karten kommen manchmal mit dem exFAT Dateisystem und müssen entsprechend umformatiert werden - unter Windows: Rechtsklick->Formatieren.

Sind mehrere OpenBikeSensoren zur Hand, kann eine SD-Karte aus einem funktionierenden Sensor zum Testen verwendet werden - Funktioniert ein OpenBikeSensor auch mit der als funktionierend bekannten SD-Karte nicht, gibt es ein Problem mit dem SD-Karten Board oder dessen Verlötung. Funktioniert es mit der SD-Karte des anderen OpenBikeSensors, gibt es ein Problem mit der SD-Karte.

Konnte die SD-Karte als Fehlerquelle ausgeschlossen werden, sollten die Lötstellen des SD-Boards (und die korresppondierenden Lötstellen an der ESP32 Sockelleiste) geprüft werden. Die Datenleitungen SD_CD/CS, SD_CLK/CLK, SD_DAT0/MISO und SD_CMD/MOSI liegen auf den Pins am ESP, die mit D5,D18,D19 und D23 beschriftet sind und können mit einem Multimeter durchgepiepst werden. 

In manchen Fällen kann es auch vorkommen, dass eine SD-Karte verwendet wird, die den alten SD-Standard nicht unterstützt, der vom OpenBikeSensor genutzt wird. Liegt keine "als funktionierend bekannte" SD-Karte vor, kann man das am einfachsten durch Einsatz einer möglichst alten (aber noch funktionierenden) SD-Karte prüfen, - z.B. aus einem alten Handy, MP3-Player, Raspberry Pi..., da ältere SD-Karten den Standard mith höherer Wahrscheinlichkeit unterstützen. Die SD-Karte muss natürlich auch FAT32 formatiert werden, um vom OpenBikeSensor genutzt zu werden.


## GPS

* [Allgemeines Troubleshooting zum GPS-Empfang](https://forum.openbikesensor.org/t/wiki-gps-troubleshooting-fehlersuche/170)
  - Funktionsbeschreibung
  - Übliche Fehlerbilder und Abhilfe
  - Anleitung für den "GPS 3V7 Umbau"
* [Anleitung: Austausch des GPS-Antennenkabels](https://forum.openbikesensor.org/t/wiki-austausch-des-koaxkabels-an-der-gps-antenne/281)
* [Anleitung: Test des GPS-Moduls über UART](https://forum.openbikesensor.org/t/wiki-gps-module-mittels-eines-uart-testen/327)

Denke daran, dass das GPS Modul nur ein paar Euro kostet - im Notfall ist ein Tausch des GPS-Moduls also kein finanzieller Beinbruch.

## Ultraschallsensoren
### Phantommessungen
Wenn die Kabel falsch herum gekrimpt sind, kommt es oft zu Störugen  am Ultraschallsensor - diese äußern sich durch häufige Messwerte auch wenn gar kein Objekt Ultraschall reflektieren kann.

**Mögliche Ursachen:**
- Bei den Kabeln der Ultraschallsensoren sollte die Schirmung auf dem Pin des Ultraschallboards liegen, der weiter entfernt von dem großen viereckigen Metallbauteil liegt. Bei manchen Boards ist dieser auch mit "-" beschriftet.
- Wenn Batterie - oder Schalterkabel große Leiterschleifen in der Nähe der Sensorboards bilden, kommt es oft zu Störungen der Ultraschallsensoren. Verdrille Batterie- und Schalterkabel, um diese Leiterschleifen zu vermeiden.

### Keine Messung
- Werden keine Ultraschallmesswerte angezeigt, auch wenn z.B. gegen eine Wand gemessen wird gibt es mehrere mögliche Ursachen:
  - Bei Fehlern beim Krimpen haben die Sensoren manchmal keinen Kontakt am Krimp, neu Krimpen kann hier helfen. 
  - Bei Fehlern beim Verlöten des Ultraschallboards ist ggf das gesamte Board nicht aktiv (Lötstellen Prüfen)
  - Wenn nur ein Ultraschallsensor funktioniert, lässt sich durch tausch der Transducer prüfen, ob der Fehler durch das Ultraschallboard verursacht wird (Der Fehler bleibt auf der gleichen Seite) oder durch den Ultraschallsensor selbst (der Fehler wandert mit dem Ultraschallsensor auf die andere Seite).

Falls die oberen beiden Ursachen ausgeschlossen werden können hilft manchmal die  [Anleitung zur Kalibrierung](https://forum.openbikesensor.org/t/probleme-mit-dem-ultraschallsensor-nach-kuerzen-des-kabels/651/7)
