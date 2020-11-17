const mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    }, 
    fullName: {
        type: String,
        required: [true, "Full name is required"],
    }, 
    userName: {
        type: String,
        required: [true, "Please pick a username"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [3, "Password must be 8 characters or longer"]
    }
}, {timestamps: true})

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( () => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;