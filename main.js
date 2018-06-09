const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/src`))

app.listen(process.env.PORT || 9000, () => {
    console.log('Your application is running here: http://localhost:9000')
})