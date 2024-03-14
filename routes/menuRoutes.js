const express = require('express');
const menuItem = require('./../models/Menu')
const router = express.Router();


router.post('/', async (req, resp) => {
    try {
        const data = req.body;

        const newPerson = new menuItem(data);
        const savePerson = await newPerson.save()
        console.log('data response')
        resp.status(200).json(savePerson);
    } catch (err) {
        console.log("the err", err);
        resp.status(500).json({ err })



    }

})

router.get('/hello',async(req,resp)=>{
    try{
    resp.send("heloo")}
    catch(err){
        resp.status(500).json({err})
    }
})

router.get('/getAll', async (req, resp) => {

    try {

        const data = await menuItem.find();
        resp.status(200).json(data)

    } catch (err) {
        resp.status(500).json(err)
    }

})


router.get('/:workType', async (req, resp) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
            const response = await menuItem.find({ work: workType });
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



module.exports=router;


