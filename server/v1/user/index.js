import express from 'express'

const router = express.Router()

const users = {
  A: {
    _id     : '1',
    name    : 'Donald',
    lastName: 'Trump',
    mobile  : '+51999999999',
    email   : 'donal@trump.com',
    password: '123456'
  },
  B: {
    _id     : '2',
    name    : 'Vladimir',
    lastName: 'Putin',
    mobile  : '+51999999999',
    email   : 'vladimird@putin.com',
    password: '654321'
  }
}

const arrUsers = [
  {
    _id     : '1',
    name    : 'Donald',
    lastName: 'Trump',
    mobile  : '+51999999999',
    email   : 'donal@trump.com',
    password: '123456'
  },
  {
    _id     : '2',
    name    : 'Vladimir',
    lastName: 'Putin',
    mobile  : '+51999999999',
    email   : 'vladimird@putin.com',
    password: '654321'
  }
]

router.get('/detailfromdb:/id', (req, res)=>{
  const { params: { id } } = req
  try {
    const { name, email } = Users.findById(id).lean().select('name, email')
    res.json({ success: true, results: { name, email } })
  } catch (error) {
    res.json({ success: false, results: {} })
  }
})

router.get('/detailobj/:id', (req, res) => {
  const { params: { id } } = req
  const { A, B } = users
  let results
  if(A._id == id)
    results = A
  results = B
  res.json(results)
})

router.get('/detailarr/:id', (req, res) => {
  const { params: { id } } = req
  try {
    const [ results ] = arrUsers.filter(el=> el._id === id)
    res.json({  results })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})

export default router
