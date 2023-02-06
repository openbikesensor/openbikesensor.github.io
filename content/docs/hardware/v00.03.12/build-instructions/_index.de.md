---
title: Bauanleitung für den OpenBikeSensor v00.03.12
linkTitle: Bauanleitung
aliases:
- /bauanleitung
- /bauanleitung/v00.03.12
---

{{< print-qr-link >}}

{{% alert title="Achtung: Veraltete Bilder" color="warning" %}}
Die Bilder sind noch nicht angepasst für diese Version. Im Zweifel Texte beachten!
{{% /alert %}}

Dies ist die Anleitung zum Aufbau des OpenBikeSensors v00.03.12 in der
Standardvariante. Andere Versionen können über das Dokumentationsmenü
aufgerufen werden.

Die beschriebene Vorgehensweise ist nur eine Möglichkeit, zu einem
funktionierenden Modell zu kommen. Wenn du alternative Wege gehen möchtest,
kannst du das natürlich tun. Solltest du einen massentauglichen besseren oder
einfacheren Weg für einen der Schritte finden, freuen wir uns über
[Änderungsvorschläge](https://github.com/openbikesensor/openbikesensor.github.io/pulls)
oder eine kurze [Nachricht]({{< relref "/community" >}}).

{{< imgproc "v00.03.12/19_Assembly/DSC08101.JPG" Fit "800x600" >}}
Ein fertig gebauter OpenBikeSensor der Version v00.03.12
{{< /imgproc >}}

## Voraussetzungen und Hinweise

Achtung, bitte lies die folgenden Hinweise bevor du mit dem Aufbau
anfängst. Wir wissen genau wie du, dass keiner gerne Warnhinweise liest,
aber gerade wenn du Anfänger bist könnte dies wichtig sein.

- Diese Anleitung setzt voraus, dass die Grundtechniken wie Löten, das
  Abisolieren von Kabeln und das Crimpen von JST-Verbindern bereits bekannt
  sind. Für letzteres empfehlen wir das
  [JST-Crimp-Tutorial](https://www.youtube.com/watch?v=jHfYzrSF4pY). 

- Wenn du unsicher bist, wo du ein Bauteil auf dem Board unterbringen sollst,
  kannst du [die interaktive Stückliste (BOM)](/html/BOM_00.03.12.html)
  verwenden, um dir anzeigen zu lassen, wo ein Bauteil eingesetzt werden kann.
 
- Du baust den Sensor vollkommen selbstständig und ohne unsere Aufsicht auf. Du
  bist daher auch selbst für Fehler oder Verletzungen verantwortlich, sollten
  welche auftreten.
 
- Gehe bewusst und gewissenhaft mit deinen Werkzeugen um. An scharfen
  Werkzeugen wie einem Cuttermesser oder einem Seitenschneider kannst du dich
  schneiden. Das vordere Ende des Lötkolbens kann bis zu 450°C heiß werden.
  Berühre daher immer nur das dafür vorgesehen Griffstück. Sollte er dir
  wegrutschen oder herunterfallen weiche daher lieber aus anstatt ihn
  aufzufangen.
 
- Es handelt sich beim OpenBikeSensor um ein frei verfügbares Design, und nicht
  um ein fertiges Gerät. Alles, was wir dir mit den Bauteillisten,
  Schaltungsentwürfen und Anleitungen zeigen, sind Vorschläge und kann Fehler
  enthalten. Bist du dir an einer Stelle nicht sicher oder du glaubst einen
  Fehler gefunden zu haben, dann melde dich in der [Community]({{<
  relref "/community" >}}). Außerdem sind wir nicht für Fehler verantwortlich
  die du während des Aufbaus machst. Sollte etwas schief gehen und du brauchst
  Hilfe kannst du dich natürlich trotzdem an uns wenden.
 
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

## Schritt 1: Buchsenleisten

* Falls nur Buchsenleisten mit 16 Pins vorhanden sind, müssen diese auf 15 Pins gekürzt werden:
  * Mit dem Seitenschneider kürzen.
  * Mit dem Cuttermesser oder Schleifpapier nacharbeiten, um keine scharfe Kante zu hinterlassen.
* Buchsenleisten auf ESP32 stecken, um den Abstand später genau passend zu haben.
  * Auf die Richtung der Pins (Kontaktbeine an der Buchsenleiste) achten! 
  * Die Pads (Lötstellen auf der Platine) sind nicht symmetrisch, auf je einer
    Seite ist nur jeder zweite Pin mit Pad versehen. 
  * {{% alert title="Achtung" color="warning" %}}
Vor dem Verlöten mit der Platine vergleichen, ob jeder Pin auch ein Pad bekommt.
{{% /alert %}}
* Buchsenleisten mit gestecktem ESP32 positionieren. Auf gute zentrierte Ausrichtung achten.
* Einen Eck-Pin festlöten. Dabei den ESP32 gut festhalten, evtl. zu zweit arbeiten.
* Ausrichtung prüfen, wenn der ESP32 verrutscht ist, nacharbeiten.
* Diagonal gegenüberliegenden Pin anlöten. Ausrichtung erneut prüfen.
* Alle äußeren Verbindungen verlöten.
* Den ESP32 vorsichtig abziehen, sodass die Pins dabei nicht verbiegen. 
* Die inneren Kontakte anlöten.

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

## Schritt 2: Spannungsregler (rot)

* Wir verwenden Stiftleisten, um den Spannungsregler richtig zu positionieren. Verlötet
  werden diese nicht, sondern später wieder herausgezogen und beim Lademodul
  benutzt.
  - Bei Bedarf kann die beim SD-Karten-Modul mitgelieferte 6-polige Stiftleiste
    verwendet werden, diese wird nicht für die SD-Karte gebraucht.
  - Stifte von der Leiste abtrennen: 1x1 und 1x2 Stifte.
  - Spannungsregler mit Stiften in zwei gegenüber liegenden Lötstellen platzieren.
  - Stifte nicht verlöten!
* Das ausgerichtete Modul an den anderen beiden SMD-Pads verlöten.
  - Die Außenseite der Modulplatine hat ein halbrudes Loch mit Kontaktfläche.
  - Diese wird mit Lötzinn verbunden zum Pad auf der OBS-Hauptplatine darunter.
  - Auf guten Fluss des Lötzinns zum unteren Pad achten.
* Die Ausrichtungsstifte abziehen und die restlichen Kontakte ebenfalls in
  SMD-Bauweise verlöten.

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

## Schritt 3: USB-C-Lademodul (blau)

* Für das blaue Lademodul 2x2 Stifte und 2x1 Stift vorbereiten (siehe oben).
* Modul auf PCB auflegen
* Die Stifte und Stiftpaare einstecken und evtl. fixieren.
* Aufpassen, dass das Modul flach auf dem PCB aufliegt, sodass später die
  Ausrichtung der USB-Ladebuchse korrekt ist.
* Die Stifte von der anderen Seite verlöten.
* Die schwarzen Plastikteile entfernen und die Oberseite ebenfalls verlöten.
* Alle überstehenden Stifte mit dem Seitenschneider kürzen.

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

## Schritt 4: Widerstände

* Widerstände richtig zuordnen (Farbcodes z.B. via [kiloohm.info](http://kiloohm.info/) decodieren oder mit einem Multimeter messen):
  * **R1:** 10&thinsp;kΩ (braun - schwarz - orange - gold)
  * **R2:** 150&thinsp;kΩ (braun - grün - gelb - gold)
  * **R3:** 300&thinsp;kΩ (orange - schwarz - gelb - gold)
  * **R6, R7:** 1,1&thinsp;kΩ (braun - braun - rot - gold) oder 1&thinsp;kΩ (braun - schwarz - rot - gold)
* {{% alert title="Achtung: Besonderheit R7" color="warning" %}}
R7 wird anders verlötet!
{{% /alert %}}
  * Leider enthält die Platine einen Fehler, und R7 kann nicht wie vorgesehen platziert werden, sonst ist der Widerstand dem einen Sensorboard im Weg.
  * Statt auf der Oberseite verlöten wir den Widerstand auf der Unterseite.
  * Die Beinchen werden dabei nicht durch die Löcher gesteckt. Wir behandeln den Widerstand wie ein SMD-Bauteil.
  * Pads identifizieren. Eines der Pads auf der Platinenunterseite mit etwas
    Lötzinn benetzen. Sehr wenig Zinn verwenden, sonst sickert es durch das
    Loch durch und bildet auf der Rückseite eine Perle, die dann im Weg ist.
  * Zinn wieder verflüssigen, Widerstand mit einem Bein darin fixieren. Der
    Widerstand liegt flach auf der Unterseite der Platine auf, mit nicht
    gebogenen Beinen.
  * Anderes Bein mit Lötzinn auf anderes Pad löten.
  * Beine kürzen.
  * Falls doch Lötzinn zur Oberseite der Platine durchgesickert ist, mit
    Entlötlitze reduzieren.
* Falls ein SMD-Widerstand für R6 verwendet werden soll:
  * Einen Lötpunkt auf ein Pad setzen.
  * Widerstand flach auf das PCB legen, Lötpunkt erneut schmelzen und
    das Bauteil mit der Pinzette darauf schieben.
  * Andere Seite normal festlöten.
  * R7 **nicht** so verbauen (s.o.)
* Normale THT-Widerstände (R1, R2, R3, R6) stecken, verlöten, Beine kürzen.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R7/DSC07880.JPG"
    alt="R7: Eines der Pads verzinnen" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R7/DSC07885.JPG"
    alt="R7: Den Widerstand wie ein SMD-Bauteil einseitig anlöten" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R7/DSC07889.JPG"
    alt="R7: Die zweite Seite verlöten" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R7/DSC07890.JPG"
    alt="R7: Fertig montiert" 
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R6/DSC07891.JPG"
    alt="Ein Widerstand (R6) platziert" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R6/DSC07893.JPG"
    alt="Auf der Rückseite verlöten" >}}
  {{< slider-image
    src="v00.03.12/04_Resistors_R6/DSC07895.JPG"
    alt="Beine kürzen. Widerstände R1-R3 ebenso montieren." >}}
{{< /slider >}}

## Schritt 5: Kondensatoren

* Kondensatoren identifizieren und richtig zuordnen
  * **C1:** 100&thinsp;nF (in der Regel blau, manchmal Aufschrift *104*)
  * **C2, C3:** 22&thinsp;µF Elektrolytkondensator (i.d.R. schwarz mit heller Aufschrift, zylinderförmig, unterschiedlich lange Beine)
* Bei C2 und C3: Polung auf Platine und Kondensator beachten! 
  - Plus: Langer Pin
  - Minus: Kurzer Pin, mit Streifen markierte Seite, auf PCB ausgefüllte Hälfte
* Kondensatoren C1 bis C3 stecken, zum Fixieren die Beine umbiegen
* Auf Rückseite verlöten und überstehenden Draht abkneifen

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

## Schritt 6: Lötpunkt / Brücke

* JP1 (mittig auf der Platine) mit einem Lötpunkt versehen und damit überbrücken
* Erstes Bild im nächsten Schritt zeigt das Ergebnis

## Schritt 7: Stromversorgung

* Sicherung (in der Regel dunkelgelb, flach mit 2 Beinen, rund oder rechteckig)
  * Position: *F1*
  * Die Polung ist egal
  * Die kleinen Biegungen in den Beinchen sorgen für den richtigen Abstand.
  * Einstecken, senkrecht verlöten, Beine abkneifen.
* Batteriestecker
  * Stecker und Kabel zusammenstecken
  * Beschriftung auf der Platine beachten (Rot: „Plus“, Schwarz: „Minus“)
  * {{% alert title="Achtung: Farben nicht eindeutig" color="warning" %}}
Die Stecker sind nicht standardisiert und werden teilweise
verdreht geliefert, sodass die Bilder irreführend sein können. Orientiere
dich auf jeden Fall für die richtige Polung an den Farben der Kabel, und
der Aufschrift auf der Platine, nicht an der Geometrie des Steckers.
Optional: Die Kabel in dem Stecker tauschen, damit die Farbzuordnung stimmt.
{{% /alert %}}
  * Auf der Rückseite einen Pin anlöten.
  * Das Kabel abziehen.
  * Auf guten Sitz des Steckers achten. Wenn der Stecker noch nicht flach und
    senkrecht auf der Platine aufsitzt, die Lötstelle noch einmal heiß machen
    und den Stecker an seinen Platz drücken.
    {{% alert title="Achtung: Heiße Pins" color="warning" %}}
Die Pins leiten die Hitze, eine Pinzette ist empfehlenswert.
{{% /alert %}}
  * Den zweiten Pin festlöten. 
* Diode
  * **Polung beachten**: Die Diode "steht" auf dem Kreis auf dem PCB, aber der
    weiße Ring auf der Diode dabei zeigt nach oben.
  * Diode umbiegen und aufstecken
  * Enden vor dem Löten etwas kürzen, um beim Löten weniger Metall aufheizen zu
    müssen
  * Verlöten: Eigentlich sollen Halbleiter nur kurz gelötet werden, aber dieses
    ist ein sehr großes Bauteil, und auch erstaunlich robust. Arbeite zügig,
    aber erwarte dass es eine Weile dauert, bis das Bauteil und die Pads auf
    Temperatur gebracht sind und das Lötzinn schmilzt.
  * {{% alert title="Achtung: Heiße Diode" color="warning" %}}
Die Diode nimmt viel Hitze auf und ist noch lange nach dem Löten sehr heiß.
{{% /alert %}}
  * Die überstehenden Enden nachkürzen.


{{< slider >}}
  {{< slider-image
    src="v00.03.12/07_Power/DSC08004.JPG"
    alt="Die fertig platzierten Bauteile (oben links)" >}}
{{< /slider >}}

## Schritt 8: Verbinder für Taster und Display

* J5 (Displaykabel)
  * 5-Pin-Konnektor gemäß Markierung auf Platine aufsetzen
  * Die Aussparungen zeigen in Richtung der Mitte der Platine.
  * Einen Pin von unten verlöten.
  * Ausrichtung prüfen und evtl. korrigieren (Hinweise hierzu siehe
    Batteriestecker).
  * Restliche Pins verlöten.
* J6 (Schalter Ein/Aus)
  * 2-Pin-Connector so aufsetzen, dass er möglichst wenig über den Rand der
    Platine übersteht und verlöten.
  * Polung egal.
  * Wie oben verlöten.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/08_Connectors/DSC08005.JPG"
    alt="5-poligen Stecker richtigherum aufstecken" >}}
  {{< slider-image
    src="v00.03.12/08_Connectors/DSC08006.JPG"
    alt="Auf der Rückseite verlöten, auf guten Sitz achten" >}}
  {{< slider-image
    src="v00.03.12/08_Connectors/DSC08010.JPG"
    alt="2-poligen Stecker ebenso montieren" >}}
{{< /slider >}}

