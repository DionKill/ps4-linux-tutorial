# Installation issues
During the installation, things can fail. Most of this stuff is undocumented too. There's dozens of posts online where people don't even get a response. We will hopefully fix these problems. If not, write on the forums or on the PS4 Linux Discord.

::: details Root error `The "root" variable is empty, set to false or zero but shouldn't be`
It shows when booting up before installing, don't worry as it's normal because there is no installed system it can boot. You can proceed with the installation.
:::

::: details Newroot error - `mount -o ro /newroot failed`
If this happens, there are three possible causes:

1. The initramfs you are using is not the correct one. If you are installing on external, use the one called external, if you are installing for internal check if it's the one for internal, and remember to check for the southbridge.
2. The installer can't find the `psxitarch.tar.xz` or `psxitarch.tar.gz` file. Check that the name and location are correct.
3. You are using different payloads than the one mentioned on the guide. Those will not work on modern distros and are known to have issues, therefore they are incompatible with this guide.
:::

::: details Mounting error - `No valid USB device found`
If the installer can't find the USB device, you have two options:
1. Try to disconnect everything, and connect the drive first. If that doesn't work, try to reboot but only with the drive connected, only when you get to the rescue shell connect a keyboard and a mouse.
2. If that other method didn't work, you can try to scan for USB storage devices with `fdisk -l` or `lsblk`. It should show all the storage devices.
	- If it shows with the commands, but the installer fails to find it, it's probably because the drive (or adapter if you are using one) doesn't support UAS, which is required in newer kernels. In that case, use the [Method 2](installation.md#method-2-manual-partitioning) described.
	- Also, don't use USB hubs, the drive may not show up.

:::
# Post-install issues
There are a lot of undocumented issues. Or, if they are documented, I couldn't even find them because no search engine indexed those pages or they are in a foreign language.

::: details Black/gray screen or "no signal"
Rarely, a gray image can happen even with fixes like bootargs. Make sure that you try to reboot at least twice.

This happens because in newer kernels the monitor information must be given to the kernel at boot, which would require us to copy the EDID from the PS4's OS to Linux. This is a known problem, and we currently have workarounds.

Also, remember that the PS4 on Linux doesn't support monitor hot-plugging, so this means you can't change nor disconnect your display or you will be forced to reboot (or maybe you can just change TTY by doing CTRL+ALT+F2 and CTRL+ALT+F1/F7).

If that doesn't fix it, you can read the following bible.
### Gray screen
If you see a gray screen and/or loose signal right AFTER seeing the login screen, then you may need to use the bootargs.txt or change kernel.

Instead, if you loose signal or get an "unsupported resolution" error from your TV/monitor right after booting or BEFORE seeing the login screen, then you must change to a different kernel, as some kernels try to run the PS4 in 120hz mode (no, it doesn't show anything on a high refresh-rate capable display).

Thanks to mircoho and saya for helping out in clarifying these problems.
### Other possible fixes
If booting a display manager or your desktop environment results in a black screen, and the distro is using X11, try Wayland.

To do that, you can try a Wayland based distro, there's plenty out there, or you can also try to change window manager by running `dbus-run-session -- <name of DE/WM>` on another TTY (change by doing CTRL+ALT+F2).

This is a lot of stuff to cover on the guide so you will need to look it up yourselves.

Thanks to @kalaposfos on Discord for mentioning this fix.
:::

::: details Stuck on a white LED / instant crash
Sometimes it fails, try to reboot. It could take you even three or more attempts. Do not leave any apps "suspended" while you launch the exploit.

However, if it keeps happening, and the console gets stuck on a white LED instead of launching Linux, make sure you are following all steps correctly, and that you are using the correct payloads. Also, if you are using FTP, wait for a while or move the data using a USB drive instead.
:::

::: details Wi-Fi and/or Bluetooth don't work (MediaTek modem)
If they don't work, it's because your console is using a Wi-Fi or Bluetooth chip that is made by MediaTek, and unfortunately you will need to find a kernel that includes the fixes for that specific chip. MediaTek does not make open source drivers, so that's the reason it doesn't work normally.

Try feeRnt's kernels, hopefully one of them will work for you.
:::

::: details Graphical glitches in games
Sometimes you can encounter graphical issues. There are some things you can try to fix that.

To solve Vulkan graphical issues you can:
- Set `RADV_DEBUG=nocompute` in `/etc/environment` (use nano or similar)
- Try `amdgpu.abmlevel=0` with bootargs
- Use WineD3D (terrible performance)

Graphical glitches can also be caused by Mesa drivers. You could search for newer versions of Mesa as well, but you'll have to install them manually.
:::

::: details DS4 must be paired again every time
This is because we would need to copy the Bluetooth information from the PS4's OS to Linux before booting. It's a known problem and will get fixed at some point.
:::

::: details Rebooting goes to OrbisOS
I mean it was kind of expected. How else are you gonna go back to the main menu?
:::

# Other issues
::: details The scene is a complete mess
Previously I used this as a rant to pour all of my stress into figuring how the fuck this shit is supposed to work, but the more I got into it and the more I understood.

In a nutshell, the scene is a mess and a lot of stuff may be shared privately or on Discord servers because:
- It's in testing phase and therefore not public yet
- It's not open sourced because there's a lot of people who steal the developer's work
- A lot of this stuff is from developers all across the world and there's a language barrier

Especially the second reason is why the community is like this, unfortunately.

It will take time, I'm grateful for all the help from everyone in the community, and I'm also hopefully making the scene a little bit better and one day we'll all have stuff uploaded in proper places :D
:::

::: details How can I improve the situation?
Join the Discord servers, share this tutorial, star it on GitHub (pretty please), also don't forget to like, comment and subscribe!
:::
