---
title: Bauanleitung  (OpenBikeSensor Classic)
weight: 50
linkTitle: Bauanleitung
aliases:
- /bauanleitung/classic
- /bauanleitung
- /bauanleitung/v00.03.12
- /docs/hardware/v00.03.12/build-instructions
description: >
    Sobald der Bausatz für den OpenBikeSensor Classic zusammengestellt ist,
    kann anhand dieser Anleitung der Bau begonnen werden. Dies besteht aus
    einer Menge Lötarbeit, sowie dem Test der Elektronik und dem Einbau in das
    Gehäuse.

---

{{< print-qr-link >}}

{{% alert title="Achtung: Veraltete Bilder" color="warning" %}}
Die Bilder sind noch nicht angepasst für diese Version. Sollte etwas bei dir
anders aussehen, beachte vor allem die Texte.
{{% /alert %}}

Dies ist die Anleitung zum Aufbau des OpenBikeSensor Classic. Die aktuelle
Version dieser Bauanleitung setzt die Hauptplatine der Version 1.0.0
voraus, sowie die Verwendung der auf dieser Website dokumentierten
Bau- und Gehäuseteile.

Die beschriebene Vorgehensweise ist nur eine Möglichkeit, zu einem
funktionierenden Modell zu kommen. Wenn du alternative Wege gehen möchtest,
kannst du das natürlich tun. Solltest du einen massentauglichen besseren oder
einfacheren Weg für einen der Schritte finden, freuen wir uns über
[Änderungsvorschläge](https://github.com/openbikesensor/openbikesensor.github.io/pulls)
oder eine kurze [Nachricht]({{< relref "/community" >}}).

{{< imgproc "v00.03.12/19_Assembly/DSC08101.JPG" Fit "800x600" >}}
Ein fertig gebauter OpenBikeSensor der Version 1.0.0
{{< /imgproc >}}

## Voraussetzungen und Hinweise

Achtung, bitte lies die folgenden Hinweise gut durch, bevor du mit dem Aufbau
anfängst.

- Diese Anleitung setzt voraus, dass die Grundtechniken wie Löten, das
  Abisolieren von Kabeln und das Crimpen von JST-Verbindern bereits bekannt
  sind. Für letztere empfehlen wir das
  [JST-Crimp-Tutorial](https://www.youtube.com/watch?v=jHfYzrSF4pY), auch für
  die anderen Techniken findest du Anleitungen und Tipps im Internet.

- Gehe bewusst und gewissenhaft mit deinen Werkzeugen um. An scharfen
  Werkzeugen wie einem Cuttermesser oder einem Seitenschneider kannst du dich
  schneiden. Das vordere Ende des Lötkolbens kann bis zu 450°C heiß werden.
  Berühre daher immer nur das dafür vorgesehen Griffstück. Sollte er dir
  wegrutschen oder herunterfallen weiche daher lieber aus, anstatt ihn
  aufzufangen.

- Die Dämpfe, die beim Löten durch das Verbrennen des Flussmittels (Flux)
  entstehen, können gesundheitsschädlich sein. Atme sie daher nicht direkt ein.
  Du hast bei dir daheim oder in deinem Makerspace eine Lötdampfabsaugung? Dann
  nutze sie! Gerade bleifreies Lötzinn enthält mehr Flussmittel und ist daher
  während des Lötens auch deutlich gesundheitsschädlicher. Solltest du keine
  Absaugung haben ist daher bleihaltiges Zinn empfehlenswerter. Dieses solltest
  du allerdings wiederum nicht in den Mund nehmen und dir nach dem Löten die
  Hände waschen.

- Bei einem der Bauteile handelt es sich um eine LiPo[^1]-Batterie. Diese
  Batterien sind zwar heute weit verbreitet, können allerdings bei falscher
  Handhabung in Brand geraten. Solltest du nicht vertraut mit LiPos oder dir
  noch unsicher sein, lies bitte den Abschnitt in der Anleitung zur Vorbereitung und zum Umgang mit den Akkus
  sehr aufmerksam. Außerdem empfehlen wir, die Zelle aus einer
  vertrauenswürdigen Quelle zu beschaffen und nicht die billigste Zelle aus
  China zu bestellen.

- Es handelt sich beim OpenBikeSensor um ein frei verfügbares Design, und nicht
  um ein fertiges Gerät. Alles, was wir dir mit den Bauteillisten,
  Schaltungsentwürfen und Anleitungen zeigen, sind Vorschläge und kann Fehler
  enthalten. Bist du dir an einer Stelle nicht sicher oder du glaubst einen
  Fehler gefunden zu haben, dann melde dich in der [Community]({{<
  relref "/community" >}}). Außerdem sind wir nicht für Fehler verantwortlich
  die du während des Aufbaus machst. Sollte etwas schief gehen und du brauchst
  Hilfe kannst du dich natürlich trotzdem an uns wenden.


## Buchsenleisten

Stecke die Buchsenleisten auf den ESP32, um den **Abstand später genau passend** zu
haben. Positioniere den ESP32 mit den Buchsenleisten auf der Hauptplatine.
**Achte auf eine gute Ausrichtung**. Es hilft, wenn dir jemand den ESP32 festhält,
damit er nicht verrutscht.

Löte einen der Pins in einer Ecke fest. Prüfe die Ausrichtung noch einmal,
jetzt kannst du noch nacharbeiten. Löte dann den diagonal gegenüberliegenden
Pin an, und prüfe erneut die Ausrichtung.

Löte nun alle Pins an den Außenseiten der Buchsenleisten, dann ziehe den ESP32
vorsichtig ab -- er wird erst gegen Ende wieder gebraucht.

Falls du wechselseitige Buchsenleisten verwendest, löte nun auch innen alle
Pins an.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07898.JPG"
    alt="Bauteile bereitlegen" >}}
  {{< slider-image
    src="PCB00.03.10_02_DetailBuchsenleite01_zuschneiden.jpg"
    alt="Buchsenleite wenn nötig auf 15 Pins zuschneiden"
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07901.JPG"
    alt="Buchsenleisten auf ESP32 aufstecken"
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07902.JPG"
    alt="Gemeinsam auf dem PCB platzieren. Ausrichtung der abwechselnden Pins (innen) prüfen." >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07903.JPG"
    alt="Zunächst an einem Eckpunkt fixieren" >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07905.JPG"
    alt="Ausrichten und auf der gegenüberliegenden Seite ebenfalls fixieren"
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07913.JPG"
    alt="Alle äußeren Pins festlöten (beidseitig)" >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07915.JPG"
    alt="Alle äußeren Pins festgelötet"
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/01_Pin_Headers/DSC07926.JPG"
    alt="Dann den ESP32 entfernen und die Innenseite verlöten" >}}
{{< /slider >}}

## Spannungsregler (rot)

