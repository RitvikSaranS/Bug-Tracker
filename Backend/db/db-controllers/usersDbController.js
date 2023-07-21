const sql = require("mssql/msnodesqlv8");
const dbConfig = require("../dbConfig");

const usersQuery = function (queryType, query) {
  var result = [];
  sql.connect(dbConfig, function (err) {
    if (err) {
    } else {
      console.log("connected to database: " + dbConfig.server);
      const request = new sql.Request();
      switch (queryType) {
        case "SELECT": {
          request.query(`${query}`, function (err, recordset) {
            if (err) {
              console.log("Error executing query: " + err);
            } else {
              result = recordset.recordset;
            }
            sql.close();
          });
        }
        case "UPDATE": {
        }
        case "DELETE": {
        }
        case "INSERT": {
        }
      }
    }
  });
  return result;
};

module.exports = usersQuery;
