if(!self.define){let e,s={};const r=(r,a)=>(r=new URL(r+".js",a).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let l={};const u=e=>r(e,n),c={module:{uri:n},exports:l,require:u};s[n]=Promise.all(a.map((e=>c[e]||u(e)))).then((e=>(i(...e),l)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/_layout-1e0a8c72.css",revision:null},{url:"_app/immutable/assets/maskable@512-20aaf239.webp",revision:null},{url:"_app/immutable/assets/maskable@512-75aaafdb.avif",revision:null},{url:"_app/immutable/assets/maskable@512-9e740bc5.avif",revision:null},{url:"_app/immutable/assets/maskable@512-e71e35f2.avif",revision:null},{url:"_app/immutable/chunks/_layout-d091a1a0.js",revision:null},{url:"_app/immutable/chunks/0-26427da3.js",revision:null},{url:"_app/immutable/chunks/1-1c402e07.js",revision:null},{url:"_app/immutable/chunks/2-547ecabc.js",revision:null},{url:"_app/immutable/chunks/3-4b946054.js",revision:null},{url:"_app/immutable/chunks/4-8631102b.js",revision:null},{url:"_app/immutable/chunks/5-c05dcb8e.js",revision:null},{url:"_app/immutable/chunks/6-001c366e.js",revision:null},{url:"_app/immutable/chunks/7-123c70ee.js",revision:null},{url:"_app/immutable/chunks/8-0958e3c5.js",revision:null},{url:"_app/immutable/chunks/head-857b6c7c.js",revision:null},{url:"_app/immutable/chunks/icon-0bd93b1a.js",revision:null},{url:"_app/immutable/chunks/index-9671d79c.js",revision:null},{url:"_app/immutable/chunks/post_card-d4761df3.js",revision:null},{url:"_app/immutable/chunks/post_layout-4f421dc3.js",revision:null},{url:"_app/immutable/chunks/posts-46a83d82.js",revision:null},{url:"_app/immutable/chunks/preload-helper-41c905a7.js",revision:null},{url:"_app/immutable/chunks/singletons-626dbfc1.js",revision:null},{url:"_app/immutable/chunks/stores-ea9fccbb.js",revision:null},{url:"_app/immutable/chunks/title-4a6e1efe.js",revision:null},{url:"_app/immutable/components/pages/_error.svelte-89e5edf2.js",revision:null},{url:"_app/immutable/components/pages/_layout.svelte-c3383308.js",revision:null},{url:"_app/immutable/components/pages/_page.svelte-5ac4bf78.js",revision:null},{url:"_app/immutable/components/pages/about/_page.svelte.md-7a05af8a.js",revision:null},{url:"_app/immutable/components/pages/concurrent-fitness-centre/_page.svelte.md-5e39650e.js",revision:null},{url:"_app/immutable/components/pages/dark-mode-tool/_page.svelte.md-7dc5ce92.js",revision:null},{url:"_app/immutable/components/pages/life/_page.svelte.md-6c4f916c.js",revision:null},{url:"_app/immutable/components/pages/oasis/_page.svelte.md-ad18ddb3.js",revision:null},{url:"_app/immutable/components/pages/resume/_page.svelte.md-aef517b9.js",revision:null},{url:"_app/immutable/modules/pages/_layout.ts-495f1f70.js",revision:null},{url:"_app/immutable/start-d69f2d80.js",revision:null},{url:"assets/any@180.png",revision:"ede57d39ef38dc28e31cd037c6b5fa09"},{url:"assets/any@192.png",revision:"18d016293c92eff2eba74f513f8c3582"},{url:"assets/any@512.png",revision:"13b36d3996a09a983867738995f88335"},{url:"assets/maskable@192.png",revision:"2d594060f460ab0040a1ed932fb551ab"},{url:"assets/maskable@512.png",revision:"b75f3cebbeaf26e5b42eba99a601d40d"},{url:"favicon.png",revision:"5b1ff6d456a05224e85b7f37a61bb5c0"},{url:"life/game-of-life.webp",revision:"d51e48f8f34a3070f860ebc3ec0aec6d"},{url:"oasis/oasis-pro.webp",revision:"7e21b1db161c9938b536c37fb2dde51b"},{url:"./about/index",revision:"7cd46f65c387ed123acb4bf105e3cf29"},{url:"./concurrent-fitness-centre/index",revision:"502c538e901d588aff12a5425b465c67"},{url:"./dark-mode-tool/index",revision:"2b3fed205684911e3331215a8f24c365"},{url:"./",revision:"7ee5724dbd18980eb9972936f6dbb13c"},{url:"./life/index",revision:"2aeb5adb535f73469280eaef07f4bc3a"},{url:"./oasis/index",revision:"b301723e20873c8f4100730a9edcf802"},{url:"./resume/index",revision:"55e6590e840c13a3c00078fdcfca5ee5"},{url:"server/chunks/head.js",revision:"e75d321dd508bbc1cdab5c33fb47fa55"},{url:"server/chunks/hooks.server.js",revision:"6ed0137f5b1b428fcebfb4211d321ea5"},{url:"server/chunks/icon.js",revision:"893414de8396032ec32d7b96ae95395c"},{url:"server/chunks/index.js",revision:"866cce73791bb264897ab064d8ceae1c"},{url:"server/chunks/index2.js",revision:"881b47224c8a4ce3d749adb5505ee175"},{url:"server/chunks/post_card.js",revision:"75731d85c849b81382747772e5b76877"},{url:"server/chunks/posts.js",revision:"cdf49ac3ac69df7214c85275c37c0fbd"},{url:"server/chunks/prod-ssr.js",revision:"634fd7db5008c0922e2bff5fe47eddd5"},{url:"server/chunks/site.js",revision:"8b3ab6406a16c4a8bf0cf90a1c60ebe7"},{url:"server/chunks/stores.js",revision:"ab6905ec64fd2869be2013cf851a47b3"},{url:"server/chunks/title.js",revision:"f3b365fb561c049ddda63ed66d1c1e02"},{url:"server/entries/endpoints/atom.xml/_server.ts.js",revision:"4594b6de58251eff707ca95573a06f36"},{url:"server/entries/endpoints/feed.json/_server.ts.js",revision:"e0fd98527a90009ec682d76b1a9f3993"},{url:"server/entries/endpoints/manifest.webmanifest/_server.ts.js",revision:"8e81512bab275b230494945c71ac3138"},{url:"server/entries/endpoints/posts.json/_server.ts.js",revision:"12f8e2d7486052fe6e7dd71720ca3062"},{url:"server/entries/endpoints/sitemap.xml/_server.ts.js",revision:"1f1892a27c2fd898c7702234df0909b3"},{url:"server/entries/endpoints/tags.json/_server.ts.js",revision:"7d1f29584eb1704f3775f752a7c1ce60"},{url:"server/entries/pages/_error.svelte.js",revision:"209dacc8edadb5b42269c4d4b3cdfcb9"},{url:"server/entries/pages/_layout.svelte.js",revision:"a272607778b4a137eac02012244f262b"},{url:"server/entries/pages/_layout.ts.js",revision:"2263b7579c01ba9bff61b1d1fb5120ae"},{url:"server/entries/pages/_page.svelte.js",revision:"e3f80c6bd004266bd6137b4da108c0ba"},{url:"server/entries/pages/about/_page.svelte.md.js",revision:"2461a6722fa1d3b0b504414312ea2aad"},{url:"server/entries/pages/concurrent-fitness-centre/_page.svelte.md.js",revision:"f56e8f1d6e4c66f27744ae07902368de"},{url:"server/entries/pages/dark-mode-tool/_page.svelte.md.js",revision:"faa39b1ef12ad32a8d7cecacc5760729"},{url:"server/entries/pages/life/_page.svelte.md.js",revision:"c4c39c839fca74306a1c2239674f7c5c"},{url:"server/entries/pages/oasis/_page.svelte.md.js",revision:"17a345ea477adff3e6455ee0dfc0fd98"},{url:"server/entries/pages/resume/_page.svelte.md.js",revision:"88ff0c480a8cc7afa660c0af4c2a5fdd"},{url:"server/index.js",revision:"9a198c33baf8d030e5ceea00a82bb32c"},{url:"server/manifest-full.js",revision:"87325918c5d63136568edc8adfca147c"},{url:"server/manifest.js",revision:"93aa7d565124352f8ff26501f3dbaf39"},{url:"server/nodes/0.js",revision:"a2270f1e7a7b2c6b99cf2cd8c268af94"},{url:"server/nodes/1.js",revision:"458b6347bdf4329a3e51f8089588a102"},{url:"server/nodes/2.js",revision:"4e10e86a509975dede7372656a900253"},{url:"server/nodes/3.js",revision:"8f6aaff11286058843ec2e6a648ee91b"},{url:"server/nodes/4.js",revision:"e4d813f6d0cce61073f74c16f3b31ad0"},{url:"server/nodes/5.js",revision:"8852bbdfbcc9a9bb549fc3c74f48d818"},{url:"server/nodes/6.js",revision:"f03fe5af197875031fd8477e079e9d0f"},{url:"server/nodes/7.js",revision:"6de80a5fdf23575825aac522658767d3"},{url:"server/nodes/8.js",revision:"29b219a2b9d87c5773da90e6241aa8c8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));