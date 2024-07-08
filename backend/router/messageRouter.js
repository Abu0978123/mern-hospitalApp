import express from "express";
import { deleteMessage, getAllMessages, sendMessage } from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.delete("/delete/:id", deleteMessage);
router.get("/getall", isAdminAuthenticated , getAllMessages);

export default router;
