# Getting the warez
Because getting this files is a complete and utter joke, I've decided that re-uploading some of them myself is probably the better idea. Again do not send a cease and desist letter to my house like the Maryo company.

> [!WARNING]
> I'm sorry if some of the following links are sketchy, but the community is a divided mess unfortunately. Refer to the [Other Issues](issues.md#other-issues) section for a rant.
## Kernels
Let's start with the kernels: they are very important as they have the software that controls all of the PS4's hardware. This is, by definition, Linux.

This is the section for recommended kernels. There are both vanilla kernels and performance kernels. Ordered by newest to oldest, the top ones are the recommended ones.

[Credits for all of these kernels](ending#credits).

::: details "Which one to pick" or "I have issues"
Hard to say as there's a neptillion of them, but I'd recommend starting from the top (mind the Southbridge) and going down until you can find one that works.

If all you care about is squeezing as much performance as possible out of the PS4 (you do) try the performance kernel section first. Those have patches to make the system more responsive (in theory).

If you still have issues, write on the forums or join the Discords. Links are at the start of the guide.
:::

::: details Do newer kernels matter?
For Baikal, yes indeed. Modern versions of Mesa require modern versions of LibDRM which needs newer versions of the kernels.

But apart from that, not really. New features are mostly added for newer processors and devices, though there are cool things like better performance on specific scenarios and native drivers for things like PS4's controllers, but as long as you have a 5.x+ kernel your experience should be mostly the same, as those support Vulkan.
:::
### Vanilla kernels
These are normal linux kernels with additional patches to make them work properly on the PS4. 

| Kernel                                                                                                                                                                                   | Source and Download                                | Compatible Southbridges    | Extra info                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | -------------------------- | --------------------------------------------------- |
| [6.15.4](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v6.15.4__wifi_blkscrn)                                                                                                    | [GitHub](https://github.com/feeRnt/ps4-linux-12xx) | Aeolia<br>Belize           | Specific blackscreen-fix release                    |
| [6.15.x](https://github.com/feeRnt/ps4-linux-12xx/releases)<br>[5.15.x](https://github.com/feeRnt/ps4-linux-12xx/releases)<br>[5.4.x](https://github.com/feeRnt/ps4-linux-12xx/releases) | [GitHub](https://github.com/feeRnt/ps4-linux-12xx) | All                        | Check Actions section if the releases don't work    |
| 6.x<br>5.x<br>4.x                                                                                                                                                                        | [tux4orbis' Discord](https://discord.gg/UYFrkueH)  | All (Baikal in particular) | These kernels are in beta<br>Recommended for Baikal |

### "Performance patched" kernels
These kernels are compiled using additional optimizations. Some of them use LTO, some also add CachyOS's patches, and some others also add ZRAM or additional features.

Don't expect a 3x improvement in performance, they just add features and make the system a bit more responsive.

| Kernel                                                                                             | Source                                                       | Compatible Southbridges | Extra info                                      |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ----------------------- | ----------------------------------------------- |
| [6.15.4](https://mega.nz/folder/N0QjHSBT#609IHevkWEW0vnTCFW-Rhw) by triki1                         | FreeRnt's and crashniels'                                    | Aoelia<br>Belize        | ZRAM, CachyOS patches, KVM and more             |
| [5.15.25-rc1](https://e.pcloud.link/publink/show?code=XZ6LxqZMjOjBKQVi7B5XS1OUXbn8QrYgAx7) by saya | [Original link](https://www.youtube.com/watch?v=9Q1WwvZUEQc) | Belize                  | FullLTO, more optimizations                     |
| [5.15.15](https://e.pcloud.link/publink/show?code=XZtLxqZPCy9fq0R1A7Xa7T5USXJt4GNpiYk) by saya     | [Original link](https://www.youtube.com/watch?v=9Q1WwvZUEQc) | Aeolia<br>Belize        | FullLTO, more optimizations                     |
| [5.4.213](https://e.pcloud.link/publink/show?code=XZqLxqZxO1NAbr0RMbvdYnRob2KjyPiXLPV) by saya     | [Original link](https://www.youtube.com/watch?v=9Q1WwvZUEQc) | Baikal                  | Requires [bootargs](legacy#bootargs), optimized |

### Specific kernel problems
Before continuing, I want to mention that there can be many issues with kernel and distro combinations.

If you have issues, remember to check the [Issues page](issues).
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

I'm listing the ones that are actually new and I'd recommend you install. CachyOS was used for this guide, but you can follow the same method of installation for all the other ones reported here.

| Distro                                                                                           | Base    | Port credits                                                              | Info                                                                                |
| ------------------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [CachyOS](https://mega.nz/file/RyUVQARB#HZD49XXac_v2CYKD4Oqa7Tg1aiZ7ltH_cnDxixw9JjY)             | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | "Final Fantasy v2" version. It has nothing to do with FF.                           |
| [EndeavourOS](https://ps4linux.com/forums/d/386-endeavouros-gaming-rebirth)                      | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | Arch based distro that's nice to use and easy to maintain                           |
| [Manjaro](https://ps4linux.com/forums/d/342-manjaro-from-scratch)                                | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | A Manjaro KDE distro                                                                |
| [Garuda](https://ps4linux.com/forums/d/334-garuda-linux-ext4-rc1-yakuza)                         | Arch    | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | "Gaming focused" distro (not really)                                                |
| [Debian Forky](https://ps4linux.com/forums/d/373-debian-forky-sid/3)                             | Debian  | [triki1](https://www.youtube.com/@trakerchris9876)                        | Very new distro. Extremely bleeding edge.                                           |
| [Debian Trixie](https://ps4linux.com/forums/d/369-debien-trixie-full-update-mesa-2520-devel/13)  | Debian  | [triki1](https://www.youtube.com/@trakerchris9876)                        | Latest Debian                                                                       |
| [Xubuntu](https://ps4linux.com/forums/d/337-xubuntu-2504-final-release)                          | Ubuntu  | [triki1](https://www.youtube.com/@trakerchris9876)                        | Divided into multiple files                                                         |
| [Batocera 40](https://ps4linux.com/forums/d/252-batocera-40-for-ps4-installation-setup-tutorial) | No clue | Noob404                                                                   | For retrogaming                                                                     |
| [JaguarLinux](https://github.com/Jaguarlinux)                                                    | None    | TigerClips1                                                               | A distro made from scratch for the PS4! Still in development, but worth mentioning. |

>[!TIP]
>Want to add more distros? Make an issue and your wish shall be granted.
>
>Want to make your own? [Check this out!](distrodiy)

## To the installation we go!

You should go to the next step, where you'll finally complete your installation!