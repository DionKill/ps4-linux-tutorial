## Launching Linux Rescue Shell
After that, either launch your payload with a payload website to load them, or use GoldHEN's built-in payloader if the website doesn't work for you (GoldHEN v2.4b18.10).

> [!WARNING]
> Do not use GoldHEN version v2.4b18.8, [update it](https://ko-fi.com/s/407bb9c94a)!

> [!TIP]
> Remember that the amount of VRAM you allocate is taken from your system memory!
> For a 2GB of VRAM payload, you'd have 8-2 = 6GB of remaining system RAM!
> You aren't creating memory out of thin air!
> 
> <img src="/screenshots/trash-statement.png" width="33%">

::: details For servers
Server payloads are available in `32MB`, `64MB`, `128MB`, `256MB` and `512MB` VRAM variants.
Use `128MB` by default for server or general headless use, as `32MB` and `64MB` can cause display issues on some setups.
:::
### Payload website hosts

::: details Firmware <Badge type="tip" text="5.05 - 14.02" />

Follow these steps:
- Go to [http://webkitty.arabpixel.net](http://webkitty.arabpixel.net) on your PS4's browser
- Scroll down with your right thumbstick, mouse, or keyboard
- Select Linux tab at the top right
	- Wait for the cache to finish installing!
- Load your desired payload
	- If you use the PS4 as a server after installation, switch to one of the server payloads for more system RAM.

<img src="/screenshots/webkitty-1.jpg" width="75%">
<img src="/screenshots/webkitty-2.jpg" width="75%">
:::

::: details Local payloads (if website doesn't work for you)
If you so desire, or you can't launch it from the web browser for some reason, it's possible to load these payloads locally.

In order to do that, you need to download them [here](https://github.com/ArabPixel/WebKitty/tree/main/includes/payloads/Linux). Alternatively you can get the source code [here](https://github.com/ArabPixel/ps4-linux-loader) and build payloads yourself.

#### Local payloads setup (GoldHEN payloader)
- Extract from the ELF folders
	- Using the `.elf` seems to lead to a higher success rate when launching
	- Enable "see file extensions" on Windows Explorer or what you're using
- Put the files in the `/data/payloads/` directory, create it if it does not exist
- Open the GoldHEN menu, then navigate to `Utilities>PayLoader>LaunchPad` and select your desired payload
- Remember to check here sometimes to see if there's any updates

#### Local payloads setup (Payload Guest)
- Install "Payload Guest" (or similar app) on your PS4
- Take the files from the `bin` folder, because Payload Guest can't load ELFs
	- Don't rename an `.elf` to `.bin`, the file stays an ELF and won't load
	- Enable "see file extensions" on Windows Explorer or what you're using
- Put the files in the `/data/payloads/` directory, create it if it does not exist
- Open Payload Guest and select your desired payload (A controller is required, as Payload Guest does not accept keyboard input)
- Remember to check here sometimes to see if there's any updates

:::
