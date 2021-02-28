import express from "express";
import { getUsersListe, createComment, getUserProfil } from "./database";
import { comments } from "./models/usersModel";
import { Request, Response } from "express";
const router = express.Router();

// Routes
router.get("/", (req: Request, res: Response) => {
  const data = getUsersListe();
  res.status(200).json(data);
});

router.get("/profil", (req: Request, res: Response) => {
  const data = getUserProfil();
  res.status(200).json(data);
});

router.post("/profil/comment/add", (req: Request, res: Response) => {
  const comment: comments = req.body;
  if (comment) {
    const commentReseult = createComment(comment);
    res.status(201);
    res.json({ commentReseult, message: "OKOK" });
  } else {
    res.status(400);
    res.json({ message: "BAD REQUEST" });
  }
});

export default router;
