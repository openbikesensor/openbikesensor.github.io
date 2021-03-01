---
title: Bauanleitung v00.02
linkTitle: Bauanleitung
---

{{< imgproc 20200726_184611.jpg Resize 600x >}}
Ein fertiger PCB in der Version v00.02
{{< /imgproc >}}

{{% alert title="Achtung" color="danger" %}}
Diese Bauanleitung ist ein Entwurf. Sie enthält Fehler und falsche
Bilder und muss noch vervollständigt werden.
{{% /alert %}}


## Warnhinweise

Achtung bitte lies die folgenden Hinweise bevor du mit dem Aufbau
anfängst. Wir wissen genau wie du, dass keiner gerne Warnhinweise liest,
aber gerade wenn du Anfänger bist könnte dies wichtig sein.

-   Du baust den Sensor vollkommen selbstständig und ohne unsere
    Aufsicht auf. Du bist daher auch selbst für Fehler oder Verletzungen
    verantwortlich sollten welche auftreten.

-   Gehe bewusst und gewissenhaft mit deinen Werkzeugen um. An scharfen
    Werkzeugen wie einem Cuttermesser oder einem Seitenschneider kannst
    du dich schneiden. Das vordere Ende des Lötkolbens kann bis zu
    450°C heiß werden. Berühre daher immer nur das dafür vorgesehen
    Griffstück. Sollte er dir wegrutschen oder herunterfallen weiche
    daher lieber aus anstatt ihn aufzufangen.

-   Es handelt sich hierbei um einen Bausatz und kein fertiges Gerät.
    Alles was wir dir mit den Bauteillisten, Schaltungsentwürfen und
    Anleitungen zeigen sind Vorschläge und können Fehler enthalten. Bist
    du dir an einer Stelle nicht sicher oder du glaubst hier könnte ein
    Fehler vorhanden sein, dann melde dich in unserem
    [Slack]({{< relref "/slack" >}}). Außerdem sind wir nicht für
    Fehler verantwortlich die du während des Aufbaus machst. Sollte
    etwas schief gehen und du brauchst Hilfe kannst du dich natürlich
    auch bei uns melden.

-   Die Dämpfe die beim Löten durch das Verbrennen des Flussmittels
    (Flux) entstehen können gesundheitsschädlich sein. Atme sie daher
    nicht direkt ein. Du hast bei dir daheim oder in deinem Makerspace
    eine Lötdampfabsaugung? Dann nutze sie! Gerade bleifreies Lötzinn
    enthält mehr Flussmittel und ist daher während des Lötens auch
    deutlich gesundheitsschädlicher. Solltest du keine Absaugung haben
    ist daher bleihaltiges Zinn empfehlenswerter. Dieses solltest du
    allerdings wiederum nicht in den Mund nehmen und dir nach dem Löten
    die Hände waschen.

-   Bei einem der Bauteile handelt es sich um eine LiPo[^1]-Batterie.
    Diese Batterien sind zwar heute weit verbreitet, können allerdings
    bei falsche Handhabung in Brand geraten. Solltest du nicht vertraut
    mit LiPos oder dir noch unsicher sein, lies bitte den entsprechenden
    Abschnitt in der Anleitung die die Vorbereitung und den Umgang mit
    dem Akku erklärt! Außerdem empfehlen wir die Zelle aus einer
    vertrauenswürdigen Quelle zu beschaffen und nicht die billigste
    Zelle aus China zu bestellen.

## Vorwort

Alles was du hier siehst und liest ist zum größten Teil anhand der
Version 00.02.00 erstellt worden. Leiterbahnführung und Beschriftung
können sich daher an manchen Stellen leicht unterscheiden. In der Regel
ist im dazugehörigen Text darauf aber hingewiesen und sollte kein
Problem darstellen.

Die Bauteile R4 und R5 sollten sich nicht mehr auf deinem Board
befinden. Anstelle von D1 sollte sich auf deinem Board mittig Q1
befinden.

