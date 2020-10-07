const express = require('express');
const User = require('../../models/User');
const router = express.Router();
const bcryptjs = require('bcryptjs')
const config = require('../../config')
const jwt = require('jsonwebtoken')

// User Model
const Item = require('../../models/User');

//  * @route   GET api/users
//  * @desc    Register new user
//  * @access  Public
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    //Simple validation
    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing users
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' });

            const newUser = new User({
                name,
                email,
                password
            });

            //Create salt & hash for
            bcryptjs.genSalt(10, (err, salt) => {
                //@ts-ignore
                bcryptjs.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    //@ts-ignore
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

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
                        });
                })
            })
        });
});


module.exports = router;