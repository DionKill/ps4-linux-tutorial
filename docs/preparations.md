# Preparations and additional details
You'll need an internet connection, and a computer. You'll be accessing your PS4's filesystem from FTP. You can also transfer files with a USB drive if you feel so inclined.

## FTP connections
In order to do that, open up your FTP file manager of choice.

### Windows
- Windows' built-in file manager
	- This one likes to crash the desktop if it can't connect, be careful
- WinSCP (my personal choice with the simple interface)
- Filezilla

### Linux
- Built in File explorer, if yours allows it (KDE, Gnome and Cinnamon should)
- Filezilla

### MacOS
- I'm not rich, you tell me
- Probably Filezilla

For instance, on my PS4 I would connect to the IP `192.168.1.50:2121`. I'd put a picture if I was bothered enough to turn my PS4 back on and take a screenshot.

---
# Check your PS4's settings
Go to your PS4 settings and make sure that:
- Your resolution is set not to *Automatic*, but to a value like *1080p* or *720p*
	- You won't be able to change resolution on Linux, and automatic has issues as far as I've understood (I would have to test it)
- HDR is disabled
- Your color gamut is set to something different than *Automatic*, like *Full*.
	- Some monitors/TVs don't support *Full*. If when changing it you see that the image looks different, set it to *Limited*.
- ~~Disable HDCP~~
	- Actually it's not true, I have it on and it all works fine. Also you need it enabled for the BD-JB exploit.

I'm not sure if audio settings matter. Again I'm too broke to try out surround, so your mileage may vary, report if you find any issues.

You should now be ready to move on to the next step.