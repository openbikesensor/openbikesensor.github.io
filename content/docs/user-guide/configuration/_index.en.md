---
title: Configuration
weight: 20
---

This page describes how you can configure your **OpenBikeSensor Classic**.

If you're using the OpenBikeSensor for the first time you should configure a
few important settings. More on that below, at "Important settings". First,
let's examine how to get to the configuration page.

## Configuration mode

First you have to enter the configuration mode on your device. Turn it off with
the switch, hold down the button at the display, then turn it on again. You can
release the button after a few seconds. 

If you've configured a wifi network before, the device will now connect to that
network. If you haven't, or the connection fails, then the device will open its
own access point, named `OpenBikeSensor-...`. The **wifi password** is then **12345678**.

Now take a smartphone or computer and join the same network as the
OpenBikeSensor -- either your configured network, or the one it just opened.
Start your browser (e. g. Mozilla Firefox) and enter the IP address shown in
the display of the device into the address bar.

You should now see the login page of the OpenBikeSensor. On a smartphone you might
need to disable your mobile data connection for this to work properly.

## Log in to the configuration menu

The access to the configuration is secured through an encrypted connection and
a PIN.

You can start the encrypted connection by clicking *go to https*. The browser
will show a certification warning, which you may safely ignore (normally you
should never do this while browsing the internet -- here it is fine). As an
alternative you can connect without encryption by clicking *enable unencrypted
access*. You should only do this in wifi networks that are secure, for example
in your own home network.

To enter the configuration mode, your browser will ask for a username and
password. The username doesn't matter, as long as it is not left  empty, so
enter `obs` for example. The password is a 6-digit key which is now shown in
the display of your device. 

## Important settings

To start using your OpenBikeSensor, you should configure at least three items: 

* Handlebar width
  - Measure the horizontal distance from your left and right handlebar end to
    the center of your bicycle. If your handlebar is symmetric, those two
    values will be the same, e. g. a handlebar of 75cm width will have 37.5cm
    on each side. If your bicycle is not symmetric, you'll get two different
    values.
  - Subtract 2.5cm from the value for each side, to account for the width of the
    sensor device itself (which is 5cm). For the sample handlebar from above, we would
    have an offset value of 35cm on each side.
  - Enter these values (in centimeters) in the page *General* at *Offset Sensor Left*
    and *Offset Sensor Right*.
  - Don't forget to save your changes.
  - Now the device will be able to calculate the correct distance to your bike
    after measuring the distance from its center.
* Wifi settings for data upload
  - To upload your tracks you will need to teach your OpenBikeSensor how to 
    access the internet.
  - Enter the name and password of your wifi network in the page *Wifi* at
    *SSID* and *Password*. Make sure your spelling is correct, and note that
    both entries are case sensitive.
  - Don't forget to save your changes.
  - When you next start the configuration mode, the device will connect to this
    network. It will only open its own wifi network if that connection fails. 
    You can check in the display which network the device is connected to.
* API key
  - You'll probably want to upload your tracks to a regional or project-related
    data portal. Find a [list of available portals in the forums](https://forum.openbikesensor.org/t/uebersicht-verfuegbarer-portale/688).
  - Create an account on your chosen portal. Log in and navigate to your profile settings page
    from your account icon. There you will find your API Key.
  - Copy this key to the respective field on the *General* page, in the section
    *Upload User Data*.
  - Also copy the "API URL" from your profile to its corresponding field.
  - Again, you'll need to save your changes.

With these settings you'll now be able to correctly record your journeys and then
[upload them to the portal]({{< relref "track-upload" >}}).

## All settings

Eine sensible configuration is preloaded with the device and should only
be modified if needed. Here we explain all the options.

### General

* **Sensor**
  
  This is the horizontal distance between the outermost part of your bicycle
  and the side of the sensor device. This is subtracted from the measured
  distance to get the actual distance between the bicycle and any obstacle.

  You can also swap the left and right sensors here, if you mount the device in
  an unusual orientation.

* **GPS**

  You can choose when the device considers the GPS signal valid and starts the
  recording. Usually, contact with 4 GPS satellites is considered enough.

* **Generic Display**

  * You can flip the display if you've mounted it upside down.
  * You can invert the colors on the display, which might help readability in bright sunlight.

* **Measurement Display**

  This section configures what the display shows you during the ride:

  * *simple mode*: only show the left and right distance
  * *show satellites*: displays number of currently "visible" GPS satellites
  * *show velocity*: display your speed, from GPS (rather inaccurate due to slow GPS update intervals)
  * *show confirmation stats*: display how many times you pressed the button, and how many overtaking events were actually counted
  * *show nerd details for distance sensors*: show raw sensor details and frequency (for debugging)

* **Privacy Options**

  To keep your privacy, you can instruct the devicce to prevent recording near
  your home or in other privacy sensitive areas. You can choose whether not to
  record anything at all, or to only skip recording of the GPS track and keep
  confirmed events (with location).  

  Read more about privacy zones [on their details page]({{< relref "privacy-zones" >}}).

* **Upload User Data**

  This is where you configure the connection to your portal to upload
  recordings. See above at "Important settings" for details.

* **Operation**

  * Enable Bluetooth – activate this to combine the OpenBikeSensor with *any* compatible app
  * SimRa Mode – activate this as well when used with the *SimRa* app in particular

### Privacy Zones

This is where you can define separate privacy zones, each with their own center
location and radius. On the General page you decide how the device behaves
while inside one of these zones.

### WiFi Settings

The OpenBikeSensor can connect to an existing wifi network if you enter its
credentials here. This is required for data upload to a portal and also useful
if you want to access the configuration page without switching away from your
home network.

### Backup & Restore

This page is used to save the configuration of the device into a file on your
PC or phone and restore that configuration later.

Use this option before a firmware update to ensure that you can recover your
settings if anything goes wrong.

### Update Firmware

Here you can upload an updated firmware version. You can always find the newest
version [on
GitHub](https://github.com/openbikesensor/OpenBikeSensorFirmware/releases).
After a successful update the device restarts automatically.

### Reboot

Choose this option if you want to exit the configuration mode. The device will
restart into the regular measurement mode. You can also power cycle your device
instead, or just turn it off after making all desired changes. There is no way
to shut it down, except using the hardware toggle switch.
