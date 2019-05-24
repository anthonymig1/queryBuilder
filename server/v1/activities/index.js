import express from 'express'
const router = express.Router();
import {Activities} from '../../models/activities'

router.get('/activitiesFromDb/:id', async (req,res)=>{
    const {params : {id}} = req;
    try{
        const {type , description ,  event} = await Activities.findById(id).lean().select('type description event');
        res.json({
            success: true,
            users : {type ,description,event}
        });    
    }catch(error){
            res.json({success: false , error: error.message  })
    }
    
})


export default  router