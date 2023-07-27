function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const key = parseInt(document.getElementById('key').value, 10);
  
    if (isNaN(key) || key < 1 || key > 25) {
      alert('Please enter a valid key (1 to 25).');
      return;
    }
  
    const encryptedText = caesarCipher(inputText, key);
    document.getElementById('outputText').value = encryptedText;
  }
  
  function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const key = parseInt(document.getElementById('key').value, 10);
  
    if (isNaN(key) || key < 1 || key > 25) {
      alert('Please enter a valid key (1 to 25).');
      return;
    }
  
    const decryptedText = caesarCipher(inputText, 26 - key);
    document.getElementById('outputText').value = decryptedText;
  }
  
  function caesarCipher(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        const code = text.charCodeAt(i);
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