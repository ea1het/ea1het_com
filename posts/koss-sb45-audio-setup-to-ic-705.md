# KOSS SB45 audio setup to IC-705

<div class="doc-meta">
<ul>
<li><strong>Published:</strong> 2025-05-18</li>
<li><strong>Last update:</strong> 2025-06-18</li>
<li><strong>Categories:</strong> Audio, English, Rigs</li>
</ul>
</div>

<p>Icom IC-705 alows distinct setups for RX and TX on SSB, FM and other modes. When you connect a new headset with microphone, like in my case the KOSS SB-45, it’s interesting to adjust the audio setup. Here are my details.</p>

<h2 id="physical-connection">Physical connection</h2>

<p>Icom IC-705 uses one 3.5mm TRS jack connector for the audio exit and one 2.5mm TRRS jack connector for the microphone input plus functions. I wanted to leverage this two connection jacks so I decided to create my own junction box. I prepared mine with two female 3.5 jacks for the KOSS SB-45 headset male connectors, one DIN connector with 6 pins and an RCA connector for the PTT/footswitch.</p>

<h3 id="why-this-was-necesary">Why this was necesary?</h3>

<p>It was necessary because many reasons:</p>

<p>If I wanted to use PTT while using a headset I was unable due to main connector was already used and SEND/ALC was not seen as an option.</p>

<p>Icom provides 3.3V or 8V (option selectable via rig menu) the 2.5mm TRRS jack connector but unfortunately the KOSS SB-45 provides 3.5mm TRS jack with tip and ring interconnected for increased computer sound card support, which is a problem from ham radio.</p>

<p>Headsets use an electret captuse and it requires 3.3V to operate but providing voltage from radio can be risky if now well isolated both parts.</p>

<figure><a href="/assets/images/20250518-016.jpg"><img loading="lazy" decoding="async" width="300" height="400" src="/assets/images/20250518-016.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-017.jpg"><img loading="lazy" decoding="async" width="300" height="400" src="/assets/images/20250518-017.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-018.jpg"><img loading="lazy" decoding="async" width="400" height="300" src="/assets/images/20250518-018.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-019.jpg"><img loading="lazy" decoding="async" width="300" height="400" src="/assets/images/20250518-019.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-020.jpg"><img loading="lazy" decoding="async" width="300" height="400" src="/assets/images/20250518-020.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-021.jpg"><img loading="lazy" decoding="async" width="300" height="400" src="/assets/images/20250518-021.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-022.jpg"><img loading="lazy" decoding="async" width="300" height="400" src="/assets/images/20250518-022.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-023.jpg"><img loading="lazy" decoding="async" width="300" height="400" src="/assets/images/20250518-023.jpg" alt="" /></a></figure>
</figure>

<p></p>

<h2 id="headset-mods">Headset mods</h2>

<p>In general all the electret headsets require similar adaptations to radio transceivers. While searching information for the KOSS SB-45 I came across <a href="https://www.fbnews.jp/202104/ww04/" target="_blank" rel="noreferrer noopener">a japanese colleague article on FBNews</a>, <a href="https://www.florian-wolters.de/posts/ic705-headset-adapter/" target="_blank" rel="noreferrer noopener">an adaptation for computer headsets documented by Florian, DF2ET</a>, and <a href="https://thehamlab.com/2021/12/27/icom-ic-705-speaker-mic-adapter-cable/" target="_blank" rel="noreferrer noopener">the adaptation cable created by Alex, KR1ST</a>, that showed the exact same issue I was having, in his/her case using a different headset. I reviewed the article and decided to build my junction box based no the concepts learnt from this colleague. A visual excerpt of all of those projects follows:</p>

<figure><a href="/assets/images/20250518-015.png"><img loading="lazy" decoding="async" width="380" height="300" src="/assets/images/20250518-015.png" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-001.jpg"><img loading="lazy" decoding="async" width="400" height="99" src="/assets/images/20250518-001.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-002.jpg"><img loading="lazy" decoding="async" width="400" height="215" src="/assets/images/20250518-002.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-003.jpg"><img loading="lazy" decoding="async" width="400" height="140" src="/assets/images/20250518-003.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-004.jpg"><img loading="lazy" decoding="async" width="400" height="114" src="/assets/images/20250518-004.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-012.jpg"><img loading="lazy" decoding="async" width="400" height="195" src="/assets/images/20250518-012.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-013.jpg"><img loading="lazy" decoding="async" width="400" height="269" src="/assets/images/20250518-013.jpg" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-014.jpg"><img loading="lazy" decoding="async" width="400" height="214" src="/assets/images/20250518-014.jpg" alt="" /></a></figure>
</figure>

<p></p>

<h2>Icom IC-705 TX SSB parametric EQ setup</h2>

<figure><a href="/assets/images/20250518-005.png"><img loading="lazy" decoding="async" width="400" height="275" src="/assets/images/20250518-005.png" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-006.png"><img loading="lazy" decoding="async" width="400" height="275" src="/assets/images/20250518-006.png" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-008.png"><img loading="lazy" decoding="async" width="400" height="275" src="/assets/images/20250518-008.png" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-007.png"><img loading="lazy" decoding="async" width="400" height="275" src="/assets/images/20250518-007.png" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-009.png"><img loading="lazy" decoding="async" width="400" height="275" src="/assets/images/20250518-009.png" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-010.png"><img loading="lazy" decoding="async" width="400" height="275" src="/assets/images/20250518-010.png" alt="" /></a></figure>

<figure><a href="/assets/images/20250518-011.png"><img loading="lazy" decoding="async" width="400" height="275" src="/assets/images/20250518-011.png" alt="" /></a></figure>
</figure>
