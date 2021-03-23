---
title: Setup of Development Environment
linkTitle: Development Setup
weight: 20
---

Our firmware uses the great [PlatformIO](https://platformio.org/) for easy
management of the toolchains and dependencies required when developing an
application for an embedded device. Thanks to this, you are rather free in the
choice of the development environment. Here are some options. 

{{% alert color="info" %}}
We do not support *Arduino IDE* anymore since we've switched to PlatformIO.
{{% /alert %}}

## VSCode

The easiest way to get started is through the
[VSCode](https://code.visualstudio.com/) IDE/Editor by Microsoft. We support it
for the foreseeable future.

1. Download and install [Visual Studio Code](https://code.visualstudio.com/).
2. Open the `open-bike-sensor.code-workspace` in the project root.
3. Install the recommended extensions (this might take a while, because [Platform.io]() gets installed) and restart VSCode when required.
4. Linux only: Install `platformio-udev.rules` by [following this guide](https://docs.platformio.org/en/latest/faq.html#platformio-udev-rules). 
5. Compile the code (Sidebar: `👽 > Build`; Bottom bar: `✅`)
6. Connect your ESP and upload the code (Sidebar: `👽 > Upload`; Bottom bar: ➡️)

Alternatively you can also download the dependencies yourself and install it with the Arduino IDE (see below).


### Troubleshooting

* **Can't upload to device**
You can specify the device port that VS Code should upload to. Duplicate the `custom_config.ini.example` file to `custom_config.ini` and set the `upload_port` there manually. If this option is not set, the upload port will be autodetected which can fail on some systems or might select the wrong device if other devices are plugged in.

* **Compiling the code fails**
Use the `Clean` command and delete the `.pio` directory. Compiling the code again should work now. If any errors persist, please create a new issue!


## Command line

1. Install `platformio` command line tool for your operating system.
1. Clone the repository.
1. Copy `custom_config.ini.example` to `custom_config.ini`  and modify it to
   contain your upload port (only required if autodetection fails, or you want
   to flash via OTA). 
1. Connect the sensor via USB, or put it into server mode for OTA flashing.
1. Run `platformio run -t upload`. This will compile and upload your firmware.


## CLion

Information on this proprietary IDE can be found
[here](https://www.jetbrains.com/de-de/clion/). While it works for now, it is
not officially supported by the OBS team. 

1. Install [PlatformIO Core (CLI)](https://docs.platformio.org/en/latest/core/installation.html#installation-methods).
1. Download and open [CLion](https://www.jetbrains.com/de-de/clion/).
1. Install the [PlatformIO for CLion plugin](https://plugins.jetbrains.com/plugin/13922-platformio-for-clion). Open `Configure > Plugins` in the welcome screen (alternatively `Plugins` in the preferences) and search for "PlatformIO" in the `Marketplace` tab.
1. Restart CLion.
1. Open the project folder with`Open or Import` in the welcome screen (alternatively `File > Open ...` using the menu bar)
1. A popup "Create CMakeLists.txt?" will appear. Select "yes".
1. Open the CLion preferences and navigate to `Build, Execution, Deployment > CMake`. Delete the `Debug` profile and add a new profile. This new profile should automatically have the name `esp32dev`. Apply these changes and close the preferences.
1. Select the configuration `PlatformIO Build & Upload | esp32dev` in the top bar.
1. Use the `🔨 Build` button to compile the code.
1. Connect your ESP and use the `▶ Run` button to compile and upload the code. To upload without re-compiling the code, switch to the configuration `PlatformIO Only Upload | esp32dev` in the top bar.

### Troubleshooting

* **Can't upload to device**
You can specify the device port that CLion should upload to. Duplicate the `custom_config.ini.example` file to `custom_config.ini` and set the `upload_port` there manually. If this option is not set, the upload port will be autodetected which can fail on some systems or might select the wrong device if other devices are plugged in.

* **Compiling the code fails**
In the menu bar run/click `Tools > PlatformIO > Re-Init` and then try to compile the code again. If this didn't fix it delete the directories `.pio` and `cmake-build-*`. Compiling the code again should work now. If any errors persist, please create a new issue!


