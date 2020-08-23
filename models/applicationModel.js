const Model = require("./model");

class Application extends Model {
  constructor() {
    super(Model);
    this.application = {
      primaryKey: {
        name: 'id',
        type: 'int',
      },
      table: "applications",
      fields: {
        USER_ID: {
          type: "int",
          name: "user_id",
          value: ''
        },
        NAME: {
          type: "String",
          name: "name",
          value: ''
        },
        CATEGORY: {
          type: "String",
          name: "category",
          value: ''
        },
        IMG: {
          type: "String",
          name: "img",
          value: ''
        },
        PRICE: {
          type: "String",
          name: "price",
          value: ''
        },
        CREATION_DATE: {
          type: "String",
          name: "creationDate",
          value: ''
        },
        DETAIL: {
          type: "String",
          name: "detail",
          value: ''
        },
      },
    };
  }

}

module.exports = new Application();