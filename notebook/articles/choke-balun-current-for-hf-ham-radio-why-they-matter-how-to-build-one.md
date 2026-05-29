# Choke balun 1:1 (current) for HF ham radio: Why they matter & how to build one

[LIST OF ARTICLES](/notebook/articles/)

- **Published:** 2025-06-04
- **Last update:** 2025-06-18
- **Categories:** Antennas, English

Installing an HF antenna, whether it’s a dipole, vertical, or any other design, always exposes you to a challenge: **unwanted common-mode currents** flowing on the outside of your coaxial feedline. These stray RF currents can cause all sorts of headaches:

- **RF “hot spots”** on equipment, tuners, or even on our shack wiring.
- **Distorted radiation patterns**, since the feedline may become part of the antenna system.
- **Interference**, heard as RF in the audio, on TVs, or even in household electronics.

A simple, inexpensive solution is a **1:1 choke balun** (often called a “current balun”). This device presents a very high impedance to common-mode currents, forcing all RF to stay on the intended conductors of the antenna and not crawl back on the coax shield. In this article, I’ll cover:

- **What a 1:1 choke balun is (and how it works).**
- **Why it’s important for HF ham installations.**
- **How to build your own, step by step**, including a look at testing it on a NanoVNA.

## 1. What Is a 1:1 “current” (choke) balun?

> **Balun** stands for “Balanced-to-Unbalanced.” A hedge between a balanced antenna (like a dipole) and an unbalanced feedline (coax).

A 1:1 choke balun is the simplest kind of balun. At its heart it’s nothing more than a **common-mode choke**, a length of wire (often coax or a bare conductor) wound through a toroidal ferrite (or ferrite “donut”) core. The feedline’s center conductor carries the intended differential RF current, and the shield carries the return. We want exactly that, nothing else. But in real-life HF systems, some RF leaks onto the outside of the coax shield, causing the well-known “skin effect”.

By winding the coax (or two conductors in parallel) through a suitable ferrite core, we create a **high impedance** for currents that seek to flow on the cable’s outer surface. Differential RF currents (i.e., the + and – on a dipole’s two legs) see virtually zero impedance through the core, so the antenna still “works.” But if any current tries to run down the outside of the coax shield (common-mode), it “sees” the core’s impedance and is choked off.

Key points about a **1:1 choke balun**:

- **Turns ratio = 1:1.** The winding does not step voltage or current up or down—the same number of turns on both halves of the balun.
- **Core material.** Typically a high-μ ferrite, often designated for HF use (e.g., mix 31 or mix 43 ferrite). The key is that it has a high impedance at, say, 1–30 MHz.
- **Function.** Suppress (or “choke”) unwanted common-mode currents by presenting a large reactance (dozens or hundreds of ohms) at HF.

## 2. Why a choke balun matters on HF

- **Keeps the radiation pattern “clean”.**
If RF current flows on the outside of the feedline, the coax becomes part of the antenna. This distorts the intended pattern, especially true on dipoles at low height or on verticals where coax run is vertical.

- **Reduces “RF in the shack.”**
When the coax shield carries RF back to the transceiver, one may hear chirps, buzzes, or even have difficulty keying the rig. A choke balun stops most of that external RF from reaching the shack.

- **Cuts down local interference.**
You may have noticed that, without a choke, switching the rig can make the lights blink, or TVs flicker when transmitting. A good common-mode choke keeps most of that RF where it belongs, out at the antenna.

- **Protects against antenna mismatch effects.**
If SWR is high (i.e. during a band change without retuning), coax-shield currents can rise dramatically. A choke balun limits just how much of that “mismatch RF” can slip onto the cable, making tunning and operation more predictable.

Bottom‐line: **any HF ham** who cares about good feedline behavior, minimal interference, and stable antenna performance should use a 1:1 choke balun at the feedpoint.

## 3. Parts & tools needed

> The following photos illustrate my own build, which uses a gray plastic project box, a fair-size toroidal core (more precisely a FT-240-43), and a pair of SO-239 antenna connectors. Feel free to use whatever enclosure or connectors you prefer, but the core and wire choices are important. ![](/assets/images/20250604-003.jpg) *100×68.50 enclosure* ![](/assets/images/20250604-006.jpg) *case before mechanizations* ![](/assets/images/20250604-010.jpg) *wrapped toroid ready to instal* ![](/assets/images/20250604-005.jpg) *trying to fit the choke in its box* ![](/assets/images/20250604-008.jpg) *adjusting the place in the box* ![](/assets/images/20250604-001.jpg) *final check before soldering* ![](/assets/images/20250604-004.jpg) *ready to test* ![](/assets/images/20250604-002.jpg)

