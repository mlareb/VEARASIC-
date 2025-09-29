require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

// health
app.get('/api/health', (req,res)=>res.json({ok:true, env:process.env.NODE_ENV}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log('API running on', PORT));
