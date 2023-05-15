const FN_CALL_REGEX =
  /twvg\s*\(\s*(?<state>["'`].*?["'`])\s*,\s*(?<classNames>.+?)\s*\)/gs;
const INVALID_CHARS_REGEX = /[^0-9a-zA-Z-_]/g;

export function processTwvg(src: string, opts?: { replaceSrc?: boolean }) {
  const matches = Array.from(src.matchAll(FN_CALL_REGEX));

  if (!matches.length) {
    return { src, classes: '' };
  }

  let classes: Set<string> = new Set();

  for (const match of matches) {
    const arg1 = match[1].replace(INVALID_CHARS_REGEX, '');
    const arg2 = match[2];
    const variantClasses = processVariant(arg1, arg2);

    if (opts?.replaceSrc && !arg2.search(INVALID_CHARS_REGEX)) {
      src = src.replace(match[0], `"${Array.from(variantClasses).join(' ')}"`);
    }

    classes = new Set([...classes, ...variantClasses]);
  }

  return { src, classes: Array.from(classes).join(' ') };
}

export function processVariant(state: string, className: string) {
  const chunks = className.replace(INVALID_CHARS_REGEX, ' ').split(' ').filter(Boolean);
  const classNames: Set<string> = new Set();

  for (const chunk of chunks) {
    classNames.add(`${state}:${chunk}`);
  }

  return classNames;
}
