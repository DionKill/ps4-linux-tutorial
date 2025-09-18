# Post installation things
Once you've installed Linux and are on the desktop, before rushing to do things, you may want to do a couple of additional steps.

To change some config files (nothing to worry about), I'll recommend `nano` because it just works. To save a file, use `ctrl+s` and to exit `ctrl+x`.

## Update your system
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
Some distros you can download are in god forbidden languages. None of us like that. Unfortunately changing it from your DE (KDE, Gnome...) doesn't work, at least not system wide. So here's a cheap rundown of all of the commands:

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

## Change username
Honestly? Create a new user. It's faster.

## Add applications
I recommend you install these:
- Steam
- Heroic Games Launcher (for Epic, GOG and Amazon)
- Lutris (for other PC games not in those launchers)
- Prism Launcher instead of those other shitty Minecraft launchers
	- Minecraft has graphical issues in newer versions btw, lmao
- And a bunch of emulators!

To do that, if using anything other than Arch based distros, use your Store app from the Start menu and install as a Flatpak. It works well.

If you chose an Arch based distro however, use `pacman` or `yay` to install your packages. All packages you can even think of and more are available.