const express = require("express")
const nunjucks = require("nunjucks")
const recipes = require("./database/data")

const server = express()

server.use(express.static("public"))


server.set("view engine", "njk")

nunjucks.configure("src/views", {
    express: server,
    noCache: true,
    autoescape: false
})

server.get("/", (req, res) => {
    return res.render("home", {items: recipes})
})

server.get("/about", (req, res) => {
    return res.render("about")
})

server.get("/recipes", (req, res) => {
    return res.render("recipes", {items: recipes})
})

server.get("/recipes/:id", function (req, res) {
    const recipeId = req.params.id;
    const recipe = recipes.find(function(recipe){
        return recipe.id = recipeId
    })

    if(!recipes[recipeId]) {
        return res.render("not-found")
    }
    
    return res.render("recipe", {item: recipes[recipeId]})
  })

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, () => {
    console.log("server is running")
})