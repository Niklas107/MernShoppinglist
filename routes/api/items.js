import { Router } from 'express';
import auth from '../../middleware/auth';
// Item Model
import Item from '../../models/Item';

const router = Router();

// /**
//  * @route   GET api/items
//  * @desc    Get All Items
//  * @access  Public
//  */

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// /**
//  * @route   POST api/items
//  * @desc    Create An Item
//  * @access  Private
//  */

router.post('/', auth, async (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// /**
//  * @route   DELETE api/items/:id
//  * @desc    Delete A Item
//  * @access  Private
//  */

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .them(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});

export default router;