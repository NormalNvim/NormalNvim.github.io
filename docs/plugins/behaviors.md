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
- [mini-bufremove](#mini-bufremove)
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
- [nvim-ts-autotag](#nvim-ts-autotag)
- [nvim-autopairs](#nvim-autopairs)
- [lsp-signature](#lsp-signature)
- [nvim-lightbulb](#nvim-lightbulb)
- [hot-reload](#hot-reload)
- [distroupdate](#distroupdate)


## [yazi](https://github.com/mikavilpas/yazi.nvim)
Yazi is a blazing fast file manager for the terminal. This plugin allows you to open yazi in a floating window in Neovim.

![Yazi.nvim screenshot](/img/screenshots/config/behaviors/yazi.webp)

## [project](https://github.com/Zeioth/project.nvim)
Provides a menu to open projects you've previously worked on.

> Hint: This plugin  will auto `:cd` the project dir
every time you open a new buffer if it finds `.git`.
This behavior can be configured.

![project.nvim screenshot](/img/screenshots/config/behaviors/project.webp)

## [trim](https://github.com/cappyzawa/trim.nvim)
This plugin trims trailing whitespace and lines.

## [stickybuf](https://github.com/stevearc/stickybuf.nvim)
Prevent certain UI buffers from being accidentally replaced.

## [mini-bufremove](https://github.com/echasnovski/mini.bufremove)
Customize the behavior of closing buffers.

## [smart-splits](https://github.com/mrjones2014/smart-splits.nvim)
Elegant window resize.

* Press `ctrl + w + v` to create a vertial window.
* Press `ctrl + arrow keys` to resize it.

## [better-escape](https://github.com/max397574/better-escape.nvim)
Removes the annoying delay Vim historically has had when pressing ESC.

## [toggleterm](https://github.com/akinsho/toggleterm.nvim)
More powerful than the built-in Neovim terminal.

* Press `F7` to toggle the terminal.
* Alternatively, you can press `Space + t` to open it splitted.

![toggleterm.nvim screenshot](/img/screenshots/config/behaviors/toggleterm.webp)

## [neovim-session-manager](https://github.com/Shatur/neovim-session-manager)
Provides a menu to save/load Neovim sessions.

* To save the current session press `Space + S + s`
* To find a session to load press `Space + S + f`

![neovim-session-manager screenshot](/img/screenshots/config/behaviors/session-manager.webp)

## [spectre](https://github.com/nvim-pack/nvim-spectre)
A search and replace panel for Neovim.

* Press `Space + f + b` to search and replace in buffer.
* Press `Space + f + r` to search and replace in the current working directory recursively.

![spectre screenshot](/img/screenshots/config/behaviors/spectre.webp)

## [neo-tree](https://github.com/nvim-neo-tree/neo-tree.nvim)
A project file tree viewer.

* Press `Space + e` to toggle it.

![neotree screenshot](/img/screenshots/config/behaviors/neotree.webp)

## [nvim-ufo](https://github.com/kevinhwang91/nvim-ufo)
Provides convenient folding functions we use in the key mappings.

## [nvim-neoclip](https://github.com/AckslD/nvim-neoclip.lua)
Clipboard manager Neovim plugin with Telescope integration.

* Press `Space + f + y` to toggle it.
* Press `Space + f + q` to display your current neovim macros.

![neoclip screenshot](/img/screenshots/config/behaviors/neoclip.webp)

## [zen-mode](https://github.com/folke/zen-mode.nvim)
Distraction-free mode.

* Press `Space + u + z` to toggle it.

![neoclip screenshot](/img/screenshots/config/behaviors/zen-mode.webp)

## [vim-suda](https://github.com/lambdalisue/vim-suda)
Allows writing a file with sudo permissions.

* Press `Space + W` to write a buffer as sudo.

![suda screenshot](/img/screenshots/config/behaviors/suda.webp)

## [vim-matchup](https://github.com/andymass/vim-matchup)
Improves the `%` motion to work over anything.

* Press `%` over `[]`, `()`, `{}`, `''`, `""`, function names, or `for` loops.

## [hop](https://github.com/phaazon/hop.nvim)
Moves the cursor to any point of the visible screen.

* Press `Enter` in normal mode to move the cursor to the point on the screen you want. Then complete the key secuence to go to that point of the screen.

![hop screenshot](/img/screenshots/config/behaviors/hop.webp)

> Hint: If you need to use ENTER while HOP is displaying, press, `SHIFT+ENTER`.

## [nvim-ts-autotag](https://github.com/windwp/nvim-ts-autotag)
Adds HTML support to nvim-autopairs.

![nvim-ts-autotag screenshot](/img/screenshots/config/behaviors/nvim-ts-autotag.webp)

## [nvim-autopairs](https://github.com/windwp/nvim-autopairs)
Autocompletes `[]`, `()`, `{}`, `''`, `""`.

* This feature is disabled by default. You can enable it in `base/1-options.lua` by setting `vim.g.autopairs_enabled = true`.

![nvim-ts-autotag screenshot](/img/screenshots/config/behaviors/nvim-autopairs.webp)

## [lsp-signature](https://github.com/ray-x/lsp_signature.nvim)
Shows code documentation as you write functions parameters.

![lsp signature screenshot](/img/screenshots/config/behaviors/lsp-signature.webp)

## [nvim-lightbulb](https://github.com/kosayoda/nvim-lightbulb)
Shows a lightbulb under the cursor when a code action is available.

* You can use code actions with `Space + l + a`

![lightbulb screenshot](/img/screenshots/config/behaviors/lightbulb.webp)

## [hot-reload](https://github.com/Zeioth/hot-reload.nvim)
Reload your neovim config on the fly! It works with any lua file.

![hot-reload screenshot](/img/screenshots/config/behaviors/hot-reload.webp)

## [distroupdate](https://github.com/Zeioth/distroupdate.nvim)
Provides commands to update the distro from the current `git remote origin` of your Neovim config directory.

![distroupdate screenshot](/img/screenshots/config/behaviors/distroupdate.webp)

