# Getting the warez
Because getting this files is a complete and utter joke, I've decided that re-uploading some of them myself is probably the better idea. Again do not send a cease and desist letter to my house like the Maryo company.
## Kernel
Let's start with the kernels: they are very important as they have the software that controls all of the PS4's hardware. This is, by definition, Linux.

There's plenty of them, and I'll list them from newer to older:

| Kernel                                                                                                                                                           | Source code                                                       | Developers | Compatible Southbridges    | Extra info                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 6.15                                                                                                                                                             | [GitHub](https://github.com/crashniels/linux)                     | crashniels | All, depends on the branch | No precompiled downloads available                                                                               |
| [6.12.11](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/kernels/bz-6.12.11.tar.xz)                                                        | N/A                                                               | triky1     | Belize                     | Most of the download links are expired...                                                                        |
| [5.15.186](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/kernels/5.15.186.src-KHEOPS_V2.1-FullLTO-belize-zram.tar.gz)                     | N/A                                                               | saya       | Belize                     | ==Recommended==. LTO, fixes issues with 5.15.25-rc1.                                                             |
| [5.15.25-rc1](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/kernels/5.15.25-rc1_belize_ThinLTO_Led_LAVANDE_Debian-Trixie_LLVM_19.1.2.zip) | N/A, [original link](https://www.youtube.com/watch?v=mpcE9LLS59k) | saya       | Belize                     | Multiple power LED colors. LTO.                                                                                  |
| 5.15.15                                                                                                                                                          | N/A, [original link](https://www.youtube.com/watch?v=mpcE9LLS59k) | saya       | Belize                     | Multiple power LED colors. LTO.                                                                                  |
| [4.x-5.x saya](https://www.logic-sunrise.com/news-1160961-ps4-linux-bzimages-pour-toutes-versions-de-ps4.html)                                                   | N/A                                                               | saya       | All                        | Multiple kernels. Very old. Overclocked.                                                                         |
| Other                                                                                                                                                            | Maybe                                                             | Many       | All                        | I'm too bored to add more.<br>[For now, check this.](https://ps4linux.com/downloads/#PS4_Linux_Kernel_Downloads) |

> [!NOTE]
> Recommended kernel: 5.15.186 by saya.
> 
> If you are having issues, you could try a different kernel, though remember that the older the version and the less compatibility there is with newer programs and games.

### Bootargs and Vram
The bootargs is necessary for saya's kernels. Vram isn't, but you can add it if you so desire.

| File                                                                                                      | Info                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [bootargs.txt](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/kernels/bootargs.txt) | By saya. Necessary for their kernels to work.                                                                                                      |
| vram.txt                                                                                                  | A file with inside just a number, ranging from 1-3. Indicates how much VRAM to allocate, independently from the payload used. Completely optional. |

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

You should go to the next step.