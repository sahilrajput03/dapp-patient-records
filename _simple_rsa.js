const NodeRSA = require('node-rsa')
// @ts-ignore
const key = new NodeRSA({b: 512})
// console.log({key});

const text = 'Hello RSA!'
// @ts-ignore
const encrypted = key.encrypt(text, 'binary')
console.log('encrypted: ', encrypted)

// @ts-ignore
const decrypted = key.decrypt(encrypted, 'binary')
// console.log('decrypted: ', decrypted)
