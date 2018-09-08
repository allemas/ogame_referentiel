import { Router } from 'express';
import controller from '../../controllers/players'


let router = Router();
router
    .route('/')
    .post(controller.create);



module.exports = router;