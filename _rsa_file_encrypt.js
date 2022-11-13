const fs = require('fs')
const {Buffer} = require('node:buffer')

// ~Sahil: INTERESTING THING: This library works good in browser by default!

const FORMAT_PRIVATE_KEY = 'pkcs8-private-pem'
const FORMAT_PUBLIC_KEY = 'pkcs8-public-pem'

// const file_binary = fs.readFileSync('./fullstack_nodejs.pdf')
const file_binary = fs.readFileSync('./img1.png')
// console.log('got binary?', file_binary)

// ~Sahil: This library can be made to work in browsers but it gets quite messy to to handle stuff like buffer and inter-conversion. SO I AVOID TO USE IT IN FRONTEND.
const NodeRSA = require('node-rsa')
// @ts-ignore
const key = new NodeRSA({b: 512})
// console.log('keyPair', key.generateKeyPair(512))
// console.log({key});

const key_data_priv_key = key.exportKey(FORMAT_PRIVATE_KEY)
const key_data_pub_key = key.exportKey(FORMAT_PUBLIC_KEY)
// console.log('key_data_priv_key?', key_data_priv_key)
// console.log('key_data_pub_key?', key_data_pub_key)

let keyImported = key.importKey(key_data_priv_key, FORMAT_PRIVATE_KEY)
// console.log('IMPORTED KEY?', keyDataImported);

// key.encrypt(inputData, {string=output_encoding}, {string=source_encoding})
const encrypted = key.encrypt(file_binary, 'binary', 'utf8')
console.log('encrypted.length? ', encrypted.length) // `typeof encrypted` = string
console.log('encrypted? ', encrypted) // `typeof encrypted` = string

try {
	// @ts-ignore
	let buf = Buffer.from(encrypted, 'binary')
	// console.log(buf);

	// Decrypt using original key
	// const decrypted = key.decrypt(buf, 'buffer')

	// Decrypt using imported key (we exported it first to mimic storing it externally)
	// key.encrypt({Buffer=inputData}, {string=output_encoding})
	const decryptedBuffer = keyImported.decrypt(buf, 'buffer')
	fs.writeFileSync('output.png', decryptedBuffer)
	// console.log('decrypted: ', decrypted)
} catch (error) {
	console.log('FAILED TO DECRYPTJS ~Sahil')
	console.log('error.name', error.name)
	console.log('error.message', error.message)
}
