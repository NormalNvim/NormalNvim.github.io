---
sidebar_position: 3
description: Description of Normalnvim plugins related to dev core.
---

# 3-dev-core.lua
Plugins that are just there.

## List of plugins

- [nvim-treesitter](#nvim-treesitter) `TREESITTER`
- [ts-comments](#ts-comments) `TREESITTER`
- [render-markdown](#render-markdown) `TREESITTER`
- [nvim-highlight-colors](#nvim-highlight-colors) `TREESITTER`
- [nvim-java](#nvim-java) `LSP`
- [mason-lspconfig](#mason-lspconfig) `LSP`
- [nvim-lspconfig](#nvim-lspconfig) `LSP`
- [mason](#mason) `LSP`
- [SchemaStore](#schemastore) `LSP`
- [none-ls-autoload](#none-ls-autoload) `LSP`
- [none-ls](#none-ls) `LSP`
- [garbage-day](#garbage-day) `LSP`
- [lazydev](#lazydev) `LSP`
- [nvim-cmp](#nvim-cmp) `AUTO-COMPLETION`
- [cmp-buffer](#cmp-buffer) `AUTO-COMPLETION`
- [cmp-path](#cmp-path) `AUTO-COMPLETION`
- [cmp-lsp](#cmp-lsp) `AUTO-COMPLETION`
- [cmp-luasnip](#cmp-luasnip) `AUTO-COMPLETION`


## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
Syntax highlighting manager for Neovim.

## [ts-comments](https://github.com/folke/ts-comments.nvim)
You can comment your code pressing the keys `g + c + c` in normal mode.

> Hint: Neovim already has this feature built-in. This plugin just improve language support.

![ts-comments screenshot](/img/screenshots/config/dev-core/ts-comments.webp)

## [render-markdown](https://github.com/echasnovski/render-markdown.nvim)
Render markdown while in normal mode. Great for note taking!

![render-markdown screenshot](/img/screenshots/config/dev-core/render-markdown.webp)

## [nvim-highlight-colors](https://github.com/aviaryan/nvim-highlight-colors)
Preview CSS colors in Neovim.

![nvim-highlight-colors screenshot](/img/screenshots/config/dev-core/nvim-highlight-colors.webp)

## [nvim-java](https://github.com/neovim/nvim-java)
The `java` programming language require this plugin to be loaded before
`nvim-lspconfig`. `java` Is the only programming language that requires a dedicated plugin.

## [mason-lspconfig](https://github.com/williamboman/mason-lspconfig.nvim)
This plugin automatically start the LSP servers you have installed on the
package manager `mason` for the current filetype.

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)
The plugin provide sane defaults for LSP servers, so you don't need to manually
configure them.

## [mason](https://github.com/williamboman/mason.nvim)
Mason is package manager for Neovim. You can use it to install/uninstall
`LSP servers`, `debuggers`, `linters`, and `formatters`.

* Press `<Space> + p + m` to open mason.
* You can press `ctrl+ f` to filter by programming language.

> Note: When you install NormalNvim using the automated installer, we install
the most common mason packages for you, so you don't need to worry about it.

![mason screenshot](/img/screenshots/config/dev-core/mason.webp)

## [SchemaStore](https://github.com/b0o/SchemaStore.nvim)
Adds new lints to `YAML` and `JSON` LSP servers when you edit well known files.
Like `tslint.json` and such. You can check all supported schemas [here](https://www.schemastore.org/json/).

![SchemaStore screenshot](/img/screenshots/config/dev-core/schemastore.webp)

## [none-ls-autoload](https://github.com/jose-elias-alvarez/none-ls-autoload.nvim)
This plugin automatically uses the plugin `none-ls` to start the `formatters`
and `linters` you have installed on the package manager `mason` for
the current filetype.

## [none-ls](https://github.com/jose-elias-alvarez/none-ls.nvim)
The plugin provide sane defaults for `linters` and `formatters`,
so you don't need to manually configure them.

## [garbage-day](https://github.com/simrat39/garbage-day)
LSP garbage collector. This plugin temporarely stop LSP servers when you are not
using them and resume them when you go back to code to free memory.

![garbage-day screenshot](/img/screenshots/config/dev-core/garbage-day.webp)

## [lazydev](https://github.com/lazydev/lazydev.nvim)
Useful to have code autocompletion when developing Neovim plugins in `lua`.

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)
Auto-completion engine plugin.

## [cmp-buffer](https://github.com/hrsh7th/cmp-buffer)
Buffer completions for the plugin `nvim-cmp`.

![cmp-buffer screenshot](/img/screenshots/config/dev-core/cmp-buffer.webp)

## [cmp-path](https://github.com/hrsh7th/cmp-path)
Path completions for the plugin `nvim-cmp`.

![cmp-path screenshot](/img/screenshots/config/dev-core/cmp-path.webp)

## [cmp-lsp](https://github.com/hrsh7th/cmp-lsp)
LSP completions for the plugin `nvim-cmp`.

![cmp-lsp screenshot](/img/screenshots/config/dev-core/cmp-lsp.webp)

## [cmp-luasnip](https://github.com/saadparwaiz1/cmp_luasnip)
LuaSnip completions for the plugin `nvim-cmp`.

![cmp-luasnip screenshot](/img/screenshots/config/dev-core/cmp-luasnip.webp)

