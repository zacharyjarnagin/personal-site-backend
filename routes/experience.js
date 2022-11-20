const isAuth = require('../utils/isAuth');
const express = require('express');
const Model = require('../models/experience');
const router = express.Router()

router.post('/post', isAuth, async (req, res) => {
    const data = new Model({
        companyName: req.body.companyName,
        companyUrl: req.body.companyUrl,
        companyLogoUrl: req.body.companyLogoUrl,
        jobTitle: req.body.jobTitle,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
        technologies: req.body.technologies,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

//Update by ID Method
router.patch('/update/:id', isAuth, async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', isAuth, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;