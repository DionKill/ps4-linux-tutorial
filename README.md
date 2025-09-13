# PS4 LINUX INSTALLATION TUTORIAL

In this very professional tutorial, I'll go over how to install Linux on your PS4. I've made this because the PS4Linux.com website hasn't been updated in ages and their documentation is pretty bad (still, I appreciate their work). This tutorial focuses ONLY on modern versions of Linux. That's what people want, and that's also the tutorial that nobody wants to make. For older stuff, check out... the internet?

> [!NOTE]
> This tutorial is mainly meant to showcase newer methods that nobody is really talking about. If you break something, it's your fault.
> 
> All original sources are mentioned (maybe), none of this stuff is mine, I'm just reuploading for ease of use, do not send a cease and desist letter to my house, I'm just trying to help you guys out.
> 
> Thanks to all the amazing developers who work on the PS4.

# Quick Q&A
> [!TIP]
> For your average newbie questions, click down here

<details>
  <summary>Questions you probably have</summary>

## Questions
1. Oh my god! Linux? Eww!
	1. ???
2. What? Installing? I knew it. You are just a ragebaiter who wants to ERASE my precious PS4's HDD! How dare you!
	1. Erm actually... It doesn't. It creates a huge file that contains your whole installation (only for internal HDD installation). You can obviously still use your PS4 normally- also you need to boot to the "normal homescreen" aka OrbisOS to launch Linux.
	2. You can also use an external drive and it'll work wonders (DO NOT use a USB stick or HDD if you want to keep your sanity) and it won't take up space on your preciously dying hard drive :3
3. This shit doesn't work. You're a liar!
	1. Honestly I wish I could help you out. If the tutorial doesn't work, try asking for help on the [PS4Linux forums](ps4linux.com/forums/) or their Discord server.
4. How does it run?
    1. This is a good question. On an external SSD, it's really usable. Though the CPU is a huge limiting factor.
6. Can I play my PC games on Linux?
	1. Of course. That's the whole point of doing this, no?
	2. Not all games will run though. Set your expectations low.
7. But... How does it work?
	1. I have no idea. Judging by how the PS4 reacts, I'm assuming it gets tricked into going into sleep mode, and then resumes immediately which wakes up the console with it's OS erased from memory and only the Linux kernel loaded. This is just speculation though, because I like to spread misinformation on the internet and can't be bothered to do my homework. Oh, and I use arch btw (only on PS4).
8. I have encountered issues and want to help out. Can I make an issue so the guide can be updated?
	1. Yes! Please do not gatekeep information!

</details>

Done with the boring stuff, let's start with the real tutorial:

