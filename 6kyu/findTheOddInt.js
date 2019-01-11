const findOdd = arr => {
  return arr
    .map(num => (arr.filter(n => num === n).length % 2 ? num : 0))
    .find(n => n !== 0);
};

export default findTheOddInt;
