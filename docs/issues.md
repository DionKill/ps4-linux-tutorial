# Installation issues
During the installation, things can fail. Most of this stuff is undocumented too. There's dozens of posts online where people don't even get a response. We will hopefully fix these problems. If not, write on the forums or on the PS4 Linux Discord.

::: details Root error `The "root" variable is empty, set to false or zero but shouldn't be`
It shows when booting up before installing, don't worry as it's normal because there is no installed system it can boot. You can proceed with the installation.
:::

::: details Newroot error - `mount -o ro /newroot failed`
If this happens, these are possible causes:

1. The initramfs you are using is not the correct one. If you are installing on external, use the one called external, if you are installing for internal check if it's the one for internal, and remember to check for the southbridge.
2. The installer can't find the `psxitarch.tar.xz` or `psxitarch.tar.gz` file. Check that the name and location are correct.
3. You are using different payloads than the one mentioned on the guide. Those will not work on modern distros and are known to have issues, therefore they are incompatible with this guide.

If none of these help you, go to the PS4Linux.com Discord server.
:::

::: details Mounting error - `No valid USB device found`
If the installer can't find the USB device, you have two options:
1. Try to disconnect everything, and connect the drive first. If that doesn't work, try to reboot but only with the drive connected, only when you get to the rescue shell connect a keyboard and a mouse.
2. If that other method didn't work, you can try to scan for USB storage devices with `fdisk -l` or `lsblk`. It should show all the storage devices.
	- If it shows with the commands, but the installer fails to find it, it's probably because the drive (or adapter if you are using one) doesn't support UAS, which is required in newer kernels. In that case, use the [Method 2](/installation#method-2-manual-partitioning) described.
	- Also, don't use USB hubs, the drive may not show up.

:::
# Post-install issues
There are a lot of undocumented issues. Or, if they are documented, I couldn't even find them because no search engine indexed those pages or they are in a foreign language.

::: details Black/gray screen or "no signal"
Since kernel 6.18, display issues should mostly be fixed, so if you can use that kernel, please do. It also supports monitor hotplugging. Wait about 10 seconds or more for it to show an image in case you disconnect the cable!

> [!TIP]
> The rest of this stuff is mostly for safekeeping, but shouldn't be necessary anymore. Keep on readying if you need to!

Once upon a time, these issues were caused by using old kernels that required bootargs, but they are not necessary anymore.

If you are using CachyOS by Elokuba/Qba, make sure to change from Xorg/X11 to Wayland at the bottom of the login screen before clicking login. Doesn't apply for CachyOS "Light".

Rarely, a gray image can happen even with fixes like bootargs. Make sure that you try to reboot at least twice.

Thanks to mircoho and saya for helping out in clarifying these problems.
### Other possible fixes
If booting a display manager or your desktop environment results in a black screen, and the distro is using X11, try Wayland.

To do that, you can try a Wayland based distro, there's plenty out there, or you can also try to change window manager by running:

`dbus-run-session -- startplasma-x11` or `dbus-run-session -- startplasma-wayland` on another TTY (change by doing `CTRL+ALT+F3`).

This is a lot of stuff to cover on the guide so you will need to look it up yourselves.

Thanks to @kalaposfos and @package on Discord for mentioning this fix.
:::

::: details Stuck on a white LED / instant crash
Sometimes it fails, try to reboot. It could take you even three or more attempts. Do not leave any apps "suspended" while you launch the exploit.

However, if it keeps happening, and the console gets stuck on a white LED instead of launching Linux, make sure you are following all steps correctly, and that you are using the correct payloads. Also, if you are using FTP, wait for a while or move the data using a USB drive instead.
:::

::: details Wi-Fi and/or Bluetooth don't work (MediaTek modem)
Again this should be fixed, otherwise keep on reading.

If they don't work, it's because your console is using a Wi-Fi or Bluetooth chip that is made by MediaTek, and unfortunately you will need to find a kernel that includes the fixes for that specific chip. MediaTek does not make open source drivers, so that's the reason it doesn't work normally.

Try feeRnt's kernels, hopefully one of them will work for you.
:::

::: details Graphical glitches in games
This is caused by broken Mesa drivers. The community is working hard to fix this, but don't expect it all to work properly!

To solve Vulkan graphical issues you can try:
- Set `RADV_DEBUG=nocompute` in `/etc/environment` (use nano or similar)
- Try `amdgpu.abmlevel=0` with bootargs
- Use WineD3D (terrible performance)
:::

::: details DS4 must be paired again every time
This is because we would need to copy the Bluetooth information from the PS4's OS to Linux before booting. It's a known problem and will get fixed at some point.
:::

::: details Rebooting goes to OrbisOS (the PS4 main menu)
I mean it was kind of expected. How else are you gonna go back to the main menu?
:::

# Other issues
::: details The scene is a complete mess
Previously I used this as a rant to pour all of my stress into figuring how the fuck this shit is supposed to work, but the more I got into it and the more I understood.

In a nutshell, the scene is a mess and a lot of stuff may be shared privately or on Discord servers because:
- It's in testing phase and therefore not public yet
- It's not open sourced because there's a lot of people who steal the developer's work
- It hasn't been merged into main projects because it would be too difficult to maintain thereafter, and would require it to be in a perfect condition
- A lot of this stuff is from developers all across the world and there's a language barrier

Especially the second reason is why the community is like this, unfortunately.

It will take time, I'm grateful for all the help from everyone in the community, and I'm also hopefully making the scene a little bit better and one day we'll all have stuff uploaded in proper places :D
:::

::: details How can I improve the situation?
Join the Discord servers, share this tutorial, star it on GitHub (pretty please), also don't forget to like, comment and subscribe!
:::
