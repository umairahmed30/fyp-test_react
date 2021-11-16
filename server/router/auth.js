const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
var nodemailer = require('nodemailer');
//const upload = multer();
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







router.post("/findUser",async(req,res)=>{
  const email=req.body.email;
  const users = await User.find({email:email});
  res.send(users); 
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
        skills,
        salary,
        name,
        email,
        password
        });

      // yaha pr password and cpassword ko hash karain gy

      const userRegistered = await user.save();

      //res.status(201).json({ message: "User Registered Successfully" });


      if (userRegistered) {
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


      // Generate cookies
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      // if (!userlogin)
      if (!isMatch)
      res.status(400).json({ error: "Invalid login Credentials pass" });
   else res.json({ message: "User Signin Successfully" });
    } else {
      res.status(400).json({ error: "Invalid login Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});



module.exports = router;