Dieses Modul wird auf der Rückseite der Hauptplatine **in SMD-Bauweise verlötet**,
also ohne durchgesteckte Stifte oder Beine. Die halbrunden Pads an den
Außenseiten des Moduls werden direkt auf die Pads der Hauptplatine gelötet.

Löte zunächst ein Pad an. Prüfe, dass das Lötzinn beide Pads gut benetzt. **Achte
auf gute Ausrichtung**, erst dann löte die anderen Pads ebenso.

Die zwei direkt benachbarten Pads dürfen verbunden bleiben, sollte dir das
passieren.

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_03_Spannunsversorgung_01_Stiftleisten_ablaengen.jpg"
    alt="Stiftleisten ablängen"
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/02_Regulator/DSC07928.JPG"
    alt="Bauteile bereitlegen" >}}
  {{< slider-image
    src="v00.03.12/02_Regulator/DSC07934.JPG"
    alt="Board platzieren und mit Stiften ausrichten, anderes Pad wie SMD verlöten" >}}
  {{< slider-image
    src="v00.03.12/02_Regulator/DSC07935.JPG"
    alt="Freie Kontakte löten"
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/02_Regulator/DSC07938.JPG"
    alt="Stifte entfernen und restliche Kontakte löten" >}}
{{< /slider >}}

## USB-C-Lademodul (blau)

Das Lademodul ist ein blaues Modul mit einer USB-C Buchse darauf.

Trenne von einer geraden Stiftleiste **zwei einzelne Stifte und zwei Stiftpaare ab**.

Platziere das Modul auf der Unterseite der Hauptplatine. Stecke die Stifte in
die entsprechenden Löcher, sodass das schwarze Plastikteil sichtbar ist. Prüfe,
dass das Modul **flach und ohne Lücke** auf der Hauptplatine aufliegt, sonst
passt am Ende das Ladekabel nicht.

Drehe nun die Hauptplatine samt Modul und Stiften um. Achte darauf, dass
keine Stifte herausfallen. Löte die Stifte auf der Oberseite der Hauptplatine fest.

Drehe nun alles wieder um, und entferne die schwarzen Plastikteile von den
Stiften, indem du sie mit einer Pinzette oder Zange nach oben ziehst. Löte alle
Stifte an das Lademodul, dann kürze alle überstehenden Stifte mit dem
Seitenschneider.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07944.JPG"
    alt="Bauteile bereitlegen" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07945.JPG"
    alt="Lademodul und Stifte platziert" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07951.JPG"
    alt="Auf Oberseite verlöten" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07954.JPG"
    alt="Alle Stifte auf Oberseite verlötet"
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07959.JPG"
    alt="Schwarze Plastikteile von Stiftleiste entfernen" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07961.JPG"
    alt="Schwarze Plastikteile von Stiftleiste entfernt"
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07964.JPG"
    alt="Oberseite verlöten" >}}
  {{< slider-image
    src="v00.03.12/03_Charger/DSC07968.JPG"
    alt="Stifte kürzen"
    noprint=true >}}
{{< /slider >}}

## Widerstände

Ordne zunächst alle Widerstände richtig zu, indem du die Farbcodes abliest oder
mit einem Multimeter misst:

| Bauteil         | Wert           | Farbcode 4 Ringe                             | Farbcode 5 Ringe                                   | SMD Code   |
| -----------     | -------------: | :------------------------------------------- | :----------------------------------------------    | ------     |
| **R1, R2**      | 1,2&thinsp;kΩ  | {{< resistor  "brown,red,red,gold" >}}       | {{< resistor "brown,red,black,brown,brown" >}}     | 122 / 1201 |
| **R3**          | 10&thinsp;kΩ   | {{< resistor  "brown,black,orange,gold" >}}  | {{< resistor "brown,black,black,red,brown" >}}     | 103 / 1002 |
| **R4**          | 150&thinsp;kΩ  | {{< resistor  "brown,green,yellow,gold" >}}  | {{< resistor "brown,green,black,orange,brown" >}}  | 154 / 1503 |
| **R5**          | 300&thinsp;kΩ  | {{< resistor  "orange,black,yellow,gold" >}} | {{< resistor "orange,black,black,orange,brown" >}} | 304 / 3003 |

Nachdem du alle Widerstande zugeordnet hast, platziere sie an den dafür
vorgesehenen Stellen auf der Vorderseite der Hautplatine. Stecke die Beinchen
jeweils durch die beiden Löcher und biege sie etwa 30° nach außen, sodass die
Widerstände nicht mehr herausfallen. Drehe die Platine um und löte alle Beine
auf der Rückseite fest. Danach schneide den überstehenden Draht ab.

Du kannst auch SMD-Widerstände verwenden, falls du solche hast. In diesem Fall
gehen wir davon aus, dass du auch weißt, wie du sie anbringst.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R6/DSC07891.JPG"
    alt="Einen Widerstand R6 platzieren" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R6/DSC07893.JPG"
    alt="Auf der Rückseite verlöten" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R6/DSC07895.JPG"
    alt="Beine kürzen" >}}
{{< /slider >}}

## Kondensatoren

Identifiziere zunächst alle Kondensatoren und ordne sie korrekt zu. **C1** ist
ein 100&thinsp;nF großer Keramikkondensator, der ist in der Regel blau oder
hellbraun und hat manchmal die Aufschrift *104* (verwechsle ihn nicht mit der
Sicherung, die normalerweise gelb ist). **C2** und **C3** sind
Elektrolytkondensator mit 22&thinsp;µF Kapazität, diese sind normalerweise
schwarz mit heller Aufschrift, zylinderförmig und haben zwei unterschiedlich
lange Beine auf der gleichen Seite.

Bei C2 und C3 musst du **auf die Polung auf Platine und Kondensator achten**!
Ein Plus-Symbol auf der Platine zeigt die Seite, auf die das längere Bein
gehört. Die andere Seite ist auf der Platine ausgefüllt, am Kondensator ist
dort ein heller Streifen auf den Hauptkörper aufgedruckt, und das Bein ist
etwas kürzer.

Stecke alle Kondensatoren, genau wie zuvor die Widerstände, von der Vorderseite
ein und biege die Beine etwas um. Dann drehe die Platine erneut um und löte die
Beine auf der Rückseite fest, und schneide dann den überstehenden Draht ab.

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_04_Kondesatoren_01_Kondensatoren.jpg"
    alt="Die Kondensatoren" >}}
  {{< slider-image
    src="v00.03.12/05_Caps/DSC07970.JPG"
    alt="Kondensatoren platzieren, auf Polung achten!" >}}
  {{< slider-image
    src="v00.03.12/05_Caps/DSC07971.JPG"
    alt="Auf der Rückseite umbiegen und verlöten" >}}
  {{< slider-image
    src="v00.03.12/05_Caps/DSC07979.JPG"
    alt="Drähte kürzen"
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/05_Caps/DSC07984.JPG"
    alt="Widerstände und Kondensatoren fertig platziert"
    noprint=true >}}
{{< /slider >}}

