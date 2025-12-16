# Baikal specific page
If you landed here, it means you have the unluckiest southbridges of them all: the despicable Baikal chip. Unfortunately there aren't many fixes for this chip, but you may be able to get a working installation.

## Things that don't work on Baikal consoles

- Stable kernels are on version 5.4 (newer are in development)
- Higher Mesa than 25.1 will not work due to upgraded `libdrm` that requires newer kernel
- Wayland as default graphics platform won't work, only X11 does, you can however launch a Wayland session after first executing X11
- Ethernet (LAN) doesn't work
- Internal HDD writing speeds are slow due to UFS encryption, you can however install internally (theoretically? you need a different initramfs).

> List by uar

## Why is Baikal still unsupported?
Because there are almost no developers willing to put so much effort into the chip.

Aeolia and Belize work almost flawlessly between each others because they are very similar, but Baikal is completely different and adds a lot of work to the entire scene. This means that you are still stuck with older kernels which don't support newer `libdrm` versions which in turn don't support newer `mesa-git` versions and so on. It's an endless cycle.

In reality there's not much to say, so if you have any issues, shoot a message on the Discords.