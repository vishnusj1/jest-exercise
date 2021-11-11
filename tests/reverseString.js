const revStr = (str) => {
  if (!str || typeof str !== 'string') {
    return null;
  }
  // Algorithm
  // const myArray = [...str];
  // const reversedStringArray = [];
  // const len = myArray.length - 1;
  // for (let i = len; i >= 0; i--) {
  //   const element = myArray[i];
  //   reversedStringArray.push(element);
  // }
  // return reversedStringArray.join('');

  // One Liner Code

  return [...str].reverse().join('');
};

module.exports = revStr;
