# wait-for-es7

WaitFor - util function which is waiting for some condition (`checkFn`) during `timeout`, checks it every `interval`. Rejects if condition not fulfilled.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

# Install

    npm install wait-for-es7 --save

    or

    yarn add wait-for-es7

# Usage

```typescript
import waitFor from "wait-for-es6";

const startTime = new Date().getTime();

await waitFor( () => startTime < new Date().getTime() - 4000, { timeout: 5000, interval: 500 } );
// Not rejected, because 4000ms < 5000ms

await waitFor( () => false, { timeout: 5000, interval: 500 } );
// Will reject, because checkFn always return false

```

# API

```typescript
async function waitFor(checkFn: () => boolean | Promise<boolean>, options: IWaitForOptions = {});

interface IWaitForOptions {
    timeout?: number;
    interval?: number;
}
```

# Test

    npm install
    npm test

[npm-image]: https://badge.fury.io/js/wait-for-es7.svg
[npm-url]: https://npmjs.org/package/wait-for-es7
[travis-image]: https://travis-ci.org/arvitaly/wait-for-es7.svg?branch=master
[travis-url]: https://travis-ci.org/arvitaly/wait-for-es7
[daviddm-image]: https://david-dm.org/arvitaly/wait-for-es7.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/arvitaly/wait-for-es7
[coveralls-image]: https://coveralls.io/repos/arvitaly/wait-for-es7/badge.svg
[coveralls-url]: https://coveralls.io/r/arvitaly/wait-for-es7