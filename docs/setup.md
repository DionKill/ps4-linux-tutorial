# Requirements and initial setup
In order to install Linux on the PS4, a lot of things are needed. You may have to buy some gear to make this work.

In a nutshell:
- A PS4
	- Extra mouse and keyboard
- A computer
- An internet connection
- (Optional) - one or more USB drives
	- If you want to install to an external drive, you can use a USB pendrive, but I recommend a SATA SSD and a SATA to USB adapter (preferrably one that supports UAS).

## PS4 system
### HEN
You need a system that is already modded and has a homebrew enabler (such as GoldHEN) running. Refer to Modded Warfare's YouTube channel to mod it if you haven't already.

In order to input text on your PS4, you can't use the PS4 built in keyboard, as that is not available on Linux. You must have a keyboard and mouse combo ready to use with your PS4.
### Settings
Go to your PS4 settings and make sure that:
- Your resolution is set not to *Automatic*, but to a value like *1080p* or *720p*
	- You won't be able to change resolution on Linux, and automatic has issues as far as I've understood (I would have to test it)
- HDR is disabled
- Your color gamut is set to something different than *Automatic*, like *Full*.
	- Some old monitors/TVs don't support *Full*. If when changing it you see that the image looks different, set it to *Limited*.
- ~~Disable HDCP~~
	- Actually it's not true, I have it on and it works. Also, you need it enabled for the BD-JB exploit.
- Connect to the internet
	- You need to be connected to the internet before going into Linux.

I'm not sure if audio settings matter. Again I'm too broke to try out surround, so your mileage may vary, report if you find any issues.

## PC
You'll need a way to connect to your PS4 to transfer files. A PC is recommended. You will also need an internet connection.

You'll be accessing your PS4's filesystem from FTP. You can also transfer files with a USB drive if you feel so inclined.

### FTP connections
In order to do that, open up your FTP file manager of choice.

#### Windows
- Windows' built-in file manager
	- This one likes to crash the desktop if it can't connect, be careful
- WinSCP (my personal choice, using the simple interface)
- Filezilla

#### Linux
- Built in File explorer, if yours allows it (KDE, Gnome and Cinnamon should)
- Filezilla

#### MacOS
- I'm not rich, you tell me
- Probably Filezilla

For instance, on my PS4 I would connect to the IP `192.168.1.50:2121`. I'd put a picture if I was bothered enough to turn my PS4 back on and take a screenshot.

### Necessary files
In the next step, you also will need to download the following:
- bzImage (the kernel)
- initramfs.cpio.gz (Linux loader)
- A distro of your choice, already preinstalled and modified to work on the PS4
	- You can also make your own. More on that later.

## Storage devices to install to
You will need a device to store Linux, obviously.
1. Internal HDD
	- Baikal still unsupported, veeery slow, needs free space
2. External HDD/SSD
	- Requires an external SATA-USB adapter.

