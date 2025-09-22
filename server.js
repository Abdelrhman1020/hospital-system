const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load env variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import Routes
const patientRoutes = require('./src/routes/patient.routes.js');
const doctorRoutes = require('./src/routes/patient.routes.js');


// Routes Middleware
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(' DB Connection Error: ', err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});