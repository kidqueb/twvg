# `twvg` - Tailwind Variant Group

Adds runtime grouping of tailwind classes. Optional static replacement in the form of bundler plugins are opt-in (current only Vite is available).

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

During builds we can replace `twvg` calls with the resulting string as long as there are no dynamic conditions within the second arg.

Currently only a vite plugin is done.

```ts
import { defineConfig } from 'vite';
import twvgPlugin from 'twvg/vite';

export default defineConfig({
  plugins: [twvgPlugin()],
});
```

React example before:

```typescript
import { ComponentProps } from 'react';
import { twvg } from 'twvg';
import { clsx } from 'clsx';

interface Props extends ComponentProps<'button'> {
  isRedDisabled: boolean?
}

export function Button(props: Props) {
  return (
    <button
      className={clsx([
        'px-5 py-10 bg-blue-100 rounded',
        twvg('hover', 'bg-blue-200 text-blue-900'),
        twvg('disabled', props.isRedDisabled ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'),
        props.className
      ])}
    />
      Clicky Clicky
    </button>
  )
}
```

React example after:

```typescript
import { twvg } from 'twvg';
import { clsx } from 'clsx';

export function Button(props) {
  return (
    <button
      className={clsx([
        'px-5 py-10 bg-blue-100 rounded',
        'hover:bg-blue-200 hover:text-blue-900', // replaced
        twvg('disabled', props.isRedDisabled ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'),
        props.className
      ])}
    />
      Clicky Clicky
    </button>
  )
}
```
