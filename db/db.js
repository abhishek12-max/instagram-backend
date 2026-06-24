const mongooose= require("mongoose");

async function connectdb() {
    await mongooose.connect("mongodb://localhost:27017/user");
    console.log("mongodb connected")
}

module.exports= connectdb;