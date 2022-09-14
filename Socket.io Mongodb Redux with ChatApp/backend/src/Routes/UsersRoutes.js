const router = require('express').Router()
require('dotenv').config();

const User = require('../Schemas/UserSchema')

router.post('/users', async (req, res, next) => {
    const { name, phone } = req.body
    const user = new User({ name, phone })
    await user.save()

    res.json(user)
})

router.get('/users/:id', async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)

    res.json(user)
})

module.exports = router