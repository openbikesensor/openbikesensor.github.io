---
title: Einstellungen
weight: 20
---


Diese Seite beschreibt, wie du an deinem **OpenBikeSensor Classic** die
Einstellungen änderst.

Wenn du deinen OpenBikeSensor zum ersten Mal benutzt, solltest du zunächst
einige wichtige Einstellungen anpassen. Mehr dazu unten bei "Wichtige
Einstellungen".

## Konfigurationsmodus

Zuerst musst du den OpenBikeSensor in den Konfigurationsmodus bringen. Schalte
das Gerät dafür aus, halte den Knopf am Display gedrückt, und schalte es wieder
ein. Nach einigen Sekunden kannst du den Knopf loslassen. 

Wenn du zuvor ein WLAN konfiguriert hast, wählt sich der Sensor nun in dieses
WLAN ein. Ansonsten, oder falls dieses WLAN nicht verfügbar ist, startet das
Gerät im "Access Point" Modus, in dem es selbst ein WLAN aufmacht, dessen Namen
mit "OpenBikeSensor" beginnt. In diesem Fall ist das **WLAN-Passwort
12345678**.

Nimm nun ein Smartphone oder einen Computer zur Hand, und gehe mit diesem in
das gleiche Netz wie der OpenBikeSensor -- entweder dein konfiguriertes
WLAN/Heimnetz, oder das WLAN das der OpenBikeSensor geöffnet hat. Öffne einen
Browser (z. B. Firefox) und gib dort in die Adressleiste die IP-Adresse ein,
die im Display des Gerätes steht. 

Es sollte sich nun die Login-Seite des OpenBikeSensors öffnen. Auf einem
Smartphone musst Du möglicherweise die mobilen Daten deaktivieren, damit das
funktioniert.

## Login in das Konfigurationsmenü

Zugang zum Konfigurationsmenü ist durch eine verschlüsselte Verbindung und eine PIN gesichert. 

Die verschlüsselte Verbindung benutzt du durch Klick auf *go to https*. Dein
Browser wird dir nun eine Zertifikatswarnung anzeigen, die du ignorieren darfst
(das solltest du normalerweise im Internet auf jeden Fall vermeiden -- hier ist
es okay). Alternativ kannst du eine unverschlüsselte Verbindung benutzen, indem
du *enable unencrypted access* anklickst. Dies solltest du nur in sicheren
Drahtlosnetzen verwenden, zum Beispiel in deinem eigenen Heimnetz.

Nach Auswahl des Konfigurationsmodus wird im Browser ein **Nutzername und ein
Passwort** verlangt. Der Benutzername ist egal, du kannst also zum Beispiel
`obs` eintippen, das Feld darf nur nicht leer bleiben. Das Passwort wird im
Display des Geräts angezeigt, es ist ein bis zu sechsstelliger Zahlencode.

## Wichtige Einstellungen

Zum direkten Nutzen eines neuen OpenBikeSensors solltest du mindestens 3
Einstellungen vornehmen:

* Lenkerbreite
  - Miss den horizontalen Abstand deines linken und rechten Lenker-Endes bis zur
    Radmitte. Ein symmetrischer Lenker hat zum Beispiel 75&thinsp;cm Breite, das heißt
    37.5&thinsp;cm auf jeder Seite. Ein asymmetrisches Fahrrad hat eventuell
    unterschiedliche Werte.
  - Ziehe von beiden Werten (links und rechts) jeweils 2.5&thinsp;cm ab, um die Breite
    des Sensors (5&thinsp;cm) zu korrigieren. Unser obiger Beispiellenker hat dann
    einen Offset-Wert von je 35&thinsp;cm.
  - Diese Werte, in Zentimetern, trage unter *General* bei *Offset Sensor Left*
    und *Offset Sensor Right* ein. 
  - Speichern nicht vergessen.
  - Nun kann das Gerät den tatsächlichen Abstand zum Fahrrad ermitteln, nachdem
    es den Abstand vom Sensor aus gemessen hat.
* WLAN-Einstellungen zum Hochladen der Daten
  - Um deine Fahrten hochzuladen, musst du dem OpenBikeSensor beibringen, ins
    Internet zu kommen. 
  - Trage dafür den Namen und das Passwort deines WLANs unter *Wifi* bei *SSID*
    und *Password* ein. Achte auf korrekte Schreibweise inklusive Groß- und
    Kleinschreibung bei beiden Einträgen.
  - Speichern nicht vergessen.
  - Beim nächsten Start in den Konfigurationsmodus wird das Gerät sich mit
    diesem WLAN verbinden und nur ein eigenes WLAN aufmachen, falls das nicht
    klappt. Im Display kannst du sehen, in welchem WLAN das Gerät eingewählt
    ist.
