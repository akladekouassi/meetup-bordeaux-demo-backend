import path from 'path';
import low from 'lowdb';
var uuid = require('uuid');
import FileSync from 'lowdb/adapters/FileSync';
import { UsersModel, Users } from './models/employersModel';

export type TDatabase = {
  users: Users[];
};

// DEFINING THE DATABASE LOCATION
const databaseFile = path.join(__dirname, './data.json');
const adapter = new (FileSync as any)(databaseFile);
const db: any = low(adapter);

const USERS_TABLE = 'Users';

function saveContent<T>(data: T, table: string): void {
  db.get(table).push(data).write();
}

//USERS
const getAllUsersListData = () => db.get(USERS_TABLE).value();
export const getUsersListe = (): UsersModel => ({ usersList: getAllUsersListData() });

export const createUser = (user: Users): Users => {
  const userModel: Users = {
    id: uuid.v4(),
    poste: user.poste,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    email: user.email,
    gender: user.gender,
    hiredDate: user.hiredDate,
    isPermanent: user.isPermanent,
  };

  saveContent(userModel, USERS_TABLE);
  return userModel;
};

export default db;
