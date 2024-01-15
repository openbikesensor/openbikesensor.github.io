---
title: "Offline-Visualisierung"
---

Dieser Artikel beschreibt das Vorgehen, um offline, also ohne ein voll
funktionsfähiges Portal, eine Visualisierung bestehender Trackdateien
vorzunehmen.

Dieses Vorgehen ist veraltet. Es funktioniert noch, aber in nächster Zeit wird
mehr Energie in die Weiterentwicklung des Portals gesteckt, da hier durch die
leistungsstärkere Architektur viel mehr Möglichkeiten zur Datenverarbeitung und
Visualisierung bestehen. Dennoch lässt sich mit diesem Vorgehen einiges
erreichen, wenn gerade kein Portal zur Hand ist, oder ein tieferer Einblick
erwünscht ist, als es das stark verarbeitende Portal erlaubt.

Diese Anleitung sollte mit höchstens kleinen Anpassungen auf allen
Linux-Distributionen und unter macOS funktionieren, sofern Python 3.8 oder
höher verfügbar ist. Hat deine Distribution nur ältere Versionen, schau' doch
mal ob
[Anaconda](https://anaconda.org/)/[Conda](https://docs.conda.io/projects/conda/en/latest/index.html)
dir hier aushelfen kann, lokal eine andere Version zu installieren. Prüfe deine
Python-Version vorab mit dem Kommando `python3 -V`.

Dieser Artikel beschreibt nur die Grundlagen, damit auch Anfänger:innen sich
ihre Daten anzeigen können. Weitere Features und Details sind direkt im
Repository
[dokumentiert](https://github.com/openbikesensor/OpenBikeSensor-Scripts/blob/main/docs/obs-face.md).

## Code holen und installieren

Im Terminal am gewünschten Zielort das Git-Repository
[OpenBikeSensor-Scripts](https://github.com/openbikesensor/OpenBikeSensor-Scripts)
clonen:

```bash
git clone https://github.com/openbikesensor/OpenBikeSensor-Scripts obs-scripts
```

Zum Wechseln in das neue Verzeichnis:

```bash
cd obs-scripts
```

Ab sofort müssen alle Kommandos von diesem Verzeichnis aus ausgeführt werden.

Erstellen einer virtuellen Python-Umgebung zur Installation der Abhängigkeiten
und der Kommandozeilentools:

```bash
python3 -m venv env
source env/bin/activate
```

Bitte achte darauf, bei Änderungen am Code das Verzeichnis `env` zu ignorieren
und nicht mit zu committen. Du kannst es auch woanders erstellen (z. B. in
deinem Home-Verzeichnis). Den zweiten Befehl von oben (`source ...`) musst du
jedes Mal ausführen, nachdem du mit einem neuen Terminal in dieses Verzeichnis
wechselst, bevor du die OBS-Skripte nutzen kannst.

Installation des `obs-face` Pakets und dessen Abhängigkeiten:

```bash
pip install -e .
```

Es dauert eine Weile, bis alles installiert ist. Bei Erfolg erscheint
*Successfully installed ...* in einer der letzten Zeilen (evtl. gefolgt von
einer Warnung, die du aber ignorieren kannst), bei Misserfolg eine
Fehlermeldung. Wenn du hier Hilfe brauchst, poste die Fehlermeldung im Forum,
dort gibt es immer Unterstützung.

## Vorbereiten der Dateien

Du brauchst nun geschachtelte Ordner innerhalb des Ordners `obs-scripts`. Diese
erstellst du mit `mkdir` oder `mkdir -p`, oder einfach mit der graphischen
Bedienoberfläche deines Betriebssystems.

Wir benötigen folgende Struktur:

```
data
└── input
    ├── user1
    │   ├── track1.csv
    │   └── track2.csv
    └── user2
        ├── track1.csv
        └── track2.csv
```

Also ein Verzeichnis *data* in *obs-scripts*, darin wiederum ein Verzeichnis
*input*, in welchem für jede:n Benutzer:in ein eigener Ordner liegt, der alle
Tracks enthält. Es ist okay, wenn das nur ein Ordner ist, aber wenn du von
mehreren Personen die Tracks einsammelst, kannst du sie hiermit unterscheiden.

## Datenverarbeitung

Auf der Kommandozeile, mit aktivierter Python-Umgebung, kannst du nun folgendes
ausführen:

```bash
obs-face -ACV
```

Dies dauert eine Weile, denn es werden OpenStreetMap-Daten heruntergeladen, und
dann alle Tracks aus `data/input` eingelesen und verarbeitet. Du kannst die
Ausgabe dieses Kommandos auf Plausibilität prüfen, um zu sehen ob alle deine
Tracks erkannt und eingelesen wurden.

## Visualisierung

Für die folgenden Kommands wechseln wir zunächst ins Unterverzeichnis `visualization`:

```bash
cd visualization
```

Nun erstellen wir einen symbolischen Link zwischen der Ausgabe der Verarbeitung
und dem Visualisierungscode:

```bash
ln -s ../data/visualization json
```

Mit Python starten wir einen kleinen Webserver, der es uns erlaubt, das
Ergebnis im Browser zu sehen:

```
python -m http.server
```

Nun kannst du in deinem Browser eine dieser Seiten besuchen:

* <http://localhost:8000/roads.html>
* <http://localhost:8000/measurements.html>
