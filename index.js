const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routers/authRouter')
const carRouter = require('./routers/carRouter')
const requestRouter = require('./routers/requsetRouter')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.use('/uploads', express.static('uploads'))
app.use("/auth", authRouter)
app.use("/cars", carRouter)
app.use("/requests", requestRouter )
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://qwerty:qwerty123@cluster0.zrtytxl.mongodb.net/auth_roles?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

