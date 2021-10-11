const mongooose = require("mongoose");

const questionSchema = new mongooose.Schema({
        question: {
        type: String,
        //required: true,
        }     

})


const Job = mongooose.model("QUESTION", questionSchema);

module.exports = Job;