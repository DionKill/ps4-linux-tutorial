## Launching Linux Rescue Shell
After that, either launch your payload with a payload website to load them, or use "Payload Guest" app if the website doesn't work for you.

> [!TIP]
> <img src="/screenshots/trash-statement.png" width="50%">
> Remember that the amount of VRAM you allocate is taken from your system memory!
> For a 2GB of VRAM payload, you'd have 8-2 = 6GB of remaining system RAM!
> You aren't creating memory out of thin air!

> [!WARNING]
> You MUST use a 1GB VRAM payload for installation and first boot. Afterwards, 2GB is recommended.
### Payload website hosts

::: details Firmware 7.00-12.52
Follow these steps:
- Go to [psfree-enhanced.free.nf](http://psfree-enhanced.free.nf/)
- Select Linux tab at the top center
- Select your PS4 model and southbridge
- Load your desired payload
	- Again, 1GB is necessary for installation!

<img src="/screenshots/payload-1.jpg" width="75%">
<img src="/screenshots/payload-2.jpg" width="75%">
<img src="/screenshots/payload-3.jpg" width="75%">
:::

::: details Alternative website (FW 5.05+)
<img src="/screenshots/ps4boot-payloads.png" width="75%">

Even though this website is probably not maintained anymore it'll stay here, as the newer website doesn't work on low firmwares.
- [ps4boot.github.io](https://ps4boot.github.io/) (5.05/6.72/9.60) (Webkit method)
- [ps4boot.free.nf](http://ps4boot.free.nfl) (5.05-12.02) (GoldHEN method, works only with HTTP not HTTPS)
:::

If the website doesn't work, use the Payload Guest local method below.
### Local payloads
If you so desire, or you can't launch it from the web browser for some reason, it's possible to load these payloads locally.

In order to do that, you need to download them [here](https://github.com/ArabPixel/ps4-linux-payloads/releases/tag/v20).

After downloading them:
- Install "Payload Guest" on your PS4 to load the payloads locally
- Extract from the ELF folders, and rename the file to have a `.bin` extension instead of `.elf`, because Payload Loader can't load ELFs
	- Using the `.elf` seems to lead to a higher success rate when launching
	- Enable "see file extensions" on Windows Explorer or what you're using
	- If it doesn't have any particularly append, it's for both Aeolia and Belize
- Put the files in the `/data/payloads/` directory
- Remember to check here sometimes to see if there's any updates