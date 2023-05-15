import { createUnplugin } from 'unplugin';
import { processTwvg } from './utils';

export const unplugin = createUnplugin(() => {
  return {
    name: 'tailwind-variant-group',
    transform(src: string) {
      const transformed = processTwvg(src, { replaceSrc: true });
      return transformed.src;
    },
  };
});
