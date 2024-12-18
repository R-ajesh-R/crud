const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true, 
    trim: true,     
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
  },
  menu: {
    type: String,
    default: '',
  },
  country_access: {
    type: [String], 
    default: [], 
  },
  state_access: {
    type: [String], 
    default: [], 
  },
  tasks_access: {
    type: [String], 
    default: [], 
  }
}, { timestamps: true }); 

const Roles = mongoose.model("Roles", roleSchema);

export default Roles;