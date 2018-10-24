For report bug https://github.com/istanbuljs/babel-plugin-istanbul/issues/161

```js
// source code
import { uniq } from 'lodash';

const { test } = uniq;
console.log(test); // show output undefined

```

```js
// without any babel config
import { uniq } from 'lodash';
const {
  test
} = uniq;
console.log(test); // show output undefined
```


```js
// without any babel config
import { uniq } from 'lodash';
const {
  test
} = uniq;
console.log(test); // show output undefined
```

```js
// added @babel/preset-env
"use strict";

var _lodash = require("lodash");

var test = _lodash.uniq.test;
console.log(test); // show output undefined
```

```js
// added babel-plugin-import
"use strict";

var _uniq2 = _interopRequireDefault(require("lodash/uniq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var test = _uniq2.default.test;
console.log(test); // show output undefined
```

```js
// add babel-plugin-istanbul
"use strict";

var cov_1w85kdevi8 = function () {
  var path = "/Users/yutingzhao/code/test/istanbul/src/index.js",
      hash = "fbd8255d4f74a8cebf11098dad2a67d859c11a0d",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/yutingzhao/code/test/istanbul/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 17
        },
        end: {
          line: 3,
          column: 21
        }
      },
      "1": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 18
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _ref = (cov_1w85kdevi8.s[0]++, uniq),
    test = _ref.test;

cov_1w85kdevi8.s[1]++;
console.log(test); // show output undefined
```
