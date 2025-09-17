# Let'sa install!
Installing Linux on the PS4 is surprisingly easy, and it helps you free your mind from the hardships of everyday life.
Just kidding, it's fucking terrible.

But don't worry, cuz I've suffered before you (and still am by writing this absolute monstrosity of a guide) so that the only thing you have to do is follow my guide as I spoonfeed you with information.

I'd recommend reading the following:
<details>
	<summary>Useful information about Internal/External installation</summary>

## Information
As I've mentioned beforehand, you can't install Linux on the internal PS4's HDD on Baikal systems. I know, you're crying your heart out because you wanted to use it, but trust me it's atrocious.
To give you an explanation, it took me 30 MINUTES to update my CachyOS installation (500MBs) and the system was so unresponsive that I watched anime in between clicks.

Therefore, I want to clear some misinformation here:
1. The PS4's internal HDD is a repurposed laptop 5400RPM drive. Please, for the love of GOD, do NOT use this. Even the PS4's own menus lag because of how slow it is.
2. The PS4 internal drive uses UFS encryption so it slows down significantly.
3. You CAN clone your PS4 HDD into an SSD, if internal installation is a must for you
4. The PS4 doesn't support TRIM, so a possible internal SSD swap would be a lot slower in writing data (a cached SSD with a garbage collector would be a bit better though, so don't worry)
5. PS4 Phat and Slim are limited to SATA-II, which is 3Gbps in speed (roughly 375MB/s), which people online say it's not enough (it's enough for a PS4). On the other hand, the PS4 Pro runs at SATA-III, which is 6Gbps (up to 750MB/s), so that can saturate every SATA SSD on the market.
	1. External SSD, on my 500GB Samsung 870 EVO, is 350MB/s-ish. So you'd get the same performance as an internal drive (theoretically)

Again I haven't tried with an internal SSD swap, so your mileage may vary if you wanna go that route. If you have info on that, let me know.

</details>

TLDR: for Internal only Aeolia/Belize. Every console supports external.

### Anyways, here we go: (queue dream's speedrunning music)
1. Boot your PS4 and launch GoldHen. If you haven't modded your PS4, check out Modded Warfare on YouTube.
2. Take the initramfs.zip file, open it, and choose your version (mind the Southbridge).
	1. Put it somewhere like on your desktop as we'll need it
3. Choose your kernel of choice.
	1. For CachyOS, use the 5.15.25-rc1 version with the bootargs.txt.
4. Choose your distro and and rename it psxitarch.tar.** (xz or gz), seriously remember this is your distro

### Choosing a method of installation
Now the fun part, copying the files to wherever you want to install your distro.
There are three routes:
1. The internal drive,
2. One that might work if you have an expensive (more than 15$ or € or $ or whatever) "USB to SATA" adapter
3. One that works on every adapter and USB device (even pendrives), **which I recommend for external installation**, as it works even with OS packages bigger than 4GiB.

### Internal HDD installation
> [!CAUTION]
> This shit is slow. Be careful and prepare your balls for imminent explosion.

<details>
	<summary>Internal HDD</summary>
	
#### Internal HDD installation
FTP to your PS4. Go to the `/data/` folder, and create the folder `/boot/linux/` and place your bzImage and initramfs in there.
Then, go to `/user/system/`, create a folder called boot, and paste your distro in there.

When installed, you can remove your Linux installation by removing the above files, and the "linux.img" found in `/user/home/` folder. Just in case you realize I was correct.

</details>

### External Drive installation methods
> [!WARNING]
> IF you choose the external drive route, remember we'll format the drive!
> Back up any existing data you care about.

<details>
	<summary>External Drive - Method 1</summary>

#### External Drive - Method 1
Put the kernel (bzImage), initramfs (initramfs.cpio.gz), and your distro (psxitarch.tar.**) on the root of a FAT32 formatted drive.

If the drive is larger than 32GB, Windows will dastardly act like it can't format it in FAT32, but only in NTFS or ExFAT, which is just wrong, as FAT32 supports up to 2TB drives.
To fix it, go ahead and download the mythical [Rufus](https://rufus.ie) program. Select "Show USB devices" or something like that, and then select "No boot" as a type of format, followed by "MBR" as partition scheme and "FAT32" as filesystem. Click start and wait.

Once done, place the files on the drive.
Plug your drive on the PS4 and move over to the next step.

</details>
<details>
	<summary>External Drive - Method 2 (recommended)</summary>
	
#### External Drive - Method 2
Get a Linux PC or VM (even a live iso works), plug in your drive, and use GParted or KDE Partition Manager to format your external drive like so:
- 50MB of FAT32 at the start of the drive (for bzImage and initramfs)
- The rest of the drive as EXT4, specifically with a label called "psxitarch"

Now move your bzImage and initramfs to the FAT32 partition, and untar your distro of choice at the root of the bigger EXT4 partition

You're done! Plug your drive in the PS4, and go to the next step!

</details>

### Launching Linux Rescue Shell

After that, either launch your payload with Payload Guest, or use a payload website, such as:
- [ps4boot.github.io](https://ps4boot.github.io/) (5.05/6.72/9.60) (Webkit method)
- [ps4boot.free.nf/index.html](http://ps4boot.free.nf/index.html) (5.05-12.02) (GoldHEN method, works only with HTTP not HTTPS)

Okay, the shitty part is over. Now comes the easy stuff. You'll be sent to the Rescue Shell, and all you need to do is:
- Internal HDD
	- Type "linux-hdd-install.sh"
	- Type how much storage you want to use for the installation (check how much free space you have, don't fill up your drive as the PS4 won't report it!)
- External Drive - Method 1
	- Type "psxitarch-install.sh"
		- If it fails, (doesn't recognize the drive or something else) use Method 2
- External Drive - Method 2
	- It's already installed! You'll boot right into the desktop!

Hydrate yourself while you wait. It'll take a while.

Once it's done (or if you used Method 2) you'll be sent to the Linux desktop! If you didn't, just type resume-boot until it works.
