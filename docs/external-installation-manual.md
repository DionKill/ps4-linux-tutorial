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
Now that the storage is covered, here comes the moment of truth. It should already boot into the desktop. If it doesn't, and instead shows a Rescue Shell command prompt, type this until the distro starts:
```bash
resume-boot
```

::: details If it doesn't work check this!
If for some reason it doesn't work for you, run the following commands (thanks @gryoza on Discord and @bene4k on Reddit for this):
```bash
mount /dev/sdb2 /newroot
exec chroot
```
You may need to do this at every reboot.

If the error you're getting is:
`mount: mounting /dev on /newroot/dev failed: No such file or directory`
Then the distro archive you used during the previous steps excluded some directories needed by the initramfs.
It's easy to create the needed directories (and all the others excluded during the process of making the archive) with these commands:
```bash
mkdir /newroot/dev
mkdir /newroot/media
mkdir /newroot/mnt
mkdir /newroot/proc
mkdir /newroot/run
mkdir /newroot/sys
mkdir /newroot/tmp
mkdir /newroot/var/cache
mkdir /newroot/var/log
mkdir /newroot/var/tmp
```
Now that you've made the necessary directories, `resume-boot` should function as normal. You may also simply press `ctrl+alt+del` to reboot the console, then run the linux payload again.
:::

<!-- @include: /_includes/resume-boot-warning.md -->

## Finale
Go now, conquer the finale. Also, read the post-credit stuff.
