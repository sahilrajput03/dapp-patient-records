const fs = require('fs')
const {Buffer} = require('node:buffer')

const format_private_key = 'pkcs8-private-pem'
const format_public_key = 'pkcs8-public-pem'

const file_binary = fs.readFileSync('./fullstack_nodejs.pdf')
// console.log('got binary?', file_binary)

const NodeRSA = require('node-rsa')
// @ts-ignore
const key = new NodeRSA({b: 512})
// console.log('keyPair', key.generateKeyPair(512))
// console.log({key});

const key_data_priv_key = key.exportKey(format_private_key)
const key_data_pub_key = key.exportKey(format_public_key)
console.log('key_data_priv_key?', key_data_priv_key)
console.log('key_data_pub_key?', key_data_pub_key)

let keyImported = key.importKey(key_data_priv_key, format_private_key)
// console.log('IMPORTED KEY?', keyDataImported);

// key.encrypt(inputData, {string=output_encoding}, {string=source_encoding})
const encrypted = key.encrypt(file_binary, 'binary', 'utf8')
// console.log('encrypted: ', encrypted)
// console.log('encrypted typeof: ', typeof encrypted) // string

try {
	// @ts-ignore
	var buf = Buffer.from(encrypted, 'binary')
	// console.log(buf);

	// Decrypt using original key
	// const decrypted = key.decrypt(buf, 'buffer')

	// Decrypt using imported key (we exported it first to mimic storing it externally)
	const decrypted = keyImported.decrypt(buf, 'buffer')
	// console.log('decrypted: ', decrypted)
} catch (error) {
	console.log('FAILED TO DECRYPTJS ~Sahil')
	console.log('error.name', error.name)
	console.log('error.message', error.message)
}
