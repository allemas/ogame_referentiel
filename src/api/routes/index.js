import { Router } from "express";
import playerRoutes from './players/players'

const router = Router();
router.get('/', (req, res) => res.send("ok"));

router.use('/' ,playerRoutes);


/**
 * understanding-module-exports
 * @see https://www.sitepoint.com/understanding-module-exports-exports-node-js/
 */
module.exports = router;