## Sicherung

Die Sicherung **F1** ist in der Regel gelb, flach und hat 2 Beine. Der Körper
ist rund oder rechteckig. Die Sicherung sieht so ähnlich aus wie ein
Keramikkondensator, also verwechsle sie nicht mit C1.

Die Polung der Sicherung ist egal. Die kleinen Biegungen in den Beinchen sorgen
für den richtigen Abstand zur Platine, da die Sicherung nicht direkt darauf
aufsitzen darf um korrekt zu funktionieren.

Die Sicherung wie die bisherigen Bauteile eingebaut.

## Batteriestecker

{{% alert title="Achtung: Farben nicht eindeutig" color="warning" %}}
Die Stecker sind nicht standardisiert und werden teilweise verdreht geliefert,
sodass die Bilder irreführend sein können. Achte auf jeden Fall darauf, dass
deine Batterie am Ende so gepolt wird, wie die Bedruckung der Platine es
vorgibt. Das kann bedeuten, dass du den Stecker anders als auf den Bildern
auflöten musst. Schau dir erst alle Komponenten genau an und entscheide dann,
wie herum bei dir "richtig" ist.
{{% /alert %}}

Der Batteriestecker wird üblicherweise als Kombination mit dem Kabel zusammen
geliefert. Du solltest sie zunächst **zusammengesteckt lassen um die richtige
Polung herauszufinden**.

Hast du ein rote-schwarzes Batteriekabel solltest du für **rot an Plus** und
**schwarz an Minus** verwenden. Ist dein Batteriekabel braun-schwarz, nimm
**braun an Plus** und **schwarz an Minus**. Bei anderen Farben musst du dich
selbst entscheiden.

Finde heraus, wie herum dein Stecker auf die Platine (bei J1 bzw. "Battery")
gelötet werden muss, damit die Farbzuordnung mit der Platinenbedruckung
übereinstimmt. Löse dann das Kabel vom Stecker.


{{< imgproc "battery-connector-orientations.png" Fit "500x500">}}
    Zwei unterschiedliche Ausrichtungen des Batteriesteckers. Die korrekte
    Ausrichtung ist vom gelieferten Stecker und Kabel abhängig.
{{</ imgproc >}}


{{% alert title="Achtung: Heiße Pins" color="warning" %}}
Die Pins leiten die Hitze durch den Stecker hindurch, eine Pinzette zum
beim Löten ist daher empfehlenswert.
{{% /alert %}}

Stecke den Stecker auf die Platine, drehe sie um und löte auf der Rückseite
einen der Pins fest. Prüfe nun, ob der Stecker gut und gerade auf der Platine
sitzt, ansonsten kannst du nacharbeiten. Löte dann die andere Seite fest.

## Diode

Die Diode ist das größte der einzelnen Elemente, mit rundem schwarzen Körper
und ziemlich dicken Beinen, die an beiden Seiten heraustreten. Ein Ende des
Diodenkörpers ist mit einem hellen Kreis markiert.

Bei der Diode musst du dringend die **Polung beachten**. Die Diode "steht" auf
dem Kreis auf dem PCB, aber der weiße Ring auf der Diode dabei zeigt nach oben.
Auf der Platine ist die richtige Polung auch als Piktogramm abgebildet.

Biege die Beine der Diode um und stecke sie an die richtige Stelle. Kürze die
Enden vor dem Löten bereits, um beim Löten weniger Metall aufheizen zu müssen.

Eigentlich sollen Halbleiter nur kurz gelötet werden, aber dieses ist ein sehr
großes Bauteil, und auch erstaunlich robust. Arbeite zügig, aber erwarte dass
es eine Weile dauert, bis das Bauteil und die Pads auf Temperatur gebracht sind
und das Lötzinn schmilzt.

{{% alert title="Achtung: Heiße Diode" color="warning" %}}
Die Diode nimmt viel Hitze auf und ist noch lange nach dem Löten sehr heiß.
{{% /alert %}}

Kürze die überstehenden Enden nach dem Löten noch einmal auf ihre endgültige
Länge.

{{< imgproc "diode.png" Fit "500x500">}}
    Die Diode in ihrer korrekten Position. Achte darauf, dass der weiße Ring
    nach oben zeigt, und die Diode auf der Platine auf dem weißen Kreis steht.
{{</ imgproc >}}

## Verbinder für Taster und Display

Die weißen Buchsen für die Steckverbinder zum Ein- und Ausschalter (J2) sowie
zum Display (J3) werden nebeneinander oben auf die Hauptplatine aufgelötet.

Löte wie beim Batteriestecker immer erst ein Bein fest, und prüfe danach, dass
die Buchse fest und vollständig auf der Hauptplatine aufsitzt. Löte danach erst
die anderen Beine an.

{{< imgproc "connectors.png" Fit "500x500">}}
    Die beiden Stecker werden wie auf der Platine aufgedruckt platziert und
    sollten flach und fest auf der Platine aufsitzen.
{{</ imgproc >}}

## Sensorboards


### Vorbereitung

{{% alert title="Hinweis für Workshops" color="info" %}}
Die Vorbereitung wird in Workshops gern im Vorweg für euch
gemacht, da das Auslöten relativ anspruchsvoll ist. Ihr könnt diese dann
vermutlich überspringen (bitte nachfragen) und direkt mit dem Einbau beginnen.
{{% /alert %}}

{{% alert title="Achtung: Auf Polung achten" color="warning" %}}
Durch die Verwendung einer gewinkelten Buchse wird die Polung im
Vergleich zu vorher vertauscht. Die Sensorkabel-Stecker werden später beim
Crimpen entsprechend umgekehrt gepolt in das Steckergehäuse eingeführt.
{{% /alert %}}

Die **erste Option** ist die bevorzugte. Dafür wird die JST-Buchse auf dem
Sensorboard durch eine **abgewinkelte JST-Buchse** ersetzt. Ziehe hierfür das weiße
Kunststoffteil der Buchse von den Metallstiften. Versehe diese mit ein wenig
Lötzinn, sodass es wieder leichter fließt, und löte sie dann aus, indem du sie
einzeln mit einer Pinzette herausziehst. Reinige anschließend die inneren zwei
Löcher mit einer Entlötsaugpumpe oder etwas Entlötlitze, sodass sie nicht mehr
verstopft sind. Löte dann die gewinkelte Buchse so ein, dass sie von der
Winkelstiftleiste weg zeigt.

