const express = require("express");
const connection = require("./connection");
const router = express.Router();

router.get("/getAll",(req,res)=>{
    try{
        connection.query("SELECT * FROM movieapplication.moviedetails", (error, response)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            res.status(200).json(response);
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})


// router.get("/getAllJSON",(req,res)=>{
//     try{
//         connection.query("SELECT * FROM movieapplication.movie", (error, response)=>{
//             if(error)
//             {
//                 res.status(422).json(error);
//             }
//             res.status(200).json(response);
//         })
//     }
//     catch(error)
//     {
//         res.status(422).json(error);
//     }
// })
module.exports = router;