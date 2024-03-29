import express from 'express';
import { getUsersListe, createUser } from './database';
import { Users } from './models/employersModel';
import { Request, Response } from 'express';
const router = express.Router();

// Routes
router.get('/', (req: Request, res: Response) => {
  const data = getUsersListe();
  res.status(200).json(data);
});

router.post('/add', (req: Request, res: Response) => {
  const user: Users = req.body;
  if (user) {
    const userReseult = createUser(user);
    res.status(201);
    res.json({ userReseult, message: 'EMPLOYER REGISTERED' });
  } else {
    res.status(500);
    res.json({ message: 'SOMETHING WENT WRONG' });
  }
});

export default router;
