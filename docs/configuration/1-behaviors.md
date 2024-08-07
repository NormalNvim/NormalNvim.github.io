---
sidebar_position: 1
description: Description of Normalnvim plugins related to behavior.
---

# 1-behaviors.lua
Plugins that add new behaviors.

## List of plugins

- [yazi.nvim](#yazi-nvim)
- [project.nvim](#project-nvim)
- [trim.nvim](#trim-nvim)
- [stickybuf.nvim](#stickybuf-nvim)
- [mini.bufremove](#mini-bufremove)
- [smart-splits.nvim](#smart-splits-nvim)
- [better-escape.nvim](#better-escape-nvim)
- [toggleterm.nvim](#toggleterm-nvim)
- [neovim-session-manager](#neovim-session-manager)
- [spectre.nvim](#spectre-nvim)
- [neo-tree.nvim](#neo-tree-nvim)
- [nvim-ufo](#nvim-ufo)
- [nvim-neoclip.lua](#nvim-neoclip-lua)
- [zen-mode.nvim](#zen-mode-nvim)
- [vim-suda](#vim-suda)
- [vim-matchup](#vim-matchup)
- [hop.nvim](#hop-nvim)
- [nvim-autopairs](#nvim-autopairs)
- [lsp_signature.nvim](#lsp-signature-nvim)
- [nvim-lightbulb](#nvim-lightbulb)
- [distroupdate.nvim](#distroupdate-nvim)


## [yazi.nvim](https://github.com/mikavilpas/yazi.nvim)
Yazi is a blazing fast file manager for the terminal. This plugin allows you to open yazi in a floating window in Neovim.

## [project.nvim](https://github.com/Zeioth/project.nvim)
Provides a menu to open projects you've previously worked on.

## [trim.nvim](https://github.com/cappyzawa/trim.nvim)
This plugin trims trailing whitespace and lines.

## [stickybuf.nvim](https://github.com/stevearc/stickybuf.nvim)
Prevent certain UI buffers from being accidentally replaced.

## [mini.bufremove](https://github.com/echasnovski/mini.bufremove)
Customize the behavior of closing buffers.

## [smart-splits.nvim](https://github.com/mrjones2014/smart-splits.nvim)
Elegant window resize.

## [better-escape.nvim](https://github.com/max397574/better-escape.nvim)
Removes the annoying delay Vim historically has had when pressing ESC.

## [toggleterm.nvim](https://github.com/akinsho/toggleterm.nvim)
More powerful than the built-in Neovim terminal.

## [neovim-session-manager](https://github.com/Shatur/neovim-session-manager)
Provides a menu to save/load Neovim sessions.

## [spectre.nvim](https://github.com/nvim-pack/nvim-spectre)
A search and replace panel for Neovim.

* Press `Space + f + b` to search and replace in buffer.
* Press `Space + f + r` to search and replace in the current working directory recursively.

## [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim)
A project file tree viewer.

* Press `Space + b` to toggle it.

## [nvim-ufo](https://github.com/kevinhwang91/nvim-ufo)
Provide convenient folding functions we use in the key mappings.

## [nvim-neoclip.lua](https://github.com/AckslD/nvim-neoclip.lua)
Clipboard manager Neovim plugin with Telescope integration.

## [zen-mode.nvim](https://github.com/folke/zen-mode.nvim)
Distraction-free mode.

* Press `Space + u + z` to toggle it.

## [vim-suda](https://github.com/lambdalisue/vim-suda)
Allow writing a file with sudo permissions.

* Press `Space + W` to write a buffer as sudo.

## [vim-matchup](https://github.com/andymass/vim-matchup)
Improves the `%` motion to work over anything.

* Press `%` over `[]`, `()`, `{}`, `''`, `""`, function names, or `for` loops.

## [hop.nvim](https://github.com/phaazon/hop.nvim)
Moves the cursor to any point of the visible screen.

* Press `Enter` in normal mode to move the cursor to the point on the screen you want.

## [nvim-autopairs](https://github.com/windwp/nvim-autopairs)
Autocompletes `[]`, `()`, `{}`, `''`, `""`.

* This feature is disabled by default. You can enable it in `base/1-options.lua` by setting `vim.g.autopairs_enabled = true`.

## [lsp_signature.nvim](https://github.com/ray-x/lsp_signature.nvim)
Show code documentation as you write functions.

## [nvim-lightbulb](https://github.com/kosayoda/nvim-lightbulb)
Show a lightbulb under the cursor wh

