# Key information
In questo tutorial *molto professionale*, andremo a vedere come installare Linux sulla tua console PS4.

Questa guida è stata creata originariamente perché quella di PS4Linux.com è tuttora troppo vecchia, difficile, incompleta e piena di pubblicità inutili. È stato aggiornato il sito recentemente ma non è cambiato nulla.

Ad ogni modo ci tengo a ringraziare noob404, perché questa guida è basata sul suo lavoro e non esisterebbe altrimenti.

::: details È reversibile? Perderò tutti i miei giochi vero? Bastardo, lo sapevo!!1!
Tutti i tuoi dati rimarranno intatti. Che tu lo installi sull'HDD interno o su un disco esterno, conserverai i tuoi dati perché prima devi avviare un payload ad ogni avvio della console.

Il metodo del disco interno crea, di fatto, un file grande quanto vuoi (che puoi cancellare ovviamente) che viene montato quando avvii Linux come un hard disk virtuale a sé stante, così non sovrascriverà i dati che hai sulla console. Per il metodo del disco esterno il tuo HDD non viene nemmeno toccato.

In breve: sì, è reversibile e no, non perderai alcun dato.
:::

::: details Quali console sono compatibili?
Tutte le console sono capaci di far girare Linux, affinché sono in grado di avviare un homebrew enabler (come GoldHEN o ps4hen).

In questo momento, la versione più recente compatibile è la 12.52.

Tuttavia, ogni console ha un southbridge diverso, e tra questi Baikal è il meno supportato ed è conosciuto per essere problematico. Dovresti comunque essere in grado di riuscire ad avere un sistema funzionante.
:::

## Video guida (opzionale)

> [!TIP]
> Se preferisci un video tutorial, c'è questo che consiglio di Modded Warfare (in inglese)
> 
> Com'è ovvio intuire, la guida è più aggiornata di questo video. Procedi con cautela.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KW_lRyXQcb8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Link importanti
Qui ci sono dei link molto utili che puoi visitare quando vuoi.
1. [PS4Linux.com](https://ps4linux.com)
2. [PS4Linux.com, Forums](https://ps4linux.com/forums/)
3. YouTube
	1. [Modded Warfare](https://www.youtube.com/@MODDEDWARFARE)
	2. [Noob404 (PS4Linux Forums)](https://www.youtube.com/channel/UC9pY5BDCjDLOC4j-zkHPu8A)
	3. [Qba](https://www.youtube.com/channel/UCU-eXjZ7Ud0k2wC_14mqdOw)
4. Discord
	1. [PS4Linux Forums' Discord](https://discord.com/invite/QtcPmzHVVm)
		1. Per aiuti generali
	2. [tux4orbis](https://discord.gg/jebUjgBu6T)
		1. Più per sviluppatori
	3. [PS4-LINUX](https://discord.gg/88ZrcmpJ) (di saya)
		1. In francese (si, lo so...)
5. Uno psicologo vicino a te, in caso questa guida fosse troppo complicata

## Avvisi prima di procedere

> [!CAUTION] 
> Leggi tutta la guida con attenzione per non commettere errori. È consigliato di leggerla prima per farti un'idea generale, così da avere un infarinatura generale, perché potrebbe essere complicata.
> 
> La guida è offerta "così com'è", senza garanzie di nessun tipo. Gli autori non si dichiarano responsabili se combini qualche disastro.

> [!TIP]
> Se ti piace questa guida, condividila, e ricorda di menzionare che le cose possono cambiare in futuro!

## Alla sezione revisioni e southbridge
Nella prossima sezione vedremo tutte le revisioni della console e i loro southbridge, e, in particolare, che difficoltà potresti avere in generale con ognuna di esse.