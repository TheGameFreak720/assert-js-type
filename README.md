# assert-js-type

A function that given an array of types as the first argument and the data on the second argument checks if the type matches.

ES6

```
import { assert } from 'assert-js-type';

assert([null, 'string', 'boolean'], true); // returns true
assert([null, 'string', 'boolean'], []) //returns false;
```

NodeJS

```
const { assert } = require('assert-js-type');

assert([null, 'string', 'boolean'], true); // returns true
assert([null, 'string', 'boolean'], []) //returns false;
```
