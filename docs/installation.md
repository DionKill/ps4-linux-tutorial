# Let'sa install!
Installing Linux on the PS4 is surprisingly easy, and it helps you free your mind from the hardships of everyday life.

Just kidding, it's fucking terrible.

But don't worry, cuz I've suffered before you (and still am by writing this absolute monstrosity of a guide) so that the only thing you have to do is follow my guide as I spoonfeed you with information.

> [!TIP]
> TL;DR:
> 
> Internal only for Aeolia/Belize, but not recommended.
> Every console supports external, which I recommend with an SSD via a SATA Adapter.

::: details Internal vs External: The Finale - GOTY Limited Edition
As I've mentioned beforehand, you can't install Linux on the internal PS4's HDD on Baikal systems. I know, you're crying your heart out because you wanted to use it, but trust me it's atrocious.
To give you an explanation, it took me 30 MINUTES to update my CachyOS installation (1500MBs) and the system was so unresponsive that I watched anime in between clicks.

Using an external SATA-USB adapter with a Samsung 870 EVO 500GB, the time it took shrinked to less than 5 minutes.

Therefore, let's clear some misinformation here:
- The PS4's internal HDD is a repurposed laptop 5400RPM drive. Please, for the love of GOD, do NOT use this. Even the PS4's own menus lag because of how slow it is.
- The PS4 internal drive uses UFS encryption so it slows down significantly.
- You CAN clone your PS4 HDD into an SSD, if internal installation is a must for you
- The PS4 doesn't support TRIM, so a possible internal SSD swap would be a lot slower in writing data (a cached SSD with a garbage collector would be a bit better though, so don't worry)
- PS4 Phat and Slim are limited to SATA-II, which is 3Gbps in speed (roughly 375MB/s), which people online say it's not enough (it's enough for a PS4). On the other hand, the PS4 Pro runs at SATA-III, which is 6Gbps (up to 750MB/s), so that can saturate every SATA SSD on the market.
	- External SSD, on my 500GB Samsung 870 EVO, is 350MB/s-ish. So you'd get the same performance as an internal drive (theoretically)

Again, internal SSD swap hasn't been tested, so your mileage may vary if you wanna go that route. If you have info on that, let me know.
:::
## Anyways, here we go: (queue dream's speedrunning music)
1. Boot your PS4 and launch GoldHen.
2. Take the initramfs.zip file, open it, and choose your installation method (mind the Southbridge).
	- Put it somewhere like on your desktop as we'll need it
3. Choose your kernel of choice.
4. Choose your distro and and rename it `psxitarch.tar.xz/gz` depending on the original file type

### Choosing a method of installation
> [!WARNING]
> Choose ONLY ONE method of installation.
> 
> Installing on the internal and external drives can cause problems! Remove the files or the drives before changing!

Now the fun part, copying the files to wherever you want to install your distro.
There are three routes:
1. The internal drive
2. External Drive method that might work if you have an expensive (more than 15$ or € or $ or whatever) "USB to SATA" adapter
3. External Drive method that works on every adapter and USB device (even pendrives), **which I recommend for external installation**, as it works even with OS packages bigger than 4GiB.

### Internal HDD installation
> [!CAUTION]
> This shit is slow. Be careful and prepare your balls for imminent explosion.

::: details Internal HDD
#### Internal HDD installation
Check your PS4 storage, as you'll need to choose the size of the installation. Leave some free space in your console, and remember that the PS4 doesn't report the space taken internally by Linux!

FTP to your PS4. Go to the `/data/` folder, and create the folder `/boot/linux/` and place your bzImage (and bootargs.txt if you have it) and initramfs in there.

<img src="/screenshots/internal-drive-conf.png" width="50%">

Then, go to `/user/system/`, create a folder called boot, and paste your distro in there. Remember that it needs to be called `psxitarch.tar.gz or xz`!

When installed, you can remove your Linux installation by removing the above files, and the "linux.img" found in `/user/home/` folder. Just in case you realize I was correct.
:::
### External Drive installation methods
> [!WARNING]
> IF you choose the external drive route, remember we'll format the drive!
> Back up any existing data you care about.

::: details External Drive - Method 1
#### Method 1 - using the install script
Put the kernel (bzImage, and the bootargs if you need it), initramfs (initramfs.cpio.gz), and your distro `psxitarch.tar.xz/gz` on the root of a FAT32 formatted drive, like so:

