const sql = require("mssql/msnodesqlv8");
const dbConfig = require("../dbConfig");

const bugsQuery = function (queryType, query) {
  return new Promise((resolve, reject) => {
    sql.connect(dbConfig, function (err) {
      if (err) {
        reject(err);
      } else {
        const request = new sql.Request();
        switch (queryType) {
          case "SELECT": {
            request.query(`${query}`, function (err, recordset) {
              if (err) {
                reject(err);
              } else {
                resolve(recordset.recordset);
              }
              sql.close();
            });
            break;
          }
          case "UPDATE": {
            request.query(`${query}`, function (err, recordset) {
              if (err) {
                reject(err);
              } else {
                resolve(recordset.recordset);
              }
              sql.close();
            });
            break;
          }
          case "DELETE": {
            request.query(`${query}`, function (err, recordset) {
              if (err) {
                reject(err);
              } else {
                resolve(recordset.recordset);
              }
              sql.close();
            });
            break;
          }
          case "INSERT": {
            request.query(`${query}`, function (err, recordset) {
              if (err) {
                reject(err);
              } else {
                resolve(recordset.recordset);
              }
              sql.close();
            });
            break;
          }
          default:
            reject("Enter a valid query");
        }
      }
    });
  });
};

module.exports = bugsQuery;
