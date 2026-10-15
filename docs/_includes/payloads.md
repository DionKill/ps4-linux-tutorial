## Launching Linux Rescue Shell
After that, either launch your payload with a payload website to load them, or use GoldHEN's built-in payloader if the website doesn't work for you.
> [!NOTE]
> You'll need to be using GoldHEN v2.4b18.10 or higher to use the built-in payloader. 
> Some users have reported that the payloads only work correctly when using the "Payload Guest" app.

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

::: details Firmware <Badge type="tip" text="5.05 - 13.52" />

> [!WARNING]
> You MUST select 1GB of VRAM or less for installation and first boot. Afterwards, 2GB is recommended.
> 
> Do not use GoldHEN version v2.4b18.8, [update it](https://ko-fi.com/s/407bb9c94a)!

Follow these steps:
- Go to [http://webkitty.arabpixel.net](http://webkitty.arabpixel.net) on your PS4's browser
- Scroll down with your right thumbstick, mouse, or keyboard
- Select Linux tab at the top right
	- Wait for the cache to finish installing!
- Load your desired payload
	- Again, 1GB or less is necessary for first time installation!
	- If you use the PS4 as a server after installation, switch to one of the server payloads for more system RAM.

<img src="/screenshots/webkitty-1.jpg" width="75%">
<img src="/screenshots/webkitty-2.jpg" width="75%">
:::

::: details Local payloads (if website doesn't work for you)
If you so desire, or you can't launch it from the web browser for some reason, it's possible to load these payloads locally.

In order to do that, you need to download them [here](https://github.com/ps4-linux/ps4-linux-loader/releases/latest).

#### Local payloads setup (GoldHEN payloader)
- Extract from the ELF folders
	- Using the `.elf` seems to lead to a higher success rate when launching
	- Enable "see file extensions" on Windows Explorer or what you're using
- Put the files in the `/data/payloads/` directory, create it if it does not exist
- Open the GoldHEN menu, then navigate to `Utilities>PayLoader>LaunchPad` and select your desired payload
- Remember to check here sometimes to see if there's any updates

#### Local payloads setup (Payload Guest)
- Install "Payload Guest" (or similar app) on your PS4
- Extract from the ELF folders, and rename the file to have a `.bin` extension instead of `.elf`, because Payload Guest can't load ELFs
	- Using the `.elf` seems to lead to a higher success rate when launching
	- Enable "see file extensions" on Windows Explorer or what you're using
- Put the files in the `/data/payloads/` directory, create it if it does not exist
- Open Payload Guest and select your desired payload (A controller is required, as Payload Guest does not accept keyboard input)
- Remember to check here sometimes to see if there's any updates

:::
