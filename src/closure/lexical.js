const buildCount = (i) => {
  let count = i;
  const displayCount = () => count++;
  return displayCount;
};

export { buildCount };
