---
title: Bauanleitung  (OpenBikeSensor Classic 1.0.0)
weight: 50
linkTitle: Bauanleitung
aliases:
- /bauanleitung/classic
- /bauanleitung

description: >
    Sobald der Bausatz für den OpenBikeSensor Classic zusammengestellt ist,
    kann anhand dieser Anleitung der Bau begonnen werden. Der Zusammenbau
    besteht aus einer Menge Lötarbeit, sowie dem Test der Elektronik und
    dem Einbau in das Gehäuse.
---

{{< print-qr-link >}}

Dies ist die Anleitung zum Aufbau des OpenBikeSensor Classic. Die aktuelle
Version dieser Bauanleitung setzt die Hauptplatine der Version 1.0.0 voraus,
sowie die Verwendung der auf dieser Website dokumentierten Bau- und
Gehäuseteile. Auch die benötigten Verbrauchsgüter und Werkzeuge sind bei der
[Bauteileliste]({{< relref "../parts" >}}) beschrieben. Hast du einen älteren
Bausatz mit der Platinenversion 00.03.12 kannst du diesen entweder
mit einer Platine Version 1.0.0 upgraden und der Bauanleitung 1.0.0 folgen
(alle Bauteile sind gleich, nur die Platzierung sowie Nummern unterscheiden sich), oder du kannst
[hier die Anleitung für die 0.03.12 Platine finden]({{< ref "/docs/classic/build-instructions/v00.03.12" >}}).

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
  sind. Für letztere empfehlen wir insbesondere das
  [JST-Crimp-Tutorial](https://www.youtube.com/watch?v=jHfYzrSF4pY), auch für
  die anderen Techniken findest du Anleitungen und Tipps im Internet.

- Gehe bewusst und gewissenhaft mit deinen Werkzeugen um. An scharfen
  Werkzeugen wie einem Cuttermesser oder einem Seitenschneider kannst du dich
  schneiden. Das vordere Ende des Lötkolbens kann bis zu 450&thinsp;°C heiß werden.
  Berühre daher immer nur das dafür vorgesehen Griffstück. Sollte er dir
  wegrutschen oder herunterfallen weiche lieber aus, anstatt ihn
  aufzufangen.

- Die Dämpfe, die beim Löten durch das Verbrennen des Flussmittels (Flux)
  entstehen, können gesundheitsschädlich sein. Atme sie nicht direkt ein.
  Du hast bei dir daheim oder in deinem Makerspace eine Lötdampfabsaugung? Dann
  nutze sie! Gerade bleifreies Lötzinn enthält mehr Flussmittel und ist daher
  während des Lötens auch deutlich gesundheitsschädlicher. Falls du noch mit
  bleihaltigem Lötzinn arbeitest, solltest du dieses nicht in den Mund nehmen
  und dir nach dem Löten gründlich die Hände waschen. Bei der Arbeit ist auf
  jeden Fall auf Essen und Trinken zu verzichten, mache lieber regelmäßig
  Pausen.

- Bei einem der Bauteile handelt es sich um eine LiPo-Batterie. Diese
  Batterien sind zwar heute weit verbreitet, können allerdings bei falscher
  Handhabung in Brand geraten. Solltest du nicht vertraut mit LiPos oder dir
  noch unsicher sein, lies bitte den Abschnitt in der Anleitung zur Vorbereitung und zum Umgang mit den Akkus
  sehr aufmerksam. Außerdem empfehlen wir, die Zelle aus einer
  vertrauenswürdigen Quelle zu beschaffen und nicht die billigste Zelle aus
  China zu bestellen, sowie den Akku niemals ohne Aufsicht zu laden.

- Es handelt sich beim OpenBikeSensor um ein frei verfügbares Design, und nicht
  um ein fertiges Gerät. Alles, was wir dir mit den Bauteillisten,
  Schaltungsentwürfen und Anleitungen zeigen, sind Vorschläge und kann Fehler
  enthalten. Bist du dir an einer Stelle nicht sicher oder du glaubst, einen
  Fehler gefunden zu haben, dann melde dich in der [Community]({{<
  relref "/community" >}}). Außerdem sind wir nicht für Fehler im Design
  verantwortlich, oder für Fehler, die du während des Aufbaus machst. Sollte
  etwas schiefgehen, und du brauchst Hilfe, kannst du dich natürlich trotzdem
  an uns wenden.

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
    src="v1.0.0/ESP32_02.JPG"
    alt="Lege die Bauteile bereit." >}}
  {{< slider-image
    src="v1.0.0/ESP32_03.JPG"
    alt="Stecke die Buchsenleistung an den ESP32 und positioniere sie auf der Hauptplatine."
    noprint=true >}}
  {{< slider-image
    src="v1.0.0/ESP32_04.JPG"
    alt="Löte die erste Ecke und kontrolliere die Positionierung."
    noprint=true >}}
  {{< slider-image
    src="v1.0.0/ESP32_08.JPG"
    alt="Verlöte die die verbleibenden äußeren Pins."
    noprint=true >}}
  {{< slider-image
    src="v1.0.0/ESP32_09.JPG"
    alt="Löte auch die inneren Pins, falls vorhanden." >}}
{{< /slider >}}

## Spannungsregler Option 1 (rot)
{{% alert title="Achtung: Alternative Bestückungsvariante" color="warning" %}}
Der rote Spannungsregler wird oft beschädigt geliefert. Deshalb gibt es eine
alternative Bestückungsvariante mit einem besseren Regler von Adafruit.

Hast du den Adafruit Regler, verzichte auf diesen Schritt.
{{% /alert %}}

Dieses Modul wird auf der Rückseite der Hauptplatine **in SMD-Bauweise verlötet**,
also ohne durchgesteckte Stifte oder Beine. Die halbrunden Pads an den
Außenseiten des Moduls werden direkt auf die Pads der Hauptplatine gelötet.

Löte zunächst ein Pad an. Prüfe, dass das Lötzinn beide Pads gut benetzt. **Achte
auf gute Ausrichtung**, verlöte erst dann die anderen Pads.

Die zwei direkt benachbarten Pads dürfen verbunden bleiben, sollte dir das
passieren.

{{< slider >}}
  {{< slider-image
    src="v1.0.0/spannungswandler1.jpg"
    alt="Benetze eines der Pads mit Lötzinn."
    noprint=true >}}
  {{< slider-image
    src="v1.0.0/spannungswandler2.jpg"
    alt="Erhitze das Lötzinn neu und positioniere das Modul." >}}
  {{< slider-image
    src="v1.0.0/spannungswandler3.jpg"
    alt="Verlöte die restlichen Pins." >}}
  {{< slider-image
    src="v1.0.0/spannungswandler4.jpg"
    alt="Der Spannungsregler ist fertig montiert."
    noprint=true >}}
{{< /slider >}}

