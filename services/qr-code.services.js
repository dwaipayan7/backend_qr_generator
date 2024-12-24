import { createCanvas } from 'canvas';
import QRCode from 'qrcode';

async function createQR(dataForQRCode, labelText, isBuffer){
    const canvas = createCanvas(500, 500);
    QRCode.toCanvas(
        canvas,
        dataForQRCode,
        {
            errorCorrectionLevel: 'H',
            margin: 4,
            width: 500,
            height: 500,
            color:{
                dark: '#000000',
                light: '#FFFFFF',
            }
        }
    );

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'Black';
    ctx.font = '20px Arial';

    ctx.fillText(labelText, 200, 485, 500);

    return isBuffer ? canvas.toBuffer() : canvas.toDataURL();
}

export default {
    createQR
}