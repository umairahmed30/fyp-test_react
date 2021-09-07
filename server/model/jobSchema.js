const mongooose = require("mongoose");

const jobSchema = new mongooose.Schema({
        title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      skillsRequired: {
        type: String,
        required: true,
      },
      minExp: {
        type: String,
        required: false,
      },
      jobPlace: {
        type: String,
        required: false,
      },

})


const Job = mongooose.model("JOB", jobSchema);

module.exports = Job;