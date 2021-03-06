const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
   res.send('<h1>Simple CI CD Cloud1</h1>')
})
 
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
   console.log(`Server is up and listening at port: ${PORT}`)
})
 
module.exports = app
