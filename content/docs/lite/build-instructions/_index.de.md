---
title: Bauanleitung  (OpenBikeSensor Lite 0.1.2)
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

{{% alert title="Betaversion" color="warning" %}}
Wir haben den OpenBikeSensor Lite gerade erst fertig. Vor dir hat ihn kaum jemand gelötet, auch die Software ist noch sehr neu. Sicher funktioniert noch nicht alles. Manches kann umständlich sein. Toll, dass du es trotzdem probieren willst, wenn du Fehler findest, sag im Forum Bescheid!
{{% /alert %}}

## Löten

{{< imgproc "images_raw/lite_parts.jpg" Fit "800x600" >}}
Alle Teile f&uuml;r den OpenBikeSensor Lite.
{{< /imgproc >}}

Die Lötschritte sind so sortiert, dass zunächst die flachen Komponenten verlötet werden.

### Schalterpolarisierung einstellen
Hast du ein Board der Version 0.1.2, so musst du zunächst mit einem Cuttermesser eine optionale Verbindung auf dem Board durchtrennen, und dann eine Lötbrücke zwischen zwei weiteren Pins herstellen. Der Pin, dessen Verbindung zu seinen beiden Nachbarpins durchtrennt werden muss ist der mit einem Pfeil markierte Pin neben den Lötflöchen für den Platinenstecker für den Button. Wenn du ein Multimeter hast, kannst du nachmessen, ob die Verbindung zwischen den angrenzenden Pads erfolgreich unterbrochen wurde.

Nun müssen die beiden darunter liegenden Pins mit einer Lötbrücke verbunden werden.


{{< slider >}}
  {{< slider-image
    src="images_raw/00_00.jpg"
    alt="Die Platine des OBS Lite" 
    noprint=true >}}
  {{< slider-image
    src="images_raw/00_01.jpg"
    alt="Durchtrenne die Leiterbahn zum oberen Ende des Selektors mit einem Cuttermesser."
    noprint=false >}}
  {{< slider-image
    src="images_raw/00_02.jpg"
    alt="Setze eine Lötbrücke auf die unteren beiden Punkte des Selektors."
    noprint=false >}}
  {{< slider-image
    src="images_raw/00_03.jpg"
    alt="Die fertige Lötbrücke."
    noprint=false >}}
{{< /slider >}}

### Platinenstecker für Taster

Wenn du eine Krimpzange hast, kannst du nun den Platinenstecker für den Taster auf das Board löten. Stecke den Platinenstecker durch das board, und löte von der Unterseite erst einen Pin, kontrolliere den Sitz, löte dann den zweiten Pin.

{{% alert title="Löten statt Buchse" color="info" %}}
Hast du keine Buchse oder keine Krimpzange, kannst du diesen Schritt auslassen, und später direkt das Kabel des Tasters auf das Board löten. 
{{% /alert %}}


{{< slider >}}
  {{< slider-image
    src="images_raw/01_00.jpg"
    alt="Platinenstecker vor der Verl&ouml;tung" 
    noprint=false >}}
  {{< slider-image
    src="images_raw/01_01.jpg"
    alt="Platinenstecker platziert."
    noprint=false >}}
  {{< slider-image
    src="images_raw/01_02.jpg"
    alt="Platinenstecker erster Pin verlötet, ansicht Unterseite."
    noprint=false >}}
  {{< slider-image
    src="images_raw/01_03.jpg"
    alt="Platinenstecker beide Pins verlötet, ansicht Oberseite."
    noprint=true >}}
{{< /slider >}}



### Buchsenleisten kürzen
Wahrscheinlich hast du 40-Pin lange Buchsenleisten bekommen. Um sie für den OpenBikeSensor Lite verwenden zu können, schneide mit einem Seitenschneider oder Cuttermesser zwei 15 Pin lange Stücke von der Buchsenleiste ab. Schneide dazu durch Pin 16. Schneide außerdem zwei 4 Pin lange Stücke ab. Schneide dazu jeweils durch Pin 5. Versäubere die Schnittkanten der Vierer-Leisten indem du die überstehenden Kanten vom Einkürzen bündig abschneidest, so dass keine Überstehenden Kanten mehr da sind. Die 4er Leisten passen dann mit ordentlich Spiel zwischen die Arme des Ultraschallboardpositionierers passen.

