import path from "path";
import low from "lowdb";
var uuid = require("uuid");
import FileSync from "lowdb/adapters/FileSync";
import { TestData } from "./models/testDataModel";
import { AgencyRecord } from "./models/agencyRecordModel";
import { UsersModel, comments } from "./models/usersModel";

export type TDatabase = {
  testData: TestData[];
  agency: AgencyRecord[];
  users: UsersModel[];
};

// DEFINING THE DATABASE LOCATION
const databaseFile = path.join(__dirname, "./data.json");
const adapter = new (FileSync as any)(databaseFile);
const db: any = low(adapter);

const TEST_DATA_TABLE = "testData";
const OFFICES_LIST = "officesList";
const AGENCY_RECORD_TABLE = "agency";
const USERS_TABLE = "users";
const COMMENTS_TABLE = "users.userRecord.profil.comments";

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

export const getAllParcels = (): AgencyRecord[] => [
  getAllAgencyRecordData().agencyRecordData.profil.parcelsList,
];

//USERS
const getAllUsersListData = () => db.get(USERS_TABLE).value();
export const getUsersListe = (): UsersModel => ({ usersList: getAllUsersListData().usersList });

export const getUserProfil = (): UsersModel["profil"] => ({
  informations: getAllUsersListData().userRecord.profil.informations!,
  salesFigures: getAllUsersListData().userRecord.profil.salesFigures!,
  comments: getAllUsersListData().userRecord.profil.comments!,
});

export const createComment = (comment: comments): comments => {
  const commentModel: comments = {
    uild: uuid.v4(),
    name: comment.name,
    avatar: comment.avatar,
    companyName: comment.companyName,
    comment: comment.comment,
    commentDate: new Date(),
  };

  saveContent(commentModel, COMMENTS_TABLE);
  return commentModel;
};

export default db;
