import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as u}from"./assets/vendor-77e16229.js";const s=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),T=document.querySelector("[data-seconds]");e.disabled=!0;let a=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0].getTime(),e.disabled=!1,a<Date.now()&&(e.disabled=!0,u.error({messageColor:"#FFF",color:"#EF4040",iconUrl:closeIcon,position:"topRight",message:"Please choose a date in the future"}))}};h(s,b);e.addEventListener("click",g);function g(){e.disabled=!0;const t=setInterval(()=>{let n=a-Date.now();if(s.disabled=!0,n<=0){clearInterval(t),s.disabled=!1,u.info({position:"center",message:"It is your time!"});return}const{days:c,hours:i,minutes:d,seconds:r}=C(n);y.textContent=`${o(c)}`,S.textContent=`${o(i)}`,p.textContent=`${o(d)}`,T.textContent=`${o(r)}`},1e3)}function C(t){const r=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:l,minutes:m,seconds:f}}function o(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map