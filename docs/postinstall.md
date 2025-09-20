# Post installation things
Once you've installed Linux and are on the desktop, before rushing to do things, you may want to do a couple of additional steps.

To change some config files (nothing to worry about), I'll recommend `nano` because it just works. To save a file, use `ctrl+s` and to exit `ctrl+x`.

## Update your system <Badge type="danger" text="caution" />
Updating your system can be a bit of a pain in the ass, as some of the packages can't be updated.

> [!WARNING]
> Some packages can't be updated on PS4, at least for the time being. This is because they are specifically tailored to the system, and updating them breaks the entire OS.

::: details Debian/Ubuntu based distros (untested)
To make sure that the PS4 packages don't get updated run the command below:
```bash
sudo apt-mark hold lib32-libdrm-git lib32-mesa-git libdrm-git mesa-git lib32-libdrm lib32-mesa libdrm mesa lib32-llvm-libs llvm-libs mesa
```

Then, you should be free to update your system with:
```bash
sudo apt update
sudo apt upgrade
```
:::

::: details Fedora based distros (untested)
To make sure that the PS4 packages don't get updated, you need to modify the dnf config:
```bash
sudo nano /etc/dnf/dnf.conf
```

Then, at the line next to the `[main]` section:
```bash
exclude=lib32-libdrm-git lib32-mesa-git libdrm-git mesa-git lib32-libdrm lib32-mesa libdrm mesa lib32-llvm-libs llvm-libs mesa
```

Then, you should be free to update your system with:
```bash
sudo dnf update
```
:::

::: details Arch based distros
To make sure that the PS4 packages don't get updated, you need to modify the pacman config:
```bash
sudo nano /etc/pacman.conf
```

Then, in the `[Options]` section, add this:
```bash
IgnorePkg = lib32-libdrm-git lib32-mesa-git libdrm-git mesa-git lib32-libdrm lib32-mesa libdrm mesa lib32-llvm-libs llvm-libs
IgnoreGroup = mesa
```

Then, you should be free to update your system with:
```bash
sudo pacman -S
```
:::

Otherwise, you can always update everything but not those packages.
## Fix language
Some pre-packaged distros you can download are in foreign languages. Unfortunately changing it from your DE (KDE, Gnome...) doesn't apply system wide. So here's a cheap rundown of all of the commands:

::: details Debian/Ubuntu based distros (thanks triky1)
```bash
sudo dpkg-reconfigure locales
```
:::

::: details Fedora based distros (to-do)
No idea, sorry
:::

::: details Arch based distros
You first need to edit your `locale.gen`, to generate your locale settings.

Comment out any language you don't want and uncomment yours:
```bash
sudo nano /etc/locale.gen
```

Now, you can generate your locale with:
```bash
sudo locale-gen
```

And last but not least, to change it system wide, add your language in this file:
```bash
sudo nano /etc/locale.conf
```

If needed, change your language in yout DE (KDE, Gnome...)
:::

Reboot to apply these changes.

## Change username and password
Honestly? Create a new user. It's faster. Or just keep it.

You can however change the password, by doing:
```bash
sudo passwd
```
And setting a new password.

## Download more RAM?!
No, seriously, we can do such a thing. To do that, we must use Swap and ZRAM.

::: details Enabling Swap
> [!CAUTION]
> It's ABSOLUTELY NOT recommended to use the internal HDD as swap, you'd just add fuel to the dumpsterfire of slowness that it already is. Disable it and move on.

Swap is storage that you are taking from your drive and allocating as "extra RAM": it works by moving unused software over there if extra main memory needs to be reserved for another program or game. This means we can improve the memory situation a little bit.

We will be using a swap file instead of a swap partition, as it's easier to change in size.
First of all, we need to remove any existing swap:
```bash
sudo swapoff -v /swapfile  
sudo rm /swapfile
```

Then, we need to enable new swap (8GB for this tutorial
```bash
sudo fallocate -l 8G /swapfile 8GB # Allocates 8GBs
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

Finally, go to the `fstab` file, and check if  the line `/swapfile none swap sw 0 0` exists.
If it doesn't, add it by going here and pasting it at the end of the file:
```bash
sudo nano /etc/fstab
```
:::

::: details Enabling ZRAM (thanks Qba for mentioning [this](https://forum.endeavouros.com/t/enabling-zram-in-endeavouros/37746))
ZRAM on the other hand, is a part of your memory that you are compressing and allocating as swap.

This means that we trade some CPU cycles for compressing and decompressing a part of your system memory. But if it is enabled by default on Android you can guess how little performance impact there is.

To enable ZRAM, we need to install the `zram-generator` package.
On Arch, we installing using:
```bash
sudo pacman -Syu zram-generator
```

We then create the config file:
```bash
sudo nano /usr/lib/systemd/zram-generator.conf
```

And we paste this inside of it:
```bash
[zram0]
zram-size=ram
compression-algorithm=zstd
swap-priority=60
```
`zram-size` is how much RAM we are allocating for the ZRAM device. Possible values are, for example, `50%`, `2G` (i.e. 2 GB), `ram` or `max` for maximum allocation (all RAM is ZRAM).
Don't change the other values unless you really know what you're doing.

Also, thanks again to Qba for this [showcase](https://youtu.be/f_kXks8z9dc).
:::

And that's it. You now have a bit of extra memory to work with. I say it's pretty useful, so you can have like 2GB of VRAM, and the 6GB of remaining memory allocated as RAM become more like 6.5 or 7. On top of that, add that Linux is more memory efficient than Windows, and it's like having 8GB of RAM! Pretty sweet huh?

Oh, and don't worry if you see that your installation is using a lot of memory. It's normal and is meant to happen in order to improve performance. Check this [link](https://linuxatemyram.com) to learn more.
## Install more applications
I recommend you install these programs:
- Steam
- Heroic Games Launcher (for Epic, GOG and Amazon)
- Lutris (for other PC games not in those launchers)
- Prism Launcher instead of those other shitty Minecraft launchers
	- Minecraft has graphical issues in newer versions btw, lmao
- And a bunch of emulators!

To do that, if using anything other than Arch based distros, use your Store app from the Start menu and install as a Flatpak. It works well.

If you chose an Arch based distro however, use `pacman` or `yay` to install your packages. All packages you can even think of and more are available.

## If you have any issues...
... Go to the next page! I'll walk you through most problems and help you fix them!