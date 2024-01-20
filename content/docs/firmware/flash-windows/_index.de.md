---
title: Flashen unter Windows
weight: 11
---

## Installation via Browser
Der einfachste Weg, deinen OpenBikeSensor zu flashen, ist den [Web-Installer](https://install.openbikesensor.org) in Google chrome zu öffnen und der Schritt-Für-Schritt anleitung dort zu folgen.
Funktioniert das für dich nicht, folge den Schritten unten.

## Firmware herunterladen

Lade das [neueste
Release-Archiv](https://github.com/openbikesensor/OpenBikeSensorFirmware/releases)
der OBS-Firmware von GitHub herunter.

Du benötigst die größere ZIP-Datei mit dem Namen
`obs-v9.9.9.9999-initial-flash.zip`. Entpacke die Dateien in einen temporären
Ordner, sie heißen `0x??????.bin`. Die Zahlen sind die Basisadresse, an die die
Daten geflasht werden sollen. Mach dir keine Gedanken darüber, was das bedeutet,
dies wird in den nächsten Schritten Sinn ergeben.

## Flash Tools herunterladen

Lade die ["Flash Download Tools" für
ESP32](https://www.espressif.com/en/support/download/other-tools) (und einige
verwandte Chips) vom Hersteller ESPRESSIF herunter und extrahieren das Archiv
in einen speziellen temporären Ordner.

Es erfolgt keine Installation, vielmehr wird das Tool direkt aus dem Ordner
heraus gestartet.

## Treiber installieren

Du musst wahrscheinlich einen sogenannten USB-to-UART (seriellen) Treiber
installieren, damit Windows mit dem Chip auf dem ESP-Entwicklungsboard
kommunizieren kann. Da es sich um einen generischen Treiber handelt, hast du
diesen möglicherweise schon bei anderen Projekten installiert? Im
Zweifelsfall lade und installiere sicherheitshalber den Treiber von der
Herstellerseite, Silicon Labs. Eventuell kann es sich auch lohnen, auf die
neueste Version zu aktualisieren. Der Treiber ist im Paket für die CP210x-Chips
enthalten. Du findest ihn [auf dieser
Seite](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers), er
heißt "CP210x Universal Windows Driver". Folge den dort gegebenen Anweisungen.

Sollte der Link nicht mehr funktionieren, verwende Google, um eine
aktualisierte Version zu erhalten, aber achte wie gewohnt darauf, dass du auf
einer vertrauenswürdigen Seite landest.

## Flash Tool Bedienung

Trenne alle USB-Geräte vom Computer, die du gerade nicht benötigst. Der
Anschluss könnte ansonsten bei der Auswahl des richtigen (zu flashenden)
Gerätes verwechselt werden.

Verbinde nun das ESP32 Board über USB-Kabel. Du kannst das Entwicklungsboard
hierfür aus dem OpenBikeSensor ausbauen, oder nur die Stromzufuhr der Batterie
mit dem Schalter trennen (normal ausschalten) und das USB-Kabel durch die
Öffnung hinter der GPS-Antenne führen und in das eingebauten Board einstecken.

Windows sollte bestätigen, dass ein neues Gerät erkannt wurde. Manche Kabel
funktionieren nicht, wenn dein Gerät nicht erkannt wird, probiere es mit einem
anderen.

Starte die ausführbare Datei `flash_download_tool_3.X.X.exe` im Ordner des
Flash Download Tools. Das dauert ein wenig -- nur Geduld. Es öffnet zuerst ein
Konsolenfenster und schließlich eine einfache Benutzeroberfläche.

Wähle *Entwicklermodus - ESP32 DownloadTool* in der Benutzeroberfläche (der
*Factory-Modus* kann verwendet werden, wenn mehrere ESPs gleichzeitig geflasht
werden sollen -- in diesem Fall kann man auch mehrere ESPs gleichzeitig
verbinden).

{{< imgproc "esp32-download-tool" Resize "300x" >}}
  Eine korrekte Konfiguration der ESP32 Flash Download Tools (klicken zum Vergrößern)
{{< /imgproc >}}

Jetzt musst du dem Tool mitteilen, *was* geflasht werden soll. Oben im Dialog
gibt es mehrere Zeilen, beginnend mit Kontrollkästchen, einem Textbereich,
einen Knopf mit drei Punkten, einem `@`-Zeichen und einem weiteren Textbereich.

Wähle für jede der 4 Dateien, die wir flashen müssen, die drei Punkte aus, die
eine Dateiauswahl ermöglichen, in der du jeweils eine der 4 `*.bin`-Dateien der
Firmware auswählst. Die Reihenfolge ist nicht wichtig, aber du musst die
Adresse der Datei in das rechteste Textfeld eingeben. Die Adresse steht jeweils
im Dateinamen, z. B. `0x01000`. Die Kästchen wechselt auf grünen Hintergrund,
was eine positive Plausibilitätsprüfung des Flash-Tools bedeutet.

Aktivieren nun die Kontrollkästchen, die sich vor den soeben vorgenommenen Eingaben befinden.
Alle anderen Werte bleiben auf ihren Standardeinstellungen:

* SPI SPEED: 40MHz
* SPI MODE: DIO (ändert sich gleich automatisch)
* FLASH SIZE: 32Mbit
* SpiAutoSet: nicht ausgewählt
* DoNotChgBin: ausgewählt

Unten siehst du eine Dropdown-Box mit der Beschriftung *COM*. Hier musst du den
richtigen COM-Port für den Flash-Vorgang auswählen. Wenn du dir nicht sicher
bist, belasse den Standardwert und versuchen einen anderen Wert, wenn der
Vorgang fehlschlägt. Stelle sicher, dass keine anderen Geräte angeschlossen
sind!

Drücke nun *Start*. Danach solltest du etwa Folgendes sehen: „Flashing in Progress“

Wenn alles richtig läuft, erhältst du einen Fortschrittsbalken mit einer
abschließenden Erfolgsmeldung. Ziehe danach das USB-Kabel ab. Das ESP32 kann
dann in das OpenBikeSensor-Gehäuse eingebaut werden (falls noch nicht
geschehen).

Versionsupdates können in weiterer Folge über die Weboberfläche des
OpenBikeSensors erfolgen und nicht mehr durch den oben angeführten, doch recht
komplizierten Vorgang.

Jetzt ist dein OpenBikeSensor einsatzbereit und du kannst mit der
[Konfiguration]({{< relref "configuration" >}})
fortfahren!

## Bei Problemen

Wenn du eine rote Fehlermeldung erhältst, überprüfe, ob die USB-Verbindung
korrekt ist und der richtige COM-Port ausgewählt wurde. Wenn alles fehlschlägt,
und du hast Fragen oder weitere Informationen suchst, findest du [in der Community]({{<
ref "/community" >}}) immer Hilfe.
