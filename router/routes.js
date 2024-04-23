import express from 'express';
import mentorAuthentication from '../middleware/mentorAuthentication.js';
import { mentorLogin } from '../controllers/mentorLoginController.js';
const router = express.Router();

router.post("/mentorLogin",mentorAuthentication,mentorLogin)
export default router;