const NodeRSA = require('node-rsa');
// @ts-ignore
const key = new NodeRSA({b: 512});
// console.log({key});

const text = 'Hello RSA!';
// @ts-ignore
const encrypted = key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted);
const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);