{{% alert title="Vorsicht beim Schneiden" color="warning" %}}
Versuche nicht, pins zu sparen, indem du die Leiste exakt an der Trennlinie zwischen pin 15 und 16 schneidest. Das funktioniert nämlich nicht und stattdessen zerstörst du zwei Pins.
{{% /alert %}}

{{% alert title="Kürzere ESP-Leisten" color="info" %}}
Wenn du insgesamt mit einer 40 Pin langen Buchsenleiste auskommen willst, kannst du für den ESP auch 14-Pin lange Buchsenleisten verwenden. In diesem Fall musst du beim Löten darauf achten, dass die fehlenden Pins der Buchsenleiste auf der vom USB-Port abgewandten Seite der Platine zu liegen kommen.
{{% /alert %}}

{{< slider >}}
  {{< slider-image
    src="images_raw/02_00.jpg"
    alt="40er Leiste beim Einkürzen" 
    noprint=false >}}
  {{< slider-image
    src="images_raw/02_01.jpg"
    alt="15er und 4er Leisten."
    noprint=false >}}
  {{< slider-image
    src="images_raw/02_02.jpg"
    alt="die 4x Leisten müssen mit ordentlich Spiel zwischen die Arme des Ultraschallpositionierers passen. Schneide die überstehenden reste vom Einkürzen bündig ab."
    noprint=false >}}
{{< /slider >}}


### Buchsenleisten für ESP verlöten
Stecke die 15-Pin Buchsenleisten auf die OpenBikeSensor Lite Platine. Löte zunächst die Pins in den Ecken, kontrolliere, dass die Buchsenleiste ordentlich aufsitzt. Löte dann die verbleibenden Pins ein.

{{% alert title="14-Pin Leisten richtig positionieren" color="warning" %}}
Hast du dich oben für 14-Pin Buchsenleisten entschieden, musst du beim Löten darauf achten, dass die Leiste auf jeden Fall die Pins am USB-Ende des ESP versorgt. (siehe Bild)
{{% /alert %}}

{{< slider >}}
  {{< slider-image
    src="images_raw/03_01.jpg"
    alt="Leisten und ESP" 
    noprint=false >}}
  {{< slider-image
    src="images_raw/03_02.jpg"
    alt="Positionierung der Leisten"
    noprint=false >}}
  {{< slider-image
    src="images_raw/03_02_b.jpg"
    alt="Sind nur 14 Pins verfügbar müssen die Leisten am USB-Ende der Platine gesteckt werden."
    noprint=false >}}
  {{< slider-image
    src="images_raw/03_03.jpg"
    alt="Löte jeweils zuerst die Pins in den Ecken und kontrolliere dann noch mal den richtigen Sitz der Leiste und korrigiere ggf nach, bevor du den Rest lötest."
    noprint=false >}}
  {{< slider-image
    src="images_raw/03_04.jpg"
    alt="So sollte es aussehen, wenn alles richtig verlötet ist. Keine Abstände zwischen Leiste und Board und die Leiste sitzt perfekt senkrecht auf der Platine."
    noprint=false >}}
  {{< slider-image
    src="images_raw/03_05.jpg"
    alt="Zur Kontrolle kannst du kurz den ESP auf die Platine stecken."
    noprint=false >}}
{{< /slider >}}

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


### Taste auf Taster

Setze die Taste auf den Taster. Funktioniert das nicht mit sanftem Druck, kannst du mit eienem Modelliermesser oder
einer feinen Feile den Stempel auf der Unterseite der Taste zurechtschnitzen. Wenn das nicht hilft, empfiehlt es sich, die 
Taste noch mal neu und maßhaltiger zu drucken.

## Montage am Rad
Bilder sagen mehr als worte:

Todo Bilder:
- OBS Lite an Sattelstütze
- Handy mit SimRa und Taster am Lenker

Weiteres...

