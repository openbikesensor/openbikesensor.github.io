---
title: Flashen mit platformio
weight: 10
---

Hast du `git` und `python3` installiert, sowie im Fall von Windows ggf den 
[Treiber](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers),
kannst du mit folgenden Kommandos die OpenBikeSensor Firmware bauen und flashen.

## Vorbereiten des Firmwareverzeichnisses:
```
# Git-Repo klonen
git clone https://github.com/openbikesensor/OpenBikeSensorFirmware.git
cd OpenBikeSensorFirmware
# Platformio in einem virtuellen Python Environment installieren
python3 -m venv venv
# unter macos und linux:
venv/bin/pip install platformio
# oder unter windows:
venv\scripts\pip install platformio
```

## Flashen
Nun kannst du den ESP (nicht den OpenBikeSensor) per USB-Kabel mit deinem Rechner verbinden und mit folgendem Kommando die Firmware flashen (je nach Systemkonfiguration benötigst du dafür root-rechte).
Ggf. ist es dafür nötig den **boot**-Knopf am ESP zu drücken.

```
venv/bin/platformio run -t upload
```

oder unter Windows

```
venv\scripts\platformio run -t upload
```

## Nach dem Flashen
Es empfiehlt sich, dich in den [Konfigurationsmodus]({{< ref "/docs/user-guide/configuration">}}) zu begeben, um
- Dein internetfähiges WLAN im OpenBikeSensor zu konfigurieren.
- Das Flashtool zu installieren.
- Noch einmal ein Firmwareupdate aus dem Internet zu installieren.
- Deinen API-Key für Datenuploads einzurichten.
