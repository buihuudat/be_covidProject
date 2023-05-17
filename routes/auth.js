const { authController } = require("../controllers/authController");
const { verifyToken } = require("../handlers/tokenHandler");
const {
  loginValidation,
  registerValidation,
} = require("../handlers/validations/authValidation");

const router = require("express").Router();

router.post("/login", loginValidation, authController.login);
router.post("/register", registerValidation, authController.register);
router.post("/verify-token", verifyToken, authController.verifyToken);

module.exports = router;
