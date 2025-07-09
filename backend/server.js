const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/realestate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"));

const propertyRoutes = require('./routes/propertyRoutes');
app.use('/api/properties', propertyRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));