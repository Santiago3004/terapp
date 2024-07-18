const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const sequelize = new Sequelize('terapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definir el modelo de Paciente
const Paciente = sequelize.define('Paciente', {
    Nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Sincronizar el modelo con la base de datos
sequelize.sync();

// Ruta para crear un nuevo paciente
app.post('/registro', async (req, res) => {
    const { Nombres, Apellidos, Telefono, Email, Password } = req.body;
    try {
        const newPaciente = await Paciente.create({
            Nombres,
            Apellidos,
            Telefono,
            Email,
            Password
        });
        res.status(201).json(newPaciente);
    } catch (error) {
        console.error('Error Al Crear El Usuario:', error);
        res.status(500).json({ error: 'Error Al Crear El Usuario' });
    }
});

// Ruta para autenticar un paciente
app.post('/login', async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const paciente = await Paciente.findOne({ where: { Email, Password } });
        if (paciente) {
            res.status(200).json({ message: 'Login Exitoso', paciente });
        } else {
            res.status(401).json({ error: 'Creedenciales Invalidas' });
        }
    } catch (error) {
        console.error('Error en el login:', error);
        res.status(500).json({ error: 'Error en el login' });
    }
});

// Ruta de prueba para obtener items
app.get('/items', (req, res) => {
    res.json([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ]);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Corriendo En El Puerto => http://localhost:${port}`); 
});