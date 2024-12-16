---
# noUncheckedIndexedAccess Sample

This repository demonstrates the usage of the `noUncheckedIndexedAccess` compiler option in TypeScript.

## Problem
In JavaScript, accessing a non-existent index or property returns `undefined`. If not handled properly, this can lead to runtime errors:

```typescript
const arr: string[] = [];
const value = arr[0];

console.log(value.toUpperCase()); // Runtime error
```

## Solution
Enable `noUncheckedIndexedAccess` in `tsconfig.json` to enforce explicit handling of `undefined`:

```json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true
  }
}
```

### Example with Safe Handling
```typescript
const arr: string[] = [];
const value = arr[0]; // Type: string | undefined

const upperValue = value ? value.toUpperCase() : "Default";
console.log(upperValue); // "Default"
```

## Benefits
- Prevents runtime errors caused by unexpected `undefined`.
- Encourages safer, more predictable code.

Feel free to explore the examples in this repository!