Die **zweite Option** ist der Einsatz einer Winkelstiftleiste anstelle der
richtigen JST-Buchse. Löte wie oben beschrieben die vorhandene gerade
JST-Buchse aus der Modulplatine aus, und ersetze sie durch eine
Winkelstiftleiste mit 2 Stiften. Führe dabei das kurze Ende nur so weit ins
Sensorboard ein, dass die Spitze der Stifte gerade so auf der anderen Seite
herausschaut. Diese Option solltest du nur wählen, wenn du keine gewinkelten
JST-Buchsen zur Hand hast.
 
Die **letzte Option** ist ein wenig riskant und nicht besonders stabil, hat
aber auch schon oft und erstaunlich gut funktioniert. Dafür ziehe den weißen
Kunststoff der bestehenden JST-Buchse ab, und biege die zurückbleibenden
Metallstifte vorsichtig um, sodass sie weg von der vierpoligen Stifteleiste
"nach oben" zeigen. Dabei sollte die Biegung in etwa 2mm Abstand von der
Modulplatine anfangen. Am besten geht das mit einer stabilen Pinzette und einer
Flachzange. Die Stifte können dabei brechen, dann musst du das kreativ
reparieren. Auf die gebogenen Stifte lässt sich ein JST-Stecker aufstecken,
aber nicht arretieren. Wir hatten jedoch bisher keine Probleme mit dieser
Variante im Betrieb.

### Einbau

Stecke beide Sensorboards an die vorgesehenen Plätze, achte dabei auf die
Beschriftung (+3V3, TRIG, ECHO, GND). Die Boards stehen sich "gegenüber" und
dürfen einander nicht berühren, die JST-Buchsen sind außen. Wenn die
Platzierung der Boards klar ist, lege das innere Board wieder beiseite.

Fixiere zunächst das äußere Board. Hierfür kannst du die Hauptplatine mit dem
gestecktem Board auf den Kopf drehen, es steht so ganz gut von selbst.
  
Löte nur einen Pin an, danach prüfe wie üblich die Ausrichtung. In der Regel
ist das Board beim ersten Versuch noch nicht senkrecht, und liegt auch nicht
auf voller Länge auf dem PCB auf, sondern hat "Luft" darunter. Dies kannst du
gut korrigieren, indem du die Hauptplatine mit Board in eine Hand nimmst,
sodass du mit dem Finger oder Daumen die Ausrichtung des Boards korrigieren
kannst. Mit der anderen Hand kannst du jetzt noch den Lötkolben führen. Da der
eine Pin bereits verlötet ist benötigst du kein dritte Hand für das Lötzinn.
Passe so die Ausrichtung so lange an, bis sie aus allen Richtungen gut
aussieht.
  
Erst dann werden die drei verbleibenden Pins verlötet. Platziere das zweite
Sensorboard auf dieselbe Weise, und kürze am Ende alle Stifte.


## SD-Karten-Modul und GPS-Modul

Trenne von einer Winkelstiftleiste eine Gruppe von 6 Stiften ab. Stecke sie
genau wie in der Abbildung gezeigt in das SD-Karten-Modul ein. Die **korrekte
Ausrichtung ist wichtig**, es gibt viele Möglichkeiten die Stiftleiste zu stecken
und die meisten davon passen am Ende nicht.

- Die Stiftleiste wird von der Oberseite der Modulplatine aufgesteckt.
- Die Stifte haben direkt oberhalb der Platine ihre Biegung.
- Dann erst kommt die schwarze Kunststoffleiste.
- Die lange, gerade Seite der Pins zeigt vom Modul weg.

Verlöte die Stiftleiste mit dem SD-Modul verlöten und kürze die überstehenden Pins
auf der Rückseite.

Auch auf das **GPS-Modul** muss eine Stiftleiste gelötet werden.

{{% alert title="Achtung: Anordnung der Stiftleiste" color="information" %}}
Dieser Abschnitt muss noch neu geschrieben werden, wenn feststeht, wie genau
in Version 1.0.0 das GPS-Modul platziert werden muss.
{{% /alert %}}


Stecke die Module auf das PCB und achte dabei erneut auf die Ausrichtung. Die
Oberseiten beider Modulplatinen müssen **zur Mitte der
OpenBikeSensor-Hauptplatine** zeigen.

Verlöte wie gewohnt erst einen der Pins auf der Rückseite. Prüfe, dass das
Modul wirklich **senkrecht** auf der Hauptplatine steht und auch auf ganzer
Länge mit der Unterkante auf der Platine aufliegt, korrigiere dies bei Bedarf.
Erst dann löte die restlichen Pins und kürze sie.

{{< imgproc "v00.03.12/10_SD_Module/DSC08026.JPG" Fit "400x300" >}}
    Die 6-polige Winkelstiftleiste muss von oben ins SD-Modul eingesetzt
    werden, sodass die langen Enden der Stifte vom Modul weg zeigen und die
    schwarzen Plastikteile einige Millimeter über die Platine hinausragen.
{{</ imgproc >}} 

{{< imgproc "gps-sd-placement.jpg" Fit "800x600" >}}
    Hier werden die zwei Module auf der Hauptplatine platziert. Die Oberseite
    des Moduls zeigt in Richtung der Buchsenleiste für den ESP32. 
{{</ imgproc >}}

---

{{% alert title="Glückwunsch!" color="success" %}}
Mit diesem Schritt ist die Hauptplatine des OpenBikeSensors fertig bestückt.

Nun widmen wir uns den kleinen Teilen, dem Display und dann dem Zusammenbau.
Viele der folgenden Schritte können in beliebiger Reihenfolge ausgeführt
werden.
{{% /alert %}}

{{% alert title="Workshop-Hinweis" color="info" %}}
Solltest du deinen OpenBikeSensor im Rahmen eines Workshops bauen, empfiehlt
sich ab jetzt das Testen deiner Elektronik, damit du noch genug Zeit hast
während des Workshops eventuelle Probleme zu beheben. Sprich hierfür deine
Workshop-Leiter:innen an.
{{% /alert %}}

{{% alert title="Tipp!" color="info" %}}
In den folgenden Schritten werden manche Stecker gecrimpt. Wenn du das zum
ersten Mal machst, übe den Vorgang am besten zunächst mit überschüssigen
Kabelteilen und extra Crimpkontakten, bevor du am bereits gekürzten Kabel
einige Versuche benötigst und so immer weniger Kabellänge übrig ist.
{{% /alert %}}

## Ein/Aus-Schalter

Schneide dir zwei kurze Stück Kabel von etwa 10cm Länge zurecht. Die eine Seite
wird jeweils mit einem Crimp versehen.

Isoliere die andere Seite beider Kabel ca. 5mm weit ab und verdrille die Enden.
Nimm etwas Lötzinn und lasse es auf die freiliegenden Litzen fließen (dies wird
"verzinnen" genannt). Dadurch lässt sich die Litze wie ein solider Draht biegen.

