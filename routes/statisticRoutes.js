const { Router } = require("express");
const router = Router();
const {salesForRange, proffitAndLoss}= require('../controllers/statisticController.js')
router.post('/sales',salesForRange);
router.post('/proffitsLoss',proffitAndLoss);
module.exports = router;