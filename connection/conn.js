const mongoose = require("mongoose");
mongoose.set('strictQuery', true)

mongoose.connect(process.env.DB,

).then(()=> console.log("connected ...."))
.catch(()=>console.log("not connected"));