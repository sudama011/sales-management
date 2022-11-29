const express = require('express')
const app = express()
const port = 3001
const cors = require("cors");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const corsOptions = {
     origin: '*',
     credentials: true,
     optionSuccessStatus: 200,
}
app.use(cors(corsOptions))



import { insertManager } from './Manager';


// app.post('/login', (req, res) => {

//      res.send('hello world')
// })
app.post('/signup', (req, res) => {
     let signupData = req.body;

     insertManager(signupData.id, signupData.fn, signupData.ln);

     res.send()

})



app.listen(port, () => {
     console.log(`listening on http://localhost:${port}/`)
})