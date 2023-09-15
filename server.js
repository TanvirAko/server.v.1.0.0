// import module
import colors from "colors";
import dotenv from "dotenv";
import express from "express"
import path from "path";
//dote config
dotenv.config()
//port env
const PORT =  process.env.PORT ||  6060 ;
// express init
const app = express();
// static folder
app.use(express.static("public"))
 //express use
 app.use(express.json());
 app.use(express.urlencoded({extended:false}))
 //cearete serverzs
 //make home page
 app.get('/', (req, res) =>{
    res.send("<h1>Fast page </h1>")
 });
 //  send jsone data 
 app.get('/json', (req, res) =>{
    res.json({
        "name": "John Doe",
        "age": 30,
        "isStudent": false,
        "hobbies": ["reading", "hiking", "cooking"],
        "address": {
          "street": "123 Main St",
          "city": "Anytown",
          "state": "CA",
          "zip": "12345"
        }
      }
      )
 });
// gate json data
app.post("/getjson",(req,res)=>{
    console.log(req.body);
})
//user prams
app.get('/user/:id', (req, res)=>{
    console.log(req.params);
})
//urlencoded make v
app.post('/url', (req, res)=>{
    console.log(req.body);
})
// img response
app.get('/img1', (req, res)=>{
    res.sendFile(path.join(__dirname,"/public/1.jpg"));
});
app.get('/img2', (req, res)=>{
    res.sendFile(path.join(__dirname,"/public/2.jpg"));
});
 //server listen
 app.listen(PORT , (req, res) =>{
    console.log(`server running is successful on ${PORT} PORT`);
 })

 //helloaddhuh