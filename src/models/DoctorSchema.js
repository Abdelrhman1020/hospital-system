const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  specialization: { type: String, required: true, index: true },
  email: { type: String, index: true },
  phone: String,
  workingHours: [{ day: String, from: String, to: String }],
  notes: String,
  isActive: { type: Boolean, default: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

DoctorSchema.index({ name: 'text', specialization: 'text' });

module.exports = mongoose.model('Doctor', DoctorSchema);
