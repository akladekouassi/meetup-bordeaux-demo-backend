import path from 'path';
import low from 'lowdb';
var uuid = require('uuid');
import FileSync from 'lowdb/adapters/FileSync';
import { TestData } from './models/testDataModel';
import { AgencyRecord } from './models/agencyRecordModel';
import { UsersModel, comments, Users } from './models/usersModel';

export type TDatabase = {
  testData: TestData[];
  agency: AgencyRecord[];
  users: Users[];
};

// DEFINING THE DATABASE LOCATION
const databaseFile = path.join(__dirname, './data.json');
const adapter = new (FileSync as any)(databaseFile);
const db: any = low(adapter);

const TEST_DATA_TABLE = 'testData';
const OFFICES_LIST = 'officesList';
const AGENCY_RECORD_TABLE = 'agency';
const USERS_TABLE = 'Users';
const COMMENTS_TABLE = 'users.userRecord.profil.comments';

function saveContent<T>(data: T, table: string): void {
  db.get(table).push(data).write();
}

// GETTING ALL TEST DATA
export const getAllTestData = () => db.get(TEST_DATA_TABLE).value();

export const getOfficesList = () => db.get(OFFICES_LIST).value();

//AGENCY RECORD
const getAllAgencyRecordData = () => db.get(AGENCY_RECORD_TABLE).value();
export const getProfilInformationBlocData = (): AgencyRecord[] => [
  {
    name: getAllAgencyRecordData().agencyRecordData.name,
    agencyRecordData: getAllAgencyRecordData().agencyRecordData.profil,
    users: getAllAgencyRecordData().agencyRecordData.profil.usersList,
  },
];

export const getAllParcels = (): AgencyRecord[] => [getAllAgencyRecordData().agencyRecordData.profil.parcelsList];

//USERS
const getAllUsersListData = () => db.get(USERS_TABLE).value();
export const getUsersListe = (): UsersModel => ({ usersList: getAllUsersListData().usersList });

export const getUserProfil = (): UsersModel['profil'] => ({
  informations: getAllUsersListData().userRecord.profil.informations!,
  salesFigures: getAllUsersListData().userRecord.profil.salesFigures!,
  comments: getAllUsersListData().userRecord.profil.comments!,
});

export const createUser = (user: Users): Users => {
  const userModel: Users = {
    uild: uuid.v4(),
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
