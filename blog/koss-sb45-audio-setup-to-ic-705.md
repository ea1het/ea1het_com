# KOSS SB45 audio setup to IC-705

- **Published:** 2025-05-18
- **Last update:** 2025-06-18
- **Categories:** Audio, English, Rigs

Icom IC-705 alows distinct setups for RX and TX on SSB, FM and other modes. When you connect a new headset with microphone, like in my case the KOSS SB-45, it’s interesting to adjust the audio setup. Here are my details.

## Physical connection

Icom IC-705 uses one 3.5mm TRS jack connector for the audio exit and one 2.5mm TRRS jack connector for the microphone input plus functions. I wanted to leverage this two connection jacks so I decided to create my own junction box. I prepared mine with two female 3.5 jacks for the KOSS SB-45 headset male connectors, one DIN connector with 6 pins and an RCA connector for the PTT/footswitch.

### Why this was necesary?

It was necessary because many reasons:

If I wanted to use PTT while using a headset I was unable due to main connector was already used and SEND/ALC was not seen as an option.

Icom provides 3.3V or 8V (option selectable via rig menu) the 2.5mm TRRS jack connector but unfortunately the KOSS SB-45 provides 3.5mm TRS jack with tip and ring interconnected for increased computer sound card support, which is a problem from ham radio.

Headsets use an electret captuse and it requires 3.3V to operate but providing voltage from radio can be risky if now well isolated both parts.

![](/assets/images/20250518-016.jpg)

![](/assets/images/20250518-017.jpg)

![](/assets/images/20250518-018.jpg)

![](/assets/images/20250518-019.jpg)

![](/assets/images/20250518-020.jpg)

![](/assets/images/20250518-021.jpg)

![](/assets/images/20250518-022.jpg)

![](/assets/images/20250518-023.jpg)

## Headset mods

In general all the electret headsets require similar adaptations to radio transceivers. While searching information for the KOSS SB-45 I came across [a japanese colleague article on FBNews](https://www.fbnews.jp/202104/ww04/), [an adaptation for computer headsets documented by Florian, DF2ET](https://www.florian-wolters.de/blog/ic705-headset-adapter/), and [the adaptation cable created by Alex, KR1ST](https://thehamlab.com/2021/12/27/icom-ic-705-speaker-mic-adapter-cable/), that showed the exact same issue I was having, in his/her case using a different headset. I reviewed the article and decided to build my junction box based no the concepts learnt from this colleague. A visual excerpt of all of those projects follows:

![](/assets/images/20250518-015.png)

![](/assets/images/20250518-001.jpg)

![](/assets/images/20250518-002.jpg)

![](/assets/images/20250518-003.jpg)

![](/assets/images/20250518-004.jpg)

![](/assets/images/20250518-012.jpg)

![](/assets/images/20250518-013.jpg)

![](/assets/images/20250518-014.jpg)

## Icom IC-705 TX SSB parametric EQ setup

![](/assets/images/20250518-005.png)

![](/assets/images/20250518-006.png)

![](/assets/images/20250518-008.png)

![](/assets/images/20250518-007.png)

![](/assets/images/20250518-009.png)

![](/assets/images/20250518-010.png)

![](/assets/images/20250518-011.png)
