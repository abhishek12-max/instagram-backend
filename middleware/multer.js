const multer= require("multer");
const storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/")
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+"-"+ file.originalname)
    }
})

const uploads= multer({
    storage,
    fileFilter:function(req,file,cb){
         if(file.mimetype==="image/png"|| file.mimetype==="image/jpeg"){
            cb(null,true)
         }else{
            cb(new Error("only images allowed"))
         }
    }

});

module.exports= uploads