### 3.1. Core & wire

- **Toroidal ferrite core**: A “mix 31” or “mix 43” ring about 2–3″ outer diameter, with at least 1″ inner hole. Mine is a F-240-43 which stands or 240 inch and a mix type 43.
- **Copper wire**: For a 1:1 choke, you need…
- Either **two equal lengths of 14–18 AWG hook-up wire** (stranded, enamel-coated) to wrap side-by-side through the core.
- Or **one length of RG-58 coax** (or similar) passing through the core a certain number of times, though that ends up physically bulky at HF.
- In my build I used **two pieces of solid magnetic wire copper** to keep it simple.

### 3.2. Connectors & enclosure

- **Two SO-239 (female) chassis connectors**: One on the input (transceiver/coax) side, one on the antenna side. My choice: standard 50 Ω SO-239 chassis sockets.
- **Plastic project box**: Something like a small ABS or polycarbonate box, ideally weatherproof if this goes outside.

### 3.3. Miscellaneous

- **Hot-melt glue (hot glue gun)**: To secure the winding and connectors inside the box.
- **Short pieces of insulating shrink tubing** (optional) to keep wire turns neat.
- **Basic tools**: Drill or step-bit to make holes for SO-239s, a soldering iron (and solder), knife (for stripping wires), etc.

## 4. Building the 1:1 Choke Balun: Step by Step

Below is a straightforward approach. Customize as needed: if you have a different core size, connector style, or enclosure, just adapt the steps.

### 4.1. Prepare the Enclosure & Connectors

- **Mark connector positions.**
Lay out the project box on a bench. Decide which face will hold your two SO-239s. Mark their centers about 2″ apart so the winding has room.

- **Drill holes.**
Using a 7/8″ (22 mm) or 1″ (25 mm) step bit (or the correct hole saw for your connector), drill two holes for the SO-239 nuts.

- **Install SO-239s.**
- Place each SO-239 into its hole; secure from the outside with its hex nut and lock washer.
- On the inside of each connector, you’ll have: the **center pin** (goes to your winding’s “hot” lead) and the **chassis tab** (goes to your winding’s “ground” or shield lead). Leave these tabs unsoldered until after the winding is in place.

### 4.2. Prep & Wind the Ferrite Core

- **Strip & tin your wires.**
- If you’re using enamel-coated wire, use fine sandpaper or an X-Acto blade to remove enamel from each end for about ¼″ (6 mm).
- Twist or tin the bare copper ends lightly so they’re ready to solder.
- **Form the Wwndings (2-Wire Version).**
Take two equal lengths of copper wire (each about 80cm long). Ensure both are the same gauge.Holden them side by side, run them **together** through the center hole of the toroid from front to back. Pull them through so the “tails” on both sides are roughly equal.Now, while keeping the two wires aligned, wrap **5–8 turns** (or more, see notes below) around the toroid. Each turn should lay neatly next to the last. Ensure wires are not crossing each other at any point. After you’ve completed the desired number of turns, bring both wires through the hole to emerge on the front side again. You should end up with two wires poking out the back to go to one SO-239, and two wires out the front to go to the other SO-239.

- **Secure the windings.**
- Once the wrap is complete, coil any extra slack so nothing rubs on sharp edges.
- Use a small cable tie (as you see in my photos around the toroid) or just a dab of hot glue to hold the turns in place. The idea is to keep them from sliding and shorting against the core or each other.

### 4.3. Soldering to the Connectors

- **Inside the Box: Wire Assignment.**
**Back SO-239 connector (side toward rig/coax feeder):** Solder the two ends from one half of the winding: one wire to the center pin, the other to the chassis lug.**Front SO-239 connector (side toward the antenna):** Solder the two ends from the other half of the winding—again, one to center, one to chassis.
Since each wire is physically next to its buddy through every turn, you’ve effectively created a 1:1 transformer from coax to coax, but with a big impedance for any current trying to flow around the outside of the two conductors in unison.

- **Clean & Check Solder Joints.**
- Ensure no stray strands are touching the core or the box.
- Make sure the chassis lug is solidly grounded to the metal shell of its SO-239.
- **Apply Hot-Glue (Optional but Recommended).**
- Put little dabs of hot glue around the base of each connector on the inside, and a dot or two on the toroid so nothing shifts.
- This is especially vital if you intend to mount the box outdoors—glue helps prevent moisture from creeping under your wires and provides mechanical support.

