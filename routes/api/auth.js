const express = require('express');
const User = require('../../models/User');
const router = express.Router();
const bcryptjs = require('bcryptjs')
const config = require('../../config')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')


// User Model
const Item = require('../../models/User');

//  * @route   POST api/auth
//  * @desc    Auth user
//  * @access  Public
router.post('/', (req, res) => {
    const { email, password } = req.body;

    //Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing users
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does not exist' });

            //Validate password
            //@ts-ignore
            bcryptjs.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                    jwt.sign(
                        { id: user.id },
                        config.JWT_SECRET,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    //@ts-ignore
                                    name: user.name,
                                    //@ts-ignore
                                    email: user.email
                                }
                            });
                        }
                    )
                })

        });
});

//  * @route   GET api/auth/user
//  * @desc    Get user data
//  * @access  Private
router.get('/user', auth, (req, res) => {
    //@ts-ignore
    User.findById(req.user.id)
        .select('-password')
        .then((user) => res.json(user));
});


module.exports = router;