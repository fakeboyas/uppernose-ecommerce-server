const { PORT, MONGODB_URI_LOCAL, MONGODB_URI_ATLAS } = require("./environment");
const db = require("./database");

module.exports = {
  db,
  PORT,
  MONGODB_URI_ATLAS,
  MONGODB_URI_LOCAL,
};
