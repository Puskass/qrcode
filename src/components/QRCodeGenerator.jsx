import React from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({ link }) => {
  const downloadQRCode = () => {
    const canvas = document.getElementById(`qrcode-${link}`);
    const url = canvas.toDataURL("image/png");
    const linkElement = document.createElement("a");
    linkElement.href = url;
    linkElement.download = `${link}-qrcode.png`;
    linkElement.click();
  };

  return (
    <div>
      <QRCode id={`qrcode-${link}`} value={link} size={128} />
      <button onClick={downloadQRCode}>Download QR Code</button>
    </div>
  );
};

export default QRCodeGenerator;
