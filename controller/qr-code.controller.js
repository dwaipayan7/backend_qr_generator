import QRCodeServices from "../services/qr-code.services.js";

const createQR = async (req, res) =>{
    const qrCode = await QRCodeServices.createQR(
        req.body.qrData,
        req.body.displayData,
        true
    );

    res.contentType("image/png");
    return res.status(200).send(qrCode);

}

export default {
    createQR
}