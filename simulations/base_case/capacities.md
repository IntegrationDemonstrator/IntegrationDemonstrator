---
layout: page
title: Base Case
subtitle: Capacities
menubar: menu_base_case
menubar_collapsable: True
show_sidebar: false
hero_height: is-small
hero_image: ../../../img/base.jpg
left_link: /simulations/base_case/energy_balance
left_link_name: Energy Balances
right_link: /simulations/base_case/carbon_balance
right_link_name: CO<sub>2</sub> Balance
---

First, have a look at [How to Navigate](../../../navigate) to grasp all the capabilities of the interactive results.

<div pbi-resize="powerbi" pbi-resize-src="https://app.powerbi.com/view?r=eyJrIjoiODc5NjA4ZTQtYTc4Ny00YTdkLWI0MWUtMmM0ZDY2ZWIzOWMwIiwidCI6ImRkOTczZjdjLTg0ZjUtNDcwYi05MWQwLTA0M2JlZTg3ZTA3ZiIsImMiOjh9" pbi-resize-min-width="600" pbi-default-width="600px" pbi-default-height="656" pbi-resize-width="16" pbi-resize-height="9" pbi-resize-load-event="page-load" pbi-resize-header="true" pbi-resize-m-src="https://app.powerbi.com/view?r=eyJrIjoiODc5NjA4ZTQtYTc4Ny00YTdkLWI0MWUtMmM0ZDY2ZWIzOWMwIiwidCI6ImRkOTczZjdjLTg0ZjUtNDcwYi05MWQwLTA0M2JlZTg3ZTA3ZiIsImMiOjh9" pbi-resize-m-width="9" pbi-resize-m-height="9" style="position: relative;"><iframe frameborder="0" allowfullscreen="true"></iframe></div><script type="text/javascript">
!function(){if("undefined"==typeof window.powerbiresizescript){window.powerbiresizescript=1;window.onmessage=function(event){var isReportPageLoadedEvent=function(event){try{if(event&&event.data&&event.data.url==='/reports/undefined/events/pageChanged'){return!0}}catch(error){return undefined}};if(isReportPageLoadedEvent(event)){var iframe=getIframeElement(event.source)
setTimeout(function(){if(iframe&&iframe.parentNode.children.length>1){switch(iframe.parentNode.getAttribute('pbi-resize-load-event')){case 'click':showElement(iframe);break;case 'page-load':case 'seconds-timeout':case 'in-view':var button=getChildByTag(iframe.parentNode,'div');setButtonState(button,'readynow');break}}},(iframe.parentNode.getAttribute('pbi-resize-delay-show')||1)*1000)}};function getChildByTag(parent,tagName){if(parent){for(var i=0;i<parent.children.length;i++){if(parent.children[i].tagName.toLowerCase()===tagName.toLowerCase()){return parent.children[i]}}}
return null}
function getIframeElement(srcWindow){var frames=document.getElementsByTagName('iframe');for(var i=0;i<frames.length;i++){if(frames[i].contentWindow===srcWindow){return frames[i]}}}
function showElement(iframe){if(!iframe){return}
var parent=iframe.parentNode;var button=getChildByTag(parent,'div');if(button){parent.removeChild(button)}
var spinner=getChildByTag(parent,'span');if(spinner){parent.removeChild(spinner)}
iframe.style.position='static';iframe.style.visibility='visible';var img=getChildByTag(parent,'img');if(img){parent.removeChild(img)}}
function setButtonState(button,state){button.setAttribute('data-state',state);var states=[{state:'waiting',text:button.getAttribute('pbi-resize-wait-txt')},{state:'loading',text:button.getAttribute('pbi-resize-load-txt')},{state:'loadingnow',text:button.getAttribute('pbi-resize-load-txt')},{state:'ready',text:button.getAttribute('pbi-resize-rdy-txt')},{state:'readynow',text:button.getAttribute('pbi-resize-load-txt')}]
var text='';for(var i=0;i<states.length;i++){if(states[i].state===state){text=states[i].text}}
var spinner=getChildByTag(button,'span');button.innerHTML=text+spinner.outerHTML;switch(state){case 'loading':button.onclick=function(){setButtonState(button,'loadingnow')}
button.parentNode.onclick=function(){setButtonState(button,'loadingnow')}
break;case 'readynow':resize();var iframe=getChildByTag(button.parentNode,'iframe');showElement(iframe)
break;case 'ready':resize();var spinner=getChildByTag(button,'span');spinner.style.display='none';button.style.width='auto';button.onclick=function(e){var iframe=getChildByTag(e.target.parentNode,'iframe');showElement(iframe)}
button.parentNode.onclick=function(e){var iframe=getChildByTag(e.target.parentNode,'iframe');showElement(iframe)}
break}}
var e=function(){for(var e=document.querySelectorAll('[pbi-resize="powerbi"]'),i=0;i<e.length;i++){e[i].style.width='100%';var actualWidth=e[i].clientWidth;var contentMinWidth=e[i].getAttribute("pbi-resize-min-width");var height=e[i].getAttribute('height');var webImg=e[i].getAttribute('pbi-resize-img');var mobileImg=e[i].getAttribute('pbi-resize-m-img')||webImg;var webWidth=e[i].getAttribute("pbi-resize-width");var webHeight=e[i].getAttribute("pbi-resize-height");var webSrc=e[i].getAttribute("pbi-resize-src");var mobileWidth=e[i].getAttribute("pbi-resize-m-width");var mobileHeight=e[i].getAttribute("pbi-resize-m-height");var mobileSrc=e[i].getAttribute("pbi-resize-m-src");var loadEvent=e[i].getAttribute('pbi-resize-load-event');var header=e[i].getAttribute('pbi-resize-header');var img=getChildByTag(e[i],'img');var iframe=getChildByTag(e[i],'iframe');var currentSrc=iframe?iframe.getAttribute('src'):null;var mobileRatio=mobileWidth/mobileHeight;var webRatio=webWidth/webHeight;var isWebSize=actualWidth>contentMinWidth;var newSrc=!(webSrc&&mobileSrc)?webSrc:(isWebSize?webSrc:mobileSrc);var resizedToWeb=((iframe&&iframe.src==mobileSrc)||(img&&img.src==mobileImg))&&isWebSize&&mobileSrc!=webSrc;var resizedToMobile=((iframe&&iframe.src==webSrc)||(img&&img.src==webImg))&&!isWebSize&&mobileSrc!=webSrc;var currentSrcIsImage=e[i].children.length>1?!0:!1;if(!currentSrc){if(iframe){iframe.style.position='absolute';iframe.style.top=0;iframe.style.left=0;iframe.style.visibility='hidden'}
if(img){img.setAttribute('src',(!isWebSize&&mobileImg)?mobileImg:webImg)}
if((!webImg&&webSrc&&isWebSize)||(!mobileImg&&mobileSrc&&!isWebSize)){iframe.setAttribute('src',(!isWebSize&&mobileSrc)?mobileSrc:webSrc);showElement(iframe);resize();break}else if((webImg&&webSrc)||(mobileImg&&mobileSrc)){var button=getChildByTag(e[i],'div');setButtonState(button,'waiting');switch(loadEvent){case 'page-load':loadIframe(iframe.parentNode,newSrc);break;case 'seconds-timeout':var timeout=parseInt(e[i].getAttribute('pbi-resize-seconds'))*1000;t=setTimeout(function(){loadIframe(iframe.parentNode,newSrc)},timeout);break;case 'in-view':if(currentSrcIsImage&&!iframe.src&&isInViewport(img)){loadIframe(iframe.parentNode,newSrc)}
window.addEventListener('scroll',function(){if(currentSrcIsImage&&!iframe.src&&isInViewport(img)){loadIframe(iframe.parentNode,newSrc)}},!1);break;case 'click':button.onclick=function(){loadIframe(iframe.parentNode,newSrc)}
e[i].firstChild.onclick=function(){loadIframe(iframe.parentNode,newSrc)}
break}}}
if((currentSrc==webImg&&!webImg&&webSrc&&isWebSize)||(currentSrc==mobileImg&&!mobileImg&&mobileSrc&&!isWebSize)){showElement(iframe)}
else if(resizedToMobile||resizedToWeb){changeCurrentSrc(e[i].children[0],isWebSize,currentSrcIsImage?webImg:webSrc,currentSrcIsImage?mobileImg:mobileSrc,newSrc)}
if(currentSrcIsImage&&((resizedToMobile&&!mobileImg&&mobileSrc)||(resizedToWeb&&!webImg&&webSrc))){showElement(iframe)}
else if(!currentSrcIsImage&&((resizedToMobile&&mobileImg&&!mobileSrc)||(resizedToWeb&&webImg&&!webSrc))){showElement(iframe)}
if(img&&img.parentNode){resizeElement(img,header,actualWidth,isWebSize,webRatio,mobileRatio,webHeight,mobileHeight)}
if(iframe){resizeElement(iframe,header,actualWidth,isWebSize,webRatio,mobileRatio,webHeight,mobileHeight)}}};function resizeElement(element,header,actualWidth,isWebSize,webRatio,mobileRatio,webHeight,mobileHeight){var warn=!1;if(mobileRatio&&mobileHeight){var pageSize=isWebSize?webRatio:mobileRatio;var pageHeight=isWebSize?webHeight:mobileHeight}
else{var pageSize=webRatio;var pageHeight=webHeight}
var p169=16.0/9.0;var p43=4.0/3.0;var heightOffset=header.toLowerCase()=="true"?36:56;if(actualWidth<569&&pageSize===p169){element.parentNode.style.width="568.88px";element.style.width="568.88px";element.style.height=320+heightOffset+"px";warn=!0}
else if(actualWidth<=437&&pageSize===p43){element.parentNode.style.width="426.66px";element.style.width="426.66px";element.style.height=320+heightOffset+"px";warn=!0}
else if(actualWidth<320||actualWidth/pageSize<320||(pageHeight<320&&pageSize!==p169&&pageSize!==p43)){var height=Math.max(actualWidth,320)/pageSize;if(height<320){element.parentNode.style.width=320*pageSize+"px";element.style.width=320*pageSize+"px";element.style.height=320+heightOffset+"px"}
else if(actualWidth<320){element.parentNode.style.width=320+"px";element.style.width=320+"px";element.style.height=height+heightOffset+"px"}
else{element.parentNode.style.width=actualWidth+"px";element.style.width=actualWidth+"px";element.style.height=height+heightOffset+"px"}
warn=!0}
else{element.parentNode.style.width="100%";element.style.width="100%";element.style.height=Math.max(element.clientWidth/pageSize,320)+heightOffset+"px"}
if(warn){console.warn("pbi-resize: requested iframe dimension is below the minimum supported dimensions. Minimum supported width is 320px. Minimum supported height is 376px. Change your Power BI report page size to ensure your content looks great when embedded in your web page or blog.")}}
document.addEventListener("DOMContentLoaded",e);window.addEventListener("resize",e);window.addEventListener("orientationchange",e);function isInViewport(e){var bounding=e.getBoundingClientRect();return(bounding.top>=0&&bounding.left>=0&&bounding.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&bounding.right<=(window.innerWidth||document.documentElement.clientWidth))};function changeCurrentSrc(e,isWebSize,web,mobile,newSrc){if(web&&mobile){var iframe=e.nextElementSibling;if(e instanceof HTMLImageElement&&iframe.src&&(newSrc!=iframe.src)){iframe.setAttribute('src',newSrc);setButtonState(iframe.nextElementSibling,'loading')}
var currentSrc=isWebSize?web:mobile;e.setAttribute('src',currentSrc)}}
function resize(){if(navigator.userAgent.indexOf('MSIE')!==-1||navigator.appVersion.indexOf('Trident/')>0){var evt=document.createEvent('UIEvents');evt.initUIEvent('resize',!0,!1,window,0);window.dispatchEvent(evt)}else{window.dispatchEvent(new Event('resize'))}}
function loadIframe(parent,src){var iframe=getChildByTag(parent,'iframe');var button=getChildByTag(parent,'div');var spinner=getChildByTag(button,'span');spinner.style.display='block';var style=document.createElement('style');style.type='text/css';var keyFrames='@keyframes pbi-resize-spinner {\
                0% {\
                    transform: rotate(0deg);\
                }\
                100% {\
                    transform: rotate(360deg);\
                }\
            }';style.innerHTML=keyFrames;document.getElementsByTagName('head')[0].appendChild(style);iframe.setAttribute('src',src);iframe.setAttribute('frameborder','0');iframe.setAttribute('allowFullScreen','true');setButtonState(button,'loading')}}}();