{{% alert title="Hinweis zum Löten" color="info" %}}
Kontakte, die mit *Masse* verbunden werden (englisch *ground* / GND; der
elektronische Minuspol) sind manchmal schwieriger zu löten. Das liegt daran,
dass eine größere Menge Hitze über die damit verbundene Kupferfüllfläche abgeleitet wird.
Hier musst du unter Umständen ein wenig länger die Lötstelle erhitzen, bis das
Lötzinn richtig fließen kann und beide Bauteile sauber benetzt.

Beim Spannungsregler sind die zwei Pads betroffen, die nicht mit `+VDC` oder
`+3.3V` beschriftet sind. Auch bei den folgenden Modulen und der Diode wird dir
dieser Effekt auffallen.
{{% /alert %}}

## USB-C-Lademodul (blau)

Das Lademodul ist ein blaues Modul mit einer USB-C Buchse darauf.

Trenne von einer geraden Stiftleiste **zwei Zweiergruppen und zwei einzelne
Stifte** ab (insgesamt 6 Stifte).

Platziere das Modul auf der Unterseite der Hauptplatine. Stecke die Stifte in
die entsprechenden Löcher, sodass das schwarze Plastikteil sichtbar ist. Prüfe,
dass das Modul **flach und ohne Lücke** auf der Hauptplatine aufliegt, sonst
passt am Ende das Ladekabel nicht.

Fixiere nun die Stifte mit Verpackungsmaterial oder etwas Klebeband und drehe
die Hauptplatine samt Modul und Stiften um. Achte darauf, dass keine Stifte
herausgefallen sind. Löte die Stifte dann auf der Oberseite der Hauptplatine fest.

Drehe nun alles wieder um und entferne die schwarzen Plastikteile von den
Stiften, indem du sie mit einer Pinzette oder Zange nach oben ziehst. Löte alle
Stifte an das Lademodul und kürze die überstehenden Stifte mit dem
Seitenschneider.

{{< slider >}}
  {{< slider-image
    src="v1.0.0/charger1.jpg"
    alt="Stecke die Stifte in die entsprechenden Löcher." >}}
  {{< slider-image
    src="v1.0.0/charger2.jpg"
    alt="Fixiere die Stifte mit Verpackungsmaterial und drehe die ganze Platine um." >}}
  {{< slider-image
    src="v1.0.0/charger3.jpg"
    alt="Verlöte die Pins auf der Platinenoberseite." >}}
  {{< slider-image
    src="v1.0.0/charger4.jpg"
    alt="Ziehe die schwarzen Plastikteile von den Pins ab."
    noprint=true >}}
  {{< slider-image
    src="v1.0.0/charger5.jpg"
    alt="Verlöte die Pins mit dem blauen Lademodul." >}}
{{< /slider >}}

## Kleine elektronische Bauteile

### Widerstände

Ordne zunächst alle Widerstände richtig zu, indem du die Farbcodes abliest oder
mit einem Multimeter misst:

<div class="table-wide">

| Bauteil         | Wert           | Farbcode 4 Ringe                             | Farbcode 5 Ringe                                   | SMD Code   |
| -----------     | -------------: | :------------------------------------------: | :------------------------------------------------: | ------     |
| **R1, R2**      | 1,2&nbsp;kΩ    | {{< resistor  "brown,red,red,gold" >}}       | {{< resistor "brown,red,black,brown,brown" >}}     | 122 / 1201 |
| **R3**          | 10&nbsp;kΩ     | {{< resistor  "brown,black,orange,gold" >}}  | {{< resistor "brown,black,black,red,brown" >}}     | 103 / 1002 |
| **R4**          | 150&nbsp;kΩ    | {{< resistor  "brown,green,yellow,gold" >}}  | {{< resistor "brown,green,black,orange,brown" >}}  | 154 / 1503 |
| **R5**          | 300&nbsp;kΩ    | {{< resistor  "orange,black,yellow,gold" >}} | {{< resistor "orange,black,black,orange,brown" >}} | 304 / 3003 |

</div>

{{% alert title="Achtung: Bauteile aus alter Version" color="warning" %}}
Kommen deine Bauteile aus einem alten Bausatz, kann es sein, dass
die Widerstände auf einem Papier mit Widerstandswerten aufgeklebt sind.
Ordne die Widerstände anhand der Tabelle neu zu, da die Widerstandsnummern
sich mit 1.0.0 geändert haben.
{{% /alert %}}


Nachdem du alle Widerstände zugeordnet hast, platziere sie an den dafür
vorgesehenen Stellen auf der Vorderseite der Hautplatine. Stecke die Beinchen
jeweils durch die beiden Löcher und biege sie etwa 30° nach außen, sodass die
Widerstände nicht mehr herausfallen. Drehe die Platine um und löte alle Beine
auf der Rückseite fest. Danach schneide den überstehenden Draht ab.

Du kannst auch SMD-Widerstände verwenden, falls du solche hast. In diesem Fall
gehen wir davon aus, dass du auch weißt, wie du sie anbringst.

{{< slider >}}
  {{< slider-image
    src="v1.0.0/widerstande1.jpg"
    alt="Platziere alle Widerstände." >}}
  {{< slider-image
    src="v1.0.0/widerstande2.jpg"
    alt="Verbiege die Beine auf der Rückseite, um die Bauteile zu fixieren." >}}
  {{< slider-image
    src="v1.0.0/widerstande3.jpg"
    alt="Verlöte alle Kontakte." >}}
{{< /slider >}}

### Kondensatoren
{{% alert title="Achtung: Unterschiedliche Kondensatorgrößen" color="warning" %}}
Es gibt C2 und C3 in unterschiedlichen Baugrößen. Bevor du sie festlötest,
prüfe, ob sie unter den ESP32 passen. Passen sie nicht, montiere sie liegend.
{{% /alert %}}

Identifiziere zunächst alle Kondensatoren und ordne sie korrekt zu. **C1** ist
ein 100&thinsp;nF großer Keramikkondensator, er ist in der Regel blau oder
hellbraun und hat manchmal die Aufschrift *104* (verwechsle ihn nicht mit der
Sicherung, die normalerweise gelb ist). **C2** und **C3** sind
Elektrolytkondensator mit 22&thinsp;µF Kapazität, diese sind normalerweise
schwarz mit heller Aufschrift, zylinderförmig und haben zwei unterschiedlich
lange Beine, die aus der gleichen Seite des Zylinders herauskommen.

Bei C2 und C3 musst du **auf die Polung auf Platine und Kondensator achten**!
Ein Plus-Symbol auf der Platine zeigt die Seite, auf die das längere Bein
gehört. Die andere Seite ist auf der Platine ausgefüllt, am Kondensator ist
dort ein heller Streifen auf den Hauptkörper aufgedruckt, und das Bein ist
etwas kürzer.

Stecke alle Kondensatoren, genau wie zuvor die Widerstände, von der Vorderseite
ein und biege die Beine etwas um. Drehe dann die Platine erneut um, löte die
Beine auf der Rückseite fest und schneide anschließend den überstehenden Draht ab.

