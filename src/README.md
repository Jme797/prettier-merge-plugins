# Merge Prettier Plugins

This package provides a workaround for the issue where Prettier cannot load multiple plugins. For more details, see [Prettier issue #12807](https://github.com/prettier/prettier/issues/12807).

## Installation

To install this package, use npm:

```sh
npm install merge-prettier-plugins
```

## Usage

```js
const mergePluginConfigs = require('merge-prettier-plugins');

// Example usage with two plugins
const plugin1 = require('prettier-plugin-1');
const plugin2 = require('prettier-plugin-2');

const mergedConfig = mergePluginConfigs(plugin1, plugin2);

// Use the mergedConfig with Prettier
```
