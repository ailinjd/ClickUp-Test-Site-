var express = require("express");
var path = require("path");

//var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));
app.use("/css",express.static("./css"))
app.use("/js",express.static("./js"))
app.use("/images",express.static("./images"))
//app.use("/images",express.static("/.svg"))


app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
});




