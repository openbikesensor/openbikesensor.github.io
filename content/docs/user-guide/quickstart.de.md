---
title: Schnellstart-Anleitung
linkTitle: Schnellstart
weight: 10
aliases:
- /start
---

> Diese Anleitung geht davon aus, dass du einen funktionierenden OpenBikeSensor
> hast. Wenn nicht, [starte hier]({{< ref "/docs/hardware" >}} "Hardware").

Sobald du einen OpenBikeSensor hast, solltest du ein paar Dinge damit tun:

1. Befestige die Halterung für den OpenBikeSensor und die Lenkerhalterung für
   das Display. Dies funktioniert je nach Modell unterschiedlich. Siehe auch
   [Montageanleitung]({{< relref "mounting" >}}).
2. Miss den Abstand vom Rand der Lenkstange zur Mitte des Fahrrads, auf beiden
   Seiten. Zieh jeweils die Hälfte der Breite des OpenBikeSensors ab, und gib
   dies in den Einstellungen entsprechend als Abstands-Offset an. Wie du in den
   Konfigurationsmodus kommst, siehst du in der [Minimal-Konfiguration]({{<
   relref "configuration/minimal" >}}).
3. Richte deine Privatsphäre-Zonen ein. Mit einer Karten-App auf einem
   Smartphone lässt sich dein aktueller Standort bestimmen, den du dann
   eintippen kannst.
4. Prüfe, ob deine SD-Karte funktioniert und am besten auch leer ist. Der
   OpenBikeSensor erwartet eine Fat32 Partition, SD-Karten werden üblicherweise
   mit einer Fat32 Partition ausgeliefert, so dass sie im OpenBikeSensor direkt
   Benutzt werden können.
5. Lade den Akku des Gerätes mit einem USB-C Kabel und einem normalen
   USB-Ladegerät auf. Die LED am Lademodul leuchtet rot während des Ladens und
   wird blau, wenn der Akku voll ist. 
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
