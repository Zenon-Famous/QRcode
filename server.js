const express = require('express');
const path = require('path');
const qrRoutes = require('./routes/qrcode');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'views')));

// Middleware para interpretar dados enviados por formulários do lado do cliente
app.use(express.urlencoded({ extended: true }));

// Rota principal para o QR Code
app.use('/qrcode', qrRoutes);


app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
