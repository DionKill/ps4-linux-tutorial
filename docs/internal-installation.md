---
prev:
  text: 'Go back to Installation Methods'
  link: '/installation'
next:
  text: 'Ending'
  link: '/ending'
---

# Internal HDD installation
Here you'll setup the internal HDD for installation of a Linux distro.

> [!CAUTION]
> Make sure you are NOT following this on a console with a Baikal southbridge.
> 
> If you proceed, either it won't boot, or you'll inevitably corrupt your whole drive and loose all your data!

> [!WARNING]
> This shit is slow on an HDD. Be careful and prepare your balls for imminent explosion.
> 
> However, if you have swapped your internal HDD for an SSD, this doesn't apply.

## Internal HDD setup
Check your PS4 storage, as you'll need to choose the size of the installation. Leave some free space in your console, and remember that the PS4 doesn't report the space taken internally by Linux!

FTP to your PS4. Go to the `/data/` folder, and create the folder `/linux/boot/` and place your bzImage (and bootargs.txt if you have it) and initramfs in there.

> [!NOTE]
> Files sent via FTP can transfer incorrectly, especially if overwritten. In that case, try to move them using a USB drive.

<img src="/screenshots/internal-drive-conf.png" width="50%">

Then, go to `/user/system/`, create a folder called `boot`, and paste your distro in there. Remember that it needs to be called `psxitarch.tar.gz` or `xz`!

When installed, you can remove your Linux installation by removing the above files, and the "linux.img" found in `/user/home/` folder. Just in case you realize I was correct.


<!-- @include: /_includes/payloads.md -->

## Installation commands
Now that the storage is covered, here comes the moment of truth. You'll be sent to the Rescue Shell, which will look like this:

<img src="/screenshots/rescue-shell.png" width="80%">

- Type `install-linux-hdd.sh` or `linux-install-hdd.sh`
- Type how much storage you want to use for the installation
	- Check how much free space you have, don't fill up your drive as the PS4 will only report the used amount of space inside the partition, and not the total partition size!
	- If it fails, check your initramfs, or go to the [Installation Issues](/issues#installation-issues)

Hydrate yourself while you wait. It'll take a while.

It should already boot into the desktop. If it doesn't, run:
```bash
resume-boot
```

<!-- @include: /_includes/resume-boot-warnings.md -->

## Finale
Go now, conquer the finale. Also, read the post-credit stuff.
