var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var interventionsSchema = new Schema({
    surgeon: {type: String},
    specialty: {type: String},
    anesthsiste: {type: String},
    nurse1: {type: String},
    nurse2: {type: String},
    roomNumber: {type: Number},
    intervention: {type: String}
});

module.exports = mongoose.model('interventions', interventionsSchema);