const User = require('../models/user.models');

module.exports = {
    index:(req, res) => {
        // easier way to sort perhaps
        // User.find().sort({type: 1})
        User.find()
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    // register:(req, res) => {
    //     User.create(req.body)
    //         .then(user => {
    //             res.json({msg: "success!", user: user });
    //         })
    //         .catch(err => res.json(err))
    // },
    show:(req, res) => {
        User.findOne({_id: req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    update:(req, res) => {
        User.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    destroy:(req, res) => {
        User.deleteOne({_id: req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    }
}