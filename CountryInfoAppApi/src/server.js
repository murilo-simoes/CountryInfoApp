const express = require('express')
const cors = require('cors')
const countriesRoute = require('./routes/countries')

const app = express();

app.use(cors());

app.use('/countries', countriesRoute)

app.listen(3333, () => {
    console.log("Listening on port 3333!")
})