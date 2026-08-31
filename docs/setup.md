# Requirements and initial setup
In order to install Linux on the PS4, a lot of things are needed. You may have to buy some gear to make this work.
## Requirements

In a nutshell, you'll need:
- A PS4 (duh)
	- Extra mouse and keyboard
	- A USB hub to connect all the peripherals is recommended
- A computer
- An internet connection
- (Optional) - one or more USB drives
	- If you want to install to an external drive, you can use a USB pendrive or HDD, but it's recommend to have a SATA SSD and a SATA to USB adapter (preferrably one that supports UAS).
- Ability to read and follow instructions
	- You'll know this if you've read the [Key Information](/information) page.
- Patience
	- Installing Linux on the PS4 (or just, in general...) *can* take a while.
## Storage devices to install to
Before we talk about anything, you must choose now a method of installation.
You will need a device to store Linux, obviously.
1. Internal HDD
	- Baikal still unsupported, veeery slow, needs free space
2. External HDD/SSD
    - External USB Hard Disk Drive or USB Solid State Drive. Use a USB 3.x capable disk and cable for the best performance
	- External SATA-USB or NVMe-USB adapter (if using a SATA/NVMe drive)
	- You can use a pendrive, nobody's stopping you, but it's gonna be painful

## PS4 system
Some configuration is necessary on the PS4's side before we load Linux.

<!-- @include: /_includes/min-firm-ver.md -->
### Things to note down
Note down what you see in "Settings -> System Information":
- System software version
- Southbridge
- Your GoldHEN or ps4hen version

<img src="/screenshots/system-info.png" width="75%">

### HEN
> [!WARNING]
> You mustn't use GoldHEN v2.4b18.8 as it doesn't boot!
> Always update to the latest version of [GoldHEN](https://ko-fi.com/s/407bb9c94a)!

You need a system that is already jailbroken and has a homebrew enabler (such as GoldHEN or ps4hen) running.

In order to input text on your PS4, you can't use the PS4 built in keyboard, as that is not available on Linux. You must have a keyboard and mouse combo ready to use with your PS4.

#### Payload server settings
Remember to check the GoldHEN "Server" settings (or ps4hen's equivalent if you're using that) so that they are both enabled:

<img src="/screenshots/payload-server-conf.png" width="75%">

These are required to be able to move files and load Linux later into the guide.

### Settings
These need to be taken as a precaution, not as a necessity, as nowadays they aren't actually needed anymore.
However, as some issues may arise on certain consoles, you should still go and tweak these settings.
#### "Audio and Display" settings
##### Resolution

<img src="/screenshots/settings-sound-and-screen.png" width="75%">
<img src="/screenshots/resolution.png" width="75%">

- Set your resolution
	- 720p probably won't work, so on Phat/Slim set 1080p.
	- 4K is only available on PS4 on kernels 6.18 or higher.
	- Not always required? Sometimes Automatic breaks though.

##### RGB Color gamut

<img src="/screenshots/rgb-range.png" width="75%">

- Set your RGB color gamut
	- It may be automatically set to "Limited" even if your display supports "Full" or viceversa.
	- "Full" may not work on some displays (even new ones). If the image looks really dark, set it to "Limited".
 	- It is assumed that Limited refers to 6 bit colors and Full to 8 bit. Check what your monitor supports.
- Wide color gamut
	- Disable, or you won't have any video output at all!
 	- This refers to outputs higher than 8 bit colors. It isn't currently supported.

#### "System" settings

<img src="/screenshots/settings-system.png" width="75%">
<img src="/screenshots/hdcp-and-device-link.png" width="75%">

- Disable "HDCP" and "HDMI device link" is a lie, it works perfectly fine and in fact you should leave them enabled for ease of use with some exploits (notably the BD-JB)
- Check your internet connection
	- Some models have issues if they aren't already connected to internet.
	- Ethernet may not work on PS4 Pro Baikal

## PC
You'll need a way to connect to your PS4 to transfer files. A PC is recommended. You will also need an internet connection.

You'll be accessing your PS4's filesystem from FTP. You can also transfer files with a USB drive if you feel so inclined.

### FTP connections
In order to do that, open up your FTP file manager of choice.

#### Windows
- Windows File Explorer
	- This one likes to crash the desktop if it can't connect, be careful
- WinSCP (recommended, using the simple interface)
- Filezilla

#### Linux
- Built in File explorer, if yours allows it (KDE, Gnome and Cinnamon should)
- Filezilla

> [!warning]
> Dolphin has a weird tendency to break the FTP server.
> You'll need to restart the FTP server from GoldHen Server settings.

#### MacOS
- Filezilla

### Note regarding Filezilla
> [!warning]
> If you use Filezilla, use "binary mode" to transfer files, as the FTP in GoldHen has issues when transferring files!

### Necessary files
In the next step, you also will need to download the following:
- bzImage (the kernel)
- initramfs.cpio.gz (the rescueshell/terminal before the main distro)
- A distro of your choice, already preinstalled and modified to work on the PS4
	- You can also make your own. More on that later.

## To the files section
You can go now go to the files section, where we'll cover how to download the required data.
