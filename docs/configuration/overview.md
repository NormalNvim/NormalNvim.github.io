---
id: overview
sidebar_position: 0
sidebar_label: ⚙️ Configuration
description: Learn how to configure Yazi.
---

# ⚙️ Configuration

This is how the NormalNvim directory is structured:

- [/base](https://github.com/NormalNvim/NormalNvim/tree/main/lua/base)
  - [`options.lua`](https://github.com/NormalNvim/NormalNvim/blob/main/lua/base/1-options.lua) - Neovim options.
  - [`lazy.lua`](https://github.com/NormalNvim/NormalNvim/blob/main/lua/base/2-lazy.lua) - Plugin loader.
  - [`autocmds.lua`](https://github.com/NormalNvim/NormalNvim/blob/main/lua/base/3-autocmds.lua) - User autocmds and commands.
  - [`mappings.lua`](https://github.com/NormalNvim/NormalNvim/blob/main/lua/base/4-mappings.lua) - User keymaps.
  - [`health.lua`](https://github.com/NormalNvim/NormalNvim/blob/main/lua/base/health.lua) - To run `:checkhealth base`.
  - [`\icons`](https://github.com/NormalNvim/NormalNvim/tree/main/lua/base/icons) - The icons you use.
  - [`\utils`](https://github.com/NormalNvim/NormalNvim/tree/main/lua/base/utils) - Utilities to save code repetition.
- [/plugins](https://github.com/NormalNvim/NormalNvim/tree/main/lua/plugins)
  - [`1-behaviors.lua`](https://github.com/NormalNvim/NormalNvim/blob/main/lua/plugins/1-base-behaviors.lua) - Plugins that add new behaviors.
  - [`2-ui.lua`](https://github.com/NormalNvim/NormalNvim/blob/main/lua/plugins/2-ui.lua) - Plugins that make the GUI better.
  - [`3-dev-core.lua`](https://github.com/NormalNvim/NormalNvim/blob/main/lua/plugins/3-dev-core.lua) - Plugins that are just there.
  - [`4-dev.lua`](https://github.com/NormalNvim/NormalNvim/blob/main/lua/plugins/4-dev.lua) - Plugins you actively use for coding.
- [`lazy_snapshot.lua`](https://github.com/NormalNvim/NormalNvim/blob/main/lua/lazy_snapshot.lua) - Here you can set the version of every plugin.

On the left sidebar of this page you can find a description of every plugin.

![directory structure screenshot](/img/screenshots/config/directory-structure.webp)

## Where to find the config
### UNIX
- You can find the NormalNvim directory on: `~/.config/nvim`
- You can find the plugins directory on: `~/.local/share/nvim/lazy`

### Windows
- You can find the NormalNvim directory on: `%LOCALAPPDATA%\nvim`
- You can find the plugins directory on: `%LOCALAPPDATA%\nvim-data\lazy`
