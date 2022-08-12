const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");


// custom files
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");
const crypto = require("./routes/api/crypto");

//initialize express app
const app = express();

// port 
const PORT = process.env.PORT || 3500;


// built-in middleware for json 
app.use(express.json());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));


// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
// add Access-control-allow header
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// middleware for cookies
app.use(cookieParser());


// routes
app.use("/crypto", crypto);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));