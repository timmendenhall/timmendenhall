import express from 'express';
import levels from './levels.js';
import users from './users.js';

let router = express.Router();

router.use('/levels', levels);
router.use('/users', users);

export default router;