const Model = require("./model");

class PurchasedApps extends Model {
  constructor() {
    super(Model);
    this.user = {
      primaryKey: {
        name: 'id',
        type: 'int',
      },
      table: "user",
      fields: {
        USER_ID: {
          type: "int",
          name: "userId",
          value: ''
        },
        APPLICATION_ID: {
          type: "int",
          name: "applicationId",
          value: ''
        },
      },
    };
  }
}

module.exports = new PurchasedApps();