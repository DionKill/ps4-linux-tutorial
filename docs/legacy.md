# Legacy content
This page contains content that has been added for preservation's sake, even though most of you aren't ever going to use any of this stuff.

> [!WARNING]
> As this is legacy content, if you use any of these don't expect people to be able to help you.

## Legacy kernels, distros and initramfses
In all honesty: most of these can be found on the PS4Linux.com website, as it hasn't been updated in a long time. Don't use these on modern distros, as they don't boot anymore.
### Kernels
#### Other kernels
These are additional kernels that are kind of up to date but also not really or that do not offer prebuilts, which aren't useful for 99% of people.

| Kernel version | Source and download                           | Compatible Southbridges    | Extra info                          |
| -------------- | --------------------------------------------- | -------------------------- | ----------------------------------- |
| 6.15.y         | [GitHub](https://github.com/crashniels/linux) | All, depends on the branch | No precompiled downloads available. |
#### Kernels to avoid
This list contains kernels that you should be avoiding, with all due respect.

| Kernel version                                                           | Source and download                                                                            | Compatible Southbridges | Extra info                                                                                                              |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [6.15,<br>5.15 and<br> 5.4](https://www.youtube.com/watch?v=zVzHzJT7dHk) | All                                                                                            | N/A                     | FullLTO, 120Hz support, 4K for PS4 Pro. You need to download the whole archive and pick one for your needs.<br>By saya. |
| [6.15.4](https://mega.nz/folder/N0QjHSBT#609IHevkWEW0vnTCFW-Rhw)         | Aeolia &<br>Belize                                                                             | N/A?                    | ZRAM, CachyOS patches, KVM and more. <br>By triki1.                                                                     |
| 4.4<br>5.x                                                               | Probably no source.<br>[Download](https://ps4linux.com/downloads/#PS4_Linux_Kernel_Downloads). | All                     | The old list from PS4Linux.                                                                                             |

Credits for the kernels can be found [here](/ending#credits).
#### Bootargs
The `bootargs.txt` is not really necessary anymore, unless your "distro + kernel" combo of choice requires it or on certain kernels for Baikal PS4s. Therefore, it has been moved to the legacy section.

This adds certain parameters when launching the kernel to make the GPU work properly.

In order to use it, create a new text file, and input this line inside, then save it as `bootargs.txt`:
```
panic=0 clocksource=tsc consoleblank=0 net.ifnames=0 radeon.dpm=0 amdgpu.dpm=0 drm.debug=0 console=uart8250,mmio32,0xd0340000 console=ttyS0,115200n8 console=tty0 drm.edid_firmware=edid/1920x1080.bin 
```

Remember that this `bootargs.txt` needs to be placed in the same folder as the bzImage.
### Distro
Distros made by other members of the PS4 community that we cannot trust anymore are moved here. They also haven't really been updated in a long time as far as I'm aware.

| Distro                                                                                           | Compatible Southbridge & Mesa          | Port credits                                                              | Info                                                                    |
| ------------------------------------------------------------------------------------------------ | -------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [CachyOS](https://mega.nz/file/RyUVQARB#HZD49XXac_v2CYKD4Oqa7Tg1aiZ7ltH_cnDxixw9JjY)             | All<br>(Mesa 25.1.0)                   | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | "Final Fantasy v2" version. It has nothing to do with FF. Mere fantasy. |
| [EndeavourOS](https://ps4linux.com/forums/d/386-endeavouros-gaming-rebirth)                      | All?<br>(Mesa Version ?)               | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | Arch based distro that's nice to use and easy to maintain               |
| [Manjaro](https://ps4linux.com/forums/d/342-manjaro-from-scratch)                                | All?<br>(Mesa Version ?)               | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | A Manjaro KDE distro                                                    |
| [Garuda](https://ps4linux.com/forums/d/415-garuda-dr460nized-gaming-v2/2)                        | All?<br>(Mesa Version ?)               | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | "Gaming focused" distro (not really)                                    |
| [Fedora 42](https://ps4linux.com/forums/d/399-fedora42-by-qba-triki1kdewayland)                  | Aeolia, Belize<br>(Mesa 26)            | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | Normal Fedora running KDE on Wayland                                    |
| [Debian Forky](https://ps4linux.com/forums/d/373-debian-forky-sid/3)                             | Aeolia, Belize<br>(Mesa 25.3+)         | [triki1](https://www.youtube.com/@trakerchris9876)                        | Very new distro. Extremely bleeding edge.                               |
| [Kali Linux](https://ps4linux.com/forums/d/392-debian-forky-kali-linux-edition)                  | All<br>(Mesa 25.0.3-devel+)            | [triki1](https://www.youtube.com/@trakerchris9876)                        | Based on Debian Forky, but with Kali Linux stuff included               |
| [Debian Trixie](https://ps4linux.com/forums/d/369-debien-trixie-full-update-mesa-2520-devel/13)  | Aeolia, Belize<br>(Mesa 25.2.0-devel+) | [triki1](https://www.youtube.com/@trakerchris9876)                        | Latest Debian                                                           |
| [Xubuntu](https://ps4linux.com/forums/d/337-xubuntu-2504-final-release)                          | All<br>(Mesa 25.0.5)                   | [triki1](https://www.youtube.com/@trakerchris9876)                        | Divided into multiple files                                             |
| [Batocera 40](https://ps4linux.com/forums/d/252-batocera-40-for-ps4-installation-setup-tutorial) | All<br>(Mesa 22.1.7)                   | [Noob404](https://www.youtube.com/channel/UC9pY5BDCjDLOC4j-zkHPu8)        | For retrogaming                                                         |

If you are looking for really old distros, check out the downloads from PS4Linux [here](https://ps4linux.com/downloads/#PS4_Linux_Distro_Downloads).

### Initramfs
Old downloads from PS4Linux can be found [here](https://ps4linux.com/downloads/#initramfscpiogz_Downloads).

### Other
Honestly, it's all on the same page as above. [Here you go](https://ps4linux.com/downloads/).

## Legacy configs
More stuff may be moved to here in the future.

### VRAM configs
The `vram.txt` is a file contaning a number, which is your VRAM allocation amount.
You may still be able to use this, but to avoid confusion, it has been moved to the legacy section, as you can just as easily reboot the console and change the payload.

You can create this file yourself. Create an empty text file called `vram.txt`, and in it, input a number between 1 and 3. That's how many GBs will be allocated to your GPU. Remember you are removing that from your system memory!

## Updates
### Arch-based distros (legacy)
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
