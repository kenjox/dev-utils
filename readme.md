# Super simple logger

## Usage

Printing an object

```javascript
const { dd } = require('@kenjox/dev-utils');

const obj = { a: 'b', c: { d: { e: { f: 'g' } } } };

dd(obj);

// Output
{
  "a": "b",
  "c": {
    "d": {
      "e": {
        "f": "g"
      }
    }
  }
}
```

Printing an array in a table

```javascript
const { ddt } = require('@kenjox/dev-utils');

const array = ["Cat", "Dog", "Elephant"];

ddt(array);

// Output
┌─────────┬────────────┐
│ (index) │   Values   │
├─────────┼────────────┤
│    0    │   'Cat'    │
│    1    │   'Dog'    │
│    2    │ 'Elephant' │
└─────────┴────────────┘
```
