USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheeseburger", false),
("Hamburger", false),
("Turkey Burger", false),
("Avocado Burger", false),
("Tofu Burger", true);


SELECT * FROM burgers_db.burgers;