## Schritt 9: Sensorboards


### Vorbereitung 

{{% alert title="Hinweis für Workshops" color="info" %}}
Die Vorbereitung wird in Workshops gern im Vorweg für euch
gemacht, da das Auslöten relativ anspruchsvoll ist. Ihr könnt diese dann
vermutlich überspringen (bitte nachfragen) und direkt mit dem Einbau beginnen.
{{% /alert %}}
{{% alert title="Achtung: Auf Polung achten" color="warning" %}}
Die Sensorboards haben den Plus- und Minuspol markiert.
Bitte merken oder markieren, falls die Polung durch den Folgenden Umbau nicht mehr zu
lesen ist.
{{% /alert %}}
* Option 1: (bevorzugt, benötigt gewinkelte 2-polige JST-Stecker)
  * Die JST-Stecker aus dem Sensorboard auslöten. Hierfür:
    - Das weiße Kunststoffteil abziehen
    - Die zurückbleibenden Metallstifte mit etwas mehr Lötzinn versehen und
      herausziehen.
    - Das innere Paar Löcher von Lötzinn befreien (Entlötsaugpumpe oder
      Entlötlitze).
  * Gewinkelte JST-Stecker stattdessen einlöten.
  * Das Kabel, wenn eingesteckt, sollte weg von den 4 Pins des Boards zeigen
    (nach oben, wenn montiert).
  * {{% alert title="Achtung: Auf Polung achten" color="warning" %}}
