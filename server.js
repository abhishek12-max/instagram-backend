require("dotenv").config()
const app= require("./src/app");
app.listen(3000,(req,res)=>{
    console.log("server start at port 3000")
})
