"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[384],{9397:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=i(4848),o=i(8453);const r={slug:"what-is-new-on-4-0",title:"What is new on 4.0?",authors:["zeioth"]},t=void 0,l={permalink:"/blog/what-is-new-on-4-0",source:"@site/blog/2024-8-6-what-is-new-on-4-0.md",title:"What is new on 4.0?",description:"Some metrics",date:"2024-08-06T00:00:00.000Z",tags:[],readingTime:4.6,hasTruncateMarker:!1,authors:[{name:"Zeioth",title:"Creator of NormalNvim",url:"https://github.com/zeioth",imageURL:"https://github.com/zeioth.png",key:"zeioth",page:null}],frontMatter:{slug:"what-is-new-on-4-0",title:"What is new on 4.0?",authors:["zeioth"]},unlisted:!1},c={authorsImageUrls:[void 0]},a=[{value:"Some metrics",id:"some-metrics",level:2},{value:"New features",id:"new-features",level:2},{value:"Minor fixes",id:"minor-fixes",level:2},{value:"Minor refactors",id:"minor-refactors",level:2},{value:"Credits",id:"credits",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"some-metrics",children:"Some metrics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Version 4.0"})," add ",(0,s.jsx)(n.code,{children:"1282"})," commits over ",(0,s.jsx)(n.code,{children:"NormalNvim 3.0"})," and over ",(0,s.jsx)(n.code,{children:"10.000"})," non breaking changes."]}),"\n",(0,s.jsxs)(n.li,{children:["This is the result of ",(0,s.jsx)(n.code,{children:"1 year and 4 days of full time development"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://discord.gg/ymcMaSnq7d",children:"56 new users have joined our discord channel"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can check the full diff on GitHub ",(0,s.jsx)(n.a,{href:"https://github.com/NormalNvim/NormalNvim/compare/v3.0.0...v4.0.0-rc7",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"web"}),"): We now have a website for the distro."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"installer"}),"): We now have an automated installer. See ",(0,s.jsx)(n.a,{href:"https://github.com/NormalNvim/NormalNvim/releases/tag/v3.6.0",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"yazi"}),"): New file manager as drop-in replacement for ",(0,s.jsx)(n.code,{children:"ranger"}),". Written in rust and 100% async."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"markdown"}),"): Files are now rendered on normal mode."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"garbage-day.nvim"}),"): We now ship a plugin to pause LSP servers when you are not using them to save resources."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"android support"}),"): This versions supports android termux, including the compiler, and the debugger."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"compiler.nvim"}),"): improved support for gradle."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"compiler.nvim"}),"/",(0,s.jsx)(n.code,{children:"dooku.nvim"}),"/",(0,s.jsx)(n.code,{children:"markmap.nvim"}),"): All the plugins we maintain now support paths with spaces."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"nvim"}),"): Added support for ",(0,s.jsx)(n.code,{children:"nvim 0.10"}),". All the plugins we maintain have been ported to nvim 0.10 too."]}),"\n",(0,s.jsxs)(n.li,{children:["\u26a1perf(",(0,s.jsx)(n.code,{children:"greeter"}),"): Now open nvim considerably faster."]}),"\n",(0,s.jsxs)(n.li,{children:["\u26a1perf(",(0,s.jsx)(n.code,{children:"plugins"}),"): Have been optimized to lazy load much more efficiently."]}),"\n",(0,s.jsxs)(n.li,{children:["\u26a1perf(",(0,s.jsx)(n.code,{children:"treesitter"}),"): Comments are now natively supported."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"none-ls-autoload.nvim"}),"): Is the new plugin we use instead of mason-null-ls to automatically load/unload none-ls sources installed on mason."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"none-ls-external-sources.nvim"}),"): Is a combination of all the available repositories providing none-ls external sources."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"none-ls"}),") Support for cucumber gherkin added."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"nvim-coverage"}),"): Now support hunks."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"nvim-lightbulb"}),"): display a \ud83d\udca1 icon when a code action is available in the current line. It can be disabled with vim.g.codeactions_enabled = false in the file base/1-options.lua."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728(",(0,s.jsx)(n.code,{children:"litee-calltree"}),"): is now available by pressing gj."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"dooku.nvim"}),"): Now supports lua and ruby."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"notifications"}),"): now display smoother (144fps) and last shorter (2.5s)."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"compiler.nvim"}),"): now support the build automation utility meson."]}),"\n",(0,s.jsxs)(n.li,{children:["\u26a1perf(",(0,s.jsx)(n.code,{children:"ui"}),"): Now load instantly even when Neovim is opened with arguments."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"ui"}),"): This version introduces a new winbar with buttons for neotree, aerial, and the compiler."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"heirline-components.nvim"}),"): We now maintain a heirline components plugin to take complexity out of it."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"compiler.nvim"}),"): Can now compile the swift programming language."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"java"}),"): support for java has been greatly improved and all features now work out of the box."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"php"}),"): has been curated and all features now work out of the box."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"neotest"}),"): now support the languages dart, elixir, java, phpunit, zig."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"virtualenv"}),"): We now display the active virtual environment on the status bar (if any)."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"mini.indentscope"}),"): is now used to highlight the current block of code."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"compiler.nvim"}),"): can now compile elixir."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"ufo"}),"): New keymapping zn to fold comments."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"noice"}),"): The command bar is now beautified."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"dap"}),"): The debugger now supports typescript, javascript, and react JSX."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"mappings"}),"): new keymapping ",(0,s.jsx)(n.code,{children:"space + b + a"})," to write all buffers."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"notifications"}),"): Are now automatically dismissed when writing the buffer."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"compiler.nvim v3"}),"): now ship a total of 128 compilation options for 22+ programming languages. This has been the product of 2+ months of full time effort, so please enjoy it."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"right click contextual menu"}),"): We now ship it by default and can be customized in the autocmds file."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2728feat(",(0,s.jsx)(n.code,{children:"language support"}),"): 24+ progamming languages are now included out of the box with lsp, linter, formatter, compiler, and debugger, preconfigured. So you can just start coding without having to setup anything."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"minor-fixes",children:"Minor fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"highlight-undo.nvim"}),"): config adapted to their latest version. Colors are now consistent."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"codelens"}),"): the mapping space + u + L now refreshes codelens when toggling it on."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"codelens"}),"): ocassional notification when resuming from garbage-day.nvim has been fixed here and here."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"lsp"}),"): This version fix rare border cases where LSP mappings were not added correctly (remarkably, on java)."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"formatting"}),"): The mapping Space + l + f now run ",":checktime"," to reflect the changes in the editor immediately."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"aerial"}),"): Now open correctly even when the cursor is over Neotree (or any nofile buffer)."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"compiler.nvim"}),"): the command ",(0,s.jsx)(n.code,{children:":CompilerRedo"})," now works correctly with build automation utilities."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"heirline-components"}),") buffer.wipe now closes all sidebars before the last window is closed."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"markdown-preview.nvim"}),"): Starting this plugin by filetype is a requirement, so we do it now."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"osx"}),"): is not detected as android anymore"]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"json"}),"/",(0,s.jsx)(n.code,{children:"yaml"}),"): now lint and format correctly."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"command autocomplete"}),"): The arrow keys are not inverted anymore when auto completing commands."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc1bfix(",(0,s.jsx)(n.code,{children:"mini.animate"}),"): is now disabled by default on android devices. This fixes slow scroll on android."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"minor-refactors",children:"Minor refactors"}),"\n",(0,s.jsxs)(n.p,{children:["This version has massive refactors over ",(0,s.jsx)(n.code,{children:"v3.0"}),", reducing the amount of complexity\nwithout removing any feature."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u267b\ufe0frefactor(",(0,s.jsx)(n.code,{children:"base"}),"): Complexity has been reduced several thousands of lines without losing any feature, or hiding complexity."]}),"\n",(0,s.jsxs)(n.li,{children:["\u267b\ufe0frefactor(",(0,s.jsx)(n.code,{children:"base"}),"): All functions without a case of use strong enough have been replaced by native nvim functions."]}),"\n",(0,s.jsxs)(n.li,{children:["\u267b\ufe0frefactor(",(0,s.jsx)(n.code,{children:"distroupdate.nvim"}),"): Command names have been changed from the prefix ",(0,s.jsx)(n.code,{children:":Nvim"})," to the prefix ",(0,s.jsx)(n.code,{children:":Distro"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\u267b\ufe0frefactor(",(0,s.jsx)(n.code,{children:"nvim-ts-autopairs"}),"): Has been moved to ",(0,s.jsx)(n.code,{children:"1-base-behaviors.lua"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\u267b\ufe0frefactor(",(0,s.jsx)(n.code,{children:"better-scape"}),"): Updated to latest version. Removed unnecessary option. The author has rewritten the plugin from scratch."]}),"\n",(0,s.jsxs)(n.li,{children:["\u267b\ufe0frefactor(",(0,s.jsx)(n.code,{children:"autotag"}),"): Updated to latest version. Removed unnecessary option from treesitter."]}),"\n",(0,s.jsxs)(n.li,{children:["\u267b\ufe0frefactor(",(0,s.jsx)(n.code,{children:"space + f + t"}),"): won't display the builtin nvim themes anymore."]}),"\n",(0,s.jsxs)(n.li,{children:["\u267b\ufe0frefactor(",(0,s.jsx)(n.code,{children:"none-ls"}),"): Some packages have been deprecated and changed by new ones. See ",(0,s.jsx)(n.a,{href:"https://github.com/NormalNvim/NormalNvim/releases/tag/v3.7.3",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\u267b\ufe0frefactor(",(0,s.jsx)(n.code,{children:"zen_mode"}),"): is now under ",(0,s.jsx)(n.code,{children:"<space> + u + z"}),", with all the other toggles."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,s.jsxs)(n.p,{children:["This docusaurus website uses the ",(0,s.jsx)(n.a,{href:"https://github.com/yazi-rs/yazi-rs.github.io/blob/main/LICENSE",children:"MIT"})," ",(0,s.jsx)(n.a,{href:"https://github.com/yazi-rs/yazi-rs.github.io",children:"page"})," of the Yazi project as initial template.\nWe are gonna add our branding over time.\nCopyright (c) 2023 yazi-rs."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(6540);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);