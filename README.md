# `twvg` - Tailwind Variant Group

Adds runtime (opt-in static replacement) grouping of tailwind classes.

## Installation

```
$ npm i twvg
```

## Usage

```ts
import { twvg } from 'twvg'

twvg("hover", "underline text-blue-500") // hover:underline hover:text-blue-500
```

## Static Replacement

During builds we can replace `twvg` calls with the resulting string as long as there are no dynamic conditions within the second param.

Currently only a vite plugin is done.

```ts
import { defineConfig } from 'vite';
import twvgPlugin from 'twvg/vite';

export default defineConfig({
  plugins: [twvgPlugin()],
});
```
