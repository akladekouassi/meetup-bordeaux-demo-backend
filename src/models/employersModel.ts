export interface UsersModel {
  usersList?: Users[];
}
export interface Users {
  id: number | string;
  poste: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  hiredDate: Date;
  isPermanent: boolean;
}
