const QRCode = require('qrcode');

//gera uma imagem do QRcode
exports.createQRCode = async (link) => {
  try {
    const qrCode = await QRCode.toDataURL(link); //gera o QRcode atraves de um link
    return qrCode;
  } catch (error) {
    throw new Error('Erro ao gerar QR Code: ' + error.message); //caso de erro ele devolve
  }
};
