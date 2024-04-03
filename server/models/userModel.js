const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    roles: {
        type: [String],
        default: ['user'],
        validate: {
            validator: roles => roles.length > 0,
            message: 'Atleast on role must be specified'
        }
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)