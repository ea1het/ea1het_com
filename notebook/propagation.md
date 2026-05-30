# Propagation

> **Published:** 2025-06-02  
> **Last update:** 2026-05-29

## How to read these numbers

This guide explains the values shown in the **Propagation** panel and how to interpret them for practical HF operation.

### Quick operating logic

- If **Solar Flux is high**, **Kp/A are low**, **Bz is neutral or positive**, and **Solar Wind is moderate**, high HF bands (20m to 10m) are usually in good shape.
- If **Kp rises**, **A stays high**, **Bz turns strongly negative**, or **X-ray reaches M/X class**, expect unstable paths, more absorption, and possible blackout windows.

### Top-row metrics

#### Solar Flux (SFI)

Solar Flux Index (10.7 cm radio flux) is a proxy for ionizing energy reaching the ionosphere.

- `Below 90`: Limited support for upper HF bands (15m/12m/10m often weak or closed).
- `90-130`: Usable mid-to-upper HF, improving daytime DX.
- `130+`: Strong ionization, best chance for long openings on higher HF bands.

Interpretation: **higher is generally better for F-layer DX**, especially above 14 MHz.

#### A-Index

A daily geomagnetic activity average (slower, long-window indicator).

- `0-7`: Quiet geomagnetic conditions.
- `8-15`: Mildly disturbed.
- `16+`: Disturbed to storm-level background.

Interpretation: **lower is better**. A high A-index can keep conditions degraded even if Kp improves briefly.

#### X-Ray

Current solar X-ray flare class (A, B, C, M, X).

- `A/B`: Quiet background.
- `C`: Minor flare activity.
- `M`: Moderate flare, possible HF fade/blackout on sunlit side.
- `X`: Strong flare, higher blackout risk.

Interpretation: this is an **immediate risk indicator** for D-layer absorption and sudden HF loss on daylight paths.

#### Kp Index

3-hour geomagnetic disturbance index (0 to 9), fast-changing and operationally very useful.

- `0-2`: Quiet, stable paths.
- `3-4`: Unsettled to active, more fading/noise.
- `5+`: Storm threshold, frequent degradation.

Interpretation: **lower is better**. Kp is often the first warning that paths are becoming unstable.

#### IMF Bz

North-south component of the interplanetary magnetic field (nT).

- `Positive Bz`: More protective orientation, usually calmer.
- `Near 0`: Neutral.
- `Negative Bz`: Better coupling with Earth’s field, storm potential rises.

Interpretation: sustained **negative Bz** (especially strong negative values) increases geomagnetic disturbance probability.

#### Solar Wind (km/s)

Speed of solar wind hitting Earth.

- `< 400 km/s`: Typically quiet background.
- `400-600 km/s`: Elevated but common.
- `> 600 km/s`: Disturbance/storm risk increases.

Interpretation: wind speed alone is not enough, but **high wind + negative Bz + rising Kp** is a classic bad combination.

### HF Conditions table (by band)

Band-by-band quality estimate for day/night windows (for example `Good`, `Fair`, `Poor`, `Closed`).

- `Good`: Reliable operation and DX probability for that band/time.
- `Fair`: Openings exist but less consistent; expect fading.
- `Poor`: Marginal, short openings, weak-signal work required.
- `Closed`: Little or no useful ionospheric support.

Interpretation: this is the **fastest practical summary** for deciding which band to try first.

### Kp Index - last 24h chart

Shows how Kp evolved through recent 3-hour intervals.

- Flat low values: stable geomagnetic environment.
- Spikes toward `5`: storm impulses.
- Repeated elevated bars: persistent disturbance.

Interpretation: trend matters. Even if current Kp is acceptable, a disturbed 24h profile can still mean noisy/unstable conditions.

### Map products

#### foF2 critical frequency map

foF2 is the critical frequency of the F2 layer (vertical incidence). It indicates ionization strength.

- Higher foF2 regions support higher usable frequencies.
- Low foF2 regions indicate weaker upper-HF support.

Interpretation: good for identifying where the ionosphere is strong enough to sustain higher-frequency refraction.

#### MUF world map

MUF (Maximum Usable Frequency) map estimates the highest workable frequency for oblique paths.

- Higher MUF zones: better chance for 17m/15m/12m/10m paths.
- Lower MUF zones: shift operation to 20m/30m/40m.

Interpretation: use MUF to choose band strategy by path and time, not just by local conditions.

#### Aurora forecast

Auroral activity prediction, usually relevant to high latitudes.

- Higher auroral activity often correlates with HF degradation and path distortion.
- VHF auroral modes may improve while normal HF quality declines.

Interpretation: for HF DX, **more aurora usually means harder conditions** on many polar and transpolar routes.

### Practical decision checklist

Before calling CQ on HF, check this order:

1. `Kp` and 24h Kp trend.
2. `Bz` sign and persistence.
3. `Solar Wind` speed.
4. `Solar Flux` level.
5. Band-specific `HF Conditions` and `MUF` map.

If the first three are disturbed, lower expectations on high bands and move to more robust options (20m/30m/40m) until conditions recover.
