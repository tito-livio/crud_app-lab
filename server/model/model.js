import mongoose from "mongoose";

var schema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    status: String
})
const UserDB = mongoose.model('userdb', schema);

export default UserDB;