{{< slider >}}
  {{< slider-image
    src="PCB00.03.10_04_Kondesatoren_01_Kondensatoren.jpg"
    alt="Die Kondensatoren" >}}
  {{< slider-image
    src="v1.0.0/kondensatoren01.jpg"
    alt="Platziere C1 und C2." >}}
  {{< slider-image
    src="v1.0.0/kondensatoren03.jpg"
    alt="Prüfe, ob C2 unter den ESP32 passt. Falls nicht, lasse ausreichend lange Beinchen nach oben überstehen, um C2 liegend zu montieren." >}}
  {{< slider-image
    src="v1.0.0/kondensatoren02.jpg"
    alt="Montiere C3, und prüfe wie bei C2, ob er unter den ESP32 passt."
    noprint=true >}}
{{< /slider >}}

### Sicherung

Die Sicherung **F1** ist in der Regel gelb, flach und hat 2 Beine. Der Körper
ist rund oder rechteckig. Die Sicherung sieht so ähnlich aus wie ein
Keramikkondensator (ist aber größer), verwechsele sie nicht mit C1.

Die Polung der Sicherung ist egal. Die kleinen Biegungen in den Beinchen sorgen
für den richtigen Abstand zur Platine, da die Sicherung nicht direkt darauf
aufsitzen darf, um korrekt zu funktionieren.

Die Sicherung wird wie die bisherigen Bauteile eingebaut.

### Batteriestecker

{{% alert title="Achtung: Farben nicht eindeutig" color="warning" %}}
Die Stecker sind nicht standardisiert und werden teilweise verdreht geliefert,
sodass die Bilder irreführend sein können. Achte auf jeden Fall darauf, dass
deine Batterie am Ende so gepolt wird, wie die Bedruckung der Platine es
vorgibt. Das kann bedeuten, dass du den Stecker andersherum als auf den Bildern
gezeigt auflöten musst. Schau dir erst alle Komponenten genau an und entscheide dann,
wie herum bei dir "richtig" ist.
{{% /alert %}}

Der Batteriestecker wird üblicherweise als Kombination mit dem Kabel zusammen
geliefert. Du solltest sie zunächst **zusammengesteckt lassen, um die richtige
Polung herauszufinden**.

Hast du ein rote-schwarzes Batteriekabel solltest du **rot für Plus** und
**schwarz für Minus** verwenden. Ist dein Batteriekabel braun-schwarz, nimm
**braun als Plus** und **schwarz als Minus**. Bei anderen Farben musst du dich
selbst entscheiden.

Kürze das Batteriekabel auf 12&thinsp;cm.

Finde heraus, wie herum dein Stecker auf die Platine (bei J1 bzw. "Battery")
gelötet werden muss, damit die Farbzuordnung mit der Platinenbedruckung
übereinstimmt. Löse dann das Kabel vom Stecker.

{{< imgproc "battery-connector-orientations.png" Fit "500x500">}}
    Zwei unterschiedliche Ausrichtungen des Batteriesteckers. Die korrekte
    Ausrichtung ist vom gelieferten Stecker und Kabel abhängig.
{{</ imgproc >}}


{{% alert title="Achtung: Heiße Pins" color="warning" %}}
Die Pins leiten die Hitze durch den Stecker hindurch, es empfiehlt sich daher,
zum Festhalten beim Löten eine Pinzette zu verwenden.
{{% /alert %}}

Stecke den Stecker auf die Platine, drehe sie um und löte auf der Rückseite
einen der Pins fest. Prüfe nun, ob der Stecker passend und gerade auf der Platine
sitzt, ansonsten kannst du noch nacharbeiten. Löte dann die andere Seite fest.

### Diode

Die Diode ist das größte der einzelnen Elemente, mit rundem schwarzen Körper
und ziemlich dicken Beinen, die an beiden Seiten heraustreten. Ein Ende des
Diodenkörpers ist mit einem hellen Kreis markiert.

Bei der Diode musst du dringend die **Polung beachten**. Die Diode "steht" auf
dem Kreis auf dem PCB, der weiße Ring auf der Diode zeigt dabei nach oben (von der Platine weg).
Auf der Platine ist die richtige Polung auch als Piktogramm abgebildet.

Biege das Bein auf Seite des Ringes komplett herum und stecke die Diode an die
richtige Stelle. Kürze die Enden bereits vor dem Löten, um beim Lötvorgang
weniger Metall aufheizen zu müssen.

Eigentlich sollen Halbleiter nur kurz gelötet werden, aber dieses ist ein sehr
großes Bauteil und auch erstaunlich robust. Arbeite zügig, aber erwarte, dass
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

### Verbinder für Taster und Display

Die weißen Buchsen für die Steckverbinder zum Ein- und Ausschalten (J2) sowie
zum Display (J3) werden nebeneinander oben auf die Hauptplatine aufgelötet.

Löte wie beim Batteriestecker immer erst ein Bein fest, und prüfe danach, ob
die Buchse fest und vollständig auf der Hauptplatine aufsitzt. Löte danach erst
die anderen Beine an.

{{< imgproc "connectors.png" Fit "500x500">}}
    Die beiden Stecker werden wie auf der Platine aufgedruckt platziert und
    sollten flach und fest auf der Platine aufsitzen.
{{</ imgproc >}}

## Sensorboards


### Vorbereitung

{{% alert title="Hinweis für Workshops" color="info" %}}
Die Vorbereitung wird in Workshops gern im vorweg für euch
gemacht, da das Auslöten relativ anspruchsvoll ist. Ihr könnt diese dann
vermutlich überspringen (bitte nachfragen) und direkt mit dem Einbau beginnen.
{{% /alert %}}

{{% alert title="Achtung: Auf Polung achten" color="warning" %}}
Manche Sensorboards haben den Plus- und Minuspol markiert.
Bitte merken oder markieren, falls die Polung durch den folgenden Umbau nicht mehr zu
lesen ist. Ist nichts markiert ist der Minuspol auf der Seite des Ultraschallboards,
die weiter von dem metallischen quaderförmigen Bauteil in der Ecke der 
Ultraschallplatine entfernt ist.
{{% /alert %}}

Die **erste Option** ist die bevorzugte. Dafür wird die JST-Buchse auf dem
Sensorboard durch eine **abgewinkelte JST-Buchse** ersetzt. Ziehe hierfür das weiße
Kunststoffteil der Buchse von den Metallstiften. Versehe diese mit ein wenig
Lötzinn, sodass es wieder leichter fließt, und löte sie dann aus, indem du sie
einzeln erhitzt und mit einer Pinzette herausziehst. Reinige anschließend die zwei
Löcher mit einer Entlötsaugpumpe oder etwas Entlötlitze, sodass sie nicht mehr
verstopft sind. Löte dann die gewinkelte Buchse so ein, dass sie von der
Winkelstiftleiste weg zeigt. Sie sollte auf der Rückseite der Platine sitzen.

Die **zweite Option** ist der Einsatz einer Winkelstiftleiste anstelle der
richtigen JST-Buchse. Löte wie oben beschrieben die vorhandene gerade
JST-Buchse aus der Modulplatine aus, und ersetze sie durch eine
Winkelstiftleiste mit 2 Stiften. Führe dabei das kurze Ende nur so weit ins
Sensorboard ein, dass die Spitze der Stifte gerade so auf der anderen Seite
herausschaut. Diese Option solltest du nur wählen, wenn du keine gewinkelten
JST-Buchsen zur Hand hast.

