const express = require('express');
const Person = require('./../models/person')
const router = express.Router();


router.post('/', async (req, resp) => {
    try {
        const data = req.body;

        const newPerson = new Person(data);
        const savePerson = await newPerson.save()
        console.log('data response')
        resp.status(200).json(savePerson);
    } catch (err) {
        console.log("the err", err);
        resp.status(500).json({ err })



    }

})


router.get('/getAll', async (req, resp) => {

    try {

        const data = await Person.find();
        resp.status(200).json(data)

    } catch (err) {
        resp.status(500).json(err)
    }

})


router.get('/:workType', async (req, resp) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
            const response = await Person.find({ work: workType });
            console.log("fetched")
            resp.status(200).json(response)
        } else {
            resp.status(400).json({ error: 'invlid type' })
        }
    } catch (err) {
        console.error('Error deleting person:', err);
        resp.status(500).json({ error: err.message });
    }
})

router.put('/update/:id', async (req, resp) => {
    try {
        const personid = req.params.id;

        const data = req.body;
        console.log("the us", personid)
        const response = await Person.findByIdAndUpdate(personid, data, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return resp.status(400).json({ err: 'not found' })
        }
        console.log("updated");
        resp.status(200).json(response)
    }

    catch (err) {
        resp.status(500).json({ err })
    }
})

router.delete('/delete/:id', async (req, resp) => {

    try {
        const personId = req.params.id;
        console.log("the us", personId)
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return resp.status(400).json({ err :'NOT FOUN'})
        }
        console.log("deleted");
        resp.send(200).json(response);


    } catch (err) {
        resp.status(500).json({ err })
    }

})

module.exports = router;


