---
layout: page
title: Sensitivities
subtitle: High Renewable
menubar: menu_sensitivities
menubar_collapsable: True
show_sidebar: false
hero_height: is-small
hero_image: ../../img/high_renew2.jpg
right_link: /simulations/all_simulations
right_link_name: Interactive Results
---

As the potential of wind onshore and wind offshore is fully installed in the base case, this sensitivity analyses whether higher capacities would be installed in an optimal energy system if the potential would be higher. Belgian system with a potential of 103.3 GW of solar PV, 20.5 GW of onshore wind and 9.3 GW of offshore wind, instead of 50, 9 and 8 GW respectively:

![Base case summary](../../img/highrenewable.png)


All parameters are identical to the base case, except the potential for renewable electricity in Belgium in 2050, which is now set according to an [Energyville study](../../methodology/#notes):


<div class="table-container" markdown="1">

|                | High Renewable (GW) | Base Case (GW) |
|----------------|---------------------|----------------|
| Solar PV       | 103.3               | 50             |         
| Onshore wind   | 20.5                | 9              |  
| Offshore wind  | 9.3                 | 8              |

</div>

The full potential of onshore wind (9.3 GW) and offshore wind (20.5 GW) is deployed. Solar PV remains limited to 28.48 GW, due to the limitation of curtailment and power on the electricity grid.

Consequently the production of renewable electricity raises to 100.79 TWh from 73.31 TWh in the base case. There is a decrease in CCGT production to 48.40 TWh from 61.32 TWh in the base case.

Hydrogen production in the OFFSHORE cluster becomes significant, reaching 5.49 TWh, a stark contrast to its negligible presence in the base case. This is a notable rise in energy from offshore sources directly converted into hydrogen. Consequently, 1.57 GW of electrolyzers are deployed in the OFFSHORE cluster. It is connected to the COASTAL cluster through a 1.57 GW-hydrogen pipeline.

In the COASTAL cluster, the electrolyzer capacity increases to 3.33 GW from 1.03 GW in the base Case, leading to a fourfold increase in hydrogen production. This boost stems from the amplified generation of green electricity. It is interconnected to the INLAND cluster through a 4.90 GW-pipeline, instead of 1.06 GW.

The capacities of HVAC lines are slightly affected: the electricity line from the OFFSHORE cluster to the COASTAL cluster has a capacity of 5.87 GW instead of 6.84 GW in the base case; and the electricity interconnector from the COASTAL cluster to the INLAND cluster has a capacity of 5.66 GW instead of 6.54 GW.

With more intermittent renewables, the capacity of batteries increases by 30-50% in the OFFSHORE, COASTAL and INLAND clusters, to 1.96, 14.41 and 23.83 GWh, respectively. Hydrogen imports decrease to 65.03 TWh from 75.97 TWh as more hydrogen is produced domestically. Natural gas imports also decrease to [] from [] due to a lower use in electricity generation. However, the volume of electricity imported remains similar.

With less CCGT production, the amount of CO<sub>2</sub> captured by PCCC is reduced to [x] from 18.09 Mt of CO<sub>2</sub> in the base case. As less CO<sub>2</sub> is emitted in CCGTs, less CO<sub>2</sub> is captured and exported to Norway: from 21.76 Mt to 17.41 Mt of CO<sub>2</sub>.

The total system cost is a bit lower: €19.77 billion per year instead of €20.39 billion of the base case. The cost per technology has the same trends as in the base case, with additional cost for offshore wind and electrolysers, but lower cost for the hydrogen imports and for the carbon capture value chain. The lower system cost results in a lower average energy cost of €85.44/MWh instead of €89.84/MWh. This is roughly 5% lower than in the base case.

All the results can be visualised in the [Interactive Results](../all_simulations) section by selecting the "High Renewable" scenario. 