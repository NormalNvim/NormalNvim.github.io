---
sidebar_position: 1
description: Description of Normalnvim plugins related to behavior.
---

# 1-behaviors.lua
Plugins that add new behaviors.

## List of plugins

- [yazi](#yazi)
- [project](#project)
- [trim](#trim)
- [stickybuf](#stickybuf)
- [mini.bufremove](#mini-bufremove)
- [smart-splits](#smart-splits)
- [better-escape](#better-escape)
- [toggleterm](#toggleterm)
- [neovim-session-manager](#neovim-session-manager)
- [spectre](#spectre)
- [neo-tree](#neo-tree)
- [nvim-ufo](#nvim-ufo)
- [nvim-neoclip](#nvim-neoclip)
- [zen-mode](#zen-mode)
- [vim-suda](#vim-suda)
- [vim-matchup](#vim-matchup)
- [hop](#hop)
- [nvim-autopairs](#nvim-autopairs)
- [lsp-signature](#lsp-signature)
- [nvim-lightbulb](#nvim-lightbulb)
- [distroupdate](#distroupdate)


## [yazi](https://github.com/mikavilpas/yazi.nvim)
Yazi is a blazing fast file manager for the terminal. This plugin allows you to open yazi in a floating window in Neovim.

## [project](https://github.com/Zeioth/project.nvim)
Provides a menu to open projects you've previously worked on.

## [trim](https://github.com/cappyzawa/trim.nvim)
This plugin trims trailing whitespace and lines.

## [stickybuf](https://github.com/stevearc/stickybuf.nvim)
Prevent certain UI buffers from being accidentally replaced.

## [mini.bufremove](https://github.com/echasnovski/mini.bufremove)
Customize the behavior of closing buffers.

## [smart-splits](https://github.com/mrjones2014/smart-splits.nvim)
Elegant window resize.

## [better-escape](https://github.com/max397574/better-escape.nvim)
Removes the annoying delay Vim historically has had when pressing ESC.

## [toggleterm](https://github.com/akinsho/toggleterm.nvim)
More powerful than the built-in Neovim terminal.

## [neovim-session-manager](https://github.com/Shatur/neovim-session-manager)
Provides a menu to save/load Neovim sessions.

## [spectre](https://github.com/nvim-pack/nvim-spectre)
A search and replace panel for Neovim.

* Press `Space + f + b` to search and replace in buffer.
* Press `Space + f + r` to search and replace in the current working directory recursively.

## [neo-tree](https://github.com/nvim-neo-tree/neo-tree.nvim)
A project file tree viewer.

* Press `Space + b` to toggle it.

## [nvim-ufo](https://github.com/kevinhwang91/nvim-ufo)
Provide convenient folding functions we use in the key mappings.

## [nvim-neoclip](https://github.com/AckslD/nvim-neoclip.lua)
Clipboard manager Neovim plugin with Telescope integration.

## [zen-mode](https://github.com/folke/zen-mode.nvim)
Distraction-free mode.

* Press `Space + u + z` to toggle it.

## [vim-suda](https://github.com/lambdalisue/vim-suda)
Allow writing a file with sudo permissions.

* Press `Space + W` to write a buffer as sudo.

## [vim-matchup](https://github.com/andymass/vim-matchup)
Improves the `%` motion to work over anything.

* Press `%` over `[]`, `()`, `{}`, `''`, `""`, function names, or `for` loops.

## [hop](https://github.com/phaazon/hop.nvim)
Moves the cursor to any point of the visible screen.

* Press `Enter` in normal mode to move the cursor to the point on the screen you want.

## [nvim-autopairs](https://github.com/windwp/nvim-autopairs)
Autocompletes `[]`, `()`, `{}`, `''`, `""`.

* This feature is disabled by default. You can enable it in `base/1-options.lua` by setting `vim.g.autopairs_enabled = true`.

## [lsp-signature](https://github.com/ray-x/lsp_signature.nvim)
Show code documentation as you write functions.

## [nvim-lightbulb](https://github.com/kosayoda/nvim-lightbulb)
Show a lightbulb under the cursor when a code action is available.

## [distroupdate](https://github.com/Zeioth/distroupdate.nvim)
Provide commands to update the distro from the current `git remote origin` of your Neovim config directory.

