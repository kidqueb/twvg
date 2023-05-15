import { processTwvg } from './utils';

export function twvgTransformer() {
  return (src: string) => {
    const transformed = processTwvg(src);
    return `${src} ${transformed.classes}`;
  };
}
