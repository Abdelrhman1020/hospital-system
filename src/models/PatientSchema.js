const mongoose = require('mongoose');

const MedicalNoteSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  note: String,
  by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  dob: Date,
  gender: { type: String, enum: ['male','female','other'], default: 'male' },
  phone: { type: String, index: true },
  email: { type: String, index: true },
  address: String,
  medicalHistory: [MedicalNoteSchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

// text index for search
PatientSchema.index({ name: 'text', phone: 'text', email: 'text' });

module.exports = mongoose.model('Patient', PatientSchema);
