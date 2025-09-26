# Legacy content
This page contains content that has been added for preservation's sake, even though most of you aren't ever going to use any of this stuff.

> [!WARNING]
> As this is legacy content, if you use any of these don't expect people to be able to help you.

## Legacy kernels, distros and initramfses
In all honesty: most of these can be found on the PS4Linux.com website, as it hasn't been updated in a long time. Don't use these on modern distros, as they don't boot anymore.
### Kernels
#### Other kernels
These are additional kernels that are kind of up to date but also not really or that do not offer prebuilts, which aren't useful for 99% of people.

| Kernel version | Source and download                           | Compatible Southbridges    | Extra info                          |
| -------------- | --------------------------------------------- | -------------------------- | ----------------------------------- |
| 6.15.y         | [GitHub](https://github.com/crashniels/linux) | All, depends on the branch | No precompiled downloads available. |
#### Really old kernels
These kernels are so old that probably don't even boot anymore. Do not use these.

| Kernel version | Source and download                                                                            | Compatible Southbridges | Extra info                  |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------------------- | --------------------------- |
| 4.4<br>5.x     | Probably no source.<br>[Download](https://ps4linux.com/downloads/#PS4_Linux_Kernel_Downloads). | All                     | The old list from PS4Linux. |

Credits for the kernels can be found [here](ending#credits).
#### Bootargs
The `bootargs.txt` is not really necessary anymore, unless your "distro + kernel" combo of choice requires it or on certain kernels for Baikal PS4s. Therefore, it has been moved to the legacy section.

This adds certain parameters when launching the kernel to make the GPU work properly.

In order to use it, create a new text file, and input this line inside, then save it as `bootargs.txt`:
```
panic=0 clocksource=tsc consoleblank=0 net.ifnames=0 radeon.dpm=0 amdgpu.dpm=0 drm.debug=0 console=uart8250,mmio32,0xd0340000 console=ttyS0,115200n8 console=tty0 drm.edid_firmware=edid/1920x1080.bin 
```

Remember that this `bootargs.txt` needs to be placed in the same folder as the bzImage.
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

You can create this file yourself. Create an empty text file called `vram.txt`, and in it, input a number between 1 and 3. That's how many GBs will be allocated to your GPU. Remember you are removing that from your system memory!