</script>


Wind turbines (WT) are installed at their full potential of 8 GW and 9 GW in the OFFSHORE and INLAND clusters respectively. On top of that, 28.32 GW of solar PV is installed while the maximum potential is 50 GW.

The installed capacity of solar PV is lower than the maximum, because of a higher curtailment of additional capacity, increasing the marginal cost of production. Note, however, that the curtailment on wind turbines and solar PV is in partly due to the constraint put on the electricity transport network (power inside the network must be lower than 23 GW), and the constraint that CCGTs must produce at minimum 40% of their installed capacity.

11.9 GW of dispatchable CCGTs is installed in the optimal system to complement intermittent renewable electricity production. They produce 61.3 TWh of electricity, resulting in a capacity factor of 58.8 %. They are able to follow the huge ramp-up / ramp-down requirements of intermittent renewable production (wind and sun) on the one side, and the daily profile of electricity demand on the other side, to balance the electricity system at lowest cost.

The OFFSHORE cluster is equipped with batteries (1.14 GWh, 0.13 GW of charge and 0.75 GW of discharge capacity) to smooth offshore wind production before transporting it through a 6.8 GW-interconnector with the COASTAL cluster. A 6.6 GW-interconnector brings electricity forward to the INLAND cluster. Only 0.1 TWh of hydrogen is produced offshore, while 1.6 TWh is produced in the COASTAL cluster. A 1.06-GW H<sub>2</sub> pipeline is sufficient to transport H<sub>2</sub> to the INLAND cluster to supply the H<sub>2</sub> demand. Note that the electricity interconnector between the COASTAL and INLAND clusters is sometimes used in the reverse direction to bring excess solar PV produced in the INLAND cluster to the electrolysers in the COASTAL cluster for conversion into hydrogen, thus avoiding curtailment. The optimal location of electrolysers is thus in the COASTAL cluster, because it can be used as well to store excess offshore wind electricity in the winter and excess solar PV electricity in the summer.

