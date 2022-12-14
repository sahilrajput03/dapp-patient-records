import Head from 'next/head'
import Image from 'next/image'
import ClientOnly from '../components/ClientOnly'
import styles from '../styles/Home.module.css'
import CryptoJS from 'crypto-js'
import NodeRSA from 'node-rsa'

const format_private_key = 'pkcs8-private-pem'
const format_public_key = 'pkcs8-public-pem'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<ClientOnly>
					{/* <TestingAes /> */}
					<FilePicker />
				</ClientOnly>
			</main>

			<footer></footer>
		</div>
	)
}

const FilePicker = () => {
	const onChangeFile = (e: any) => {
		const file = e.target.files[0]
		console.log('got file?', file)
		Object.assign(window, {file}) // `evt.target.files`
	}

	return (
		<div>
			<input type={'file'} onChange={onChangeFile} multiple={true} />
		</div>
	)
}

const SECRET_KEY = 'my user password'

const TestingAes = () => {
	const encrypt = (private_key: string) => {
		var encrypted_private_key = CryptoJS.AES.encrypt(private_key, SECRET_KEY).toString()

		// Decrypt
		var bytes = CryptoJS.AES.decrypt(encrypted_private_key, SECRET_KEY)
		var decrypted_messg = bytes.toString(CryptoJS.enc.Utf8)

		console.log('decrypted:', decrypted_messg)
	}

	return (
		<>
			Hello
			<button onClick={() => encrypt(prompt('Enter some text to encrypt it.') || '')}>Encrypt</button>
		</>
	)
}
