const express = require('express');
require('dotenv').config();
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('ERP Backend funcionando ✔️'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor en puerto ${PORT}`));
