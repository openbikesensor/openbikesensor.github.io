---
title: Bauanleitung
weight: 50
linkTitle: Bauanleitung
aliases:
- /bauanleitung/pro

description: >
    Sobald ein Bausatz für den OpenBikeSensor Pro zusammengestellt oder
    beschafft worden ist, kann anhand dieser Anleitung der Bau begonnen
    werden. Der Zusammenbau erfordert einige Lötarbeit, sowie dem Test
    der Elektronik und dem Einbau in das Gehäuse.
---

{{< print-qr-link >}}

Dies ist die Anleitung zum Aufbau des OpenBikeSensor Pro. Die Bauanleitung
setzt eine Platine mit vorbestückten SMD-Bauteilen, sowie die Verwendung der
auf der [Bauteileliste]({{< relref "../parts" >}}) dokumentierten Gehäuseteile
voraus. Auch die benötigten Verbrauchsgüter und Werkzeuge sind dort beschrieben.

Die beschriebene Vorgehensweise ist nur eine Möglichkeit, zu einem
funktionierenden Modell zu kommen. Wenn du alternative Wege gehen möchtest,
kannst du das natürlich tun. Solltest du einen massentauglichen besseren oder
einfacheren Weg für einen der Schritte finden, freuen wir uns über
[Änderungsvorschläge](https://github.com/openbikesensor/openbikesensor.github.io/pulls)
oder eine kurze [Nachricht]({{< relref "/community" >}}).

{{< imgproc "complete.jpg" Fit "800x600" >}}
Ein fertig gebauter OpenBikeSensor Pro der ersten Kleinserie
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
  wegrutschen oder herunterfallen, weiche lieber aus, anstatt ihn
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

- Bei einem der Bauteile handelt es sich um einen LiPo-Akku. Solche
  Zellen sind zwar heute weit verbreitet, können allerdings bei falscher
  Handhabung in Brand geraten. Solltest du nicht vertraut mit LiPos oder dir
  noch unsicher sein, lies bitte den Abschnitt in der Anleitung zur Vorbereitung und zum Umgang mit den Akkus
  sehr aufmerksam. Außerdem empfehlen wir, die Zelle aus einer
  vertrauenswürdigen Quelle zu beschaffen und nicht die billigste Zelle aus
  China zu bestellen, sowie den Akku nicht ohne Aufsicht zu laden.

- Es handelt sich beim OpenBikeSensor um ein frei verfügbares Design, und nicht
  um ein fertiges Gerät. Alles, was wir dir mit den Bauteillisten,
  Schaltungsentwürfen und Anleitungen zeigen, sind Vorschläge und kann Fehler
  enthalten. Bist du dir an einer Stelle nicht sicher oder du glaubst, einen
  Fehler gefunden zu haben, dann melde dich in der [Community]({{<
  relref "/community" >}}). Außerdem sind wir nicht für Fehler im Design
  verantwortlich, oder für Fehler, die du während des Aufbaus machst. Sollte
  etwas schiefgehen, und du brauchst Hilfe, kannst du dich natürlich trotzdem
  an uns wenden.

## Platine

Der erste Schritt zur Fertigung des Geräts ist die Fertigstellung der Platine.
Die allermeisten Bauteile sind bereits vorbestückt, es fehlen jedoch noch die drei
Buchsen, an die später der Power-Schalter, der Akku und das Display angeschlossen
werden. Zudem müssen die Ultraschallsensoren angebracht werden.

Bestücke die Bauteile eines nach dem anderen. Die **Buchsen** werden jeweils so positioniert,
dass ihre Ausrichtung mit der Beschriftung auf der Platine übereinstimmt. Achte darauf,
dass die Beinchen auf der Rückseite der Platine hervorragen und das Kunststoffgehäuse
flach auf der Platine aufliegt. Nach der Ausrichtung empfiehlt es sich, die Buchse an einem
Beinchen mit einer provisorischen Lötstelle zu fixieren, dies kann auch auf der Vorderseite
vorgenommen werden. Sobald du mit der Ausrichtung zufrieden ist, kannst du alle Pins auf der
Rückseite der Platine final verlöten.

Auch die **Ultraschallsensoren** werden der Platinenbeschriftung entsprechend platziert.
Achte bei der Ausrichtung darauf, dass der Pin mit dem gummierten Ring in dem Loch mit
der Pluspolmarkierung eingelötet wird.<br>
**ACHTUNG:** Einer der Sensoren muss auf der Rückseite der Platine eingelötet werden.
Die richtige Seite, auf der der entsprechende Sensor sitzen muss, ist durch die kreisförmige
Umrissmarkierung auf der Platine gekennzeichnet.

{{% alert title="Achtung: Heiße Pins" color="warning" %}}
Die Pins leiten die Hitze durch den Stecker hindurch, es empfiehlt sich daher,
zum Festhalten beim Löten eine Pinzette zu verwenden.
{{% /alert %}}


{{< slider >}}
  {{< slider-image
    src="v2.2/1_1.JPG"
    alt="Lege alle Bauteile bereit." >}}
  {{< slider-image
    src="v2.2/1_2.JPG"
    alt="Positioniere die Buchse der Platinebeschriftung entsprechend." >}}
  {{< slider-image
    src="v2.2/1_3.JPG"
    alt="Verlöte alle Pins auf der Rückseite." >}}
  {{< slider-image
    src="v2.2/1_4.JPG"
    alt="Auch die Akku-Buchse wird ähnlich ausgerichtet." >}}
  {{< slider-image
    src="v2.2/1_5.JPG"
    alt="Zur Fixierung kann auf der Vorderseite eine provisorische Lötstelle gesetzt werden." >}}
  {{< slider-image
    src="v2.2/1_6.JPG"
    alt="Direkt neben der Akku-Buchse wird die Power-Schalter Buchse eingesetzt." >}}
  {{< slider-image
    src="v2.2/1_7.JPG"
    alt="Alle Buchsen werden auf der Rückseite vollständig verlötet." >}}
  {{< slider-image
    src="v2.2/1_8.JPG"
    alt="Die Ultraschallsensoren werden mit dem Kunststoffring am Pin auf den Pluspol ausgerichtet." >}}
  {{< slider-image
    src="v2.2/1_9.JPG"
    alt="Der Sensor wird direkt auf die Platine gesetzt." >}}
  {{< slider-image
    src="v2.2/1_10.JPG"
    alt="Der Sensor wird von der Rückseite verlötet." >}}
  {{< slider-image
    src="v2.2/1_11.JPG"
    alt="Der zweite Sensor wird auf der Rückseite angesetzt." >}}
  {{< slider-image
    src="v2.2/1_12.JPG"
    alt="Verlötet wird der rückseitige Sensor entsprechend auf der Vorderseite." >}}
{{< /slider >}}


## Vorbereitung des Akkus

Als nächstes widmen wir uns der Vorbereitung von Anbauteilen, allen voran dem Akku.
Dafür nötig sind lediglich ein Akku mit Lötfahnen und das entsprechende Kabel. 
Weitere Informationen zum selbstständigen Crimpen gibt es im weiteren Verlauf
der Anleitung oder [in der Bauanleitung des OBS Classic]({{< relref
"/docs/classic/build-instructions" >}}).

{{% alert title="Achtung" color="warning" %}}
Der Akku **muss** mit Lötfahnen an beiden Polen ausgestattet sein. Akkus ohne
Lötfahnen dürfen nicht gelötet werden, da sie sonst Schaden nehmen oder platzen können.
Hast du einen Akku ohne Lötfahnen erwischt, suche in deinem Umfeld nach jemandem
(oder einem Makerspace) mit einem Punktschweißgerät und Erfahrung mit
LiPo-Zellen.<br> **Sei im Umgang mit LiPo Akkus stets sehr vorsichtig, und achte darauf,
die Pole niemals kurzzuschießen!**
{{% /alert %}}

Identifiziere die Polung der Batterie. Der Pluspol ist auf der Seite mit Einkerbung im Akku-Gehäuse
und in der Regel auch mit einem Plus auf dem Aufdruck markiert oder durch einen roten Ring gekennzeichnet.
**Miss im Zweifel mit dem Multimeter nach.**

Statte beide Lötfahnen an ihrem Ende zunächst mit einem großzügigen Lötpunkt aus.
Lasse die Stellen wieder abkühlen, dann nimm das Kabelende in die eine Hand und den Lötkolben in die andere,
erhitze den Lötpunkt von Neuem und führe das Kabelende seitlich in diesen ein, wenn das Lötzinn flüssig geworden ist.
Die Kabel sollen von der Lötfahne in die Mitte der Batterie führen. Löte nicht zu lange an der gleichen Stelle,
wenn etwas nicht klappt, lasse das Ganze lieber eine Minute lang abkühlen, bevor du es erneut versuchst.

Es wird empfohlen, die Batteriekontakte mit Isolierband oder Kapton-Tape zu umwickeln, sodass die Pole und
Lötfahnen bedeckt und die Kabel mechanisch fixiert sind.


{{< slider >}}
  {{< slider-image
    src="v2.2/2_1.JPG"
    alt="Lege alle Bauteile bereit." >}}
  {{< slider-image
    src="v2.2/2_2.JPG"
    alt="Verzinne beide Lötfahnen großzügig." >}}
  {{< slider-image
    src="v2.2/2_3.JPG"
    alt="Erhitze die Lötstelle erneut und führe das Kabel ein." >}}
  {{< slider-image
    src="v2.2/2_4.JPG"
    alt="Das rote Kabel gehört an den Pluspol, das schwarze an den Minuspol." >}}
{{< /slider >}}


## Vorbereitung des Kippschalters

Ähnlich wie der Akku muss auch der An/Aus Kippschalter mit einem Kabel ausgestattet werden.
Hast du kein fertiges Kabel vorliegen, musst du vorher wie auch beim Akku eines selbst crimpen.

Um gut am Schalter arbeiten zu können, empfiehlt es sich, ihn in eine dritte Hand oder eine ähnliche
Vorrichtung einzuspannen. Ebenfalls hilfreich ist es, die Kontakte des Kippschalters zu verzinnen.
Die Kabelenden können in eine U-Form gebogen werden, so lassen sie sich leicht in die Ösen des Schalters
einführen. Achte beim Verlöten darauf, den Schalter nicht zu lange zu erhitzen, da sonst Kunststoffteile
schmelzen könnten.


{{< slider >}}
  {{< slider-image
    src="v2.2/3_1.JPG"
    alt="Der Kippschalter kann zur leichteren Bearbeitung eingespannt werden." >}}
  {{< slider-image
    src="v2.2/3_2.JPG"
    alt="Verzinne die Kontakte des Schalters." >}}
  {{< slider-image
    src="v2.2/3_3.JPG"
    alt="Löte die Kabel dem Bild entsprechend an den Schalter." >}}
{{< /slider >}}


## Vorbereitung des Gehäuses

Im Haupt- sowie im Displaygehäuse gibt es einige Löcher, in die Gewindeeinsätze
("heat-set inserts") hineingehören. Dort greifen später die Schrauben, die das
ganze Gerät zusammenhalten. Die Gewinde müssen an folgenden Stellen angebracht werden:

* 4 Stück im Hauptgehäuse für die Platine
* 4 Stück im Hauptgehäuse für den Deckel
* 3 Stück im Displaygehäuse

Stelle deinen Lötkolben auf ca. 180-220&thinsp;°C ein und reinige die Spitze gründlich,
sodass kein Lot mehr daran hängt. Alternativ kannst du eine eigene Spitze für
diese Aufgabe verwenden, und danach wieder wechseln.

Finde eines der vorgesehenen Löcher, nimm ein Gewinde und drücke es so weit es
geht von Hand in das Loch hinein. Halte das Gewinde bei Bedarf mit einer
Pinzette fest, während du den Lötkolben auflegst und leichten Druck ausübst.
Versuche, das Gewinde so senkrecht wie möglich und behutsam versinken lassen.
Das Gewinde sollte lieber ein bisschen zu tief sitzen, als über den Rand überzustehen,
um die Gehäuseteile bündig miteinander verbinden zu können.

{{% alert title="Achtung: Heiße Gewindeeinsätze" color="warning" %}}
Die Gewindeeinsätze sind noch lange nach dem Einsetzen heiß und
kühlen erst langsam ab. Lege das Gehäuseteil am besten einige Minuten zur
Seite, wenn du alle Gewinde darin platziert hast.
{{% /alert %}}


{{< slider >}}
  {{< slider-image
    src="v2.2/4_1.JPG"
    alt="Die Gewindeeinsätze können mit einer Pinzette positioniert werden." >}}
  {{< slider-image
    src="v2.2/4_2.JPG"
    alt="Langsam und vorsichtig werden die Einsätze mit dem Lötkolben eingepresst." >}}
  {{< slider-image
    src="v2.2/4_3.JPG"
    alt="An den Platinenaufnahmen muss der Lötkolben aus Platzgründen senkrecht angesetzt werden." >}}
  {{< slider-image
    src="v2.2/4_4.JPG"
    alt="Halte die Gewindeeinsätze mit einer Pinzette im Loch, falls sie sich aus dem weichen Kunststoff herausschieben." >}}
  {{< slider-image
    src="v2.2/4_5.JPG"
    alt="Überblick aller Gewindeeinsätze im Hauptgehäuse." >}}
  {{< slider-image
    src="v2.2/4_6.JPG"
    alt="Überblick aller Gewindeeinsätze im Displaygehäuse." >}}
{{< /slider >}}


## Fertigung des Displays

In diesem Abschnitt wird das Display samt Kabel zusammengebaut.
Dazu muss das Kabel vorbereitet sowie mit dem Display verbunden werden,
anschließend wird alles samt Taster im Gehäuse montiert.

Das Display des OBS Pro ist identisch zu dem der Classic Variante. Hast du bereits
ein solches Display, kannst du es wiederverwenden und diesen Schritt überspringen.

### Kabel vorbereiten

Zunächst muss das Displaykabel (ca. 2&thinsp;m Länge) an beiden Seiten abisoliert werden.
Dabei sollten an der einen Seite ca. 3&thinsp;cm, und an der anderen Seite ca. 6&thinsp;cm
der äußeren Isolierung entfernt werden. Dies kann Wahlweise mit einem Cuttermesser oder einem
Seitenschneider geschehen, in jedem Fall ist jedoch darauf zu achten, dass die inneren Kabelstränge
nicht beschädigt werden. Eventuelle Entlastungsfäden können entfernt werden.

Isoliere anschließend jeden Kabelstrang an der 6&thinsp;cm-Seite um einige Millimeter ab und
crimpe anschließend einen JST-Kontakt an jeden der Stränge. Die andere Seite des Kabels bleibt
vorerst unberührt.

{{% alert title="Tipp!" color="info" %}}
Übe das folgende Abisolieren und Crimpen mit den Resten des zuvor gekürzten Kabels,
damit du dies nicht erst an den gekürzten Kabeln lernst.
[Hier gibt es ein Video aus der Community](https://www.youtube.com/watch?v=Z607TQjel1M), welches den folgenden Prozess zeigt.
{{% /alert %}}


{{< slider >}}
  {{< slider-image
    src="v2.2/5_1.JPG"
    alt="Entferne vorsichtig die äußere Isolierung." >}}
  {{< slider-image
    src="v2.2/5_2.JPG"
    alt="Eventuelle Entlastungsfäden kannst du entfernen." >}}
  {{< slider-image
    src="v2.2/5_3.JPG"
    alt="An der einen Seite sollte das Kabel ca. 3&thinsp;cm abisoliert werden." >}}
  {{< slider-image
    src="v2.2/5_4.JPG"
    alt="An der anderen Seite sollte das Kabel ca. 6&thinsp;cm abisoliert werden." >}}
  {{< slider-image
    src="v2.2/5_5.JPG"
    alt="Isoliere die Leiter der 6&thinsp;cm-Seite um einige Millimeter ab." >}}
  {{< slider-image
    src="v2.2/5_6.JPG"
    alt="Crimpe einen JST-Kontakt an die abisolierte Stelle." >}}
  {{< slider-image
    src="v2.2/5_7.JPG"
    alt="Wiederhole den Prozess für jeden der Leiter." >}}
{{< /slider >}}


### Taster montieren

Der Taster wird mit einem Federring und einer Mutter geliefert. Wir benötigen nur die Mutter, der Federring wird nicht verwendet.
Setze den Taster von vorne in das Vorderteil des Displaygehäuses ein und verschraube ihn rückseitig mit der Mutter. Zum Anziehen
kannst du eine spitze Zange verwenden.

{{< slider >}}
  {{< slider-image
    src="v2.2/6_1.JPG"
    alt="Lege die den Taster und die Mutter bereit. Der Federring wird nicht benötigt." >}}
  {{< slider-image
    src="v2.2/6_2.JPG"
    alt="Setze den Taster von vorne in das Displaygehäuse ein." >}}
  {{< slider-image
    src="v2.2/6_3.JPG"
    alt="Fixiere den Taster auf der Rückseite mit der Mutter." >}}
{{< /slider >}}


### Display anlöten

Nun wird an der anderen Seite des Kabels das Display verbunden.
Dazu muss als erstes auch an dieser Seite jeder der einzelnen Leiter einige Millimeter abisoliert werden, danach sollte
die Litze zudem verdrillt und anschließend verzinnt werden. Du benötigt außerdem ein zusätzliches, ca. 4&thinsp;cm langes Kabelstück,
mit dem du genauso verfährst. Fädle dann das Dislaykabel wie auf dem Bild zu sehen von hinten durch die hintere Hälfte des Displaygehäuses.

Nun verlötest du Display, Taster und das Kabel miteinander. Verwende dazu die folgende Tabelle als Vorschlag für die Zuordnung der Leiter.
Verwendest du ein Kabel mit anderen Farben, kannst du die Beschaltung entsprechend anpassen. Die zugehörigen Handgriffe sind auf den
Bildern dargestellt.

| Farbe                      | OBS-Seite      | Displayseite | Button  |
| -------------------------- | -------------- | ------------ | ------- |
| blau                       | `SDA`          | `SDA`        |         |
| schwarz                    | `GND`          | `GND`        |         |
| grau                       | `BUT`          | -            | Pin 1   |
| weiß                       | `SCL`          | `SCK`        | -       |
| braun                      | `+3V3`         | -            | Pin 2   |
| kurzes Kabel (rot)         | -              | `VDD`        | Pin 2   |


{{< slider >}}
  {{< slider-image
    src="v2.2/7_1.JPG"
    alt="Verzinne die einzelnen Leiter des Displaykabels auf der kurzen Seite." >}}
  {{< slider-image
    src="v2.2/7_2.JPG"
    alt="Fädle das Kabel von hinten durch das Gehäuseteil." >}}
  {{< slider-image
    src="v2.2/7_3.JPG"
    alt="Stecke die Leiter von hinten durch die Löcher des Displays." >}}
  {{< slider-image
    src="v2.2/7_4.JPG"
    alt="Verlöte die Kabel auf der Vorderseite, weit herausstehende Kabelenden müssen abgeschnitten werden." >}}
  {{< slider-image
    src="v2.2/7_5.JPG"
    alt="Ein weiteres Stück Kabel in ca. 4&thinsp;cm Länge wird benötigt." >}}
  {{< slider-image
    src="v2.2/7_6.JPG"
    alt="Löte das Kabel zunächst displayseitig an." >}}
  {{< slider-image
    src="v2.2/7_7.JPG"
    alt="Fädle die beiden Leiter für den Taster durch die Löcher, um sie zu fixieren." >}}
  {{< slider-image
    src="v2.2/7_8.JPG"
    alt="Verlöte die Kabel vorsichtig kurz mit dem Taster, sodass keine Kunststoffteile schmelzen." >}}
  {{< slider-image
    src="v2.2/7_9.JPG"
    alt="Setze das Display ins Gehäuse und verlöte das kurze Kabelstück mit dem Tasterkontakt." >}}
{{< /slider >}}


### Displayeinheit zusammensetzen

Mit abgeschlossener Lötarbeit fehlen nur noch die Magnete, bevor das Gehäuse verschraubt werden kann.
Setze zwei Quadermagnete zu einem Paar zusammen und stecke sie in die vorgesehene Aussparung im Gehäuse,
eine Befestigung ist nicht nötig. Sind die Magnete an ihrem Platz, kannst du die Gehäusehälften zusammensetzen
und an allen drei Punkten verschrauben.

Stecke anschließend die beiden Hälften der Zugentlastung in die Öffnung der Unterseite, aus welcher das Kabel herauskommt.
Setze erst die eine Seite ein, und dann die zweite etwas angewinkelt, bevor du sie beide zusammendrückst, sodass sie das Kabel am
nicht abisolierten Teil greifen. Falls der zweite Teil sich nicht hinein hebeln lässt, kannst du die angewinkelten unteren Ecken mit
einem Seitenschneider etwas weiter abrunden, sodass die Halterung leichter hineingeht. Schraube dann mit je zwei Schrauben und
Sechskantmuttern die zwei Hälften der Zugentlastung zusammen. Achte darauf, dass die sechseckige Fixierung auf jeweils einer Seite
der Zugentlastung für die Mutter vorgesehen ist.

Ist das Display fertig montiert, können nun auch die gecrimpten Kontakte auf der anderen Seite des Kabels in ihren Stecker eingesetzt werden.

Zum Schluss müssen, wie im Display selbst auch, zwei Quadermagnete in die Displayhalterung für den Lenker eingebaut werden.
Achte dabei auf die Polung, sodass sich Gehäuse und Halterung anziehen, wenn man sie zusammenschiebt. Die Magnete werden
hier einzeln eingeführt und schnappen erst in der Halterung zusammen.

{{% alert title="Tipp!" color="info" %}}
Wenn du mehrere Sensoren herstellst, ist es empfehlenswert, eine einheitliche Polung der Magnete festzulegen,
damit deine Halterungen und Displays alle untereinander kompatibel sind.
{{% /alert %}}

{{< slider >}}
  {{< slider-image
    src="v2.2/8_1.JPG"
    alt="Setze ein Magnetenpaar in die Aussparung der unteren Gehäusehälfte." >}}
  {{< slider-image
    src="v2.2/8_2.JPG"
    alt="Schraube das Gehäuse an allen drei Punkten zusammen." >}}
  {{< slider-image
    src="v2.2/8_3.JPG"
    alt="Setze die erste Hälfte der Zugentlastung an und achte auf die Isolierung." >}}
  {{< slider-image
    src="v2.2/8_4.JPG"
    alt="Drücke die zweite Hälfte mit in die Aussparung." >}}
  {{< slider-image
    src="v2.2/8_5.JPG"
    alt="Verschraube die Zugentlastung mithilfe von Muttern auf der Gegenseite." >}}
  {{< slider-image
    src="v2.2/8_6.JPG"
    alt="Setze die Crimpkontakte in den Stecker ein." >}}
  {{< slider-image
    src="v2.2/8_7.JPG"
    alt="So sieht die Belegung mit Standardkabel aus." >}}
  {{< slider-image
    src="v2.2/8_8.JPG"
    alt="Beachte die Polung der Magnete und schiebe den ersten in die Aussparung." >}}
  {{< slider-image
    src="v2.2/8_9.JPG"
    alt="Nach Hinzufügen des zweiten Magneten können sie nicht mehr herausfallen." >}}
{{< /slider >}}



## Hauptgerät zusammensetzen

Nach Fertigstellung der Displayeinheit hast du nun alle Einzelteile, um auch das Hauptgerät
zusammenzubauen.

### Kippschalter einbauen

Die Installation des Kippschalters ist recht simpel. Entferne die Mutter und Unterlegscheiben vom Gewinde
und stecke ihn anschließend von der Innenseite des Gehäuses durch das vorgesehene Loch.
Achte dabei auf seine Ausrichtung, sofern du bereits An/Aus Markierungen auf deinem Gehäuse hast.
Schraube den Schalter anschließend mithilfe der Mutter von außen fest, die Nutzung von Unterlegscheiben
ist optional. Festziehen lässt sich die Mutter beispielsweise mit einer Spitzzange, falls deine
Maulschlüssel nicht in die Aussparung passen.

{{% alert title="Tipp!" color="info" %}}
Der Kippschalter verbindet immer die beiden Pole, die mit dem Hebel eine Linie bilden.
Kippst du den Schalter also nach rechts, sind die linken beiden Pole verbunden.
{{% /alert %}}

{{< slider >}}
  {{< slider-image
    src="v2.2/9_1.JPG"
    alt="Beachte beim Einbau des Schalters die Ausrichtung." >}}
  {{< slider-image
    src="v2.2/9_2.JPG"
    alt="Setze den Schalter von innen in das Gehäuse." >}}
  {{< slider-image
    src="v2.2/9_3.JPG"
    alt="Fixiere den Schalter von außen mit der zugehörigen Mutter." >}}
  {{< slider-image
    src="v2.2/9_4.JPG"
    alt="Das Kabel kann beispielsweise so hinter den PCB-Aufnahmen verlegt werden." >}}
{{< /slider >}}


### Displaykabel fixieren

Um das Displaykabel fest mit dem Hauptgehäuse zu verbinden, wird es mithilfe eines Anbauteils
fixiert, mit dem der Sensor später am Rad befestigt wird. Lege zunächst jeweils eine Mutter in die
vier vorgesehenen Vertiefungen, um die Verschraubung vorzubereiten. Fädle anschließend das Displaykabel
von außen durch die große Öffnung, setze das Anbauteil an das Gehäuse an und klemme dabei
das Kabel in die Aussparung. Das Kabel sollte einige Zentimeter in das Gehäuse reinragen.
Nun kannst du von außen Schrauben in die vier Löcher einführen und das Anbauteil samt Kabel
mit den zuvor eingesetzten Muttern verschrauben.

Die Ausrichtung des Anbauteils ist beliebig, je nach dem, auf welcher Seite du das Displaykabel
gerne hättest. Du kannst das Teil später auch noch problemlos wieder abschrauben und umdrehen.

{{% alert title="Tipp!" color="info" %}}
Die Muttern fallen beim Versuch des Verschraubens leicht heraus. Setze am besten erst eine Mutter ein und
halte sie mit dem flachen Finger fest, während du die Schraube reindrehst. Alternativ kannst du die Muttern
auch mit ein wenig Sekundenkleber fixieren, achte aber darauf, dass kein Kleber auf das Gewinde kommt.
{{% /alert %}}

{{< slider >}}
  {{< slider-image
    src="v2.2/10_1.JPG"
    alt="Setze die Muttern in die vorgesehenen Vertiefungen." >}}
  {{< slider-image
    src="v2.2/10_2.JPG"
    alt="Fädle das Displaykabel von außen in das Gehäuse." >}}
  {{< slider-image
    src="v2.2/10_3.JPG"
    alt="Schraube das Anbauteil mit Kabel in der Aussparung an den Sensor." >}}
{{< /slider >}}


### Akku einbauen

Um den Akku einzubauen, fädelst du zuerst zwei Kabelbinder durch die runden Aufnahmen. Richte sie so aus,
dass man sie danach noch schließen kann. Positioniere dann den Akku auf den Stegen und fixiere ihn mit
den beiden Kabelbindern. Es empfiehlt sich, die Lötfahnen wie auf dem Bild gezeigt unter den Kabelbindern
einzuklemmen, damit sie sich nicht mehr frei bewegen können. Schneide den Überschüssigen Teil der
Kabelbinder anschließend ab.

{{< slider >}}
  {{< slider-image
    src="v2.2/11_1.JPG"
    alt="Fädle zwei Kabelbinder durch die Löcher in der Aufnahme." >}}
  {{< slider-image
    src="v2.2/11_2.JPG"
    alt="Fixiere den Akku und seine Lötfahnen mit den Kabelbindern." >}}
  {{< slider-image
    src="v2.2/11_3.JPG"
    alt="Das Kabel kann neben dem Kippschalterkabel verlegt werden." >}}
{{< /slider >}}


### Platine und Antenne einsetzen

Zuletzt kannst du nun die Platine einsetzen. Stelle erst fest, dass sich der Kippschalter in der
Aus-Position befindet, und der Batteriestecker die korrekte Polung hat. Am einfachsten ist es dann,
die drei Stecker erst anzuschließen und die Platane danach in ihre korrekte Position zu bringen.
Sind die Stecker verbunden und ihre Position korrekt, kannst du sie mit vier Schrauben an ihren Aufnahmen
verschrauben. Achte beim Einsetzen auf den hinteren Ultraschallsensor, der in seiner Öffnung sitzen muss.
Überschüssige Kabellängen können unter der Platine verstaut werden.

Bevor du das Gehäuse zuschrauben kannst, muss noch die GPS Antenne eingesetzt werden. Richte sie so aus,
dass das Metallschild mit der dem Kabelausgang zum Sensor-inneren zeigt und setze sie in die vorgesehene
Kammer. Führe das Kabel durch die Lücke in der Gehäusewand und schließe es an der Platine an.
Ist die Antenne zu lose, kannst du sie mit übrigen Kunststoffteilen oder sonstigem fixieren.

{{< slider >}}
  {{< slider-image
    src="v2.2/12_1.JPG"
    alt="Schließe alle Kabel an der Platine an, bevor du sie in das Gehäuse setzt." >}}
  {{< slider-image
    src="v2.2/12_2.JPG"
    alt="Positioniere die Platine im Gehäuse und verschraube sie an allen vier Punkten." >}}
  {{< slider-image
    src="v2.2/12_3.JPG"
    alt="Setze die GPS-Antenne in die vorgesehene Kammer." >}}
  {{< slider-image
    src="v2.2/12_4.JPG"
    alt="Schließe das Antennenkabel an die Platine an." >}}
{{< /slider >}}


## Erste Inbetriebnahme

Bevor du den Deckel auf das Gehäuse schraubst, sollte einmal grob getestet werden, ob das Gerät
funktioniert. Dafür sollte nun die Firmware installiert und der erste Startversuch untenommen werden.

### Firmware installieren

Zunächst muss die OpenBikeSensor-Firmware auf den ESP32 installiert werden.
Dieser Vorgang wird häufig auch als "flashen" der Firmware bezeichnet.
Schließe das Gerät dafür mit einem USB-C Kabel an einen Computer an.
Nutze dann eine der folgenden Methoden, um die Firmware zu installieren:

* Das online Flash-Tool auf
  [https://install.openbikesensor.org](https://install.openbikesensor.org), das du mit
  einem aktuellen Chrome-Browser öffnen solltest. Dies ist die **einfachste
  Methode**, falls sie bei dir funktioniert.
* [Anleitung für Linux]({{< relref "../../firmware/flash-linux" >}})
* [Anleitung für Windows]({{< relref "../../firmware/flash-windows" >}})
* [Anleitung für MacOS]({{< relref "../../firmware/flash-macos" >}})

### Elektronik testen

Stelle vor dem Test der Elektronik sicher, dass dein Akku geladen ist. Sollte dies nicht
der Fall sein, kannst du ihn mit einem USB-C Ladegerät aufladen. Sobald er voll ist, wechselt
die LED-Anzeige von Rot auf Grün.

Schalte nun den Kippschalter ein. Nach einigen Sekunden sollte ein Startbildschirm mit dem
OpenBikeSensor Logo und etwas Text auf dem Display erscheinen. Geschieht dies nicht, ist die
Firmware entweder nicht korrekt installiert worden, oder es stimmt etwas mit der Hardware nicht.

Wenn du möchtest, kannst du jetzt auch die SD-Karte und den GPS-Empfang testen, ein korrekter
Start des Geräts mit Ausgabe auf dem Display ist aber erstmal ausreichend.


## OpenBikeSensor fertigstellen

Sobald du die Hardware getestet hast und davon ausgehst, dass alles ordnungsgemäß funktioniert,
kannst du das Gehäuse schließen. Setze dafür zuerst noch die SD- und USB-Abdeckung in die Führung
des Hauptgehäuses ein. Als Schiebeabdeckung bleibt sie beweglich. Anschließend kannst du den
Deckel auf das Gehäuse setzen und ihn an den vier vorgesehenen Stellen festschrauben.
Um mit dem Sensor Daten aufzeichnen zu können, musst du außerdem noch die SD-Karte einstecken.
Diese sollte zuvor in FAT32 formatiert worden sein.

{{< slider >}}
  {{< slider-image
    src="v2.2/13_1.JPG"
    alt="Stecke die SD-Karte in den Slot auf der Platine." >}}
  {{< slider-image
    src="v2.2/13_2.JPG"
    alt="Setze die SD- und USB-Abdeckung in ihre Führung." >}}
  {{< slider-image
    src="v2.2/13_3.JPG"
    alt="Schraube den Gehäusedeckel auf das Gerät." >}}
  {{< slider-image
    src="v2.2/13_4.JPG"
    alt="Geschafft! Dein OpenBikeSensor Pro ist fertig." >}}
{{< /slider >}}


## Abnahmetests

Bevor du mit deinem OpenBikeSensor losfährst, solltest du ihn noch einmal umfassend testen.
Zu diesen Abnahmetests gehören unter anderem:

* **SD-Karte:** Das Gerät sollte beim Start "SD OK" anzeigen und während des Messbetriebs Dateien
auf der SD-Karte ablegen. Geschieht dies nicht, ist wahrscheinlich die SD-Karte nicht in Ordnung.
* **GPS-Empfang:** Starte das Gerät und lasse es eine Weile unter freiem Himmel liegen.
Es kann bis zu 20 Minuten dauern, bis ein GPS-Signal gefunden wurde. Sobald ein GPS-Signal gefunden wird,
schaltet das Gerät vom Startbildschirm in den Messmodus und zeigt die Abstände links und rechts an.
Bei allen weiteren Starts sollte das GPS-Signal erheblich schneller gefunden werden.
* **Ultraschallsensoren:** Nimm das Gerät in die Hand und stelle dich in verschiedenen Abständen
zu einem Hindernis auf. Die Werte sollten grob plausibel sein, in der Konfiguration können später noch
Feineinstellungen vorgenommen werden.
* **Taster:** Während des Messbetriebs sollte ein Druck auf den Taster am Display einen Abstand messen.
Dabei blinkt das Display einmal auf, und ein Datenpunkt wird auf der SD-Karte abgelegt.
* **Web-Konfiguration:** Es sollte möglich sein, das Gerät in den Konfigurationsmodus zu versetzen,
ein Handy oder einen Computer per WLAN zu verbinden und Einstellungen vorzunehmen. Nähere Informationen
findest du [hier]({{<relref "/docs/user-guide/configuration">}}).



{{% alert title="Geschafft!" color="success" %}}
Dein OpenBikeSensor ist nun fertig. Herzlichen Glückwunsch, wir wünschen Dir
viel Spaß bei der Nutzung!

In der [Bedienungsanleitung]({{<relref "/docs/user-guide">}}) findest du
weiterführende Anleitungen zu Themen wie Montage, Konfiguration und Aufzeichnung.
{{% /alert %}}

