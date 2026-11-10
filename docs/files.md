# Getting the warez

## Kernels
Let's start with the kernels: they are very important as they have the software that controls all of the PS4's hardware. This is, by definition, Linux.

This is the section for recommended kernels. There are both vanilla kernels and performance kernels. Ordered by newest to oldest, the top ones are the recommended ones.

[Credits for all of these kernels](/ending#credits).

::: details Read this if you're confused!
### Do kernel versions matter?
The community has moved on from 6.15 to 7.x kernels. Aeolia and Belize have the 7.1.7 release. Baikal has a 7.0.8 prebuilt after years of being stuck on 5.4, and a 7.1.7 branch on GitLab without a prebuilt yet, thanks to rmux.

### What about more performance?
The newest kernels are already built with all the necessary patches to make the console work as good as it can, so there's no need to modify anything anymore.
LTO is a topic of debate, but both ThinLTO and FullLTO are good options.
:::

### Kernel list
These are normal general-use kernels with additional patches to make them work properly on the PS4.

| Kernel Download                                                                                           | Compatible Southbridges | Source Code                                         | Extra info                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [7.3.3](https://gitlab.com/rmuxnet/linux/-/releases)<br>*Recommended*                                     | Aeolia, Belize, Baikal  | [GitLab](https://gitlab.com/rmuxnet/linux)          | All 4 profiles, FullLTO.<br>**General**: desktop/gaming, default.<br>**Server**: headless.<br>**SlopMax**: General + KVM.<br>**Slopium**: Server + KVM. |
| [7.1.7](https://gatto.fae5.de/archive/kernels/strawberry/aeolia/7.1.7/bzImage)<br>*Mirror*                | Aeolia, Belize          | [GitLab](https://gitlab.com/rmuxnet/linux)          | An earlier strawberry release, worth a try if 7.3.3 isn't working for you.                                                                              |
| [7.1.3](https://gatto.fae5.de/archive/kernels/strawberry/aeolia/7.1.3/bzImage)<br>*Mirror*                | Aeolia, Belize          | [GitLab](https://gitlab.com/rmuxnet/linux)          | Another earlier Strawberry release, works better than 7.1.7 on some systems.                                                                            |
| [7.0.8](https://gatto.fae5.de/archive/kernels/strawberry/baikal/7.0.8/bzImage)<br>*Mirror*                | Baikal                  | [GitLab](https://gitlab.com/rmuxnet/linux)          | Just a mirror of the FullLTO version for baikal.                                                                                                        |
| [6.15.4](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v6.15.4__crashnt-4.8.3)                    | Aeolia, Belize          | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | The base layer that Strawberry was built on. Still updated, and recommended for users experiencing issues with newer kernels.                           |
| [5.15.15](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v5.15.15__obsidianx-4.0) <br> Belize Ver. | Belize                  | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | Same as above. Might provide better performance than 6.15.4.                                                                                            |

> [!NOTE]
> Some people repackage these kernels into closed-source "packs" with "custom patches". Real fixes are public, people who hide them do so for a reason.
> 
> If you are wondering why some kernels are open-source only when asking for it, it's because of the point above.
>
> <img src="/closed-source-pack.jpg" alt="Is this a pigeon meme. Kernel pack dev, pointing at someone else's public commit: is this my custom patch?" width="50%">

::: details Server kernels
### Server kernels
If you are using the PS4 as a server, use these instead of the normal desktop-oriented builds when available.

> [!TIP]
> Pair server kernels with the `128MB` server payload unless you have a specific reason not to.

| Kernel Download                                                                             | Compatible Southbridges                                                                                                      | Source Code                                | Extra info                                                                                      |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| [7.1.7](https://gitlab.com/rmuxnet/linux/-/releases)<br>*Recommended*             | Aeolia, Belize                                                                                                              | [GitLab](https://gitlab.com/rmuxnet/linux)         | Use **Server** edition, or **Slopium** if you need VM support.                                      |

:::

If you have issues, remember to check the [Issues page](/issues). If you want more help, check out [Discord servers](/information#important-places).

## Initramfs
This is the rescue shell that boots your Linux installer/installation. Think of it as GRUB, but more basic.

You can download the new one and improved initramfs-ps4 [here](https://git.gay/GayCorp/initramfs-ps4/releases/tag/latest).

::: details More information and other initramfses
The new "initramfs-ps4" does work, and it's the one in the link above.

[Here is the old initramfs](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/initramfs.zip) (shouldn't use). [Source (not really)](https://bitbucket.org/piotrkarbowski/better-initramfs/src/master/).

> [!NOTE]
> On 7.x kernels the Aeolia script is wrong, You should try the Belize initramfs file. (You might think It won't work, but It will.)

There's another in-dev initramfs (probably not working), if you want to check out the source it's [here](https://github.com/ps4gentoo/initramfs).

Also, you may want to read [this post](https://ps4linux.com/forums/d/93-tutorial-for-building-a-custom-initramfs-research-development) on the PS4 Linux forums, it explains what an initramfs is and does in actuality.
:::
## Distros (that you ACTUALLY wanna use)
Honestly there's a neptillion distros... If you're indecisive, click on all the links and check them out. Either way they are listed from most to least recommended.

> [!TIP]
> Arch based distros are recommended due to ease of update for drivers as the hardware is really peculiar.


::: details Read more here
Each distro has its own pros and cons. But most of the difference on PS4 comes down to drivers; each distro requires its own version of them and it can be a pain in the ass to install.

**Arch based distros are recommended**, but not because you need to be part of the elite. They are the only ones that currently have automatic updates (meaning with the rest of the system) without breaking anything.

You can of course use other distros, but you do run the risk of breaking your distro or having to reinstall everything when something needs updating, unless you know what you are doing.
:::

> [!NOTE]
> All distros listed below are compatible with all PS4 revisions and southbridges. But you must use kernel 5.10 or newer for mesa to work. The old Baikal-only 5.4 kernel (now in the [legacy page](legacy)) can't render 3D graphics.
> We don't suggest using anything closed-source or bloated (looking at you, Debian, and "MultiBoot" initramfs). Stick to the distros below, they're proven to work without issues by at least 200 people in our own Discord server :)

| Distro Download                                                                                                    | Port credits                                    | Info                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [CachyOS Light (Mega)](https://mega.nz/file/kS0CwBLJ#I2GtfEZ0HigRyoSoHnBWGH85NqTnNCOUHIBvxlQmUZM)<br>*Recommended* | DionKill                                        | CachyOS, but without it running like crap. Automatic Mesa updates.<br><br><br>[Info on pastebin](https://pastebin.com/6tdMKGeU) |
| [CachyOS Light (Mediafire)](https://www.mediafire.com/file/hvlz6qk3e36rlk1/ps4linux.tar.xz/file)                   | DionKill                                        | Same thing, but hosted on Mediafire because Mega loves rate limiting.                                                           |
| [Arch](https://github.com/ErkkolaMaitohappo/ps4-arch-distros/releases)                                | [Erkkola](https://github.com/ErkkolaMaitohappo) | An Arch install with different flavors.                                                            |
| [Arch-based](https://github.com/ErkkolaMaitohappo/ps4-arch-based-distros/releases)                                      | [Erkkola](https://github.com/ErkkolaMaitohappo) | Arch based distros.                                                                                                       |
| [Artix](https://gitlab.com/vanillitefroyo/artix-ps4/-/releases)                                              | [froyo](https://gitlab.com/vanillitefroyo)      | Not for everyone. Pre-configured with an XFCE desktop. Also has a `base` variant for DIYers.                                    |
::: details More distros
Here are the distros that we can't recommend anymore, as they have been superseded, or haven't had any major updates in a while.

It may be useful to you if you want something other than Arch, or if you need to run kernel 5.4.

If you want to take the risk, go to the [legacy page](legacy).

>[!NOTE]
>Want to add more distros? Make an issue and your wish shall be granted.
>
>Want to make your own? [Check this out!](distrodiy)

:::
## To the installation we go
You should go to the next step, where you'll finally complete your installation!
