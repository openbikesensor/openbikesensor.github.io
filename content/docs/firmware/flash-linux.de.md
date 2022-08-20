---
title: Flashen unter Linux
weight: 10
---

## Vorbereitung

Lade das [neueste Release-Archiv](https://github.com/openbikesensor/OpenBikeSensorFirmware/releases) 
der OBS-Firmware von GitHub herunter.

Du benötigst die ZIP-Datei mit dem Namen `obs-v9.9.9.9999-initial-flash.zip` (`v9.9.9.9999` steht für die Versionsnummer).
Entpacke die Dateien in einem temporären Verzeichnis, sie heißen `0x??????.bin`. Die Zahlen sind die Basisadresse, an die
die Daten geflasht werden sollen.

## Installation

Installiere das Programm `esptool`, falls es noch nicht installiert ist. Es ist in den
meisten Linux-Distributionen verfügbar.

### Debian GNU/Linux, Ubuntu

und davon abgeleitete Distributionen, wie z.&nbsp;B. Linux Mint

```shell
sudo apt install esptool
```

### Fedora

```shell
sudo dnf install esptool
```

## Alternative Installation

Sollte Deine Linux Distribution dieses Paket nicht enthalten, dann kannst du versuchen es so zu installieren.
- lege ein Verzeichnis an, in dem das Tool installiert werden soll, und wechsle in dieses Verzeichnis
```shell
mkdir ~/esptool
cd ~/esptool
```
- für die Installation gib nacheinander folgende Befehle ein
```shell
python3 -m venv venv
. venv/bin/activate
pip install esptool
```
- nun lass dir die Version anzeigen
```shell
esptool.py version
```
- war die Installation erfolgreich, dann wird die Versionsnummer angezeigt (diese kann bei dir abweichend sein)
```shell
esptool.py v3.2
3.2
```

## Gerätenamen herausfinden

Stelle sicher, dass du den Gerätenamen für das USB-Gerät kennst. Sehr wahrscheinlich wird es `/dev/ttyUSB0` sein --
dieser Name wird auch im weiteren Beispiel verwendet.

Herausfinden kannst du den Namen mit folgenden Schritten:
- den OpenBikeSensor noch nicht mit dem Computer verbinden
- in einem Terminal eingeben und ausführen
```shell
ls -1d /dev/ttyUSB*
```
- wenn kein solches USB-Gerät an deinem Computer angeschlossen ist, wird ein Fehler angezeigt, anderenfalls eine Liste
der vorhandenen `/dev/ttyUSB` Geräte, z.&nbsp;B.
```shell
/dev/ttyUSB0
/dev/ttyUSB1
```
- nun den OpenBikeSensor anschließen, einige Sekunden warten und nochmal im Terminal eingeben und ausführen
```shell
ls -1d /dev/ttyUSB*
```
- nun sollte in der Liste der Geräte ein Eintrag dazugekommen sein, dies ist der Gerätename für deinen OpenBikeSensor
```shell
/dev/ttyUSB0
/dev/ttyUSB1
/dev/ttyUSB2  <-- neu hinzugekommen
```


## Flashen

Führe **im selben Verzeichnis**, in das du die ZIP-Datei entpackt hast, folgenden Befehl aus:

{{% alert title="Achtung" color="warning" %}}
Ersetze `/dev/ttyUSB0` mit dem Gerätenamen den du im vorherigen Schritt ermittelt hast.
{{% /alert %}}

```shell
esptool \
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

{{% alert title="Achtung" color="warning" %}}
Hast du die alternative Installationsanleitung verwendet, dann musst du eventuell zuvor noch folgende Schritte ausführen.
{{% /alert %}}


```shell
cd ~/esptool
. venv/bin/activate
```
Und das Kommando `esptool` durch `esptool.py` ersetzen.

{{% alert title="Achtung" color="warning" %}}
Erscheint eine Fehlermldung (sinngemäß) `bash: esptool: command not found`, dann ersetze im obigen Kommando `esptool` durch `esptool.py`. 
Hilft das nicht, dann versuche einen der folgenden Aufrufe.
{{% /alert %}}



- `python3 esptool.py ...`
- `python esptool.py ...`
- `python3 /absoluter/pfad/zu/esptool.py ...` (Pfad beim Paketmanager recherchieren)
- `python /absoluter/pfad/zu/esptool.py ...` (s. o.)
- `python3 -m esptool ...`
- `python -m esptool ...`

Führt auch keiner dieser Aufrufe zum Erfolg, melde dich im Forum (https://forum.openbikesensor.org), wir finden gemeinsam eine Lösung.


## Versionsupdates

Versionsupdates können in weiterer Folge über die Weboberfläche des OpenBikeSensors erfolgen und nicht mehr durch den oben angeführten, doch recht komplizierten Vorgang.

Jetzt ist dein OpenBikeSensor einsatzbereit und du kannst mit der [Basiskonfiguration](https://openbikesensor.org/docs/user-guide/configuration/minimal/) fortfahren!


## Bei Problemen

Wenn du keine Schreibberechtigung hast, kannst du den Dateimodus des Geräts ändern (oder das Kommando als root ausführen):

```shell
sudo chmod 0x666 /dev/ttyUSB0
```

Wenn du öfter mit dem ESP32 arbeitest, installiere dir entsprechende udev-Regeln.

Sollte alles fehlschlagen, und du noch Fragen haben oder weitere Infos suchen, findest
du [in der Community]({{< ref "/community" >}}) immer Hilfe.
