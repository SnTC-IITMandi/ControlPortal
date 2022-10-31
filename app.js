const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");

const connectDB = require("./config/db");
const dotenv = require("dotenv");

const viewsRouter = require("./routes/viewsRoutes");

const newsRouter = require("./routes/gymkhana/newsRoutes");
const secretaryRouter = require("./routes/gymkhana/secretaryRoutes");
const senateRouter = require("./routes/gymkhana/senateRoutes");
const societiesRouter = require("./routes/gymkhana/societiesRoutes");
const hostelsRouter = require("./routes/gymkhana/hostelsRoutes");

// INITIALIZING EXPRESS APP
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(fileUpload());

// SETTING DEFAULT VIEW ENGINE
app.set("view engine", "ejs");

// SETTING DEFAULT VIEWS FOLDER
app.set("views", path.join(__dirname, "views"));

// SERVING STATIC FILES
app.use(express.static(`${__dirname}/public`));

dotenv.config({ path: "./config/config.env" });
// DATABASE CONNECTION
connectDB();

// ALL ROUTES
app.use("/", viewsRouter);
app.use("/gymkhana/news", newsRouter);
app.use("/gymkhana/hostels", hostelsRouter);
app.use("/gymkhana/secretary", secretaryRouter);
app.use("/gymkhana/society", societiesRouter);
app.use("/gymkhana/senate", senateRouter);

// IF ROUTE NOT PRESENT THEN THIS WILL RUN
app.all("*", (req, res) => {
    return res.status(404).json({
        message: "can't find this url",
    });
});

// START EXPRESS APP
port = process.env.PORT || 9000;
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`App listening on port : ${port} 
    http://localhost:9000
    `);
});
