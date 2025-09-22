# Getting the warez
Because getting this files is a complete and utter joke, I've decided that re-uploading some of them myself is probably the better idea. Again do not send a cease and desist letter to my house like the Maryo company.

> [!WARNING]
> I'm sorry if some of the following links are sketchy, but the community is a divided mess unfortunately. Refer to the [Other Issues](issues.md#other-issues) section for a rant.
## Kernels
Let's start with the kernels: they are very important as they have the software that controls all of the PS4's hardware. This is, by definition, Linux.

It's really hard to pinpoint you to one, so bear with me here. Some kernels are specific for some models of consoles, or for specific Wi-Fi or Bluetooth chipsets, or even for your distro of choice.
Development has slowed down over time as interest starts to move over to the PS5 scene, as the PS4 is in this weird limbo where not many are interested in working on it. On top of this, the scene is scattered, and everyone makes private forks and patches so that in reality nobody is contributing on making a single kernel that works for every console.

> [!TIP]
> If you are having issues, you could try a different kernel.
> 
> If you can't find one that works, there are older and legacy kernels to be found [here](legacy#not-recommended-kernels).
### Recommended kernels
There's literally dozens to start with. To make it readable, some of these are linked twice per version even if the download links or sources are the same.

| Kernel          | Source and Download                                                                                                                                                                                                           | Developers      | Compatible Southbridges    | Extra info                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------- | ------------------------------------------------------------------------------------------------- |
| 6.15.y<br>5.x   | [Releases](https://github.com/feeRnt/ps4-linux-12xx/actions),<br><br>[More on "Actions"](https://github.com/feeRnt/ps4-linux-12xx/actions),<br><br>Source [GitHub](https://github.com/feeRnt/ps4-linux-12xx)                  | freeRnt, others | All, depends on the branch | You may have to test a lot of them, check the Actions tab. Remember to check for the southbridge. |
| 6.15.4          | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/actions/runs/17358604885)                                                                                                                                                   | freeRnt, others | Belize                     | Specific branch that works on my and other's Belizes.                                             |
| 5.15.25-rc1<br> | [Download](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/kernels/5.15.25-rc1_belize_ThinLTO_Led_LAVANDE_Debian-Trixie_LLVM_19.1.2.zip)<br>[Original link](https://www.youtube.com/watch?v=mpcE9LLS59k) | saya            | Belize                     | Multiple power LED colors. LTO.                                                                   |
| 5.15.15         | [Original link](https://www.youtube.com/watch?v=mpcE9LLS59k)                                                                                                                                                                  | saya            | Aeolia?<br>Belize          | Multiple power LED colors. LTO.                                                                   |

### Other kernels
These kernels exist and are relatively new, but I don't recommend them anymore as there are better alternatives. If none of the others work for you, or you are using a specific distro, you can try these.

| Kernel version | Source and download                                                                                                       | Developer  | Compatible Southbridges    | Extra info                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------------- | --------------------------------------------------------------------- |
| 6.15.y         | [GitHub](https://github.com/crashniels/linux)                                                                             | crashniels | All, depends on the branch | No precompiled downloads available. No idea if it's still maintained. |
| 4.4<br>5.x     | No source.<br>[Download](https://www.logic-sunrise.com/news-1160961-ps4-linux-bzimages-pour-toutes-versions-de-ps4.html). | saya       | All                        | Website is in French. Overclocked.                                    |

If you want more help, ask out the [Discord servers](overview#important-places). We'll try to help you out.
### Bootargs (depends, mostly for saya's kernels)
The `bootargs.txt` is necessary for saya's kernels. You may need to use these for your own kernels.

This adds certain parameters when launching the kernel to make the GPU work properly.

In order to use it, create a new text file, and input this line inside, then save it as `bootargs.txt`:
```
panic=0 clocksource=tsc consoleblank=0 net.ifnames=0 radeon.dpm=0 amdgpu.dpm=0 drm.debug=0 console=uart8250,mmio32,0xd0340000 console=ttyS0,115200n8 console=tty0 drm.edid_firmware=edid/1920x1080.bin 
```

Remember that this `bootargs.txt` needs to be placed in the same folder as the bzImage.
## Initramfs
This is the rescue shell that boots your Linux installer/installation. I'll be using one only, and it's going to be the one that was originally created for PSXITARCH, a distro based on Arch made by the PS3ITA Forums. [Here it is](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/initramfs.zip). [Source (not really)](https://bitbucket.org/piotrkarbowski/better-initramfs/src/master/).

## Distros (that you ACTUALLY wanna use)
Yes! Finally the time has come. Which one will you choose?
Honestly there's a neptillion distros. Most however, are very outdated, especially the ones on the PS4Linux's website list.
So here I'm listing the ones that are actually new and I'd recommend you install:

| Distro                                                                                           | Base    | Developer                                                                           | Info                                                                                            |
| ------------------------------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [CachyOS](https://ps4linux.com/forums/d/347-linux-pack-cachyos-final-fix-biglinux-and-other-fix) | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw)           | "Final Fix". The distro is half polish, half english. But it works and is up to date. Uses KDE. |
| CachyOS                                                                                          | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw), DionKill | My version. It fixes language (mostly) and disables the anime girl backgrounds.                 |
| [Manjaro](https://ps4linux.com/forums/d/342-manjaro-from-scratch)                                | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw)           | A Manjaro KDE distro.                                                                           |
| [Garuda](https://ps4linux.com/forums/d/334-garuda-linux-ext4-rc1-yakuza)                         | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw)           | Gaming focused distro (it just has a weird UI)                                                  |
| [Debian Forky](https://ps4linux.com/forums/d/373-debian-forky-sid/3)                             | Debian  | [triki1](https://ps4linux.com/forums/u/triki1)                                      | Very new distro. Extremely bleeding edge.                                                       |
| [Debian Trixie](https://ps4linux.com/forums/d/369-debien-trixie-full-update-mesa-2520-devel/13)  | Debian  | [triki1](https://ps4linux.com/forums/u/triki1)                                      | Latest Debian                                                                                   |
| [Xubuntu](https://ps4linux.com/forums/d/337-xubuntu-2504-final-release)                          | Ubuntu  | [triki1](https://ps4linux.com/forums/u/triki1)                                      | Divided into multiple files                                                                     |
| [Batocera 40](https://ps4linux.com/forums/d/252-batocera-40-for-ps4-installation-setup-tutorial) | No clue | Noob404                                                                             | For retrogaming                                                                                 |
| [JaguarLinux](https://github.com/Jaguarlinux)                                                    | None    | TigerClips1                                                                         | A distro made from scratch for the PS4! Still in development, but worth mentioning.             |

>[!TIP]
>Want to add more distros? Make an issue and your wish shall be granted.
>
>Want to make your own? [Check this out!](https://ps4linux.com/make-ps4-linux-distro/)

## Payloads (kinda optional)
For those who don't want to open a browser everytime (saves like 15-30 seconds for those sweet top 1% speedruns)

[Download them from the ps4boot repositories](https://github.com/ps4boot/ps4-linux-payloads), and extract the one you want in your `data/payloads` folder. Remember to use the one that is for your Southbridge (you have understood that by now).
If it doesn't have any particularly append, it's for both Aeolia and Belize.

You MUST use the 1GB one for installation, you can use whatever thereafter.

## To the installation we go!

You should go to the next step, where you'll finally complete your installation!