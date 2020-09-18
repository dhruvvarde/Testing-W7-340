const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  firstName : String,
  lastName : String
});

module.exports = mongoose.model('Employee', employeeSchema);