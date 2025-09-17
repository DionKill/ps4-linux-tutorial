# Overview and requirements
In order to install Linux on your PS4, we'll need some things.

Here's the rundown of what we're going to need to install it:
## System
- A compatible, moddable PS4
	- This means a PS4 up to firmware 12.02. Refer to Modded Warfare's YT channel for a tutorial on how to mod your console.
	- You need to know your PS4 Southbridge. To check that, after loading GoldHen, go into Settings > System > System Information and note the name. It can be:
		1. Aeolia (PS4 Phat)
		2. Belize/Belize2 or some other variant of this (Slim and Pro)
		3. Baikal (Newer Silms and Pros)
			- Baikal systems can't install Linux on the internal HDD (more on that later)

## Necessary files
- The Linux files (downloads are further into the guide)
	1. bzImage (the kernel)
	2. initramfs.cpio.gz (Linux loader)
	3. A distro of your choice, already preinstalled and modified to work on the PS4
		- You can also make your own. More on that later.

## Storage devices to install to
- A device to install Linux to, either:
	1. Internal HDD (Baikal still unsupported, veeery slow)
	2. External HDD/SSD
		- Requires an external SATA-USB adapter.

---
# Let's start
Let's go to the preparations section!