// Function to encrypt the input string with the given key
function encrypt(input, key) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (char.match(/[a-z]/i)) {
        const code = input.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + key) % 26) + 65); // Uppercase letters (A-Z)
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + key) % 26) + 97); // Lowercase letters (a-z)
        }
      }
      result += char;
    }
    return result;
  }
  
  // Function to decrypt the input string with the given key
  function decrypt(input, key) {
    return encrypt(input, 26 - key); // Decryption is the same as encryption with the complementary key
  }
  
  module.exports = { encrypt, decrypt };