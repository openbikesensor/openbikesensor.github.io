---
title: Privacy Zones
weight: 50
---

Privacy zones are an important concept in the OpenBikeSensor ecosystem. They
are used in the sensor device itself, but also on the Data Portal, to mask your
location in certain areas.

This is a crucial privacy feature. Since uploaded data may become published in
the Open Data repository, users may (or actually should) choose to configure
these privacy zones to protect their privacy. A bad actor might otherwise be
able to find out from the data where they live, work, or frequently hang out.

{{% alert title="Note" color="info" %}}
The Data Portal does **not yet** support privacy zones. But we're working on
it, and the way it is described here matches what will be possible.
{{% /alert %}}

## How privacy zones work

A privacy zone can be configured in the sensor device itself, changing its
recording activity, and in the Data Portal, which then uses it to filter data
before publishing. Depending on how you use your sensor and what your level of
concern is, you might choose either or both of these options. 

A privacy zone is a circular area, defined by a center point and the radius,
around which data is masked. You should set up multiple of these zones at
relevant locations, so that bad actors cannot identify where your tracks start
and end:

* Your home 
* Your workplace 
* Your friends' homes
* Anywhere you frequently ride your bike or regularily hang out

## Recording modes

There are 4 modes of operation for the OpenBikeSensor:

> TODO

## Which one to choose

The settings inside the OBS are applied *as it records the data*. So anything
not recorded due to a privacy zone and the privacy setting will never be
available to anyone, not even you, when you take out the SD card from the
sensor and transfer the files to your computer.

If you want to have your own data, but not publish them, consider putting the
privacy zones into the Data Portal instead. While this means you have to trust
the Data Portal software to do its job properly (and nobody will guarantee that
it does, but we promise to try our hardest), it allows you to download the
unmasked data from the portal *yourself*.

A third option is to never upload the data from your OBS directly, but instead
move the track files to your computer and use [a
script](https://github.com/openbikesensor/OpenBikeSensor-Scripts/blob/main/RemovePrivacy/filterCSV.py)
to privatize the data before you upload it from there to the Data Portal. 

The safest option of course is to never upload your data at all. But then, what
are we building a sensor for?

One more difference between configuring the privacy zones in the OpenBikeSensor
versus the Data Portal is that the sensor does not retroactively apply the
privacy settings. So if you forget a location, or did not choose the right
recording mode *before* you went for a ride, the data is already stored in the
track. The Data Portal however reapplies your privacy zones whenever you change
them, to all your past (and future) tracks. Though you have to remember that
once your data is published into the Open Data repository, anybody might have
downloaded a copy already, and you will never be able to take that back.
You should always review your settings before you publish!

{{< imgproc privacy Fit "800x800" >}}
Privacy in the OBS ecosystem
{{< /imgproc >}}

## Why we shift privacy zones

If you publish multiple tracks with anonymized data, anybody will be able to
reconstruct the *privacy zone* from the published data. The tracks going from
and to the private place inside the privacy zone will be cut off at the
boundary of the zone. If you ride your bike into different directions, away
from your private point, it is possible to mathematically redefine the circle
that you used to cut off the tracks.

Therefore, it's not advisable to put your privacy's center point right on the
location you don't want others to know. In the OpenBikeSensor, you have the
option to manually shift your privacy zone into a random direction. You should
only do this once for each zone. You can also use any external map tool and
manually find center coordinates for your privacy zone that seem reasonable to
you, but are not exactly your private location.

In the Data Portal you can place the circle manually on map, in a way that it
contains your private locations. Or you provide the actual private location and
let the app choose a random offset. Both ways allow you to visually review your
shifted zone before saving.

By the way, for the same reason as above, you should not *change* the offset of
your privacy zones too often. Otherwise, it's possible to reconstruct *many*
circles from the data, *all of which* will contain your private location. This
would defeat the purpose of shifting the privacy zone in the first place, as it
reduces the size of the area that probably contains your private location. Kind
of counter-intuitively, it reduces security instead of adding to it!
