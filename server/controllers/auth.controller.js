const { User } = require('../models/user.models'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt')

module.exports = {
    register: (req,res) => {
        User.create(req.body)
            .then(data => {
                res.cookie("usertoken", jwt.sign({id: data._id}, process.env.JWT_KEY), {
                    httpOnly:true, 
                    // expires: new Date(Date.now() + 9000000)
                }).json({
                    msg:"success",
                    userLogged:{fullName: data.fullName}
                })
            })
            .catch(err => res.json(err.errors))
    },
    login: (req,res) => {
        User.findOne({email:req.body.email})
            .then(data => {
                if(user === null) {
                    res.json({msg:"Invalid login attempt"})
                } else {
                    bcrypt.compare(req.body.password, data.password)
                        .then(isValid => {
                            if(isValid === true) {
                                res.cookie("usertoken", jwt.sign({id: data._id}, process.JWT_KEY), {
                                    httpOnly: true
                                }).json({
                                    msg:"success",
                                    userLogged:{fullName: data.fullName}
                                })
                            }
                        })
                        .catch(err => res.json({msg: "Invalid login attempt"}))
                }
            })
            .catch(err => res.json(err.errors))
    },
    logout: (req,res) => {
        res.clearCookie('usertoken');
        res.json({msg:"Logout successful"});
    }
}