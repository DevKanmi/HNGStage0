const express = require('express')
const cors = require('cors')
const moment = require('moment')

const app = express()
app.use(express.json())
app.use(cors())

const current_time = moment.utc().format('YYYY-MM-DDTHH:mm:ss[Z]')
const PORT = 4000

app.get('/', (req, res) =>{
    return res.status(200).json(`HNG Stage 0 task`)
})

app.get('/profile', (req, res) => {
    res.set('Cache-Control', 'no-store')
    res.status(200).json({
        email: "akinbayookanmiyo@gmail.com",
        current_datetime: moment.utc().format(),
        github_url: "https://github.com/devKanmi/HNGStage0"
    })
})

app.use("**", (req, res) => {
	res.status(404).json({ 
        success: false,
        message: "Resource does not exist." });
});


app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`)
})