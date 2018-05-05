var connection = require("../config/connection");

var orm = {
    //Selects all the data from the burgers table
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

    //inserts a burger to the database and updates
    insertOne: function(newBurger, callback) {
        var queryString = "INSERT INTO burgers SET ?";
        console.log(queryString);

        connection.query(queryString, {burger_name: newBurger.burger_name, devoured: false}, function (err, res) {
                if (err) throw err;
                //console.log(res);
                callback(res);
            });
    },
    updateOne: function(devoured, condition, callback) {

        //devoured = 1;

        var queryString = "UPDATE burgers SET devoured=true WHERE ?";
        console.log(queryString);
        console.log("devoured:" + JSON.stringify(devoured));
        console.log("Burger ID: " + condition)



        //devoured = true;
        burgerId = JSON.stringify(condition);
        console.log("Parsed Burger ID: " + condition)
        

        connection.query(queryString, [devoured, condition], function (err, res) {
            if (err) throw err;
            console.log(condition + " **devoured: " + devoured);
            callback(res);
        });
    }
};

module.exports = orm;