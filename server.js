const express = require('express');
const mongoose = require("mongoose");
const authRoutes = require("./routes/userRoutes")
const cors = require("cors")
const server = express()


server.use(cors())
server.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/auth")
.then(console.log("MongoDB connected!"))
.catch(err => console.log(err))



server.use("/api/auth",authRoutes)








const PORT = process.env.PORT || 3030;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