A significant amount of batteries is installed in the COASTAL (10.36 GWh, 1.16 GW of charge and 6.98 GW of discharge capacity) and INLAND (16.25 GWh, 1.47 GW of charge and 8.81 GW of discharge capacity) clusters to smooth the solar PV production (daily profile) and help balance the electricity system. All batteries are highly used: all batteries have a full charge/discharge cycle on average every 2 days. This is their optimal use because of their high capital expenses.

No H<sub>2</sub> storage, fuel cells, direct air capture or methanation capacity is installed in the OFFSHORE and COASTAL clusters.

In the optimal energy system, no hydro-pumped storage is installed because its has a lower round-trip efficiency than the round-trip efficiency of the electrical batteries, despite a higher investment cost. No CH4 storage is installed because there is ample import capacity by pipeline to follow the methane demand. 

Neither hydrogen nor synthetic methane are produced in the INLAND cluster and no CO<sub>2</sub> storage is installed.

The next graph shows the storage capacities installed in the Base Case: the existing methane storage capacity is present but rarely used; 27.7 GWh of batteries is deployed and extensively used; 5.3 GWh of existing pumped-hydro capacity is present but not used. No H2 storage is built because of the high cost of H2 storage tanks – the conclusion may be different for salt caverns repurposed from CH4 storage to H2 storage.

<p class="has-text-centered">
  <img alt="Installed capacity per technology" src="../../../img/installed_capacity_static.png" style="max-width: 500px;">
</p>

The next graph shows the capacities deployed for PCCC (only on CCGTs) and DAC in the Base Case

<p class="has-text-centered">
  <img alt="Installed capacity PCC" src="../../../img/installed_capacity_per_tech.png" style="max-width: 500px;">
</p>

