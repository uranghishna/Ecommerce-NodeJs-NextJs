const { request, response } = require("express");
const userRoutes = require("./routes/user");
const express = require("express");
const app = express();
const cors = require('cors')
const port = 5000;

app.use(cors())

app.use(express.json());

app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`aplikasi anda di port ${port}`);
});