# Overview
> [!WARNING]
> This guide is still a work in progress. Things are subject to change.
> 
> It is expected you know at least a minimum about Linux to procede.
> 
> You should be able to get a working Linux installation, though mind the possible writing mistakes.

In this very professional tutorial, I'll go over how to install Linux on your PS4. I've made this because the PS4Linux.com website hasn't been updated in ages and their documentation is pretty bad (still, I appreciate their work, this guide is heavily inspired by it).

This tutorial focuses ONLY on modern versions of Linux.
# QNA
Here are some questions you probably want to know the answer to if you are a novice on this stuff.

::: details What is Linux?
Linux is a kernel, though nowadays many refer to it as the whole fleet of operating systems using it. In layman's terms, think of it as the core of the OS. Installing Linux refers to installing a Linux distribution to use on your PS4 so that you can turn it into something like a desktop computer.
:::

::: details What are the PS4's specifications?
The PS4 is a very old video game console, on top of that it wasn't really made to be used as an every day computer.

Here's the technical specifications of the PS4:
- 8 core "Jaguar" AMD APU
	- x86_64 CPU @1.6GHz (Phat and Slim) or @2.1GHz (Pro)
		- Similar to two Athlon 5150s duct taped together
	- AMD GCN based GPU
		- Similar to an AMD HD 7850 or a Nvdia GTX 750 TI
- 8GB of GDDR5 RAM
	- Note the G, stands for Graphics. This isn't DDR5 as it wasn't even invented in 2013.
:::

::: details What do these specs mean in practice?
Now, back in 2013 AMD was nearly about to collapse, because their processors were terrible. It was saved by the PS4's success.

This means that not only was the PS4 lacking a lot of CPU performance at launch (and i mean A LOT), but it is also using GDDR5 memory, of which there's only 8GB of. GDDR5 is not meant to do anything other than graphic workloads, so while it has a lot of bandwidth (it can move a lot of data at once) it has very high latency (getting to the location in memory takes a long time).

i.e. we are working with very limited hardware. But this is just a theory, a game theory!
:::

In practice, the PS4 is totally capable of handling not only modern web browsing, but light modern PC gaming as well (with limitations of course, especially on the GPU drivers side).

The purpose of turning the PS4 into a Linux PC is to make it do whatever you please, even play modern PC games if you so desire.


# Important places
Here are some links you'll probably find useful. You can come back to them if needed.
1. [PS4Linux Website](https://ps4linux.com)
2. [PS4Linux Forums](https://ps4linux.com/forums/)
3. [PS4Linux Forums' Discord server](https://discord.com/invite/QtcPmzHVVm)
4. YouTube
	1. [Modded Warfare](https://www.youtube.com/@MODDEDWARFARE)
	2. [Noob404 (PS4Linux Forums)](https://www.youtube.com/channel/UC9pY5BDCjDLOC4j-zkHPu8A)
	3. [Qba](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw)
5. Mental Health Institute of your choice (optional, if you feel overwhelmed)

---
# Warning before you proceed

> [!CAUTION] 
> Read the guide carefully to avoid any mistakes.
> 
> This guide is offered as is, with no warranty whatsoever. I'm not responsible if you screw something up.


If you understood that correctly, we can continue over to the next step.