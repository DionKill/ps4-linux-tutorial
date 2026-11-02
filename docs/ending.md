# Finishing up
And you're done! If this guide was helpful, you can star it on GitHub and share it!

Now go forth, spread misinformation online.

<img src="/misinformation.jpg" width="50%">

> [!TIP]
> I highly recommend continuing to the ["Post Installation" setup](/postinstall), to change language and download more RAM!

> [!NOTE]
> For any problems, [check the issues page](/issues)!

## Credits
### Kernel developers
These are the original kernel developers, who did the hard work to port the kernels on which all of the modern kernels are based on. None of this would've been possible without them.
- 4.4  kernel
	- marcan, fail0verflow team
- 4.14 kernel
	- rancido, and psxitateam, eeply, valery for Baikal (based on fail0verflow)
- 4.19 and 5.3 kernel
	- mircoho, (based on fail0verflow, psxitateam, eeply, valeryy)
- 5.15 kernel
	- codedwrench (based on fail0verflow, psxitateam, eeply, valeryy, mircoho)
- 6.15 kernel
	- crashniels with 2 patches from mircoho (fastboot and ethernet kp fixes) (based on fail0verflow - psxitateam  - eeply - valeryy - mircoho - codedwrench)
- 6.18 and 7.x kernel
	- patches from rmux, help from everyone in the ps4 abuse club

If you want, you can check out their repos:
- [marcan (fail0verflow) ](https://github.com/fail0verflow/ps4-linux)
	- Without them nothing would've ever been possible.
- [rancido (psxitateam)](https://github.com/Ps3itaTeam/ps4-linux/)
	- Made the AMDGPU driver work.
- [eeply](https://github.com/eeply/ps4-linux)
	- Brought PS4 Pro to work for video output, in fact now all ps4 with new Panasonic HDMI chip work.
- valeryy (no GitHub, gave the code to rancido)
	- Brought the Baikal Southbridge support.
- [tihmstar](https://github.com/tihmstar/ps4-linux)
	- Brought the Internal SATA driver for PS4 Belize.
- [mircoho](https://github.com/ps4boot/ps4-linux) ([ps4gentoo](https://github.com/ps4gentoo/ps4-linux-5.3.7) and [ps4boot](https://github.com/ps4boot/))
	- Worked on the kernel (especially Gentoo), ported payloads to newer firmwares.
- [codedwrench](https://github.com/codedwrench/ps4-linux)
	- Made kernel patches.
- [crashniels](https://github.com/crashniels/linux)
	- Ported newer kernel versions.
- [feeRnt](https://github.com/feeRnt/ps4-linux-12xx) (Package)
	- Hosts and maintains the PS4 Linux kernel sources on GitHub.
- [rmux](https://github.com/rmuxnet)
	- Kernel 6.18.x and 7.x
- leg
	- Helped with kernel updates, Mesa driver testing, and much more
- bzz
	- Working on updated and fixed Mesa drivers

### Additional credits
- [uar](https://uar.no/ps4/)
	- For their tutorial and fixes for baikal consoles and more.
- [centi07](https://github.com/centi07/)
	- For their help with up-to-date mesa package repos on Arch and more.
- [FlyingPhantom](https://github.com/FlyingPhantom) / z_fentom
	- For their forking this project for new additions. You can find it [here](https://flyingphantom.github.io/ps4-linux-tutorial/).

Thank you all so much for making this possible.

### A quick note
This scene only survives if we keep things **open and clean**. Everything you see here is free, open source, and battle-tested by the community. When you contribute to docs, kernels, distros, tools, keep it that way: public source code, no closed blobs, no bloated gatekeeping. If it's not open, the scene ends up shit, like it always did in the past.

If there is something this guide is missing or got wrong, [open an issue](https://github.com/DionKill/ps4-linux-tutorial/issues) and help make it better!
