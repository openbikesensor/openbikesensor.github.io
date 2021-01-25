---
layout: default
title: Konfiguration
parent: Benutzeranleitung
nav_order: 2
---

# Grundeinstellungen

Eine **sinnvolle Konfiguration** ist voreingestellt und sollte nur bei Bedarf verändert werden.

|Einstellung|Wert|
|---|---|
| Breite des Lenkers | 70 cm |
|Anzeigemodus|linker und rechter Abstand,<br> Batteriestatus,<br> Überholvorgänge
|Privatzone|nicht gespeichert
|URL zum OBS-Portal|[https://openbikesensor.hlrs.de](https://openbikesensor.hlrs.de)
|API Key als Benutzer-ID|exklusiv für ADFC WF
|WLAN Login|Netzwerkname,<br> Netzwerkschlüssel

# Anpassung der Konfiguration

Die Konfiguration kann bei bestehender WLAN-Verbindung im Webbrowser vorgenommen werden. Dazu muss am Gerät der Konfigurationsmodus aktiviert werden. 

## Konfigurationsmodus einschalten

Zum Aktivieren des Konfigurationsmodus bei gedrückter grüner Taste das Gerät eingeschalten.

Es gibt zwei unterschiedliche Betriebsmodi.

**Access Point Modus**

Beim ersten Start des Konfigurationsmodus oder wenn Sie sich außerhalb der Reichweite ihres WLANs befinden, öffnet der OpenBikeSensor einen eigenen WLAN-Access-Point.
Der WLAN-Name beinhaltet die MAC-Adresse des Gerätes `OpenBikeSensor-xxxxxxxxxxxx`.

* das Standardpasswort lautet `12345678`
* die Konfigurationsseite kann über [http://172.20.0.1](http://172.20.0.1) aufgerufen werden

**WiFi Modus**

Um auf diese Seite zugreifen zu können, müssen Sie möglicherweise den mobilen Datenzugang auf ihrem Mobiltelefon deaktivieren.
Der OBS kann sich auch mit einem vorhandenen WLAN verbinden, wenn die Zugangsdaten in einer früheren Konfiguration eingegeben wurden (siehe WLAN-Einstellungen).
Bei Verbindung mit einem bestehenden WLAN wird die IP-Adresse der Konfigurationsseite auf dem Display des Geräts angezeigt.

## Struktur des Konfigurationsmenüs

**General**

_Sensor_

Bestimmt die Differenz zwischen dem Ende des Lenkers und der Außenkante des OpenBikeSensors.
Diese Werte werden automatisch von der aktuellen Messung subtrahiert.
Zusätzlich können Sie linke und rechte Messung „vertauschen“, falls Sie das Gerät an ihrem Fahrrad umdrehen.

_GPS_

Sie können festlegen, auf welche Weise ihr Gerät einen gültigen GPS-Fix bestätigt und die Messungen beginnt.
Typischerweise wird es den regulären Betrieb aufnehmen, sobald es Kontakt zu 4 GPS-Satelliten hat.

_Generic Display_

* drehen des Displays, falls Sie es gedreht montieren müssen
* invertieren der hellen / dunklen Bereiche des Displays, was bei hellem Sonnenlicht helfen kann

_Measurement Display_

Hier gibt es mehrere Optionen, welche Werte Sie auf ihrem Display angezeigt bekommen möchten.

* „simple Mode“ – nur die Anzeige der Abstandsmessung nach links
* Anzeige von linker / rechter Abstandsmessung
* show satellite – Anzeige der Anzahl der vom Gerät erkannten GPS-Satelliten (mehr Satelliten – genauere Positionsbestimmung)
* show velocity – Anzeige der aktuellen Geschwindigkeit (recht ungenau aufgrund der langsamen Messintervalle)
* show confirmation stats – zählt Tastendruck und bestätigte Erkennung von Überholvorgängen
* show nerd details for distance sensors – Anzeige der Sensor-Rohdaten und Anzahl der Messereignisse innerhalb einer Sekunde (hilfreich bei der Fehlersuche)

_Privacy Options_

Um ihre Privatsphäre zu wahren, können Sie dem Gerät mitteilen, dass es die Aufzeichnung in der Nähe ihrer Wohnung oder einer anderen Privatsphäre-Zone beenden soll.
Dies kann sein, generell keine Aufzeichnung oder nur GPS-Tracking, aber immer noch Speicherung aller bestätigten Überholvorgänge.

Legen Sie ihren Heimatort und den Durchmesser der Privatzone im entsprechenden Menü fest.

_Upload User Data_

**Einrichtung eines Upload-Servers zum Sammeln von aufgezeichneten Streckendaten.

* Voreinstellung für das HLRS-Projekt: `openbikesensor.hlrs.de`
* um Streckendaten hochzuladen, benötigen Sie ein Benutzerkonto auf der Website `openbikesensor.hlrs.de` (oder einem anderen kompatiblen Online-Dienst)
* API-Schlüssel: tragen Sie den individuellen API-Schlüssel aus ihrem Benutzerkonto bei `openbikesensor.hlrs.de` in das Feld unterhalb des Upload-Sensors ein

_Operation_

* Enable Bluetooth – (ab Firmware Version 0.3dev.) aktivieren, wenn Sie den OpenBikeSensor mit einer kompatiblen Smartphone App, wie z.B. SimRa, verbinden wollen
* SimRa Mode – aktivieren, wenn die den OpenBikeSensor mit der SimRa App verbinden

**Privacy Zones**

Sie können beliebig viele Privatzonen mit jeweils eigenem Radius festlegen.
In den Privatsphäre-Optionen legen Sie fest, wie sich ihr OpenBikeSensor innerhalb einer Privatsphäre-Zone verhalten soll.

**WiFi Settings**

Der OpenBikeSensor kann sich mit einem verfügbaren WLAN verbinden, wenn Sie dessen Zugangsdaten angeben.
Dies ist praktisch, wenn Sie bei der Konfiguration des Sensors mit ihrem lokalen WLAN verbunden bleiben möchten.
Die IP-Adresse für die Verbindung wird Ihnen auf dem Display angezeigt.

Um die Streckenaufzeichnung direkt vom OpenBikeSensor hochzuladen, ist eine WLAN-Verbindung mit Internetzugang erforderlich.

**Backup & Restore**

Hier können Sie die Konfiguration ihres OpenBikeSensors auf einem PC oder mobilen Gerät sichern.
Zum Wiederherstellen aus einer gespeicherten Konfiguration wählen Sie im Menü-Dialog die entsprechende Datei aus.
Verwenden Sie diese Option vor einem Firmware-Update, um sicherzustellen, dass Sie ihre Einstellungen wiederherstellen können, sollten sie dabei verloren gehen.

**Update Firmware**

Nachdem Sie die neueste Version heruntergeladen haben (oder eine andere Version, falls Sie ein spezielles Setup benötigen), klicken Sie in den Optionen auf „Aktualisieren“.
Wählen Sie die heruntergeladene Datei aus und klicken Sie auf „Update“.
Der OpenBikeSensor wird nach einem erfolgreichen Update automatisch neu gestartet.

Sie können direkt eine vorkompilierte Binärdatei hochladen; die neueste Version finden Sie immer [hier](https://github.com/openbikesensor/OpenBikeSensorFirmware/releases).

**Reboot**

Mit dieser Option startet das Gerät wieder in den regulären Messmodus und verlässt die Einstellungen.
