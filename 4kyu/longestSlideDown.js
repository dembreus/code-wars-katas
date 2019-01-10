// this method returns only the sum and not the actual path.
const longestSlideDown = arr => {
  //starts from the second to last level and works upwards
  for (let i = arr.length - 2; i >= 0; i--) {
    //works through each possiblilty and stores the higher sum in the current postion
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1]);
    }
  }
  //returns the first position after all the max numbers have been added.
  return arr[0][0];
};
