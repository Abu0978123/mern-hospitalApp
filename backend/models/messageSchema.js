import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must container at least 3 characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must container at least 3 characters!"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "This email is already Registered"],
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone Number must container at least 11 digits"],
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "Message must container at least 10 characters"],
    },
})

export const Message = mongoose.model('message', messageSchema);