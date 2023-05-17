const userModel = require("../../models/userModel");
const CryptoJS = require("crypto-js");

module.exports = {
  loginValidation: async (req, res, next) => {
    const { phone, password } = req.body;
    const user = await userModel.findOne({ phone });
    if (!user) {
      return res.status(401).json({
        errors: [
          {
            param: "phone",
            msg: "Số điện thoại chưa được sử dụng để đăng ký",
          },
        ],
      });
    }

    const decPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (decPass !== password) {
      return res.status(400).json({
        errors: [
          {
            param: "password",
            msg: "Mật khẩu không hợp lệ",
          },
        ],
      });
    }

    next();
  },

  registerValidation: async (req, res, next) => {
    const { email, phone, password } = req.body;
    const [checkEmailExist, checkPhoneExist] = await Promise.all([
      userModel.findOne({ email }),
      userModel.findOne({ phone }),
    ]);

    if (checkEmailExist) {
      return res.status(400).json({
        errors: [
          {
            param: "email",
            msg: "Email này đã được sử dụng để đăng ký",
          },
        ],
      });
    }
    if (checkPhoneExist) {
      return res.status(400).json({
        errors: [
          {
            param: "phone",
            msg: "Số điện thoại này đã được sử dụng để đăng ký",
          },
        ],
      });
    }

    req.body.password = CryptoJS.AES.encrypt(
      password,
      process.env.PASSWORD_SECRET_KEY
    ).toString();
    delete req.body.confirmPassword;
    next();
  },
};