### 4.4. Seal & mount

- **Close the box.**
- Fasten the cover using the four corner screws. If your box has a gasketed lid, you already have some weatherproofing.
- If not, consider a bead of silicone around the edge of the cover before screwing it down.
- **Mounting Options.**
- You can strap or bolt the box to a mast or the side of your tower. Just keep it above ground level and out of easy tampering range.
- Route your coax from the rig (or outdoor feedline) into the “back” SO-239, and route a short coax jumper from the “front” SO-239 to your antenna feedpoint.

## 5. Testing & Measuring on a NanoVNA

Once everything is built, it’s wise to verify the actual **common-mode impedance** of your choke across the HF spectrum. I used a NanoVNA (N2+ with firmware 3.4.7) to measure the **S21 (insertion loss)** of just the choke (ports shorted to connectors as if through a cable).

![](/assets/images/20250604-009.jpg)

*How to setup the NanoVNA leads for proper measure*

![](/assets/images/20250604-007.jpg)

*NanoVNa readings*

- **Test setup:**
- Port 1 of the NanoVNA → Coax → Back SO-239 (input side).
- Front SO-239 (output side) → Coax → Port 2 of the NanoVNA.
- On the NanoVNA, set the frequency sweep from **1 MHz to 30 MHz**, and read S21 in dB.
- **Interpreting the curve:**
At **1 MHz**, I saw about **–20 dB** of insertion loss (which corresponds to roughly 10 Ω–15 Ω of common-mode impedance). That’s low for 160 m, so if I were building exclusively for 160 m, I’d want more turns or a larger core.At **7 MHz**, S21 dipped to around **–40 dB** (about 200 Ω of choke impedance). Perfect for 40, 30, and 20 m.As frequency climbed to **30 MHz**, the loss rose to roughly **–20 dB** again (around 15 Ω). That’s borderline for 10 m, but still helpful in mitigating stray currents.

- **What we’re looking for:**
- **High loss (i.e., large negative S21 dB)** at the frequencies we most care about (e.g., if you operate 20 m and 40 m, you want >30 dB or so of insertion loss at those bands).
- If the choke shows only a few dB of loss at, say, 1.8 MHz, consider adding turns or using a bigger core if you need strong common-mode suppression on 160 m.

## 6. Putting it into practice in your station

- **Feedpoint Location.**
Mount the choke balun right at the antenna feedpoint. This stops common-mode currents before they ever see the coax running toward your radio.

- **Weatherproofing.**
- Ensure the box is well sealed. If using a plastic box outdoors, choose one with a rubber gasket or apply silicone around the edges.
- Apply a dab of silicone sealant around the SO-239 seams from the outside for extra water protection.
- **Coax routing.**
- From the choke balun’s “input” SO-239, run a short length of good coax down to the shack.
- **Antenna types & examples.**
- **Dipoles:** The most common use. Simply replace the bare feedline connection with the choke balun enclosure; dipole’s two legs land on the two posts of the “antenna-side” SO-239.
- **Verticals:** Mount the choke right at the base, with the coax going from the balun down the tower or support to the shack.
- **Multi-band Windoms, fan dipoles, etc.:** Same principle, any radiating conductor that’s “balanced” benefits from current suppression on the unbalanced coax.

## 7. Wrapping up: Why every HF ham should consider a choke balun

- **Simplicity**: A 1:1 choke balun is literally just wire on a ferrite. No fancy tapers, no “line transformer” magic, just a robust common-mode choke.
- **Cost**: A toroidal ferrite plus a couple of Euro worth of wire and connectors yields a balun that can last decades.
- **Performance**: With a properly chosen core and number of turns, we can achieve dozens to hundreds of ohms of common-mode impedance across your HF bands, dramatically reducing RF feedback, splattering, and weird feedline radiation.
- **Flexibility**: You can build it to whatever size suits your bands of interest: beefy for 160/80 m, or smaller for strictly 20–10 m use.

Once installed, you’ll quickly notice **less RF in your shack**, **more predictable SWR** on your feedline, and a **cleaner radiation pattern**—in other words, fewer headaches. And when you measure your build with a NanoVNA, you’ll see that your choke really is doing its job.

Give it a try: gather a few inexpensive parts, follow these steps, and you’ll soon enjoy a quieter, more reliable HF station.

73 and good luck building!
