import express from 'express';
import { getUsersListe, createUser, getUserProfil } from './database';
import { comments, Users } from './models/usersModel';
import { Request, Response } from 'express';
const router = express.Router();

// Routes
router.get('/', (req: Request, res: Response) => {
  const data = getUsersListe();
  res.status(200).json(data);
});

router.get('/profil', (req: Request, res: Response) => {
  const data = getUserProfil();
  res.status(200).json(data);
});

router.post('/add', (req: Request, res: Response) => {
  const user: Users = req.body;
  if (user) {
    const userReseult = createUser(user);
    res.status(201);
    res.json({ userReseult, message: 'REGISTERED' });
  } else {
    res.status(400);
    res.json({ message: 'BAD REQUEST' });
  }
});

export default router;
