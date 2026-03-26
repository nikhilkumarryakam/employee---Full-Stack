const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  empId: { type: String, required: true, unique: true },
  salary: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  department: { type: String, required: true, default: "General" },
  position: { type: String, required: true, default: "Employee" },
  joinDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("Employee", EmployeeSchema);