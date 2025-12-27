# Getting the warez

> [!WARNING]
> I'm sorry if some of the following links are sketchy, but the community is a divided mess unfortunately. Refer to the [Other Issues](/issues#other-issues) section for a rant.
## Kernels
Let's start with the kernels: they are very important as they have the software that controls all of the PS4's hardware. This is, by definition, Linux.

This is the section for recommended kernels. There are both vanilla kernels and performance kernels. Ordered by newest to oldest, the top ones are the recommended ones.

[Credits for all of these kernels](/ending#credits).

::: details Read this if you're confused!
Hard to say as there's a neptillion of them, but I'd recommend starting from the top (mind the Southbridge) and going down until you can find one that works.

If all you care about is squeezing as much performance as possible out of the PS4 (you do) try the performance kernel section first. Those have patches to make the system more responsive.

What about versions you may still ask? Versions do matter, as Baikal has been stuck on 5.4 for a while and can't use modern GPU drivers anymore. For the rest, it doesn't matter.

If you still have issues, write on the forums or join the [Discord servers](/information#important-places).
:::

### Vanilla kernels
These are normal linux kernels with additional patches to make them work properly on the PS4. 

| Kernel Download                                                                                                                                                         | Source code                                        | Compatible Southbridges   | Extra info                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------- | ------------------------------------------------ |
| [6.15.4](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v6.15.4__wifi_blkscrn)<br>(Recommended)                                                                  | [GitHub](https://github.com/feeRnt/ps4-linux-12xx) | Aeolia & Belize ONLY      | Specific blackscreen-fix releases. Recommended.  |
| [5.15.x](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v5.15.15__3.5.0)<br>[5.4.x](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v5.4.247__baikal_mt76) | [GitHub](https://github.com/feeRnt/ps4-linux-12xx) | All (5.4 only for Baikal) | Check Actions section if the releases don't work |

::: details Performance kernels
### "Performance patched" kernels
These kernels are compiled using additional optimizations. Don't expect a 3x improvement in performance, they just add features and make the system a bit more responsive.

| Kernel                                                           | Source code | Compatible Southbridges | Extra info                                                                                                              |
| ---------------------------------------------------------------- | ----------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [6.15 and 5.15](https://www.youtube.com/watch?v=zVzHzJT7dHk)     | N/A         | All                     | FullLTO, 120Hz support, 4K for PS4 Pro. You need to download the whole archive and pick one for your needs.<br>By saya. |
| [6.15.4](https://mega.nz/folder/N0QjHSBT#609IHevkWEW0vnTCFW-Rhw) | N/A?        | Aeolia<br>Belize        | ZRAM, CachyOS patches, KVM and more. <br>By triki1.                                                                     |

:::

If you have issues, remember to check the [Issues page](/issues). If you want more help, check out [Discord servers](/information#important-places).

## Initramfs
This is the rescue shell that boots your Linux installer/installation. We'll be using [this one](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/initramfs.zip). [Source (not really)](https://bitbucket.org/piotrkarbowski/better-initramfs/src/master/).

::: details More stuff
There's another in-dev initramfs (probably not working), if you want to check out the source it's [here](https://github.com/ps4gentoo/initramfs).

Also, you may want to read [this post](https://ps4linux.com/forums/d/93-tutorial-for-building-a-custom-initramfs-research-development) on the PS4 Linux forums, it explains what an initramfs is and does in actuality.
:::
## Distros (that you ACTUALLY wanna use)
Yes! Finally the time has come. Which one will you choose?
Honestly there's a neptillion distros. Most however, are very outdated, especially the ones on the PS4Linux's website list.

These distros are newer, supported by updates and recommended. CachyOS was used for this guide, but you can follow the same method of installation for all the other ones reported here. Time to distro hop!

| Distro                                                                                               | Base                            | Port credits                                                              | Info                                                                                |
| ---------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [CachyOS](https://mega.nz/file/RyUVQARB#HZD49XXac_v2CYKD4Oqa7Tg1aiZ7ltH_cnDxixw9JjY)                 | Arch                            | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | "Final Fantasy v2" version. It has nothing to do with FF.                           |
| [EndeavourOS](https://ps4linux.com/forums/d/386-endeavouros-gaming-rebirth)                          | Arch                            | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | Arch based distro that's nice to use and easy to maintain                           |
| [Manjaro](https://ps4linux.com/forums/d/342-manjaro-from-scratch)                                    | Arch                            | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | A Manjaro KDE distro                                                                |
| [Garuda](https://ps4linux.com/forums/d/415-garuda-dr460nized-gaming-v2/2)                            | Arch                            | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | "Gaming focused" distro (not really)                                                |
| [Fedora 42](https://ps4linux.com/forums/d/399-fedora42-by-qba-triki1kdewayland)                      | Fedora                          | [Elokuba (Qba)](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw) | Normal Fedora running KDE on Wayland                                                |
| [Debian Forky](https://ps4linux.com/forums/d/373-debian-forky-sid/3)                                 | Debian                          | [triki1](https://www.youtube.com/@trakerchris9876)                        | Very new distro. Extremely bleeding edge.                                           |
| [Kali Linux](https://ps4linux.com/forums/d/392-debian-forky-kali-linux-edition)                      | Debian                          | [triki1](https://www.youtube.com/@trakerchris9876)                        | Based on Debian Forky, but with Kali Linux stuff included                           |
| [Debian Trixie](https://ps4linux.com/forums/d/369-debien-trixie-full-update-mesa-2520-devel/13)      | Debian                          | [triki1](https://www.youtube.com/@trakerchris9876)                        | Latest Debian                                                                       |
| [Xubuntu](https://ps4linux.com/forums/d/337-xubuntu-2504-final-release)                              | Ubuntu                          | [triki1](https://www.youtube.com/@trakerchris9876)                        | Divided into multiple files                                                         |
| [Arch](https://ps4linux.com/forums/d/413-archlinux-minimal)                                          | Arch                            | [centi07](https://github.com/centi07)                                     | A basic Arch install                                                                |
| [Arch + TempleOS](https://github.com/ErkkolaMaitohappo/arch-ps4-aur-smth-fork/releases/tag/v1%2Bkde) | Arch, TempleOS                  | [Erkkola](https://github.com/ErkkolaMaitohappo)                           | Basic Arch + TempleOS, for the memes!                                               |
| [Batocera 40](https://ps4linux.com/forums/d/252-batocera-40-for-ps4-installation-setup-tutorial)     | No clue                         | [Noob404](https://www.youtube.com/channel/UC9pY5BDCjDLOC4j-zkHPu8)        | For retrogaming                                                                     |
| [JaguarLinux](https://ps4linux.com/forums/d/265-jaguarlinux-a-ps4-linux-only-distro-beta-release/3)  | None (includes stuff from Void) | [TigerClips1](https://github.com/TigerClips1/)                            | A distro made from scratch for the PS4! Still in development, but worth mentioning. |

>[!TIP]
>Want to add more distros? Make an issue and your wish shall be granted.
>
>Want to make your own? [Check this out!](distrodiy)

## To the installation we go
You should go to the next step, where you'll finally complete your installation!
