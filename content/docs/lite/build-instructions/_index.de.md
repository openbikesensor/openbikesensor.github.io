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
Wir arbeiten noch am OpenBikeSensor Lite. Vor dir hat ihn kaum jemand gelötet, auch die Software ist noch sehr neu. Sicher funktioniert noch nicht alles. Manches kann umständlich sein. Die Bedienungsanleitung ist noch Bruchstückhaft. Toll, dass du es trotzdem probieren willst, wenn du Fehler findest, sag im Forum Bescheid!
{{% /alert %}}

## Vor dem Bauen
Es ist eine gute Idee schon vor dem Bau die Firmware auf den OpenBikeSensor Lite zu flashen.

[hier findest du die Firmware für OpenBikeSensor Lite auf Github](https://github.com/openbikesensor/firmware-lite).
Sie kommt mit einer Kurzanleitung, wie du sie auf den ESP flashen kannst.

## Löten

{{< imgproc "images_lite/lite_parts.jpg" Fit "800x600" >}}
Alle Teile f&uuml;r den OpenBikeSensor Lite.
{{< /imgproc >}}

Die Lötschritte sind so sortiert, dass zunächst die flachen Komponenten verlötet werden.

### Schalterpolarisierung einstellen

{{% alert title="Nur für PCB 0.1.2" color="info" %}}
Dieser Schritt ist nur bei PCB 0.1.2 notwendig. Hast du ein neueres PCB, überspringe diesen Schritt.
{{% /alert %}}


Hast du ein Board der Version 0.1.2, so musst du zunächst mit einem Cuttermesser eine optionale Verbindung auf dem Board durchtrennen, und dann eine Lötbrücke zwischen zwei weiteren Pins herstellen. Der Pin, dessen Verbindung zu seinen beiden Nachbarpins durchtrennt werden muss ist der mit einem Pfeil markierte Pin neben den Lötflöchen für den Platinenstecker für den Button. Wenn du ein Multimeter hast, kannst du nachmessen, ob die Verbindung zwischen den angrenzenden Pads erfolgreich unterbrochen wurde.

Nun müssen die beiden darunter liegenden Pins mit einer Lötbrücke verbunden werden.


{{< slider >}}
  {{< slider-image
    src="images_lite/00_00.jpg"
    alt="Die Platine des OBS Lite" 
    noprint=true >}}
  {{< slider-image
    src="images_lite/00_01.jpg"
    alt="Durchtrenne die Leiterbahn zum oberen Ende des Selektors mit einem Cuttermesser."
    noprint=false >}}
  {{< slider-image
    src="images_lite/00_02.jpg"
    alt="Setze eine Lötbrücke auf die unteren beiden Punkte des Selektors."
    noprint=false >}}
  {{< slider-image
    src="images_lite/00_03.jpg"
    alt="Die fertige Lötbrücke."
    noprint=false >}}
{{< /slider >}}

### Winkelstecker für Taster

Wenn du eine Krimpzange hast, kannst du nun den Winkelstecker für den Taster auf das Board löten. Stecke den Stecker durch das Board, und löte von der Unterseite erst einen Pin, kontrolliere den Sitz, löte dann den zweiten Pin.

{{% alert title="Löten statt Buchse" color="info" %}}
Hast du keine Buchse oder keine Krimpzange, kannst du diesen Schritt auslassen, und später direkt das Kabel des Tasters auf das Board löten. 
{{% /alert %}}


{{< slider >}}
  {{< slider-image
    src="images_lite/01_00.jpg"
    alt="Platinenstecker vor der Verl&ouml;tung" 
    noprint=false >}}
  {{< slider-image
    src="images_lite/01_01.jpg"
    alt="Platinenstecker platziert."
    noprint=false >}}
  {{< slider-image
    src="images_lite/01_02.jpg"
    alt="Platinenstecker erster Pin verlötet, ansicht Unterseite."
    noprint=false >}}
  {{< slider-image
    src="images_lite/01_03.jpg"
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
    src="images_lite/02_00.jpg"
    alt="40er Leiste beim Einkürzen" 
    noprint=false >}}
  {{< slider-image
    src="images_lite/02_01.jpg"
    alt="15er und 4er Leisten."
    noprint=false >}}
  {{< slider-image
    src="images_lite/02_02.jpg"
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
    src="images_lite/03_01.jpg"
    alt="Leisten und ESP" 
    noprint=false >}}
  {{< slider-image
    src="images_lite/03_02.jpg"
    alt="Positionierung der Leisten"
    noprint=false >}}
  {{< slider-image
    src="images_lite/03_02_b.jpg"
    alt="Sind nur 14 Pins verfügbar müssen die Leisten am USB-Ende der Platine gesteckt werden."
    noprint=false >}}
  {{< slider-image
    src="images_lite/03_03.jpg"
    alt="Löte jeweils zuerst die Pins in den Ecken und kontrolliere dann noch mal den richtigen Sitz der Leiste und korrigiere ggf nach, bevor du den Rest lötest."
    noprint=false >}}
  {{< slider-image
    src="images_lite/03_04.jpg"
    alt="So sollte es aussehen, wenn alles richtig verlötet ist. Keine Abstände zwischen Leiste und Board und die Leiste sitzt perfekt senkrecht auf der Platine."
    noprint=false >}}
  {{< slider-image
    src="images_lite/03_05.jpg"
    alt="Zur Kontrolle kannst du kurz den ESP auf die Platine stecken."
    noprint=false >}}
{{< /slider >}}

Ziehe nach dem Löten den ESP ab.

### Buchsenleisten Für Ultraschallboards
Stecke die 4-Pin Buchsenleisten in die Platine. Löte zunächst einen Pin, kontrolliere, dass die Buchsenleiste ordentlich
auf dem Board aufliegt, und löte dann die weiteren Pins.


{{< slider >}}
  {{< slider-image
    src="images_lite/04_00.jpg"
    alt="4er Buchsenleisten gesteckt" 
    noprint=false >}}
  {{< slider-image
    src="images_lite/04_01.jpg"
    alt="Noch ungelötet&hellip;"
    noprint=true >}}
  {{< slider-image
    src="images_lite/04_02.jpg"
    alt="Löte einen Pin für jede der beiden Buchsenleisten, kontrolliere, dass die Buchsenleisten senkrecht stehen und löte dann die verbleibenden Pins. Solange nur ein Pin gelötet ist, kannst du das Lötzinn wieder erhitzen und die Positionierung leicht korrigieren. Löte dann die verbleibenden Pins."
    noprint=true >}}
  {{< slider-image
    src="images_lite/04_03.jpg"
    alt="Falls an der Buchsenleiste noch Überstand ist, ist jetzt eine gute Gelegenheit diesen zu versäubern."
    noprint=false >}}
{{< /slider >}}


### Kabel an Taster
Drücke den Taster in die Lenkerhalterung. Schau dir an, wie die Kontakte im Steckergehäuse zu liegen kommen - Es gibt nur zwei Richtungen, in denen der Taster ins Gehäuse gesteckt werden kann. Löte das Kabel an die beiden näher aneinander liegenden Kontakte. Löte so, dass du das Kabel später gut durch die Ausspaarung im Gehäuse herausführen kannst. Wenn du dich traust kannst du das Kabel gleich im Schaltergehäuse löten. Alternativ kannst du den Taster erst außerhalb des Gehäuses löten, und dann das Kabel durch as Loch ziehen und den Taster ins Gehäuse einklicken.

Stecke zum Schluss die Tasterabdeckung auf den Tasterr


{{< slider >}}
  {{< slider-image
    src="images_lite/05_00.jpg"
    alt="Taster und Lenkerhalterung" 
    noprint=true >}}
  {{< slider-image
    src="images_lite/05_01.jpg"
    alt="Taster in Lenkerhalterung"
    noprint=true >}}
  {{< slider-image
    src="images_lite/05_02.jpg"
    alt="Abisoliertes Koaxkabel, die Schirmung muss noch auf etwa 3-4mm abisoliert werden."
    noprint=false >}}
  {{< slider-image
    src="images_lite/05_03.jpg"
    alt="Verlöten am Stecker"
    noprint=false >}}
  {{< slider-image
    src="images_lite/05_04.jpg"
    alt="Verlötet"
    noprint=false >}}
  {{< slider-image
    src="images_lite/05_05.jpg"
    alt="Im Gehäuse"
    noprint=false >}}
  {{< slider-image
    src="images_lite/05_06.jpg"
    alt="Im Gehäuse von Oben."
    noprint=false >}}
{{< /slider >}}

### Kabel an Platine
{{% alert title="Alternative Bestückung" color="info" %}}
Wenn du oben einen Winkelstecker für den Taster auf die Platine gelötet hast, kannst du diesen Schritt auslassen.
{{% /alert %}}

Löte das Kabel zum Taster in die Löcher die auf der Platine it "Button" markiert sind.

### Buchse an Tasterkabel
{{% alert title="Alternative Bestückung" color="info" %}}
Wenn du oben das Kabel für den Taster auf die Platine gelötet hast, kannst du diesen Schritt auslassen.
{{% /alert %}}
**Nutzt du ein zweiadriges Kabel**: Isoliere etwa 3&thinsp;mm von den Adern eines zweiadrigen Kabels ab, und Krimpe JST-XH Crimpkontakte an die Adern.

**Nutzt du ein Koaxkabel:** hast, isoliere etwa 1.5&thinsp;c der Außenisolierung ab, verdrille die Schirmung und isoliere vom Mittelleiter etwa 3&thinsp;mm ab. Krimpe zwei JST-XH Krimpkontakte auf die Isolierung und den Mittelleiter.

Stecke die Krimpkontakte dann in die Buchse. Die Seite mit den kleinen Häkchen muss auf der Seite der Aussparung im Steckergehäuse zu liegen kommen.

Stecke das Kabel auf den Winkelstecker.

{{< slider >}}
  {{< slider-image
    src="images_lite/06_00.jpg"
    alt="Abisoliertes Kabel und Buchse" 
    noprint=true >}}
  {{< slider-image
    src="images_lite/06_01.jpg"
    alt="Krimpen"
    noprint=true >}}
  {{< slider-image
    src="images_lite/06_02.jpg"
    alt="Kabel mit Crimpkontakten"
    noprint=false >}}
  {{< slider-image
    src="images_lite/06_03.jpg"
    alt="Im Steckergehäuse montiert."
    noprint=false >}}
  {{< slider-image
    src="images_lite/06_04.jpg"
    alt="Gesteckt."
    noprint=false >}}
{{< /slider >}}


## Funktionsprüfung

Du hast jetzt alle Komponenten. Du kannst die Firmware folgendermaßen flashen: 

TODO: wie Firmware flashen / Flashanleitung verallgemeinern.

Nachdem du die aktuelle Firmware auf den ESP geflashed hast, installiere die SimRa App. (TODO: Link zu APK bis Simra Stock das kann) 

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


TODO: Screenshots SimRa App mit Beispieleinstellungen markiert

Alles gut? Dann ist die elektronik fertig und du kannst mit dem Einbau ins Gehäuse beginnen.

## Einbau ins Gehäuse
### Einschmelzen der Gewindeeinsätze
Stelle deinen Lötkolben auf etwa 240 Grad. Platziere einen Gewindeeinsatz mit der glatten Seite nach unten auf dem
Gehäuse und drücke ihn mit der Lötkolbenspitze in das Plastik bis seine Kante glatt mit der Oberfläche abschließt. (wenn
dies Kolbenspitze stumpf genug ist, dass der Kolben nicht unten aus dem einsatz heraus kommt, kannst du den Lötkolben 
von oben in das  Loch des Gewindeeinsatzes stecken, das ermöglicht dir, den Winkel genau zu kontrollieren).

{{< slider >}}
  {{< slider-image
    src="images_lite/07_00.jpg"
    alt="Einschmelzmutter positioniert" 
    noprint=true >}}
  {{< slider-image
    src="images_lite/07_01.jpg"
    alt="Einschmelzen"
    noprint=true >}}
  {{< slider-image
    src="images_lite/07_02.jpg"
    alt="Gehäuse fertig mit Muttern versehen"
    noprint=false >}}
{{< /slider >}}

### Einsetzen der Ultraschallboards
Stecke das erste Ultrachallboard in den OpenBikeSensor Lite. Unten am Gehäuseboden ist eine Vertiefung. In dieser muss
die Oberkante des Boards einrasten. Falls das nicht von allein passiert, kannst du z.B. mit einem Stift nachstochern,
bis es passt.

Wenn das erste Board steckt, wiederhole den Vorgang mit dem zweiten Board. Nun ist es etwas eng. Hilf wieder mit dem
Stift nach bis beide Boards in der Vertiefung stecken. Die Außenseite der Ultraschallsensoren sollte nun flach mit der
Gehäuseoberfläche abschließen.

Wenn beide Boards ordentlich platziert sind, stecke den Abstandhalter so auf die Platinenkante, dass die Pins mittig
in den Ausspaarungen des Abstandshalters zu liegen kommen.

{{< slider >}}
  {{< slider-image
    src="images_lite/08_00.jpg"
    alt="Gehäuse und Ultraschallboards" 
    noprint=true >}}
  {{< slider-image
    src="images_lite/08_01.jpg"
    alt="Erstes Ultraschallboard im Gehäuse"
    noprint=false >}}
  {{< slider-image
    src="images_lite/08_02.jpg"
    alt="Zweites Ultraschallboard im Gehäuse"
    noprint=false >}}
  {{< slider-image
    src="images_lite/08_03.jpg"
    alt="Abstandshalter auf der Unterkante der Ultraschallboards aufgesetzt."
    noprint=false >}}
{{< /slider >}}

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

{{< slider >}}
  {{< slider-image
    src="images_lite/08_10.jpg"
    alt="ESP vorbereitet" 
    noprint=true >}}
  {{< slider-image
    src="images_lite/08_11.jpg"
    alt="ESP aufstecken"
    noprint=false >}}
  {{< slider-image
    src="images_lite/08_12.jpg"
    alt="ESP sitzt im Gehäuse."
    noprint=false >}}
  {{< slider-image
    src="images_lite/08_13.jpg"
    alt="zugeschraubt."
    noprint=true >}}
  {{< slider-image
    src="images_lite/08_14.jpg"
    alt="Zugsicherung mittels Kabelbinder."
    noprint=true >}}
{{< /slider >}}


### Zugsicherung am Taster

Verstopfe das kleine Loch am Taster mit etwas Papier. Füge dann mit einer Heißklebepistole einen Tropfen Heißkleber 
hinzu, so dass das Kabel mit dem Nupsie auf der Rückseite des tasters verbunden wird. 
Mit einem Papier als Abstandshalter kannst du den Heißkleber während er noch warm istzurecht drücken, damit dass er der
Form der Rundung des Tastergehäuses folgt  und das Konstrukt später flach am Lenker anliegt.

{{< slider >}}
  {{< slider-image
    src="images_lite/09_00.jpg"
    alt="Kabel in Endposition im Schaltergehäuse. Beachte: Schalteröffnung mit weißem Papier geschützt." 
    noprint=false >}}
  {{< slider-image
    src="images_lite/09_01.jpg"
    alt="Kabel in Endposition im Schaltergehäuse." 
    noprint=true >}}
  {{< slider-image
    src="images_lite/09_02.jpg"
    alt="Noch flüssiger Heißkleber auf Kabel"
    noprint=false >}}
  {{< slider-image
    src="images_lite/09_03.jpg"
    alt="Mit einem Papier als Schutzschicht kann der Heißkleber in Form gedrückt werden, so dass der Kleber der Lenkerrundung folgt."
    noprint=false >}}
  {{< slider-image
    src="images_lite/09_04.jpg"
    alt="Nach abziehen des Papiers sieht man die finale Form."
    noprint=true >}}
{{< /slider >}}

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

