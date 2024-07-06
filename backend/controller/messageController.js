import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Message } from "../models/messageSchema.js";

// send messages from clients
export const sendMessage = catchAsyncErrors(async (req, res, next) => {
           const {firstName, lastName, phone, email, message} = req.body;
           if (!firstName || !lastName || !phone || !email || !message) {
            return next(new ErrorHandler("Please Fill the Full Form", 400))
           }
           else 
           { 
            await Message.create({firstName, lastName, phone, email, message});
            res.status(200).json({
                success: true,
                message: "Message sent!"
            });
        };
           
})

// get all messages to the admin
export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
    const messages = await Message.find();
    res.status(200).json({
      success: true,
      messages,
    });
  });