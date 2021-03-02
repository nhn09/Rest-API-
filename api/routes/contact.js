const express= require('express')

const router= express.Router()

router.get('/',(req,res,next)=>{

    res.status(200).json( {
            message:'Hello all contacts Get route'
        }
    )

})

router.get('/:id',(req,res,next)=>{ //dynamic

    const id= req.params.id
    res.json( {
            id 
        }
    )

})

module.exports = router