Biege die Enden in eine U-Form um. So lassen sie sich leicht in die Ösen des
Schalters einführen und halten sich selbst dort fest, bis du sie festgelötet
hast. Achte darauf nur kurz zu löten, sonst schmilzt der Kunststoff im Stecker.

Führe die Crimps nun in ein 2-poliges JST-Steckergehäuse ein und verdrille die
zwei Kabel zu einem, indem du den Schalter festhälst und den Stecker etwa 10-20
mal drehst. Es wird sich ein wenig wieder lockern, aber sollte nun wie ein
Kabel wirken, und keine große Schlaufe mehr bilden.
  
{{< imgproc "v00.03.12/12_Switch/DSC08041.JPG" Fit "500x500" >}}
    Schalter mit Kabel und Stecker.
{{< /imgproc >}}

## Ultraschallsensor-Kabel kürzen und crimpen

{{% alert title="Achtung: Koax-Kabel" color="warning" %}}
Der innere Leiter des Ultraschallsensorkabels ist sehr dünn und kann leicht
durchtrennt werden. Achte beim Abisolieren auf guten Griff am Restkabel, und
verwende am Besten eine automatische Abisolierzange, da sonst die innere
(weiße) Isolierung herausreißen kann.
{{% /alert %}}

{{% alert title="Tipp!" color="info" %}}
Übe das folgende Abisolieren und Crimpen mit den Resten des zuvor gekürzten Kabels,
damit du dies nicht erst an den gekürzten Kabeln lernst.
[Hier gibt es ein Video aus der Community](https://www.youtube.com/watch?v=Z607TQjel1M), welches den folgenden Prozess zeigt.
{{% /alert %}}

Kürze langen schwarzen Kabel der Sensoren auf etwa 10cm, da die langen Kabel
nicht in das Gehäuse passen und auch die Plastikeinfassung der bestehenden
Stecker zu starr und zu dick für das Gehäuse ist.

Entferne etwa 2cm der schwarzen Außenisolierung des Kabels. Schiebe die
Schirmung zur Seite und verdrille die einzelnen Leiter miteinander. Dies ist
einer der zwei Leiter, die gecript werden müssen. Isoliere vom inneren Leiter
nur etwa 1mm ab.

Dann werden beide Leiter gecrimpt. Der Crimpkontakt muss für optimale
Verbindung den inneren Leiter und seine Isolierung greifen. Kürze die
Schirmung, sodass alle Adern gleich lang sind, dann crimpe sie alle gemeinsam.
Hier gibt es keine Isolierung, aber die Schirmung insgesamt ist stark genug um
auch mechanisch zu halten.

Entferne, falls vorhanden, einzelne abstehende Leiter der Schirmung die nicht
im Crimp gesichert sind, sodass diese keinen Kurzschluss verursachen können.

Führe die Crimpkontakte in das Steckergehäuse ein. Achte dabei auf die **korrekte
Polung**. Falls die Sensorboards modifiziert und mit gewinkelten
JST-Platinensteckern ausgestattet wurden (siehe *Sensorboards &raquo;
Vorbereitung*), wurde die **Polung der Buchsen vertauscht** und du musst deinen
Stecker ebenfalls anders herum polen.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/13_Sensor_Wiring/DSC08040.JPG"
    alt="Sensor mit gekürztem Kabel und Stecker" >}}
  {{< slider-image
    src="PCB00.03.10_15_Sensor_03_Sensor_Detail_Stecker.jpg"
    alt="Detailaufnahme Stecker und Schirmung (ohne Winkelstecker-Modifikation)" >}}
{{< /slider >}}

## Batteriekabel anlöten

{{% alert title="Achtung" color="warning" %}}
Der Akku **muss** mit Lötfahnen an beiden Polen ausgestattet sein. Akkus ohne
Lötfahnen dürfen nicht gelötet werden, da sie sonst Schaden nehmen können. Hast
du einen Akku ohne Lötfahnen erwischt, suche in deinem Umfeld nach jemandem
(oder einem Makerspace) mit einem Punktschweißgerät und Erfahrung mit
LiPo-Zellen.
{{% /alert %}}

Kürze das Batteriekabel auf ca. 12cm und isoliere etwa 5mm der Enden ab.

Identifiziere die Polung der Batterie, der Pluspol ist auf der Seite mit
Einkerbung im Akku-Gehäuse, und in der Regel auch mit einem Plus auf dem
Aufdruck markiert. **Im Zweifel miss mit dem Multimeter nach.**
  
Es empfiehlt sich, den Akku bereits in den Gehäusedeckel einzulegen, sodass er
bei der Arbeit nicht wegrollt. Statte beide Lötfahnen an ihrem Ende zunächst
mit einem großzügigen Lötpunkt aus. Lasse die Stellen wieder abkühlen, dann
nimm das Kabelende in die eine Hand und den Lötkolben in die andere, erhitze
den Lötpunkt von Neuem und führe das Kabelende seitlich in diesen ein, wenn das
Lötzinn flüssig geworden ist. Die Kabel sollen von der Lötfahne in die Mitte
der Batterie führen. Löte nicht zu lange an der gleichen Stelle, wenn etwas
nicht klappt, lasse das ganze lieber eine Minute lang abkühlen, bevor du es
erneut versuchst.

Die Batteriekontakte werden nun mit Isolierband (wenn möglich Kapton-Tape)
gründlich isoliert und umwickelt, sodass die Pole und Lötfahnen komplett
bedeckt und die Kabel auch mechanisch fixiert sind.

Befestige dann die Batterie mit einem kleinen Kabelbinder im Deckel des
Gehäuses. Stecke sie **noch nicht** ein.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/14_Battery_Wiring/DSC08044.JPG"
    alt="Akku mit Kabel und Stecker (Polung beachten!)" >}}
  {{< slider-image
    src="v00.03.12/14_Battery_Wiring/DSC08045.JPG"
    alt="Kontakte isolieren" >}}
{{< /slider >}}

## Gehäuse vorbereiten

### Gewindeeinsätze

Im Haupt- sowie im Displaygehäuse gibt es einige Löcher, in die Gewindeeinsätze
("heat-set inserts") hinein gehören. Dort greifen später die Schrauben, die das
ganze Gerät zusammenhalten. Die Gewinde müssen an folgende Stellen: 

* 3 Stück in Hauptgehäuse für das PCB (mit Montagelöchern der Platine vergleichen)
* 5 Stück in Hauptgehäuse für Hauptdeckel
* 1 Stück in Hauptgehäuse beim GPS-Deckel
* 3 Stück in Displaygehäuse

Stelle deinen Lötkolben auf ca. 180-220°C ein und reinige die Spitze gründlich,
sodass kein Lot mehr daran hängt. Alternativ kannst du eine eigene Spitze für
diese Aufgabe verwenden, und danach wieder wechseln.
    
