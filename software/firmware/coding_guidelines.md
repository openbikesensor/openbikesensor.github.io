---
layout: default
title: Coding Guidelines
parent: Firmware
grand_parent: Software
---

# Coding Guidelines

## platformio.ini

The `platformio.ini` is the main project configuration file. 
It configures [PlatformIO](https://docs.platformio.org/en/latest/projectconf/section_platformio.html#id4) to build and flash the ESP32

## custom_config.ini

PlatformIO supports the option [extra_configs](https://docs.platformio.org/en/latest/projectconf/section_platformio.html),
which allows to include additional configurations. Our `platformio.ini` is preconfigured a custion configuraion inthe file `custom_config.ini`.
An example custion configuration file can be found in the root folder of the firmware.

### Developer mode

To enable the developer mode, uncomment the following line in the `custom_config.ini` and flash the firmware:

```
; build_flags = -D DEVELOP
```

The developer mode enables additional dvelopment options menu in the configuration web interface, where it's possible to configure:

* whether the grid on the display is shown (useful for text debugging)
* whether the WLAN password should be printed to the serial interface (useful for WLAN debugging)

