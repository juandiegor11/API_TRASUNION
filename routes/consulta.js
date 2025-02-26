const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/auth');

const router = express.Router();
const URL_INFOCOMERCIAL = process.env.API_URL_INFOCOMERCIAL;
const URL_LEGALCHECK = process.env.API_URL_LEGALCHECK;
const USERNAME = process.env.APITRASUNIONUSERNAME;
const PASSWORD = process.env.PASSWORDTRASUNION;
const SECRET_KEY = process.env.SECRET_KEY;

// Función para generar el header de autenticación Basic
const getAuthHeader = () => {
    const authString = `${USERNAME}:${PASSWORD}`;
    return `Basic ${Buffer.from(authString, "utf-8").toString("base64")}`;
};

// Ruta de autenticación (Login)
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulación de usuario (puedes conectar esto a una base de datos)
    if (username === "trasunion" && password === "Trasunion*2025") {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '10d' });
        console.log("Usuario autenticado");
        return res.json({ token });
    }
    res.status(401).json({ message: "Credenciales inválidas" });
});

// Ruta protegida para consultar la API externa
router.post('/LegalCheck', authenticateToken, async (req, res) => {
    try {
        const response = await axios.post(URL_LEGALCHECK, req.body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getAuthHeader()
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log("error");
        res.status(500).json(
            { error: "Error en la consulta", details: error.message }
        );
    }
});
router.post('/LegalChecks', async (req, res) => {
    try {
        const response = await axios.post(URL_LEGALCHECK, req.body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getAuthHeader()
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log("error");
        res.status(500).json(
            { error: "Error en la consulta", details: error.message }
        );
    }
});
router.post('/InfoComercial', authenticateToken, async (req, res) => {
    try {
        const response = await axios.post(URL_INFOCOMERCIAL, req.body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getAuthHeader()
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log("error");
        res.status(500).json(
            { error: "Error en la consulta", details: error.message }
        );
    }
});

router.post('/InfoComercials', async (req, res) => {
    try {
        const response = await axios.post(URL_INFOCOMERCIAL, req.body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getAuthHeader()
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log("error");
        res.status(500).json(
            { error: "Error en la consulta", details: error.message }
        );
    }
}
);


module.exports = router;