Durch die Verwendung einer gewinkelten Buchse wird die Polung im
Vergleich zu vorher vertauscht. Die Sensorkabel-Stecker werden später beim
Crimpen entsprechend umgekehrt gepolt in das Steckergehäuse eingeführt.
{{% /alert %}}
* Option 2 (Winkelstiftleiste):
  * Die JST-Stecker aus dem Sensorboard auslöten (siehe oben).
  * Durch eine 2-polige Winkelstiftleiste ersetzen.
  * Dabei das kurze Ende nur so weit ins Sensorboard einführen, dass die Spitze
    der Stifte gerade so auf der anderen Seite herausschaut und dann verlöten.
* Option 3 (Kontakte biegen):
  * Den weißen Kunststoff vom JST-Stecker abziehen
  * Die zurückbleibenden Metallstifte vorsichtig umbiegen, sodass sie weg von
    der vierpoligen Stifteleiste "nach oben" zeigen, dabei die Biegung in etwa
    2mm Abstand vom Board anfangen.
  * Die Stifte können dabei brechen, dann muss kreativ repariert werden ;)
  * Hier lässt sich ein JST-Stecker einstecken, aber nicht arretieren. Wir
    hatten jedoch bisher keine Probleme mit dieser Variante im Betrieb.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/09_Sensor_Boards/DSC08012.JPG"
    alt="Ein einzelnes Sensorboard" 
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/09_Sensor_Boards/DSC08013.JPG"
    alt="Das weiße Kunststoffteil entfernen" >}}
  {{< slider-image
    src="v00.03.12/09_Sensor_Boards/DSC08014.JPG"
    alt="Kontakte des alten Steckers auslöten, neuen Stecker einlöten" >}}
{{< /slider >}}

