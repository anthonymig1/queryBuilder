import express from 'express'

const router = express.Router()

import { Users } from '../../models/user'


router.get('/detailfromdb/:id', async (req, res) => {
  const { params: { id } } = req
  try {
    const { email, name, thinks } = await Users.findOne({name : id}).lean().select('email name thinks')
    res.json({ success: true, user: { email, name, thinks } })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})

router.post('/insertfromdb/', async (req,res)=>{
  const { body } = req;
  console.log(body)
 try{
      await Users.create(body)
      res.json({success:true, user:{ body }});
  }catch(error){
      res.json({success: false , error:error.message})
  }
})

router.post('/savefromdb/' ,async (req, res)=>{
  const {name , lastName ,mobile , gender , email ,thinks } =  req.body;
  const user = new Users({
    name,
    lastName,
    mobile,
    gender,
    email,
    thinks
  })
    try{
      let newUser = await user.save();
      res.json({success:true, newUser });
    }catch(error){
      res.json({success : false , error:error.message})
    }
})
router.put('/updateUser/:id', async (req,res)=>{
  const {params : {id}} = req
  const {body} =  req
  try{
    let newUser = await Users.findOneAndUpdate({_id:id} , body,{new: true})
    res.json({success:true , newUser})
  }catch(error){
    res.json({success : false , error:error.message})      
  }
})

router.delete('/deleteUser/:id',async (req,res)=>{
  const {params : {id}} = req
  try{
    let deletedUser =  await Users.findOneAndRemove({_id:id})
    res.json({ success:true , deletedUser })
  }catch(error){  
    res.json({ success:false , error:error.message})
  }
})
export default router
