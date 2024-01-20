---
title: Flashen unter macOS
weight: 12
---

## Installation via Browser
Der einfachste Weg, deinen OpenBikeSensor zu flashen, ist den [Web-Installer](https://install.openbikesensor.org) in Google Chrome zu öffnen und der Schritt-Für-Schritt anleitung dort zu folgen.
Funktioniert das für dich nicht, folge den Schritten unten.

## Vorbereitung

Lade das [neueste
Release-Archiv](https://github.com/openbikesensor/OpenBikeSensorFirmware/releases)
der OBS-Firmware von GitHub herunter.

Du benötigst die größere ZIP-Datei mit dem Namen
`obs-v9.9.9.9999-initial-flash.zip`. Entpacke die Dateien in einen temporären
Ordner, sie heißen `0x??????.bin`. Die Zahlen sind die Basisadresse, an die die
Daten geflasht werden sollen.

Installiere das Programm `esptool`, falls es noch nicht installiert ist. Über
Homebrew kannst du es so bekommen:

```bash
brew install esptool
```

Stelle sicher, dass du den Gerätenamen für das USB-Gerät kennst. Dies ist
normalerweise `/dev/tty.usbserial-0001` -- dies wird auch im Beispiel unten
angenommen. Auf macOS kannst du deine aktuellen USB-Geräte mit `ioreg -p IOUSB
-w0 -l` auflisten. Suche im Zweifelsfall nach einem USB-zu-UART-USB-Gerät.

## Flashen

Führe **im selben Verzeichnis**, in das du die ZIP-Datei entpackt hast, folgenden Befehl aus:

```bash
esptool.py \
    --chip esp32 \
    --port /dev/tty.usbserial-0001 \
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


## Bei Problemen

Wenn du keine Schreibberechtigung hast, kannst du den Dateimodus des Geräts
ändern (oder das Kommando als root ausführen):

```bash
sudo chmod 0x777 /dev/tty.usbserial-0001
```

Sollte alles fehlschlagen, und du noch Fragen haben oder weitere Informationen suchen, findest
du [in der Community]({{< ref "/community" >}}) immer Hilfe.