Die **letzte Option** ist ein wenig riskant und nicht besonders stabil, hat
aber auch schon oft und erstaunlich gut funktioniert. Ziehe dafür den weißen
Kunststoff der bestehenden JST-Buchse ab, und biege die zurückbleibenden
Metallstifte vorsichtig um, sodass sie weg von der vierpoligen Stiftleiste
"nach oben" zeigen. Dabei sollte die Biegung in etwa 2&thinsp;mm Abstand von der
Modulplatine anfangen. Am besten geht das mit einer stabilen Pinzette und einer
Flachzange. Die Stifte können dabei brechen, dann musst du es kreativ
reparieren. Auf die gebogenen Stifte lässt sich ein JST-Stecker aufstecken,
aber nicht arretieren. Wir hatten jedoch bisher keine Probleme mit dieser
Variante im Betrieb.

### Einbau

Stecke beide Sensorboards an die vorgesehenen Plätze, achte dabei auf die
Beschriftung (+3V3, TRIG, ECHO, GND). Die Boards stehen sich "gegenüber" und
dürfen einander nicht berühren, die JST-Buchsen zeigen dabei nach außen. Wenn die
Platzierung der Boards klar ist, lege das innere Board wieder beiseite.

Fixiere zunächst das äußere Board. Hierfür kannst du die Hauptplatine mit dem
gestecktem Board auf den Kopf drehen, es steht so ganz gut von selbst.

Löte nur einen Pin an, danach prüfe wie üblich die Ausrichtung. In der Regel
ist das Board beim ersten Versuch noch nicht senkrecht, und liegt auch nicht
auf voller Länge auf dem PCB auf, sondern hat "Luft" darunter. Dies kannst du
gut korrigieren, indem du die Hauptplatine mit Board in eine Hand nimmst,
sodass du mit dem Finger oder Daumen die Ausrichtung des Boards korrigieren
kannst. Mit der anderen Hand kannst du jetzt noch den Lötkolben führen. Da der
erste Pin bereits verlötet ist, benötigst du kein dritte Hand für das Lötzinn.
Passe die Ausrichtung so lange an, bis sie aus allen Richtungen gut
aussieht.

Erst dann werden die drei verbleibenden Pins verlötet. Platziere das zweite
Sensorboard auf dieselbe Weise, und kürze am Ende alle Stifte.

{{< slider >}}
  {{< slider-image
    src="v1.0.0/ultraschall1.jpg"
    alt="Sensorboardplatzierung von oben." >}}
  {{< slider-image
    src="v1.0.0/ultraschall2.jpg"
    alt="C1 und C2 platzieren." >}}
{{< /slider >}}


## Spannungsregler Option 2 (Adafruit)
{{% alert title="Achtung: Alternative Bestückungsvariante" color="warning" %}}
Hast du keinen Adafruit Regler, sondern oben das rote Modul
verbaut, verzichte auf diesen Schritt.
{{% /alert %}}

Nach den Sensorboards kann das Adafruit Spannungsreglermodul verbaut werden.

Kürze die mitgelieferte Stiftleiste auf drei Stifte. Stecke diese von der
Bestückungsseite auf das Board des Spannungsreglers und löte sie fest.

Stecke den Spannungsregler von unten auf den Addon-Bereich der Hauptplatine,
sodass folgende Verbindungen entstehen (keine Sorge, das Adafruit-Modul liefert
die benötigten 3,3&nbsp;V, hatte aber nicht genug Platz für die
Nachkommastelle):

<center>

| Adafruit-Board   |   | OpenBikeSensor Platine   |
| ---------------: | - | :----------------------- |
| VIN              | = | VDC                      |
| 3V               | = | 3.3V                     |
| GND              | = | GND                      |

</center>

Klebe etwas Isolierband über die Lötstellen des Ultraschallboards, wo der
Spannungsregler später sitzen wird. Stecke dann den Spannungsregler
an seinen Platz und löte ihn fest.

**Setze eine Lötbrücke zwischen `EN` und `VIN` des 3.3V Reglers (siehe
Bilder).** Du kannst dafür z.B. einen abgeschnittenen Pin eines Widerstands
verwenden.

{{< slider >}}
  {{< slider-image
    src="v1.0.0/ada3v3_01.jpg"
    alt="Position und Lötbrückenpositionierung." >}}
  {{< slider-image
    src="v1.0.0/ada3v3_02.jpg"
    alt="Position mit Lötbrücke." >}}
  {{< slider-image
    src="v1.0.0/ada3v3_04.jpg"
    alt="Ansicht von Platinenoberseite" >}}
  {{< slider-image
    src="v1.0.0/ada3v3_05.jpg"
    alt="Das Isolierband trennt den Spannungsregler von den Kontakten auf der Hauptplatine." >}}
  {{< slider-image
    src="v1.0.0/ada3v3_06.jpg"
    alt="Seitenansicht des montierten Adafruit-Spannungsreglers." >}}
{{< /slider >}}

## SD-Karten-Modul und GPS-Modul

Trenne von einer Winkelstiftleiste eine Gruppe von 6 Stiften ab. Stecke sie
genau wie in der Abbildung gezeigt in das SD-Karten-Modul ein. Die **korrekte
Ausrichtung ist wichtig**, es gibt viele Möglichkeiten die Stiftleiste zu stecken,
und die meisten davon passen am Ende nicht.

- Die Stiftleiste wird von der Oberseite der Modulplatine aufgesteckt.
- Die Stifte haben direkt oberhalb der Platine ihre Biegung.
- Dann erst kommt die schwarze Kunststoffleiste.
- Die lange, gerade Seite der Pins zeigt vom Modul weg.

Verlöte die Winkelstiftleiste mit dem SD-Modul und kürze die überstehenden Pins
auf der Rückseite.

Auch auf das **GPS-Modul** muss eine Winkelstiftleiste gelötet werden.

- Die Stiftleiste wird mit der **langen** Seite in das GPS board gesteckt.
- Die Stiftleiste steckt auf der Bestückungsseite des GPS Boards.
- Die kurze Seite der Stiftleiste zeigt im rechten Winkel nach unten.

Stecke die Module auf das PCB und achte dabei erneut auf die Ausrichtung. Die
Oberseiten beider Modulplatinen müssen **zur Mitte der
OpenBikeSensor-Hauptplatine** zeigen. Beachte auch das Foto unten.

Verlöte wie gewohnt erst einen der Pins auf der Rückseite. Prüfe, dass das
Modul wirklich **senkrecht** auf der Hauptplatine steht und auch auf ganzer
Länge mit der Unterkante auf der Platine aufliegt, korrigiere dies bei Bedarf.
Verlöte erst dann die restlichen Pins und kürze sie.

