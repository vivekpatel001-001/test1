import express from 'express';
import homecontroller from '../controller/taskcontroller.js';
const router = express.Router();
router.post ('/add',homecontroller.create);
router.get('/get',homecontroller.getall);
router.put('/update',homecontroller.updateData);
router.delete('/delete',homecontroller.deleteData)

export default router
