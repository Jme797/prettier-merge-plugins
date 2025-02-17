# merge-prettier-plugins

Temporary work around for https://github.com/prettier/prettier/issues/12807

## Installation

To install this package, use npm:

```
npm install my-npm-package
```

## Usage

After installing, you can use the package in your project:

```javascript
const mergePluginConfigs = require('merge-prettier-plugins');

const plugin1 = require('plugin-one');
const plugin2 = require('plugin-two');

const config = mergePluginConfigs(plugin1, plugin2, /* .... */);


```

## License

This project is licensed under the MIT License.
