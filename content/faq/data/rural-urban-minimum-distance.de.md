---
title: >
    Woher kennt das Portal den Mindestabstand?
slug: mindestabstand
weight: 100
---

Es gibt keine zuverlässigen Informationen, die zu jeder Straße den gesetzlichen
Mindestabstand beim Überholen erkennen lassen. Daher versucht die Portalsoftware
den Mindestabstand anhand verschiedener Kriterien zu bestimmen:

- Beim Import der Straßenzüge wird das OSM-Tag
  [`zone:traffic`](https://wiki.openstreetmap.org/wiki/Key:zone:traffic)
  ausgewertet.
- Fehlt dieses Tag, wird die Zone anhand der einiger anderer Tags geraten, unter
  anderem am Straßentyp (`highway`) und der Höchstgeschwindigkeit (`maxspeed`).
- Die Zone (`rural`, also außerorts oder `urban`, also innerorts) führt dann
  zum Mindestabstand für die Auswertung.

Die Logik funktioniert momentan nur für Deutschland und alle Länder, in denen
die gleichen Bedingungen (innerorts 1,5m und außerorts 2m) gelten.

Wenn eine Straße falsch klassifiziert ist, kannst du sie in der OpenStreetMap
korrigieren, indem du das `zone:traffic` Tag korrekt setzt. Falls viele Straßen
in deinem Auswertungsbereich falsch klassifiziert sind, kannst du uns helfen
den Rate-Algorithmus zu verbessern, indem du einen [Problembericht auf Github
schreibst](https://github.com/openbikesensor/portal/issues/new) oder im [Forum]({{< ref "/community" >}})
postest.
