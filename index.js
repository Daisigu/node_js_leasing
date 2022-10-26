const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const carRouter = require('./carRouter')
const PORT = process.env.PORT || 5000
const app = express()
const fileUpload = require('express-fileupload');
const cors = require('cors')


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static('public')); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(fileUpload());


app.use("/auth", authRouter)
app.use("/test", carRouter)


const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://qwerty:qwerty123@cluster0.zrtytxl.mongodb.net/auth_roles?retryWrites=true&w=majority`)
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()

