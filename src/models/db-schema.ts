import { OfficesData, TestData } from "./testDataModel";
import { AgencyRecord } from "./agencyRecordModel";
import { UsersModel } from "./usersModel";

export interface DbSchema {
  testData: TestData[];
  agency: AgencyRecord[];
  getOfficiesList: OfficesData[];
  users: UsersModel;
}