Finde eines der vorgesehenen Löcher, nimm ein Gewinde und drücke es so weit es
geht von Hand in das Loch hinein. Halte das Gewinde bei Bedarf mit einer
Pinzette fest, während du den Lötkolben auflegst und leichten Druck ausübst.
Versuche, das Gewinde so senkrecht wie möglich und behutsam versinken lassen.

Das Gewinde sollte lieber etwas zu tief sitzen, als über den Rand überzustehen,
um die Gehäuseteile bündig miteinander verbinden zu können. Die Gewinde, mit
denen das PCB befestigt wird, sollten allerdings auch nicht zu tief versinken,
sonst bildet sich eine Ausbuchtung auf der Außenseite.
    
**Vorsicht:** Die Gewindeeinsätze sind noch lange nach dem Einsetzen heiß und
kühlen erst langsam ab. Lege das Gehäuseteil am besten einige Minuten zur
Seite, wenn du alle Gewinde darin platziert hast.

### Magnete

Setze die kleinen Würfelmagnete in USB-Abdeckung ein. Wenn deine Abdeckung mit anderen
OpenBikeSensoren kompatibel sein soll, solltest du jetzt die Polung von einer Vorlage übernehmen.

Setze zunächst die zwei Magnete in Abdeckung selbst ein. Die Magnete haben nur
**in einer Achse** Anziehungskraft, sie dürfen also nicht seitlich eingesetzt
werden. Es empfiehlt sich, die vier Magnete "als Stange" zu halten, um ein
verdrehen zu vermeiden. Alternativ kannst du mit einem permanenten Marker die
richtige Seite markieren.

Um die zwei Gegenstücke einzubauen, setze je einen Magneten auf einen der
Magnete in der Abdeckung. Stecke dann die Abdeckung ins Hauptgehäuse, und
drücke damit den einzelnen Magneten in sein vorgesehenes Loch. So stellst du
sicher, dass die Magneten einander anziehen.

Sollten die Magnete nicht von selbst in ihrem Loch stecken bleiben, kannst du
sie auch mit etwas Sekunden- oder Alleskleber fixieren.

{{< imgproc "v00.03.12/15_Prepare_Case/DSC08072.JPG" Fit "500x500" >}}
    Einpressgewinde in Displaygehäuse einschmelzen
{{< /imgproc >}}

{{< imgproc "v00.03.12/15_Prepare_Case/DSC08074.JPG" Fit "500x500" >}}
    Hauptgehäuse mit Einpressgewinde
{{< /imgproc >}}
    
{{< imgproc "v00.03.12/15_Prepare_Case/DSC08075.JPG" Fit "500x500" >}}
    USB-Abdeckung mit Magneten
{{< /imgproc >}}

## Displayeinheit

In diesem Abschnitt baust du das Display mit Knopf und Kabel in sein Gehäuse
ein. Verwende folgende Tabelle als Vorschlag für die Zuordnung der Leiter zu
ihren Anschlüssen, oder tausche die Farben durch deine eigene Zuordnung aus,
falls dein Kabel andere Leitungsfarben verwendet.

| Farbe        | OBS-Seite      | Displayseite | Button  |
| ------------ | -------------- | ------------ | ------- |
| blau         | `SDA`          | `SDA`        |         |
| schwarz      | `GND`          | `GND`        |         |
| grau         | `BUT`          | -            | Pin 1   |
| weiß         | `SCL`          | `SCK`        | -       |
| braun        | `+3V3`         | -            | Pin 2   |
| kurzes Kabel | -              | `VDD`        | Pin 2   |

### Kabel vorbereiten

Entferne auf beiden Seiten des langen Displaykabel die Isolierung, auf der
einen Seite ca. 5-7cm lang (dies ist die Seite für das Hauptgerät) und auf der
anderen nur ca. 3cm. Die lange Seite wird vollständig gecrimpt, auf der kurzen
Seite crimpe nur die drei Leiter für `GND`, `SDA`, `SCL` (oder laut Farbtabelle
den schwarzen, blauen und weißen Leiter). Die zwei restlichen Leiter, `+3V3`
(braun) und `BUT` (grau) werden angelötet und dafür ca. 5mm lang abisoliert.

Bereite ein kleines Kabelstück von ca. 3cm Länge vor, und crimpe auch hier eine
Seite und isoliere die andere ab.


### Knopf

Schraube den Knopf in das Gehäuseoberteil des Displays hinein. Wenn die Mutter
nicht das Gewinde greifen kann (den Knopf gibt es in verschiedenen Längen)
kannst du auch etwas Heißkleber verwenden.

Löte nun drei Leiter an die zwei Seiten des Buttons an, das kleine Kabel
zusammen mit `+3V3` (braun) auf eine Seite, `BUT` (grau) auf die andere. Auch
hier empfiehlt sich, wie beim Schalter, wenn du zuerst die abisolierten Kabel
verzinnst, zu einer U-Form biegst und in die Ösen einhängst, um dann **nur kurz
löten** zu müssen, damit der Kunststoffkörper des Knopfes nicht schmilzt.


### Stecker

Entferne vom 4-poligen JST-Steckergehäuse die Arretierung (auf der einen Seite
leicht hervorstehende Plastikflügel), zum Beispiel mit einem Cuttermesser oder
Seitenschneider. Nur so passt der Stecker am Ende in das kleine Gehäuse.

Ziehe außerdem am Displaymodul die schwarzen Plastikteile von der Stiftleiste
ab und kürze die vier Stifte um jeweils ca. 2mm. Entferne auch die Schutzfolie
vom Display. Sollte dein Display nicht ins Gehause passen, kannst du mit einem
Seitenschneider die Ecken der Platine etwas bearbeiten, bis es passt.
   
Setze dann das Display in Gehäuseoberteil (das mit dem Button) ein, stecke den
Stecker auf die gekürzten Pins (Polung beachten). Gegebenenfalls die Pins
weiter kürzen, bis der Stecker ganz auf dem Board aufliegt, damit er ins
Displaygehäuse passt.
   
Führe die gecrimpten Kabelenden in das 5-polige JST-Steckergehäuse ein. Die
Zuordnung kannst du anhand der Tabelle und der Beschriftung auf der Hautplatine
machen, oder du kopierst die abgebildete Reihenfolge.

   
### Zusammenbau

Setze die Magnete in die Seitentasche ein. Wenn dein Display mit anderen
OpenBikeSensoren kompatibel sein soll, solltest du jetzt die Polung von einer
Vorlage übernehmen.

Je nach Genauigkeit des 3D-Drucks können die Magnete lose sein und etwas
klappern. Fixiere sie dann mit etwas Kleber oder umwickele sie mit Klebeband.
    
