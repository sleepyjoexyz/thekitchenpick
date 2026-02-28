export interface ClimateControlArticle {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
}

export const climateControlArticles: Record<string, ClimateControlArticle> = {
  "portable-ac-buying-guide": {
    slug: "portable-ac-buying-guide",
    title: "Portable AC Buying Guide: BTU, Single Hose vs Dual Hose, and What Actually Matters",
    description:
      "Learn how portable ACs work, how to size BTU for your room, the difference between single and dual hose efficiency, and what matters most when choosing one.",
    category: "climate-control",
    content: `## Introduction

Portable air conditioners are lifesavers for renters, people with old windows, and anyone who can't install a permanent AC unit. But the market is confusing: single hose vs. dual hose, DOE BTU vs. ASHRAE BTU, window kits that vary by climate. This guide cuts through the marketing and shows you what actually matters when you buy.

## How Portable ACs Work

All portable air conditioners follow the same basic principle: they pull hot air from your room, cool it, and expel the heat outside through a window vent. But there's a catch. The cooling process uses energy, and that energy heats up the compressor and condenser coils. That heat has to go somewhere.

Single-hose units pull indoor air, cool it, and exhaust the heat-laden air back out the window. This creates a problem: for every BTU of cooling, you're also pulling air out of the room, which creates negative pressure. Your room's natural air leaks in through walls, cracks, and doors—which means the AC has to work harder to cool that replacement air.

Dual-hose units solve this: one hose pulls outdoor air specifically for the condenser, and the other hose exhausts it. Your room stays in equilibrium; the AC only cools the air you want cooled.

## Understanding BTU and Room Sizing

BTU stands for British Thermal Unit. One BTU is the energy required to raise 1 pound of water 1 degree Fahrenheit. In air conditioning, a higher BTU number means more cooling power.

**DOE BTU vs. ASHRAE BTU**: The DOE (Department of Energy) changed how portable ACs are rated. Older units list ASHRAE BTU (which is inflated), while newer ones list DOE BTU (lower but more realistic). Always check which standard a unit uses. An 8,000 DOE BTU is more honest than an 8,000 ASHRAE BTU.

**Sizing for your room**: A rough rule is 20 BTU per square foot of room size. A 350 sq ft bedroom needs roughly 7,000 BTU. But factors like insulation, sun exposure, and how many people are in the room matter. A room with lots of windows facing south may need 25 BTU per sq ft; a heavily insulated room might only need 15.

**Practical guidance**: If you can afford it, buy 15-20% more BTU than calculated. The extra capacity means the unit doesn't run constantly at max, which prolongs its life and saves on electricity.

## Single Hose vs. Dual Hose Efficiency

**Single-hose portable ACs** (~$300–$500):
- Cheaper to manufacture and buy
- Adequate for small to medium rooms (8,000–10,000 BTU)
- The constant air loss reduces efficiency
- They work, but they work harder
- Most budget models are single-hose

**Dual-hose portable ACs** (~$500–$700):
- 15–30% more efficient because they don't create negative pressure
- Better for larger rooms (12,000–15,000 BTU)
- More complex installation (two windows or two vents)
- Less noticeable for small spaces, very noticeable for large ones
- Premium brands often use this design

**The real difference**: In a 350 sq ft bedroom, you'll notice the difference in electricity costs and cooling speed. In a 600+ sq ft space, dual-hose becomes worthwhile.

## Noise Levels and Where They Matter

Portable ACs are loud. Most produce 50–57 dB at normal operation. To put that in perspective:
- 50 dB = quiet office
- 55 dB = normal conversation
- 60 dB = busy traffic

If you're using the AC in a bedroom, prioritize units under 54 dB. The De'Longhi Pinguino (50 dB) and Whynter dual-hose (52 dB) are among the quietest. Budget models often hit 56+ dB, which becomes annoying at night.

## Energy Ratings and Operating Costs

**Energy Star certified** portable ACs use 10–15% less electricity than standard models. At $0.13 per kWh (US average), a 1500-watt heater costs about $0.20 per hour to run. Over a month of continuous use, that's $144. An Energy Star unit running the same space might cost $120–$130.

For a portable AC, Energy Star certification usually means better compressor efficiency and improved hose design. The upfront cost is $50–$100 higher, but you recover it in 1–2 years of use.

## What Matters Most: Your Priorities

**If you're renting**: Choose a single-hose 8,000–10,000 BTU budget model ($300–$400). You won't stay long enough to justify premium pricing. Prioritize wheel quality and easy window installation.

**If you have allergies or asthma**: Ensure the unit has a washable pre-filter. Portable ACs pull unconditioned outdoor air through the condenser, so they're not purifying your room. A decent filter prevents dust from recirculating.

**If you want cool nights**: Buy a model with a timer and programmable temperature. You want to cool your bedroom to 68°F, then have it shut off at midnight without waking up.

**If you have a large room (400+ sq ft)**: Invest in a 12,000–14,000 BTU dual-hose unit. The extra efficiency compounds over months of summer use.

**If noise bothers you**: Check reviews for actual noise levels. Marketing claims are unreliable. Buy a model tested under real conditions; 50–52 dB is genuinely quiet.

## Common Mistakes to Avoid

- **Oversizing**: Buying a 14,000 BTU unit for a 300 sq ft room wastes money and runs inefficiently.
- **Ignoring hose size**: A kinked or poorly-routed hose reduces cooling by 20%. Invest in a quality window kit.
- **Not venting properly**: Closing the vent with a blanket or board defeats the unit's entire function. Always vent to outside.
- **Neglecting drainage**: Standing water in the drain pan creates mold. Empty it weekly during summer months.
- **Buying without a window kit**: Window installations vary widely. Ensure the unit includes a kit for your window type.

## Conclusion

Portable ACs are practical for renters and rooms where permanent installation isn't possible. Choose single-hose for small spaces and budgets under $400. Invest in dual-hose for larger rooms and long-term efficiency. Prioritize Energy Star certification if you'll run it frequently. Size for 20 BTU per square foot, buy a unit with proper drainage and timer controls, and make sure the window kit fits your setup. With the right choice, a portable AC gives you years of reliable summer cooling without the commitment of a permanent installation.`,
  },

  "best-space-heaters-for-large-rooms": {
    slug: "best-space-heaters-for-large-rooms",
    title: "Best Space Heaters for Large Rooms in 2026",
    description:
      "Learn which space heaters work best for rooms over 300 sq ft, the differences between ceramic, oil-filled, and infrared, and how to heat large spaces safely.",
    category: "climate-control",
    content: `## Introduction

Space heaters promise efficient room heating without raising your whole-house thermostat. But most are designed for small offices and bedrooms—around 200 square feet. What if your living room is 500 sq ft? Can you realistically heat a large space with a portable heater, or are you wasting electricity? This guide covers the realities of heating large rooms and which heaters actually work.

## The 1500W Ceiling: Why Your Outlet Matters

Every standard wall outlet in North America is rated for 15 amps at 120 volts, which equals 1,800 watts maximum. Consumer space heaters are capped at 1500W for safety (to account for other devices on the circuit). This is a hard ceiling, not a limitation you can overcome by buying a fancier model.

1500 watts produces roughly 5,118 BTU of heat per hour. To compare: a portable AC's heat output is rated in BTU; your space heater produces the same energy but releases it as warmth instead of cooling.

**The implication**: If your large room requires 12,000 BTU to heat (a typical large room in winter), a 1500W space heater provides only 40% of that requirement. It supplements your central heating; it doesn't replace it.

## Ceramic vs. Oil-Filled vs. Infrared Heaters

**Ceramic heaters** ($40–$80):
- Heat a ceramic element with electric coils; a fan blows warm air
- Quick warm-up (reach full heat in 2–3 minutes)
- Good for immediate personal warmth
- Air-based heating; most effective in enclosed rooms
- Risk: if they tip over or overheat, they shut off automatically
- Best for: offices, bedrooms, quick supplemental heat

**Oil-filled heaters** ($80–$150):
- Use electricity to heat mineral oil inside sealed metal fins
- Slow warm-up (15–25 minutes) but sustained heat
- Heat radiates from the entire surface, not from blown air
- Lower noise level (only 38–40 dB for many models)
- Better for all-night bedroom heating (silent operation)
- Risk: They stay hot to the touch; not ideal with children
- Best for: bedrooms, quiet offices, extended heating periods

**Infrared heaters** ($60–$200):
- Emit infrared light that warms objects and people directly, not air
- Efficient for open spaces and targeted heating
- Good for garages, workshops, and outdoor patios
- Less effective in closed rooms with lots of air circulation
- Can feel "cool air" around the room despite actual warmth
- Risk: Direct infrared exposure can feel uncomfortable; never point at people continuously
- Best for: workshops, open garages, supplementing large spaces

## Heating Large Rooms: Realistic Expectations

A 400+ sq ft room needs consistent heating from multiple sources or zone control (closing off other rooms, focusing heat in one space).

**Scenario 1: Large living room, open floor plan**
Your space heater can make the couch area warm while the rest of the room stays cool. This is called zone heating, and it's the heater's real strength.

**Scenario 2: Large bedroom (20 x 20 feet)**
A single oil-filled heater at the foot of the bed can heat enough air that you sleep comfortably. The rest of the room might stay cold, but you're not paying to heat unused space.

**Scenario 3: Large room, closed door**
If you can close the room off from the rest of your home, a space heater works much better. Every BTU stays in your target space instead of leaking out.

**Realistic target**: A 1500W heater effectively heats 250–350 sq ft with consistent running. For 400+ sq ft, add zone control (close off areas you don't use) or accept that one heater supplements rather than replaces your central system.

## Wattage vs. BTU: The Math

1500 watts = 5,118 BTU per hour (continuously, if running flat-out).
If your room loses 10,000 BTU per hour in winter, a 1500W heater covers half.

**Calculation for your room**: Get a blunt number from your utility company or a rough calculation: 10–15 BTU per square foot of room for mild insulation, 15–20 BTU per sq ft for poor insulation. A 400 sq ft room with average insulation needs 4,000–8,000 BTU per hour. A 1500W heater (5,118 BTU/hr) can meet that if the room is well-sealed and your base temperature is already 55°F.

## Safety Features for Large Rooms

Running a space heater for 8+ hours in a large room requires robust safety:

- **Tip-over protection**: Heater shuts off if knocked over. Non-negotiable.
- **Overheat protection**: Thermostat cuts power if internal temp exceeds safe limits.
- **Automatic shut-off timer**: Prevents accidental all-day running. Critical for bedrooms.
- **Cool-touch exterior**: Oil-filled heaters stay warm; ceramic and infrared fans should have cool-touch casings.
- **Short power cord**: A 6-foot cord keeps the heater visible and within sight; 15+ foot extension cords invite hazards (coiling, tripping).

## Best Large-Room Heater Models

**For silent, sustained heat**: De'Longhi oil-filled TRD40615E ($99). Heats 250 sq ft consistently; ideal for large bedrooms where you don't want noise.

**For quick personal warmth**: Dreo Ceramic Atom 316 ($59). Ceramic heating, WiFi timer, compact. Good for zoning in large spaces.

**For dual heating/cooling**: Lasko FH500 ($79). Acts as a heater and summer fan, covering temperature swings in large rooms year-round.

**For workshop/large garage**: Mr. Heater Buddy ($119). Propane-powered, 9,000 BTU, suitable for uninsulated spaces where electric heaters struggle.

## Electricity Costs: Running the Numbers

A 1500W heater running continuously costs:

- **24 hours**: 36 kWh = $4.68 (at $0.13 per kWh)
- **1 month**: $140
- **3 months (winter)**: $420

**To save money in a large room**:
- Run the heater only when you're in the room
- Lower your whole-house temp to 62°F and supplement with the heater in your living area
- Use a timer to avoid all-night operation
- Maintain insulation (close doors, seal drafts)

An oil-filled heater at lower wattage (often 750W on a low setting) uses half the electricity but heats slower. For large rooms, the trade-off is marginal.

## Conclusion

Space heaters work for large rooms when expectations are realistic. A single 1500W unit supplements central heating and effectively heats 250–350 sq ft. For larger spaces, zone control is key: close off unused areas, place the heater in your primary living zone, and run it when you're there. Choose ceramic for quick warmth and personal comfort, oil-filled for silent sustained heat in bedrooms, and propane or infrared for garages and open spaces. Pair your heater with a timer, maintain safety features, and accept that it reduces utility bills by 10–15% rather than replacing your furnace entirely. In large rooms, a space heater is a tool for comfort, not a standalone heating solution.`,
  },

  "portable-ac-vs-window-ac": {
    slug: "portable-ac-vs-window-ac",
    title: "Portable AC vs Window AC: Which Should You Buy?",
    description:
      "Compare portable and window air conditioners on efficiency, installation, noise, portability, and restrictions. Find out which is truly better and when portable is your only option.",
    category: "climate-control",
    content: `## Introduction

Portable and window air conditioners both cool your room—but one is significantly more efficient and the other is more flexible. This guide cuts through the marketing and shows you the genuine differences so you can choose the right one for your situation and budget.

## Efficiency: Why Window Units Win

A window AC is always more efficient than a portable AC. Here's why:

**Window ACs**: The compressor, condenser, and the heat-rejection unit sit outside your window. Only cool air comes back into your room. The exterior part dumps all heat directly outdoors.

**Portable ACs**: One or two hoses connect to your window, but the entire unit sits in your room. The compressor and condenser sit inside with you, radiating heat into the room, then trying to expel it through the hose. It's fighting its own waste heat.

**Real-world efficiency difference**: A window AC uses 10–20% less electricity than a portable AC for the same cooling capacity. Over a summer of running 8 hours a day, a window unit could cost $100–$200 less in utilities.

## Installation: Portable Wins Hands Down

**Window AC installation**:
- Remove the existing window insert (or part of the sash)
- Install the mounting frame
- Insert and secure the unit
- Seal gaps with weatherstripping and caulk
- May require power drilling or permanent modification
- Takes 45–90 minutes the first time
- Nearly impossible to remove without leaving marks

**Portable AC installation**:
- Roll the unit into place
- Insert the flexible hose into a window vent kit
- Vent kit goes into the window; can be removed without marks
- Plug in the power cord
- Takes 5 minutes
- Fully reversible; no permanent changes

**For renters**: Portable AC is required. Landlords rarely allow window modifications.

## Noise Levels

**Window ACs**: 70–80 dB. They're loud. The compressor and condenser run outside, but the fan and air circulation inside still produce significant noise. Many people find them too loud for bedrooms.

**Portable ACs**: 50–60 dB. Because the cooling components are in your room, you hear the compressor and fan, but the hose noise is relatively low. Budget portable ACs are comparable to window units in noise; premium ones (Whynter, De'Longhi) are noticeably quieter.

**Winner for quiet cooling**: Portable ACs, especially premium models.

## Portability and Flexibility

**Window ACs**:
- Heavy (40–70 lbs)
- Once installed, you're essentially stuck with it for the season
- Installation in one window means that window is non-functional
- Removing and storing requires effort and space
- Not suitable for temporary cooling (short-term rentals, seasonal use)

**Portable ACs**:
- Light enough to move (60–85 lbs) but requires effort
- Most have wheels for easy rolling
- Fully portable between rooms (with reorientation of the hose)
- Easy to store in a closet or garage in off-season
- Ideal for temporary cooling situations

**Winner for flexibility**: Portable ACs, especially those with wheels.

## Space and Aesthetics

**Window ACs**:
- Take up no floor space
- Block part of the window, reducing light and view
- Visible from inside and outside the room
- Some people find them visually obtrusive

**Portable ACs**:
- Take up 2–3 sq ft of floor space
- Don't block the window (the hose is thin)
- Taller units may feel imposing (3–4 feet high)
- Some modern designs look sleek; others look industrial

**Winner for space**: Window ACs (no floor space); for view and light, portable ACs.

## Cost Comparison

**Window AC**: $150–$500
- Single hose portable AC: $300–$500
- Dual hose portable AC: $500–$700
- Premium window unit: $400–$800

For the same cooling capacity, window and portable ACs cost roughly the same upfront. But the 10–20% efficiency gain of a window unit means lower operating costs.

## Landlord and HOA Restrictions

**Many apartment leases and HOAs prohibit window AC installation**. Reasons include:
- Permanent modification to the building
- Window seal and weatherproofing damage
- Aesthetics (all units must match)
- Safety (units falling from windows, liability)

Portable ACs, because they're non-invasive, are almost always allowed. Check your lease, but it's rare to need landlord approval for a portable unit.

## When to Choose Portable AC

1. **You're renting** — No lease permission needed; fully reversible
2. **You want to cool multiple rooms** — One portable unit can move between rooms; window units are fixed
3. **Noise matters** — Premium portable ACs are quieter than window units
4. **Your windows are unusual** — Very old windows, large picture windows, or sliding glass doors may not accept standard window units
5. **You value portability** — Plan to move, or want temporary seasonal cooling
6. **You don't want to sacrifice the view** — Windows stay functional

## When to Choose Window AC

1. **Efficiency is the priority** — Window ACs use 10–20% less electricity
2. **You own your home and aren't moving** — Install once, use for years
3. **Floor space is limited** — Window ACs use zero floor space
4. **Noise is slightly less important** — Acceptable for living rooms, less ideal for bedrooms
5. **You want cold air faster** — Window units reach full cooling slightly faster due to efficiency
6. **Your electric bill is high** — Long-term savings on a window unit offset the installation effort

## The Hybrid Approach

Some people use both: a window AC in the bedroom for all-night cooling efficiency, and a portable AC that moves between the living room and home office during the day. This maximizes flexibility while keeping the bedroom cool and efficient.

## Conclusion

Window ACs are 10–20% more efficient than portable ACs and have lower operating costs over time. Portable ACs are more flexible, quieter (in premium models), easier to install, and renter-friendly. For renters, apartments, and anyone who values portability, portable AC is the clear choice. For homeowners prioritizing long-term efficiency and who don't mind a permanent window installation, a window AC saves money and electricity. Choose portable if restrictions exist or flexibility matters. Choose window if efficiency and permanent installation align with your situation.`,
  },

  "space-heater-energy-costs": {
    slug: "space-heater-energy-costs",
    title: "How Much Does It Cost to Run a Space Heater? Energy Calculator",
    description:
      "Calculate the true electricity cost of running a space heater, compare to central heating, and learn which types use the least energy.",
    category: "climate-control",
    content: `## Introduction

Space heaters promise efficient supplemental warmth without raising your whole-house thermostat. But they use a lot of electricity. How much will running one actually cost you? This guide includes a calculator and breaks down the real economics of space heater use versus adjusting your central heating.

## The Energy Math: Watts to Cost

All space heaters, regardless of type, convert electrical energy to heat at approximately the same efficiency rate (85–95% actual heat output, with the remainder dissipating in the surrounding air).

**Standard household circuit**: 120 volts, 15 amps maximum = 1,800 watts total capacity. Consumer space heaters max out at 1,500 watts for safety.

**Electricity cost formula**:
- Watts × Hours ÷ 1,000 = kWh (kilowatt-hours)
- kWh × Your local rate per kWh = Cost

**Example: 1,500W heater running 8 hours at $0.13 per kWh**
- 1,500 × 8 ÷ 1,000 = 12 kWh
- 12 × $0.13 = $1.56 per day
- $1.56 × 30 days = $46.80 per month

## Breakdown by Heater Type

All 1,500W heaters consume the same electricity, but how they use it differs:

**Ceramic heaters** (1,500W):
- Use electric coils to heat a ceramic element
- Fan blows warm air (active energy use for the fan, ~50W overhead)
- Cost: ~$1.95 per 8-hour day
- Best for: Quick warmth, personal spaces, daytime use

**Oil-filled heaters** (1,500W):
- Electric coil heats oil, which radiates through metal fins
- No fan, so slightly lower total consumption (~1,400W actual)
- Cost: ~$1.80 per 8-hour day (slightly less due to passive radiation)
- Best for: Sustained warmth, nighttime heating, silent operation

**Infrared heaters** (1,000–1,500W):
- Heat objects and people directly, not air
- No fan means efficient operation
- Variable wattage models (750W–1,500W) let you reduce consumption
- Cost: $0.98–$1.95 per 8-hour day depending on setting
- Best for: Workshops, garages, zoned heating

**Lower-wattage settings** (750W):
- All space heaters allow 50% power reduction on low setting
- Cost: ~$0.98 per 8-hour day
- Useful for supplementing weak rooms without full expense

## Monthly and Seasonal Costs

**1,500W heater, 8 hours per day**:
- Per day: $1.56
- Per week: $10.92
- Per month (30 days): $46.80
- Per 3-month winter (Nov–Jan): $140.40

**1,500W heater, 24 hours per day** (always on):
- Per day: $4.68
- Per month: $140.40
- Per 3-month winter: $421.20

**750W heater, 8 hours per day** (low setting):
- Per day: $0.78
- Per month: $23.40
- Per 3-month winter: $70.20

## Space Heater vs. Adjusting Your Thermostat: Which Is Cheaper?

Assume a 2,000 sq ft home with a gas furnace:

**Central heating costs by fuel**:
- Natural gas: $0.80–$1.20 per therm (~100,000 BTU)
- Oil heating: $2.50–$3.50 per gallon
- Electric heat pump: $0.10–$0.14 per kWh
- Resistive electric heating: $0.13–$0.16 per kWh (rare in homes, common in apartments)

**Scenario: Lower your whole house from 70°F to 65°F (5-degree reduction)**

For a 2,000 sq ft home with average insulation, lowering the temperature 5°F saves roughly 10–15% on heating cost. In winter, that's $30–$50 per month savings.

**Using a space heater to replace that reduction**:
- Heat one room (200 sq ft) from 65°F to 70°F
- 1,500W heater, 8 hours/day = $46.80/month

**The verdict**: It's cheaper to lower your whole-house thermostat by 5°F (saves $30–$50) than to run a space heater in one room (costs $45–$140). The exception: if you spend time in only one room, a space heater + house-wide lower temp can beat central heating alone.

## True Cost Comparison: Heater vs. Central System

**Central heating scenario**:
- Whole house at 70°F for 8 hours (awake) and 65°F at night (8 hours)
- Average temp: 67.5°F
- Fuel: Natural gas
- Monthly cost: ~$140

**Space heater scenario**:
- Whole house at 62°F (base temp)
- One room (bedroom) with 1,500W heater for 8 hours at night
- Central system doesn't run as much
- Heater cost: $46.80/month
- Central system savings (lower base): $30–$50/month
- Net cost: $0–$15/month for warm bedroom

**The win**: In this scenario, the space heater saves money by allowing you to keep the house cold and only heat the space you're in.

## Real-World Cost Examples

**Example 1: 200 sq ft office in a cold house**
- Central heat at 62°F, office heater at 70°F
- 1,500W for 8 hours = $46.80/month
- Central system savings = $40–$50/month
- Net cost: Very low; you win

**Example 2: Large living room supplement**
- House at 68°F, but living room is cold
- 1,500W for 4 hours daily = $23.40/month
- Marginal value (mild comfort improvement)
- Cost: Noticeable but manageable

**Example 3: All-night bedroom heating**
- House at 65°F, bedroom at 70°F
- 1,500W for 10 hours (evening and night) = $58.50/month
- Furnace running less = $30–$40/month savings
- Net cost: ~$20/month for comfort

## Tips to Reduce Space Heater Costs

1. **Use the low setting (750W)**: Cuts costs in half; reaches 60–65°F adequately
2. **Use a timer**: Don't leave it on 24/7; heat only when the room is occupied
3. **Close the room off**: If you can seal a small room, one heater warms it faster and maintains heat better
4. **Insulate windows**: Seal air leaks and drafts to reduce heat loss
5. **Combine with thermostat reduction**: Lower the house temp to 62–64°F and supplement one room
6. **Use intermittently**: Turn on for 1–2 hours, build up warmth, then turn off; the room retains heat

## The Verdict: Is a Space Heater Cost-Effective?

**Yes, if**:
- You heat only one small room (under 300 sq ft)
- You run it 4–8 hours per day, not 24/7
- You combine it with a lower house thermostat
- Your energy is expensive (over $0.12 per kWh)

**No, if**:
- You're trying to heat a large space (400+ sq ft)
- You run it constantly
- You're heating the whole house instead of raising your thermostat
- Your energy costs are low (under $0.10 per kWh)

## Conclusion

A 1,500W space heater costs $1.56–$4.68 per day depending on usage (8–24 hours). Over a month, expect $45–$140. The cost-benefit depends on your situation: if you're heating one room and can lower your whole-house thermostat, a space heater provides comfort at marginal extra cost. If you're trying to heat multiple rooms or the whole house, you're wasting money. Use a space heater to create comfort in one primary room while lowering the house-wide temperature. Combine it with a timer, low-setting operation, and insulation improvements to minimize cost. For most households, a space heater is economically justified as a supplement, not a replacement for central heating.`,
  },
};

export function getClimateControlArticle(slug: string): ClimateControlArticle | null {
  return climateControlArticles[slug] || null;
}

export function getAllClimateControlArticleSlugs(): string[] {
  return Object.keys(climateControlArticles);
}
