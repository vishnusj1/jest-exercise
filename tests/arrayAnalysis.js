const anaylseArray = (array) => {
  const length = array.length;
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  const min = array.sort((a, b) => a - b)[0];
  const max = array.sort((a, b) => b - a)[0];

  return {
    length,
    average,
    min,
    max,
  };
};
const object = anaylseArray([1, 8, 3, 4, 2, 6]);
console.log(object);
module.exports = anaylseArray;
