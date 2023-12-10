import express from 'express';
import { test } from '../controllers/user.controllers.js';


const router = express.Router();

router.get('/iqra', test );



export default router;