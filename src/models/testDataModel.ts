export interface TestData {
  id: string;
  uuid: string;
  codeword: string;
  recipientFirstName: string;
  recipientLastName: string;
  senderLastName: string;
  senderFirstName: string;
  deliveryManPhone: string;
  recipientPhone: string;
}

export interface OfficesData {
  ulid: string;
  name?: string;
  disabled?: boolean;
  visible?: boolean;
  phoneNumber?: string;
  zone?: {
    name?: string;
    country?: string;
  };
  numberOfParcels?: number;
  partner?: boolean;
  status: "ACTIVE" | "INACTIVE" | "DISABLED" | "INVISIBLE";
  visibility: "VISIBLE" | "INVISIBLE";
  moneyInRegister?: number;
  currency?: "XOF" | "USD" | "GHS";
  lastUpdated: string;
}
