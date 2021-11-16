const mongooose = require("mongoose");

const recommendationSchema = new mongooose.Schema({
        answer: {
        type: [{}],
        
        }     

})


const Job = mongooose.model("RECOMMENDATION", recommendationSchema);

module.exports = Job;