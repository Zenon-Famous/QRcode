const qrModel = require('../models/gerarqrcode'); 

//checa o link
exports.generateQRCode = async (req, res) => {
  const link = req.query.link; 

  //se estiver vazio, retorna erro
  if (!link) {
    return res.status(400).send('Link é necessário');
  }

  try {
    // espera o Model gerar o QRcode
    const qrCodeDataUrl = await qrModel.createQRCode(link);

    res.send(`<img src="${qrCodeDataUrl}" alt="QR Code">`);
  } catch (err) {
    console.error('Erro ao gerar QR Code:', err);
    res.status(500).send('Erro interno ao gerar o QR Code');
  }
};
