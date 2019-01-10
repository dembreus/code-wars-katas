const maxSequence = arr => {
  let sum = 0,
    max = 0;

  for (let i = 0; i < arr.length; i++) {
    max += arr[i];
    if (sum < max) sum = max;
    if (max < 0) max = 0;
  }
  return sum;
};
