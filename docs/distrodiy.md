# Port your own distro
If you don't trust people on the internet (and rightfully so), you may want to port a distro of your liking on the PS4. If everything goes according to plan, you should be able to port your own distro without too many problems.

> [!CAUTION]
> This section is work in progress. For now I haven't figured out how to properly compile the drivers. If anyone is willing to help out, shoot a message at the [tux4orbis'](https://discord.gg/jebUjgBu6T) Discord server; PRs are also welcome.

> [!WARNING]
> This is meant for advanced users ONLY.
> 
> Some things may not work properly. If you encounter issues, chat on the [Discords](revisions.md#important-places).

## Preamble - why is this necessary?
The community, as we've established before, is divided: there's the french (that nobody understands), there's people who want to work for real, but in the end none of them work together. So, even after almost 10 years, we still haven't seen these patches merged onto the original projects. Bruh.

## Requirements
In order to port a distro on the PS4, you will need the following:
- A distro of your choice
	- Don't go overboard with the ricing, remember that the GPU doesn't work fully
- A way to install said distro in a VM

### Drivers
To get the drivers, there's a couple of ways:
- On Arch based distros, there are precompiled packages that can be found at this pacman repo:
```bash
[ps4-video]
SigLevel = Optional
Server = https://centi07.github.io/repo/
```
Otherwise, it's possible to get them from the AUR. You just need to download the video-drivers-ps4 package, which will fail installing so you can go to the working directory of yay and install the packages manually by doing `sudo pacman -U *`. Actually nevermind I couldn't get it to work so ask in the tux4orbis discord...

- The `mesa-git`, `libdrm`, and `xf86-video-amdgpu` packages compiled with patches for the PS4, or compile them yourself
	- It is necessary to compile mesa in 32 bit too, for some games I guess?
- You can find patches [here](https://github.com/DionKill/ps4-linux-patches) (forked from FalsePhilosopher) to compile yourself
	- I haven't figured out how to compile these just yet... Better off using the ones from the AUR tbh
- You will still need to use a kernel of choice (download one or git clone the ones listed before) and use the initramfs (or make your own? if you manage please contact us on the tux4orbis discord)

Otherwise, on some Discords, you can find (possibly illegal?) personal forks for these drivers. Most of these are in french, so watch out.
## Porting
> [!TIP]
> From here on out is uncharted territory. Good luck.

Jokes aside, you would need to do something like so:
- Install your distro and possibly configure it to your liking
	- If you want to make it public... Please don't. Leave it with American English and move on. Don't put 90s renders of anime girls, we don't want them...

Uninstall the `mesa-git`, `libdrm`, and `xf86-video-amdgpu` packages, and install the ones that are required by the PS4.
To uninstall the mesa packages, use your package manager instructions. Do not remove the dependencies, as it could break your system. just remove `mesa` and `lib32-mesa`.
- DO NOT USE MESA 22 FFS, IF YOU DO YOU ARE LIKE ACTUALLY A MORON
- The PS4 does NOT support hardware video encoding. It's locked behind DRM.

::: details Package management config (if you don't want to update Mesa)
After that you need to add these packages to the ignore section so they can't be updated. On Arch based distros, change your pacman config, and add these packages to the ignore section:
```bash
sudo nano /etc/pacman.conf
```

Then, add this inside your pacman config:
```bash
IgnorePkg = lib32-mesa lib32-opencl-mesa ib32-vulkan-asahi lib32-vulkan-dzn lib32-vulkan-freedreno lib32-vulkan-gfxstream lib32-vulkan-intel lib32-vulkan-mesa-device-select lib32-vulkan-mesa-layers lib32-vulkan-nouveau lib32-vulkan-radeon lib32-vulkan-swrast lib32-vulkan-virtio mesa mesa-docs opencl-mesa vulkan-asahi vulkan-dzn vulkan-freedreno vulkan-gfxstream vulkan-intel vulkan-mesa-device-select vulkan-mesa-layers vulkan-nouveau vulkan-radeon vulkan-swrast vulkan-virtio lib32-vulkan-asahi  
IgnoreGroup = mesa
```
:::

After that, you can compress your installation and move it over to your PS4 for installation:
```bash
sudo tar -cvf ps4linux.tar.xz --exclude=/ps4linux.tar.xz --exclude=/var/cache --one-file-system / -I "xz -9"
```

Then move the file over to the PS4. And... Follow the guide again...?

## Ending
I know it's a rough tutorial, but I'm lacking time and experience on Linux to be able to write a better one. PRs are welcome.