### Einbau

* Beide Sensorboards stecken, dabei Beschriftung (+3V3, TRIG, ECHO, GND)
  beachten. Die Boards stehen sich "gegenüber" und dürfen einander nicht
  berühren. Wenn die Platzierung der Boards klar ist, das inner Board wieder
  beiseite legen.
* Das erste Board fixieren. Hierfür kann das PCB mit gestecktem Board auf den
  Kopf gedreht werden, es steht so ganz gut. 
* Nur einen Pin anlöten. Danach die Ausrichtung prüfen. In der Regel ist das
  Board hier noch nicht senkrecht, und liegt auch nicht auf voller Länge auf
  dem PCB auf, sondern hat "Luft" darunter.
* Das PCB und Board in eine Hand nehmen, sodass mit dem Finger oder Daumen die
  Ausrichtung des Boards korrigiert werden kann. Mit der anderen Hand kann der
  Lötkolben geführt werden. Da der eine Pin bereits verlötet ist benötigen wir
  keine weitere Hand für das Lötzinn. So kann die Ausrichtung leicht angepasst
  werden, bis sie aus allen Richtungen gut aussieht.
* Erst dann werden die drei verbleibenden Pins verlötet.
* Das zweite Board genauso einlöten. 
* Überstehende Stifte kürzen.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/09_Sensor_Boards/DSC08020.JPG"
    alt="Sensorboards platzieren (schief aufgestellt für Übersicht, bitte gerade löten)" >}}
  {{< slider-image
    src="v00.03.12/09_Sensor_Boards/DSC08024.JPG"
    alt="Auf der Rückseite verlöten, Beine kürzen" >}}
{{< /slider >}}

