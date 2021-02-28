import express from "express";
import { getProfilInformationBlocData, getAllParcels } from "./database";
const router = express.Router();

// Routes
router.get("/agency-record/profil", (req, res) => {
  const data = getProfilInformationBlocData();
  res.status(200).json(data);
});

router.get("/agency-record/parcels", (req, res) => {
  const data = getAllParcels();
  res.status(200).json(data);
});

export default router;
