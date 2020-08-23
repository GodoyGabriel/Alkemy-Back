const logger = require("../utils/logger");

class Model {
  getAll = async (schema) => {
/*     let response;
    let query = `SELECT * FROM ${schema.table}`;
    await pool
      .query(query)
      .then((res) => {
        response = res.rows;
      })
      .catch((error) => {
        logger.error(error);
        response = error;
      });
    logger.info(query);
    logger.info(JSON.stringify(response));
    return response; */
  };
}

module.exports = Model;
