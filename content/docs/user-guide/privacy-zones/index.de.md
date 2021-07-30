---
title: Datenschutz-Zonen
weight: 50
resources:
- src: privacy.jpg
  title: "Image #:counter"
  params:
    byline: "CC-BY-SA? OpenBikeSensor Contributors"
---

{{< language-switch 1 >}}

Datenschutzzonen sind ein wichtiges Konzept im OpenBikeSensor-Ökosystem. Sie werden im Sensorgerät selbst, aber auch im Datenportal verwendet, um Deinen Standort in bestimmten Bereichen zu verbergen.

Dies ist eine Funktion zum Schutz der Privatsphäre. Da hochgeladene Daten im Open Data Repository veröffentlicht werden können, ist es für den Benutzer möglich Datenschutzzonen konfigurieren, um die eigene Privatsphäre zu verbergen. Im schlimmsten Fall könnte ein böswilliger Akteur anhand der Daten herausfinden, wo Du wohnst, arbeitest oder Dich häufig aufhälst.
Hinweis
{{% alert title="Note" color="info" %}}
Das Datenportal unterstützt ##noch keine## Datenschutzzonen. Aber wir arbeiten daran, und die hier beschriebene Vorgehensweise entspricht dem, was möglich sein wird.
{{% /alert %}}

## So funktionieren Privatzonen

Eine Datenschutzzone kann im Sensorgerät selbst konfiguriert werden, wodurch sich seine Aufzeichnungsaktivität ändert, und im Datenportal, das sie dann zum Filtern von Daten vor der Veröffentlichung verwendet. Je nachdem, wie Du den Sensor verwendest und wie groß die Bedenken sind, kann man eine oder beide Optionen wählen.

Eine Datenschutzzone ist ein kreisförmiger Bereich, der durch einen Mittelpunkt und einen Radius definiert ist und um den herum Daten maskiert werden. Du kannst mehrere dieser Zonen an relevanten Orten einrichten, damit böswillige Akteure nicht erkennen können, wo Deine Spuren beginnen und enden:

    Das Zuhause
    Der Arbeitsplatz, Schule, Uni
    Die Wohnungen der Freunde
    Jeder Ort, an dem Du häufig mit dem Fahrrad Dich regelmäßig aufhälst

## Aufzeichnungsmodi

Es gibt 4 Betriebsmodi für den OpenBikeSensor:

    TODO

## Welchen Modus Sie wählen

Die Einstellungen im OBS werden bei der Aufzeichnung der Daten übernommen. Alles, was aufgrund einer Datenschutzzone und der Datenschutzeinstellungen nicht aufgezeichnet wird, ist also für niemanden zugänglich, nicht einmal für Dich, wenn Du die SD-Karte aus dem Sensor nimmst und die Dateien auf einen Computer überträgst.

Wenn Du Deine eigenen Daten haben möchtest, diese aber nicht veröffentlicht werden sollen, kannst Du die Datenschutzzonen stattdessen im Datenportal einrichten. Das bedeutet zwar, dass man darauf vertrauen muß, dass die Software des Datenportals ihre Aufgabe ordnungsgemäß erfüllt (und niemand kann garantieren, dass dies der Fall ist, aber wir versprechen, dass wir unser Bestes geben), aber Du kannst dann die unmaskierten Daten selbst vom Portal herunterladen.

Eine dritte Möglichkeit besteht darin, die Daten niemals direkt vom OBS hochzuladen, sondern die Track-Dateien auf Deinen Computer zu verschieben und ein Skript zu verwenden, um die Daten zu privatisieren, bevor sie von dort aus in das Datenportal hochladen werden.

Die sicherste Option ist natürlich, die Daten überhaupt nicht hochzuladen. Aber wozu bauen wir dann einen Sensor?

Ein weiterer Unterschied zwischen der Konfiguration der Datenschutzzonen im OpenBikeSensor und im Datenportal ist, dass der Sensor die Datenschutzeinstellungen nicht rückwirkend anwendet. Wenn Du also einen Ort vergessen oder nicht den richtigen Aufzeichnungsmodus gewählt hast, bevor Du losgefahren bist, sind die Daten bereits im Track gespeichert. Das Datenportal hingegen wendet die Datenschutzzonen bei jeder Änderung auf alle vergangenen (und zukünftigen) Tracks an. Allerdings ist zu bedenken, dass, sobald die Daten im Open-Data-Repository veröffentlicht sind, jeder bereits eine Kopie heruntergeladen haben könnte, und man diese nicht mehr zurücknehmen kann. Also die Einstellungen immer überprüfen, bevor man sie veröffentlicht!

{{< imgproc privacy Fit "800x800" >}}
Privacy in the OBS ecosystem
{{< /imgproc >}}

## Warum wir Datenschutzzonen verschieben

Wenn Du mehrere Tracks mit anonymisierten Daten veröffentlichst, könnte jeder die Privatsphäre-Zone aus den veröffentlichten Daten rekonstruieren. Die Tracks, die von und zu einem privaten Ort innerhalb der Privatsphäre-Zone führen, werden an der Grenze der Zone abgeschnitten. Wenn DU mit dem Fahrrad in verschiedene Richtungen fahren, weg von Deinem privaten Punkt, ist es möglich, den Kreis, der zum Abschneiden der Spuren definiert wurde, mathematisch neu zu definieren.

Daher ist es nicht ratsam, den Mittelpunkt der Privatsphäre genau auf die Stelle zu legen, von der Du nicht willst, dass andere sie kennen. Im OpenBikeSensor hast Du die Möglichkeit, Deine Privatzone manuell in eine beliebige Richtung zu verschieben. Du solltest dies nur einmal für jede Zone tun. Man kann auch ein beliebiges externes Kartentool verwenden und manuell Zentralkoordinaten für eine Privatzone finden, die sinnvoll erscheint, aber nicht genau der privater Standort ist.

Im Datenportal kannst Du den Kreis manuell so auf der Karte platzieren, dass er Deine privaten Standorte enthält. Oder Du geben den tatsächlichen privaten Standort an und lässt die App einen zufälligen Offset wählen. Auf beiden Wegen kannst Du die verschobene Zone vor dem Speichern visuell überprüfen.

Übrigens: Aus demselben Grund wie oben solltest Du den Versatz Deiner Privatzonen nicht zu oft ändern. Andernfalls ist es möglich, viele Kreise aus den Daten zu rekonstruieren, die alle den privaten Standort enthalten. Dies würde den Zweck der Verschiebung der Privatzone zunichte machen, da es die Größe des Bereichs, der wahrscheinlich den privaten Standort enthält, verringert. Das wäre kontraproduktiv, es verringert die Sicherheit, anstatt sie zu erhöhen!
