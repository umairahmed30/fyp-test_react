const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
var nodemailer = require('nodemailer');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

// const storage  =multer.diskStorage({
// destination: (req, file, callback)=>{ 
// callback(nu11,"../../public/upload/");
// }, 
// filename:(req, file,callback) =>{ 
// callback(nu11,file.originalname);
// }

// })
const Recommendation=require("../model/recommendationSchema");
router.post("/rFormData",async (req, res) => {
  console.log("r form is hit");
  console.log(req.body[0]);
  // const { title,
  //   description,
  //   skillsRequired,
  //   minExp,
  //   jobPlace, } = req.body;
 const answer=req.body;
 console.log(answer);
    const recommendation = new Recommendation({
      answer});

     
    try{
        const recommendationRegistered = await recommendation.save();
        if (recommendationRegistered) {
          res.status(201).json({ message: "User Registered Successfully" });
        } else {
          res.status(500).json({ error: "Failed to registered" });
        }
    }
 catch (error) {
    console.log(error);
  }

    //res.status(201).json({ message: "answer Registered Successfully" });
});

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./transcript"); //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
const upload=multer({storage:fileStorageEngine});

router.post("/upload",upload.single('transcript'),(req, res) => {
  console.log("upload is hit");
  //console.log(req.file.filename, req.body);
  res.send("single file upload sucess");
});

router.post("/sendEmail",(req, res) => {
  const recommDetails=req.body;
  const details=recommDetails.stateRecommendation;
  const stateMaintain =recommDetails.stateMaintain;
  console.log(details);
  console.log(stateMaintain.email);
  details.forEach(function (detail) {
    var transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fypjobportal@gmail.com',
    pass: 'fypjobportal123'
  },
  tls:
  {
      rejectUnauthorized:false,
  },

});
const welcome_email = () => `<a href="http://localhost:3000/recommendation/${stateMaintain.email}" >Welcome</a>`
var mailOptions = {
  from: 'fypjobportal@gmail.com',
  to: detail.email,
  subject: 'Sending Email using Node.js',
  text: 'First Email sent from Node.js using Nodemailer!',
  html: welcome_email(),
};



transport.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.status(201).json({ message: "Email sent Successfully" });
  }
});
   
    
});

});






router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
});

const Job = require("../model/jobSchema");
router.get("/home",async(req,res)=>{
  const jobs = await Job.find();
  res.send(jobs); 
});



const Question = require("../model/questionSchema");
router.get("/getquestion",async(req,res)=>{
  const questions = await Question.find();
  res.send(questions); 
});


const City =require("../model/citySchema");
router.get("/getcity",async(req,res)=>{
  const cities = await City.find({country:req.query.country}).limit(5);
 console.log("city is hit");
  res.send(cities); 
});

router.get("/getcities",async(req,res)=>{
  const cities = await City.find({city : {$regex : req.query.val,$options: 'i' }}).limit(5);
 console.log("cities is hit");
  res.send(cities); 
});




// router.get("/getLongLat",async(req,res)=>{
//   const long_lat = await City.find({city:req.query.city});
//  const city={
//    name:req.query.city,
//    lat:long_lat[0].lat,
//    lng:long_lat[0].lng,
//  };
//  //console.log(city);

//   res.send(city); 
// });

// router.post("/getLongLat",async(req,res)=>{
//   const cities=req.body.userCity;
//   const long_lat=[]
//   cities.map(async(citi)=>{
//     const result=await City.findOne({city:citi});
//     await long_lat.push(result);
//     console.log(result);
//   });
  
//   console.log("post long lat hit");
//   console.log(long_lat);
//   res.status(200).send(long_lat); 
 
// });





router.post("/findUser",async(req,res)=>{
  const email=req.body.email;
  const users = await User.find({email:email});
  res.send(users); 
});


router.get("/getUsers",async(req,res)=>{
  try{
    console.log("post get users");
  const skill=req.query.skill;

  console.log(skill);

  const users = await User.find({salary:{$gte:req.query.sal}});
  res.send(users);
  }
  catch(error)
  { console.log(error);

  } 
});

//testing
router.post("/getUserstest",async(req,res)=>{
  try{
    console.log("get users test");
  

  console.log(req.body.skill);
  console.log(req.body.props);
  var conditions= {}; // declare the query object
  var and_clauses=[]; // filter the search by any criteria given by the user
  if((req.body.props.skills).length > 0){ // if the criteria has a value or values
    and_clauses.push({'skills':{$elemMatch:{language:{$in:req.body.props.skills}}}});
    // add to the query object
  }
  
  if(req.body.props.sal){ // if the criteria has a value or values
    console.log("yes sal is available");
    and_clauses.push({'salary':{$gte:req.body.props.sal}});  
    // add to the query object
  }
  
  


  
if(and_clauses.length > 0){ 
  conditions['$and'] = and_clauses; // filter the search by any criteria given by the user
}

  const users = await User.find(conditions,
    function(err, users) {
        if (err){
            console.log(err);
            res.status(500).send(err);
        }else{
            console.log(users);
            res.status(200).send(users);
        }
});
  
  }
  catch(error)
  { console.log(error);

  } 
});

