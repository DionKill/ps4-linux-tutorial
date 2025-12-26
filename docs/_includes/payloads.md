## Launching Linux Rescue Shell
After that, either launch your payload with Payload Guest, or use a payload website to load them, if the website doesn't work for you.

> [!CAUTION]
> Firmware 12.50 and 12.52 users, click here!
### Payload website hosts
<img src="/screenshots/ps4boot-payloads.png" width="75%">

Change your target firmware (in the picture it's firmware 11.50). If it doesn't have any particularly append, it's for both Aeolia and Belize.

Do NOT use Pro payloads on non-Pro consoles.

- [ps4boot.github.io](https://ps4boot.github.io/) (5.05/6.72/9.60) (Webkit method)
- [ps4boot.free.nf](http://ps4boot.free.nfl) (5.05-12.02) (GoldHEN method, works only with HTTP not HTTPS)

> [!WARNING]
> You MUST use a 1GB VRAM payload for installation and first boot.
> 
> Afterwards, 2GB is recommended.

> [!TIP]
> I cannot believe I have to say this, but remember that the amount of VRAM you allocate is taken from your system memory!
> 
> For a 2GB of VRAM payload, you'd have 8-2 = 6GB of remaining system RAM!
> You aren't creating memory out of thin air!

### Local payloads
If you so desire, or you can't launch it from the web browser for some reason, it's possible to load these payloads locally.

In order to do that, you need to download them [here](https://github.com/ArabPixel/ps4-linux-payloads/releases/tag/v20) (using the fork, for 12.50+ support)

After downloading them:
- Install "Payload Loader" on your PS4 to load the payloads locally
- Extract from the ELF folders, and rename the file to have a `.bin` extension instead of `.elf`, because Payload Loader can't load ELFs
	- Enable "see file extensions" on Windows Explorer or what you're using
	- If it doesn't have any particularly append, it's for both Aeolia and Belize
- Put the files in the `/data/payloads/` directory
- Remember to check sometimes to see if there's any updates