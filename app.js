const express = require("express")
const bodyParser = require("body-parser")

const app = express()

var items = []
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", function(req, res){

    var today = new Date()

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("es-EU", options)

    res.render("list", {kindOfday: day, newListItems: items})
})

app.post("/", function(req, res){
    items.push(req.body.newItem)

    res.redirect("/")
})

app.listen(3000, function(){
    console.log("server started on port 3000")
})