export interface UsersModel {
  usersList?: Users[];
  profil?: {
    informations: informations;
    salesFigures: salesFigures;
    comments: comments[];
  };
}

export interface Users {
  uild: string;
  poste: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  hiredDate: Date;
  isPermanent: boolean;
}

interface informations {
  firstName: string;
  lastName: string;
  userName: string;
  contact: {
    email: string;
    phoneNumber: string;
  };
  KOTscanAndroidProfil: string;
  KOTscanAdminProfil: string;
  appVersion: string;
}

interface salesFigures {
  ca: {
    price: string;
    growth: number | string;
  };
  CashOutstanding: {
    price: string;
    growth: number | string;
  };
  numberOfParcelsCreated: {
    number: string;
    growth: number | string;
  };
  numberOfParcelsDelivered: {
    number: string;
    growth: number | string;
  };
}
export interface comments {
  uild?: string;
  name: string;
  avatar: string;
  companyName: string;
  comment: string;
  commentDate: string | Date;
}
