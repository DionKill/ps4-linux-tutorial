# Installation issues
During the installation, things can fail. Most of this stuff is undocumented too. There's dozens of posts online where people don't even get a response. I'm hopefully going to resolve these issues here. If not, write on the forums or on the PS4 Linux Discord.

::: details Root error `The "root" variable is empty, set to false or zero but shouldn't be`
It shows when booting up before installing, don't worry as it's normal because there is no installed system it can boot. You can proceed with the installation.
:::

::: details Newroot error - `mount -o ro /newroot failed`
This happens when the installer can't find the `psxitarch.tar.xz` or `psxitarch.tar.gz` file. Check that the name and location are correct. Also, use the payloads mentioned as older ones either don't work or require different folders for the files.
:::

::: details Mounting error - `No valid USB device found`
If the installer can't find the USB device, you have two options:
1. Try to disconnect everything, and connect the drive first. If that doesn't work, try to reboot but only with the drive connected, only when you get to the rescue shell connect a keyboard and a mouse.
2. If that other method didn't work, you can try to scan for USB storage devices with `lsblk`. It should show all the storage devices.
	- If it shows with the commands, but the installer fails to find it, it's probably because the drive (or adapter if you are using one) doesn't support UAS, which is required in newer kernels. In that case, use the [Method 2](installation#method-2-manual-partitioning) described.
	- Also, don't use USB hubs, the drive may not show up.

:::
# Post-install issues
There are a lot of undocumented issues. Or, if they are documented, I couldn't even find them because no search engine indexed those pages or they are in a foreign language.

::: details Wi-Fi and/or Bluetooth don't work
If they don't work, it's because your console is using a Wi-Fi or Bluetooth chip that is incompatible with your current kernel. This means that you will need to try one of the other kernels, and if they don't work, try to ask on the forums or scout the internet until you can find one. Unfortunately the development is scattered and it's hard to get hands on these kernels.
:::

::: details Black/gray screen or "no signal"
Rarely, a gray image can happen even with fixes like bootargs. Make sure that you try to reboot at least twice.

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

::: details Graphical issues
Sometimes you can encounter graphical issues. Screen flickers at boot, or is unresponsive. There can also be weird graphical glitches in menus and even in games, especially Nintendo Switch emulators for what I've seen.

Hell, even Minecraft has issues. After some testing, I found out that in 25w16a, one of the snapshots for Minecraft 1.21.6, they changed a lot in the engine's renderer pipeline, and now it doesn't render properly anymore. You are forced to either play 1.21.5, which has loads of performance regressions and runs like shit, or go even lower and miss out on new features.

Linux on PS4 is using modified AMDGPU drivers that are unfortunately old and unstable or bleeding-edge and unstable. There's nothing you can do about it, unless you know how to work with GPU drivers. Also Mesa has a lot of issues, I'm not too sure on how GPU works on Linux.
:::

::: details Rebooting goes to OrbisOS
I mean it was kind of expected. How else are you gonna go back to the main menu?
:::

::: details Stuck on a white LED
Sometimes the console gets stuck on a white LED instead of launching Linux. Make sure you are following all steps correctly, and that you are using the correct payloads.
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
