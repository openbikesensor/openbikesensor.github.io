---
title: Bauanleitung  (OpenBikeSensor Lite 0.1.0)
weight: 50
linkTitle: Bauanleitung
aliases:
- /bauanleitung/lite
- /bauanleitung_lite

description: >
    Sobald der Bausatz für den OpenBikeSensor Lite zusammengestellt ist,
    kann anhand dieser Anleitung der Bau begonnen werden. Der Zusammenbau
    besteht aus etwas Menge Lötarbeit, sowie dem Test der Elektronik und
    dem Einbau in das Gehäuse.
---

{{< print-qr-link >}}

## Löten

Die Lötschritte sind so sortiert, dass zunächst die flachen Komponenten verlötet werden.

### Buchse für Taster

Wenn du eine Krimpzange hast, kannst du nun den Platinesnstecker für den Taster auf das Board löten. Löte erst einen
Pin, kontrolliere den Sitz, löte dann den zweiten Pin.

{{% alert title="Löten statt Buchse" color="info" %}}
Hast du keine Buchse oder keine Krimpzange, kannst du diesen Schritt auslassen, und später direkt das Kabel des 
Tasters auf das Board löten. 
{{% /alert %}}

Bilder TODO:
- Board ohne alles, Buchse daneben
- Buchse auf Board
- Pins der Buchse von unten, eine Seite verlötet
- Buchse + Board fertig verlötet von oben.


### Platine vorbereiten
Auf der Platine gibt es eine optionale Leiterbahn, die für die Version des ESP, die wir verwenden durchtrennt werden
muss. Schneide hierzu mit einem Cuttermesser an der Stelle wie im Bild gezeigt die Leiterbahn durch. Wenn du ein
Multimeter hast, kannst du nachmessen, ob die Verbindung zwischen den angrenzenden Pads erfolgreich unterbrochen wurde.

Bilder TODO:
- Platine mit Stelle zum schneiden markiert,
- Platine mit Cuttermesser an richtiger Stelle
- Platine mit schnitt an richtiger Stelle

### Buchsenleisten Kürzen
Wahrscheinlich hast du 40-Pin lange Buchsenleisten bekommen. Um sie für den OpenBikeSensor Lite verwenden zu können,
schneide mit einem Seitenschneider oder Cuttermesser zwei 15 Pin lange Stücke von der Buchsenleiste ab. Schneide
dazu durch Pin 16. Schneide außerdem zwei 4 Pin lange Stücke ab. Schneide dazu jeweils durch Pin 5. 
{{% alert title="Vorsicht beim Schneiden" color="warning" %}}
Versuche nicht, pins zu sparen indem du die Leiste exakt an der Trennlinie zwischen pin 15 und 16 schneidest. Das
funktioniert nämlich nicht und stattdessen bleiben dir nur 14 nutzbare Pins.
{{% /alert %}}
{{% alert title="Kürzere ESP-Leisten" color="info" %}}
Wenn du insgesamt mit einer
40-pin langen Buchsenleiste auskommen willst, kannst du für den ESP auch 14-Pin lange Buchsenleisten verwenden. In
diesem Fall musst du beim Löten darauf achten, dass die fehlenden Pins der Buchsenleiste auf der vom USB-Port
abgewandten Seite der Platine zu liegen kommen.
{{% /alert %}}

Bilder TODO:
- Buchsenleiste
- Buchsenleiste mit angesetztem Seitenschneider
- 2x 15-Pin Buchsenleiste neben ESP


### Buchsenleisten  FÜr ESP
Stecke die 15-Pin Buchsenleisten auf die Beinchen deines ESP32 und stecke diesen dann auf die OpenBikeSensor Lite
Platine. Löte zunächst die Pins in den Ecken, kontrolliere, dass die Buchsenleiste ordentlich aufsitzt. Löte dann
die verbleibenden Pins ein.

