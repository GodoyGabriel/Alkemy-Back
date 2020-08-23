const Model = require("./model");

class Logs extends Model {
  constructor() {
    super(Model);
    this.user = {
      primaryKey: {
        name: 'id',
        type: 'int',
      },
      table: "user",
      fields: {
        APPLICATION_ID: {
          type: "int",
          name: "applicationId",
          value: ''
        },
        MODIFY_PRICE: {
          type: "String",
          name: "modifyDate",
          value: ''
        },
        MODIFY_DATE: {
          type: "String",
          name: "modifyDate",
          value: ''
        },
      },
    };
  }
}

module.exports = new Logs();