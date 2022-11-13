var CryptoJS = require("crypto-js");
// How secure is AES256 ?
// AES encryption is secure; however, its security varies according to its variants. For example, using brute-force methods, the 256-bit is virtually impenetrable, while the 52-bit DES key can be cracked in less than a day.

// ~Sahil: AES uses 256-bit key by default when you pass a passphrase i.e, password.
// FROM DOCS:https://cryptojs.gitbook.io/docs/#the-cipher-algorithms
// CryptoJS supports AES-128, AES-192, and AES-256. It will pick the variant by the size of the key you pass in. If you use a passphrase, then it will generate a 256-bit key.

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'