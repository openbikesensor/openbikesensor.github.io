---
linkTitle: Minimal
title: Minimal configuration
weight: 10
---

At least three settings must be configured before you can use a new (or reset) OpenBikeSensor.

* The left and right offsets as the largest width of the bike with rider (handlebar width, elbow, etc.)
* API key
* WLAN settings to upload your data

## Enable configuration mode

To activate the configuration mode, press and hold the button to turn on the device.

There are two different modes of operation.

**Access Point Mode**

Without a configured WLAN in range, the OpenBikeSensor opens its own WLAN access point.
* SSID is the MAC address of the device `OpenBikeSensor-xxxxxxxx`.
* The default password is `12345678`.
* The configuration page can be accessed via [http://172.20.0.1](http://172.20.0.1) in a web browser.

**WiFi mode**

If a previously configured WLAN is in range, the OpenBikeSensor will connect to it and show the IP address on its display. This is used to reach the configuration page in a device's browser in the same WLAN. 

Data can only be uploaded from a WLAN with Internet. This can also be triggered directly from the OpenBikeSensor by pressing and holding down the button.

## Login to the configuration menu
Since version 0.6.x, an HTTPS connection is offered, and a PIN secures access to the web interface.

* To open the configuration menu, click on **go to https**.
  * (Since version 0.6.x) When using HTTPS, a certificate warning is expected, which can be dismissed or silenced by importing the certificate into the browser. The certificate is presented for download in the dialog.
  * (Since version 0.7.x) Instead of **go to https**, the warning can be bypassed by selecting **enable unencrypted access**. This should only be used in secure wireless networks (example: own home network).

* After selecting the configuration mode, the browser will ask for a username and password.
  * **User:** `obs` (Note: the username is not checked, and the only condition is that the string is not left blank).
  * **Password:** is shown in the display of the OBS.

## Important settings in the configuration menu

### General

{{< imgproc OBS_Configuration_Menu_General None >}}
OBS Main Menu
{{< /imgproc >}}

Offsets to the largest width are measured from the sensor. For a symmetrical bike with a 75cm handlebar width, the offset is (75-5)/2=35.

{{< imgproc OBS_Configuration_Menu_General_Offsets None >}}
General menu: Setting the offsets
{{< /imgproc >}}


You must enter the "Personal API Key" found in your own account's Setting menu in the portal. A [list of available portals can be found in the
Forum](https://forum.openbikesensor.org/t/uebersicht-verfuegbarer-portale/688).

**Important:** Don't forget to save.

{{< imgproc OBS_Configuration_Menu_General_API-Key None >}}
General menu: Enter the API key
{{< /imgproc >}}

### Wifi

{{< imgproc OBS_Configuration_Menu_Wifi None >}}
Main Menu
{{< /imgproc >}}

In the WiFi menu, enter and save the connection details of a WLAN with Internet.

{{< imgproc OBS_Configuration_Menu_Wifi_Settings None >}}
Set SSID and password
{{< /imgproc >}}

This completes the minimal configuration with which tracks can be recorded and uploaded.
