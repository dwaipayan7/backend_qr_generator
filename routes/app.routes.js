import QRCodeController from "../controller/qr-code.controller.js";
import express from "express";

const router = express.Router();

router.post("/create-qrcode", QRCodeController.createQR);

export default router;