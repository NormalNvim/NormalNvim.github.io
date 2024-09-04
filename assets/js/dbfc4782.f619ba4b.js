"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[749],{1895:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"what-is-new-on-4-0","metadata":{"permalink":"/blog/what-is-new-on-4-0","source":"@site/blog/2024-8-6-what-is-new-on-4-0.md","title":"What is new on 4.0?","description":"Some metrics","date":"2024-08-06T00:00:00.000Z","tags":[],"readingTime":4.6,"hasTruncateMarker":false,"authors":[{"name":"Zeioth","title":"Creator of NormalNvim","url":"https://github.com/zeioth","imageURL":"https://github.com/zeioth.png","key":"zeioth","page":null}],"frontMatter":{"slug":"what-is-new-on-4-0","title":"What is new on 4.0?","authors":["zeioth"]},"unlisted":false},"content":"## Some metrics\\n\\n* `Version 4.0` add `1282` commits over `NormalNvim 3.0` and over `10.000` non breaking changes.\\n* This is the result of `1 year and 4 days of full time development`.\\n* [56 new users have joined our discord channel](https://discord.gg/ymcMaSnq7d).\\n\\nYou can check the full diff on GitHub [here](https://github.com/NormalNvim/NormalNvim/compare/v3.0.0...v4.0.0-rc7).\\n\\n## New features\\n* \u2728feat(`web`): We now have a website for the distro.\\n* \u2728feat(`installer`): We now have an automated installer. See [here](https://github.com/NormalNvim/NormalNvim/releases/tag/v3.6.0).\\n* \u2728feat(`yazi`): New file manager as drop-in replacement for `ranger`. Written in rust and 100% async.\\n* \u2728feat(`markdown`): Files are now rendered on normal mode.\\n* \u2728feat(`garbage-day.nvim`): We now ship a plugin to pause LSP servers when you are not using them to save resources.\\n* \u2728feat(`android support`): This versions supports android termux, including the compiler, and the debugger.\\n* \u2728feat(`compiler.nvim`): improved support for gradle.\\n* \u2728feat(`compiler.nvim`/`dooku.nvim`/`markmap.nvim`): All the plugins we maintain now support paths with spaces.\\n* \u2728feat(`nvim`): Added support for `nvim 0.10`. All the plugins we maintain have been ported to nvim 0.10 too.\\n* \u26a1perf(`greeter`): Now open nvim considerably faster.\\n* \u26a1perf(`plugins`): Have been optimized to lazy load much more efficiently.\\n* \u26a1perf(`treesitter`): Comments are now natively supported.\\n* \u2728feat(`none-ls-autoload.nvim`): Is the new plugin we use instead of mason-null-ls to automatically load/unload none-ls sources installed on mason.\\n* \u2728feat(`none-ls-external-sources.nvim`): Is a combination of all the available repositories providing none-ls external sources.\\n* \u2728feat(`none-ls`) Support for cucumber gherkin added.\\n* \u2728feat(`nvim-coverage`): Now support hunks.\\n* \u2728feat(`nvim-lightbulb`): display a \ud83d\udca1 icon when a code action is available in the current line. It can be disabled with vim.g.codeactions_enabled = false in the file base/1-options.lua.\\n* \u2728(`litee-calltree`): is now available by pressing gj.\\n* \u2728feat(`dooku.nvim`): Now supports lua and ruby.\\n* \u2728feat(`notifications`): now display smoother (144fps) and last shorter (2.5s).\\n* \u2728feat(`compiler.nvim`): now support the build automation utility meson.\\n* \u26a1perf(`ui`): Now load instantly even when Neovim is opened with arguments.\\n* \u2728feat(`ui`): This version introduces a new winbar with buttons for neotree, aerial, and the compiler.\\n* \u2728feat(`heirline-components.nvim`): We now maintain a heirline components plugin to take complexity out of it.\\n* \u2728feat(`compiler.nvim`): Can now compile the swift programming language.\\n* \u2728feat(`java`): support for java has been greatly improved and all features now work out of the box.\\n* \u2728feat(`php`): has been curated and all features now work out of the box.\\n* \u2728feat(`neotest`): now support the languages dart, elixir, java, phpunit, zig.\\n* \u2728feat(`virtualenv`): We now display the active virtual environment on the status bar (if any).\\n* \u2728feat(`mini.indentscope`): is now used to highlight the current block of code.\\n* \u2728feat(`compiler.nvim`): can now compile elixir.\\n* \u2728feat(`ufo`): New keymapping zn to fold comments.\\n* \u2728feat(`noice`): The command bar is now beautified.\\n* \u2728feat(`dap`): The debugger now supports typescript, javascript, and react JSX.\\n* \u2728feat(`mappings`): new keymapping `space + b + a` to write all buffers.\\n* \u2728feat(`notifications`): Are now automatically dismissed when writing the buffer.\\n* \u2728feat(`compiler.nvim v3`): now ship a total of 128 compilation options for 22+ programming languages. This has been the product of 2+ months of full time effort, so please enjoy it.\\n* \u2728feat(`right click contextual menu`): We now ship it by default and can be customized in the autocmds file.\\n* \u2728feat(`language support`): 24+ progamming languages are now included out of the box with lsp, linter, formatter, compiler, and debugger, preconfigured. So you can just start coding without having to setup anything.\\n\\n## Minor fixes\\n* \ud83d\udc1bfix(`highlight-undo.nvim`): config adapted to their latest version. Colors are now consistent.\\n* \ud83d\udc1bfix(`codelens`): the mapping space + u + L now refreshes codelens when toggling it on.\\n* \ud83d\udc1bfix(`codelens`): ocassional notification when resuming from garbage-day.nvim has been fixed here and here.\\n* \ud83d\udc1bfix(`lsp`): This version fix rare border cases where LSP mappings were not added correctly (remarkably, on java).\\n* \ud83d\udc1bfix(`formatting`): The mapping Space + l + f now run :checktime to reflect the changes in the editor immediately.\\n* \ud83d\udc1bfix(`aerial`): Now open correctly even when the cursor is over Neotree (or any nofile buffer).\\n* \ud83d\udc1bfix(`compiler.nvim`): the command `:CompilerRedo` now works correctly with build automation utilities.\\n* \ud83d\udc1bfix(`heirline-components`) buffer.wipe now closes all sidebars before the last window is closed.\\n* \ud83d\udc1bfix(`markdown-preview.nvim`): Starting this plugin by filetype is a requirement, so we do it now.\\n* \ud83d\udc1bfix(`osx`): is not detected as android anymore\\n* \ud83d\udc1bfix(`json`/`yaml`): now lint and format correctly.\\n* \ud83d\udc1bfix(`command autocomplete`): The arrow keys are not inverted anymore when auto completing commands.\\n* \ud83d\udc1bfix(`mini.animate`): is now disabled by default on android devices. This fixes slow scroll on android.\\n\\n## Minor refactors\\nThis version has massive refactors over `v3.0`, reducing the amount of complexity\\nwithout removing any feature.\\n\\n* \u267b\ufe0frefactor(`base`): Complexity has been reduced several thousands of lines without losing any feature, or hiding complexity.\\n* \u267b\ufe0frefactor(`base`): All functions without a case of use strong enough have been replaced by native nvim functions.\\n* \u267b\ufe0frefactor(`distroupdate.nvim`): Command names have been changed from the prefix `:Nvim` to the prefix `:Distro`.\\n* \u267b\ufe0frefactor(`nvim-ts-autopairs`): Has been moved to `1-base-behaviors.lua`.\\n* \u267b\ufe0frefactor(`better-scape`): Updated to latest version. Removed unnecessary option. The author has rewritten the plugin from scratch.\\n* \u267b\ufe0frefactor(`autotag`): Updated to latest version. Removed unnecessary option from treesitter.\\n* \u267b\ufe0frefactor(`space + f + t`): won\'t display the builtin nvim themes anymore.\\n* \u267b\ufe0frefactor(`none-ls`): Some packages have been deprecated and changed by new ones. See [here](https://github.com/NormalNvim/NormalNvim/releases/tag/v3.7.3).\\n* \u267b\ufe0frefactor(`zen_mode`): is now under `<space> + u + z`, with all the other toggles.\\n\\n## Credits\\nThis docusaurus website uses the [MIT](https://github.com/yazi-rs/yazi-rs.github.io/blob/main/LICENSE) [page](https://github.com/yazi-rs/yazi-rs.github.io) of the Yazi project as initial template.\\nWe are gonna add our branding over time.\\nCopyright (c) 2023 yazi-rs."}]}}')}}]);