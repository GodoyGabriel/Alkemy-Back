const Validate = require("../service/validate");
const User = require("../models/userModel");

class UserController {
  getAllUsers = async (req, res) => {
    let users = await User.getAllUsers();
    return res.send(users);
  };

  newUser = async (req, res) => {
    let user = await User.newUser(req);
    return res.send(user);
  }

  newUser2 = async (req, res) => {
    let response;
    let params = req.body;
/*     let user = Validate.userValidate(params);
    if (user !== null) {
      const query =
        "INSERT INTO users (title,  body, category, user_name) VALUES ($1, $2, $3, $4)";
      const values = [
        user.user_name,
        user.name,
        user.last_name,
        user.nick,
        user.sex,
      ];
      await pool
        .query(query, values)
        .then((res) => {
          response = { body: user };
        })
        .catch((error) => {
          response = error;
        });
      return res.send(response);
    } else {
      return res.send({
        message: "Faltan datos por enviar!",
      });
    } */
  };

  updateUser = async (req, res) => {
    let response;
    let params = req.body;
    let validateField;
    try {
    } catch (error) {}
  };
}

module.exports = new UserController();