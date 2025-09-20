---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "PS4 Linux Tutorial"
  text: "A simple guide on how to install Linux on PS4 systems"
  tagline: "by DionKill"
  image:
    src: hero.png
  actions:
    - theme: brand
      text: 🏁 Let's get it on!
      link: /overview
    - theme: alt
      text: 🔎 Or visit another guide
      link: https://ps4linux.com

features:
  - icon: 🧹
    title: Give a new purpose to your dusty PS4!
    details: I bet you have a PS4 laying around that you don't know what to do with. Even after modding it, there's very little that makes the PS4 a special console. But you can give it a new life with Linux, and run PC games on it!
  - icon: 💻
    title: Easy setup
    details: This guide will walk you through every step of the way and will explain to you not just how to install, but also to setup Linux in general, how to maintain it very easily and make it a usable everyday OS- because why not.
  - icon: 📖
    title: A comprehensive guide
    details: The other online guides keep on missing the point. A lot of them either lack information, or are simply bad documented. This guide is made from the ground up by pure rage because nobody has one that details everything.
  - icon: 🔽
    title: Downloads that stay
    details: For some reason, a lot of the people in the PS4 Linux community keep on hosting stuff on weird ass websites or temp links. Just why are you doing this?? Can't you host it on GitHub at least? I've decided to host some of the files i find myself and credit the authors. Please do not send a cease and desist letter.
---
## Before we start
Here are some questions you probably want to know the answer to if you are a novice on this stuff.

::: details What is Linux?
Linux is a kernel, though nowadays many refer to it as the whole fleet of operating systems using it. In layman's terms, think of it as the core of the OS. Installing Linux refers to installing a Linux distribution to use on your PS4 so that you can turn it into something like a desktop computer.
:::

::: details What are the PS4's specifications?
- "Liverpool" AMD APU based on the Jaguar architecture
	- 8 core, x86-64 CPU @1.6GHz (Phat and Slim) or @2.1GHz (Pro)
		- In theory, it's two Athlon 5150s duct taped together
		- Performance similar to an i3-2120 in multicore, or a Pentium 4 in single core
	- AMD "Gladius" GPU
		- Performance is comparable to an AMD HD 7850 or a Nvdia GTX 750 Ti
- 8GB of GDDR5 memory
	- Note the G, stands for Graphics. This isn't DDR5 as it wasn't invented in 2013.
:::

::: details What do these specs mean in practice?
Back in 2013 AMD was nearly about to collapse, because their processors were terrible. It was saved by the PS4's success.

This means that not only was the PS4 lacking a lot of CPU performance at launch, but it is also using GDDR5 memory, of which there's only 8GBs of. GDDR5 is not meant to do anything other than graphic workloads, so while it has a lot of bandwidth (it can move a lot of data at once) it has very high latency (getting to the location in memory takes a long time).
:::

In practice, the PS4 is totally capable of handling not only modern web browsing, but light PC gaming as well (with limitations of course, especially on the GPU drivers side).

Another thing. We have two methods of installation:
1. Internal HDD of the PS4
2. External Drive via USB

But some consoles don't support internal drives. This will addressed further into the guide.

## Little bonus
[How it all started](https://www.youtube.com/watch?v=QMiubC6LdTA).