{{< imgproc "v00.03.12/10_SD_Module/DSC08026.JPG" Fit "400x300" >}}
    Die 6-polige Winkelstiftleiste muss von oben ins SD-Karten-Modul eingesetzt
    werden, sodass die langen Enden der Stifte vom Modul weg zeigen und die
    schwarzen Plastikteile einige Millimeter über die Platine hinausragen.
{{</ imgproc >}}

{{< imgproc "gps-sd-placement.jpg" Fit "800x600" >}}
    Hier werden die zwei Module auf der Hauptplatine platziert. Die Oberseite
    des Moduls zeigt in Richtung der Buchsenleiste für den ESP32.
{{</ imgproc >}}

{{% alert title="Glückwunsch!" color="success" %}}
Mit diesem Schritt ist die Hauptplatine des OpenBikeSensors fertig bestückt.

Nun widmen wir uns den kleinen Teilen, dem Display und dann dem Zusammenbau.
Viele der folgenden Schritte können in beliebiger Reihenfolge ausgeführt
werden.
{{% /alert %}}

{{% alert title="Workshop-Hinweis" color="info" %}}
Solltest du deinen OpenBikeSensor im Rahmen eines Workshops bauen, empfiehlt
sich ab jetzt das Testen deiner Elektronik, damit du noch genug Zeit hast um
während des Workshops eventuelle Probleme zu beheben. Sprich hierfür deine
Workshop-Leiter:innen an.
{{% /alert %}}

{{% alert title="Tipp!" color="info" %}}
In den folgenden Schritten werden manche Stecker gecrimpt. Wenn du das zum
ersten Mal machst, übe den Vorgang am besten zunächst mit überschüssigen
Kabelteilen und extra Crimpkontakten, bevor du am bereits gekürzten Kabel
einige Versuche benötigst und so immer weniger Kabellänge übrig ist.
{{% /alert %}}

## Ein-/Aus-Schalter

Schneide dir zwei kurze Stück Kabel von etwa 10&thinsp;cm Länge zurecht. Die eine Seite
wird jeweils mit einem Crimp versehen. Falls dein Batteriekabel über 20&thinsp;cm lang
ist, kannst du das Batteriekabel schon mal auf 12&thinsp;cm kürzen und die entstehenden
Abschnitte für dein Schalterkabel verwenden.

Isoliere die andere Seite beider Kabel ca. 5&thinsp;mm weit ab und verdrille die Enden.
Nimm etwas Lötzinn und lasse es auf die freiliegenden Litzen fließen (dies wird
"verzinnen" genannt). Dadurch lässt sich die Litze wie ein solider Draht biegen.

Biege die Enden in eine U-Form um. So lassen sie sich leicht in die Ösen des
Schalters einführen und halten sich selbst dort fest, bis du sie festgelötet
hast. Achte darauf nur kurz zu löten, sonst schmilzt der Kunststoff im Stecker.
Insbesondere der mittlere Pin ist hierbei kritisch, er muss dieselbe Länge wie die äußeren Pins haben,
wird aber bei zu hoher Temperatur herausgedrückt.

Verdrille nun beide Kabel auf voller Länge zu einem und führe dann die zwei Crimps in
das Steckergehäuse ein. Die Verdrillung wird sich wieder ein wenig lockern,
aber sollte wie ein Kabel wirken und keine große Schlaufe mehr bilden.

{{< imgproc "v00.03.12/12_Switch/DSC08041.JPG" Fit "500x500" >}}
    Schalter mit Kabel und Stecker, noch unverdrillt&hellip;
{{< /imgproc >}}

## Ultraschallsensor-Kabel kürzen und crimpen

{{% alert title="Achtung: Koax-Kabel" color="warning" %}}
Der innere Leiter des Ultraschallsensorkabels ist sehr dünn und kann leicht
durchtrennt werden. Achte beim Abisolieren auf guten Griff am Restkabel, und
verwende am besten eine automatische Abisolierzange, da sonst die innere
(weiße) Isolierung herausreißen kann.
{{% /alert %}}

