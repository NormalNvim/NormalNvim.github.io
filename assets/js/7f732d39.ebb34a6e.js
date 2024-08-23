"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[292],{9537:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var n=s(4848),r=s(8453);const l={sidebar_position:4,description:"Description of Normalnvim plugins related to dev."},t="4-dev.lua",c={id:"plugins/dev",title:"4-dev.lua",description:"Description of Normalnvim plugins related to dev.",source:"@site/docs/plugins/dev.md",sourceDirName:"plugins",slug:"/plugins/dev",permalink:"/docs/plugins/dev",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Description of Normalnvim plugins related to dev."},sidebar:"docsSidebar",previous:{title:"3-dev-core.lua",permalink:"/docs/plugins/dev-core"}},d={},o=[{value:"List of plugins",id:"list-of-plugins",level:2},{value:"luasnip",id:"luasnip",level:2},{value:"friendly-snippets",id:"friendly-snippets",level:2},{value:"gitsigns",id:"gitsigns",level:2},{value:"fugitive",id:"fugitive",level:2},{value:"aerial",id:"aerial",level:2},{value:"litee-calltree",id:"litee-calltree",level:2},{value:"dooku",id:"dooku",level:2},{value:"markdown-preview",id:"markdown-preview",level:2},{value:"markmap",id:"markmap",level:2},{value:"neural",id:"neural",level:2},{value:"copilot",id:"copilot",level:2},{value:"guess-indent",id:"guess-indent",level:2},{value:"compiler",id:"compiler",level:2},{value:"overseer",id:"overseer",level:2},{value:"nvim-dap",id:"nvim-dap",level:2},{value:"neotest",id:"neotest",level:2},{value:"nvim-coverage",id:"nvim-coverage",level:2},{value:"guttentags-plus",id:"guttentags-plus",level:2}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"4-devlua",children:"4-dev.lua"})}),"\n",(0,n.jsx)(i.p,{children:"Plugins you actively use for coding."}),"\n",(0,n.jsx)(i.h2,{id:"list-of-plugins",children:"List of plugins"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#luasnip",children:"luasnip"})," ",(0,n.jsx)(i.code,{children:"SNIPPETS"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#friendly-snippets",children:"friendly-snippets"})," ",(0,n.jsx)(i.code,{children:"SNIPPETS"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#gitsigns",children:"gitsigns"})," ",(0,n.jsx)(i.code,{children:"GIT"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#fugitive",children:"fugitive"})," ",(0,n.jsx)(i.code,{children:"GIT"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#aerial",children:"aerial"})," ",(0,n.jsx)(i.code,{children:"ANALIZER"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#litee-calltree",children:"litee-calltree"})," ",(0,n.jsx)(i.code,{children:"ANALIZER"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#dooku",children:"dooku"})," ",(0,n.jsx)(i.code,{children:"CODE DOCUMENTATION"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#markdown-preview",children:"markdown-preview"})," ",(0,n.jsx)(i.code,{children:"CODE DOCUMENTATION"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#markmap",children:"markmap"})," ",(0,n.jsx)(i.code,{children:"CODE DOCUMENTATION"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#neural",children:"neural"})," ",(0,n.jsx)(i.code,{children:"ARTIFICIAL INTELLIGENCE"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#copilot",children:"copilot"})," ",(0,n.jsx)(i.code,{children:"ARTIFICIAL INTELLIGENCE"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#guess-indent",children:"guess-indent"})," ",(0,n.jsx)(i.code,{children:"ARTIFICIAL INTELLIGENCE"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#compiler",children:"compiler"})," ",(0,n.jsx)(i.code,{children:"COMPILER"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#overseer",children:"overseer"})," ",(0,n.jsx)(i.code,{children:"COMPILER"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#nvim-dap",children:"nvim-dap"})," ",(0,n.jsx)(i.code,{children:"DEBUGGER"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#neotest",children:"neotest"})," ",(0,n.jsx)(i.code,{children:"TESTING"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#nvim-coverage",children:"nvim-coverage"})," ",(0,n.jsx)(i.code,{children:"TESTING"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#guttentags-plus",children:"guttentags-plus"})," ",(0,n.jsx)(i.code,{children:"LANGUAGE IMPROVEMENTS"})]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"luasnip",children:(0,n.jsx)(i.a,{href:"https://github.com/L3MON4D3/LuaSnip",children:"luasnip"})}),"\n",(0,n.jsx)(i.p,{children:"The snippet engine we use."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"luasnip screenshot",src:s(7607).A+"",width:"3840",height:"2160"})}),"\n",(0,n.jsx)(i.h2,{id:"friendly-snippets",children:(0,n.jsx)(i.a,{href:"https://github.com/rafamadriz/friendly-snippets",children:"friendly-snippets"})}),"\n",(0,n.jsx)(i.p,{children:"Collection of snippets we pass to luasnip."}),"\n",(0,n.jsx)(i.h2,{id:"gitsigns",children:(0,n.jsx)(i.a,{href:"https://github.com/lewis6991/gitsigns.nvim",children:"gitsigns"})}),"\n",(0,n.jsx)(i.p,{children:"Display git hunks on modified uncommited lines."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"gitsigns screenshot",src:s(5364).A+"",width:"3840",height:"2160"})}),"\n",(0,n.jsx)(i.h2,{id:"fugitive",children:(0,n.jsx)(i.a,{href:"https://github.com/tpope/vim-fugitive",children:"fugitive"})}),"\n",(0,n.jsx)(i.p,{children:"Git commands for Neovim and mergetool support."}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["Hint: Check the plugin config to learn how to enable ",(0,n.jsx)(i.code,{children:"git mergetool"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"fugitive screenshot",src:s(8921).A+"",width:"3840",height:"2160"})}),"\n",(0,n.jsx)(i.h2,{id:"aerial",children:(0,n.jsx)(i.a,{href:"https://github.com/stevearc/aerial.nvim",children:"aerial"})}),"\n",(0,n.jsx)(i.p,{children:"Symbols tree to quickly analize the code structure of your file. By default\nwe only display functions."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"aerial screenshot",src:s(8871).A+"",width:"3840",height:"2160"})}),"\n",(0,n.jsx)(i.h2,{id:"litee-calltree",children:(0,n.jsx)(i.a,{href:"https://github.com/litee/litee-calltree.nvim",children:"litee-calltree"})}),"\n",(0,n.jsx)(i.p,{children:"Calltree viewer to inspect the call order of functions without the need to use\nthe debugger or execute the program."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"g + j"})," to open the call tree."]}),"\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"q"})," to close it."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"litee-calltree screenshot",src:s(268).A+"",width:"3840",height:"2160"})}),"\n",(0,n.jsx)(i.h2,{id:"dooku",children:(0,n.jsx)(i.a,{href:"https://github.com/rcarriga/dooku.nvim",children:"dooku"})}),"\n",(0,n.jsx)(i.p,{children:"HTML documentation generator."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"<Space> + D + d"})," three times to automatically setup, generate, and open your project documentation, respectively."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"dooku screenshot",src:s(8540).A+"",width:"3836",height:"2100"})}),"\n",(0,n.jsx)(i.h2,{id:"markdown-preview",children:(0,n.jsx)(i.a,{href:"https://github.com/iamcco/markdown-preview.nvim",children:"markdown-preview"})}),"\n",(0,n.jsx)(i.p,{children:"Preview markdown as HTML in your internet browser."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"<Space> + D + p"})," to preview your markdown file."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"markdown-preview screenshot",src:s(1534).A+"",width:"3838",height:"2099"})}),"\n",(0,n.jsx)(i.h2,{id:"markmap",children:(0,n.jsx)(i.a,{href:"https://github.com/folke/markmap.nvim",children:"markmap"})}),"\n",(0,n.jsxs)(i.p,{children:["Preview markdown as HTML ",(0,n.jsx)(i.code,{children:"mental map"})," in your internet browser."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"markmap screenshot",src:s(3307).A+"",width:"3839",height:"2097"})}),"\n",(0,n.jsx)(i.h2,{id:"neural",children:(0,n.jsx)(i.a,{href:"https://github.com/Neural-ChatGPT/neural.nvim",children:"neural"})}),"\n",(0,n.jsx)(i.p,{children:"ChatGPT code generator."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"<Space> + a"})," to ",(0,n.jsx)(i.code,{children:"Ask ChatGPT"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"neural screenshot",src:s(3937).A+"",width:"3840",height:"2160"})}),"\n",(0,n.jsx)(i.h2,{id:"copilot",children:(0,n.jsx)(i.a,{href:"https://github.com/github/copilot.vim",children:"copilot"})}),"\n",(0,n.jsx)(i.p,{children:"GitHub Copilot integration."}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["Hint: This is an alternative we offer to the plugin ",(0,n.jsx)(i.code,{children:"neural"}),". This feature is disabled by default. To enable it, uncomment the plugin in ",(0,n.jsx)(i.code,{children:"plugins/4-dev.lua"})," and follow the instructions in the comments."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"guess-indent",children:(0,n.jsx)(i.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter-indent",children:"guess-indent"})}),"\n",(0,n.jsx)(i.p,{children:"Automatically guesses and sets the correct indent level for files."}),"\n",(0,n.jsx)(i.h2,{id:"compiler",children:(0,n.jsx)(i.a,{href:"https://github.com/davidgranstrom/compiler.nvim",children:"compiler"})}),"\n",(0,n.jsx)(i.p,{children:"Compiler integration."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"F6"})," to open the compiler."]}),"\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"Shift + F6"})," to redo the last selected action."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"compiler.nvim screenshot",src:s(8883).A+"",width:"3840",height:"2160"})}),"\n",(0,n.jsx)(i.h2,{id:"overseer",children:(0,n.jsx)(i.a,{href:"https://github.com/stevearc/overseer.nvim",children:"overseer"})}),"\n",(0,n.jsxs)(i.p,{children:["The task runner ",(0,n.jsx)(i.code,{children:"compiler.nvim"})," uses."]}),"\n",(0,n.jsx)(i.h2,{id:"nvim-dap",children:(0,n.jsx)(i.a,{href:"https://github.com/mfussenegger/nvim-dap",children:"nvim-dap"})}),"\n",(0,n.jsx)(i.p,{children:"A debugger for Neovim."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"F9"})," to toggle a breakpoint in the current line."]}),"\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"F5"})," to start the debugger."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/keymaps/#debugger",children:"See all debugger keymaps"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Hint: In some languages you might have to run the program before you are able to debug it."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"nvim-dap screenshot",src:s(904).A+"",width:"3840",height:"2160"})}),"\n",(0,n.jsx)(i.h2,{id:"neotest",children:(0,n.jsx)(i.a,{href:"https://github.com/nvim-neotest/neotest",children:"neotest"})}),"\n",(0,n.jsx)(i.p,{children:"Unit testing for Neovim."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"<Space> + T + u"})," to run the unit test under the cursor."]}),"\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"<Space> + T + t"})," to open the right neotest summary."]}),"\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"<Space> + T + T"})," to open the bottom resume output."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"neotest screenshot",src:s(5408).A+"",width:"3840",height:"2160"})}),"\n",(0,n.jsx)(i.h2,{id:"nvim-coverage",children:(0,n.jsx)(i.a,{href:"https://github.com/nvim-neotest/nvim-coverage",children:"nvim-coverage"})}),"\n",(0,n.jsx)(i.p,{children:"A code coverage plugin."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"<Space> + T + c"})," to open the code coverage resume."]}),"\n",(0,n.jsxs)(i.li,{children:["Press ",(0,n.jsx)(i.code,{children:"q"})," to close it."]}),"\n",(0,n.jsxs)(i.li,{children:["You can also press ",(0,n.jsx)(i.code,{children:"<Space> + T + C"})," if you want to display the lines without coverage in the current file."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"nvim-coverage screenshot",src:s(4893).A+"",width:"3840",height:"2160"})}),"\n",(0,n.jsx)(i.h2,{id:"guttentags-plus",children:(0,n.jsx)(i.a,{href:"https://github.com/tpope/vim-gutentags",children:"guttentags-plus"})}),"\n",(0,n.jsxs)(i.p,{children:["Necessary to enable ",(0,n.jsx)(i.code,{children:"g + d"})," (go to definition) on all symbols of C/C++."]})]})}function a(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7607:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/cmp-luasnip-871ab5a0c4bc5b81cd98e047f203ac2d.webp"},8871:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/aerial-431881a7985ca13405682d8ecde479db.webp"},8883:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/compiler-fde62d36def371ce7a0640afc5f0f461.webp"},8540:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/dooku-9bd0de713cb3c4535e607b708848d66d.webp"},8921:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/fugitive-a0a7ae74dc93f71a5314e06e2627f627.webp"},5364:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/gitsigns-477f65eae1c671234744ce63541948bb.webp"},268:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/litee-calltree-c305ebe4fc6d5153ef29674c2e7cb726.webp"},1534:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/markdown-preview-15a489fdebbb0c99fb358654d8473521.webp"},3307:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/markmap-6021255835c72655af3d84175e936841.webp"},5408:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/neotest-589305c0e1a710c2d8012acba780a824.webp"},3937:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/neural-99f526d6bd627e092e314d4b19c1bcc6.webp"},4893:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/nvim-coverage-e69934e5e9c3c62e298669eb11e59b11.webp"},904:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/nvim-dap-ad846e4f5bb326e1be74eafdc2f47201.webp"},8453:(e,i,s)=>{s.d(i,{R:()=>t,x:()=>c});var n=s(6540);const r={},l=n.createContext(r);function t(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);