export function twvg(state: string, classes: string) {
  const chunks = classes.split(' ');
  let variantClasses = '';

  for (const chunk of chunks) {
    if (chunk) {
      variantClasses += `${state}:${chunk} `;
    }
  }

  return variantClasses.trim();
}

export function createCachedTwvg() {
  const cache = new Map<string, string>();

  return (state: string, classes: string) => {
    const key = state + classes;
    const cached = cache.get(key);

    if (cached) {
      return cached;
    }

    const variantClasses = twvg(state, classes);
    cache.set(key, variantClasses);
    return variantClasses;
  };
}