{{% alert title="Tipp!" color="info" %}}
Übe das folgende Abisolieren und Crimpen mit den Resten des zuvor gekürzten Kabels,
damit du dies nicht erst an den gekürzten Kabeln lernst.
[Hier gibt es ein Video aus der Community](https://www.youtube.com/watch?v=Z607TQjel1M), welches den folgenden Prozess zeigt.
{{% /alert %}}

Kürze langen schwarzen Kabel der Sensoren auf etwa 10&thinsp;cm, da die langen Kabel
nicht in das Gehäuse passen und die Plastikeinfassung der bestehenden
Stecker zu starr und zu dick für das Gehäuse ist.

Entferne etwas mehr als 1&thinsp;cm der schwarzen Außenisolierung des Kabels. Schiebe die
Schirmung zur Seite und verdrille die einzelnen Leiter miteinander. Dies ist
einer der zwei Leiter, die gecrimpt werden müssen. Isoliere vom inneren Leiter
nur etwa 2&thinsp;mm ab.

Dann werden beide Leiter gecrimpt. Der Crimpkontakt muss für optimale
Verbindung den inneren Leiter und seine Isolierung greifen. Kürze die
Schirmung, sodass alle Adern gleich lang sind, dann crimpe sie alle gemeinsam.
Hier gibt es keine Isolierung, aber die Schirmung insgesamt ist stark genug um
auch mechanisch zu halten.

Entferne, falls vorhanden, einzelne abstehende Leiter der Schirmung die nicht
im Crimp gesichert sind, sodass diese keinen Kurzschluss verursachen können.

Führe die Crimpkontakte in das Steckergehäuse ein. Achte dabei auf die **korrekte
Polung**. Die Schirmung muss auf dem Pin des Ultraschallboards zu liegen kommen, das etwas mehr zur Mitte
der Hauptplatine hin zeigt. Auf manchen Ultraschallboards ist der zugehörige Pin mit Minus markiert.

Falls die Sensorboards modifiziert und mit gewinkelten
JST-Platinensteckern ausgestattet wurden (siehe *Sensorboards &raquo;
Vorbereitung*), wurde die **Polung der Buchsen vertauscht** und du musst deinen
Stecker ebenfalls andersherum polen.

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

Kürze das Batteriekabel auf ca. 12&thinsp;cm und isoliere etwa 5&thinsp;mm der Enden ab.

Identifiziere die Polung der Batterie. Der Pluspol ist auf der Seite mit
Einkerbung im Akku-Gehäuse und in der Regel auch mit einem Plus auf dem
Aufdruck markiert oder durch einen roten Ring gekennzeichnet.
**Messe im Zweifel mit dem Multimeter nach.**

Es empfiehlt sich, den Akku bereits in den Gehäusedeckel einzulegen, sodass er
bei der Arbeit nicht wegrollt. Statte beide Lötfahnen an ihrem Ende zunächst
mit einem großzügigen Lötpunkt aus. Lasse die Stellen wieder abkühlen, dann
nimm das Kabelende in die eine Hand und den Lötkolben in die andere, erhitze
den Lötpunkt von Neuem und führe das Kabelende seitlich in diesen ein, wenn das
Lötzinn flüssig geworden ist. Die Kabel sollen von der Lötfahne in die Mitte
der Batterie führen. Löte nicht zu lange an der gleichen Stelle, wenn etwas
nicht klappt, lasse das Ganze lieber eine Minute lang abkühlen, bevor du es
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
("heat-set inserts") hineingehören. Dort greifen später die Schrauben, die das
ganze Gerät zusammenhalten. Die Gewinde müssen an folgenden Stellen angebracht werden:

* 3 Stück im Hauptgehäuse für das PCB (mit Montagelöchern der Platine vergleichen)
* 5 Stück im Hauptgehäuse für den Hauptdeckel
* 1 Stück im Hauptgehäuse beim GPS-Deckel
* 3 Stück im Displaygehäuse

Stelle deinen Lötkolben auf ca. 180-220&thinsp;°C ein und reinige die Spitze gründlich,
sodass kein Lot mehr daran hängt. Alternativ kannst du eine eigene Spitze für
diese Aufgabe verwenden, und danach wieder wechseln.

Finde eines der vorgesehenen Löcher, nimm ein Gewinde und drücke es so weit es
geht von Hand in das Loch hinein. Halte das Gewinde bei Bedarf mit einer
Pinzette fest, während du den Lötkolben auflegst und leichten Druck ausübst.
Versuche, das Gewinde so senkrecht wie möglich und behutsam versinken lassen.

Das Gewinde sollte lieber ein bisschen zu tief sitzen, als über den Rand überzustehen,
um die Gehäuseteile bündig miteinander verbinden zu können. Die Gewinde, mit
denen das PCB befestigt wird, sollten allerdings auch nicht zu tief versinken,
sonst bildet sich eine Ausbuchtung auf der Außenseite.

**Vorsicht:** Die Gewindeeinsätze sind noch lange nach dem Einsetzen heiß und
kühlen erst langsam ab. Lege das Gehäuseteil am besten einige Minuten zur
Seite, wenn du alle Gewinde darin platziert hast.

### Magnete

Setze die kleinen Würfelmagnete in die USB-Abdeckung ein. Wenn deine Abdeckung mit anderen
OpenBikeSensoren kompatibel sein soll, solltest du hierbei die Polung von einer Vorlage übernehmen.

Setze zunächst die zwei Magnete in die Abdeckung selbst ein. Die Magnete haben nur
**in einer Achse** Anziehungskraft, sie dürfen also nicht seitlich eingesetzt
werden. Es empfiehlt sich, die vier Magnete "als Stange" zu halten, um ein
Verdrehen zu vermeiden. Alternativ kannst du mit einem permanenten Marker die
richtige Seite markieren.

Um die zwei Gegenstücke einzubauen, setze je einen Magneten auf einen der
Magnete in der Abdeckung. Stecke dann die Abdeckung ins Hauptgehäuse, und
drücke damit den einzelnen Magneten in sein vorgesehenes Loch. So stellst du
sicher, dass die Magneten einander anziehen.

Sollten die Magnete nicht von selbst in ihrem Loch stecken bleiben, kannst du
sie auch mit etwas Sekunden- oder Alleskleber fixieren.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/15_Prepare_Case/DSC08072.JPG"
    alt="Einpressgewinde in Displaygehäuse einschmelzen" >}}
  {{< slider-image
    src="v00.03.12/15_Prepare_Case/DSC08074.JPG"
    alt="Hauptgehäuse mit Einpressgewinde (ältere Version mit zwei Muttern für GPS)" >}}
  {{< slider-image
    src="v00.03.12/15_Prepare_Case/DSC08075.JPG"
    alt="USB-Abdeckung mit Magneten" >}}
{{< /slider >}}

## Displayeinheit

In diesem Abschnitt baust du das Display mit Knopf und Kabel in sein Gehäuse
ein.

Verwende folgende Tabelle als Vorschlag für die Zuordnung der Leiter im
Displaykabel zu ihren Anschlüssen, oder tausche die Farben durch deine eigene
Zuordnung aus, falls dein Kabel andere Leitungsfarben verwendet.

| Farbe                      | OBS-Seite      | Displayseite | Button  |
| -------------------------- | -------------- | ------------ | ------- |
| blau                       | `SDA`          | `SDA`        |         |
| schwarz                    | `GND`          | `GND`        |         |
| grau                       | `BUT`          | -            | Pin 1   |
| weiß                       | `SCL`          | `SCK`        | -       |
| braun                      | `+3V3`         | -            | Pin 2   |
| kurzes Kabel (siehe unten) | -              | `VDD`        | Pin 2   |

### Kabel vorbereiten

Entferne auf beiden Seiten des langen Displaykabels die **Isolierung**, auf der
einen Seite ca. 5-7&thinsp;cm lang (dies ist die Seite für das Hauptgerät) und auf der
anderen nur ca. 3&thinsp;cm. Die lange Seite wird **vollständig gecrimpt**, auf der
kurzen Seite **crimpe nur drei Leiter**, nämlich die für `GND`, `SDA`, `SCL`
(laut Farbtabelle den schwarzen, blauen und weißen Leiter). Die zwei
restlichen Leiter, `+3V3` (braun) und `BUT` (grau) werden angelötet und dafür
ca. 5&thinsp;mm lang abisoliert.

Bereite ein **kleines Kabelstück** von ca. 3&thinsp;cm Länge vor, und crimpe auch hier eine
Seite und isoliere die andere ab.

**Verzinne** alle drei Kabelenden die zum Löten vorgesehen sind .

### Knopf

**Schraube den Knopf** in das Gehäuseoberteil des Displays hinein. Wenn die Mutter
nicht das Gewinde greifen kann (den Knopf gibt es in verschiedenen Längen)
kannst du auch etwas Heißkleber verwenden.

**Löte die drei Leiter** an die zwei Seiten des Buttons an. Dabei kommen das kleine
Kabel mit `+3V3` (braun) zusammen auf eine Seite und `BUT` (grau) allein auf
die andere. Auch hier empfiehlt sich, wie beim Schalter, wenn du zuerst die
abisolierten und verzinnten Enden zu einer U-Form biegst und in die Ösen
einhängst, um dann **nur kurz löten** zu müssen, damit der Kunststoffkörper des
Knopfes nicht schmilzt. Wenn du mehrfach löten musst, lass den Taster zwischendurch
abkühlen.

### Stecker

Ziehe am Displaymodul die **schwarzen Plastikteile** von der Stiftleiste ab und
**kürze die vier Stifte** um jeweils ca. 2&thinsp;mm.

Entferne vom 4-poligen JST-Steckergehäuse die **Arretierung** (auf der einen Seite
leicht hervorstehende Plastikflügel), zum Beispiel mit einem Cuttermesser oder
Seitenschneider. Nur so passt der Stecker am Ende in das kleine Displaygehäuse.

Stecke die 4 gecrimpten Kabelenden (drei vom langen Displaykabel und eines vom
kurzen Kabelstück) in das Steckergehäuse. Die Zuordnung kannst du anhand der
Tabelle und der Beschriftung auf der Displayplatine machen, oder du kopierst
die abgebildete Reihenfolge.

