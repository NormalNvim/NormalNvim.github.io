"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[802],{2291:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var l=n(4848),s=n(8453);const r={id:"overview",sidebar_position:0,sidebar_label:"\u2699\ufe0f Plugins",description:"Learn how to configure Yazi."},o="\u2699\ufe0f Plugins",a={id:"plugins/overview",title:"\u2699\ufe0f Plugins",description:"Learn how to configure Yazi.",source:"@site/docs/plugins/overview.md",sourceDirName:"plugins",slug:"/plugins/overview",permalink:"/docs/plugins/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"overview",sidebar_position:0,sidebar_label:"\u2699\ufe0f Plugins",description:"Learn how to configure Yazi."},sidebar:"docsSidebar",previous:{title:"\u2328\ufe0f Keymaps",permalink:"/docs/keymaps"},next:{title:"1-behaviors.lua",permalink:"/docs/plugins/behaviors"}},t={},c=[{value:"Directory structure",id:"directory-structure",level:2},{value:"Where to find the config",id:"where-to-find-the-config",level:2},{value:"UNIX",id:"unix",level:3},{value:"Windows",id:"windows",level:3}];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"\ufe0f-plugins",children:"\u2699\ufe0f Plugins"}),"\n",(0,l.jsx)(i.p,{children:"On the left sidebar of this page you can find the description of every plugin."}),"\n",(0,l.jsx)(i.h2,{id:"directory-structure",children:"Directory structure"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/tree/main/lua/base",children:"/base"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/blob/main/lua/base/1-options.lua",children:(0,l.jsx)(i.code,{children:"1-options.lua"})})," - Neovim options."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/blob/main/lua/base/2-lazy.lua",children:(0,l.jsx)(i.code,{children:"2-lazy.lua"})})," - Plugin loader."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/blob/main/lua/base/3-autocmds.lua",children:(0,l.jsx)(i.code,{children:"3-autocmds.lua"})})," - User autocmds and commands."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/blob/main/lua/base/4-mappings.lua",children:(0,l.jsx)(i.code,{children:"4-mappings.lua"})})," - User keymaps"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/blob/main/lua/base/health.lua",children:(0,l.jsx)(i.code,{children:"health.lua"})})," - To run ",(0,l.jsx)(i.code,{children:":checkhealth base"}),"."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/tree/main/lua/base/icons",children:(0,l.jsx)(i.code,{children:"\\icons"})})," - The icons you use."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/tree/main/lua/base/utils",children:(0,l.jsx)(i.code,{children:"\\utils"})})," - Utilities to save code repetition."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/tree/main/lua/plugins",children:"/plugins"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/blob/main/lua/plugins/1-base-behaviors.lua",children:(0,l.jsx)(i.code,{children:"1-behaviors.lua"})})," - Plugins that add new behaviors."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/blob/main/lua/plugins/2-ui.lua",children:(0,l.jsx)(i.code,{children:"2-ui.lua"})})," - Plugins that make the GUI better."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/blob/main/lua/plugins/3-dev-core.lua",children:(0,l.jsx)(i.code,{children:"3-dev-core.lua"})})," - Plugins that are just there."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/blob/main/lua/plugins/4-dev.lua",children:(0,l.jsx)(i.code,{children:"4-dev.lua"})})," - Plugins you actively use for coding."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/blob/main/lua/lazy_snapshot.lua",children:(0,l.jsx)(i.code,{children:"lazy_snapshot.lua"})})," - Here you can set the version of every plugin."]}),"\n"]}),"\n",(0,l.jsxs)(i.blockquote,{children:["\n",(0,l.jsxs)(i.p,{children:["Hint: Files are numbered to indicate the load order. Load order is defined in ",(0,l.jsx)(i.a,{href:"https://github.com/NormalNvim/NormalNvim/blob/main/init.lua",children:"init.lua"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{alt:"directory structure screenshot",src:n(3901).A+"",width:"3840",height:"2160"})}),"\n",(0,l.jsx)(i.h2,{id:"where-to-find-the-config",children:"Where to find the config"}),"\n",(0,l.jsx)(i.h3,{id:"unix",children:"UNIX"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["You can find the NormalNvim directory on: ",(0,l.jsx)(i.code,{children:"~/.config/nvim"})]}),"\n",(0,l.jsxs)(i.li,{children:["You can find the plugins directory on: ",(0,l.jsx)(i.code,{children:"~/.local/share/nvim/lazy"})]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"windows",children:"Windows"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["You can find the NormalNvim directory on: ",(0,l.jsx)(i.code,{children:"%LOCALAPPDATA%\\nvim"})]}),"\n",(0,l.jsxs)(i.li,{children:["You can find the plugins directory on: ",(0,l.jsx)(i.code,{children:"%LOCALAPPDATA%\\nvim-data\\lazy"})]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},3901:(e,i,n)=>{n.d(i,{A:()=>l});const l=n.p+"assets/images/directory-structure-28a62b9bbf478d8ec843ad3f5a55cde7.webp"},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var l=n(6540);const s={},r=l.createContext(s);function o(e){const i=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(r.Provider,{value:i},e.children)}}}]);