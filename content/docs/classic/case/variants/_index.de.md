---
title: Gehäusevarianten
linkTitle: Varianten
weight: 50
---


## Top Rider / Back Rider 

Das Hauptgehäuse kann als "Top Rider" oder "Back Rider" konfiguriert werden,
oder beides gleichzeitig. Dies definiert, welche Montagepunkte verfügbar sind.

Ein "Top Rider" Hauptgehäuse hat den Montagepunkt unten (wenn am Rad montiert),
wohingegen ein "Back Rider" ihn vorn hat. Alte Modelle des OpenBikeSensors
waren somit alle "Back Rider", denn sie wurden immer an der Sattelstütze
montiert, horizontal dahinter hängend.

Da viele Radfahrende ihre Räder so einstellen, dass hier nicht genug Platz für
einen OpenBikeSensor bleibt, wurde die Variante "Top Rider" mit entsprechenden
Halterungen eingeführt. Top Rider OBS sitzen auf dem Oberrohr, dem
Gepäckträger, oder überall wo unter ihnen Platz für eine Halterung ist. Der
nach unten zeigende Montagepunkt macht das wesentlich stabiler als eine
Halterung, die "um die Ecke" gehen muss, um eine Schiene anzubieten, die nach
hinten zeigt.

{{< imgproc "back-rider-top-rider.jpg" Resize 600x >}}
  Die Montagepunkte am Hauptgehäuse.
{{< /imgproc >}}

Ein Gehäuse kann sowohl Top Rider als auch Back Rider gleichzeitig sein. Auf
jeden der Montagepunkte passt der `StandardMountAdapter` (siehe
[Gehäusebauteile]({{< relref "../parts" >}})). Ein ungenutzter Montagepunkt
sollte mit dem `AttachmentCover` abgedeckt werden, um das Loch zu schließen.

Die Parametrierung erfolgt über die OpenSCAD-Variablen

```
MainCase_back_rider
MainCase_top_rider
MainCase_back_rider_cable
MainCase_top_rider_cable
```

Ein Adapter (`Mounting/BackRiderTopRiderAdapter`) ist verfügbar für (ältere)
Geräte, die nur Back Rider sind, aber auf einer Top Rider Halterung angebracht
werden sollen. Das Gegenteil davon haben wir (noch) nicht entworfen.

## OpenSCAD Schnellstart

OpenSCAD ermöglicht die parametrische Erstellung von 3D-Modellen mit Code. Den
Code haben wir geschrieben, die Parameter kannst du ändern. Damit gibt es jede
Menge Anpassungsmöglichkeiten für jeden Anwendungsfall.

{{% alert title="Mitdenken erforderlich" color="warning" %}}
Bitte bedenke, dass nicht jeder Wert für jeden Parameter sinnvoll ist, und wir
nicht alle möglichen Werte testen können. Wenn du also das Gehäuse anpasst,
dann prüfe zunächst, ob die generierten Bauteile deinen Anforderungen
entsprechen und vor allem, ob sie Fehler enthalten. Es ist immer ärgerlich,
dies erst nach einigen Stunden 3D-Druck festzustellen.
{{% /alert %}}

Die STL-Dateien werden anhand der SCAD-Dateien erzeugt, die alle im
[GitHub-Repository](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase)
liegen. Am besten benutzt du `git`, um dir eine Kopie herunterzuladen
(*clone*), dann kannst du die Parameter ändern:

```console
git clone --recurse-submodules https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase
cd OpenBikeSensor3dPrintableCase
```

Jetzt kannst du die Datei `variables.scad` anpassen und deine gewünschten Werte
setzen (z. B. `MainCase_back_rider`, siehe oben).

Die einzelnen Bauteile aus dem Ordner `src/` kannst du dann mit dem Programm
OpenSCAD (das du direkt von [seiner Website
herunterladen](https://openscad.org/downloads.html) oder mit deinem
Paketmanager installieren kannst) anschauen. Einzelne Bauteile kannst du darin
auch rendern (F6) und danach als STL exportieren (F7).

Wenn du alle Teile neu generieren möchtest, kannst du auch in deinem Terminal
`make` eingeben. Dies erzeugt alle geänderten Bauteile neu. Möchtest du alle
neu erstellen, hilft vorher ein `make clean`. Diese Bauteile werden dann nach
`export/...` exportiert und überschreiben die dort vorhandenen STL-Dateien. Es
dauert jedoch eine Weile die ganzen Geometrien zu berechnen, erwarte etwa 2-20
Minuten, je nachdem wie schnell dein Rechner ist. 
