# Choke balun 1:1 (current) for HF ham radio: Why they matter & how to build one

<div class="doc-meta">
<ul>
<li><strong>Published:</strong> 2025-06-04</li>
<li><strong>Last update:</strong> 2025-06-18</li>
<li><strong>Categories:</strong> Antennas, English</li>
</ul>
</div>

<p>Installing an HF antenna, whether it’s a dipole, vertical, or any other design, always exposes you to a challenge: <strong>unwanted common-mode currents</strong> flowing on the outside of your coaxial feedline. These stray RF currents can cause all sorts of headaches:</p>

<ul>
<li><strong>RF “hot spots”</strong> on equipment, tuners, or even on our shack wiring.</li>

<li><strong>Distorted radiation patterns</strong>, since the feedline may become part of the antenna system.</li>

<li><strong>Interference</strong>, heard as RF in the audio, on TVs, or even in household electronics.</li>
</ul>

<p>A simple, inexpensive solution is a <strong>1:1 choke balun</strong> (often called a “current balun”). This device presents a very high impedance to common-mode currents, forcing all RF to stay on the intended conductors of the antenna and not crawl back on the coax shield. In this article, I’ll cover:</p>

<ol>
<li><strong>What a 1:1 choke balun is (and how it works).</strong></li>

<li><strong>Why it’s important for HF ham installations.</strong></li>

<li><strong>How to build your own, step by step</strong>, including a look at testing it on a NanoVNA.</li>
</ol>

<p></p>

<h2>1. What Is a 1:1 “current” (choke) balun?</h2>

<blockquote>
<p><strong>Balun</strong> stands for “Balanced-to-Unbalanced.” A hedge between a balanced antenna (like a dipole) and an unbalanced feedline (coax).</p>
</blockquote>

<p>A 1:1 choke balun is the simplest kind of balun. At its heart it’s nothing more than a <strong>common-mode choke</strong>, a length of wire (often coax or a bare conductor) wound through a toroidal ferrite (or ferrite “donut”) core. The feedline’s center conductor carries the intended differential RF current, and the shield carries the return. We want exactly that, nothing else. But in real-life HF systems, some RF leaks onto the outside of the coax shield, causing the well-known “skin effect”. </p>

<p>By winding the coax (or two conductors in parallel) through a suitable ferrite core, we create a <strong>high impedance</strong> for currents that seek to flow on the cable’s outer surface. Differential RF currents (i.e., the + and – on a dipole’s two legs) see virtually zero impedance through the core, so the antenna still “works.” But if any current tries to run down the outside of the coax shield (common-mode), it “sees” the core’s impedance and is choked off.</p>

<p>Key points about a <strong>1:1 choke balun</strong>:</p>

<ul>
<li><strong>Turns ratio = 1:1.</strong> The winding does not step voltage or current up or down—the same number of turns on both halves of the balun.</li>

<li><strong>Core material.</strong> Typically a high-μ ferrite, often designated for HF use (e.g., mix 31 or mix 43 ferrite). The key is that it has a high impedance at, say, 1–30 MHz.</li>

<li><strong>Function.</strong> Suppress (or “choke”) unwanted common-mode currents by presenting a large reactance (dozens or hundreds of ohms) at HF.</li>
</ul>

<p></p>

<h2>2. Why a choke balun matters on HF</h2>

<ol>
<li><strong>Keeps the radiation pattern “clean”.</strong><br>If RF current flows on the outside of the feedline, the coax becomes part of the antenna. This distorts the intended pattern, especially true on dipoles at low height or on verticals where coax run is vertical.</li>

<li><strong>Reduces “RF in the shack.”</strong><br>When the coax shield carries RF back to the transceiver, one may hear chirps, buzzes, or even have difficulty keying the rig. A choke balun stops most of that external RF from reaching the shack.</li>

<li><strong>Cuts down local interference.</strong><br>You may have noticed that, without a choke, switching the rig can make the lights blink, or TVs flicker when transmitting. A good common-mode choke keeps most of that RF where it belongs, out at the antenna.</li>

<li><strong>Protects against antenna mismatch effects.</strong><br>If SWR is high (i.e. during a band change without retuning), coax-shield currents can rise dramatically. A choke balun limits just how much of that “mismatch RF” can slip onto the cable, making tunning and operation more predictable.</li>
</ol>

<p>Bottom‐line: <strong>any HF ham</strong> who cares about good feedline behavior, minimal interference, and stable antenna performance should use a 1:1 choke balun at the feedpoint.</p>

