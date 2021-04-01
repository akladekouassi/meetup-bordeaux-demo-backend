import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import EmployersRoutes from './employers.route';

require('dotenv').config();

const corsOption = {
  credentials: true,
};

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const port = Number(process.env.PORT) || 8080;

app.use(cors(corsOption));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(
//   session({
//     secret: "session secret",
//     resave: false,
//     saveUninitialized: false,
//     unset: "destroy",
//   })
// );
app.use('/users', EmployersRoutes);
app.listen(port, () => console.log('SERVER STARTED ON PORT', +port));
