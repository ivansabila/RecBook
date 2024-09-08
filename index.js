import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// configure dotenv (.env)
dotenv.config();

// configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// list API which will be used
const API_Weather = "https://api.openweathermap.org/data/2.5/weather?id=1640344";
const API_Quotes = "https://dummyjson.com/quotes/random/";
const API_Recipes = "https://dummyjson.com/recipes/";
const API_Todo = "https://dummyjson.com/todos/";

// make public as serving static file
app.use(express.static("public"));

// view dashobard
app.get("/", (req, res) => {
    // make array with random value
    const randIds = [Math.floor(Math.random() * 50 + 1), Math.floor(Math.random() * 50 + 1), Math.floor(Math.random() * 50 + 1)];

    // make request recipes API based on "randIds" variable
    const recipeRequests = randIds.map((id) => {
        return axios.get(`${API_Recipes}${id}`);
    });

    // make multiple concurrent requests APIs
    Promise.all([axios.get(`${API_Weather}&appid=${process.env.OPENWEATHER_API_KEY}`), axios.get(`${API_Quotes}`), ...recipeRequests, axios.get(`${API_Todo}random/3`)]).then(function (responses) {
        // // insert data "responses" to frontend
        res.render("index.ejs", { contents: responses });
    });
});

// fetch API_Todo by clicking "fa-xmark" class
app.post("/quotes", (req, res) => {
    // make a request by req.body of "randNumber" from frontend
    axios
        .get(`${API_Todo}${req.body.randNumber}`)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            res.json(error.response.data);
        });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
