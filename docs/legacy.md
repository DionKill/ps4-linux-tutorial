# Legacy content
This page contains content that has been added for preservation's sake, even though most of you aren't ever going to use any of this stuff.

> [!WARNING]
> As this is legacy content, if you use any of these don't expect people to be able to help you.

## Legacy kernels, distros and initramfses
In all honesty: these can be found on the PS4Linux.com website, as it hasn't been updated in a long time. Don't use these on modern distros, as they don't boot anymore.
### Not recommended kernels
These kernels exist and are relatively new, but I don't recommend them anymore as there are better alternatives. If none of the others work for you, or you are using a specific distro, you can try these.

| Kernel version         | Source and download                                                                                                                                                                                                           | Developer  | Compatible Southbridges    | Extra info                                          |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------------- | --------------------------------------------------- |
| 6.15.y                 | [GitHub](https://github.com/crashniels/linux)                                                                                                                                                                                 | crashniels | All, depends on the branch | No precompiled downloads available.                 |
| 6.12.11                | [Download](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/kernels/bz-6.12.11.tar.xz)<br>No source                                                                                                       | triky1     | Belize                     | Reupload, links were temporary, doesn't work for me |
| 5.15.25-rc1<br>5.15.15 | [Download](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/kernels/5.15.25-rc1_belize_ThinLTO_Led_LAVANDE_Debian-Trixie_LLVM_19.1.2.zip)<br>[Original link](https://www.youtube.com/watch?v=mpcE9LLS59k) | saya       | Belize                     | Multiple power LED colors. LTO.                     |


#### Really old kernels
These kernels are so old they don't even boot anymore. Do not use these.

| Kernel version | Source and download                                                                                                       | Developer | Compatible Southbridges | Extra info                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | --------- | ----------------------- | ---------------------------------- |
| 4.4<br>5.x     | No source.<br>[Download](https://www.logic-sunrise.com/news-1160961-ps4-linux-bzimages-pour-toutes-versions-de-ps4.html). | saya      | All                     | Website is in French. Overclocked. |
| 4.4<br>5.x     | Probably no source.<br>[Download](https://ps4linux.com/downloads/#PS4_Linux_Kernel_Downloads).                            | Many      | All                     | The old list from PS4Linux.        |
### Distros
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

You can create this file yourself. Create an empty text file called `vram.txt`, and in it, input a number between 1 and 5 (some models only support up to 3). That's how many GBs will be allocated to your GPU.