Setze die Gehäuseteile zusammen und drehe die drei Schrauben hinein, die sie zusammenhalten.

Stecke dann die beiden Hälften der Zugentlastung in die Öffnung der Unterseite
aus der das Kabel herauskommt. Setze erst die eine Seite ein, und dann die
zweite, welche du im Winkel einsetzt und dann mit der anderen zusammendrückst,
sodass sie das Kabel hält. Falls das nicht so gut klappt kannst du die
angewinkelten Ecken unten am zweiten Teil der Zugentlastung etwas mit einem
Seitenschneider abrunden, sodass sie leichter hinein geht.

Schraube dann mit je zwei Schrauben und Sechskantmuttern die zwei Hälften
zusammen. Achte darauf, dass die sechseckige Fixierung auf jeweils einer Seite
der Zugentlastung für die Mutter vorgesehen ist.



{{< slider >}}
  {{< slider-image
    src="v00.03.12/16_Display_Wiring/DSC08046.JPG"
    alt="Das untere Teil des Displaygehäuses mit Zugentlastung" >}}
  {{< slider-image
    src="v00.03.12/16_Display_Wiring/DSC08061.JPG"
    alt="Kabel durch Unterteil geführt" >}}
  {{< slider-image
    src="v00.03.12/16_Display_Wiring/DSC08053.JPG"
    alt="Button in Displayoberteil eingeschraubt" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_02_alle_5_Adern_gecrimpt.jpg"
    alt="OBS-Seite: Alle 5 Adern crimpen" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_03_Stecker.jpg"
    alt="OBS-Seite in Stecker einführen" >}}
  {{< slider-image
    src="v00.03.12/16_Display_Wiring/DSC08054.JPG"
    alt="Zwei Kabel an Button löten (Pin 2)" >}}
  {{< slider-image
    src="v00.03.12/16_Display_Wiring/DSC08059.JPG"
    alt="Display-Seite: Button und Stecker fertig" >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_05_verschiedene_Displays_vom_gleichen_Lieferanten.jpg"
    alt="Verschiedene Displays vom gleichen Lieferanten"
    noprint=true >}}
  {{< slider-image
    src="PCB00.03.10_17_Display_07a_Display_mit_Seitenschneider_stutzen.jpg"
    alt="Wenn nötig, Display mit Seitenschneider stutzen"
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/17_Display_Assembly/DSC08060.JPG"
    alt="Display in Gehäuse einpassen, ohne Gewalt" >}}
  {{< slider-image
    src="v00.03.12/17_Display_Assembly/DSC08064.JPG"
    alt="Magnete passend einlegen" >}}
  {{< slider-image
    src="v00.03.12/17_Display_Assembly/DSC08066.JPG"
    alt="Das Display mit verschraubtem Gehäuse" >}}
  {{< slider-image
    src="v00.03.12/17_Display_Assembly/DSC08068.JPG"
    alt="Zugsicherung fixieren" >}}
{{< /slider >}}


## ESP32 flaschen

Zunächst muss die OpenBikeSensor-Firmware auf den ESP32 geflashed werden.
Am schnellsten sollte dies mit dem Chrome-Browser über diese Webseite gehen:

* https://install.openbikesensor.org

[Folge alternaitv der Anleitung für dein Betriebssystem]({{< relref "firmware" >}}).

## Elektronik testen

**Vor dem Einbau ins Gehäuse** testen wir die Elektronik in dieser Reihenfolge:

1. Ausschalten
2. Batteriekabel polungsrichtig einstecken.
3. Laden: Normales USB-C Ladegerät (5 V) anschließen
    * Einige Geräte funktionieren nur nach Anschluss an ein Ladegerät
    * Bei vollem Akku leuchtet das Modul blau, sonst rot.
4. USB-C Kabel abstecken.
5. Einschalten per Kippschalter (ohne dabei den Knopf am Display zu drücken)
    * Boot-Screen sollte auf dem Display erscheinen. Wenn nicht, nochmal aus und, sofern nichts stinkt oder gar raucht, wieder einschalten.
6. Bei angeschlossener GPS-Antenne GPS-Funktion im Freien testen
    * Nach einigen Minuten: GPS-Board blinkt, Boot-Screen wechselt zu Sensor-Anzeige. Werden 0 Satelliten angezeigt, wird trotzdem weitergesucht, was zu Beginn wegen des Downloads des Almanachs sehr lange dauern kann. 15 Minuten sind beim ersten Einschalten nicht ungewöhnlich.
    * Alternativ kann durch einen Druck auf den Taster vom Boot-Screen zur Sensor-Anzeige gewechelt werden.
7. Sensoren-Funktion testen:
    * Sensoren mit den Sensor-Boards verbinden
      * Die Polung beachten. Siehe hierzu auch Schritt 13.
    * Zur Sensor-Anzeige wechseln, auf welcher in der Fußzeile die Roh-Werte, der Abstände (ohne Lenkerabstand) der Ultraschall-Sensoren, live angezeigt werden (Option "raw details" in der Konfiguration).
    * *Hinweis*: Der linke Sensor wird am äußeren, dem Loch zugewandten, Sensor-Board angeschlossen.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/18_Testing/DSC08091.JPG"
    alt="Die Elektronik funktioniert"
    noprint=true >}}
{{< /slider >}}

## Zusammenbau

Vor dem Zusammenbau sicherstellen, dass die Firmware auf dem ESP32 aufgespielt ist,
dann muss dieser später nicht mehr ausgebaut werden.

* Kabel und Halterung
  - Die vier Sechskantmuttern in die Wand des Gehäuses einsetzen (bei Gehäuse
    mit zwei Halterungen sind es acht Sechskantmuttern).
  - Sind die Sechskantlöcher eng, die Muttern mit der längeren M3 Schraube
    von der Außenseite in die Öffnung ziehen.
  - Ist ein Sechskantloch auch dafür zu eng, vorsichtig mit dem Lötkolben
    nachdrücken, und die Mutter von der Außenseite mit der längeren Schraube führen.
    Vermeide dabei, mit dem Lötkolben das Plastik zu berühren.
  - Falls du ein Gehäuse mit mehreren Montageöffnungen baust, entscheide dich, an
    welcher Öffnung du die Halteklammer installieren willst. Diese Öffnung
    führt auch später das Kabel. Die andere Öffnung wird mit dem Deckel
    (``AttachmentCover``) verschlossen.
* PCB im Hauptgehäuse platzieren
  - Zunächst die SD-Karte einlegen und den ESP32 aufstecken, dabei auf die
    Polung achten (USB-Markierung mit Mikro-USB-Stecker auf ESP32 abgleichen)
    und sicherstellen, dass die Pins nicht um ein oder zwei Löcher verrutscht
    eingesteckt werden.
  - Gesamtes Board in leichtem Winkel herabsenken, auf Ausrichtung der USB-C
    Ladebuchse achten. Bei Wiederzusammenbau am Displaykabel vorbei navigieren.
  - Bei Bedarf Unreinheiten des Gehäuses (vom 3D-Druck) entfernen, wenn das PCB
    daran hängen bleibt.
  - Mit 3 Stück M3x6 oder M3x8 im Gehäuse verschrauben.
