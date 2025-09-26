# Getting the warez
Because getting this files is a complete and utter joke, I've decided that re-uploading some of them myself is probably the better idea. Again do not send a cease and desist letter to my house like the Maryo company.

> [!WARNING]
> I'm sorry if some of the following links are sketchy, but the community is a divided mess unfortunately. Refer to the [Other Issues](issues.md#other-issues) section for a rant.
## Kernels
Let's start with the kernels: they are very important as they have the software that controls all of the PS4's hardware. This is, by definition, Linux.

This is the section for recommended kernels. There are both vanilla kernels and performance kernels. Ordered by most to least recommended.

::: details "Which one to pick" or "I have issues"
Hard to say as there's a neptillion of them, but I'd recommend starting from the top (mind the Southbridge) and going down until you can find one that works.

If all you care about is squeezing as much performance as possible out of the PS4 (you do) try the performance kernel section first.

If you still have issues, write on the forums or join the Discords. Links are at the start of the guide.
:::

::: details Where are the ZRAM kernels?
ZRAM kernels have momentarely been removed, as they haven't been fully tested.

I'll keep this guide up to date in case one becomes available.
:::

::: details Do newer kernels matter?
Not really. New features are mostly added for newer processors and devices, though there are cool things like better performance on specific scenarios and native drivers for things like PS4's controllers, but as long as you have a 5.x+ kernel your experience should be mostly the same, as those support Vulkan.
:::

[Credits for all of these kernels](ending#credits).
### Vanilla kernels
These are normal linux kernels with additional patches to make them work properly on the PS4. 

| Kernel                                                                                                                                                                                   | Source and Download                                | Compatible Southbridges | Extra info                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ----------------------- | ------------------------------------------------ |
| [6.15.x](https://github.com/feeRnt/ps4-linux-12xx/releases)<br>[5.15.x](https://github.com/feeRnt/ps4-linux-12xx/releases)<br>[5.4.x](https://github.com/feeRnt/ps4-linux-12xx/releases) | [GitHub](https://github.com/feeRnt/ps4-linux-12xx) | All                     | Check Actions section if the releases don't work |
| [6.15.4](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v6.15.4__wifi_blkscrn)                                                                                                    | [GitHub](https://github.com/feeRnt/ps4-linux-12xx) | Aeolia<br>Belize        | Specific blackscreen-fix release quick link      |

### Performance oriented kernels
These kernels are especially tailored to gain as much performance as possible.

| Kernel                                                                                                  | Source and Download                                          | Compatible Southbridges | Extra info                                      |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ----------------------- | ----------------------------------------------- |
| [6.8.12](https://e.pcloud.link/publink/show?code=XZALxqZr6mCsjqBmdFQF1i3DTUYsJFY6iSV) (slow boot, beta) | [Original link](https://www.youtube.com/watch?v=9Q1WwvZUEQc) | Aeolia<br>Belize        | FullLTO, more optimizations                     |
| [5.15.25-rc1](https://e.pcloud.link/publink/show?code=XZ6LxqZMjOjBKQVi7B5XS1OUXbn8QrYgAx7)              | [Original link](https://www.youtube.com/watch?v=9Q1WwvZUEQc) | Belize                  | FullLTO, more optimizations                     |
| [5.15.15](https://e.pcloud.link/publink/show?code=XZtLxqZPCy9fq0R1A7Xa7T5USXJt4GNpiYk)                  | [Original link](https://www.youtube.com/watch?v=9Q1WwvZUEQc) | Aeolia<br>Belize        | FullLTO, more optimizations                     |
| [5.4.213](https://e.pcloud.link/publink/show?code=XZqLxqZxO1NAbr0RMbvdYnRob2KjyPiXLPV)                  | [Original link](https://www.youtube.com/watch?v=9Q1WwvZUEQc) | Baikal                  | Requires [bootargs](legacy#bootargs), optimized |

### Specific kernel problems
Before continuing, I want to mention that there can be many issues with kernel and distro combinations.

If your kernel or distro specifically REQUIRES `bootargs.txt` file, then check [this](legacy#bootargs) out for how to set it up. This isn't needed in 6.15+ kernels.

If, instead, you either do not get an output, or loose it BEFORE seeing the login screen,

### More kernels
If you really want to try other and older kernels, even though it's highly discouraged, you can go to the [Legacy and other Kernels](legacy#kernels) section.

If you want more kernels or help, ask out the [Discord servers](overview#important-places).

## Initramfs
This is the rescue shell that boots your Linux installer/installation. I'll be using one only, and it's going to be the one that was originally created for PSXITARCH, a distro based on Arch made by the PS3ITA Forums. [Here it is](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/initramfs.zip). [Source (not really)](https://bitbucket.org/piotrkarbowski/better-initramfs/src/master/).

There's another in-dev initramfs, if you want to check it out it's [here](https://github.com/ps4gentoo/initramfs).

Also, you may want to read [this post](https://ps4linux.com/forums/d/93-tutorial-for-building-a-custom-initramfs-research-development) on the PS4 Linux forums, I found it and thought was really interesting.

## Distros (that you ACTUALLY wanna use)
Yes! Finally the time has come. Which one will you choose?
Honestly there's a neptillion distros. Most however, are very outdated, especially the ones on the PS4Linux's website list.
So here I'm listing the ones that are actually new and I'd recommend you install:

| Distro                                                                                                               | Base    | Port credits                                                                        | Info                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [CachyOS](https://ps4linux.com/forums/d/347-linux-pack-cachyos-final-fix-biglinux-and-other-fix) (may need bootargs) | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw)           | "Final Fix". The distro is half polish, half english. But it works and is up to date. Uses KDE.              |
| CachyOS                                                                                                              | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw), DionKill | My version. It fixes language (mostly) and disables the anime girl backgrounds. I haven't uploaded it yet... |
| [Manjaro](https://ps4linux.com/forums/d/342-manjaro-from-scratch)                                                    | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw)           | A Manjaro KDE distro.                                                                                        |
| [Garuda](https://ps4linux.com/forums/d/334-garuda-linux-ext4-rc1-yakuza)                                             | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw)           | Gaming focused distro (not really)                                                                           |
| [Debian Forky](https://ps4linux.com/forums/d/373-debian-forky-sid/3)                                                 | Debian  | [triki1](https://www.youtube.com/@trakerchris9876)                                  | Very new distro. Extremely bleeding edge.                                                                    |
| [Debian Trixie](https://ps4linux.com/forums/d/369-debien-trixie-full-update-mesa-2520-devel/13)                      | Debian  | [triki1](https://www.youtube.com/@trakerchris9876)                                  | Latest Debian                                                                                                |
| [Xubuntu](https://ps4linux.com/forums/d/337-xubuntu-2504-final-release)                                              | Ubuntu  | [triki1](https://www.youtube.com/@trakerchris9876)                                  | Divided into multiple files                                                                                  |
| [Batocera 40](https://ps4linux.com/forums/d/252-batocera-40-for-ps4-installation-setup-tutorial)                     | No clue | Noob404                                                                             | For retrogaming                                                                                              |
| [JaguarLinux](https://github.com/Jaguarlinux)                                                                        | None    | TigerClips1                                                                         | A distro made from scratch for the PS4! Still in development, but worth mentioning.                          |

>[!TIP]
>Want to add more distros? Make an issue and your wish shall be granted.
>
>Want to make your own? [Check this out!](distrodiy)

## To the installation we go!

You should go to the next step, where you'll finally complete your installation!