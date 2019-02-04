# ember-cli-element-closest-polyfill

[![Build Status](https://travis-ci.org/miguelcobain/ember-cli-element-closest-polyfill.svg?branch=master)](https://travis-ci.org/miguelcobain/ember-cli-element-closest-polyfill)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-element-closest-polyfill.svg)](https://emberobserver.com/addons/ember-cli-element-closest-polyfill)
[![npm version](https://badge.fury.io/js/ember-cli-element-closest-polyfill.svg)](https://badge.fury.io/js/ember-cli-element-closest-polyfill)

Ember-CLI addon to add a polyfill for the [`Element.closest()`](https://developer.mozilla.org/en/docs/Web/API/Element/closest)
property, based on [element-closest](https://github.com/jonathantneal/closest).

Internet Explorer 11 and lower do not support `closest()`. 
See full [browser support details](https://caniuse.com/#feat=element-closest).

The included polyfill also polyfills [`#Element.matches`](https://developer.mozilla.org/en/docs/Web/API/Element/matches), which is
widely supported but often vendor-prefixed.

## Installation

```bash
ember install ember-cli-element-closest-polyfill
```

## Usage

The addon will import the polyfill by default to your `vendor.js`. 

Beginning with version 2.13 Ember CLI supports a [Targets](http://rwjblue.com/2017/04/21/ember-cli-targets/) feature, 
allowing you to specify the list of browsers your app should support like `last 1 Chrome versions` or `ie 11`.
If the [caniuse database](https://caniuse.com/#feat=element-closest) indicates that all browsers you want to support *fully* support the feature, then the 
polyfill will *not* be included into your build, to not increase your bundle size.

### Usage in an addon

This should also work as a nested addon of another addon, just include it as a `dependency`. So if your addon
makes use of `closest()`, you can use this to make sure the API is available. Given the above mentioned targets feature,
it will have no negative impact on the consuming app should the polyfill not be needed.

## Credits

This addon was inspired by a similar polyfill addon: https://github.com/kaliber5/ember-cli-classlist-polyfill

## License

This project is licensed under the [MIT License](LICENSE.md).
