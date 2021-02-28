import express from "express";
import { getAllTestData, getOfficesList } from "./database";

const router = express.Router();

// Routes
router.get("/alltestData", (req, res) => {
  const data = getAllTestData();
  res.status(200).json({ results: data });
});

router.get("/allOfficesData", (req, res) => {
  const data = getOfficesList();
  res.status(200).json(data);
});

export default router;
