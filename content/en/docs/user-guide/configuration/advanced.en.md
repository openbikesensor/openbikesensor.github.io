---
title: Advanced
weight: 20
---

## How to enter configuration mode

You can enter the configuration mode by pushing the button while turning on the
device. 

### Access Point Mode

- On first start of the configuration mode or if you are outside of the Range of your WiFi, the OpenBikeSensor will open a unique WiFi access point 
- The access point is named after the MAC adress "OpenBikeSensor-xxxxxxxxxxxx" with the initial password "12345678" 
- The configuration page can be found on "172.20.0.1" on the AP 

### WiFi Mode
- It might be neccessary to de-activate the mobile data on your mobile phone to access this page.  
- OBS can also connect to an existing WiFi, if credentials were entered in a previous configuration (see WiFi Settings) 
- Connected to an existing WiFi, the IP adress of the configuration page is shown on the device's display. 

## Structure of the Configuration Menus

### General

#### Sensor

Define the offset between the end of your handle bar and the outer edge of the OpenBikeSensor. These values will automatically get substracted from the current measurement. Additionally you could "swap" the left and right measurement, in case you flip the device on your bike.

#### GPS

You could define, in which way your device will acknowledge a valid GPS fix and starts operation. Typically it will start regular operation when it has contact to 4 gps satellites.

#### Generic Display

- flip the display, if you need to mount it upside down 
- invert the display bright / dark parts, which might help in bright sunlight.

#### Measurement Display

Here are several options, which values you might want to see on your display. 
- "simple mode" – display only of measurement to the left
- Show left / right measurement
- Show satellite – display of number of gps satellites recognized by the device
  (more satellites – more accurate positioning)
- Show velocity – display of actual speed (quite rough because of slow
  measurement intervals)
- Show confirmation stats – counts button press and confirmed detection of
  surpassing events 
- Show nerd details for distance sensors – display of raw data of sensors and
  number of measuring events within one second (helpful for troubleshooting)

#### Privacy Options

To keep some privacy, you could tell your device to stop recording near your
home or any other privacy zone. This could be no recording at all or just no
GPS-tracking any more, but still storing all confirmed passes.

Define your home location and diameter of the privacy zone in the corresponding menu.

#### Upload User Data

Setup for upload-server to collect track data
- Preset for HLRS-project: openbikesensor.hlrs.de
- To upload track data, you need a user account on the website openbikesensor.hlrs.de (or other compatible online-service) 
- API Key: Insert the individual API key from your user account at openbikesensor.hlrs.de in the field below the upload sensor

#### Operation

- Enable Bluetooth – (from Firmware version 0.3dev.) check if you want to
  connect your Openbiksesensor to a compatible Smartphone App s.a. SimRa
- SimRa Mode – check if you are connecting the Openbikesensor with the SimRa
  App

### Privacy Zones

You could set as many privacy zones, as you like, including their own radius.
In the Privacy Options you define how your OpenBikeSensor behaves while inside
a Privacy Zone.

### WiFi Settings

The OpenBikeSensor can connect to an available WiFi if you supply its
credentials. This is convenient when you want to stay connected to your local
WiFi when configuring the sensor. It will tell you the IP adress to connect to
on the display.

To upload track from the Open Bike Sensor directly a WiFi connection with
internet access is necessary.

### Backup & Restore

Here you can back up the configuration of your OpenBikeSensor to your PC or
mobile device. To restore from a saved configuration chose the corresponding
file in the menu dialog. Use this option before firmware updates to ensure you
can restore your settings if they get lost in the process.

### Update Firmware

After downloading the latest release (or any other version, in case you need a
special setup), just click on "Update" in the options. Select the downloaded
file and click update. The device will automatically reboot after a successful
update.

You can directly upload a precompiled binary; the latest release can always be
found
[here](https://github.com/openbikesensor/OpenBikeSensorFirmware/releases).

### Reboot

This button restarts the device into the regular measurement mode and leaves
the options.
