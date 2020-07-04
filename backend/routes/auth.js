const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
const { check } = require("express-validator/check");

const User = require("../database/user");


router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Enter a valid email"),
    check("password", "Invalid Password").isLength({
      min: 1,
    }),
  ],
  authController.postLogin
);

router.post(
  "/register",
  [
    check("email")
      .isEmail()
      .withMessage("Enter a valid email")
      .isLength({
        min: 1,
      })
      .normalizeEmail(), //make all lowercase //Sanitizing
    // .custom((value, { req }) => {
    //   return User.findByEmail({
    //     email: value, //if email is found
    //   }).then((userDoc) => {
    //     //if email exists in system, send error
    //     if (userDoc) {
    //       return Promise.reject("Email already exists"); //
    //     }
    //   });
    // }),
    check("password", "Invalid Password").isLength({
      min: 1,
    }),
  ],
  authController.postRegister
);

module.exports = router;
