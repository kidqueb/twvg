import type { Options } from 'tsup';

export default <Options>{
  entryPoints: [
    'lib/index.ts',
    'lib/tailwind.ts',
    'lib/rollup.ts',
    'lib/rspack.ts',
    'lib/vite.ts',
    'lib/webpack.ts',
  ],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  // onSuccess: 'npm run build:fix',
};
