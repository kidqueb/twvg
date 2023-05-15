import { processTwvg } from './utils';

export default function twvgPlugin() {
  return {
    name: 'twvg',
    transform(src: string, _id: string) {
      const transformed = processTwvg(src, { replaceSrc: true });
      return transformed.src;
    },
  };
}