* API-Schlüssel
  - Du wirst deine Fahrten vermutlich in ein regionales oder projektbezogenes
    Portal hochladen wollen. Eine [Liste verfügbarer Portale befindet sich im
    Forum](https://forum.openbikesensor.org/t/uebersicht-verfuegbarer-portale/688).
  - Erstelle einen Account auf dem ausgewählten Portal. Logge dich dort ein und
    navigiere über dein Profilsymbol zur Einstellungsseite. Dort findest du
    deinen "API-Schlüssel" (oder Englisch "API Key"). 
  - Kopiere diesen Schlüssel und füge ihn unter *General* im Bereich *Upload
    User Data* wieder ein.
  - Kopiere ebenfalls die "API URL" aus deinem Profil und füge sie ebenfalls
    hier ein.
  - Speichern nicht vergessen.

Mit diesen Einstellungen kannst du nun Fahrten korrekt aufzeichnen und dann
[hochladen]({{< relref "track-upload" >}}).

## Alle Einstellungen

Eine sinnvolle Konfiguration ist voreingestellt und sollte nur bei Bedarf
verändert werden. Hier erklären wir die einzelnen Einstellungen im Detail.

### General

* **Sensor**

  Bestimmt die Differenz zwischen dem Ende des Lenkers und der Außenkante des
  OpenBikeSensors. Diese Werte werden automatisch von der aktuellen Messung
  subtrahiert. Zusätzlich kannst du die linke und rechte Messung „vertauschen“,
  falls du das Gerät am Fahrrad umgekehrt montierst.

* **GPS**

  Du kannst festlegen, auf welche Weise das Gerät einen gültigen GPS-Fix
  bestätigt und die Messungen beginnt. Typischerweise wird es den regulären
  Betrieb aufnehmen, sobald es Kontakt zu 4 GPS-Satelliten hat.

* **Generic Display**

  * drehen des Displays, falls du es über Kopf montiert hast
  * invertieren der hellen / dunklen Bereiche des Displays, was bei hellem Sonnenlicht helfen kann

* **Measurement Display**

  Hier gibt es mehrere Optionen dafür, verschiedene Werte auf dem Display anzuzeigen:

  * „simple Mode“ – nur die Anzeige der Abstandsmessung nach links
  * Anzeige von linker / rechter Abstandsmessung
  * show satellite – Anzeige der Anzahl der vom Gerät erkannten GPS-Satelliten (mehr Satelliten – genauere Positionsbestimmung)
  * show velocity – Anzeige der aktuellen Geschwindigkeit (recht ungenau aufgrund der langsamen GPS-Messintervalle)
  * show confirmation stats – zählt Tastendruck und bestätigte Erkennung von Überholvorgängen
  * show nerd details for distance sensors – Anzeige der Sensor-Rohdaten und Anzahl der Messereignisse innerhalb einer Sekunde (hilfreich bei der Fehlersuche)

* **Privacy Options**

  Um deine Privatsphäre zu wahren, kannst du dem Gerät mitteilen, dass es die
  Aufzeichnung in der Nähe deiner Wohnung oder einer anderen Privatsphäre-Zone
  unterdrücken soll. Es ist möglich hier generell keine Aufzeichnung zu machen,
  oder nur den GPS-Track zu unterdrücken, aber immer noch alle bestätigten
  Überholvorgänge zu speichern.

  Mehr Informationen zu Privatsphäre-Zonen gibt es [auf dieser Seite]({{< relref "privacy-zones" >}}).

* **Upload User Data**

  Einrichtung der Portal verbindung zum Hochladen der aufgezeichneten
  Streckendaten. Wie diese korrekt eingerichtet wird, ist oben bei "Wichtige
  Einstellungen" beschrieben.

* **Operation**

  * Enable Bluetooth – aktivieren, wenn du den OpenBikeSensor mit einer kompatiblen Smartphone-App, wie z.B. SimRa, verbinden willst
  * SimRa Mode – aktivieren, wenn du den OpenBikeSensor mit der SimRa App verbinden willst

### Privacy Zones

Hier kannst du einzelne Privatzonen mit jeweils eigenem Mittelpunkt und Radius
festlegen. In den Privatsphäre-Optionen unter *General* entscheidest du, wie
sich der OpenBikeSensor innerhalb dieser Privatsphäre-Zone verhalten soll.

### WiFi Settings

Der OpenBikeSensor kann sich mit einem verfügbaren WLAN verbinden, wenn du hier
dessen Zugangsdaten angibst. Dies ist notwendig für den Upload zum Portal und
außerdem praktisch, wenn du bei der Konfiguration des Sensors mit deinem
eigenen WLAN verbunden bleiben möchtest. 

### Backup & Restore

Hier kannst du Einstellungen des OpenBikeSensors auf deinem PC oder mobilen
Gerät sichern. Zum Wiederherstellen aus einer gespeicherten Konfiguration wähle
im Menü-Dialog die entsprechende Datei aus. 

Verwende diese Option vor einem Firmware-Update, um sicherzustellen, dass du
deine Einstellungen wiederherstellen kannst, falls beim Update etwas
schiefgeht.

### Update Firmware

Hier kannst du ein Update für die Firmware hochladen. Die neueste Version findest du immer 
[auf GitHub](https://github.com/openbikesensor/OpenBikeSensorFirmware/releases).

Nach einem erfolgreichen Update wird der OpenBikeSensor automatisch neu
gestartet.

### Reboot

Mit dieser Option startet das Gerät wieder in den regulären Messmodus und
verlässt die Einstellungen.
