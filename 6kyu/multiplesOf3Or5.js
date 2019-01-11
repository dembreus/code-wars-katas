const solution = limit => {
  let sum = 0;
  for (let i = 0; i < limit; i++) i % 3 === 0 || i % 5 === 0 ? (sum += i) : 0;
  return sum;
};

export default solution;
