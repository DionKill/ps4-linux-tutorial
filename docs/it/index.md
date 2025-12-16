---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "PS4 Linux Tutorial"
  text: "Una semplice guida per installare Linux sui sistemi PS4"
  tagline: "di DionKill"
  image:
    src: hero.png
  actions:
    - theme: brand
      text: 🏁 Andiamo!
      link: /information
    - theme: alt
      text: 📹 Guida YT (Modded Warfare)
      link: https://www.youtube.com/watch?v=KW_lRyXQcb8
    - theme: alt
      text: 📖 Codice sorgente su GitHub
      link: https://github.com/DionKill/ps4-linux-tutorial/

features:
  - icon: 🧹
    title: Dai nuova vita alla tua PS4 impolverata!
    details: Scommetto che hai una PS4 ferma da qualche parte e non sai cosa farci. Anche dopo averla moddata, c'è davvero poco che la rende una console speciale. Ma puoi dargli una nuova vita, trasformandola in un PC Linux e giocare a giochi per PC!
  - icon: 💻
    title: Setup reso facile
    details: Questa guida spiegerà tutto passo passo, e non solo come installare, ma anche come gestire Linux in generale, e come renderlo un sistema operativo per tutti i giorni- perché si.
  - icon: 📖
    title: Una guida comprensibile, finalmente
    details: Le altre guide continuano a essere praticamente incomprensibili. Molte sono semplicemente incomplete o scritte male. Questa guida è stata scritta da zero semplicemente perché ero troppo incazzato da lasciare la situazione alla deriva.
---
## Prima di iniziare
Alcune domande di cui dovresti sapere le risposte prima di incominciare.

::: details Cosa è Linux?
Linux è un kernel, ma molti si riferiscono a tutta la flotta di distribuzioni che lo usano come base. In sostanza è la base di un sistema operativo. Per installare Linux, si intende di installare una distribuzione e, su PS4, trasformarla in un computer desktop, tra le altre cose.
:::

::: details È reversibile? Cancellerà tutti i giochi e i salvataggi?
Tutti i tuoi dati resteranno intatti. Che tu lo installi in un disco esterno o in quello interno alla console, manterrai tutti i tuoi dati, perché è necessario avviare il sistema operativo della PS4 prima di poter caricare Linux.

Il metodo di installazione che usa l'HDD interno della console, in realtà, crea un file (una partizione virtuale) grande quanto vuoi, quindi non potrà mai sovrascrivere i dati della console.
Invece, per il metodo usante dischi esterni, non verrà nemmeno effettuato l'accesso al disco interno.

TLDR: si è reversibile, non perderai nulla.
:::

::: details Quali sono le specifiche tecniche della PS4?
- AMD APU
	- 8 cores, x86-64 CPU @1.6GHz (Phat e Slim) or @2.1GHz (Pro) basate sull'architettura Jaguar
		- In teoria, è come due Athlon 5150 incollati
		- Performance simili a un i3-2120 in multicore, o un Pentium 4 in single core
	- AMD "Liverpool" (Phat/Slim) or "Gladius" (Pro) GPU
		- Performance simili a una AMD HD 7850 u una Nvdia GTX 750 Ti su Phat/Slim
		- Per la Pro, non si sa. Circa a GTX 1060.
- 8GB di memoria GDDR5
  - Nota la G, sta per Graphics. Non è DDR5 perché all'epoca non esisteva.
  - 256MB DDR3 aggiuntivi per "applicazioni in background" su Phat/Slim, sono 1GB DDR3 sulla Pro
:::

::: details Cosa significano in pratica?
Nel 2013 AMD stava per collassare perché faceva processori terribili, ed è stata miracolosamente salvata dal successo della PS4.

Questo significa che non solo la PS4 era lenta al lancio, ma che facendo anche uso di memoria GDDR5, di cui ci sono solo 8GB, peggiora la situazione per le performance desktop. La GDDR5 non è fatta per nulla che non sia lavori grafici, quindi anche se dispone di elevata banda (può trasportare molti dati) ha anche un'alta latenza (allocare e accedere alla memoria richiede molto tempo).
:::

Alla fine della fiera però, è abbastanza potente da utilizzarla non solo come PC, ma anche per giocare alcuni giochi moderni (salvo problemi di driver GPU).

Un altra cosa. Ci sono due metodi di installazione:
1. HDD interno
2. Disco esterno via USB

Se puoi, considera mettere una stella su GitHub o, se ci tieni ancor di più, aiuta la guida facendo PR o issue. Lo apprezzerei tantissimo!

## Piccolo bonus
[Come iniziò il tutto](https://www.youtube.com/watch?v=QMiubC6LdTA).
