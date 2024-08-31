---
sidebar_position: 4
description: Description of Normalnvim plugins related to dev.
---

# 4-dev.lua
Plugins you actively use for coding.

## List of plugins

- [luasnip](#luasnip) `SNIPPETS`
- [friendly-snippets](#friendly-snippets) `SNIPPETS`
- [gitsigns](#gitsigns) `GIT`
- [fugitive](#fugitive) `GIT`
- [aerial](#aerial) `ANALIZER`
- [litee-calltree](#litee-calltree) `ANALIZER`
- [dooku](#dooku) `CODE DOCUMENTATION`
- [markdown-preview](#markdown-preview) `CODE DOCUMENTATION`
- [markmap](#markmap) `CODE DOCUMENTATION`
- [neural](#neural) `ARTIFICIAL INTELLIGENCE`
- [copilot](#copilot) `ARTIFICIAL INTELLIGENCE`
- [guess-indent](#guess-indent) `ARTIFICIAL INTELLIGENCE`
- [compiler](#compiler) `COMPILER`
- [overseer](#overseer) `COMPILER`
- [nvim-dap](#nvim-dap) `DEBUGGER`
- [neotest](#neotest) `TESTING`
- [nvim-coverage](#nvim-coverage) `TESTING`
- [guttentags-plus](#guttentags-plus) `LANGUAGE IMPROVEMENTS`

## [luasnip](https://github.com/L3MON4D3/LuaSnip)
The snippet engine we use.

![luasnip screenshot](/img/screenshots/config/dev-core/cmp-luasnip.webp)

## [friendly-snippets](https://github.com/rafamadriz/friendly-snippets)
Collection of snippets we pass to luasnip.

## [gitsigns](https://github.com/lewis6991/gitsigns.nvim)
Display git hunks on modified uncommited lines.

![gitsigns screenshot](/img/screenshots/config/dev/gitsigns.webp)

## [fugitive](https://github.com/tpope/vim-fugitive)
Git commands for Neovim and mergetool support.

> Hint: Check the plugin config to learn how to enable `git mergetool`.

![fugitive screenshot](/img/screenshots/config/dev/fugitive.webp)

## [aerial](https://github.com/stevearc/aerial.nvim)
Symbols tree to quickly analize the code structure of your file. By default
we only display functions.

![aerial screenshot](/img/screenshots/config/dev/aerial.webp)

## [litee-calltree](https://github.com/litee/litee-calltree.nvim)
Calltree viewer to inspect the call order of functions without the need to use
the debugger or execute the program.

* Press `g + j` to open the call tree.
* Press `q` to close it.

![litee-calltree screenshot](/img/screenshots/config/dev/litee-calltree.webp)

## [dooku](https://github.com/rcarriga/dooku.nvim)
HTML documentation generator.

* Press `<Space> + D + d` three times to automatically setup, generate, and open your project documentation, respectively.

![dooku screenshot](/img/screenshots/config/dev/dooku.webp)

## [markdown-preview](https://github.com/iamcco/markdown-preview.nvim)
Preview markdown as HTML in your internet browser.

* Press `<Space> + D + p` to preview your markdown file.

![markdown-preview screenshot](/img/screenshots/config/dev/markdown-preview.webp)

## [markmap](https://github.com/folke/markmap.nvim)
Preview markdown as HTML `mental map` in your internet browser.

![markmap screenshot](/img/screenshots/config/dev/markmap.webp)

## [neural](https://github.com/dense-analysis/neural)
ChatGPT code generator.

* Press `<Space> + a` to `Ask ChatGPT`.

![neural screenshot](/img/screenshots/config/dev/neural.webp)

## [copilot](https://github.com/github/copilot.vim)
GitHub Copilot integration.

> Hint: This is an alternative we offer to the plugin `neural`. This feature is disabled by default. To enable it, uncomment the plugin in `plugins/4-dev.lua` and follow the instructions in the comments.

## [guess-indent](https://github.com/nvim-treesitter/nvim-treesitter-indent)
Automatically guesses and sets the correct indent level for files.

## [compiler](https://github.com/davidgranstrom/compiler.nvim)
Compiler integration.

* Press `F6` to open the compiler.
* Press `Shift + F6` to redo the last selected action.

![compiler.nvim screenshot](/img/screenshots/config/dev/compiler.webp)

## [overseer](https://github.com/stevearc/overseer.nvim)
The task runner `compiler.nvim` uses.

## [nvim-dap](https://github.com/mfussenegger/nvim-dap)
A debugger for Neovim.

* Press `F9` to toggle a breakpoint in the current line.
* Press `F5` to start the debugger.
* [See all debugger keymaps](/docs/keymaps/#debugger).

> Hint: In some languages you might have to run the program before you are able to debug it.

![nvim-dap screenshot](/img/screenshots/config/dev/nvim-dap.webp)

## [neotest](https://github.com/nvim-neotest/neotest)
Unit testing for Neovim.

* Press `<Space> + T + u` to run the unit test under the cursor.
* Press `<Space> + T + t` to open the right neotest summary.
* Press `<Space> + T + T` to open the bottom resume output.

![neotest screenshot](/img/screenshots/config/dev/neotest.webp)

## [nvim-coverage](https://github.com/nvim-neotest/nvim-coverage)
A code coverage plugin.

* Press `<Space> + T + c` to open the code coverage resume.
* Press `q` to close it.
* You can also press `<Space> + T + C` if you want to display the lines without coverage in the current file.

![nvim-coverage screenshot](/img/screenshots/config/dev/nvim-coverage.webp)

## [guttentags-plus](https://github.com/tpope/vim-gutentags)
Necessary to enable `g + d` (go to definition) on all symbols of C/C++.

