---
layout: ../../layouts/Work.astro
title: Johns Hopkins University Applied Physics Lab
description:
published: 9/17/24
logo: /images/apl.png
year: 2023-2024
---

## Mission Overview
NASA’s Dragonfly mission is a lunar exploration mission to Saturn’s largest moon, Titan. Titan is unique as far as moons go as it has an atmosphere 1.5x thicker than Earth but only 1/7 the gravitational pull. It is believed that the methane and nitrogen rich atmosphere resembles that of Earth during its formation making it a prime location to study how Earth’s early years may have shaped the development of life.

![Titan Moon](/images/TITAN_MOON_IMAGE.jpg)
**Credit:** [Titan (moon) — Wikipedia](https://en.wikipedia.org/wiki/Titan_%28moon%29)

The mission launches in 2028 with a 6 year long transfer to Saturn. Upon arrival the car sized octocopter will descend into the atmosphere. Once low enough the heat shield will pop off and the octocopter will be lowered into the atmosphere just a few feet to spin up its blades. Once at full speed the octocopter will detach and land itself beginning its 18 month long journey on Titan.

![Dragonfly](/images/MISSIONOVERVIEW_IMAGE.png)
**Credit:** [NASA — Dragonfly](https://science.nasa.gov/mission/dragonfly/)

## My Contributions

My work focused on the development of the outer insulation layer and the space HVAC system.

### Insulation

- Due to Titan’s cold, dense atmosphere, a substantial insulation layer was required to maintain internal room temperature. I identified issues and **designed, executed, and evaluated** multiple TVAC and thermal tests and simulations.
- **Thermal conductivity tests:** Designed, built, and ran tests on coupons of **Solimide 16/32**, **aerogel blankets**, **Basotect-C**, and **Rohacell** to select materials and thicknesses for insulation panels.
- **Thermal expansion (CTE) tests:** Designed, built, and tested a setup using a calibrated camera to track feature displacements on coupons through thermal cycles.
- **Insulation breach testing:** Designed, built, and ran thermal leak tests to determine the effects of breaks in the insulation layer.
- **Free-convection mitigation:** Designed, built, and ran tests to reduce free convection in gaps between layers created by **Velcro attachments**, the **CFL**, harnessing, and external devices/mounting.
- **Model fidelity:** Ran **Thermal Desktop** models to determine the **minimum node density** required for accurate modeling of various insulation geometries (±5% error).
- **Data automation:** Wrote a **MATLAB** script to automatically parse thermocouple CSV files, perform QA checks, and output standardized tables and graphs.
- **Reviews:** Prepared materials for a **Preliminary Design Review** of the insulation design.


### Cold Duct

- Designed and built several components for the **Thermal Development Test Module (DTM)**—a to-scale thermal model of the Dragonfly lander—including **80/20 framing** and **honeycomb paneling**.
- Designed a **venturi** for duct airflow measurement by detecting **3–10 Pa** pressure drops with **±0.5 Pa** accuracy; optimized for minimal flow impedance using literature and MATLAB.
- Designed a **large baffle** for the **15′ × 15′ × 15′ Titan Chamber** to reduce inlet nitrogen speed and create a **no-wind** testing condition to verify cold-duct performance.
- Supported testing to characterize DTM cold-duct properties for correlation to **Ansys CFD**.  

![Chamber](/images/COLDDUCT_IMAGE.jpg)
**Credit:** [JHU APL — Dragonfly Titan Chamber](https://www.jhuapl.edu/news/news-releases/231120-dragonfly-titan-chamber)


### Other

- Participated in an **ACE Run** as the **Mechanical Design Lead** to assess the viability of asteroid deflection using a **NEXT-C ion engine** to direct xenon onto the target.

##