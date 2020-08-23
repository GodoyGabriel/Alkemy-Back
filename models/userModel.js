const Model = require("./model");

class User extends Model {
  constructor() {
    super(Model);
    this.user = {
      primaryKey: {
        name: 'id',
        type: 'int',
      },
      table: "user",
      fields: {
        MAIL_USER: {
          type: "String",
          name: "mail_user",
          value: ''
        },
        PASSWORD: {
          type: "String",
          name: "password",
          value: ''
        },
      },
    };
  }
  
  getAllUsers = async () => {
    let user = await this.getAll(this.user);
    return user;
  }

  newUser = async (params) => {
    let data = params.body;

  }

}

module.exports = new User();