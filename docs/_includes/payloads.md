## Launching Linux Rescue Shell
After that, either launch your payload with a payload website to load them, or use "Payload Guest" app if the website doesn't work for you.

> [!TIP]
> Remember that the amount of VRAM you allocate is taken from your system memory!
> For a 2GB of VRAM payload, you'd have 8-2 = 6GB of remaining system RAM!
> You aren't creating memory out of thin air!
> 
> <img src="/screenshots/trash-statement.png" width="33%">

::: details For servers
Server payloads are available in `32MB`, `64MB`, and `128MB` VRAM variants.
Use `128MB` by default for server or general headless use, as `32MB` and `64MB` can cause display issues on some setups.
:::
### Payload website hosts

::: details Firmware <Badge type="tip" text="5.05 - 13.02" />

> [!WARNING]
> You MUST use a 1GB VRAM payload for installation and first boot. Afterwards, 2GB is recommended.
> 
> Do not use GoldHEN version v2.4b18.8, [update it](https://ko-fi.com/s/407bb9c94a)!

Follow these steps:
- Go to [arabpixel.github.io/PSFree-Enhanced](https://arabpixel.github.io/PSFree-Enhance) on your PS4's browser
- Select Linux tab at the top center
	- Wait for the cache to finish installing!
- Load your desired payload
	- Again, 1GB is necessary for first time installation!
	- If you use the PS4 as a server after installation, switch to one of the server payloads for more system RAM.

<img src="/screenshots/psfree-payloads.jpg" width="75%">
:::

::: details Local payloads (if website doesn't work for you)
If you so desire, or you can't launch it from the web browser for some reason, it's possible to load these payloads locally.

In order to do that, you need to download them [here](https://github.com/ps4-linux/ps4-linux-loader/releases/latest).

#### Local payloads setup
- Install "Payload Guest" or similar app on your PS4 to load the payloads locally
- Extract from the ELF folders, and rename the file to have a `.bin` extension instead of `.elf`, because Payload Loader can't load ELFs
	- Using the `.elf` seems to lead to a higher success rate when launching
	- Enable "see file extensions" on Windows Explorer or what you're using
- Put the files in the `/data/payloads/` directory
- Remember to check here sometimes to see if there's any updates

:::