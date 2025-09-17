# Preparations
In order to install Linux on your PS4, we need some things:
1. A compatible, moddable PS4 (newest exploit is the BD-JB by Gezine, [available here](https://github.com/Gezine/BD-JB-1250))
	1. You need to know your PS4 Southbridge. To check that, after loading GoldHen, go into Settings > System > System Information and note the name. It can be:
		1. Aeolia (PS4 Phat)
		2. Belize/Belize2 or some other variant of this (Slim and Pro)
		3. Baikal (Newer Silms and Pros)
			1. Baikal systems can't install Linux on the internal HDD (more on that later)
2. The Linux files (downloads are further into the guide)
	1. bzImage (the kernel)
	2. initramfs.cpio.gz (Linux loader)
	3. A distro of your choice, already preinstalled and modified to work on the PS4
		1. You can also make your own. More on that later.
3. A device to install Linux to, either:
	1. Internal HDD (Baikal still unsupported, veeery slow)
	2. External HDD/SSD
4. A lot of patience and time!

# Getting the required files
Because getting this files is a complete and utter joke, I've decided that reuploading them myself is probably the better idea. I'll be reuploading this stuff on this GitHub. Again do not send a cease and desist letter to my house like the Maryo company.
## Kernel
Let's start with the kernels: they are very important as they have the software that controls all of the PS4's hardware. There's plenty of them, and I'll list them from newer to older:

| Kernel                                                                                                                                                           | Source code                                                       | Developer  | Extra info                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| 6.15                                                                                                                                                             | [GitHub](https://github.com/crashniels/linux)                     | crashniels | No precompiled downloads available                                                                               |
| [5.15.25-rc1](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/kernels/5.15.25-rc1_belize_ThinLTO_Led_LAVANDE_Debian-Trixie_LLVM_19.1.2.zip) | N/A, [original link](https://www.youtube.com/watch?v=mpcE9LLS59k) | saya       | Necessary for CachyOS. Multiple power LED colors supported. LTO. Includes the bootargs.txt.                      |
| 5.15.15                                                                                                                                                          | N/A, [original link](https://www.youtube.com/watch?v=mpcE9LLS59k) | saya       | Multiple power LED colors supported. LTO.                                                                        |
| Other                                                                                                                                                            | Maybe                                                             | Plenty     | I'm too bored to add more.<br>[For now, check this.](https://ps4linux.com/downloads/#PS4_Linux_Kernel_Downloads) |

> [!NOTE]
> If you are having issues, you could try a different kernel, though remember that the older the version and the less compatibility there is with newer programs and games.

## Initramfs
This is the rescue shell that boots your Linux installer/installation. I'll be using one only, and it's going to be the one that was originally created for PSXITARCH, a distro based on Arch made by the PS3ITA Forums. [Here it is](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/initramfs.zip).

## Distros (that you ACTUALLY wanna use)
Yes! Finally the time has come. Which one will you choose?
Honestly there's a neptillion distros. Most however, are very outdated, especially the ones on the PS4Linux's website list.
So here I'm listing the ones that are actually new and I'd recommend you install:

| Distro                                                                                           | Base    | Developer                                                                           | Info                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CachyOS](https://ps4linux.com/forums/d/347-linux-pack-cachyos-final-fix-biglinux-and-other-fix) | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw)           | "Final Fix". The distro is half polish, half english. But it works and is up to date. Uses KDE.                                                                     |
| CachyOS                                                                                          | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw), DionKill | My version. It fixes language (mostly) and removes the anime girl backgrounds that I found particularly annoying to have on the living room TV (with other people). |
| [Manjaro](https://ps4linux.com/forums/d/342-manjaro-from-scratch)                                | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw)           | A Manjaro KDE distro.                                                                                                                                               |
| [Garuda](https://ps4linux.com/forums/d/334-garuda-linux-ext4-rc1-yakuza)                         | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw)           | Gaming focused distro                                                                                                                                               |
| [Xubuntu](https://ps4linux.com/forums/d/337-xubuntu-2504-final-release)                          | Ubuntu  | triki1                                                                              | Divided into multiple files                                                                                                                                         |
| [Batocera 40](https://ps4linux.com/forums/d/252-batocera-40-for-ps4-installation-setup-tutorial) | No clue | Noob404                                                                             | For retrogaming                                                                                                                                                     |
| [JaguarLinux](https://github.com/Jaguarlinux)                                                    | None    | TigerClips1                                                                         | A distro made from scratch for the PS4! Still in development, but worth mentioning.                                                                                 |

IF you choose CachyOS (probably the other ones too), remember to use the specified kernel, and also use the bootargs.txt file. **Needs to be in the same folder of the bzImage**.

>[!TIP]
>Want to add more distros? Make an issue and your wish shall be granted.
>
>Want to make your own? [Check this out!](https://ps4linux.com/make-ps4-linux-distro/)

## Payloads (kinda optional)
For those who don't want to open a browser everytime (saves like 15-30 seconds for those sweet top 1% speedruns)

[Download them from here](https://github.com/ps4boot/ps4-linux-payloads), and extract the one you want in your `data/payloads` folder. Remember to use the one that is for your Southbridge (you have understood that by now).
If it doesn't have any particularly append, it's for both Aeolia and Belize.