Außerdem gibt es zu einigen Komponenten mehrere Möglichkeiten der
Bestückung oder diese zu befestigen. Lies daher erst einmal das
komplette Unterkapitel, bis du auf die nächste Komponente stößt. Dann
hast du einen Überblick welche Varianten es gibt und kannst anhand der
Optionen die für dich passendste auswählen. Du bist von der Bauteilliste
(BOM[^2]) hier her gekommen da du dir nicht sicher bist, wofür du
bestimmte oder überhaupt welche Komponenten du brauchst? Auch dann kann
es sich anbieten das entsprechende Kapitel zu überfliegen und dir so
über die möglichen Optionen klar zu werden. Bilder erklären manchmal
einfach besser als eine Tabelle es kann.

Du findest Fehler oder hast Fragen? Dann melde dich entweder in unserem
[Slack]({{< relref "/slack" >}})) oder hinterlasse einen [Issue auf
Github](https://github.com/openbikesensor/openbikesensor.github.io/issues/new).

## Vorbereitung

Bevor du anfängst mit Bestücken solltest du dir als Erstes das benötigte
Werkzeug zurechtlegen. Was du währenddessen brauchen wirst:

-   Lötkolben / Lötstation
-   Lötzinn
-   Seitenschneider
-   Flachzange oder Spitzzange zum Biegen und Halten
-   SMD-Pinzette (siehe Abbildung (TODO))
-   Cuttermesser
-   Abisolierzange
-   Entlötpumpe und Entlötlitze
-   Multimeter

{{< imgproc 20200726_121811 Resize 600x >}}
Überblick über das benötigte Werkzeug
{{< /imgproc >}}

Du hast dir die in der Abbildung abgebildeten Werkzeuge genauer
angesehen und die Lötstation und das Multimeter kosten mehrere 100 Euro?
Keine Sorge, du brauchst nicht so teures Equipment. Ich habe dieses
Werkzeug nur verwendet, da ich es zur Verfügung habe! Du kannst
natürlich auch günstigere Werkzeuge, z.B. ein einfacheres Multimeter 
verwenden. Auch die Lötstation muss
keine so teure sein. Eine klare Empfehlung ist nur eine Lötstation oder
ein Lötkolben mit einer einstellbaren Temperaturregelung. Du solltest mit
bleihaltigem Lötzinn in einem Temperaturbereich von 300-330°C und mit
bleifreiem Lötzinn von 350-370°C arbeiten. Lötkolben mit fester
Temperaturregelung regeln meist auf 450°C und verbrennen zu schnell das
im Lötzinn enthaltene Flussmittel.

Hilfreich kann es daher auch sein Flussmittel entweder in Form von Paste
oder als Dosierstift zu haben. Hast du dies nicht zur Hand, kannst du
auch mit der Entlötpumpe oder der Entlötlitze das alte Lötzinn entfernen
und dann frisches Lötzinn mit frischen Flussmittel auf die Lötstelle
geben. Manchmal reicht es auch schon nur ein wenig neues Lötzinn dazu zu
geben um die Stelle "aufzufrischen". Beachte aber, dass nicht zu viel
Zinn auf deiner Lötstelle ist!

Ebenfalls hilfreich können Halterungen für die Platine sein. Das können
zum einen solch günstige Spannrahmen in schwarz-blau wie in der Abbildung
unten sein oder auch ein solcher
Kugelkopfschraubstock. Diese Schraubstöcke sind meist etwas teurer, sind
aber extrem hilfreich wenn du öfter lötest. Die Platine oder auch andere
Werkstücke wie Stecker lassen sich dort schnell und flexibel einspannen
und in beliebigen Winkeln ausrichten.

**Tip**: richte dich nicht nach dem Werkstück aus, sondern versuche immer
das Werkstück nach deiner besten Arbeitsposition auszurichten! Nur wenn
du bequem sitzt und deine Werkzeuge (in diesem Fall Lötkolben,
Zange/Pinzette und Lötzinn) ideal bedienen kannst erreichst du ein
optimales Ergebnis! Nimm dir also die Zeit. Mit der Zeit passiert das
dann ganz automatisch.

{{< imgproc 20200726_121444.jpg Resize 600x >}}
Schraubstöcke
{{< /imgproc >}}

{{< imgproc 20200726_174356.jpg Resize 600x >}}
Verschiedene Entlötpumpen
{{< /imgproc >}}

Außerdem gibt es eine
[Bestückungs-BOM](/assets/html/BOM_for_soldering_Rev_0.02.07.html)
die du in deinem Browser öffnen kannst.  Dort kannst du dir die Position der
Bauteile hervorheben lassen und findest so schneller die Stelle, um die
es gerade geht.


## Bestücken der Platine

### Pull-Up Widerstände für I₂C des Displays

Beginnen wir nun mit dem wahrscheinlich schwierigsten Bauteil für
Anfänger, den SMD-Widerständen R6 und R7. Aber keine Sorge, das schaffst
du und klingt schwieriger als es ist. Wir fangen gerade deshalb damit
an, da das Board noch komplett leer ist und dir somit keinerlei
Hindernisse im Weg sind. Du hast also allen Platz und Ruhe die du
brauchst.

Diese Widerstände waren zuerst nur als Backup gedacht und sind daher in
SMD ausgeführt. Im Betrieb der Prototypen hat sich allerdings
herausgestellt, dass sie doch benötigt werden.

Um den Widerstand nun anzulöten verzinne zuerst eines der Pads mit etwas
Lötzinn. Es empfiehlt sich das Pad zu nehmen,
an dem an wenigsten Kupfer ist und das möglichst nicht an eine große
Fläche führt. Warum? Die Fläche wirkt wie ein Kühlkörper. Der Lötkolben
muss dann nicht nur das Pad vorwärmen sondern auch einen Teil der großen
Fläche. Dein Lötkolben hat dann wohlmöglich mehr zu kämpfen und braucht
mehr Zeit bis das Pad auf Temperatur ist.

{{< imgproc 20200922_185326 Resize 600x >}}
Ein Pad von R6 vorverzinnen
{{< /imgproc >}}


Nimm nun mit der SMD-Pinzette den Widerstand auf und lege ihn auf das
Pad. Jetzt kannst du mit dem Lötkolben das
zuvor aufgebrachte Lötzinn heiß machen und den Widerstand mit der
Pinzette vorsichtig herunterdrücken. Die Lötzstelle muss dafür erst einmal
nicht schön aussehen, der Widerstand soll nur in seiner gewollten
Position halten.

{{< imgproc 20200922_185414 Resize 600x >}}
Widerstand mit Pinzette aufsetzen
{{< /imgproc >}}

{{< imgproc 20200922_185449 Resize 600x >}}
Widerstand an einer Seite anlöten
{{< /imgproc >}}

Nun kannst du die zweite Seite anlöten. Wenn du damit zufrieden bist
kannst du die erste Lötstelle nacharbeiten. Dies kannst du entweder tun
indem du nochmal etwas Lötzinn oder etwas Flussmittel aus
anderer Quelle (Flussmittelpaste oder Flussmittelstift) hinzu gibst.
Hast du nun zu viel Lötzinn auf der Stelle kannst du entweder versuchen
mit zügigem Streichen des Lötkolbens über die Lötstelle etwas Lötzinn zu
entfernen oder Entlötlitze zur Hilfe nehmen. Achte dabei darauf, dass du
die Entlötlitze erst auch etwas heiß machst, und dass du eher auf die Lötstelle
tumpfst anstatt zu reiben. Wenn du mit der Entlötlitze "rubbelst"
kannst du auch Kupfer ablösen, wenn du zu grob bist.

Hab keine Angst Entlötlitze oder die Entlötpumpe zu nutzen. Alle machen
mal Fehler. In der Abbildung siehst du meine verbrauchte Menge, die
ich während der gesamten Bestückung verwendet habe. Dies hat überhaupt
nichts damit zu tun das man schlecht ist! Es ist ein Werkzeug, nutze es.

{{< imgproc 20200726_184519 Resize 600x >}}
Verwendete Menge Entlötlitze
{{< /imgproc >}}

In den bisherigen Bildern wurde ein Widerstand in der Gehäusegröße 0805
verwendet. Dieser Widerstand ist dort auch vorgesehen, allerdings hast
du vielleicht bereits gemerkt, dass die Pads relativ großzügig gestaltet
sind. Es ist daher auch möglich Widerstände in der etwas größeren
Gehäusegröße 1206 zu verwenden. Einen Vergleich dieser beiden Größen
siehst du in den folgenden Abbildungen. Wenn du dich fragst, was diese Nummern für die
Gehäusegrößen zu bedeuten haben, dann findest du
[hier](https://de.wikipedia.org/wiki/Chip-Bauform) weitere
Informationen.

{{< imgproc SMD1206 Resize 600x >}}
Widerstand im Package 0805
{{< /imgproc >}}

### Spannungsversorgung

Nachdem wir nun die relativ kleinen Bauteile hinter uns haben kommen nun
die größeren und handlicheren Bauteile. Wir beginnen mit der
Vorbereitung um die beiden Module U4 und M1 aufzulöten. Dafür müssen wir
zuerst einige Pins von der dafür vorgesehenen Stiftleiste vorbereiten.
In diesem Schritt gibt es für den Spannungsregler 2 Varianten um ihn
aufzulöten. Unten findest du eine Variante ihn ohne Stifte
aufzulöten. Schau dir beide Varianten an und entscheide dich, welche du
versuchen willst.

Die Pins der Stiftleiste lassen sich am einfachsten mit einem
Seitenschneider auseinander trennen. Setze dafür, wie in Abbildung
zu sehen, vorsichtig den
Seitenschneider an der Engstelle zwischen den beiden Pins an. Übe nun
vorsichtig Druck auf die Stelle aus. Sei nicht zu grob, das Plastik kann
sonst auch manchmal direkt am Pin statt zwischen den Pins brechen.

{{< imgproc 20200726_121903 Resize 600x >}}
Seitenschneider vorsichtig ansetzen
{{< /imgproc >}}

{{< imgproc 20200726_121920 Resize 600x >}}
Zerteilte Stiftleiste
{{< /imgproc >}}

Für den Spannungsregler U4 benötigst du insgesamt 5 Pins, für das Lademodul M1
6 Pins.

{{< imgproc 20200726_122303 Resize 600x >}}
Insgesamt 11 Pins vorbereiten
{{< /imgproc >}}

Stecke als nächstes die Pins von der Oberseite durch die Platine. Das
Plastik und das kurze Ende des Pins sollte also auf der Oberseite
bleiben, die lange Seite auf der Unterseite herausstehen. Löte den Pin
nun von der Unterseite an. Nimm dir zum Halten des Pins entweder eine
Zange oder Pinzette zur Hilfe oder drücke den Pin gegen eine
hitzebeständige Unterlage. Das kann wie hier eine spezielle Matte,
daheim aber auch eine Glasplatte, ein altes Spiegelstück oder eine
Fliese sein. Versuche die Pins nun möglichst gerade auszurichten. Das
muss nicht perfekt sein, Ziel ist es die Module wie abgebildet
über die Pins stecken zu können. Sollte
das nicht direkt gelingen, finde heraus welcher Pin noch schief steht
und bessere ihn nach.

{{< imgproc 20200726_123048 Resize 600x >}}
Pins von oben einstecken
{{< /imgproc >}}

{{< imgproc 20200726_123110 Resize 600x >}}
Module auflegen
{{< /imgproc >}}

Hast du die Module aufgelegt, löte sie an. Fange am besten erst nur mit
einem Pin an und prüfe, ob das Modul noch flach auf dem Board
aufliegt. Sollte dies nicht der Fall sein, hast du jetzt noch am
einfachsten die Chance, nachzubessern. Außerdem empfiehlt es sich beim
Lademodul M1 das Modul beim Anlöten Richtung Boardmitte zu drücken. Übe
dafür mit deiner freien Hand etwas Druck nach unten und in Richtung
Boardmitte auf die USB-Buchse aus. Dadurch kannst du das Modul in
Position drücken, bevor du die erste Stelle festlötest.

Wenn du nach dem Anlöten aller Pins feststellst, dass die Module nicht
ganz so plan aufliegen, wie du das wolltest gibt es auch dann Wege das
noch zu ändern. Du kannst dafür, neben dem Pin der zu hoch steht,
vorsichtig mit der Spitzzange etwas Druck auf das Modul ausüben
(siehe Abbildung) und mit dem Lötkolben die betreffende
Lötstelle erneut heiß machen. Habe etwas Geduld und übe nicht zu viel
Gewalt auf das Board aus. Der Lötkolben muss hier gerade relativ viel
Metall durchwärmen, das kann also ein paar Sekunden länger dauern. Am
Ende sollten die Module wie gezeigt aufliegen.

{{< imgproc 20200726_123429 Resize 600x >}}
Module vorsichtig mit Zange herunterdrücken
{{< /imgproc >}}

{{< imgproc 20200726_123438 Resize 600x >}}
Module in Endpositon
{{< /imgproc >}}

### Auflöten des Spannungsreglers ohne Pins

Alternativ kann der Spannungsregler auch ohne Pins in SMD-Lötweise
aufgelötet werden. Sollte dieser Weg gewählt werden müssen natürlich 5
Pins weniger von der Stiftleiste abgetrennt werden.

Dazu als Erstes eines der Pads vorverzinnen und das Modul mit dessen
Hilfe an einer Ecke ausrichten und fixieren. Diese Lötstelle muss
erstmal nicht hübsch aussehen, sie soll erstmal nur mechanisch das Modul
festhalten. Sitzt das Modul gerade können die verbleibenden 4 Pads
angelötet und das erste Pad nachgelötet werden.

{{< imgproc 20200902_191734 Resize 600x >}}
vorverzinntes Pad r.o.
{{< /imgproc >}}

{{< imgproc 20200902_191918 Resize 600x >}}
fertig angelötetes Modul
{{< /imgproc >}}

Von der Gegenseite sollte die Platine nun wie abgebildet
aussehen. Die Pins die hier nun nach
oben herausstehen können so bleiben, du kannst sie aber auch flach zum
Plastik kürzen. Dies ist in den folgenden Abschnitten ebenfalls zu sehen.

{{< imgproc 20200726_123700 Resize 600x >}}
Platine von der Oberseite
{{< /imgproc >}}

### Einlöten Transistor (Q1) für das GPS-Modul

Als nächstes wird der Transistor für das GPS-Modul eingelötet. Störe
dich nicht daran, wenn der Transistor im Bild mit D1 beschriftet ist.
Hier hat sich seit dem fotografierten Prototypen etwas
geändert, der Transistor wird aber in exakt der gleichen Ausrichtung an
genau der selben Stelle eingelötet.

Zuerst wird der Transistor dafür von oben eingesteckt, die abgeflachte
Seite zeigt dabei, analog zur Beschriftung, in Richtung des Lademoduls
und des Spannungsreglers. Danach dreht ihr das Board um und haltet den
Transistor mit einem Finger von unten fest, so dass er plan auf dem
Board aufsitzt.

{{< imgproc 20200726_124649 Resize 600x >}}
Q1 von oben durchstecken
{{< /imgproc >}}

{{< imgproc 20200726_124658 Resize 600x >}}
Ansicht auf Q1 von oben
{{< /imgproc >}}

Kürze nun die Beinchen auf etwa 1,5-2,0 mm über der Boardoberfläche. Das
Lademodul daneben ist mit seiner Dicke dabei eine gute Orientierung.
Eine Standarddicke für Platinenmaterial ist 1,6mm. Nun legst du das
Board einfach auf deine Arbeitsunterlage und lötest zuerst ein Beinchen
an. Kontrolliere nun von der Oberseite ob der Transistor gerade sitzt.
Sollte er das nicht tun, nimm das Board in die Hand und übe leichten
Druck auf den Transistor aus. Mit der anderen Hand nimmst du nun den
Lötkolben und machst die Lötstelle erneut heiß bis der Transistor an die
gewünschte Position gerutscht ist. Wenn du Lötstelle erkaltet ist wird
der Transistor nun an seiner Stelle bleiben. Löte die restlichen
Lötstellen an und löte bei Bedarf die erste Lötstelle mit Hilfe von
etwas frischem Lötzinn nach.

{{< imgproc 20200726_124729 Resize 600x >}}
Beinchen von Q1 kürzen
{{< /imgproc >}}

{{< imgproc 20200726_124826 Resize 600x >}}
Q1 angelötet
{{< /imgproc >}}

### Diode und Connectoren für Schalter und Akku

{{< imgproc 20200726_125423 Resize 600x >}}
Diode D2 vorbereiten
{{< /imgproc >}}

### Stiftleiste für J6

{{< imgproc 20200902_151939 Resize 600x >}}
D2, J1 und J6 einstecken
{{< /imgproc >}}

{{< imgproc 20200726_175301 Resize 600x >}}
"Jumperkabel" als Hilfe aufstecken
{{< /imgproc >}}

### JST XH Steckverbinder für J6

{{< imgproc 20200922_185855 Resize 600x >}}
J1 einsetzen
{{< /imgproc >}}

{{< imgproc 20200922_185934 Resize 600x >}}
J6 einsetzen
{{< /imgproc >}}

{{< imgproc 20200922_190049 Resize 600x >}}
D2 leicht angehoben und abgewinkelt einsetzen
{{< /imgproc >}}

{{< imgproc 20200922_190101 Resize 600x >}}
Module auflegen
{{< /imgproc >}}

### ESP-Modul U1 auflöten

### Buchsenleiste mit wechselseitigen Kontakten

{{< imgproc 20200726_174543 Resize 600x >}}
Leiste auf Länge kürzen
{{< /imgproc >}}

{{< imgproc 20200726_174611 Resize 600x >}}
Buchsenleiste aufstecken
{{< /imgproc >}}

{{< imgproc 20200726_175629 Resize 600x >}}
Beide Leisten an je 2 Stellen anlöten
{{< /imgproc >}}

{{< imgproc 20200726_180111 Resize 600x >}}
Module vorsichtig abziehen
{{< /imgproc >}}

### Buchsenleiste mit gleichseitig gebogenen Kontakten

{{< imgproc 20200726_213655 Resize 600x >}}
Stifte entsprechend kürzen
{{< /imgproc >}}

{{< imgproc 20200726_213730 Resize 600x >}}
direkter Längenvergleich vorher/nachher
{{< /imgproc >}}

{{< imgproc 20200902_192121 Resize 600x >}}
Leiste auf jeder Seite an 2 äußeren Pins anlöten
{{< /imgproc >}}

### Sicherung F1

{{< imgproc 20200726_180127 Resize 600x >}}
Sicherung F1 einsetzen und anlöten
{{< /imgproc >}}

### Bedrahtete Widerstände R1, R2 und R3 und Kondensator C1

{{< imgproc 20200726_180343 Resize 600x >}}
Widerstände ausmessen
{{< /imgproc >}}

{{< imgproc 20200726_180708 Resize 600x >}}
Widerstände einsetzen und verdrillen
{{< /imgproc >}}

{{< imgproc 20200726_180727 Resize 600x >}}
Verdrillung kürzen
{{< /imgproc >}}

{{< imgproc 20200726_180808 Resize 600x >}}
Verdrillung verlöten
{{< /imgproc >}}

{{< imgproc 20200726_181136 Resize 600x >}}
Kodensator C1 einsetzen
{{< /imgproc >}}

{{< imgproc 20200726_181412 Resize 600x >}}
Widerstand R1 einsetzen
{{< /imgproc >}}

**Optional: Steckverbinder J10 und J11 auflöten**
-------------------------------------------------

{{< imgproc 20200726_123816 Resize 600x >}}
Module auflegen
{{< /imgproc >}}

{{< imgproc 20200726_123840 Resize 600x >}}
Module auflegen
{{< /imgproc >}}

{{< imgproc 20200726_123857 Resize 600x >}}
Module auflegen
{{< /imgproc >}}

{{< imgproc 20200726_181456 Resize 600x >}}
Ein Pad vorverzinnen
{{< /imgproc >}}

{{< imgproc 20200726_181552 Resize 600x >}}
J10 Hilfe von Jumperkabel aufsetzen
{{< /imgproc >}}

{{< imgproc 20200726_181810 Resize 600x >}}
Fertig anlöten
{{< /imgproc >}}

{{< imgproc 20200726_182044 Resize 600x >}}
J11 mit Hilfe von Jumperkabel auflöten
{{< /imgproc >}}

### Kondensatoren C2 und C3

{{< imgproc 20200726_182349 Resize 600x >}}
Bei Elkos auf Polung achten!
{{< /imgproc >}}

### Displaysteckverbinder J5

### Variante mit Stiftleiste

[^1]: Lithium-Polymer

[^2]: bill of material; zu deutsch Teileliste
