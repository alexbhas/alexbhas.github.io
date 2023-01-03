import{B as n}from"./index-9671d79c.js";function y(s){const t=s-1;return t*t*t+1}function b(s,{delay:t=0,duration:c=400,easing:e=y,x:p=0,y:f=0,opacity:i=0}={}){const o=getComputedStyle(s),a=+o.opacity,m=o.transform==="none"?"":o.transform,u=a*(1-i);return{delay:t,duration:c,easing:e,css:(r,l)=>`
			transform: ${m} translate(${(1-r)*p}px, ${(1-r)*f}px);
			opacity: ${a-u*l}`}}const g={},x=n([]),d=n([]),w=n({});export{x as a,d as b,b as f,g as p,w as t};
