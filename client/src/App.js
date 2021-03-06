import './App.css'
import axios from 'axios'
import fileDownload from 'js-file-download'

function App() {
	// const date = Date.now()
	// const today = new Date(date).toLocaleDateString()

	const getDate = () => {
		let today = new Date()
		let dd = today.getDate()
		let hour = today.getHours()
		let minute = today.getMinutes()

		let mm = today.getMonth() + 1
		const yyyy = today.getFullYear()

		if (dd < 10) {
			dd = `0${dd}`
		}

		if (mm < 10) {
			mm = `0${mm}`
		}

		if (minute < 10) {
			minute = `0${minute}`
		}

		today = `${dd}-${mm}-${yyyy} ${hour}:${minute}`
		return today
	}

	const download = e => {
		e.preventDefault()
		axios({
			url: 'http://localhost:3000',
			method: 'GET',
			responseType: 'blob',
		}).then(res => {
			fileDownload(res.data, `fuckdownload-${getDate()}.png`)
		})
	}
	return (
		<div className='App'>
			<button onClick={e => download(e)}>DOWNLOAD</button>
		</div>
	)
}

export default App