* Displaykabel in Gehäuse einstecken
  - Führe das Displaykabel mit dem Stecker voran von außen in das Hauptgehäuse hinein
    (Falls in Schritt 16 nicht geschehen).
Entscheide dich, ob du
eine Top-Rider oder Back-Rider [Variante]({{< relref "../case/variants" >}})
bauen möchtest, und führe das freie Ende des Kabels durch die entsprechende
Öffnung im Hauptgehäuse. Möchtest du beide Halterungen montieren und dir damit
beide Varianten ermöglichen, kannst du dir die Öffnung frei aussuchen.
  - 
  - Die Halterung mit Zugentlastung anbringen und damit das Kabel fixieren.
    Noch nicht festziehen, nur sicherstellen dass die Muttern nicht mehr
    herausfallen.
  - Das Kabel sollte außen um die Elektronik herumgeführt werden, *nicht*
    zwischen dem GPS- und SD-Karten-Modul hindurch. Im neuen Gehäuse sollte
    dort genug Platz sein.
  - Jetzt zeigt sich auch, warum ca. 5cm Abisolierung hier sinnvoll ist, denn
    ohne Isolierung ist das Kabel flexibler.
  - Stecker einsetzen (z.B. mit Pinzette)
  - Kabel so weit aus der Zugsicherung herausziehen, bis kein überschüssiges
    Kabel im Innenraum des Gehäuses ist, aber das Kabel nicht straff liegt.
  - Schrauben der Zugsicherung bzw. Halterung nun fest anziehen.
* GPS-Antenne einsetzen
  - Kabel der Antenne mit kleinem Stecker durch das kleine Loch fädeln.
  - GPS-Antenne mit Schirmung nach unten und Keramik nach oben in die
    quadratische Aussparung einsetzen.
  - Den Antennenstecker auf das GPS-Board aufstecken. Der Stecker ist sehr
    filigran und schwer zu stecken, es geht gut ihn mit den Fingern zu
    platzieren und mit einer Pinzette den Stecker und die GPS-Modulplatine
    zusammenzudrücken. Dabei auf richtigen Sitz achten um den Stecker nicht zu
    beschädigen.
  - Den GPS-Deckel über die Antenne schieben und mit einer M3x6 oder M3x8
    Schraube fixieren.
  - Falls das Antennenkabel nicht reicht, kann die GPS-Antenne mithilfe eines
    hinreichend langen Antennenkabels mit IPEX/U.FL Stecker verlängert werden.
    Hierzu:
       - Den Metallschild des GPS-Moduls ablöten.
       - Das neue Kabel vorsichtig durch Rollen unter Cuttermesser auf etwa
         5-7mm abisolieren.
       - Die Schirmung zurückschieben.
       - Noch vorsichtiger die innere Isolierung durch ganz sanftes Rollen
         mit dem Cuttermesser abisolieren.
       - Das kurze Kabel ab- und das neue, längere anlöten.
       - Den Metallschild des Moduls wieder in ursprünglicher Ausrichtung
         auflöten.
* Schalter in Gehäuse einsetzen
  - Einschaltrichtung mit "I/O" Aufdruck des Gehäuses vergleichen.
  - Möglichst mit der mitgelieferten Unterlegscheibe und Mutter fixieren.
  - Schalterkabel verdrillen.
  - Kabel entlang der Gehäusewand zur Buchse führen und dort einstecken.
* Sensoren einbauen
  - Auf der Rückseite des Sensors gibt es einen Pfeil, der mit "UP" die
    Richtung markiert, wo später oben sein soll.
  - Einen Sensor ins Hauptgehäuse einbauen, den anderen in den Deckel.
  - Sensoren einstecken. Den Sensor im Gehäuse an das ihm naheliegendste
    Sensorboard anschließen, den Sensor vom Deckel in das entferntere (Anschluss über dem ESP32).
* Akku einbauen
  - Akku im Deckel mit Kabelbinder fixieren (falls in Schritt 14 noch nicht erledigt)
  - Einstecken. Polung beachten!
  - Möglicherweise überstehendes Kabel möglichst auf der Seite des GPS
    verstauen. Beide Adern verdrillen und parallel legen.
* Konfiguration des Sensors:
  * Die Anzeige kann im [Konfigurationsmodus]({{<relref "/docs/user-guide/configuration">}}) auf den Simple-Mode gestellt werden.
   * Außerdem kann die Breite des Lenkers und WLAN eingestellt werden.
   * Bei einem Reboot des Sensors wird nun auf der Sensor-Anzeige der Simple-Mode mit dem Abstand des linken Sensors angezeigt - abzüglich der Breite des Lenkers.
* Montage und Testfahrt mit dem Fahrrad.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/19_Assembly/DSC08084.JPG"
    alt="Akku und Ultraschallsensor an Deckel montieren ('Up'-Pfeil beachten)" >}}
  {{< slider-image
    src="PCB00.03.10_19_Gehaeuse_06_US-Sensore_anstecken.jpg"
    alt="Ultraschallsensoren einstecken" >}}
  {{< slider-image
    src="PCB00.03.10_19_Gehaeuse_07_USB-C-Ladebuchse_ohne_Gewalt_in_Aussparung_einfaedeln.jpg"
    alt="Ladebuchse (USB-C) ohne Gewalt in die Aussparung einfädeln" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_02_PCB_festschrauben.jpg"
    alt="PCB festschrauben" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_03_Halterung_und_Zugsicherung_festschrauben.jpg"
    alt="Halterung und Zugentlastung festschrauben" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_06_GPS-Deckel_festschrauben_Orientierung_Halterung.jpg"
    alt="GPS-Deckel festschrauben" >}}
  {{< slider-image
    src="PCB00.03.10_20_Zusammenbau_07_Deckel_festschrauben.jpg"
    alt="Deckel festschrauben" >}}
  {{< slider-image
    src="v00.03.12/19_Assembly/DSC08101.JPG"
    alt="Fertig!"
    noprint=true >}}
{{< /slider >}}


{{% alert title="Geschafft!" color="success" %}}
Dein OpenBikeSensor ist nun fertig. Herzlichen Glückwunsch, wir wünschen dir
viel Spaß bei der Nutzung!

In der [Bedienungsanleitung]({{<relref "/docs/user-guide">}}) findest du
weiterführende Anleitungen zu Themen wie Montage, Konfiguration und Aufzeichnung.
{{% /alert %}}
