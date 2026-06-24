require("dotenv").config()
const express= require("express");
const postmodel= require("../models/postmodel");
const imagekit= require("../config/imagekit");
const connectdb= require("../db/db");
connectdb()
const fs= require("fs");
const uploads= require("../middleware/multer");
const app= express();
app.use(express.json());


app.post("/create-post",uploads.single("image"),async(req,res)=>{
     try {
          const result= await imagekit.upload({
            file: fs.readFileSync(req.file.path),
            fileName: req.file.filename
          });

          fs.unlinkSync(req.file.path);

      const post=  await postmodel.create({
            image: result.url,
            caption: req.body.caption
        })

        res.status(201).json({
   message: "Post Created Successfully",
   post:post
});

     }catch(error){
   console.log(error);

   res.status(500).json({
      message: error.message
   });
}
})

app.get("/posts", async (req, res) => {
  try {
    const posts = await postmodel.find();

    res.status(200).json({
      message: "Posts fetched successfully",
      posts
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

app.get("/post/:id",async (req,res)=>{
    const id= req.params.id
    const post= postmodel.findById({
        _id:id
    })
    if(post){
        res.status(201).json({
            message:"post fetch by id",
            post:post
        })
    }else{
        return res.status(404).json({
            message:"id not found"
        })
    }
})


module.exports= app;