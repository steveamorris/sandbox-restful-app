var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let dishes = [
    {
        id: 1,
        name: "Sushi",
        price: "3.99"
    },
    {
        id: 2,
        name: "Pad Thai Chicken",
        price: "4.99"
    },
    {
        id: 3,
        name: "Pizza",
        price: "3.99"
    },
    {
        id: 4,
        name: "Sandwich",
        price: "3.99"
    },
]


// Seven Restful routes
// 1. View Route for all resources - Take Away food
app.get("/", (req, res) => {
    res.render("index", {
        dishes: dishes
    })
});
// 2. View Route for a single resource by id
// 3. View route to add single resoruce
// 4. view route to edit a single resorce
// 5. POST route to add new dish
// 6. PUT route to handle incoming data and update existing routes
// 7. delete route to delete anexisting dish



app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });