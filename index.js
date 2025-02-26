require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const consultaRoutes = require('./routes/consulta');

const app = express();

// Seguridad y Configuración
app.use(express.json());
app.use(cors());
app.use(helmet());

// Limitador de solicitudes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // Máximo 100 peticiones por IP
});

app.use(limiter);

// Rutas
app.use('/api', consultaRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
    
    console.log(`Servidor corriendo en http://localhost:${PORT}`),
   
);
