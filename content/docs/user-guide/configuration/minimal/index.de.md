---
linkTitle: Minimal
title: Minimal-Konfiguration
weight: 10
---

Zum direkten Nutzen eines neuen (oder sobald implementiert zurückgesetzen) OpenBikeSensors sind mindestens 3 Einstellungen vorzunehmen.

* Offset links und rechts als größte Breite des Rades mit Fahrer (Lenkerbreite, Ellbogen, etc.)
* API-Key
* WLAN-Einstellungen zum Hochladen der Daten


## Konfigurationsmodus einschalten

Zum Aktivieren des Konfigurationsmodus bei gedrückter Taste das Gerät eingeschalten.

Es gibt zwei unterschiedliche Betriebsmodi.

**Access Point Modus**

Ohne konfiguriertes WLAN in Reichweite öffnet der OpenBikeSensor einen eigenen WLAN-Access-Point.
* SSID ist die MAC-Adresse des Gerätes `OpenBikeSensor-xxxxxxxxxxxx`.
* das Standardpasswort lautet `12345678`
* die Konfigurationsseite kann über [http://172.20.0.1](http://172.20.0.1) im Webbrowser aufgerufen werden

**WiFi Modus**

Wenn ein konfiguriertes WLAN in Reichweite ist, verbindet sich der OpenBikeSensor mit diesem und zeigt auf dem Display die IP-Adresse, über die im Browser eines Gerätes im gleichen WLAN die Konfigurationsseite erreicht wird. 

Nur in einem WLAN mit Internet funktioniert der Upload der Daten, der auch direkt vom OpenBikeSensor ausgelöst werden kann durch Drücken und Festhalten des Knopfes

## Wichtige Einstellungen im Konfigurationsmenü

### General

{{< imgproc OBS_Configuration_Menu_General None >}}
Hauptmenü des OBS
{{< /imgproc >}}

Die Offsets zur größten Breite werden ab Sensor gemessen. Bei einem symmetrischen Rad mit 75cm Lenkerbreite ergibt sich ein Offset von (75-5)/2=35.

{{< imgproc OBS_Configuration_Menu_General_Offsets None >}}
General menu: Einstellen der Offsets
{{< /imgproc >}}

Der API-Key aus dem Settings-Menü des eigenen Accounts im Portal [openbikesensor.hlrs.de](openbikesensor.hlrs.de) muss hier eingegeben werden. 
**Wichtig:** Speichern nicht vergessen.

{{< imgproc OBS_Configuration_Menu_General_API-Key None >}}
General menu: Eingabe des API-Keys
{{< /imgproc >}}

### Wifi

{{< imgproc OBS_Configuration_Menu_Wifi None >}}
Hauptmenü
{{< /imgproc >}}

Im Wifi-Menü die Verbindungsdaten eines WLANs mit Internet eingeben und speichern.

{{< imgproc OBS_Configuration_Menu_Wifi_Settings None >}}
SSID und Passwort einstellen
{{< /imgproc >}}

Damit ist die Minimal-Konfiguration mit der Tracks aufgezeichnet und hochgeladen werden können, abgeschlossen. 
