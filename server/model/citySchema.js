const mongooose = require("mongoose");

const citySchema = new mongooose.Schema({
    
city:{
    type: String
},
city_ascii:{
    type: String
},
lat:{
    type: String
},
lng:{
    type: String
},
country:{
    type: String
},
iso2:{
    type: String
},
iso3:{
    type: String
},
admin_name:
{
    type: String
},
capital:{
    type: String
},
population:{
    type: String
},
id:{
    type: String
}
        
})


const City = mongooose.model("CITY", citySchema);

module.exports = City;