router.post("/getUsers",async(req,res)=>{
  try{
  const sal=req.body.salary;
  const cityDetails=req.body.cityDetails;
  mycities=[]
  cityDetails.map(detail=>mycities.push(detail.properties.cityName));
  console.log(mycities);
  var conditions= {}; // declare the query object
  var and_clauses=[]; // filter the search by any criteria given by the user
  and_clauses.push({'salary':{$gte:sal},'cities':{$elemMatch:{city:{$in:mycities}}}})
  if((req.body.skills).length > 0){ // if the criteria has a value or values
    and_clauses.push({'skills':{$elemMatch:{language:{$in:req.body.skills}}}});
    // add to the query object
  }

  if(and_clauses.length > 0){ 
  conditions['$and'] = and_clauses; // filter the search by any criteria given by the user
}

const users = await User.find(conditions,
  function(err, users) {
      if (err){
          console.log(err);
          res.status(500).send(err);
      }else{
          console.log(users);
          res.status(200).send(users);
      }
});


  
}
catch(error)
{
  console.log(error);
}

});


router.post("/addQuestion",async(req,res)=>{

  const { question } = req.body;

    const question1 = new Question(
      {
          question
      });


    const questionAdded = await question1.save();
    res.status(201).json({ message: "Question Added Successfully" });


    // if (userRegistered) {
    //   res.status(201).json({ message: "User Registered Successfully" });
    // } else {
    //   res.status(500).json({ error: "Failed to registered" });
    // }

  

});



router.post("/home",async(req,res)=>{

  const { title,
    description,
    skillsRequired,
    minExp,
    jobPlace, } = req.body;

    const job = new Job(
      {
          title,
          description,
          skillsRequired,
          minExp,
          jobPlace,
      });

    // yaha pr password and cpassword ko hash karain gy

    const jobRegistered = await job.save();
    res.status(201).json({ message: "Job Registered Successfully" });


    // if (userRegistered) {
    //   res.status(201).json({ message: "User Registered Successfully" });
    // } else {
    //   res.status(500).json({ error: "Failed to registered" });
    // }

  

});



router.post("/register", async (req, res) => {
  const {radio1,
    radio2,
    university,
    cgpa,
    degree,
    transcript,
    cities,
    skills,
    salary,
    name,
    email,
    password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).send("Please filled the empty field properly");
  }

  // With Async and Await
  try {
    const userExist = await User.findOne({ email:email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    }  
    else {
    //   // const user = new User(req.body).save();
      const user = new User(
        {
        radio1,
        radio2,
        university,
        cgpa,
        degree,
        transcript,
        cities,
        skills,
        salary,
        name,
        email,
        password
        });

      // yaha pr password and cpassword ko hash karain gy

      const userRegistered = await user.save();
      const token = await userRegistered.generateAuthToken();
      console.log(token);
      

      //res.status(201).json({ message: "User Registered Successfully" });


      if (userRegistered) {
         // Generate cookies
       res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        // httpOnly: true,
      });
        res.status(201).json({ message: "User Registered Successfully" });
      } else {
        res.status(500).json({ error: "Failed to registered" });
      }
    }
  } catch (error) {
    console.log(error);
  }

  // With Promise
  // User.findOne({ email: email })
  //   .then((userExist) => {
  //     if (userExist) {
  //       return res.status.toString(422).json({ error: "Email already Exist" });
  //     }

  //     // const user = new User(req.body).save();
  //     const user = new User({
  //       name: name,
  //       email: email,
  //       phone,
  //       work,
  //       password,
  //       cpassword,
  //     });

  //     user
  //       .save()
  //       .then(() => {
  //         res.status(201).json({ message: "user registered successfully" });
  //       })
  //       .catch((err) =>
  //         res.status(500).json({ error: "Failed to registered" })
  //       );
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // console.log(req.body);
  // res.json({ message: req.body });
  // res.send("mera register page");
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz filled the data" });
    }

    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
        // Generate Web Tokens for security
        const token = await userLogin.generateAuthToken();
        console.log(token);
    
     
      // if (!userlogin)
      if (!isMatch)
      {
      
      res.status(400).json({ error: "Invalid login Credentials pass" });
      }
      else
      { 
       
 
 
       // Generate cookies
       res.cookie("jwtoken", token, {
         expires: new Date(Date.now() + 25892000000),
         // httpOnly: true,
       });
        res.json({ message: "User Signin Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid login Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});



module.exports = router;
