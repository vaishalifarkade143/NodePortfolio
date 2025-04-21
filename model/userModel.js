import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

//on the basis of this schema we are creating a model
const UserModel = mongoose.model('user', userSchema);

//user is collection name and userSchema is schema name
export default UserModel; //exporting the model
