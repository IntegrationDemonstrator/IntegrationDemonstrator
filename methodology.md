---
layout: page
title: Methodology
subtitle: <br>
callouts: false
show_sidebar: false
hero_height: is-small
hero_image: ../img/math13.jpg

---

{% include notification.html message="WEBSITE UNDER CONSTRUCTION" 
status="is-danger" 
icon="fas fa-exclamation-triangle" %}

The complete mathematical formulation of the energy system is described in [Jocelyn’s paper]. Here are the main principles of the methodology defined to model the complete energy system.

# Topology 

The optimization problem is described as a hierarchical hypergraph composed of nodes connected by hyperedges. Each node can be seen as an optimization sub-problem with its own sets of parameters, variables, constraints, local objectives and its own sub-hypergraph. Constraints composed of variables from different nodes can then be defined in a hyperedge to connect different nodes. 

Nodes typically represent a technology or a process. 5 generic nodes model 5 types of technologies or processes: 

- **Conversion nodes**, converting a set of commodities into another set via a technology or process, taking into account conversion factors between commodities, capacity constraints, maximum deployable capacity, ramp-up and ramp-down constraints;
- **Flexibility nodes**, maintaining equilibrium between production and demand, including storage and demand-side response mechanisms (load shedding and load shifting), taking account of round-trip efficiency, injection and withdrawal constraints, storage capacity constraints;
- **Import/export nodes**, importing/exporting commodity from/to neighbouring countries, taking account of capacity constraints, maximum yearly import/export of commodity;
- **Transmission nodes**, transporting energy via electrical lines, methane pipelines and hydrogen pipelines, taking account of capacity constraints (in forward and/or reverse flow), maximum deployable capacity; 
- **Demand nodes**, consuming commodity according to yearly quantities defined in the Distributed Energy scenario of ENTSOG/ENTSO-E’s TYNDP 2022; if demand cannot be supplied, a high “Energy Not Served” cost is added to the total system cost.

A sixth node type, referred to as “cluster”, connects nodes and clusters producing/importing or consuming/exporting the same commodity and ensure the balance of flows for a commodity. 

Simulations are carried out on a one-year calendar period, with hourly resolution. 

# Main assumptions

The model is based on several key assumptions: 

- **Central planning and operation.** A single entity “system operator” makes investment decisions and manages the system with the aim of minimizing total system cost.
- **Perfect foresight and knowledge.** The system operator has complete knowledge and foresight: he knows all technical and economic aspects as well as weather events and demand patterns.
- **Optimal investment and operational decisions.** Investment decisions are made at the start of the time horizon and assets are immediately available. Hourly time steps are used to make operational decisions. Both the operational and investment decisions are resolved at the same time.
- **Models for technologies and process.** Input-output relations express mass and energy balances in order to size and operate each technology. Efficiencies, capacity constraints and ramp-up / ramp-down constraints are simulated. Storage systems assume that the filling level is the same at the beginning and at the end of the year, and take round-trip efficiency into account.

# GBOML

In the framework of the INTEGRATION project, **GBOML** – **G**raph-**B**ased **O**ptimization **M**odeling **L**anguage – has been developed to describe the topology and parameters of energy system optimisation problems. A compiler processes GBOML files, feeds a linear optimizer and gets results that can be analysed. The results yield the optimal capacity to build for each technology, the optimal use of each technology hour by hour (production, transported flow, converted flow, storage filling level), the total cost of the energy system and each technology, the “market price” of energy commidities hour by hour; the CO<sub>2</sub> abatement cost; the “Energy Not Served” and the “Curtailment” of variable renewable electricity.

