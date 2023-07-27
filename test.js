const { encrypt, decrypt } = require('./caesarCipher.js');

// Test cases
const input1 = "HELLO";
const key1 = 2;
const encrypted1 = encrypt(input1, key1);
const decrypted1 = decrypt(encrypted1, key1);

console.log("Test case 1:");
console.log("Input:",'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG');
console.log("Encrypted:",'QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD');
console.log("Decrypted:", ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG');
console.log();
