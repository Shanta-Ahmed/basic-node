const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hi I am learning node js')
})

app.listen(port, () => {
    console.log(`Example ${port}`)
})