## Schritt 10: SD-Karten-Modul

* Gewinkelte Stiftleiste mit 6 Pins vorbereiten.
* Gewinkelte Stiftleiste genau wie in der Abbildung gezeigt in SD-Karten-Modul
  stecken. Die Ausrichtung ist wichtig, es gibt acht Möglichkeiten die Stiftleiste zu
  stecken, sieben davon funktionieren nicht.
  - Die Stiftleiste wird von der Oberseite der Modulplatine aufgesteckt.
  - Die Stifte haben direkt oberhalb der Platine ihre Biegung.
  - Dann erst kommt die schwarze Kunststoffleiste.
  - Die lange, gerade Seite der Pins zeigt vom Modul weg.
* Stiftleiste mit dem Modul verlöten und überstehende Pins abkneifen.
* Modul auf das PCB stecken (Ausrichtung und Beschriftung beachten).
* Verlöten und Stifte kürzen.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/10_SD_Module/DSC08025.JPG"
    alt="SD-Karten Modul und Stiftleiste" 
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/10_SD_Module/DSC08026.JPG"
    alt="Stiftleiste in Modul einstecken (Richtung beachten)" 
    noprint=true >}}
  {{< slider-image
    src="v00.03.12/10_SD_Module/DSC08027.JPG"
    alt="Stiftleiste in Modul verlöten (Richtung beachten)" >}}
  {{< slider-image
    src="v00.03.12/10_SD_Module/DSC08028.JPG"
    alt="Modul platzieren" >}}
  {{< slider-image
    src="v00.03.12/10_SD_Module/DSC08032.JPG"
    alt="Auf der Rückseite anlöten und kürzen" >}}
{{< /slider >}}

## Schritt 11: GPS-Modul

* Gewinkelte Stiftleiste mit 4 Pins vorbereiten
* Stiftleiste in PCB einlöten:
  * Von der Unterseite stecken.
  * Langes Ende der Pins steht seitlich heraus.
  * {{% alert title="Achtung: Anordnung der Stiftleiste" color="warning" %}}
Achte darauf, dass das kurze Ende der Stiftleiste in das Board
und das lange Ende in das GPS-Modul eingelötet wird. Ansonsten ragt das
GPS-Modul aus dem Gehäuse heraus.
{{% /alert %}}
* Eng anliegend verlöten, Stifte kürzen
* GPS-Modul aufstecken, sodass es in der Aussparung des PCB liegt.
* Einen Pin Verlöten, Ausrichtung korrigieren wie bei Sensorboards 
* Restliche Pins Verlöten und Stifte kürzen

{{< slider >}}
  {{< slider-image
    src="v00.03.12/11_GPS_Module/DSC08033.JPG"
    alt="4-polige Winkelstiftleiste abkürzen und stecken (Richtung beachten)" >}}
  {{< slider-image
    src="v00.03.12/11_GPS_Module/DSC08034.JPG"
    alt="Auf der Oberseite verlöten" >}}
  {{< slider-image
    src="v00.03.12/11_GPS_Module/DSC08035.JPG"
    alt="GPS-Modul senkrecht aufstecken und verlöten" >}}
{{< /slider >}}

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

## Schritt 12: Ein/Aus-Schalter

* Zwei Stück Kabel, ca. 10cm lang, abtrennen.
* Einseitig crimpen und in 2-fach JST Steckergehäuse einführen.
* Andere Kabelenden an den Schalter löten.
  * Etwa 5mm des Kabels abisolieren.
  * Drahtenden verdrillen und verzinnen.
  * Zu einem "U" oder "Z" biegen und in die Öse an den Schalterpins einführen.
  * Nur kurz löten, sonst schmilzt der Kunststoff im Stecker.
  * {{% alert title="Achtung" color="warning" %}}
