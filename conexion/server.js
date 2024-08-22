const express = require('express');
const mysql = require('mysql2'); // Actualiza aquí para usar mysql2
const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',  // Cambia esto si tu base de datos está en otro host
  user: 'admin',      // Cambia esto por tu nombre de usuario de base de datos
  password: 'resstech04', // Cambia esto por tu contraseña de base de datos
  database: 'terapia', // Cambia esto por el nombre correcto de tu base de datos
});

// Conexión a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    process.exit(1);
  }
  console.log('Conectado a la base de datos');
});

app.post('/saveExercise', (req, res) => {
  const { Nombre_Ejerc, Diagnostico, Ejercicio } = req.body;

  const query = 'INSERT INTO terapia (Nombre_Ejerc, Diagnostico, Ejercicio) VALUES (?, ?, ?)';
  db.query(query, [Nombre_Ejerc, Diagnostico, Ejercicio], (err, result) => {
    if (err) {
      return res.status(500).send('Error al guardar los datos.');
    }
    res.status(200).send('Datos guardados exitosamente.');
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
