import{S as ve,i as ye,s as _e,W as ae,w as be,x as ge,y as we,Z as xe,_ as me,f as Ie,t as Ee,z as Le,$ as pe,k as n,a as p,q as u,l as o,c as v,m as h,r as y,h as t,n as T,b as r,D as a,E as Ge}from"../../../chunks/index-9671d79c.js";import{P as Ae}from"../../../chunks/post_layout-fca05ba7.js";function Pe(E){let l,_,d,I,i,c,L,z,G,C,R,f,$,H,O,q,Z,B,S,J,Y,k,W,j,A,F,D,P,K,M,m,N,Q,U,b,V,X,ee,g,te;return{c(){l=n("hr"),_=p(),d=n("p"),I=u("Many years ago, I was introduced to the concept of Conway’s Game of Life. Since then I have been fascinated by how a simple ruleset can create such complex and geometric patterns."),i=p(),c=n("p"),L=u("The Game of Life revolves around cells and their neighbours. This can be easily represented by a grid, where an individual cell’s neighbours are the adjacent vertical, horizontal, and diagonal 8 cells. A cell is either in an alive or dead state, and this state changes depending on if certain conditions are met. Generally, the game will start with a randomly generated grid of alive and dead cells. Every iteration, the grid will update based on how the cells meet their conditions."),z=p(),G=n("p"),C=u("The conditions for each cell are then as follows:"),R=p(),f=n("ol"),$=n("li"),H=u("Any live cell with less than 2 live neighbours dies"),O=p(),q=n("li"),Z=u("Any live cell either 2 or 3 live neighbours stays alive"),B=p(),S=n("li"),J=u("Any live cell with more than 3 live neighbours dies"),Y=p(),k=n("li"),W=u("Any dead cell with exactly 3 live neighbours becomes alive"),j=p(),A=n("p"),F=u("It is by these simple rules, that the Game of Life is simulated and becomes capable of generating massive and intricate patterns. On a smaller grid size, you can see how a simulation will end, with some groups of cells becoming permenantly alive as they form a pattern that will meet all of the conditions infinitely."),D=p(),P=n("p"),K=u("I decided to implement a simple JavaScript version of it, using the HTML canvas to draw squares that represent the cells. I added functionality to pause and reset the game since on the smaller grid that I have chosen the game can end quite quickly as it updates 10 times per second."),M=p(),m=n("p"),N=u("You can view my Game of Life implementation here:"),Q=n("br"),U=p(),b=n("a"),V=u("Demo"),X=n("br"),ee=p(),g=n("a"),te=u("Github Repository"),this.h()},l(e){l=o(e,"HR",{}),_=v(e),d=o(e,"P",{});var s=h(d);I=y(s,"Many years ago, I was introduced to the concept of Conway’s Game of Life. Since then I have been fascinated by how a simple ruleset can create such complex and geometric patterns."),s.forEach(t),i=v(e),c=o(e,"P",{});var le=h(c);L=y(le,"The Game of Life revolves around cells and their neighbours. This can be easily represented by a grid, where an individual cell’s neighbours are the adjacent vertical, horizontal, and diagonal 8 cells. A cell is either in an alive or dead state, and this state changes depending on if certain conditions are met. Generally, the game will start with a randomly generated grid of alive and dead cells. Every iteration, the grid will update based on how the cells meet their conditions."),le.forEach(t),z=v(e),G=o(e,"P",{});var ie=h(G);C=y(ie,"The conditions for each cell are then as follows:"),ie.forEach(t),R=v(e),f=o(e,"OL",{});var w=h(f);$=o(w,"LI",{});var se=h($);H=y(se,"Any live cell with less than 2 live neighbours dies"),se.forEach(t),O=v(w),q=o(w,"LI",{});var ne=h(q);Z=y(ne,"Any live cell either 2 or 3 live neighbours stays alive"),ne.forEach(t),B=v(w),S=o(w,"LI",{});var oe=h(S);J=y(oe,"Any live cell with more than 3 live neighbours dies"),oe.forEach(t),Y=v(w),k=o(w,"LI",{});var re=h(k);W=y(re,"Any dead cell with exactly 3 live neighbours becomes alive"),re.forEach(t),w.forEach(t),j=v(e),A=o(e,"P",{});var ce=h(A);F=y(ce,"It is by these simple rules, that the Game of Life is simulated and becomes capable of generating massive and intricate patterns. On a smaller grid size, you can see how a simulation will end, with some groups of cells becoming permenantly alive as they form a pattern that will meet all of the conditions infinitely."),ce.forEach(t),D=v(e),P=o(e,"P",{});var he=h(P);K=y(he,"I decided to implement a simple JavaScript version of it, using the HTML canvas to draw squares that represent the cells. I added functionality to pause and reset the game since on the smaller grid that I have chosen the game can end quite quickly as it updates 10 times per second."),he.forEach(t),M=v(e),m=o(e,"P",{});var x=h(m);N=y(x,"You can view my Game of Life implementation here:"),Q=o(x,"BR",{}),U=v(x),b=o(x,"A",{href:!0,rel:!0,target:!0});var de=h(b);V=y(de,"Demo"),de.forEach(t),X=o(x,"BR",{}),ee=v(x),g=o(x,"A",{href:!0,rel:!0,target:!0});var fe=h(g);te=y(fe,"Github Repository"),fe.forEach(t),x.forEach(t),this.h()},h(){T(b,"href","https://alexbhasin.ca/game-of-life/"),T(b,"rel","nofollow noopener noreferrer external"),T(b,"target","_blank"),T(g,"href","https://github.com/alexbhas/game-of-life"),T(g,"rel","nofollow noopener noreferrer external"),T(g,"target","_blank")},m(e,s){r(e,l,s),r(e,_,s),r(e,d,s),a(d,I),r(e,i,s),r(e,c,s),a(c,L),r(e,z,s),r(e,G,s),a(G,C),r(e,R,s),r(e,f,s),a(f,$),a($,H),a(f,O),a(f,q),a(q,Z),a(f,B),a(f,S),a(S,J),a(f,Y),a(f,k),a(k,W),r(e,j,s),r(e,A,s),a(A,F),r(e,D,s),r(e,P,s),a(P,K),r(e,M,s),r(e,m,s),a(m,N),a(m,Q),a(m,U),a(m,b),a(b,V),a(m,X),a(m,ee),a(m,g),a(g,te)},p:Ge,d(e){e&&t(l),e&&t(_),e&&t(d),e&&t(i),e&&t(c),e&&t(z),e&&t(G),e&&t(R),e&&t(f),e&&t(j),e&&t(A),e&&t(D),e&&t(P),e&&t(M),e&&t(m)}}}function Te(E){let l,_;const d=[E[0],ue];let I={$$slots:{default:[Pe]},$$scope:{ctx:E}};for(let i=0;i<d.length;i+=1)I=ae(I,d[i]);return l=new Ae({props:I}),{c(){be(l.$$.fragment)},l(i){ge(l.$$.fragment,i)},m(i,c){we(l,i,c),_=!0},p(i,[c]){const L=c&1?xe(d,[c&1&&me(i[0]),c&0&&me(ue)]):{};c&2&&(L.$$scope={dirty:c,ctx:i}),l.$set(L)},i(i){_||(Ie(l.$$.fragment,i),_=!0)},o(i){Ee(l.$$.fragment,i),_=!1},d(i){Le(l,i)}}}const ue={title:"In Depth | Game of Life",created:"2023-01-02T00:00:00.000Z",updated:"2023-01-07T00:00:00.000Z",image:"/life/game-of-life.webp",tags:["Projects"],flags:[],slug:"/life/+page.svelte.md",path:"/life",toc:!1};function $e(E,l,_){return E.$$set=d=>{_(0,l=ae(ae({},l),pe(d)))},l=pe(l),[l]}class ke extends ve{constructor(l){super(),ye(this,l,$e,Te,_e,{})}}export{ke as default,ue as metadata};