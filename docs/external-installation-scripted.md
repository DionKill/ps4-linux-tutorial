---
prev:
  text: 'Go back to Installation Methods'
  link: '/installation'
next:
  text: 'Ending'
  link: '/ending'
---

# External Installation - Method 1 (using a script)

> [!WARNING]
> Remember we'll format the external drive!
> Back up any existing data you care about.

> [!TIP]
> If you have issues or just want to do manual partitioning (which often works better) try the [alternative installation here](external-installation-manual.md).
## Installation scripts
Put the kernel (bzImage, and the bootargs if you need it), initramfs (initramfs.cpio.gz), and your distro `psxitarch.tar.xz/gz` on the root of a FAT32 formatted drive, like so:

<img src="/screenshots/external-drive-conf.png" width="75%">

### Manual format for big drives
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

<!--@include: ./_includes/payloads.md-->
## Installation commands
Now that the storage is covered, here comes the moment of truth. You'll be sent to the Rescue Shell.

> [!TIP]
> If you get an error, go to the [Installation issues section](issues#installation-issues).
> 
> You may have to use the [alternative method](external-installation-manual.md).

- Type `install-psxitarch.sh`
	- If it fails, go to the [Installation Issues](issues.md#installation-issues)

Hydrate yourself while you wait. It'll take a while.

You should already boot into the desktop. If it doesn't, run
```bash
resume-boot
```

<!--@include: ./_includes/resume-boot-warning.md-->
## Finale
Go now, conquer the finale. Also, read the post-credit stuff.
