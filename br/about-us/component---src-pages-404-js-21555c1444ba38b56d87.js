(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(180),i=a(178);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist."))}},170:function(e,t,a){"use strict";var n="1980px",r={mobileS:"(max-width: "+"320px"+")",mobileM:"(max-width: "+"375px"+")",mobileL:"(max-width: "+"425px"+")",tablet:"(max-width: "+"768px"+")",laptop:"(max-width: "+"1024px"+")",laptopL:"(max-width: "+"1440px"+")",desktop:"(max-width: "+n+")",desktopL:"(min-width: "+n+")"};t.a=r},171:function(e,t,a){var n;e.exports=(n=a(176))&&n.default||n},172:function(e,t,a){"use strict";var n=a(169),r=a(170),o=n.d.div.withConfig({displayName:"container__Container",componentId:"sc-1od8u1d-0"})(["margin:0 auto;display:flex;align-items:center;padding:2rem 1rem;@media ","{max-width:1024px;}@media ","{max-width:1400px;}"],r.a.desktop,r.a.desktopL);t.a=o},173:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(5),i=function(e){var t=e.translate;return r.a.createElement(n.Fragment,null,t)};i.propTypes={translate:a.n(o).a.string},t.a=i},174:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(169),i=a(5),l=a.n(i),c=o.d.button.withConfig({displayName:"button__StyledButton",componentId:"sc-16zlxpb-0"})(["border-radius:6px;border:",";color:",";background-color:",";box-shadow:",";padding:0.6rem 1.2rem;font-size:100%;transition:",";&:hover{",";cursor:pointer;}&:focus,&:active{outline:0;}"],function(e){return"primary"===e.type?e.theme.primary_border:"secondary"===e.type?e.theme.secondary_border:void 0},function(e){return"primary"===e.type?e.theme.primary_color:"secondary"===e.type?e.theme.secondary_color:void 0},function(e){return"primary"===e.type?e.theme.primary_bg_color:"secondary"===e.type?e.theme.secondary_bg_color:void 0},function(e){return"primary"===e.type?e.theme.primary_shadow:"secondary"===e.type?e.theme.secondary_shadow:void 0},function(e){return"primary"===e.type?e.theme.primary_transition:"secondary"===e.type?e.theme.secondary_transition:void 0},function(e){return"primary"===e.type?e.theme.primary_hover:"secondary"===e.type?e.theme.secondary_hover:void 0}),d={primary_border:"2px solid var(--color-red)",primary_color:"var(--color-red)",primary_bg_color:"transparent",primary_shadow:"none",primary_transition:"background-color 0.25s, color 0.25s",primary_hover:Object(o.c)(["background-color:var(--color-red);color:var(--color-white);"]),secondary_border:"none",secondary_color:"var(--color-white)",secondary_bg_color:"var(--color-red)",secondary_shadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);",secondary_transition:"transform 0.25s",secondary_hover:Object(o.c)(["transform:translateY(-3px);"])},s=function(e){var t=e.type,a=void 0===t?"primary":t,n=e.children,i=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{theme:d},r.a.createElement(c,{onClick:i,type:a},n)))};s.propTypes={children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,onClick:l.a.func,type:l.a.string},t.a=s},175:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(46),c=a.n(l);a.d(t,"a",function(){return c.a});a(171);var d=r.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(d.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:a,render:n||o,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},176:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(69),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},177:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},n.createElement("linearGradient",{id:"a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},[n.createElement("stop",{offset:"0%",stopColor:"#FF6544",key:0}),n.createElement("stop",{offset:"100%",stopColor:"#FF4449",key:1})])),n.createElement("g",{fill:"none",key:1},[n.createElement("path",{fill:"url(#a)",d:"M6.13 0v.03L16.314 13.5 0 26.97V27h16.474c4.807 0 8.979-3.373 10.06-8.136l1.363-6.008a10.63 10.63 0 0 0-1.98-8.894A10.261 10.261 0 0 0 17.84 0H6.13z",key:0}),n.createElement("path",{fill:"#B51A31",d:"M16.308 13.527L9.144 27H0z",key:1}),n.createElement("path",{fill:"#FFF",d:"M39.64 0h10.283c8.279 0 13.01 5.782 11.702 13.327l-.013.076c-1.31 7.547-8.05 13.406-16.338 13.406H34.992L39.639 0zm6.559 21.485c4.744 0 8.51-3.255 9.334-8.005l.013-.077c.824-4.747-1.799-8.08-6.546-8.08h-4.48l-2.804 16.162H46.2zM69.473 0h19.89l-.912 5.247H74.328l-.945 5.438h9.118l-.91 5.247h-9.117l-.976 5.625H85.81l-.91 5.247H64.826L69.473 0zm38.975 17.235l4.778 9.574h-6.78l-6.31-13.793h4.364c2.826 0 4.712-1.541 5.103-3.791l.014-.076c.438-2.523-1.07-3.825-3.895-3.825h-5.754L96.24 26.808h-5.8L95.088 0h12.054c3.353 0 5.785.959 7.204 2.72 1.21 1.492 1.64 3.6 1.197 6.127l-.013.077c-.742 4.326-3.51 7.046-7.082 8.311zM122.963 0h5.8l-4.647 26.809h-5.802L122.964 0zm10.51 0h6.402l3.62 18.88L153.662 0h6.254l-15.343 27h-5.123l-5.977-27z",key:2})])])}r.defaultProps={width:"160",height:"27"},e.exports=r,r.default=r},178:function(e,t,a){"use strict";var n=a(179),r=a(0),o=a.n(r),i=a(5),l=a.n(i),c=a(182),d=a.n(c);function s(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,c=t||l.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=s},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Deriv.com",description:"Deriv.com gives everyone an easy way to participate in the financial markets. Trade with as little as $1 USD on major currencies, stocks, indices, and commodities.",author:"Deriv.com"}}}}},180:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(175),c=a(169),d=a(173),s=a(177),m=a.n(s),p=a(174),u=a(172),h=c.d.nav.withConfig({displayName:"nav__StyledNav",componentId:"nysfdc-0"})(["background-color:var(--color-black);border-bottom:1px solid rgba(0,0,0,0.0975);"]),y=Object(c.d)(u.a).withConfig({displayName:"nav__Wrapper",componentId:"nysfdc-1"})(["align-items:center;padding:2rem 1rem;"]),f=c.d.div.withConfig({displayName:"nav__NavLeft",componentId:"nysfdc-2"})(["width:25%;text-align:left;"]),b=c.d.ul.withConfig({displayName:"nav__NavCenter",componentId:"nysfdc-3"})(["width:50%;text-align:center;padding:0;"]),v=c.d.div.withConfig({displayName:"nav__NavRight",componentId:"nysfdc-4"})(["width:25%;text-align:right;"]),g=c.d.li.withConfig({displayName:"nav__NavLink",componentId:"nysfdc-5"})(["list-style-type:none;display:inline-block;width:23%;text-align:left;"]),w=Object(c.d)(function(e){return r.a.createElement(l.a,e)}).withConfig({displayName:"nav__StyledLink",componentId:"nysfdc-6"})(["color:var(--color-white);text-decoration:none;padding:0.5rem 1rem;transition:text-shadow 0.25s;position:relative;&::before{content:'';position:absolute;transition:width 0.25s;height:0.1rem;width:0;background-color:var(--color-red);bottom:0;}&:hover{text-shadow:0 0 0.8px var(--color-white),0 0 0.8px var(--color-white);&::before{width:1rem;}}&.active{text-shadow:0 0 0.8px var(--color-white),0 0 0.8px var(--color-white);&::before{width:1rem;}}"]),x=Object(c.d)(p.a).withConfig({displayName:"nav__NavButton",componentId:"nysfdc-7"})([""]),E=function(){return r.a.createElement(h,null,r.a.createElement(y,null,r.a.createElement(f,null,r.a.createElement(l.a,{to:"/","aria-label":"Home"},r.a.createElement(m.a,null))),r.a.createElement(b,null,r.a.createElement(g,null,r.a.createElement(w,{activeClassName:"active",to:"/trade/","aria-label":"Trade"},r.a.createElement(d.a,{translate:"Trade"}))),r.a.createElement(g,null,r.a.createElement(w,{activeClassName:"active",to:"/about/","aria-label":"About us"},r.a.createElement(d.a,{translate:"About us"}))),r.a.createElement(g,null,r.a.createElement(w,{activeClassName:"active",to:"/help-centre/","aria-label":"Help centres"},r.a.createElement(d.a,{translate:"Help centre"})))),r.a.createElement(v,null,r.a.createElement(x,{type:"primary"},r.a.createElement("span",null,r.a.createElement(d.a,{translate:"Login"}))))))},_=function(){return r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))},k=a(181),C=a.n(k),N=Object(c.c)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}*[hidden]{display:none;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote::before,blockquote::after,q::before,q::after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}"]),q=Object(c.c)([":root{--color-black:#0e0e0e;--color-white:#ffffff;--color-red:#ff444f;--color-light-grey:#f4f4f4;}"]),L=a(170);function j(){var e=C()(["\n    ","\n    ","\n\n    body {\n        font-family: 'IBM Plex Sans', sans-serif;\n        margin: 0;\n    }\n    * {\n        margin: 0;\n        padding: 0;\n    }\n    html {\n        font-size: 62.5%; /* 1rem = 10px */\n        box-sizing: border-box;\n\n        @media "," {\n            font-size: 75.5%; /* 1rem = 12px */\n        }\n        @media "," {\n            font-size: 50%; /* 1rem = 8px */\n        }\n        @media "," {\n            font-size: 35%; /* 1rem = 5.5px */\n        }\n    }\n"]);return j=function(){return e},e}var z=Object(c.b)(j(),N,q,L.a.desktopL,L.a.tablet,L.a.mobileM),O=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(E,null),r.a.createElement("main",null,t),r.a.createElement(_,null))};O.propTypes={children:i.a.node.isRequired};t.a=O}}]);
//# sourceMappingURL=component---src-pages-404-js-21555c1444ba38b56d87.js.map