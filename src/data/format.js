function number(num) {
  if (num === null || num === undefined) {
    return 'unknown';
  }

  return num.toLocaleString();
}

export default {
  number,
};
