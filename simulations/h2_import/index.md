---
layout: page
title: Sensitivities
subtitle: H<sub>2</sub> Import Cost
menubar: menu_sensitivities
menubar_collapsable: True
show_sidebar: false
hero_height: is-small
hero_image: ../../img/hydrogen.jpg
right_link: /simulations/all_simulations
right_link_name: Interactive Results
---

The production and transportation costs of hydrogen are key in the decision to use electricity or hydrogen for offshore energy transport. It is therefore important to study the behavior of factors that influence these costs. In this sensitivity analysis, we analyse the impact of the H<sub>2</sub> import price is assessed, which can help identify a threshold beyond which importation is no longer profitable compared to offshore or onshore production. The Belgian system with a higher H<sub>2</sub> import cost of €300/MWh instead of €75/MWh:

![Base case summary](../../img/h2import.png)

In the base case, the import price of hydrogen was fixed at €75/MWh, equivalent to €2.5/kgH<sub>2</sub>. In this sensitivity analysis, we are exploring a range from €75 to €300/MWh, in order to understand how hydrogen demand is fulfilled and assess its impact on CO<sub>2</sub> emissions and electricity production.

The middle part of the next figure shows that the amount of imported hydrogen decreases as the price of importing H<sub>2</sub> increases, dwindling to a negligible amount at €300/MWh.

In the OFFSHORE cluster, raising the cost of H<sub>2</sub> imports initially boosts the production of electrolysers, as depicted in the central part of the next figure. At €106/MWh (€3.53/kgH<sub>2</sub>), electrolysis plants in the OFFSHORE cluster hit a peak capacity at 620 MW, generating 2.1 TWh of hydrogen. Consequently, the required capacity for new electricity transmission lines decreases from 4.54 GW to 3.8 GW.

<div class="columns">
  <div class="column is-4 has-text-centered">
    <img alt="DAC cost H<sub>2</sub> elec prod" src="../../img/DAC_cost_h2_h2_cap-1.png">
  </div>
  <div class="column is-4 has-text-centered">
    <img alt="DAC cost H<sub>2</sub> ng import" src="../../img/DAC_cost_h2_h2_tot_prod-1.png">
  </div>
  <div class="column is-4 has-text-centered">
    <img alt="DAC cost H<sub>2</sub> obj" src="../../img/DAC_cost_h2_inter_cap-1.png">
  </div>
</div>

However, at this price, the majority of hydrogen is still produced in the COASTAL cluster, with a capacity of 2.86 GW and a production of 7.3 TWh, compared to 1.03 GW and a production of 1.6 TWh in the base case at €75/MWh. However, most of the hydrogen remains imported.

Beyond €106/MWh, steam methane reformers become cheaper to produce H<sub>2</sub> from CH4, but with added costs linked to capturing its CO<sub>2</sub> emissions (PCCC units, DAC needed for capturing remaining CO<sub>2</sub>), and CO<sub>2</sub> export. Hydrogen is not entirely produced by SMRs because of the limit on CO<sub>2</sub> export, as illustrated in the middle side of the next figure.

<div class="columns">
  <div class="column is-4 has-text-centered">
    <img alt="DAC cost H<sub>2</sub> elec prod" src="../../img/DAC_cost_h2_elec_prod-1.png">
  </div>
  <div class="column is-4 has-text-centered">
    <img alt="DAC cost H<sub>2</sub> ng import" src="../../img/DAC_cost_h2_ng_imp-1.png">
  </div>
  <div class="column is-4 has-text-centered">
    <img alt="DAC cost h2 obj" src="../../img/DAC_cost_h2_obj-1.png">
  </div>
</div>

When the electricity price reaches €108/MWh, the CO<sub>2</sub> export limit is reached, resulting in a balance between the production of CCGT and SMRs. Between €108/MWh and €187.5/MWh, an increase in SMR production causes a decrease in electricity generated from CCGT. To compensate for the shortage, solar PV generates more electricity, while electrolysers produce slightly less. Beyond €174/MWh, it becomes profitable to import synthetic methane, enabling SMR to produce hydrogen without capturing all emitted CO<sub>2</sub>.

At €187.5/MWh, solar PVs reach their maximum capacity. To offset the reduced CCGT production, less hydrogen is produced from green electricity. Imports of synthetic methane further increase to produce hydrogen by SMRs. Around €300/MWh, only a negligible amount of hydrogen is imported, with the majority being produced by SMRs.

All results can be visualised in the [Interactive Results section](../all_simulations) by selecting a “H<sub>2</sub> Import Cost” scenario with the specified H<sub>2</sub> import cost.