<p></p>

<h2>3. Parts & tools  needed</h2>

<blockquote>
<p>The following photos illustrate my own build, which uses a gray plastic project box, a fair-size toroidal core (more precisely a FT-240-43), and a pair of SO-239 antenna connectors. Feel free to use whatever enclosure or connectors you prefer, but the core and wire choices are important.</p>

<figure><img loading="lazy" decoding="async" width="1920" height="2560" src="/assets/images/20250604-003.jpg" alt="" /><figcaption>100×68.50 enclosure</figcaption></figure>

<figure><img loading="lazy" decoding="async" width="2560" height="1920" src="/assets/images/20250604-006.jpg" alt="" /><figcaption>case before mechanizations</figcaption></figure>

<figure><img loading="lazy" decoding="async" width="1920" height="2560" src="/assets/images/20250604-010.jpg" alt="" /><figcaption>wrapped toroid ready to instal</figcaption></figure>

<figure><img loading="lazy" decoding="async" width="1920" height="2560" src="/assets/images/20250604-005.jpg" alt="" /><figcaption>trying to fit the choke in its box</figcaption></figure>

<figure><img loading="lazy" decoding="async" width="1920" height="2560" src="/assets/images/20250604-008.jpg" alt="" /><figcaption>adjusting the place in the box</figcaption></figure>

<figure><img loading="lazy" decoding="async" width="1920" height="2560" src="/assets/images/20250604-001.jpg" alt="" /><figcaption>final check before soldering</figcaption></figure>

<figure><img loading="lazy" decoding="async" width="1920" height="2560" src="/assets/images/20250604-004.jpg" alt="" /><figcaption>ready to test</figcaption></figure>

<figure><img loading="lazy" decoding="async" width="1920" height="2560" src="/assets/images/20250604-002.jpg" alt="" /></figure>
</figure>
</blockquote>

<h3>3.1. Core & wire</h3>

<ul>
<li><strong>Toroidal ferrite core</strong>: A “mix 31” or “mix 43” ring about 2–3″ outer diameter, with at least 1″ inner hole. Mine is a F-240-43 which stands or 240 inch and a mix type 43.</li>

<li><strong>Copper wire</strong>: For a 1:1 choke, you need…
<ul>
<li>Either <strong>two equal lengths of 14–18 AWG hook-up wire</strong> (stranded, enamel-coated) to wrap side-by-side through the core.</li>

<li>Or <strong>one length of RG-58 coax</strong> (or similar) passing through the core a certain number of times, though that ends up physically bulky at HF.</li>

<li>In my build I used <strong>two pieces of solid magnetic wire copper</strong> to keep it simple.</li>
</ul>
</li>
</ul>

<h3>3.2. Connectors & enclosure</h3>

<ul>
<li><strong>Two SO-239 (female) chassis connectors</strong>: One on the input (transceiver/coax) side, one on the antenna side. My choice: standard 50 Ω SO-239 chassis sockets.</li>

<li><strong>Plastic project box</strong>: Something like a small ABS or polycarbonate box, ideally weatherproof if this goes outside.</li>
</ul>

<h3>3.3. Miscellaneous</h3>

<ul>
<li><strong>Hot-melt glue (hot glue gun)</strong>: To secure the winding and connectors inside the box.</li>

<li><strong>Short pieces of insulating shrink tubing</strong> (optional) to keep wire turns neat.</li>

<li><strong>Basic tools</strong>: Drill or step-bit to make holes for SO-239s, a soldering iron (and solder), knife (for stripping wires), etc.</li>
</ul>

<p></p>

<h2>4. Building the 1:1 Choke Balun: Step by Step</h2>

<p>Below is a straightforward approach. Customize as needed: if you have a different core size, connector style, or enclosure, just adapt the steps.</p>

<h3>4.1. Prepare the Enclosure & Connectors</h3>

<ol>
<li><strong>Mark connector positions.</strong><br>Lay out the project box on a bench. Decide which face will hold your two SO-239s. Mark their centers about 2″ apart so the winding has room.</li>

<li><strong>Drill holes.</strong><br>Using a 7/8″ (22 mm) or 1″ (25 mm) step bit (or the correct hole saw for your connector), drill two holes for the SO-239 nuts.</li>

<li><strong>Install SO-239s.</strong>
<ul>
<li>Place each SO-239 into its hole; secure from the outside with its hex nut and lock washer.</li>

