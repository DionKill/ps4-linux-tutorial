# Installation issues
During the installation, things can fail. Most of this stuff is undocumented too. There's dozens of posts online where people don't even get a response. I'm hopefully going to resolve these issues. If not, contact me on the forums.

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

::: details Graphical issues
Sometimes you can encounter graphical issues. Screen flickers at boot, or is unresponsive. There can also be weird graphical glitches in menus and even in games, especially Nintendo Switch emulators for what I've seen.

Hell, even Minecraft has issues. After some testing, I found out that in 25w16a, one of the snapshots for Minecraft 1.21.6, they changed a lot in the engine's renderer pipeline, and now it doesn't render properly anymore. You are forced to either play 1.21.5, which has loads of performance regressions and runs like shit, or go even lower and miss out on new features.

Linux on PS4 is using modified AMDGPU drivers that are unfortunately old and unstable or bleeding-edge and unstable. There's nothing you can do about it, unless you know how to work with GPU drivers. Also Mesa has a lot of issues, I'm not too sure on how GPU works on Linux.
:::

::: details Rebooting goes to OrbisOS
I mean it was kind of expected. How else are you gonna go back to the main menu?
:::

::: details Sometime it just doesn't work
Sometime the exploit fails, or loading the Linux payload crashes the console, or when booting into Linux things don't work and you gotta reboot. Again, things are unstable, it'll take a lot of work and time to fix.
:::

# Other issues
::: details The scene is a complete mess
Yeah I know. The links are sketchy as hell, unfortunately a lot of developers in the community don't provide source code or releases on GitHub which makes using this stuff very annoying.

Like, did we need a NEPTILLION different kernels? I'm no developer, but if the normal Linux kernel doesn't have variants for different Wi-Fi chips, then I'm sure we don't either. Also why are patches private? Of course, the code is yours, but at least publicly share the built files in a common place? Not even the Maryo company would be able to find those.

Also the fact that we can't even find source code for stuff like up to date drivers is absolute insanity! How am I supposed to make my own distro? It feels overwhelming and it's the whole reason I made this guide, to provide a place where you can find it all.

Sorry for this rant, I don't want to be mean to anyone, again it's your choice how to distribute your code, but this situation is ridiculous. In comparison, the 3DS and especially the PS Vita communities are light years ahead.
:::

::: details How can I improve the situation?
I don't know man, my laptop battery is about to die and I wanna stop yapping. Check the links at the start of the guide.
:::
