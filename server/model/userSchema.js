const jwt = require("jsonwebtoken");
const mongooose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongooose.Schema({
  
  radio1: {
    type: String,
    required: true,
  },
  radio2: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    //required: true,
  },
  cgpa:{
    type: String,
  },
  degree:{
    type: String,
  },
  transcript: {
    type: String,
    required: false,
  },
  skills: {
    type: [{}] ,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//We are hashing the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log("password hashing");
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// Middleware for Generating Tokens
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
  }
};

// Create the collection Model
const User = mongooose.model("USER", userSchema);

module.exports = User;
