const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
	res.download('./kach.jpg')
})

app.listen(4000)