Führe die 5 gecrimpten Kabelenden am langen abisolierten Ende des Kabels in das
5-polige JST-Steckergehäuse ein. Die Zuordnung kannst du wieder anhand der
Tabelle und der Beschriftung auf der Hautplatine machen oder erneut die
abgebildete Reihenfolge kopieren.

### Zusammenbau
Sollte dein Display nicht ins Gehäuse
passen, kannst du mit einem Seitenschneider die Ecken der Platine etwas
bearbeiten, bis es passt.
Entferne anschließend die **Schutzfolie** vom Display.

Stecke den **4-poligen Stecker** auf die gekürzten Pins am Display und setze
dieses in das Gehäuseoberteil ein. Kürze bei Bedarf die Pins weiter, bis der
Stecker ganz auf der Displayplatine aufliegt, damit er ins Displaygehäuse
passt.

Setze **zwei rechteckige Magnete** in die Seitentasche ein. Wenn dein Display
mit anderen OpenBikeSensoren kompatibel sein soll, solltest du hierbei die
Polarität von einer Vorlage übernehmen. Manchmal sind die Magnete etwas lose
und klappern, fixiere sie dann mit Kleber oder umwickele sie mit Klebeband.

Fädel nun das Kabel durch das **ovale Loch** der Unterseite der Displayeinheit.

Setze die Gehäuseteile zusammen und drehe die **drei Schrauben** hinein, die sie
zusammenhalten.

Stecke die beiden Hälften der **Zugentlastung** in die Öffnung der Unterseite,
aus welcher das Kabel herauskommt. Setze erst die eine Seite ein, und dann die
zweite etwas angewinkelt, bevor du sie beide zusammendrückst, sodass sie das
Kabel am nicht abisolierten Teil greifen. Falls der zweite Teil sich nicht
hinein hebeln lässt, kannst du die angewinkelten unteren Ecken mit einem
Seitenschneider etwas weiter abrunden, sodass die Halterung leichter hineingeht.

Schraube mit je zwei Schrauben und Sechskantmuttern die zwei Hälften der Zugentlastung
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


## Firmware installieren

Zunächst muss die OpenBikeSensor-Firmware auf den ESP32 installiert werden.
Dieser Vorgang heißt auf Englisch "to flash" oder eingedeutscht "flashen".

Schließe dafür den ESP32 mit einem Mikro-USB oder USB-C Kabel direkt an einen Computer an.
Benutze dann eine der folgenden Methoden, um die Firmware darauf zu installieren:

