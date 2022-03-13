const express = require('express')
require('dotenv').config()
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/', require('./routers/userRouter.js'))



async function startServer () {
	try {
		app.listen(PORT, () => console.log(`\n   Сервер запущен на порту   ${PORT}\n`))

	} catch(err) {
		console.log(err)
	}
}

startServer()