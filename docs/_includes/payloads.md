## Launching Linux Rescue Shell
After that, either launch your payload with Payload Guest, or use a payload website to load them.
### Payload website hosts
<img src="/screenshots/ps4boot-payloads.png" width="75%">

Change your target firmware (in the picture it's firmware 11.50). If it doesn't have any particularly append, it's for both Aeolia and Belize.

Do NOT use Pro payloads on non-Pro consoles.

- [ps4boot.github.io](https://ps4boot.github.io/) (5.05/6.72/9.60) (Webkit method)
- [ps4boot.free.nf](http://ps4boot.free.nfl) (5.05-12.02) (GoldHEN method, works only with HTTP not HTTPS)

> [!WARNING]
> Use a 1GB VRAM payload for installation and first boot.
> 
> Afterwards, 2GB is recommended.

> [!TIP]
> I cannot believe I have to say this, but remember that the amount of VRAM you allocate is taken from your system memory!
> 
> For example, for a 2GB of VRAM payload, you'd have 8-2 = 6GB of remaining system RAM!
> You aren't creating memory out of thin air!

### Local payloads
If you so desire, it's possible to load these payloads locally.

In order to do that, go [download them from the ps4boot repositories](https://github.com/ps4boot/ps4-linux-payloads):
- Install "Payload Loader" on your PS4 to load the payloads locally
- Extract from the ELF folders, and rename the file to have a `.bin` extension instead of `.elf`, because Payload Loader can't load ELFs
	- Enable "see file extensions" on Windows Explorer or what you're using
	- If it doesn't have any particularly append, it's for both Aeolia and Belize
- Remember to check sometimes to see if there's any updates