# Legacy content
This page contains content that has been added for preservation's sake, even though most of you aren't ever going to use any of this stuff.

> [!WARNING]
> As this is legacy content, if you use any of these don't expect people to be able to help you.

## Legacy kernels, distros and initramfses
In all honesty: these can be found on the PS4Linux.com website, as it hasn't been updated in a long time. Don't use these on modern distros, as they don't boot anymore.
#### Really old kernels
These kernels are so old they don't even boot anymore. Do not use these.

| Kernel version | Source and download                                                                                                       | Developer | Compatible Southbridges | Extra info                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | --------- | ----------------------- | ---------------------------------- |
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
