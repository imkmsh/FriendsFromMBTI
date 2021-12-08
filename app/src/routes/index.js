const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl");

router.get('/', ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/signup", ctrl.output.signup);
router.get("/test", ctrl.output.test)

router.get("/ENTP", ctrl.output.ENTP)
router.get("/ENTJ", ctrl.output.ENTJ)
router.get("/ENFP", ctrl.output.ENFP)
router.get("/ENFJ", ctrl.output.ENFJ)
router.get("/ESTP", ctrl.output.ESTP)
router.get("/ESTJ", ctrl.output.ESTJ)
router.get("/ESFP", ctrl.output.ESFP)
router.get("/ESFJ", ctrl.output.ESFJ)
router.get("/INTP", ctrl.output.INTP)
router.get("/INTJ", ctrl.output.INTJ)
router.get("/INFP", ctrl.output.INFP)
router.get("/INFJ", ctrl.output.INFJ)
router.get("/ISTP", ctrl.output.ISTP)
router.get("/ISTJ", ctrl.output.ISTJ)
router.get("/ISFP", ctrl.output.ISFP)
router.get("/ISFJ", ctrl.output.ISFJ)

router.post("/login", ctrl.process.login);
router.post("/signup", ctrl.process.signup);
router.post("/test", ctrl.process.test)
router.post("/result", ctrl.process.result)

module.exports = router;
