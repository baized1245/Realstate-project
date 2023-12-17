import express from 'express';
import { creatListing } from '../controllers/listing.contoller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.post('/create', verifyToken, creatListing);

export default router;