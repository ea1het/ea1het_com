# My POTA antenna setups

<div class="doc-meta">
<ul>
<li><strong>Published:</strong> 2025-02-02</li>
<li><strong>Last update:</strong> 2025-06-18</li>
<li><strong>Categories:</strong> Antennas, English</li>
</ul>
</div>

<p>My POTA activities predominantly makes use of <em><a href="https://chameleonantenna.com/" target="_blank" rel="noreferrer noopener">Chamelon Antenna</a></em> equipment for quick deployment and operation nowadays. Nonetheless, I also use JPC-12 for certain operations. </p>

<p>While planing to go POTA, or even SOTA, several antenna related details should be clarified in advance, like the type of antenna to deploy based upon the bands to work on and/or the type of wiring to be carried.</p>

<p>I tried to make a quick resume of my research, that follows now. Please, be indulgent if you already tried this with better success than me, and share your knowledge if you want to. Thank you.</p>

<h2 id="wiring--sizes--awg-to-mm2"><strong>Wiring</strong> <strong>sizes</strong> (awg to mm2)</h2>

<ul>
<li>26 awg = 0.14 mm2</li>

<li>24 awg = 0.20 mm2</li>

<li>22 awg = 0.32 mm2</li>

<li>20 awg = 0.51 mm2</li>

<li>18 awg = 0.80 mm2</li>

<li>16 awg = 1.30 mm2</li>

<li>14 awg = 2.00 mm2</li>

<li>12 awg = 3.31 mm2</li>
</ul>

<h2 id="prefered-usage-resume-with-cha-ss25-whip">Prefered usage resume with CHA SS25 whip</h2>

<p>The 20m band mark a border where antennas behave so differently. Higher bands are easy to accomodate. Lower bands are difficult to satisfy.</p>

<figure><table><thead><tr><th>Antenna</th><th>80m</th><th>60m</th><th>40m</th><th>30m</th><th>20m</th><th>17m</th><th>15m</th><th>12m</th><th>10m</th></tr></thead><tbody><tr><td>Vertical λ/4</td><td>X</td><td>†</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr><tr><td>WRSB</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr><tr><td>Rigid Rybakov</td><td>†</td><td>†</td><td>†</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr><tr><td>Rybakov “L”</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr><tr><td>POTA Dominator</td><td>X</td><td>X</td><td>†</td><td>†</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr><tr><td>POTA Challenger</td><td>X</td><td>X</td><td>†</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr></tbody></table></figure>

<pre><code>Legend:  
✔  Works OK  
†  Compromised operation  
X  Does not fit    
</code></pre>

<h4 id="λ4"><strong>λ/4 Vertical radiator:</strong></h4>

<ul>
<li>Note(s): None</li>

<li>Per band tuning:
<ul>
<li>For 40m: whip fully extended with 40M-Coil.</li>

<li>For 30m: whip fully extended.</li>

<li>For 20m: 8 1/2 sections + radials or emf blanket.</li>

<li>For 17m: 5 1/2 sections + radials or emf blanket.</li>

<li>For 15m: 4 1/6 sections + radials or emf blanket.</li>

<li>For 12m: 3 sections sections + radials or emf blanket.</li>

<li>For 10m: 2 sections sections + radials or emf blanket.</li>
</ul>
</li>

<li>Bands:
<ul>
<li>10m to 20m:
<ul>
<li>Chameleon SS25 whip is 1/4 wave resonant vertical</li>

<li>4x 16ft (5m) radials of 20 awg (0.51mm2) wire or large EMF blanket</li>

<li>Coax choke</li>

<li>Chameleon spike</li>
</ul>
</li>

<li>30m and 40m:
<ul>
<li>Same that “10m to 20m” plus coil (40M-Coil, Medium Coil)</li>
</ul>
</li>
</ul>
</li>
</ul>

<h4 id="wolf-river-silver-bullet-wrsb-1000"><strong>Wolf River Silver Bullet (WRSB) 1000:</strong></h4>

<ul>
<li>Note(s): this setup requires minor tuning. It’s often needed an ATU for 80m.</li>

<li>Bands:
<ul>
<li>10m to 20m without coil:
<ul>
<li>Chameleon SS25 whip is 1/4 wave resonant vertical</li>

<li>4x 16ft (5m) radials or large EMF blanket</li>

<li>Coax choke</li>
</ul>
</li>

<li>30m to 80m with coil:
<ul>
<li>Chameleon SS25 whip used with the adjustable WRSB coil</li>

<li>4 x 16ft (5m) radials of 20 awg (0.51mm2) wire or large EMF blanket</li>

<li>Coax choke</li>
</ul>
</li>
</ul>
</li>
</ul>

<h4 id="rigid-rybakov"><strong>Rigid Rybakov:</strong></h4>

<ul>
<li>Note(s): This is a non-resonant antenna and the whip needs to be fully extended</li>

<li>Bands: predominantly 10m to 20m; lower bands seriously compromised.
<ul>
<li>10m to 20m without additional components:
<ul>
<li>LDG 4:1 UnUn (voltage balun) at the base of the antenna</li>

<li>4x 16ft (5m) radials of 20 awg (0.51mm2) wire or large EMF blanket</li>

<li>Requires ATU</li>

<li>Coax choke</li>
</ul>
</li>

<li>30m to 80m:
<ul>
<li>Same that “10m to 20m” plus:
<ul>
<li>40M-Coil</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>

<h4 id="rybakov-inverted-l-or-lazy"><strong>Rybakov Inverted “L” or “Lazy”:</strong></h4>

<ul>
<li>Note(s): This is a non-resonant antenna and the whip needs to be fully extended. Additionally, this Rybakov variant requires adding the extra wire from the top of the whip while fully extended to build the inverted “L”.</li>

