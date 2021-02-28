export interface AgencyRecord {
  name?: string;
  agencyRecordData?: Profil;
  users?: any;
  parcels?: Parcels[];
}
interface Profil {
  informations: informations[];
  comments: Comments[];
  document: Documents[];
}

interface informations {
  contact: {
    name: string;
    number: string;
  };
  address: {
    name: string;
    description: string;
  };
  openingHours: string[];
}

interface Comments {
  avatar: string;
  name: string;
  companyName: string;
  comment: string;
  commentDate: String;
}

interface Documents {
  name: string;
}

export interface Parcels {
  ulid: string;
  codeWord: string;
  sender: {
    name: string;
    phoneNumber: string;
  };
  recipient: {
    name: string;
    phoneNumber: string;
  };
  departureOffice: string;
  destinationOffice: string;
  status: "pre_transit" | "in_transit" | "out_for_delivery" | "delivered";
  createdDate: string;
}
