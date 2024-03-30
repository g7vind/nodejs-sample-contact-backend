const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const PORT =process.env.PORT
const cors = require('cors');
app.use(cookieParser());
const DB=process.env.MONGO_URL
app.use(cors());
app.use(express.json());
app.use('/api', contactRoutes);
app.use('/api', userRoutes);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => console.log(err));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});