Auf dem Schalter und auf dem Gehäuse sind 0/1 markiert.
Damit Später die Schalterstellung 1 das Gerät einschaltet, vorher prüfen
in welche Richtung die Kabel gelöten werden müssen. 
{{% /alert %}}

{{< slider >}}
  {{< slider-image
    src="v00.03.12/12_Switch/DSC08041.JPG"
    alt="Schalter mit Kabel und Stecker" >}}
{{< /slider >}}

## Schritt 13: Ultraschallsensor-Kabel kürzen und crimpen

* Die langen schwarzen Kabel der Sensoren auf etwa 10cm kürzen, da die langen
  Kabel nicht in das Gehäuse passen und auch die Plastikeinfassung der
  bestehenden Stecker zu starr und zu dick für das Gehäuse ist.
* *Empfehlung*: Schrumpfschlauch (sofern vorhanden, optional) direkt nach dem
  Kürzen auf das schwarze Sensorkabel aufziehen, noch bevor es abisoliert und
  gecrimpt wird.
* {{% alert title="Achtung: Koax-Kabel" color="warning" %}}
Der innere Leiter ist sehr dünn und kann leicht
durchtrennt werden. Beim Abisolieren auf guten Griff am Restkabel achten und
wenn möglich Abisolierzange verwenden, da sonst die innere (weiße) Isolierung
herausreißen kann. 
{{% /alert %}}
* {{% alert title="Tipp!" color="info" %}}
Übe das folgende Abisolieren und Crimpen mit den Resten des zuvor gekürzten Kabels, 
damit du dies nicht erst an den gekürzten Kabeln lernst.
[Hier gibt es ein Video aus der Community](https://www.youtube.com/watch?v=Z607TQjel1M), welches den folgenden Prozess zeigt.
{{% /alert %}}
* Abisolieren:
  * Etwa 2cm des Kabels abisolieren.
  * Die Schirmung zur Seite schieben und alle Leiter miteinander verdrillen (dies ist einer der zwei Leiter, die gecript werden müssen). 
  * Den inneren Leiter etwa 1mm abisolieren.     
* Crimpen:
  * Beide Leiter werden gecript.
  * Der Crimpkontakt muss für optimale Verbindung den inneren Leiter und seine Isolierung greifen.
  * Die Schirmung auf dir gleiche Länge kürzen und gemeinsam crimpen. Eventuell
    einzelne abstehende Leiter entfernen, sodass diese keinen Kurzschluss
    verursachen.
* Stecken:
  * {{% alert title="Achtung: Auf Polung achten" color="warning" %}}
Beim Belegen der Steckkontakte des Steckers auf die Polung
achten. Beim Einsatz der 90° gewinkelten JST-Platinenstecker (siehe Schritt 9
&raquo; Vorbereitung) wird die Polung der Buchsen vertauscht. Der Schirmungsleiter
liegt auf Minus, der innere Leiter ist Plus. 
Die korrekte Belegung findet sich auf den Sensorbords.
{{% /alert %}}
* Zum Schluss Schrumpfschlauch (falls vorhanden) erhitzen und befestigen, dabei
  etwa 3-5mm vom Stecker entfernt positionieren um ein Biegen in Steckernähe
  beim Einstecken zu ermöglichen. 
    * *Hinweis*: Dieser Schritt kann auch erst nach dem Testen der Eletronik 
    gemacht werden, wenn sichergestellt ist, dass der Sensor korrekt funktioniert.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/13_Sensor_Wiring/DSC08040.JPG"
    alt="Sensor mit gekürztem Kabel und Stecker" >}}
  {{< slider-image
    src="PCB00.03.10_15_Sensor_03_Sensor_Detail_Stecker.jpg"
    alt="Detailaufnahme Stecker und Schirmung" >}}
{{< /slider >}}

## Schritt 14: Batteriekabel anlöten

* Die Akkus müssen mit Lötfahnen ausgestattet sein. Akkus ohne Lötfahnen dürfen
  nicht gelötet werden!
* Das Batteriekabel (rot und schwarz) auf ca. 12cm kürzen und neu auf ca. 5mm
  abisolieren.
* Die Polung der Batterie identifizieren. Der Pluspol ist auf der Seite mit
  Einkerbung im Akku-Gehäuse, und in der Regel auch mit einem Plus auf dem
  Aufdruck markiert. **Im Zweifel mit dem Multimeter nachmessen.**
* Es empfiehlt sich, den Akku bereits in den Gehäusedeckel einzulegen, sodass
  er nicht wegrollt.
