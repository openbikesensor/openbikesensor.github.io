---
title: Schnellstart-Anleitung
linkTitle: Schnellstart
weight: 10
aliases:
- /start
---

Diese Anleitung geht davon aus, dass du einen funktionierenden 
[OpenBikeSensor Classic]({{< ref "/docs/classic" >}}) hast.

Sobald du einen OpenBikeSensor hast, solltest du ein paar Dinge damit tun:

## Funktionsprüfung
Beim ersten Einschalten generiert der OpenBikeSensor ein Zertifikat, der erste Start kann deshalb etwas länger dauern. Das wird währenddessen auch auf dem Display angezeigt.

Ab dem zweiten Einschalten sollte auf dem Display das OpenBikeSensor Logo angezeigt
werden und auf der rechten Seite ein paar Startmeldungen durchlaufen. Normalerweise steht
dort: 
- ``Versionsnummer``
- ``Batteriespannung`` (wird diese nicht angezeigt, könnte es sein, dass es ein problem mit dem Spannungsteiler gibt, mit dem die Batteriespannung gemessen wird.)
- ``config...``
- ``<35|-|35>`` (Die konfigurierte linke und rechte Lenkerbreite, hier 35cm)
- ``SD... OK``
- ``Start GPS OK``
- ``CSV file... OK``
- ``Wait for GPS`` (Sobald das GPS-Datum gefunden wurde durch die aktuelle Uhrzeit ersetzt)
- ``0Sats sn:98`` (Anzahl der bereits gefundenen Satteliten, SNR)

### GPS testen
Lege dein Gerät unter freiem Himmel hin und schalte es ein. Nach ein paar
Minuten sollte es von der Ansicht mit OpenBikeSensor Logo im Display
von allein in die Messansicht (ohne OpenBikeSensor Logo im Display) wechseln.
Geschieht dies nicht oder regelmäßig erst nach 10 oder mehr Minuten, sind
probleme am GPS-Modul oder der Antenne wahrscheinlich. [In der Troubleshooting-Sektion]({{< ref "/docs/classic/troubleshooting#ultraschallsensoren" >}}) findest du ein
paar Links zur weiteren Diagnose.

### Ultraschallsensor testen
Um sicherzugehen, dass dein Gerät voll funktionsfähig ist, führe vor
der ersten Montage und danach regelmäßig (z.B. jedes mal nach dem Aufladen
des Akkus oder wöchentlich) folgenden Test durch:

Halte dein Gerät im Freien eingeschaltet mit der linken Seite zum Himmel und 
der rechten Seite nach unten in die Luft. Nachdem die Haltezeit für den 
linksseitigen Messwert abgelaufen ist, sollte kein Messwert mehr angezeigt.
Hast du noch keinen GPS-Empfang und möchtest nicht warten, bis das GPS Empfang
hat, kannst du durch kurzes Drücken auf den Knopf am Display in die Messansicht
kommen.

Werden trotzdem gelegentlich Messwerte angezeigt (und du befindest dich unter
freiem Himmel, also nicht unter einem Baum/ einer Brücke), gibt es ein Problem
mit dem Ultraschallsensor. [In der Troubleshooting-Sektion]({{< ref "/docs/classic/troubleshooting#ultraschallsensoren" >}})
findest du weitere Informationen.

Halte das Gerät nun mit der linken Seite in Richtung einer Wand, und gehe
langsam auf die Wand zu. Du solltest etwa ab 2.50m Abstand von der Wand im
Display eine abnehmende Distanz sehen. Siehst du keine Abstandsanzeige oder
erst bei deutlich unter 2,50&nbsp;m  [Findest du in der Troubleshooting-Sektion]({{< ref "/docs/classic/troubleshooting#ultraschallsensoren" >}})
weitere Informationen.

Wenn du den Sensor in der Ansicht mit allen Messwerten
benutzt, kannst du die gleiche Funktionsprüfung auch für den rechtsseitigen
Sensor durchführen.

## Inbetriebnahme
1. Befestige die Halterung für den OpenBikeSensor und die Lenkerhalterung für
   das Display. Dies funktioniert je nach Modell unterschiedlich. Siehe auch
   [Montageanleitung]({{< relref "mounting" >}}).
2. Miss den Abstand vom Rand der Lenkstange zur Mitte des Fahrrads auf beiden
   Seiten. Zieh jeweils die Hälfte der Breite des OpenBikeSensors ab, und gib
   dies in den Einstellungen entsprechend als Abstands-Offset an. Wie du in den
   Konfigurationsmodus kommst, siehst du in der [Konfigurationsanleitung]({{<
   ref "configuration" >}}).
3. Richte deine Privatsphäre-Zonen ein. Mit einer Karten-App auf einem
   Smartphone lässt sich dein aktueller Standort bestimmen, den du dann
   eintippen kannst.
4. Prüfe, ob deine SD-Karte funktioniert und am besten auch leer ist. Der
   OpenBikeSensor erwartet eine Fat32 Partition, SD-Karten werden üblicherweise
   mit einer Fat32 Partition ausgeliefert, so dass sie im OpenBikeSensor direkt
   Benutzt werden können. Neuere SD-Karten sind gelegentlich mit exFAT
   formatiert und müssen auf FAT32 umformatiert werden.
6. Lade den Akku des Gerätes mit einem USB-C Kabel und einem normalen
   USB-Ladegerät auf. Die LED am Lademodul leuchtet rot während des Ladens und
   wird blau, wenn der Akku voll ist. Achtung: Lade an einem USB-A-Port auf,
   mit einem beidseitigen USB-C-Kabel oder einem Netzteil, das direkt in einen
   USB-C-Stecker mündet funktioniert das Laden meist nicht, da das Lademodul
   nicht USB-C-korrekt Ladespannung anfordert.
6. Schalte das Gerät ein. Warte bis GPS-Koordinaten vorhanden sind. Dies kann
   eine Weile dauern. Am schnellsten geht es, wenn das Geräte in Ruhe im Freien
   liegt und nicht bewegt wird.
7. Montiere den Sensor am Fahrrad und fahre los. Bitte achte auf den Verkehr um
   dich herum und lass dich nicht durch das Gerät ablenken.
8. Wenn dich ein Fahrzeug überholt (egal ob LKW, PKW, Bus, ...) drück kurz auf
   den Knopf. Es ist wichtig, dass auch Überholvorgänge mit ausreichend
   Seitenabstand so markiert werden, um keine verzerrte Statistik zu erzeugen.
   Versuche also, wirklich alle Überholvorgänge zu markieren.
9. Nach deiner Fahrt schalte das Gerät aus. Dafür halte den Knopf am Display
   gedrückt, während du den Strom abstellst. Nur so wird sichergestellt, dass
   keine Daten verloren gehen.
10. Du kannst deine Daten [in ein Portal](https://forum.openbikesensor.org/t/uebersicht-verfuegbarer-portale/688)
    hochladen, indem du einen Account erstellst, den API-Key von den
    Profileinstellungen in die Konfiguration des OpenBikeSensors kopierst, und
    im Konfigurationsmodus auf "Upload tracks" drückst, oder den Knopf am
    Display gedrückt hältst. Für letzteres muss das Gerät in einem WLAN mit
    Internetzugang sein.
