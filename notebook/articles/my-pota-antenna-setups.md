# My POTA antenna setups

[LIST OF ARTICLES](/notebook/articles/README)

- **Published:** 2025-02-02
- **Last update:** 2025-06-18
- **Categories:** Antennas, English

My POTA activities predominantly makes use of *[Chamelon Antenna](https://chameleonantenna.com/)* equipment for quick deployment and operation nowadays. Nonetheless, I also use JPC-12 for certain operations.

While planing to go POTA, or even SOTA, several antenna related details should be clarified in advance, like the type of antenna to deploy based upon the bands to work on and/or the type of wiring to be carried.

I tried to make a quick resume of my research, that follows now. Please, be indulgent if you already tried this with better success than me, and share your knowledge if you want to. Thank you.

## **Wiring** **sizes** (awg to mm2)

- 26 awg = 0.14 mm2
- 24 awg = 0.20 mm2
- 22 awg = 0.32 mm2
- 20 awg = 0.51 mm2
- 18 awg = 0.80 mm2
- 16 awg = 1.30 mm2
- 14 awg = 2.00 mm2
- 12 awg = 3.31 mm2

## Prefered usage resume with CHA SS25 whip

The 20m band mark a border where antennas behave so differently. Higher bands are easy to accomodate. Lower bands are difficult to satisfy.

| Antenna | 80m | 60m | 40m | 30m | 20m | 17m | 15m | 12m | 10m |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Vertical λ/4 | X | † | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| WRSB | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Rigid Rybakov | † | † | † | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Rybakov “L” | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| POTA Dominator | X | X | † | † | ✔ | ✔ | ✔ | ✔ | ✔ |
| POTA Challenger | X | X | † | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

```
Legend:
✔  Works OK
†  Compromised operation
X  Does not fit
```

#### **λ/4 Vertical radiator:**

- Note(s): None
- Per band tuning:
  - For 40m: whip fully extended with 40M-Coil.
  - For 30m: whip fully extended.
  - For 20m: 8 1/2 sections + radials or emf blanket.
  - For 17m: 5 1/2 sections + radials or emf blanket.
  - For 15m: 4 1/6 sections + radials or emf blanket.
  - For 12m: 3 sections sections + radials or emf blanket.
  - For 10m: 2 sections sections + radials or emf blanket.
  - Bands:
  - 10m to 20m:
  - Chameleon SS25 whip is 1/4 wave resonant vertical
  - 4x 16ft (5m) radials of 20 awg (0.51mm2) wire or large EMF blanket
  - Coax choke
  - Chameleon spike
  - 30m and 40m:
  - Same that “10m to 20m” plus coil (40M-Coil, Medium Coil)

#### **Wolf River Silver Bullet (WRSB) 1000:**

- Note(s): this setup requires minor tuning. It’s often needed an ATU for 80m.
- Bands:
  - 10m to 20m without coil:
  - Chameleon SS25 whip is 1/4 wave resonant vertical
  - 4x 16ft (5m) radials or large EMF blanket
  - Coax choke
  - 30m to 80m with coil:
  - Chameleon SS25 whip used with the adjustable WRSB coil
  - 4 x 16ft (5m) radials of 20 awg (0.51mm2) wire or large EMF blanket
  - Coax choke

#### **Rigid Rybakov:**

- Note(s): This is a non-resonant antenna and the whip needs to be fully extended
- Bands: predominantly 10m to 20m; lower bands seriously compromised.
- 10m to 20m without additional components:
  - LDG 4:1 UnUn (voltage balun) at the base of the antenna
  - 4x 16ft (5m) radials of 20 awg (0.51mm2) wire or large EMF blanket
  - Requires ATU
  - Coax choke
  - 30m to 80m:
  - Same that “10m to 20m” plus:
  - 40M-Coil

#### **Rybakov Inverted “L” or “Lazy”:**

- Note(s): This is a non-resonant antenna and the whip needs to be fully extended. Additionally, this Rybakov variant requires adding the extra wire from the top of the whip while fully extended to build the inverted “L”.
- Bands:
  - All bands:
  - LDG 4:1 UnUn at the base of the antenna
  - 4x 16ft (5m) radials of 20 awg (0.51mm2) wire or large EMF blanket
  - 28ft (8,53m) to 33ft (10.06m) of 22 awg (0.32mm2) wire wire from the tip of the whip to a tree (prefereable) or to ground in slopper.
  - Requires ATU
  - Coax choke

#### **POTA Dominator:**

- Notes: TBD
- Bands:
  - 10m to 20m:
  - Tripod + Jaw clamp
  - Chameleon SS Insulator
  - Chameleon SS Puck Hub
  - Chameleon SS Blank Adapter
  - Chameleon SS25 whip rod tuned for 1/2 wave per band
  - Pigtail to match antenna length on 20m
  - 49:1 EFHW balun/transformer to match impedances at the base of the antenna
  - Coax choke
  - PVC pipe acting as support for a counterpoise
  - 1x/2x counterpoise tuned to frequency in use (see below)
  - 30m and 40m:
  - Chameleon 40M-Coil seriously compromised

#### **POTA Challenger:**

- Notes: This is a non-resonant antenna that requires a 4:1 transformer.
- Bands:
  - 10m to 20m:
  - Tripod + Jaw clamp
  - Chameleon SS Insulator
  - Chameleon SS25 whip rod
  - 4:1 UnUn to match impedances at the base of the antenna
  - Pigtail to antenna from unun
  - Coax choke
  - 1x counterpoise tuned to frequency in use
  - 30m and 40m:
  - Chameleon 40M-Coil seriously compromised

#### **Counterpoise(s)**

```
Normal cables:
    - 1x/2x of 34ft 20 awg tinned copper PTFE
    - 10,36 meters of 0,5 mm² wire

Stealth/HOA-friendly counterpoise option:
    - 1x 21ft (6,4m) counterpoise laying on the ground
```

#### **Radial(s)**

```
Band (Meters)   Frequency (MHz) Length (Feet)   Length (Meters)
10m             28.5            8.2 ft          2.50 m
12m             24.9            9.4 ft          2.86 m
15m             21.3            11 ft           3.35 m
17m             18.1            12.9 ft         3.93 m
20m             14.2            16.5 ft         5.03 m
30m             10.1            23.2 ft         7.07 m
40m             7.2             32.5 ft         10.0 m
```

For the radials, think of an implementation mode that could be modular and avoid having multiple unused cables in the backpack. A good implementation could be using Powerpoles to extend cables that match each band at a time while in use:

- **Base radial (2.5m / 8.2ft)** → Covers **10m** well.
- **Extension 1 (add 1m / 3.3ft)** → Brings total to **3.5m** **/ 11.5ft** for **15m**.
- **Extension 2 (add 1.5m / 4.9ft)** → Brings total to **5m** **/ 16.4ft** for **20m**.
- **Extension 3 (add 2.5m / 8.2ft)** → Brings total to **7.5m** **/ 24.6ft** for **30m**.
- **Extension 4 (add 2.5m / 8.2ft more)** → Brings total to **10m** **/ 32.8ft** for **40m**.

**Why there aren’t cables for 12m and 17m?**

Simply, because not worth it. **Not worth adding intermediate cables for 12m & 17m** as proposed cuts are **already optimized for easy matching**:

- **For 17m (18.1 MHz)**, the **best λ/4 counterpoise** would be **3.93m (12.9ft)**. The **3.5m (11.5ft) counterpoise (for 15m)** is **close enough** to work, plus the **5m (16.4ft) counterpoise (for 20m)** also works with **an ATU adjustment**.
- **For 12m (24.9 MHz)**, the **best λ/4 counterpoise** would be **2.86m (9.4ft)**. The **2.5m (8.2ft) base counterpoise (for 10m)** is already **very close** and the **3.5m (11.5ft) counterpoise (for 15m)** is slightly long but still usable.

So my decision is to **let the ATU handle minor mismatches**; these bands are forgiving. And, if packing wires is not a constraint (like it’s in SOTA), **radial field already might have multiple cables deployed with different lengths each**, so, **they will interact and provide coverage for intermediate bands** like 12m & 17m.
