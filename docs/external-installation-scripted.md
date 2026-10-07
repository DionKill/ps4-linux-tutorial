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
> If you have issues or just want to do manual partitioning (which often works better) try the [alternative installation here](/external-installation-manual).
## Installation scripts
Put the kernel (bzImage, and the bootargs if you need it), initramfs (initramfs.cpio.gz), and your distro `distro.tar.xz` on the root of a FAT32 formatted drive, like so:

<img src="/screenshots/external-drive-conf.png" width="75%">

You will also need a separate drive for the Linux installation. This drive does not need to be formatted or partitioned beforehand, as the installation script will partition and format it automatically.

> [!WARNING]
> Make sure you select the correct installation drive. Everything on the selected installation drive will be erased.

<!-- @include: /_includes/payloads.md -->
## Installation commands
Now that the storage is covered, here comes the moment of truth. You'll be sent to the Rescue Shell, which will look like this:

<img src="/screenshots/rescue-shell.png" width="80%">

- If you have a disc in your console, remove it by running `eject /dev/sr0` or it'll corrupt the installation
- Connect both the FAT32 source drive containing the installation files and the separate installation drive.
- Type `install-linux-ext.sh`
	- If it fails, go to the [Installation Issues](/issues#installation-issues), or use the [alternative method](external-installation-manual).

The script will automatically look for the drive containing the installation files. If it cannot find it, it will ask you to select the source drive, then ask you to select the installation drive.

Hydrate yourself while you wait. It'll take a while.

After that is done, it should boot into the desktop. If it doesn't, run
```bash
resume-boot
```

<!-- @include: /_includes/resume-boot-warning.md -->
## Finale
Go now, conquer the finale. Also, read the post-credit stuff.
