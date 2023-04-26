const express = require("express")
const employeeLogin = require("./employee/login");
const userLogin = require("./user/login");
const userSignup = require("./user/signup");
const userForgotPassword = require("./user/forgotPassword")
const userLogOut = require("./user/logout")
const adminLogin = require("./admin/adminLogin")
const router = express.Router();


router.use("/employee/login", employeeLogin);
router.use("/user/login", userLogin);
router.use("/user/signup", userSignup);
router.use("/user/forgot", userForgotPassword)
router.use("/user/logout", userLogOut)
router.use("/admin/login", adminLogin)


module.exports = router;