# Preparations
In order to install Linux on your PS4, we need some things:
1. A compatible, moddable PS4 (newest exploit is the BD-JB by Gezine, [available here](https://github.com/Gezine/BD-JB-1250))
	1. You need to know your PS4 Southbridge. To check that, after loading GoldHen, go into Settings > System > System Information and note the name. It can be:
		1. Aeolia (PS4 Phat)
		2. Belize/Belize2 or some other variant of this (Slim and Pro)
		3. Baikal (Newer Silms and Pros)
			1. Baikal systems can't install Linux on the internal HDD (more on that later)
2. The Linux files (downloads are further into the guide)
	1. bzImage (the kernel)
	2. initramfs.cpio.gz (Linux loader)
	3. A distro of your choice, already preinstalled and modified to work on the PS4
		1. You can also make your own. More on that later.
3. A device to install Linux to, either:
	1. Internal HDD (Baikal still unsupported, very slow)
	2. External HDD/SSD
4. A lot of patience and time!

## Other important stuff you might want to check out
1. [PS4Linux Website](ps4linux.com)
2. [PS4Linux Forums](ps4linux.com/forums/)
3. [PS4Linux Forums' Discord server]()
4. YouTubers
	1. [Modded Warfare](https://www.youtube.com/@MODDEDWARFARE)
	2. ???
5. Mental Health Institute of your choice (optional, if you feel overwhelmed)

# Getting the required files
Because getting this files is a complete and utter joke, I've decided that reuploading them myself is probably the better idea. I'll be reuploading this stuff on this GitHub. Again do not send a cease and desist letter to my house like the Maryo company.
## Kernel
Let's start with the kernels: they are very important as they have the software that controls all of the PS4's hardware. There's plenty of them, and I'll list them from newer to older:

>[!NOTE]
>In this small tutorial I'll be helping you to use this table. Do you see it? Great, read it! Download the one with your same Southbridge! If one doesn't work, skill issue.
>
>No, really, try another version.

| Kernel version | Download | Source code | Developer | Extra info                                                                                                       |
| -------------- | -------- | ----------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| 6.15           |          |             | ???       |                                                                                                                  |
| 5.15.25-rc1    |          | N/A         | saya      | Necessary for CachyOS. Multiple power LED colors supported. LTO. Includes the bootargs.txt.                      |
| 5.15.15        |          | N/A         | saya      | Multiple power LED colors supported. LTO.                                                                        |
| ???            |          |             |           | I'm too bored to add more.<br>[For now, check this.](https://ps4linux.com/downloads/#PS4_Linux_Kernel_Downloads) |

## Initramfs
This is the rescue shell that boots your Linux installer/installation. I'll be using one only, and it's going to be the one that was originally created for PSXITARCH, a distro based on Arch made by the PS3ITA Forums.
You can download it. If you feel like it. Oh, you do? Here it is.

## Distros (that you ACTUALLY wanna use)
Yes! Finally the time has come. Which one will you choose?
Honestly there's a neptillion distros. Most however, are very outdated, especially the ones on the PS4Linux's website.
So here I'm listing the ones that are actually new and I'd recommend you install:

| Distro                                        | Base | Developer         | Info                                                                                                                                            |
| --------------------------------------------- | ---- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CachyOS                                       | Arch | Elokuba           | "Final Fix". The distro is half polish, half english. But it works and is up to date. Uses KDE.                                                 |
| CachyOS                                       | Arch | Elokuba, DionKill | My version. It fixes language (mostly) and removes the anime girl backgrounds that I found particularly annoying to have on the living room TV. |
| Manjaro                                       | Arch | Elokuba           | A Manjaro KDE distro. Didn't try it, but I bet works well.                                                                                      |
| [JaguarLinux](https://github.com/Jaguarlinux) | None | TigerClips1       | A distro made from scratch for the PS4! Still in development, but worth mentioning.                                                             |

IF you choose the CachyOS installation, remember to use the specified kernel, and also use the bootargs.txt file. **Move it in the same folder the bzImage goes**.

>[!TIP]
>Want to add more distros? Make an issue and your wish shall be granted.
>
>Want to make your own? [Check this out!](https://ps4linux.com/make-ps4-linux-distro/)

## Payloads (if you want offline use)
[Download them from here](https://github.com/ps4boot/ps4-linux-payloads), and extract the one you want in your `data/payloads` folder. Remember to use the one that is for your Southbridge (you have understood that by now).
If it doesn't have any particularly append, it's for both Aeolia and Belize.

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

Anyways, here we go: (queue dream's speedrunning music)
1. Boot your PS4 and launch GoldHen. If you haven't modded your PS4, check out Modded Warfare on YouTube.
2. Take the initramfs.zip file, open it, and choose your version (mind the Southbridge).
	1. Put it somewhere like on your desktop as we'll need it
3. Choose your kernel of choice.
	1. For CachyOS, use the 5.15.25-rc1 version with the bootargs.txt.
4. Choose your distro and and rename it psxitarch.tar.** (xz or gz), seriously remember this is your distro

---

Now the fun part, copying the files to wherever you want to install your distro.
There are three routes: one is the internal drive, then one that might work if you have an expensive (more than 15$ or € or $ or whatever) "USB to SATA" adapter, and one that works on every adapter and USB device (even pendrives).

### Internal HDD installation
> [!CAUTION]
> This shit on the internal HDD is slow. Be careful and prepare your balls for imminent explosion.

<details>
	<summary>Internal HDD</summary>
	
## Internal HDD installation
FTP to your PS4. Go to the `/data/` folder, and create the folder `/boot/linux/` and place your bzImage and initramfs in there.
Then, go to `/user/system/`, create a folder called boot, and paste your distro in there.

When installed, you can remove your Linux installation by removing the above files, and the "linux.img" found in `/user/home/` folder. Just in case you realize I was correct.

</details>

### External Drive installation methods
> [!WARNING]
> IF you choose the external drive route, remember we'll format the drive! Back up any existing data you care about.

<details>
	<summary>External Drive - Method 1</summary>

### External Drive - Method 1
Put the kernel (bzImage), initramfs (initramfs.cpio.gz), and your distro (psxitarch.tar.**) on the root of a FAT32 formatted drive.

If the drive is larger than 32GB, Windows will dastardly act like it can't format it in FAT32, but only in NTFS or ExFAT, which is just wrong, as FAT32 supports up to 2TB drives.
To fix it, go ahead and download the mythical [Rufus](rufus.ie) program. Select "Show USB devices" or something like that, and then select "No boot" as a type of format, followed by "MBR" as partition scheme and "FAT32" as filesystem. Click start and wait.

Once done, place the three files on the drive.
Plug your drive on the PS4 and move over to the next step.

</details>
<details>
	<summary>External Drive - Method 2</summary>
	
### Method 2 (recommended)
Get a Linux PC or VM (even a live iso works), plug in your drive, and use GParted or KDE Partition Manager to format your external drive like so:
- 50MB of FAT32 at the start of the drive (for bzImage and initramfs)
- The rest of the drive as EXT4, specifically with a label called "psxitarch"

Now move your bzImage and initramfs to the FAT32 partition, and untar your distro of choice at the root of the bigger EXT4 partition

You're done! Plug your drive in the PS4, and go to the next step!

</details>

After that, either launch your payload with Payload Guest, or use a payload website, such as:
- [PS4boot.github.io](https://ps4boot.github.io/) (5.05-6.72)
- [PS4boot.duckdns.org/pppwn/](https://ps4boot.duckdns.org/pppwn/) (9.00-12.02)

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

# Ending
Done! Enjoy Linux on your PS4! Please share this guide if it was helpful! For any questions, 