<li>Bands:
<ul>
<li>All bands:
<ul>
<li>LDG 4:1 UnUn at the base of the antenna</li>

<li>4x 16ft (5m) radials of 20 awg (0.51mm2) wire or large EMF blanket</li>

<li>28ft (8,53m) to 33ft (10.06m) of 22 awg (0.32mm2) wire wire from the tip of the whip to a tree (prefereable) or to ground in slopper.</li>

<li>Requires ATU</li>

<li>Coax choke</li>
</ul>
</li>
</ul>
</li>
</ul>

<h4 id="pota-dominator"><strong>POTA Dominator:</strong></h4>

<ul>
<li>Notes: TBD</li>

<li>Bands:
<ul>
<li>10m to 20m:
<ul>
<li>Tripod + Jaw clamp</li>

<li>Chameleon SS Insulator</li>

<li>Chameleon SS Puck Hub</li>

<li>Chameleon SS Blank Adapter</li>

<li>Chameleon SS25 whip rod tuned for 1/2 wave per band</li>

<li>Pigtail to match antenna length on 20m</li>

<li>49:1 EFHW balun/transformer to match impedances at the base of the antenna</li>

<li>Coax choke</li>

<li>PVC pipe acting as support for a counterpoise</li>

<li>1x/2x counterpoise tuned to frequency in use (see below)</li>
</ul>
</li>

<li>30m and 40m:
<ul>
<li>Chameleon 40M-Coil seriously compromised</li>
</ul>
</li>
</ul>
</li>
</ul>

<h4 id="pota-challenger"><strong>POTA Challenger:</strong></h4>

<ul>
<li>Notes: This is a non-resonant antenna that requires a 4:1 transformer.</li>

<li>Bands:
<ul>
<li>10m to 20m:
<ul>
<li>Tripod + Jaw clamp</li>

<li>Chameleon SS Insulator</li>

<li>Chameleon SS25 whip rod</li>

<li>4:1 UnUn to match impedances at the base of the antenna</li>

<li>Pigtail to antenna from unun</li>

<li>Coax choke</li>

<li>1x counterpoise tuned to frequency in use</li>
</ul>
</li>

<li>30m and 40m:
<ul>
<li>Chameleon 40M-Coil seriously compromised</li>
</ul>
</li>
</ul>
</li>
</ul>

<h4 id="counterpoises"><strong>Counterpoise(s)</strong></h4>

<pre><code>Normal cables:   
    - 1x/2x of 34ft 20 awg tinned copper PTFE
    - 10,36 meters of 0,5 mm² wire

Stealth/HOA-friendly counterpoise option:
    - 1x 21ft (6,4m) counterpoise laying on the ground
</code></pre>

<h4 id="radials"><strong>Radial(s)</strong></h4>

<pre><code>Band (Meters)   Frequency (MHz) Length (Feet)   Length (Meters)
10m             28.5            8.2 ft          2.50 m
12m             24.9            9.4 ft          2.86 m
15m             21.3            11 ft           3.35 m
17m             18.1            12.9 ft         3.93 m
20m             14.2            16.5 ft         5.03 m
30m             10.1            23.2 ft         7.07 m
40m             7.2             32.5 ft         10.0 m
</code></pre>

<p>For the radials, think of an implementation mode that could be modular and avoid having multiple unused cables in the backpack. A good implementation could be using Powerpoles to extend cables that match each band at a time while in use:</p>

<ul>
<li><strong>Base radial (2.5m / 8.2ft)</strong> → Covers <strong>10m</strong> well.</li>

<li><strong>Extension 1 (add 1m / 3.3ft)</strong> → Brings total to <strong>3.5m</strong> <strong>/ 11.5ft</strong> for <strong>15m</strong>.</li>

<li><strong>Extension 2 (add 1.5m / 4.9ft)</strong> → Brings total to <strong>5m</strong> <strong>/ 16.4ft</strong> for <strong>20m</strong>.</li>

<li><strong>Extension 3 (add 2.5m / 8.2ft)</strong> → Brings total to <strong>7.5m</strong> <strong>/ 24.6ft</strong> for <strong>30m</strong>.</li>

<li><strong>Extension 4 (add 2.5m / 8.2ft more)</strong> → Brings total to <strong>10m</strong> <strong>/ 32.8ft</strong> for <strong>40m</strong>.</li>
</ul>

<p><strong>Why there aren’t cables for 12m and 17m?</strong></p>

<p>Simply, because not worth it. <strong>Not worth adding intermediate cables for 12m & 17m</strong> as proposed cuts are <strong>already optimized for easy matching</strong>:</p>

<ul>
<li><strong>For 17m (18.1 MHz)</strong>, the <strong>best λ/4 counterpoise</strong> would be <strong>3.93m (12.9ft)</strong>. The <strong>3.5m (11.5ft) counterpoise (for 15m)</strong> is <strong>close enough</strong> to work, plus the <strong>5m (16.4ft) counterpoise (for 20m)</strong> also works with <strong>an ATU adjustment</strong>.</li>

<li><strong>For 12m (24.9 MHz)</strong>, the <strong>best λ/4 counterpoise</strong> would be <strong>2.86m (9.4ft)</strong>. The <strong>2.5m (8.2ft) base counterpoise (for 10m)</strong> is already <strong>very close</strong> and the <strong>3.5m (11.5ft) counterpoise (for 15m)</strong> is slightly long but still usable.</li>
</ul>

<p>So my decision is to <strong>let the ATU handle minor mismatches</strong>; these bands are forgiving. And, if packing wires is not a constraint (like it’s in SOTA), <strong>radial field already might have multiple cables deployed with different lengths each</strong>, so, <strong>they will interact and provide coverage for intermediate bands</strong> like 12m & 17m.</p>
