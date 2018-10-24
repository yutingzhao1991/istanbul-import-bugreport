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