var connection = require("../config/connection");

var orm = {
    selectAll: function(burgersTable, callback) {
        var queryString = "SELECT * FROM ??" ;
        console.log(queryString);

        connection.query(queryString, [burgersTable], function(err, result) {
            if (err) {
                throw err;
              }
            callback(result);
        });
    },
    insertOne: function(newBurger, callback) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ?";
        console.log(queryString);

        connection.query(queryString, newBurger, function (err, res) {
                if (err) throw err;
                console.log(res.body.burger_name + " inserted...");
                callback(res);
            });
    },
    updateOne: function(burgerId, devoured, callback) {

        var queryString = "UPDATE burgers SET devoured=? WHERE id=?";
        console.log(queryString);

       // devoured = parseInt(devoured);
       // burgerId = parseInt(burgerId);
        connection.query(queryString, [devoured, burgerId], function (err, res) {
            if (err) throw err;
            console.log(burgerId + " devoured: " + devoured);
            callback(res);
        });
    }
};

module.exports = orm;