* Das online Flash-Tool auf
  [https://install.openbikesensor.org](https://install.openbikesensor.org), das du mit
  einem aktuellen Chrome-Browser öffnen solltest. Dies ist die **einfachste
  Methode**, falls sie bei dir funktioniert.
* [Anleitung für Linux]({{< relref "../../firmware/flash-linux" >}})
* [Anleitung für Windows]({{< relref "../../firmware/flash-windows" >}})
* [Anleitung für MacOS]({{< relref "../../firmware/flash-macos" >}})


## Elektronik testen

**Vor dem Einbau ins Gehäuse** sollte die Elektronik getestet werden. Führe
zunächst einen Sichttest der gelöteten Stellen durch, bevor du das erste Mal die
Batterie und/oder ein Ladekabel anschließt.

* Sind alle Lötpunkte gut verbunden?
* Siehst du eine [kalte Lötstelle](https://de.wikipedia.org/wiki/L%C3%B6ten#Kalte_L%C3%B6tstelle) irgendwo?
* Findest du auf der Platine heruntergetropftes Lötzinn oder einen Drahtrest,
  der einen Kurzschluss verursachen könnte?
* Sind irgendwo versehentlich benachbarte Pins miteinander verbunden worden
  (häufig bei den Kondensatoren der Fall)?
* Sind alle Module senkrecht und stabil eingebaut?

Löte bei Bedarf die fehlerhaften Stellen nach.

Für den Test der Elektronik solltest du einen **vollständig geladenen Akku**
verwenden. In Workshops ist meist einer vorbereitet, hast du nur einen neuen und
ungeladenen Akku, so kannst du ihn mit deinem OpenBikeSensor jetzt aufladen:

1. Ziehe alle Stecker aus der Platine und entferne den ESP32.
2. Stecke den Hauptschalter ein.
3. Stecke das Batteriekabel polungsrichtig ein
4. Schließe ein normales USB-C Ladegerät (5 V) an das Lademodul an.
   * Einige Geräte funktionieren nur nach Anschluss an ein Ladegerät.
   * Ein Handyladeadapter funktioniert eigentlich immer, neuere oder
     leistungsfähigere USB-C Netzteile manchmal nicht.
     USB-A zu USB-C Kabel sind meistens funktionsfähig.
5. Während des Ladevorgangs leuchtet die LED am Lademodul rot, wenn der Akku
   voll ist blau.

Wenn du einen vollen Akku hast, beginne mit dem **Test der Elektronik**:

1. Ziehe den Akku zunächst wieder ab. Verbinde nur das Display und den
   Hauptschalter und stecke den ESP32 auf seine Buchsenleisten. Achte dabei
   darauf, dass der USB-Port des ESP32 in die auf der Platine markierte
   Richtung zeigt.
2. Achte darauf, dass der Schalter ausgeschaltet ist.
3. Stecke die Batterie jetzt polungsrichtig ein.
4. Schalte den Hauptschalter ein.
   * Nach etwa einer Sekunde sollte der Startbildschirm auf dem Display
     erscheinen.
   * Wenn das nicht passiert, schalte das Gerät wieder aus. Sofern nichts
     stinkt oder gar raucht, kannst du alle Verbindungen prüfen und es noch
     einmal versuchen.
   * Wenn dein Display funktioniert und ein OpenBikeSensor-Logo sowie etwas
     Text anzeigt, schalte das Gerät aus und fahre mit dem nächsten Testschritt
     fort.
5. Stecke die FAT32 formatierte SD-Karte in die Halterung. Starte das Gerät und warte, bis auf
   dem Display "SD OK" erscheint.
   * Kommt kein "SD OK", sondern ein "SD Error" und/oder ein Zähler, der 10
     Sekunden lang zählt, so wurde deine SD-Karte nicht erkannt. Prüfe in
     diesem Fall die Verbindungen zwischen dem ESP32 und dem SD-Modul auf
     Leitfähigkeit, nimm dafür den
     [Schaltplan](https://github.com/openbikesensor/OpenBikeSensor_PCB_Board/blob/merged/OpenBikeSensor03/generated/OpenBikeSensor_pcb_Schaltplan.pdf)
     zu Hilfe.
   * Wenn deine SD-Karte funktioniert, schalte das Gerät aus und fahre mit dem
     nächsten Testschritt fort.
6. Stecke die GPS-Antenne an das GPS-Modul an. Sei vorsichtig mit dem kleinen
   Stecker und der Buchse, sie können leicht verbiegen. Starte das Gerät und
   lasse es eine Weile unter freiem Himmel liegen. Es kann bis zu 20 Minuten
   dauern, bis ein GPS-Signal gefunden wurde. Keine Sorge, das ist nicht jedes
   Mal so. Wenn das GPS-Signal gefunden wird, schaltet das Gerät vom
   Startbildschirm in den Messmodus und zeigt die Abstände links und rechts an
   (ohne Sensoren natürlich nicht). In diesem Fall fahre mit dem nächsten
   Testschritt fort.
7. Stecke die Ultraschallsensoren an ihre Module an. Starte das Gerät,
   überspringe bei Bedarf durch Drücken des Knopfes das Suchen des GPS-Signals, und prüfe,
   dass die Sensoren plausible Abstände messen.

Wenn alle Komponenten korrekt funktionieren, kannst du das Gerät ausschalten,
alle Verbindungen wieder trennen, und mit dem Einbau ins Gehäuse beginnen. Hast
du einen Fehler gefunden, der sich nicht durch Nachlöten reparieren lässt,
hilft dir vielleicht eine der Anleitung auf der [Fehlersuche-Seite]({{< relref
"../troubleshooting" >}}) weiter.

## Zusammenbau

* Kabel und Halterung
  - Die vier Sechskantmuttern in die Wand des Gehäuses einsetzen (bei Gehäuse
    mit zwei Halterungen sind es acht Sechskantmuttern).
  - Sind die Sechskantlöcher zu eng, die Muttern mit der längeren M3 Schraube
    von der Außenseite in die Öffnung ziehen.
  - Ist ein Sechskantloch auch dafür zu eng, vorsichtig mit dem Lötkolben
    nachdrücken, und die Mutter von der Außenseite mit der längeren Schraube führen.
    Vermeide dabei, mit dem Lötkolben das Plastik zu berühren.
  - Falls du ein Gehäuse mit mehreren Montageöffnungen baust, entscheide dich, an
    welcher Öffnung du die Halteklammer installieren willst. Diese Öffnung
    führt auch später das Kabel. Die andere Öffnung wird mit dem Deckel
    (`AttachmentCover`) verschlossen.
* PCB im Hauptgehäuse platzieren
  - Zunächst die SD-Karte einlegen, den ESP abziehen.
  - Gesamtes Board in leichtem Winkel herabsenken, auf Ausrichtung der USB-C
    Ladebuchse achten. Bei Wiederzusammenbau am Displaykabel vorbeinavigieren.
  - Bei Bedarf Unreinheiten des Gehäuses (vom 3D-Druck) entfernen, wenn das PCB
    daran hängen bleibt.
  - Mit 3 Stück M3x6 oder M3x8 im Gehäuse verschrauben.
  - Nun kann der ESP wieder aufgesteckt werden. Dabei die Richtung der
    USB-Markierung mit Mikro-USB-Buchse dem ESP32 abgleichen,
    und sicherstellen, dass die Pins nicht um ein oder zwei Löcher verrutscht
    eingesteckt werden.
  - Muss der ESP wieder abgezogen werden, um die Platinenschraube darunter wieder
    zu lösen, kann man einen Inbus als "Enterhaken" verwenden, um den ESP zu lockern

* Displaykabel in Gehäuse einstecken
  - Führe das Displaykabel mit dem Stecker voran von außen in das Hauptgehäuse hinein
    (Falls nicht bereits geschehen).
Entscheide dich, ob du
eine Top-Rider oder Back-Rider [Variante]({{< relref "../case/variants" >}})
bauen möchtest, und führe das freie Ende des Kabels durch die entsprechende
Öffnung im Hauptgehäuse. Möchtest du beide Halterungen montieren und dir damit
beide Varianten ermöglichen, kannst du dir die Öffnung frei aussuchen.
  - Die Halterung mit Zugentlastung anbringen und damit das Kabel fixieren.
    Noch nicht festziehen, nur sicherstellen, dass die Muttern nicht mehr
    herausfallen.
  - Das Kabel sollte außen um die Elektronik herumgeführt werden, *nicht*
    zwischen dem GPS- und SD-Karten-Modul hindurch. Im neuen Gehäuse sollte
    dafür genug Platz sein.
  - Jetzt zeigt sich auch, warum ca. 5-10&thinsp;cm Abisolierung hier sinnvoll ist, denn
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
  - Falls das Antennenkabel nicht reicht oder beschädigt wird, kann die GPS-Antenne mithilfe eines
    hinreichend langen Antennenkabels mit IPEX/U.FL Stecker verlängert werden.
    Hierzu:
       - Den Metallschild des GPS-Moduls ablöten.
       - Das neue Kabel vorsichtig durch Rollen unter Cuttermesser auf etwa
         5-7&thinsp;mm abisolieren.
       - Die Schirmung zurückschieben.
       - Noch vorsichtiger die innere Isolierung durch ganz sanftes Rollen
         mit dem Cuttermesser abisolieren.
       - Das kurze Kabel ab- und das neue, längere anlöten.
       - Den Metallschild des Moduls wieder in ursprünglicher Ausrichtung
         auflöten.
* Schalter in Gehäuse einsetzen
  - Einschaltrichtung mit "I/O" Aufdruck des Gehäuses vergleichen.
  - Möglichst mit der mitgelieferten Unterlegscheibe und Mutter fixieren.
  - Schalterkabel verdrillen, falls nicht bereits geschehen&hellip;
  - Kabel entlang der Gehäusewand zur Buchse führen und dort einstecken.
* Sensoren einbauen
  - Auf der Rückseite des Sensors gibt es einen Pfeil, der mit "UP" die
    Richtung markiert, wo später oben sein soll.
  - Einen Sensor ins Hauptgehäuse einbauen, den anderen in den Deckel.
  - Sensoren einstecken. Den Sensor im Gehäuse an das ihm naheliegendste
    Sensorboard anschließen, den Sensor vom Deckel in das entferntere (Anschluss über dem ESP32).
* Akku einbauen
  - Akku im Deckel mit Kabelbinder fixieren (falls vorher noch nicht erledigt)
  - Einstecken. Polung beachten!
  - Möglicherweise überstehendes Kabel möglichst auf der Seite des GPS
    verstauen. Die Adern verdrillen und parallel legen.
* Konfiguration des Sensors:
  * Die Anzeige kann im [Konfigurationsmodus]({{<relref "/docs/user-guide/configuration">}}) auf den Simple-Mode gestellt werden.
   * Außerdem kann die Breite des Lenkers und das WLAN eingestellt werden.
   * Bei einem Neustart des Sensors wird nun auf der Sensor-Anzeige der Simple-Mode mit dem Abstand des linken Sensors angezeigt - abzüglich der Breite des Lenkers.
   * Alternativ im Profimodus weiterfahren.
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
Dein OpenBikeSensor ist nun fertig. Herzlichen Glückwunsch, wir wünschen Dir
viel Spaß bei der Nutzung!

In der [Bedienungsanleitung]({{<relref "/docs/user-guide">}}) findest du
weiterführende Anleitungen zu Themen wie Montage, Konfiguration und Aufzeichnung.
{{% /alert %}}
