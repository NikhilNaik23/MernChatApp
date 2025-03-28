import express from 'express'
import { sendMessage,getMessageS } from '../controllers/message.controller.js'
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();
router.get('/:id', protectRoute,getMessageS);
router.post('/send/:id', protectRoute,sendMessage);

export default router;