The GBOML grammar and the compiler are open-source. They are available at [https://orbi.uliege.be/handle/2268/289210](https://orbi.uliege.be/handle/2268/289210). 

This demonstrator uses the GBOML language to process the Belgian energy system in 2050 and to get results that are presented and illustrated with graphs in the [Interactive Results section](../simulations/all_simulations).
# System description

The methodology is applied on Belgium’s energy system in 2050. The topology and parameters are described in the [System section](../system). It aims at a net-zero energy system composed of electricity, methane and hydrogen (including derivates like ammonia or methanol).

# Base Case, Sensitivities and Interactive Results

The main results of Belgium’s energy system in 2050 are presented in the [Base Case section](../simulations/base_case) with PowerBI graphs that help to analyse the detailed results of the optimal energy system. 

Some parameters of the base case have been modified to analyse how they influence results. These Sensitivities are presented in the [Sensitivities section](../simulation) with PowerBI screens highlighting the changes: 

- **Sensitivity 1 “High Renewable”**: the potential of solar PV, onshore and offshore wind is increased in order to test how much variable RES can be integrated into the Belgian energy system;
- **Sensitivity 2: “Farther Offshore Wind”**: the distance of offshore wind is increased to detect when it is more interesting to produce hydrogen offshore rather than transporting it as electricity;
- **Sensitivity 3: “CO<sub>2</sub> Budget”**: if some CO<sub>2</sub> emissions are allowed in 2050 (within a net-zero EU energy system), the optimal energy system in Belgium is cheaper and looks different;
- **Sensitivity 4: “H<sub>2</sub> Import Cost”**: the cost of importing hydrogen is modified to showcase the trade-off  between imports and domestic production, possibly impacting renewable electricity deployment;
- **Sensitivity 5: “CO<sub>2</sub> Export Capacity”**: the capacity to export CO<sub>2</sub> by pipeline impacts the deployment of renewable electricity and the import of green energy.

The [Interactive Results section](../simulations/all_simulations) provides all data of the base case and sensitivities with the same level of detail as for the base case.

# Notes 
<div style="text-align: left" markdown="1"> 

- ENTSOG-ENTSO-E, Ten-Year Network Development Plan 2022, 2022, [https://2022.entsos-tyndp-scenarios.eu/](https://2022.entsos-tyndp-scenarios.eu/).
- Elia, Roadmap to net zero Elia Group’s vision on building a climate-neutral European energy system by 2050, 2021, [https://www.elia.be/-/media/project/elia/shared/documents/elia-group/publications/studies-and-reports/20211203_roadmap-to-net-zero_en.pdf](https://www.elia.be/-/media/project/elia/shared/documents/elia-group/publications/studies-and-reports/20211203_roadmap-to-net-zero_en.pdf).
- Valbiom study for gas.be, Quelle place pour le biométhane: le biométhane injectable en Belgique, 2021, [https://www.valbiom.be/sites/default/files/tool/file/Quelle%20place%20pour%20le%20biom%C3%A9thane%20en%20belgique.pdf](https://www.valbiom.be/sites/default/files/tool/file/Quelle%20place%20pour%20le%20biom%C3%A9thane%20en%20belgique.pdf).
- Energyville, F. M.-H. Wim Clymans Karolien Vermeiren, How much renewable energy can be generated within the belgian borders? (dynamic energy atlas), 2021, [ https://vito.be/en/news/how-much-renewable-electricity-can-be-generated-within-belgian-borders-dynamic-energy-atlas]( https://vito.be/en/news/how-much-renewable-electricity-can-be-generated-within-belgian-borders-dynamic-energy-atlas).

</div>


# References 

- Mathias Berger, David-Constantin Radu, Raphaël Fonteneau, Thierry Deschuyteneer, Ghislain -Detienne, and Damien Ernst, “The Role of Power-to-Gas and Carbon Capture Technologies in Cross-Sector Decarbonisation Strategies”, in Electric Power Systems Research, 180, 2020, [https://orbi.uliege.be/handle/2268/235110](https://orbi.uliege.be/handle/2268/235110).
- Mathias Berger, David-Constantin Radu, Detienne, Ghislain, Thierry Deschuyteneer, Aurore Richel, and Damien Ernst, “Remote Renewable Hubs for Carbon-Neutral Synthetic Fuel Production”, in Frontiers in Energy Research, 2021, [https://orbi.uliege.be/handle/2268/250796](https://orbi.uliege.be/handle/2268/250796).
- Bardhyl Miftari, Mathias Berger, Hatim Djelassi, and Damien Ernst , “GBOML: Graph-Based Optimization Modeling Language”, in Journal of Open Source Software, 2022, [https://orbi.uliege.be/handle/2268/289210](https://orbi.uliege.be/handle/2268/289210).
- Bardhyl Miftari, Mathias Berger, Hatim Djelassi, and Damien Ernst , “Graph-based optimization modeling language documentation”, online documentation, 2022, [https://gboml.readthedocs.io/en/latest/](https://gboml.readthedocs.io/en/latest/).
- Bardhyl Miftari, Mathias Berger, Guillaume Derval, Quentin Louveaux, and Damien Ernst , “GBOML: A Structure-exploiting Optimization Modelling Language in Python”, submitted and currently reviewed in Optimization Methods and Software, 2023, [https://orbi.uliege.be/handle/2268/296930](https://orbi.uliege.be/handle/2268/296930).

[add reference to Jocelyn paper]
