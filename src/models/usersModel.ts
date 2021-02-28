export interface UsersModel {
  usersList?: users[];
  profil?: {
    informations: informations;
    salesFigures: salesFigures;
    comments: comments[];
  };
}

interface users {
  ulid: string;
  userName: string;
  fullName: {
    name: string;
    role: string;
  };
  contact: {
    email: string;
    phoneNumber: string;
  };
  agency: {
    companyName: string;
    station: string;
  };
  customerName: string;
  appVersion: string;
  status: "active" | "inactive";
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
