---
layout: default
title: Minimal-Konfiguration
parent: Benutzeranleitung
nav_order: 4
---

# Quickstart-Konfiguration

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

<figure>
    <img src="/assets/images/configuration/OBS_Configuration_Menu_General.png" class="inline" />
  <figcaption>Hauptmenü des OBS</figcaption>
</figure>

Die Offsets zur größten Breite werden ab Sensor gemessen. Bei einem symmetrischen Rad mit 75cm Lenkerbreite ergibt sich ein Offset von (75-5)/2=35.
<figure>
    <img src="/assets/images/configuration/OBS_Configuration_Menu_General_Offsets.png" class="inline" />
  <figcaption>General menu: Einstellen der Offsets</figcaption>
</figure>

Der API-Key aus dem Settings-Menü des eigenen Accounts im Portal [openbikesensor.hlrs.de](openbikesensor.hlrs.de) muss hier eingegeben werden. 
**Wichtig:** Speichern nicht vergessen.

<figure>
    <img src="/assets/images/configuration/OBS_Configuration_Menu_General_API-Key.png" class="inline" />
  <figcaption>General menu: Eingabe des API-Keys</figcaption>
</figure>

### Wifi
<figure>
    <img src="/assets/images/configuration/OBS_Configuration_Menu_Wifi.png" class="inline" />
  <figcaption>Hauptmenü</figcaption>
</figure>

Im Wifi-Menü die Verbindungsdaten eines WLANs mit Internet eingeben und speichern.
<figure>
    <img src="/assets/images/configuration/OBS_Configuration_Menu_Wifi_Settings.png" class="inline" />
  <figcaption>SSID und Passwort einstellen</figcaption>
</figure>

Damit ist die Minimal-Konfiguration mit der Tracks aufgezeichnet und hochgeladen werden können, abgeschlossen. 

