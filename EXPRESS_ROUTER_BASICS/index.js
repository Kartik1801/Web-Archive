// INTRO TO EXPRESS ROUTER: FOR MORE INFO REFER TO EXPRESS DOCS
const express = require('express');
const app = express();
const shelterRoutes = require("./routes/shelters");

app.use("/shelters", shelterRoutes);

app.listen(3000, () => {
    console.log("Listening on port: 3000");
})