<img src="/screenshots/external-drive-conf.png" width="75%">

---
##### Manual format for big drives
If the drive is larger than 32GB, Windows will dastardly act like it can't format it in FAT32, but only in NTFS or ExFAT, which is just wrong, as FAT32 supports up to 2TB drives.
To fix it, go ahead and download the mythical [Rufus](https://rufus.ie) program.

- Select "List USB Hard Drives"
- Select "Non bootable" as a type of format
- Select "MBR" as partition scheme
- Select "FAT32" as filesystem

Click start and wait.
Once done, place the files on the drive.
Plug your drive on the PS4 and continue.

<img src="/screenshots/rufus-format.png" width="50%">

:::

::: details External Drive - Method 2 (recommended)
#### Method 2 - Manual partitioning
Get a Linux PC or VM (even a Live ISO works), or any program that can format drives in Linux's formats.

Then, plug in your drive, and use "GParted", "KDE Partition Manager", or "Aoemi Partition Assistant" on Windows to format your external drive like so:
- 50MB of FAT32 at the start of the drive <u>with an empty label</u>
- And a partition of the remaining space formatted as EXT4 <u>labeled "psxitarch"</u>

Now move your bzImage (and bootargs if you need it) and initramfs to the FAT32 partition, and untar your distro of choice at the root of the bigger EXT4 partition

You're done! Plug your drive in the PS4, and go to the next step!
:::

## Launching Linux Rescue Shell
After that, either launch your payload with Payload Guest, or use a payload website to load them.
### Website payloads
<img src="/screenshots/ps4boot-payloads.png" width="75%">

Change your target firmware (in the picture I'm using firmware 11.50). If it doesn't have any particularly append, it's for both Aeolia and Belize.

Do NOT use Pro payloads on non-Pro consoles.

- [ps4boot.github.io](https://ps4boot.github.io/) (5.05/6.72/9.60) (Webkit method)
- [ps4boot.free.nf/index.html](http://ps4boot.free.nf/index.html) (5.05-12.02) (GoldHEN method, works only with HTTP not HTTPS)



> [!WARNING]
> Use a 1GB VRAM payload for installation and first boot.
> 
> Afterwards, 2GB is recommended.

> [!TIP]
> I cannot believe I have to say this, but remember that the amount of VRAM you allocate is taken from your system memory!
> 
> For example, for a 2GB of VRAM payload, you'd have 8-2 = 6GB of remaining system RAM!
> You aren't creating memory out of thin air!

### Local payloads
If you so desire, it's possible to load these payloads locally (I personally do).

In order to do that, go [download them from the ps4boot repositories](https://github.com/ps4boot/ps4-linux-payloads):
- Install "Payload Loader" on your PS4 to load the payloads locally
- Extract from the ELF folders, and rename the file to have a `.bin` extension instead of `.elf`, because Payload Loader can't load ELFs
	- Enable "see file extensions" on Windows Explorer or what you're using
	- If it doesn't have any particularly append, it's for both Aeolia and Belize
- Remember to check sometimes to see if there's any updates
## Installation commands
Now that the storage is covered, here comes the moment of truth. You'll be sent to the Rescue Shell.

If you get an error, go to the [Installation issues section](issues#installation-issues).

::: details Internal HDD
- Type `linux-hdd-install.sh`
- Type how much storage you want to use for the installation (check how much free space you have, don't fill up your drive as the PS4 won't report it!)
	- If it fails, go to the [Installation Issues](issues.md#installation-issues)

:::

::: details External Drive - Method 1
- Type `install-psxitarch.sh`
	- If it fails, go to the [Installation Issues](issues.md#installation-issues)

:::

::: details External Drive - Method 2
You should already boot into the desktop. If for some reason it doesn't work for you, run the following commands (thanks @gryoza on Discord and @bene4k on Reddit for this):
```bash
mount /dev/sdb2 /newroot
exec chroot
```

And that should do it. If you have more issues, check the [Installation Issues](issues.md#installation-issues).
:::

Hydrate yourself while you wait. It'll take a while.

Once it's done (or if you used Method 2) you'll be sent to the Linux desktop! If you didn't, just type resume-boot until it works.

## Finale
Go now, conquer the finale. Also, watch the post-credit scenes.