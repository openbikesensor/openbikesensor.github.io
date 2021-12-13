---
title: Flashen unter Linux
weight: 10
---

## Vorbereitung

Lade das [neueste
Release-Archiv](https://github.com/openbikesensor/OpenBikeSensorFirmware/releases)
der OBS-Firmware von GitHub herunter.

Du benötigst die größere ZIP-Datei mit dem Namen
`obs-v9.9.9.9999-initial-flash.zip`. Entpacke die Dateien in einen temporären
Ordner, sie heißen `0x??????.bin`. Die Zahlen sind die Basisadresse, an die die
Daten geflasht werden sollen.

Installiere das Programm `esptool`, falls es noch nicht installiert ist. Es ist in den
meisten Linux-Distributionen verfügbar. Für Ubuntu reicht:

```bash
apt install esptool
```

Stelle sicher, dass du den Gerätenamen für das USB-Gerät kennst. Dies ist
normalerweise `/dev/ttyUSB0` -- dies wird auch im Beispiel unten angenommen.

## Flashen

Führe **im selben Verzeichnis**, in das du die ZIP-Datei entpackt hast, folgenden Befehl aus:

```bash
python3 esptool.py \
    --chip esp32 \
    --port /dev/ttyUSB0 \
    --baud 921600 \
    --before default_reset \
    --after hard_reset \
    write_flash -z \
    --flash_mode dio \
    --flash_freq 40m \
    --flash_size detect \
    0x1000 0x01000.bin \
    0x8000 0x08000.bin \
    0xe000 0x0e000.bin \
    0x10000 0x10000.bin
```

**Achtung:** Je nach Distribution ist das Kommando leicht unterschiedlich. Eine dieser Varianten sollte funktionieren:

- `python3 esptool.py ...`
- `python esptool.py ...`
- `esptool.py ...`
- `esptool ...`
- `python3 /absoluter/pfad/zu/esptool.py ...` (Pfad beim Paketmanager recherchieren)
- `python /absoluter/pfad/zu/esptool.py ...` (s. o.)
- `python3 -m esptool ...`
- `python -m esptool ...`

Probiere dich einfach durch.


## Bei Problemen

Wenn du keine Schreibberechtigung hast, kannst du den Dateimodus des Geräts ändern (oder das Kommando als root ausführen):

```bash
sudo chmod 0x777 /dev/ttyUSB0
```

Wenn du öfter mit dem ESP32 arbeitest, installiere dir entsprechende udev-Regeln.

Sollte alles fehlschlagen, und du noch Fragen haben oder weitere Infos suchen, findest
du [in der Community]({{< ref "/community" >}}) immer Hilfe.