{{% alert title="14-Pin Leisten richtig positionieren" color="warning" %}}
Hast du dich oben für 14-Pin Buchsenleisten entschieden, musst du beim Löten darauf achten, dass die Leiste auf
jeden Fall die Pins am USB-Ende des ESP versorgt. (siehe Bild)
{{% /alert %}}

Bilder TODO:
- Buchsenleiste Auf ESP32 Beinchente
- Alternativbestückung: 14-Pin Buchsenleiste auf ESP-Beinchen (buchsenleiste lässt den AM WEITESETN VOM USB-PORT ENTFERNTEN Pin aus)
- Buchsenleiste ESP mit Buchsenleiste auf Platine
- Platine von unten mit beiden Buchsenleisten gesteckt
- Beim Löten pin 1 von unten
- Abstandskontrolle: Sitzt buchsenleiste ordentlich auf?

Ziehe nach dem Löten den ESP ab.

### Buchsenleisten Für Ultraschallboards
Stecke die 4-Pin Buchsenleisten in die Platine. Löte zunächst einen Pin, kontrolliere, dass die Buchsenleiste ordentlich
auf dem Board aufliegt, und löte dann die weiteren Pins.

Bilder TODO:
- Buchsenleisten auf Platine von oben
- Buchsenleisten auf Platine von unten vorm Löten
- Buchsenleisten auf Platine mit ohne Abstand von oben nach dem Löten

### Kabel an Taster
Drücke den Taster in die Lenkerhalterung. Löte dann von unten das Kabel an den Taster.

Bilder TODO:
- Taster in Lenkerhalterung von oben und unten (evtl. ein bild)
- Kabel an Taster angelötet.

### Kabel an Platine
{{% alert title="Alternative Bestückung" color="info" %}}
Wenn du oben einen Platinenstecker für den Taster auf die Platine gelötet hast, kannst du diesen Schritt auslassen.
{{% /alert %}}

Bilder TODO:
- Platine mit Tasterlöchern unbestückt.
- Platine mit Kabel in Tasteröffnungen.

### Buchse an Tasterkabel
{{% alert title="Alternative Bestückung" color="info" %}}
Wenn du oben das Kabel für den Taster auf die Platine gelötet hast, kannst du diesen Schritt auslassen.
{{% /alert %}}
Krimpe zwei Krimpkontakte auf das Kabel des Tasters und montiere diese im Buchsensteckergehäuse.

Bilder TODO:
- Buchsenstecker
- Kabel mit Krimps
- Kabel mit Krimps in Buchsenstecker



## Funktionsprüfung

Du hast jetzt alle Komponen Du kannst die Firmware folgendermaßen flashen 

TODO: wie Firmware flashen / Flashanleitung verallgemeinern.

Nachdem du die aktuelle Firmware auf den ESP geflashed hast, installiere die SimRa App. (TODO: Link zu APK bis Simra
Stock das kann) 

- Stecke die Ultraschallsensoren und den ESP auf die OpenBikeSensor Lite Platine. Verbinde den Taster mit der Platine.
- Verbinde dein Android-Handy mit der SimRa app mittels eines USB-C-Kabels mit dem ESP.
- Falls sie nicht automatisch startet: Öffne die SimRa App. 
- Aktiviere in den Einstellungen die Nutzung des OBS Lite.
- Öffne die Einstellungen für OBS Lite.
- Stelle deine Lenkerbreite ein.
- Trage die Webadresse deines Portals und deinen API Key in den Einstellungen so ein, wie du sie im Portal angezeigt bekommst.
- Verbinde dich mit OBS Lite
- Prüfe, ob die Abstandswerte, die oben angezeigt werden plausibel erscheinen.
- Drücke auf den Taster. Während der Taster gedrückt ist, sollte eine LED auf dem ESP aufleuchten, ist er nicht mehr 
  gedrückt, verlischt sie.


TODO: Screenshots SimRa app mit beispieleinstellungen markiert

