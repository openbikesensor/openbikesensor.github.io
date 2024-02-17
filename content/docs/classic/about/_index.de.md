---
title: Überblick
weight: 10
description: >
    Der OpenBikeSensor Classic ist das Originalgerät, das seit 2018 in
    ehrenamtlicher Arbeit von vielen Beteiligten als Open Hardware Design
    entworfen und entwickelt wird.
---

Die *Classic* Variante des OpenBikeSensors ist ein eigenständiges Design, das
alle benötigten Funktionalitäten zum Aufzeichnen von Überholabständen vereint.
Es wird in Handarbeit aus kommerziell verfügbaren Modulen (wie einem
GPS-Empfänger und Ultraschallsensoren) zusammengebaut. Das Ergebnis ist ein
robustes Gerät das leicht und ohne weitere Voraussetzungen bedient und gut
verliehen werden kann.

Dieser Bereich der Dokumentation enthält die Bauteileliste, Bauanleitung, Links
zum Gehäuse und Hilfen beim Beschaffen der Teile.

* [Die Bauteileliste]({{< relref "../parts" >}}) enthält alle benötigten elektronischen
  Module und Einzelkomponenten, die mechanischen Bauteile wie Schrauben
  und Muttern sowie jeglichen "Kleinkram" wie Kabel und Befestigungen.
* [Das Gehäuse]({{< relref "case" >}}) wird im 3D-Druck-Verfahren hergestellt.
* [Die Hauptplatine]({{< relref "pcb" >}}) wurde speziell für den
  OpenBikeSensor entworfen und kann als Spezialanfertigung bei einem
  Platinenhersteller anhand der bereitgestellten Designdateien bestellt
  werden.
* [Die Bauanleitung]({{< relref "../build-instructions" >}}) beschreibt, wie die
  Bauteile auf der Hauptplatine installiert und das ganze ins Gehäuse
  eingesetzt werden.

## Muss ich den OpenBikeSensor selbst bauen?

Ja! Es gibt den OpenBikeSensor nicht als fertiges Gerät zu kaufen. Stattdessen
baust du ihn dir selbst zusammen.

Du brauchst auch keine Angst zu haben, damit loszulegen -- selbst wenn nicht
immer sofort offensichtlich ist, wie alles funktioniert, so ist es trotzdem
auch für Anfänger:innen möglich, erfolgreich einen Sensor anhand dieser
Anleitungen zu bauen. Und wenn das mal nicht klappt, gibt es genug Leute, die
dir gern weiterhelfen, und ihr Wissen teilen.

Vielleicht kannst du dich auch mit einigen Anderen in deiner Gegend
zusammentun. Schau in [der Community]({{< relref "community" >}}) vorbei oder
auf die [Karte der Initiativen]({{< relref "map" >}}), und finde
Gleichgesinnte, mit denen du zusammen arbeiten und lernen kannst.

Das Gerät besteht aus vielen Einzelteilen aus verschiedenen Quellen.
Sammelbestellungen sind eine gute Möglichkeit, die Komplexität aufzuteilen und
für jede:n Einzelne:n zu verringern. Dabei sparen wir alle Geld, denn in Menge
bestellt sind viele Teile günstiger. Auch solche Sammelbestellungen werden in
der [Community]({{< relref "/community" >}}) organsiert.

{{< imgproc construction-kit Resize 600x >}}
OpenBikeSensor Classic Bausatz (alte Version)
{{< /imgproc >}}

## Hinweis für den Bau großer Stückzahlen

Leider hatten wir in der Vergangenheit immer wieder Probleme damit, dass die aus
China gelieferten fertigen Module nicht, oder nur teilweise den Spezifikationen
entsprachen. Auch die Abmaße von Teilen ändern sich manchmal, z.B. bekamen wir
vom Lieferanten plötzlich größere Displays als üblich.

Wenn du mehrere Geräte vom Typ *OpenBikeSensor Classic* herstellen möchtest,
empfiehlt es sich daher, zunächst einen Probelauf zu machen. So stellst du
sicher, dass die gelieferten Teile alle korrekt angekommen sind und den
Anforderungen entsprechen. Löte dafür einen der Bausätze vollständig zusammen
und baue ihn auch in das Gehäuse ein.

Wenn du auf diese Weise bemerkst, dass Lieferanten plötzlich andere Teile
liefern, [sprich es auf jeden Fall in der Community an]({{< relref "/community"
>}}). Vielleicht muss die Lieferantenliste angepasst werden, oder es gibt eine
einfache Änderung am Gehäuse, um auch mit den neuen Teilen kompatibel zu
werden. Der:die nächste freut sich!


## Alternativen

Aufgrund der Vielfalt in dem Projekt und der unterschiedlichen Anforderungen
der Beteiligten gibt es auch eine Vielzahl Varianten für fast jedes Teil. Der
Einfachheit halber pflegen wir jedoch hier auf der Website, in den Anleitungen
und Bestelllisten, nur eine "Standard-Variante". Diese ist zur Zeit:

* PCB Version 00.03.12
* Hauptgehäuse (ehem. "Vertical Case")
* Displaygehäuse (ehem. "SlideOnDisplay")
* eine Halterung nach jeweiligen Anforderungen

Alternativen, wie alte Versionen oder andere Gehäuse, verlinken Aktive im Forum
oder auf GitHub. Dort kannst du dich gern umschauen, falls du eine Anpassung
wünschst und diese nicht selbst erfinden möchtest -- vielleicht hat das ja schon
irgendwer getan.
