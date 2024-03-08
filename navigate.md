---
layout: page
title: How to Navigate
subtitle: <br>
callouts: false
show_sidebar: false
hero_height: is-small

hero_image: ../img/navigate.jpg
---

{% include notification.html message="WEBSITE UNDER CONSTRUCTION" 
status="is-danger" 
icon="fas fa-exclamation-triangle" %}

# PowerBI usage

Each PowerBI screen shows a graph with selectors above it that allow you to drill down inside the data, and see summary results on the right side. 

When the mouse stays on an item of the graph, a pop-up screen shows some characteristics of that item. By clicking on a legend item, the related data is highlighted on the graph and the summary results on the right side reflect the selected legend item. 

There are several selectors:

- **Scenario** (Interactive Results only) : select the scenario you want to analyse, together with the value of the parameter as explained in the [Interactive Results section](../simulations/all_simulations):

<img src="../img/scenario_nav.png" alt="scenario navigation" width="30%" height="auto" style="min-width: 300px">

- **Commodity**: select Electricity, Hydrogen or Methane or CO<sub>2</sub> all, depending on the graph:

<img src="../img/nav_commodity.png" alt="commodity navigation" width="50%" height="auto" style="min-width: 300px">

- **Cluster**: select INLAND, COASTAL, OFFSHORE, INTERCLUSTER (for grid capacities) or all, depending on the graph:

<img src="../img/nav_cluster.png" alt="cluster navigation" width="50%" height="auto" style="min-width: 300px">

- **Date**: Zoom in the calendar year by moving the circles (default value: 1 January 2050 to 31 December 2050):

<img src="../img/nav_date.png" alt="cluster date" width="30%" height="auto" style="min-width: 300px">

- **Year/Month/Day view**: the default view is shows data by Month; click on the left upper arrow to go up one level; click to the middle down arrow <img src="../img/nav_in_pb.png" alt="double arrow button" style="width: 2em; vertical-align: middle;"> to go down one level:

<img src="../img/nav_year.png" alt="cluster year" width="30%" height="auto" style="min-width: 300px">

This menu is displayed when hoovering over the graphics.

- **Full screen mode**: click on the “enlarge” icon in the bottom left corner to show the PowerBI scree in full screen:

<img src="../img/nav_full_screen.png" alt="Full screen icon" width="30%" height="auto" style="min-width: 300px">

click on <Escape> or on the “reduce” icon in the bottom line to go back to the initial size:

<img src="../img/nav_close.png" alt="Close Full screen" width="30%" height="auto" style="min-width: 300px">

- **Selection of Analysis (Interactive Results only)**: select the right analysis by scrolling through the pages in the navigation bar at the bottom:

<img src="../img/nav_pages.png" alt="navigation pages" width="20%" height="auto" style="min-width: 300px">

In full screen mode, the analysis can also be selected using a dropdown menu by clicking on the page number:

<img src="../img/nav_menu.png" alt="navigation menu" width="16%" height="auto" style="min-width: 150px">


The following analyses are presented in the [Base Case section](../simulations/base_case) and in the [Interactive Results section](../simulations/all_simulations):

- **Energy Balances**: for the chosen commodity (electricity, methane, hydrogen), the quantities above the axis enter the energy system – production, imports, conversion (in), storage (in) –, while the quantities below the axis exit the energy system – consumption, exports, conversion (out), storage (out); quantities are in GWh (Low Heating Value for methane and hydrogen);
- **Capacities**: installed capacities (existing + new) for every technology, sorted in decreasing order; quantities are in GW of production and conversion capacity, in GWh for storage capacity and kt/h for CO<sub>2</sub> capacity;
- **CO<sub>2</sub> Balance**: the quantities above the axis show CO<sub>2</sub> emissions, while the quantities below the axis show CO<sub>2</sub> removals or compensations (e.g. biomethane); quantities are in ktCO<sub>2</sub>;
- **Cost Overview**: the left graph shows the total system cost per commodity, in M€/year; the left graph shows de cost by technology, in M€/year, in descending order; by selecting one commodity in the left graph, the right graph zooms on the technologies for the selected commodity;
- **Energy Storage**: quantity of commodity (filling level)  over time for each storage technology; quantities are in GWh for energy commodities or kt for CO<sub>2</sub>;
- **Marginal Costs**: for each commodity and each hour, the marginal cost is calculated in €/MWh – this should reflect the market value; cost is in €/MWh; the CO<sub>2</sub> value in €/tCO<sub>2</sub> reflects the marginal abatement cost of CO<sub>2</sub> emissions.