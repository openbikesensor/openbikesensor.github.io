Diese Seite beschreibt die Bauteile, die bestellt oder anderweitig organisiert
werden müssen, um ein Gerät zusammenzubauen.  Bitte lies sie sorgfältig durch,
und auch den Abschnitt "Notizen", denn bei einige Teilen musst du aufpassen,
das richtige zu erwischen.

Einige Links könnten in der Zukunft kaputt gehen, wir werden dann versuchen
neue zu finden und Verkäufer:innen zu verlinken, mit denen wir gute Erfahrungen
gemacht haben.

Diese Liste kann natürlich fehlerhaft oder veraltet sein. Bitte vergleiche die
Designdateien (Platine, Schaltplan, Gehäusedesign, ...) mit deiner Bestellung,
um eventuelle Unterschiede festzustellen. Insbesondere wenn du größere Mengen
einkaufen möchtest (z.B. für Sammelbestellungen), oder die Bauteile aus China
geliefert werden und einige Wochen Lieferzeit haben, solltest du alles doppelt
überprüfen.

## Notizen

* **ESP32 Development Board**: Von diesem Modul existieren einige verschiedene
  Versionen. Du brauchst die Variante mit 30 Pins. Diese wird oft unter der
  Bezeichnung "ESP32 DEVKIT v1" verkauft.

* **SD-Karte**: Billige SD-Karten haben schon öfters Probleme verursacht, wähle
  lieber ein Markenprodukt.

* **GPS-Modul**: Bevorzuge die Variante mit großer Antenne
  ([Link1](https://de.aliexpress.com/item/1550843440.html),
  [Link2](https://de.aliexpress.com/item/1005001635722164.html)). Die Antennen
  haben unterschiedliche Qualität und Kabellänge, bei Ersatzbedarf gibt es auch
  günstige Weiterverkäufer:innen der Antennen in Deutschland.

* **Displaykabel**: Hier solltest du auf keinen Fall sparen. Kaufe ein
  LifY11Y-Kabel in hoher Qualität, oder die Verbindung zum Display könnte
  darunter leiden und nur unzuverlässig funktionieren. Zwei Meter Länge sind
  genug für große Fahrräder und ein paar extra Versuche bis das Crimpen klappt.
  Cat5 oder Cat6 Netzwerkkabel könnten zwar elektronisch auch funktionieren,
  sind aber in der Regeln nicht so flexibel und fühlen sich nicht so gut an.

* **JSN-SR04T**: Hier musst du auf die richtige Version achten. Es gibt eine
  ganze Menge Varianten, von denen viele nicht funktionieren. Wir haben [auf
  dieser Seite]({{ ref . "/docs/hardware/general/collective-order" }}) dokumentiert, welche wir
  gefunden haben und wie gut die jeweils funktionieren.

* Einige Bauteile können in größeren **Mengen** zu wesentlich günstigeren
  Preisen gekauft werden. Bildet Sammelbestellungen um viel Geld zu sparen!

* Von besonders günstigen Teile kannst du gern etwas mehr bestellen, als
  **Ersatz**, falls etwas verloren oder kaputt geht (Widerstände, Schrauben und
  Muttern, Crimp-Kontakte, Kabel und Litze, ...)

* **Gehäuse** müssen [in PETG 3D-gedruckt]({{ ref . "/docs/hardware/general/case" }}) werden. Es
  gibt viele Versionen für verschiedene Zwecke und von verschiedenen Leuten.
  Die Community pflegt aktiv ein bestimmtes Gehäuse für jede PCB-Version.
  Schau' dich im
  [Gehäuse-Repository](https://github.com/openbikesensor/OpenBikeSensor3dPrintableCase)
  auf Github um. Du kannst dein Gehäuse selbst drucken, im Slack andere darum
  bitten, oder fertige Drucke anhand der Designdateien von einem
  3D-Druck-Service bestellen (das ist aber in der Regel relativ teuer).

* **PCB**: Du benötigst ein PCB der passenden Version, speziell [anhand der
  Designdateien hergestellt]({{ ref . "/docs/hardware/general/pcb" }}). Dies sollte am besten
  ebenfalls in großen Mengen bestellt werden, da der Stückpreis dann stark
  sinkt. Frag' auf jeden Fall im Slack nach, ob irgendwer noch welche auf Lager
  hat, bevor du neue anfertigen lässt!
