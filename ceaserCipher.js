function encrypt(input, key) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (char.match(/[a-z]/i)) {
        const code = input.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + key) % 26) + 65); 
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + key) % 26) + 97); 
        }
      }
      result += char;
    }
    return result;
} 
  module.exports = { encrypt, decrypt };