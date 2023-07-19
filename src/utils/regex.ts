export function generateRegex(value: string | string[]) {
  if (typeof value === 'string') {
    return `/${value}/i`;
  }
  const formattedValues = value.join('|');

  return `/${formattedValues}/i`;
}
