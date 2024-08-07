---
sidebar_position: 1
description: How to install NormalNvim on various operating systems.
---

# Installation
* You need Neovim >= `0.10`
* There are 3 ways to install NormalNvim.

## Installer (Linux/MacOS/WSL)
You can preview it [here](https://github.com/NormalNvim/installer)
```sh
wget -q https://raw.githubusercontent.com/NormalNvim/installer/main/installer.sh && chmod +x installer.sh && ./installer.sh
```

## Clone manually (Linux/MacOS/WSL)
```sh
# Strongly recommended: Fork the repo and clone YOUR fork.
git clone https://github.com/NormalNvim/NormalNvim.git ~/.config/nvim
```

## Clone manually (Windows)
```sh
# Strongly recommended: Fork the repo and clone YOUR fork.
git clone https://github.com/NormalNvim/NormalNvim.git %USERPROFILE%\AppData\Local\nvim && nvim
```

## Optional dependencies
This is only necessary if you installed NormalNvim by cloning manually
instead of using the installer. [To unlock all features you will have to install the dependencies](https://github.com/NormalNvim/NormalNvim/wiki/dependencies).


![NormalNvim screenshot](/img/screenshots/installation/NormalNvim.webp)
