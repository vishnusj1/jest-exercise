const ceaserCipher = (str, key) => {
  if (key < 0) {
    return ceaserCipher(str, key + 26);
  }
  const cipher = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    const code = char.charCodeAt();
    if (code >= 97 && code <= 122) {
      char = String.fromCharCode(((code - 97 + key) % 26) + 97);
      cipher.push(char);
    } else if (code >= 65 && code <= 90) {
      char = String.fromCharCode(((code - 65 + key) % 26) + 65);
      cipher.push(char);
    } else {
      char = String.fromCharCode(code);
      cipher.push(char);
    }
  }
  return cipher.join('');
};
module.exports = ceaserCipher;

// Loop through String
// for each character in string convert char to character code
// Shift character by specific key
// Convery the shifted character code to string
// Do it for all characters
// return a string from the characters obtained
