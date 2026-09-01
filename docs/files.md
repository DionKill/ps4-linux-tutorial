# Getting the warez

## Kernels
Let's start with the kernels: they are very important as they have the software that controls all of the PS4's hardware. This is, by definition, Linux.

This is the section for recommended kernels. There are both vanilla kernels and performance kernels. Ordered by newest to oldest, the top ones are the recommended ones.

[Credits for all of these kernels](/ending#credits).

::: details Read this if you're confused!
### Do kernel versions matter?
The community has moved on from 6.15 to 7.x kernels on Aeolia and Belize. Baikal has now been ported to 7.0.8 after years of being stuck on 5.4, thanks to rmux.

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
These are normal general-use kernels with additional patches to make them work properly on the PS4. Some 

| Kernel Download                                                                                           | Compatible Southbridges | Source Code                                         | Extra info                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [7.1.7](https://gitlab.com/rmuxnet/linux/-/releases/zaebiz%2F7.1.7-Stable)<br>*Recommended*               | Aeolia, Belize, Baikal  | [GitLab](https://gitlab.com/rmuxnet/linux)          | All 4 profiles, FullLTO.<br>**General**: desktop/gaming, default.<br>**Server**: headless.<br>**SlopMax**: General + KVM.<br>**Slopium**: Server + KVM. |
| [6.15.4](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v6.15.4__crashnt-4.7)                      | Aeolia, Belize          | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | LTO and other improvements.<br>**ThinLTO** recommended.<br>Some consoles may need `no-builtin-fw`.                                                      |
| [5.15.15](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v5.15.15__obsidianx-4.0) <br> Belize Ver. | Belize                  | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | Same as above. Might provide better performance than 6.15.4.                                                                                            |
| [5.4.247](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v5.4.247__neocine-1.1)                    | Baikal                  | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | Specific for Baikal systems. Don't use on any other console!                                                                                            |

> [!NOTE]
> Some people repackage these kernels into closed-source "packs" and act like they did something, when all they did is apply patches from the internet. Don't fall for it. Real fixes are public, and folks desperate to take credit usually hide the source for a reason.

::: details Server kernels
### Server kernels
If you are using the PS4 as a server, use these instead of the normal desktop-oriented builds when available.

> [!TIP]
> Pair server kernels with the `128MB` server payload unless you have a specific reason not to.

| Kernel Download                                                                             | Compatible Southbridges                                                                                                      | Source Code                                | Extra info                                                                                      |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| [7.1.7](https://gitlab.com/rmuxnet/linux/-/releases/zaebiz%2F7.1.7-Stable)<br>*Recommended*             | Aeolia, Belize, Baikal                                                                                                      | [GitLab](https://gitlab.com/rmuxnet/linux)         | Use **Server** edition, or **Slopium** if you need VM support.                                      |

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

::: details Read more here
Each distro has it's own pros and cons. But most of the difference on PS4 comes down to drivers; each distro requires it's own version of them and it can be a pain in the ass to install.

**Arch based distros are recommended**, but not because you need to be part of the elite. They are the only ones that currently have automatic updates (meaning with the rest of the system) without breaking anything.

You can of course use other distros, but you do run the risk of breaking your distro or having to reinstall everything when something needs updating, unless you know what you are doing.
:::

> [!TIP]
> Arch based distros are recommended due to ease of update for drivers as the hardware is really peculiar.

> [!NOTE]
> We don't suggest using anything closed-source or bloated (looking at you, Debian, and "MultiBoot" initramfs). Stick to the distros below, they're proven to work without issues by at least 200 people in our own Discord server :)

| Distro Download                                                                                                    | Compatible Southbridge & Mesa     | Port credits                                    | Info                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CachyOS Light (Mega)](https://mega.nz/file/kS0CwBLJ#I2GtfEZ0HigRyoSoHnBWGH85NqTnNCOUHIBvxlQmUZM)<br>*Recommended* | Aeolia, Belize, Baikal<br>(Mesa 26.0.4) | DionKill                                        | CachyOS, but without it running like crap. Automatic Mesa updates.<br><br><br>[Info on the forums](https://ps4linux.com/forums/d/422-cachyos-light-lxqt-a-light-and-fast-distro) |
| [Arch](https://github.com/ErkkolaMaitohappo/arch-ps4-aur-smth-fork/releases/latest)                                | Aeolia, Belize, Baikal<br>(Mesa 26.0.4) | [Erkkola](https://github.com/ErkkolaMaitohappo) | An Arch install with different desktops: KDE, XFCE or even TempleOS!                                                                                                             |
| [Artix](https://github.com/ErkkolaMaitohappo/ps4-arch-based-distros/releases)                                      | Aeolia, Belize, Baikal<br>(Mesa 26.0.4) | [Erkkola](https://github.com/ErkkolaMaitohappo) | A distro not for noobies.                                                                                                                                                        |
| [CachyOS "Strawberry" Server Edition](https://github.com/sony-jaguar-devs/distros/releases)                        | Aeolia, Belize, Baikal                  | [rmux](https://github.com/rmuxnet/)             | *For server use only*! It doesn't run any DE!                                                                                                                                    |
| [JaguarLinux](https://ps4linux.com/forums/d/265-jaguarlinux-a-ps4-linux-only-distro-beta-release/3)                | Aeolia, Belize, Baikal<br>(Mesa 26-devel) | [TigerClips1](https://github.com/TigerClips1/)  | A distro made from scratch for the PS4! Void-based & in development. Worth a mention.                                                                                            |
::: details More distros
Here are the distros that we can't recommend anymore, as they have been superseeded, or haven't had any major updates in a while.

It may be useful to you if you want something other than Arch, or if you have a Baikal southbridge.

If you want to take the risk, go to the [legacy page](legacy).

>[!NOTE]
>Want to add more distros? Make an issue and your wish shall be granted.
>
>Want to make your own? [Check this out!](distrodiy)

:::
## To the installation we go
You should go to the next step, where you'll finally complete your installation!
