const getMiddle = str => {
  return str.length % 2
    ? [...str][Math.floor(str.length / 2)]
    : [...str][str.length / 2 - 1] + [...str][str.length / 2];
};

export default getMiddle;
