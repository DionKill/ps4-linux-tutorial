---
prev:
  text: 'Go back to Installation Methods'
  link: '/installation'
next:
  text: 'Ending'
  link: '/ending'
---

# Internal HDD installation
Set up the PS4 internal HDD to install a Linux distro.

> [!CAUTION]
> The current `initramfs-ps4` does not automatically boot internal installations on Baikal. Use an external installation on those systems. Back up your data before proceeding; the PS4 System Storage Checker may also delete `linux.img`.
>

> [!NOTE]
> Internal-drive access requires the payload loader to add `/key/eap_hdd_key.bin` to the initramfs. Without this key, `install-linux-int.sh` cannot open the internal drive.

> [!WARNING]
> Installation is slow on an HDD. This does not apply if you have replaced it with an SSD.

## Internal HDD setup
Check the available PS4 storage and choose an installation size. Leave free space: the PS4 **will** report the used size.

1. Connect to the PS4 over FTP. In `/data/`, create `/linux/boot/` and place the kernel (`bzImage`), initramfs, and optional `bootargs.txt` there.

> [!NOTE]
> FTP transfers can corrupt files, especially when overwriting them. If this happens, transfer the files with a USB drive instead. In FileZilla, select binary transfer mode.
>
> <img src="/screenshots/binary-mode.png" width="75%">

<img src="/screenshots/internal-drive-conf.png" width="50%">

2. In `/user/system/`, create a `boot` folder and place the distro archive there as `distro.tar.xz`.

> [!NOTE]
> With the old initramfs, name the archive `psxitarch.tar.gz` or `psxitarch.tar.xz`.

To remove Linux later, delete the boot files and distro archive above, plus `/user/app/linux.img`.


<!-- @include: /_includes/payloads.md -->

## Installation commands
At the Rescue Shell:

<img src="/screenshots/rescue-shell.png" width="80%">

1. Run `install-linux-int.sh`.

> [!NOTE]
> With the old initramfs, run `install-linux-hdd.sh` or `linux-install-hdd.sh` instead.

2. Enter the amount of storage to allocate. Leave free space on the drive; the PS4 reports only the space used inside the partition, not its total size. If installation fails, check the initramfs or see [Installation Issues](/issues#installation-issues).

<!-- @include: /_includes/resume-boot.md -->

<!-- @include: /_includes/resume-boot-warning.md -->
