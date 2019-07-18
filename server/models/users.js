import mongoose from 'mongoose'



const UserSchema = mongoose.Schema ({
    userId: String,
    userFirstName: String,
    userLastName: String,
    password: String,
    Institution: String,
    email: String,
    title: String,
    created: Date
});

mongoose.model('Users', UserSchema);