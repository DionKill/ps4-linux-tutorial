---
prev:
  text: 'Go back to Installation Methods'
  link: '/installation'
next:
  text: 'Ending'
  link: '/ending'
---

# External Installation - Method 2 (manual partitioning)
<!-- @include: /_includes/external-drive-format-warning.md -->


This method involves manual partitioning. It's slower to do, but works flawlessly, therefore it's recommended if you have issues.

Get a Linux PC or VM (even a Live ISO works), or any program that can format drives in Linux's formats.

Then, plug in your drive, and use "GParted", "KDE Partition Manager", or "Aoemi Partition Assistant" on Windows to format your external drive like so:
- 50MB of FAT32 at the start of the drive <u>with an empty label</u>
- And a partition of the remaining space formatted as EXT4 <u>labeled "psxitarch"</u>
	- BTRFS works too, but EXT4 is faster and recommended

Now move your bzImage (and bootargs if you need it) and initramfs to the FAT32 partition.

> [!NOTE]
> If you're using Windows and can't get the partitioning right using 3rd-party tools, you can use wsl.
> For resources on how to do so, check out [TheVorkMan's PS4 Linux notes](https://thevorkman.github.io/ps4-linux-notes/Guides/5.-Manual-external-install-on-Windows)

Then, you will need to untar your distro of choice at the root of the bigger EXT4 partition, using this command:
```bash
sudo tar -xvJpf ps4linux.tar.xz -C /run/media/YOURNAME/psxitarch --numeric-owner
```

> [!NOTE]
> Replace `YOURNAME` and `ps4linux.tar.xz` accordingly.
> Also, you need to check that the drive is actually called psxitarch, it'll be different if you didn't set it.

<!-- @include: /_includes/payloads.md -->
## Booting up
<!-- @include: /_includes/resume-boot.md -->

> [!NOTE]
> The current initramfs creates the standard mount-point directories under `/newroot` before handing off to the distro. If boot still stops at the rescue shell, see [Installation Issues](/issues) and use the exact error message to troubleshoot.

<!-- @include: /_includes/resume-boot-warning.md -->