Alles gut? Dann ist die elektronik fertig und du kannst mit dem Einbau ins Gehäuse beginnen.

## Einbau ins Gehäuse
### Einschmelzen der Gewindeeinsätze
Stelle deinen Lötkolben auf etwa 240 Grad. Platziere einen Gewindeeinsatz mit der glatten Seite nach unten auf dem
Gehäuse und drücke ihn mit der Lötkolbenspitze in das Plastik bis seine Kante glatt mit der Oberfläche abschließt. (wenn
dies Kolbenspitze stumpf genug ist, dass der Kolben nicht unten aus dem einsatz heraus kommt, kannst du den Lötkolben 
von oben in das  Loch des Gewindeeinsatzes stecken, das ermöglicht dir, den Winkel genau zu kontrollieren).

TODO Bilder:
- Gehäuse stehend
- Gehäuse stehend, pinzette mit Gewindeeinsatz an Loch
- Gehäuse stehend mit allen Gewinden eingeschmolzen.

### Einsetzen der Ultraschallboards
Stecke das erste Ultrachallboard in den OpenBikeSensor Lite. Unten am Gehäuseboden ist eine Vertiefung. In dieser muss
die Oberkante des Boards einrasten. Falls das nicht von allein passiert, kannst du z.B. mit einem Stift nachstochern,
bis es passt.

Wenn das erste Board steckt, wiederhole den Vorgang mit dem zweiten Board. Nun ist es etwas eng. Hilf wieder mit dem
Stift nach bis beide Boards in der Vertiefung stecken. Die Außenseite der Ultraschallsensoren sollte nun flach mit der
Gehäuseoberfläche abschließen.

Wenn beide Boards ordentlich platziert sind, stecke den Abstandhalter so auf die Platinenkante, dass die Pins mittig
in den Ausspaarungen des Abstandshalters zu liegen kommen.

Todo BILDER:
- Gehäuse + Boards
- Erstes Board im Gehäuse von oben rein fotografiert
- Zweites Board im Gehäuse von oben rein Fotografiert
- Abstandshalter auf korrekt platzierten Boards.

### Einsetzen des PCB mit ESP und Abschlussarbeiten.

- Stecke den Taster an das PCB falls nötig.
- Stecke den ESP wieder auf das PCB, falls er nicht noch dort steckt
- Stecke nun das PCB mit den Sockelleisten für die Ultraschallsensoren nach unten auf das Gehäuse, mit sanftem
  Druck aber ohne Gewalt.
- Der ESP sollte nun ziemlich genau mit der Oberkante des Gehäuses abschließen. Ist das nicht der Fall prüfe
  den Sitz der Ultraschallsensoren.
- Schraube nun den Deckel auf das Gehäuse.
- Stecke ein USB-C-Kabel geeigneter Länge, dass du es am Fahrrad zu deinem handy führen kannst in den ESP.
- Ziehe es zusammen mit dem Kabel für den Taster mit einem Kabelbinder an der Plastiknase für die Zugsicherung fest.


### Zugsicherung am Taster

Verstopfe das kleine Loch am Taster mit etwas Papier. Füge dann mit einer Heißklebepistole einen Tropfen Heißkleber 
hinzu, so dass das Kabel mit dem Nupsie auf der Rückseite des tasters verbunden wird. 
Mit einem Papier als Abstandshalter kannst du den Heißkleber während er noch warm istzurecht drücken, damit dass er der
Form der Rundung  des Tastergehäuses folgt  und das Konstrukt später flach am Lenker anleigt.


### Montage

Setze die Taste auf den Taster. Funktioniert das nicht mit sanftem Druck, kannst du mit eienem Modelliermesser oder
einer Feile den Stempel auf der Unterseite der Taste zurechtschnitzen. Wenn das nicht hilft, empfiehlt es sich, die 
Taste noch mal neu und maßhaltiger zu drucken.


