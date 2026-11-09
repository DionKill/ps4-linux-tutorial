---
next:
  text: 'Choose an Installation Method!'
  link: 'installation#choosing-a-method-of-installation'
---


# Let'sa install!
Installing Linux on the PS4 is surprisingly easy, and it helps you free your mind from the hardships of everyday life.

Just kidding, it's fucking terrible.

::: details Internal vs External: The Finale - GOTY Limited Edition (rant)
Internal installation works on every southbridge, but trust me, on the stock HDD it's atrocious.
To give you an explanation, it took me 30 MINUTES to update my CachyOS installation (1500MBs) and the system was so unresponsive that I could watch entire anime episodes in between clicks.

<img src="/meme-this-is-fine.jpg" alt="This is fine meme: updating CachyOS on the stock PS4 HDD." width="50%">

Using an external SATA-USB adapter with a Samsung 870 EVO 500GB, the time it took shrank to less than 5 minutes, same when using it as the internal drive.

Therefore, let's clear some misinformation here:
- The PS4's internal HDD is a repurposed laptop 5400RPM drive. Please, for the love of GOD, do NOT use this. Even the PS4's own menus lag because of how slow it is.
- The PS4 internal drive has encrypted partitions with a UFS file system, and Linux has to decrypt them, so it slows down significantly, even if you swap in an SSD.
- You CAN clone your PS4 HDD into an SSD, if internal installation is a must for you.
- The PS4 doesn't support TRIM, so a possible internal SSD swap would be a lot slower in writing data (a quality cached SSD with a garbage collector would be a bit better though).
- PS4 Phat and Slim are limited to SATA-II, which is 3Gbps in speed (roughly 375MB/s), which people online say it's not enough (it's enough for a PS4). On the other hand, the PS4 Pro runs at SATA-III, which is 6Gbps (up to 750MB/s), so that can saturate every SATA SSD on the market.
	- External SSD, on my 500GB Samsung 870 EVO, is 350MB/s-ish. So you'd get the same performance as an internal drive (theoretically) even on a Slim/Phat console.
	- Internal SSD performance is similar to external. The internal drive is SATA behind the southbridge, not USB, but the encryption slows down I/O access.

An external SSD over a USB adapter is still the recommended setup. If you already swapped the internal drive for an SSD, an internal install is a fine choice too, just remember to get a good quality one as the PS4 doesn't support TRIM.
:::

> [!TIP]
> TL;DR:
> 
> Internal works on all southbridges, but the stock HDD is slow.
> Every console supports external, which is recommended with an SSD via an adapter.

## Preparing the installation
1. Boot your PS4 and launch GoldHen.
2. Put the initramfs of choice on somewhere easy to remember, like your Desktop
	1. If it's a zip file, unzip it, it should be a `*.cpio.gz`
3. Pick your kernel (bzImage), extract the file from the zip and place it somewhere you can remember
4. Choose your distro and and rename it `distro.tar.xz`

## Choosing a method of installation 
> [!WARNING]
> Choose ONLY ONE method of installation.
> 
> Installing on both the internal and external drives can cause problems! If you did, remove one of the previous installations!

Here you will choose a method of installation.

Again, choose only one method and stick with it.

::: tip Internal Installation
This method installs Linux on the internal PS4 HDD, by creating an image file (`linux.img`) as big as you want. It will not overwrite anything on the drive.

[Internal Installation section.](/internal-installation)
:::

::: tip External Installation
For external installation, there are two methods: the first one involving a script on the PS4 (faster to configure), and another one with manual partitioning (higher success rate).

The manual partitioning method is indeed preferred, but it involves the use of a Linux computer, virtual machine, or specific software on Windows.
You may choose the scripted method, however if any issues arise, try the other one.

[Scripted External Installation.](/external-installation-scripted)

[Manual External Installation.](/external-installation-manual)
:::