<li>On the inside of each connector, you’ll have: the <strong>center pin</strong> (goes to your winding’s “hot” lead) and the <strong>chassis tab</strong> (goes to your winding’s “ground” or shield lead). Leave these tabs unsoldered until after the winding is in place.</li>
</ul>
</li>
</ol>

<h3>4.2. Prep & Wind the Ferrite Core</h3>

<ol>
<li><strong>Strip & tin your wires.</strong>
<ul>
<li>If you’re using enamel-coated wire, use fine sandpaper or an X-Acto blade to remove enamel from each end for about ¼″ (6 mm).</li>

<li>Twist or tin the bare copper ends lightly so they’re ready to solder.</li>
</ul>
</li>

<li><strong>Form the Wwndings (2-Wire Version).</strong><ul><li>Take two equal lengths of copper wire (each about 80cm long). Ensure both are the same gauge.Holden them side by side, run them <strong>together</strong> through the center hole of the toroid from front to back. Pull them through so the “tails” on both sides are roughly equal.Now, while keeping the two wires aligned, wrap <strong>5–8 turns</strong> (or more, see notes below) around the toroid. Each turn should lay neatly next to the last. Ensure wires are not crossing each other at any point. After you’ve completed the desired number of turns, bring both wires through the hole to emerge on the front side again. You should end up with two wires poking out the back to go to one SO-239, and two wires out the front to go to the other SO-239.</li></ul></li>

<li><strong>Secure the windings.</strong>
<ul>
<li>Once the wrap is complete, coil any extra slack so nothing rubs on sharp edges.</li>

<li>Use a small cable tie (as you see in my photos around the toroid) or just a dab of hot glue to hold the turns in place. The idea is to keep them from sliding and shorting against the core or each other.</li>
</ul>
</li>
</ol>

<h3>4.3. Soldering to the Connectors</h3>

<ol>
<li><strong>Inside the Box: Wire Assignment.</strong><ul><li><strong>Back SO-239 connector (side toward rig/coax feeder):</strong> Solder the two ends from one half of the winding: one wire to the center pin, the other to the chassis lug.</li><li><strong>Front SO-239 connector (side toward the antenna):</strong> Solder the two ends from the other half of the winding—again, one to center, one to chassis.</li></ul>Since each wire is physically next to its buddy through every turn, you’ve effectively created a 1:1 transformer from coax to coax, but with a big impedance for any current trying to flow around the outside of the two conductors in unison.</li>

<li><strong>Clean & Check Solder Joints.</strong>
<ul>
<li>Ensure no stray strands are touching the core or the box.</li>

<li>Make sure the chassis lug is solidly grounded to the metal shell of its SO-239.</li>
</ul>
</li>

<li><strong>Apply Hot-Glue (Optional but Recommended).</strong>
<ul>
<li>Put little dabs of hot glue around the base of each connector on the inside, and a dot or two on the toroid so nothing shifts.</li>

<li>This is especially vital if you intend to mount the box outdoors—glue helps prevent moisture from creeping under your wires and provides mechanical support.</li>
</ul>
</li>
</ol>

<h3>4.4. Seal & mount</h3>

<ol>
<li><strong>Close the box.</strong>
<ul>
<li>Fasten the cover using the four corner screws. If your box has a gasketed lid, you already have some weatherproofing.</li>

<li>If not, consider a bead of silicone around the edge of the cover before screwing it down.</li>
</ul>
</li>

<li><strong>Mounting Options.</strong>
<ul>
<li>You can strap or bolt the box to a mast or the side of your tower. Just keep it above ground level and out of easy tampering range.</li>

<li>Route your coax from the rig (or outdoor feedline) into the “back” SO-239, and route a short coax jumper from the “front” SO-239 to your antenna feedpoint.</li>
</ul>
</li>
</ol>

<p></p>

<h2>5. Testing & Measuring on a NanoVNA</h2>

<p>Once everything is built, it’s wise to verify the actual <strong>common-mode impedance</strong> of your choke across the HF spectrum. I used a NanoVNA (N2+ with firmware 3.4.7) to measure the <strong>S21 (insertion loss)</strong> of just the choke (ports shorted to connectors as if through a cable).</p>

<figure><img loading="lazy" decoding="async" width="768" height="1024" src="/assets/images/20250604-009.jpg" alt="" /><figcaption>How to setup the NanoVNA leads for proper measure</figcaption></figure>

