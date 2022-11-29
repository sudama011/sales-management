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



const { insertManager } = require('./Manager');
const { insertSales } = require('./Insert_sale');


// app.post('/login', (req, res) => {

//      res.send('hello world')
// })
app.post('/signup', (req, res) => {
     let signupData = req.body;

     insertManager(signupData.id, signupData.fn, signupData.ln);

     res.send('account created successfully')

})

app.post('/salesperson', (req, res) => {
     let values = req.body;
     console.log(values)
     insertSales(values.sid, values.salesperson, values.cid, values.product, values.quantity)
     res.send('salesperson inserted successfully')
})

app.get('/sale', (req, res) => {
     const a = [[1, 2, 3, 5, 6]];
     res.send(a);
})

app.listen(port, () => {
     console.log(`listening on http://localhost:${port}/`)
})