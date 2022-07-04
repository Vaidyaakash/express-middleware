const express = require("express")

const app = express()

// creting Middleware 1
const middleware1 = function (req, res, next) {
    console.log("middleware1");
    next()
}
// creting Middleware 2
const middleware2 = function (req, res, next) {
    console.log("middleware2");
    next()
}

app.use(middleware2)    //this middleware for global


// creating routes

app.get("/page1", middleware1, function (req, res) {
    res.send("<h1>this is contact page by using middleware 1</h1>")
})
app.get("/page2", middleware1, function (req, res) {
    res.send("<h1>this is page2 by using middleware 1</h1>")
})

app.get("/page3", function (req, res) {
    res.send("<h1>this is a page3 by using middleware 2</h1>")
})
app.get("/", function (req, res) {
    res.send("<h1>this is a home page by using middleware 2</h1>")
})

app.listen(4545) //using port 4545