const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


const UserSchema = new Schema({
    username: { 
        type: String, 
        required: [true, 'Please provide username']},
    email: {
        type: String,
        required: [true, 'Please provide email']
    },
    password:{
        type:String,
        required:[true,'Password is Required'],
    }
})

UserSchema.pre('save', function(next) {
    const user = this

    bcrypt.hash(user.password, 5).then(hash => {
        user.password = hash
        next()
    }).catch(error => {
        console.log(error)
    })
})

const User = mongoose.model('User', UserSchema)
module.exports = User