<figure><img loading="lazy" decoding="async" width="2560" height="1920" src="/assets/images/20250604-007.jpg" alt="" /><figcaption>NanoVNa readings</figcaption></figure>
</figure>

<ol>
<li><strong>Test setup:</strong>
<ul>
<li>Port 1 of the NanoVNA → Coax → Back SO-239 (input side).</li>

<li>Front SO-239 (output side) → Coax → Port 2 of the NanoVNA.</li>

<li>On the NanoVNA, set the frequency sweep from <strong>1 MHz to 30 MHz</strong>, and read S21 in dB.</li>
</ul>
</li>

<li><strong>Interpreting the curve:</strong><ul><li>At <strong>1 MHz</strong>, I saw about <strong>–20 dB</strong> of insertion loss (which corresponds to roughly 10 Ω–15 Ω of common-mode impedance). That’s low for 160 m, so if I were building exclusively for 160 m, I’d want more turns or a larger core.</li><li>At <strong>7 MHz</strong>, S21 dipped to around <strong>–40 dB</strong> (about 200 Ω of choke impedance). Perfect for 40, 30, and 20 m.</li><li>As frequency climbed to <strong>30 MHz</strong>, the loss rose to roughly <strong>–20 dB</strong> again (around 15 Ω). That’s borderline for 10 m, but still helpful in mitigating stray currents.</li></ul></li>

<li><strong>What we’re looking for:</strong>
<ul>
<li><strong>High loss (i.e., large negative S21 dB)</strong> at the frequencies we most care about (e.g., if you operate 20 m and 40 m, you want >30 dB or so of insertion loss at those bands).</li>

<li>If the choke shows only a few dB of loss at, say, 1.8 MHz, consider adding turns or using a bigger core if you need strong common-mode suppression on 160 m.</li>
</ul>
</li>
</ol>

<h2>6. Putting it into practice in your station</h2>

<ol>
<li><strong>Feedpoint Location.</strong><br>Mount the choke balun right at the antenna feedpoint. This stops common-mode currents before they ever see the coax running toward your radio.</li>

<li><strong>Weatherproofing.</strong>
<ul>
<li>Ensure the box is well sealed. If using a plastic box outdoors, choose one with a rubber gasket or apply silicone around the edges.</li>

<li>Apply a dab of silicone sealant around the SO-239 seams from the outside for extra water protection.</li>
</ul>
</li>

<li><strong>Coax routing.</strong>
<ul>
<li>From the choke balun’s “input” SO-239, run a short length of good coax down to the shack.</li>
</ul>
</li>

<li><strong>Antenna types & examples.</strong>
<ul>
<li><strong>Dipoles:</strong> The most common use. Simply replace the bare feedline connection with the choke balun enclosure; dipole’s two legs land on the two posts of the “antenna-side” SO-239.</li>

<li><strong>Verticals:</strong> Mount the choke right at the base, with the coax going from the balun down the tower or support to the shack.</li>

<li><strong>Multi-band Windoms, fan dipoles, etc.:</strong> Same principle, any radiating conductor that’s “balanced” benefits from current suppression on the unbalanced coax.</li>
</ul>
</li>
</ol>

<p></p>

<h2>7. Wrapping up: Why every HF ham should consider a choke balun</h2>

<ul>
<li><strong>Simplicity</strong>: A 1:1 choke balun is literally just wire on a ferrite. No fancy tapers, no “line transformer” magic, just a robust common-mode choke.</li>

<li><strong>Cost</strong>: A toroidal ferrite plus a couple of Euro worth of wire and connectors yields a balun that can last decades.</li>

<li><strong>Performance</strong>: With a properly chosen core and number of turns, we can achieve dozens to hundreds of ohms of common-mode impedance across your HF bands, dramatically reducing RF feedback, splattering, and weird feedline radiation.</li>

<li><strong>Flexibility</strong>: You can build it to whatever size suits your bands of interest: beefy for 160/80 m, or smaller for strictly 20–10 m use.</li>
</ul>

<p>Once installed, you’ll quickly notice <strong>less RF in your shack</strong>, <strong>more predictable SWR</strong> on your feedline, and a <strong>cleaner radiation pattern</strong>—in other words, fewer headaches. And when you measure your build with a NanoVNA, you’ll see that your choke really is doing its job.</p>

<p>Give it a try: gather a few inexpensive parts, follow these steps, and you’ll soon enjoy a quieter, more reliable HF station. </p>

<p>73 and good luck building!</p>