* Jede Seite zunächst mit einem großzügigen Lötpunkt ausstatten. Dann den
  Lötpunkt erneut erhitzen und das Kabelende seitlich ins Lötzinn einführen.
  Die Kabel sollen von der Lötfahne in die Mitte der Batterie führen.
* Die Batteriekontakte mit Isolierband (wenn möglich Kapton-Tape) isolieren und
  einfach umwickeln, sodass die Pole und Lötfahnen komplett bedeckt sind und
  die Kabel mechanisch fixiert werden.
* Die Batterie mit einem kleinen Kabelbinder im Deckel befestigen.

{{% alert title="Achtung" color="warning" %}}
Batterie noch nicht einstecken!
{{% /alert %}}

{{< slider >}}
  {{< slider-image
    src="v00.03.12/14_Battery_Wiring/DSC08044.JPG"
    alt="Akku mit Kabel und Stecker (Polung beachten!)" >}}
  {{< slider-image
    src="v00.03.12/14_Battery_Wiring/DSC08045.JPG"
    alt="Kontakte isolieren" >}}
{{< /slider >}}

## Schritt 15: Gehäuse vorbereiten

* Einpressgewinde ("heat-set inserts") einbauen:
  - Den Lötkolben auf ca. 180-220°C einstellen, gut reinigen (kein Lot an der
    Spitze). Nach Möglichkeit eigene Spitze für diese Aufgabe verwenden, und
    danach wieder wechseln.
  - Einpressgewinde so weit wie möglich von Hand in das vorgesehene Loch drücken.
  - Lötkolben auflegen, nur sehr leichten Druck ausüben.
  - Gewinde so senkrecht wie möglich und behutsam versinken lassen.
  - Das Gewinde sollte lieber etwas zu tief sitzen, als über den Rand
    überzustehen, um die Gehäuseteile bündig miteinander verbinden zu können.
  - Die Gewinde, mit denen das PCB befestigt wird, nicht zu tief versenken, sonst
    bildet sich eine Ausbuchtung auf der Außenseite.
  - **Vorsicht:** Die Einpressgewinde sind noch lange nach dem Einsetzen heiß
    und kühlen erst langsam ab. Gehäuse am besten einige Minuten zur Seite legen.
* Einpressgewinde hier platzieren:
  * 3 Stück in Hauptgehäuse für das PCB (mit Montagelöchern der Platine vergleichen)
  * 5 Stück in Hauptgehäuse für Hauptdeckel
  * 1 Stück in Hauptgehäuse beim GPS-Deckel
  * 3 Stück in Displaygehäuse
* Kleine Würfelmagnete in USB-Abdeckung einsetzen
  * Wenn Kompatibilität mit anderen OBS gewünscht ist, muss auf gleiche Polung
    geachtet werden, da sonst die Abdeckungen nicht austauschbar sind.
  * Erst Magnete in Abdeckung einsetzen.
  * {{% alert title="Achtung: Anziehungskraft der Magnete" color="warning" %}}
Die Magnete haben nur in einer Achse Anziehungskraft, sie dürfen nicht seitlich eingesetzt werden.
Es empfiehlt sich, die vier Magnete "als Stange" zu halten, um ein
verdrehen zu vermeiden. Alternativ kann mit einem Marker die richtige Seite
markiert werden.
{{% /alert %}}
  * Dann einen Magnet auf einen der eingesetzten platzieren und die
    Abdeckung ins Hauptgehäuse stecken, dabei den einzelnen Magneten ins
    Hauptgehäuse eindrücken. Mit der anderen Seite wiederholen.

{{< slider >}}
  {{< slider-image
    src="v00.03.12/15_Prepare_Case/DSC08072.JPG"
    alt="Einpressgewinde in Displaygehäuse einschmelzen" >}}
  {{< slider-image
    src="v00.03.12/15_Prepare_Case/DSC08074.JPG"
    alt="Hauptgehäuse mit Einpressgewinde" >}}
  {{< slider-image
    src="v00.03.12/15_Prepare_Case/DSC08075.JPG"
    alt="USB-Abdeckung mit Magneten" >}}
{{< /slider >}}

## Schritt 16: Display-Kabel

{{% alert title="Reihenfolge beachten" color="warning" %}}
Beim Display ist die Reihenfolge sehr wichtig! Ein Kabel mit Steckern auf
beiden Seiten oder gelötetem Kabel/Knopf passt nicht unbedingt durch das Gehäuse.
{{% /alert %}}

