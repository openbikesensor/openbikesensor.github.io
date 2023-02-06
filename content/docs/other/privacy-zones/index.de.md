---
title: Privatsphäre-Zonen
weight: 50
resources:
- src: privacy.jpg
  title: "Image #:counter"
  params:
    byline: "CC-BY-SA? OpenBikeSensor Contributors"
---

Privatsphäre-Zonen sind ein wichtiges Konzept im OpenBikeSensor-Ökosystem. Sie werden im OpenBikeSensor selbst, als auch im Datenportal verwendet, um Deinen Standort in bestimmten Bereichen zu verbergen.

Dies ist eine Funktion zum Schutz der Privatsphäre. Da hochgeladene Daten im Datenportal (Open Data Repository) veröffentlicht werden können, ist es für den Benutzer möglich Privatsphäre-Zonen konfigurieren, um die eigene Privatsphäre zu verbergen. Im schlimmsten Fall könnte ein böswilliger Akteur anhand der Daten herausfinden, wo Du wohnst, arbeitest oder Dich häufig aufhälst.

{{% alert title="Note" color="info" %}}
Das Datenportal unterstützt **noch keine** Privatsphäre-Zonen. Aber wir arbeiten daran, und die hier beschriebene Vorgehensweise entspricht dem, was möglich sein wird.
{{% /alert %}}

## So funktionieren Privatsphäre-Zonen

Eine Privatsphäre-Zone kann entweder im Sensorgerät selbst konfiguriert werden - wodurch sich die Aufzeichnungsaktivität ändert - oder später im Datenportal, wo die Privatsphäre-Zone dann zum Filtern von Daten vor der Veröffentlichung verwendet wird. Je nachdem, wie man den Sensor verwendet und wie groß die Bedenken sind, kann man eine oder auch beide Optionen wählen.

Eine Privatsphäre-Zone ist ein kreisförmiger Bereich, der durch einen Mittelpunkt und einen Radius definiert ist. Damit können Daten maskiert werden. Du kannst mehrere dieser Zonen an relevanten Orten einrichten, damit böswillige Akteure nicht erkennen können, wo Deine Spuren beginnen und enden:

* Das Zuhause
* Der Arbeitsplatz, Schule, Uni
* Wohnungen von Freunden
* Jeder Ort, an dem Du Dich mit dem Fahrrad regelmäßig aufhältst

## Aufzeichnungsalternativen

Es gibt 4 Alternativen für den OpenBikeSensor um persöhnliche Daten zu schützen:

1. Privatsphäre-Zonen im OBS einrichten
2. Privatsphäre-Zonen im Datenportal einrichten
3. die Track daten auf eigenem PC privatisieren bevor sie ins Portal hochgeldaen werden
4. Keine Daten hochladen

## Welchen Modus kannst Du auswählen

1. Wenn Du Privatsphäre-Zonen Einstellungen im OBS vornimmst und aktivierst, werden in diesen Bereichen keine Daten aufgezeichnet, sind also für niemanden zugänglich. Auch nicht für Dich, wenn Du z.B. die SD-Karte aus dem Sensor nimmst und die Dateien auf einen Computer überträgst.

2. Wenn Du Deine eigenen Daten haben möchtest, diese aber nicht veröffentlicht werden sollen, kannst Du die Privatsphäre-Zonen stattdessen im Datenportal einrichten. Das bedeutet zwar, dass man darauf vertrauen muß, dass die Software des Datenportals ihre Aufgabe ordnungsgemäß erfüllt (und niemand kann garantieren, dass dies der Fall ist, aber wir versprechen, dass wir unser Bestes geben), aber Du kannst dann die unmaskierten Daten selbst vom Portal herunterladen.

3. Eine dritte Möglichkeit besteht darin, die Daten nicht direkt vom OBS in das Datenportal hochzuladen, sondern die Track-Dateien erst einmal auf Deinen Computer zu verschieben. Dann kannst Du mit einem eigenen Skript die Daten privatisieren, bevor sie von Deinem Computer aus in das Datenportal hochladen werden.

4. Die sicherste Option ist natürlich, die Daten überhaupt nicht hochzuladen. Aber wozu bauen wir dann einen OpenBikeSensor und ein Auswerte Software?

Ein weiterer Unterschied zwischen der Konfiguration der Privatsphäre-Zonen im OpenBikeSensor und im Datenportal ist, dass der OpenBikeSensor die Datenschutzeinstellungen nicht rückwirkend anwendet. Wenn Du also einen Ort vergessen oder nicht den richtigen Aufzeichnungsmodus gewählt hast, bevor Du losgefahren bist, sind die Daten bereits im Track gespeichert.

Das Datenportal hingegen wendet die Privatsphäre-Zonen bei jeder Änderung auf alle vergangenen (und zukünftigen) Tracks an.

Allerdings ist zu bedenken, dass, sobald die Daten im Open-Data-Repository veröffentlicht sind, jeder bereits eine Kopie heruntergeladen haben könnte, und man diese nicht mehr zurücknehmen kann. Also die Einstellungen immer überprüfen, bevor man sie veröffentlicht!

{{< imgproc privacy Fit "800x800" >}}
Privacy in the OBS ecosystem
{{< /imgproc >}}

## Warum Privatsphäre-Zonen verschoben werden können

Wenn Du mehrere Tracks mit anonymisierten Daten veröffentlichst, könnte jeder die private Sphäre aus den veröffentlichten Daten rekonstruieren. Die Tracks, die von und zu einem privaten Ort innerhalb der Privatsphäre führen, werden zwar an der Grenze der Zone abgeschnitten, aber wenn Du mit dem Fahrrad in verschiedene Richtungen fährst, weg von Deinem privaten Punkt, ist es möglich, den Kreis, der zum Abschneiden der Spuren definiert wurde, mathematisch zu finden.

Daher ist es nicht ratsam, den Mittelpunkt der Privatsphäre genau auf die Stelle zu legen, von der Du nicht willst, dass andere sie kennen. Im OpenBikeSensor hast Du die Möglichkeit, Deine Privatsphäre manuell in eine beliebige Richtung zu verschieben. Du solltest dies nur einmal für jede Zone tun. Man kann auch ein beliebiges externes Kartentool verwenden und manuell Zentralkoordinaten für eine Privatsphäre finden, die sinnvoll erscheint, aber nicht genau der privater Standort ist.

Im Datenportal kannst Du den Kreis manuell so auf der Karte platzieren, dass er Deine privaten Standorte enthält. Oder Du gibst den tatsächlichen privaten Standort an und lässt die App einen zufälligen Offset wählen. Auf beiden Wegen kannst Du die verschobene Zone vor dem Speichern visuell überprüfen.

Übrigens: Aus demselben Grund wie oben solltest Du den Versatz Deiner Privatsphäre-Zonen nicht zu oft ändern. Andernfalls ist es möglich, viele Kreise aus den Daten zu rekonstruieren, die alle den privaten Standort enthalten. Dies würde den Zweck der Verschiebung der Privatsphäre zunichte machen, da es die Größe des Bereichs, der wahrscheinlich den privaten Standort enthält, verringert. Das wäre kontraproduktiv, es verringert die Sicherheit, anstatt sie zu erhöhen!
