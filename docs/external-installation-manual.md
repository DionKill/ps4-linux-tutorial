---
prev:
  text: 'Go back to Installation Methods'
  link: '/installation'
next:
  text: 'Ending'
  link: '/ending'
---

# External Installation - Method 2 (manual partitioning)
> [!WARNING]
> Remember we'll format the external drive!
> Back up any existing data you care about.


This method involves manual partitioning. It's slower to do, but works flawlessly, therefore it's recommended if you have issues.

Get a Linux PC or VM (even a Live ISO works), or any program that can format drives in Linux's formats.

Then, plug in your drive, and use "GParted", "KDE Partition Manager", or "Aoemi Partition Assistant" on Windows to format your external drive like so:
- 50MB of FAT32 at the start of the drive <u>with an empty label</u>
- And a partition of the remaining space formatted as EXT4 <u>labeled "psxitarch"</u>
	- BTRFS works too, but EXT4 is faster and recommended

Now move your bzImage (and bootargs if you need it) and initramfs to the FAT32 partition.

Then, you will need to untar your distro of choice at the root of the bigger EXT4 partition, using this command:
```bash
sudo tar -xvJpf ps4linux.tar.xz -C /run/media/YOURNAME/psxitarch --numeric-owner
```

Replace `YOURNAME` and `ps4linux.tar.xz` accordingly.

<!--@include: ./_includes/payloads.md-->
## Booting up
Now that the storage is covered, here comes the moment of truth. You'll be sent to the Rescue Shell.

> [!TIP]
> If you get an error, go to the [Installation issues section](issues#installation-issues).

You should already boot into the desktop. If it doesn't, run
```bash
resume-boot
```

<!--@include: ./_includes/resume-boot-warning.md-->

::: details If it doesn't work check this!
If for some reason it doesn't work for you, run the following commands (thanks @gryoza on Discord and @bene4k on Reddit for this):
```bash
mount /dev/sdb2 /newroot
exec chroot
```
You may need to do this at every reboot.
:::
## Finale
Go now, conquer the finale. Also, read the post-credit stuff.
