const express = require ('express')
const app = express ()

const contactRoute=require('./api/routes/contact')

const PORT = process.env.PORT || 3000

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
 
