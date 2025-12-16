---
next:
  text: 'Choose an Installation Method!'
  link: 'installation#choosing-a-method-of-installation'
---


# Let'sa install!
Installing Linux on the PS4 is surprisingly easy, and it helps you free your mind from the hardships of everyday life.

Just kidding, it's fucking terrible.

But don't worry,  the only thing you have to do is follow this guide and you can get a working system.

> [!TIP]
> TL;DR:
> 
> Internal only for Aeolia/Belize, not recommended.
> Every console supports external, which is recommend with an SSD via an Adapter.

::: details Internal vs External: The Finale - GOTY Limited Edition (rant)
As I've mentioned beforehand, you can't install Linux on the internal PS4's HDD on Baikal systems. I know, you're crying your heart out because you wanted to use it, but trust me it's atrocious.
To give you an explanation, it took me 30 MINUTES to update my CachyOS installation (1500MBs) and the system was so unresponsive that I could watch entire anime episodes in between clicks.

Using an external SATA-USB adapter with a Samsung 870 EVO 500GB, the time it took shrinked to less than 5 minutes.

Therefore, let's clear some misinformation here:
- The PS4's internal HDD is a repurposed laptop 5400RPM drive. Please, for the love of GOD, do NOT use this. Even the PS4's own menus lag because of how slow it is.
- The PS4 internal drive uses UFS encryption so it slows down significantly.
- You CAN clone your PS4 HDD into an SSD, if internal installation is a must for you
- The PS4 doesn't support TRIM, so a possible internal SSD swap would be a lot slower in writing data (a cached SSD with a garbage collector would be a bit better though, so don't worry)
- PS4 Phat and Slim are limited to SATA-II, which is 3Gbps in speed (roughly 375MB/s), which people online say it's not enough (it's enough for a PS4). On the other hand, the PS4 Pro runs at SATA-III, which is 6Gbps (up to 750MB/s), so that can saturate every SATA SSD on the market.
	- External SSD, on my 500GB Samsung 870 EVO, is 350MB/s-ish. So you'd get the same performance as an internal drive (theoretically)

An internal SSD is going to be much faster and probably more reliable than a dangling USB drive, so it's recommended, just remember to get a good quality one as the PS4 doesn't support TRIM.
:::
## Preparing the installation
1. Boot your PS4 and launch GoldHen.
2. Take the initramfs.zip file, open it, and choose your installation method (mind the Southbridge)
	- Put it somewhere like on your desktop as we'll need it
3. Choose your kernel of choice
4. Choose your distro and and rename it `psxitarch.tar.xz/gz` depending on the original file type

## Choosing a method of installation 
> [!WARNING]
> Choose ONLY ONE method of installation.
> 
> Installing on both the internal and external drives can cause problems! Remove one of the previous installations if you already have one!

Here you will choose a method of installation.

Again, choose only one method and stick with it, and remember that Baikal can't currently install to internal reliably.

::: tip Internal Installation (NOT FOR BAIKAL, you may loose data)
This method installs Linux on the internal PS4 HDD, by creating a small partition, as big as you want. It will not overwrite anything on the drive.

[Internal Installation section.](docs/it/internal-installation.md)
:::

::: tip External Installation
For external installation, there are two methods: the first one involving a script on the PS4 (faster to configure), and another one with manual partitioning (higher success rate).

The manual partitioning method is indeed preferred, but it involves the use of a Linux computer or virtual machine.
You may choose the scripted method, however if any issues arise you should try the manual partitioning method.

[Scripted External Installation.](docs/it/external-installation-scripted.md)

[Manual External Installation.](docs/it/external-installation-manual.md)
:::
