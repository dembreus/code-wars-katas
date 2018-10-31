const maxSequence = arr => {
  let maxSum = 0,
    currentMax = 0;

  for (let i = 0; i < arr.length; i++) {
    currentMax += arr[i];
    if (maxSum < currentMax) maxSum = currentMax;
    if (currentMax < 0) currentMax = 0;
  }
  return maxSum;
};
