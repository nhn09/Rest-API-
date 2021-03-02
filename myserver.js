const express = require ('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors= require('cors')
const mongoose= require('mongoose')

const contactRoute=require('./api/routes/contact')

const PORT = process.env.PORT || 3000


const app = express ()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/api/cadets', contactRoute)

app.get('/',(req,res)=>
{
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

const cadets = [
    {name: 'Nohan' , cadet_number:'409'},
    {name: 'Kona' , cadet_number:'409'},
    {name: 'Zohraapu' , cadet_number:'176'},
    {name: 'Tambu' , cadet_number:'3394'}

]
 
