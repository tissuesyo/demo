export const generateVersionArray = (
  startingVersion: string,
  count: number
): string[] =>
  Array.from({ length: count }, (_, index) => {
    const [major, minor, patch] = startingVersion.split('.').map(Number);
    const newMinor = minor - index;
    return `${major}.${newMinor}.${patch}`;
  });

export const transferDsOptions = (options: string[]) => options.map(opt => ({label: opt, value: opt}));