---
prev:
  text: 'Go back to Installation Methods'
  link: '/installation'
next:
  text: 'Ending'
  link: '/ending'
---

# Internal HDD Install with a Different File System

Here you'll set up the internal HDD for installation of a Linux distro. again?
> [!CAUTION]
> Baikal internal installation is still unstable. Proceed with caution and make backups beforehand.


> [!WARNING]
> This is slow on an HDD. Be careful and prepare your balls for imminent explosion.
>
> However, if you've swapped your internal HDD for an SSD, this doesn't apply.
## Pre-Setup

Follow the [Internal Installation](/internal-installation) guide. Instead of picking the size you want, pick **8GB** for the storage, as this is temporary.

## Setup

Once you're in the operating system, you will need to create a second `linux.img` file.

1. Mount the PS4 HDD:

   ```bash
   sudo mkdir -p /mnt && sudo mount /dev/mapper/ps4hdd /mnt
   ```

2. Create a second `linux.img` file (replace `125` with how much storage you want; `G` is required):

   ```bash
   sudo truncate -s 125G /mnt/home/linux2.img
   ```

3. Make it mountable:

   ```bash
   sudo losetup /dev/loop1 /mnt/home/linux2.img
   ```

Here, you have two paths:

1. [Btrfs](#btrfs) (recommended)
2. [Ext4](#ext4)

### Btrfs

1. Install the package required to format this file as Btrfs:

   ```bash
   sudo pacman -Sy btrfs-progs
   ```

2. Format the file as Btrfs:

   ```bash
   sudo mkfs.btrfs /dev/loop1
   ```

### Ext4

1. Format the file as Ext4:

   ```bash
   sudo mkfs.ext4 /dev/loop1
   ```

### Continue (both paths)

4. Mount the file:

   ```bash
   sudo mount /dev/loop1 /tmp
   ```

5. Flash the system onto the file (this will take a while, hydrate yourself):

   ```bash
   sudo tar -xvJpf /mnt/system/boot/psxitarch.tar.xz -C /tmp --numeric-owner
   ```

6. Reboot to Orbis, delete `/user/home/linux.img`, and rename `/user/home/linux2.img` to `/user/home/linux.img`.

7. Boot back into Linux.

## Finale

Go now, conquer the finale. Also, read the post-credit stuff.
