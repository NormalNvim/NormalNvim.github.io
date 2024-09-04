---
slug: what-is-new-on-4-0
title: What is new on 4.0?
authors: [zeioth]
---

## Some metrics

* `Version 4.0` add `1282` commits over `NormalNvim 3.0` and over `10.000` non breaking changes.
* This is the result of `1 year and 4 days of full time development`.
* [56 new users have joined our discord channel](https://discord.gg/ymcMaSnq7d).

You can check the full diff on GitHub [here](https://github.com/NormalNvim/NormalNvim/compare/v3.0.0...v4.0.0-rc7).

## New features
* ✨feat(`web`): We now have a website for the distro.
* ✨feat(`installer`): We now have an automated installer. See [here](https://github.com/NormalNvim/NormalNvim/releases/tag/v3.6.0).
* ✨feat(`yazi`): New file manager as drop-in replacement for `ranger`. Written in rust and 100% async.
* ✨feat(`markdown`): Files are now rendered on normal mode.
* ✨feat(`garbage-day.nvim`): We now ship a plugin to pause LSP servers when you are not using them to save resources.
* ✨feat(`android support`): This versions supports android termux, including the compiler, and the debugger.
* ✨feat(`compiler.nvim`): improved support for gradle.
* ✨feat(`compiler.nvim`/`dooku.nvim`/`markmap.nvim`): All the plugins we maintain now support paths with spaces.
* ✨feat(`nvim`): Added support for `nvim 0.10`. All the plugins we maintain have been ported to nvim 0.10 too.
* ⚡perf(`greeter`): Now open nvim considerably faster.
* ⚡perf(`plugins`): Have been optimized to lazy load much more efficiently.
* ⚡perf(`treesitter`): Comments are now natively supported.
* ✨feat(`none-ls-autoload.nvim`): Is the new plugin we use instead of mason-null-ls to automatically load/unload none-ls sources installed on mason.
* ✨feat(`none-ls-external-sources.nvim`): Is a combination of all the available repositories providing none-ls external sources.
* ✨feat(`none-ls`) Support for cucumber gherkin added.
* ✨feat(`nvim-coverage`): Now support hunks.
* ✨feat(`nvim-lightbulb`): display a 💡 icon when a code action is available in the current line. It can be disabled with vim.g.codeactions_enabled = false in the file base/1-options.lua.
* ✨(`litee-calltree`): is now available by pressing gj.
* ✨feat(`dooku.nvim`): Now supports lua and ruby.
* ✨feat(`notifications`): now display smoother (144fps) and last shorter (2.5s).
* ✨feat(`compiler.nvim`): now support the build automation utility meson.
* ⚡perf(`ui`): Now load instantly even when Neovim is opened with arguments.
* ✨feat(`ui`): This version introduces a new winbar with buttons for neotree, aerial, and the compiler.
* ✨feat(`heirline-components.nvim`): We now maintain a heirline components plugin to take complexity out of it.
* ✨feat(`compiler.nvim`): Can now compile the swift programming language.
* ✨feat(`java`): support for java has been greatly improved and all features now work out of the box.
* ✨feat(`php`): has been curated and all features now work out of the box.
* ✨feat(`neotest`): now support the languages dart, elixir, java, phpunit, zig.
* ✨feat(`virtualenv`): We now display the active virtual environment on the status bar (if any).
* ✨feat(`mini.indentscope`): is now used to highlight the current block of code.
* ✨feat(`compiler.nvim`): can now compile elixir.
* ✨feat(`ufo`): New keymapping zn to fold comments.
* ✨feat(`noice`): The command bar is now beautified.
* ✨feat(`dap`): The debugger now supports typescript, javascript, and react JSX.
* ✨feat(`mappings`): new keymapping `space + b + a` to write all buffers.
* ✨feat(`notifications`): Are now automatically dismissed when writing the buffer.
* ✨feat(`compiler.nvim v3`): now ship a total of 128 compilation options for 22+ programming languages. This has been the product of 2+ months of full time effort, so please enjoy it.
* ✨feat(`right click contextual menu`): We now ship it by default and can be customized in the autocmds file.
* ✨feat(`language support`): 24+ progamming languages are now included out of the box with lsp, linter, formatter, compiler, and debugger, preconfigured. So you can just start coding without having to setup anything.

## Minor fixes
* 🐛fix(`highlight-undo.nvim`): config adapted to their latest version. Colors are now consistent.
* 🐛fix(`codelens`): the mapping space + u + L now refreshes codelens when toggling it on.
* 🐛fix(`codelens`): ocassional notification when resuming from garbage-day.nvim has been fixed here and here.
* 🐛fix(`lsp`): This version fix rare border cases where LSP mappings were not added correctly (remarkably, on java).
* 🐛fix(`formatting`): The mapping Space + l + f now run :checktime to reflect the changes in the editor immediately.
* 🐛fix(`aerial`): Now open correctly even when the cursor is over Neotree (or any nofile buffer).
* 🐛fix(`compiler.nvim`): the command `:CompilerRedo` now works correctly with build automation utilities.
* 🐛fix(`heirline-components`) buffer.wipe now closes all sidebars before the last window is closed.
* 🐛fix(`markdown-preview.nvim`): Starting this plugin by filetype is a requirement, so we do it now.
* 🐛fix(`osx`): is not detected as android anymore
* 🐛fix(`json`/`yaml`): now lint and format correctly.
* 🐛fix(`command autocomplete`): The arrow keys are not inverted anymore when auto completing commands.
* 🐛fix(`mini.animate`): is now disabled by default on android devices. This fixes slow scroll on android.

## Minor refactors
This version has massive refactors over `v3.0`, reducing the amount of complexity
without removing any feature.

* ♻️refactor(`base`): Complexity has been reduced several thousands of lines without losing any feature, or hiding complexity.
* ♻️refactor(`base`): All functions without a case of use strong enough have been replaced by native nvim functions.
* ♻️refactor(`distroupdate.nvim`): Command names have been changed from the prefix `:Nvim` to the prefix `:Distro`.
* ♻️refactor(`nvim-ts-autopairs`): Has been moved to `1-base-behaviors.lua`.
* ♻️refactor(`better-scape`): Updated to latest version. Removed unnecessary option. The author has rewritten the plugin from scratch.
* ♻️refactor(`autotag`): Updated to latest version. Removed unnecessary option from treesitter.
* ♻️refactor(`space + f + t`): won't display the builtin nvim themes anymore.
* ♻️refactor(`none-ls`): Some packages have been deprecated and changed by new ones. See [here](https://github.com/NormalNvim/NormalNvim/releases/tag/v3.7.3).
* ♻️refactor(`zen_mode`): is now under `<space> + u + z`, with all the other toggles.

## Credits
This docusaurus website uses the [MIT](https://github.com/yazi-rs/yazi-rs.github.io/blob/main/LICENSE) [page](https://github.com/yazi-rs/yazi-rs.github.io) of the Yazi project as initial template.
We are gonna add our branding over time.
Copyright (c) 2023 yazi-rs.
