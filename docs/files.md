# Getting the warez

## Kernels
Let's start with the kernels: they are very important as they have the software that controls all of the PS4's hardware. This is, by definition, Linux.

This is the section for recommended kernels. There are both vanilla kernels and performance kernels. Ordered by newest to oldest, the top ones are the recommended ones.

[Credits for all of these kernels](/ending#credits).

::: details Read this if you're confused!
### Do kernel versions matter?
The community has moved on from 6.15 to 6.18, and now there is also active 7.0 kernel work for Aeolia and Belize. Baikal has now being ported to 7.0 after years of being stuck on 5.4 thanks to rmux.

### What about more performance?
The newest kernels are already built with all the necessary patches to make the console work as good as it can, so there's no need to modify anything anymore.
LTO is a topic of debate, but both ThinLTO and FullLTO are good options.
:::

::: details <Badge type="warning" text="Warning regarding other kernels not on this list" />
Some kernels are to be avoided, specifically the ones "made" by the KHEOPS team, which are stealing work from the PS4 Abuse Club team. You can find more info in the Linux for PS4 Community Discord server, in [this message](https://discord.com/channels/1493663490659975350/1499549352320958514/1530306022508597268), (this is a guide and not a place for drama).

On top of that, there is also a malware problem:
> triki1 is on the same team. He said in writing that they will not publish source code because it is malware. He said it "could set your PlayStation on fire". This is a serious problem. Do not ignore this.


:::
### Kernel list
These are normal general-use kernels with additional patches to make them work properly on the PS4.

| Kernel Download                                                                                           | Compatible Southbridges           | Source Code                                         | Extra info                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------- | --------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [7.1.7](https://gitlab.com/rmuxnet/linux/-/releases/zaebiz%2F7.1.7-Stable)<br>*Recommended*                                | Aeolia, Belize                    | [GitLab](https://gitlab.com/rmuxnet/linux/)         | Upgrade to the 7.0 release.<br><br>- General (*recommended*)<br>- Server<br>- SlopMax (General with VM support)<br>- Slopium (Server with VM support) |
| [7.0](https://github.com/rmuxnet/linux/releases/tag/7.0-April-24)                                         | Aeolia, Belize<br>(Baikal is WIP) | [GitHub](https://github.com/rmuxnet/linux/)         | Port of 7.0 with loads of fixes                                                                                                                       |
| [6.18.21](https://github.com/rmuxnet/ps4-linux-12xx/releases/tag/6.18.21-April-3)                         | Aeolia, Belize                    | [GitHub](https://github.com/rmuxnet/linux/)         | Prebuilts are in the repo releases.                                                                                                                   |
| [6.15.4](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v6.15.4__crashnt-4.7)                      | Aeolia, Belize                    | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | LTO and other improvements.<br>**ThinLTO** recommended.<br>Some consoles may need `no-builtin-fw`.                                                    |
| [5.15.15](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v5.15.15__obsidianx-4.0) <br> Belize Ver. | Belize                            | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | Same as above. Might provide better performance than 6.15.4.                                                                                          |
| [5.4.247](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v5.4.247__neocine-1.1)                    | Baikal                            | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | Specific for Baikal systems. Don't use on any other console!                                                                                          |

::: details Server kernels
### Server kernels
If you are using the PS4 as a server, use these instead of the normal desktop-oriented builds when available.

> [!TIP]
> Pair server kernels with the `128MB` server payload unless you have a specific reason not to.

| Kernel Download                                                         | Compatible Southbridges | Source Code                                         | Extra info                                                                             |
| ----------------------------------------------------------------------- | ----------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [7.0-Clean](https://github.com/rmuxnet/ps4-linux-12xx)                  | Aeolia, Belize          | [GitHub](https://github.com/rmuxnet/ps4-linux-12xx) | Newer 7.0 server work by rmux.<br>Use the repo to pick the branch or release you want. |
| [6.18.21](https://github.com/rmuxnet/ps4-linux-12xx) <br> (Recommended) | Aeolia, Belize          | [GitHub](https://github.com/rmuxnet/ps4-linux-12xx) | Contains the Strawberry server prebuilts in the repo releases.                         |

:::

If you have issues, remember to check the [Issues page](/issues). If you want more help, check out [Discord servers](/information#important-places).

## Initramfs
This is the rescue shell that boots your Linux installer/installation. Think of it as GRUB, but more basic.

Download [this one](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/initramfs.zip). [Source (not really)](https://bitbucket.org/piotrkarbowski/better-initramfs/src/master/).

::: details More details
There's another in-dev initramfs (probably not working), if you want to check out the source it's [here](https://github.com/ps4gentoo/initramfs).

Also, you may want to read [this post](https://ps4linux.com/forums/d/93-tutorial-for-building-a-custom-initramfs-research-development) on the PS4 Linux forums, it explains what an initramfs is and does in actuality.
:::
## Distros (that you ACTUALLY wanna use)
Honestly there's a neptillion distros... If you're indecisive, click on all the links and check them out. Either way they are listed from most to least recommended.

::: details More about these distros
Each distro has it's own pros and cons. But most of the difference on PS4 comes down to drivers; each distro requires it's own version of them and it can be a pain in the ass to install.

**Arch based distros are recommended**, but not because you need to be part of the elite. They are the only ones that currently have automatic updates (meaning with the rest of the system) without breaking anything.

You can of course use other distros, but you do run the risk of breaking your distro or having to reinstall everything when something needs updating, unless you know what you are doing.
:::

| Distro                                                                                                         | Compatible Southbridge & Mesa     | Port credits                                    | Info                                                                                  |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------- |
| [CachyOS Light](https://ps4linux.com/forums/d/422-cachyos-light-lxqt-a-light-and-fast-distro)<br>*Recommended* | Aeolia, Belize<br>(Mesa 26.0.4)   | DionKill                                        | CachyOS, but without it running like crap. Automatic Mesa updates.                    |
| [Arch](https://github.com/ErkkolaMaitohappo/arch-ps4-aur-smth-fork/releases/latest)                            | Aeolia, Belize<br>(Mesa 26.0.4)   | [Erkkola](https://github.com/ErkkolaMaitohappo) | An Arch install with different desktops: KDE, XFCE or even TempleOS!                  |
| [Artix](https://github.com/ErkkolaMaitohappo/ps4-arch-based-distros/releases)                                  | Aeolia, Belize<br>(Mesa 26.0.4)   | [Erkkola](https://github.com/ErkkolaMaitohappo) | A distro not for noobies.                                                             |
| [CachyOS "Strawberry" Server Edition](https://github.com/sony-jaguar-devs/distros/releases)                    | Aeolia, Belize                    | [rmux](https://github.com/rmuxnet/)             | *For server use only*! It doesn't run any DE!                                         |
| [JaguarLinux](https://ps4linux.com/forums/d/265-jaguarlinux-a-ps4-linux-only-distro-beta-release/3)            | Aeolia, Belize<br>(Mesa 26-devel) | [TigerClips1](https://github.com/TigerClips1/)  | A distro made from scratch for the PS4! Void-based & in development. Worth a mention. |
### More distros
Here are the distros that we can't recommend anymore, as they have been superseeded, or haven't had any major updates in a while.

It may be useful to you if you want something other than Arch, or if you have a Baikal southbridge.

::: details Click here to show more distros

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

>[!TIP]
>Want to add more distros? Make an issue and your wish shall be granted.
>
>Want to make your own? [Check this out!](distrodiy)


:::

## To the installation we go
You should go to the next step, where you'll finally complete your installation!