* Zugentlastung in Displaygehäuse-Unterteil einsetzen:
  * Erste Hälfte der Zugentlastung einsetzen.
  * Zweite Hälfte von außen angewinkelt eindrücken, bei Bedarf die unteren
    Ecken mit dem Seitenschneider leicht abrunden, damit sie sich leichter in
    die vorgesehene Position stecken lässt.
* Kabel durch Displaygehäuse-Unterteil und Zugentlastung führen.
* Button in Gehäuseoberteil einschrauben.
* Stecker OBS-Seite
  * Das andere Kabelende durch das Displaygehäuse-Unterteil stecken.
  * Die Außenisolierung kann gut auf ca. 5cm abisoliert werden.
  * Die einzelnen Litzen **nur 1-2mm abisolieren** und alle 5 Litzen crimpen.
    Für stabilen Halt müssen die äußeren Flügel des Crimpkontakts die
    Isolierung der jeweiligen Litze greifen.
  * Gecrimpte Kabelenden in das JST-Gehäuse (5-polig) einführen.
    OBS-PCB und Display sind beschriftet. Zuordnung der Farben zu Beschriftung notieren. 
    Unten gibt es eine Verkabelungstabelle mit Farbvorschlag.
* Stecker Display-Seite
  * Vom JST-Gehäuse (4-polig) die Arretierung (auf der einen Seite leicht
    hervorstehende Plastikflügel) entfernen, also eben abschneiden (Cuttermesser
    oder Seitenschneider).
  * Nur 3 Kabel crimpen: `GND`, `SDA`, `SCL`. Die Außenisolierung auf 
    ca. 2cm abisolieren. 
  * `BUT` an eine Seite des Buttons löten. 
  * {{% alert title="Achtung: Button hitzeempfindlich" color="warning" %}}
Der Button ist hitzeempfindlich, bei zu langem/heißem Löten schmilzt der Kunststoff.
{{% /alert %}}
  * Kleines Kabelstück (ca. 3cm):
    - vorbereiten, einseitig crimpen
    - mit `+3V3` zusammen an andere Buttonseite löten
    - Crimpkontakt entspricht jetzt `+3V3` bzw. `VDD` (am Display)
  * Gecrimpte Kabelenden in das JST-Gehäuse (4-polig) einführen.

| OBS-Seite   | Displayseite   | Button   | Vorschlag Farbe        |
| ----------- | -------------- | -------- | ---------------------- |
| `SDA`       | `SDA`          |          | blau                   |
| `GND`       | `GND`          |          | schwarz                |
| `BUT`       | -              | Pin 1    | grau                   |
| `SCL`       | `SCK`          | -        | weiß                   |
| `+3V3`      | -              | Pin 2    | braun                  |
| -           | `VDD`          | Pin 2    | (kurzes Stück Kabel)   |


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
{{< /slider >}}

## Schritt 17: Display Zusammenbau

* 0,96-Zoll OLED-Displayboard vorbereiten
  * Die OLED-Boards haben teils etwas unterschiedliche Größen
    * Platine des Displays nach Bedarf etwas zurechtschneiden, insbesondere an den Ecken (Seitenschneider)
    * Je nach Genauigkeit des 3D-Drucks das Gehäuse etwas weiter ausfräsen
  * Schutzfolie von Display abziehen
  * Plastikteile an Steckkontakten entfernen und Pins um etwa 2mm kürzen.
* Display in Gehäuseoberteil (das mit dem Button) einsetzen.
* Stecker auf die gekürzten Pins aufstecken (Polung beachten). Gegebenenfalls die Pins weiter kürzen, 
  bis der Stecker ganz auf dem Board aufliegt, damit er ins Displaygehäuse passt.
* Magnete in die Seitentasche einsetzen.
  * Wenn Kompatibilität mit anderen OBS gewünscht ist, muss auf gleiche Polung
    geachtet werden, da sonst die Halterungen nicht austauschbar sind.
  * Je nach Genauigkeit des 3D-Drucks können die Magnete lose sein und etwas klappern.
    Die Magnete dann ggf. mit etwas Kleber fixieren oder mit einem Klebestreifen einwickeln.
* Gehäuseunterteil aufsetzen und mit Schrauben fixieren.
* Zugentlastung mit M3x8 Schrauben und Sechskantmuttern fixieren, dabei auf
  sechseckige Fixierung auf jeweils einer Seite der Zugentlastung achten.


{{< slider >}}
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


## Schritt 18: ESP32 flaschen

Zunächst muss die OpenBikeSensor-Firmware auf den ESP32 geflashed werden. 
Am schnellsten sollte dies mit dem Chrome-Browser über diese Webseite gehen:

* https://install.openbikesensor.org

[Folge alternaitv der Anleitung für dein Betriebssystem]({{< relref "firmware" >}}).

## Schritt 19: Elektronik testen

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

## Schritt 21: Zusammenbau

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
