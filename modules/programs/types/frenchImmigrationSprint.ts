import { InteracPayment } from "./types";

export type FrenchImmigSprintRegPayload = {
  student: {
    fullName: string;
    email: string;
    phoneNo: string;
    homeAddress: string;
  };
  emergencyContact: {
    name: string;
    phoneNo: string;
    homeAddress: string;
  };
  terms: {
    acceptedTerms: boolean;
    truthfulness: boolean;
    consentPersonalInfo: boolean;
    consentMedia?: boolean;
  };
};

export type FrenchImmigSprintRecord = {
  id: string;
  interacPayment: InteracPayment;
} & FrenchImmigSprintRegPayload;

export interface FrenchImmigRegsListResponse {
  success: boolean;
  message: string;
  data: FrenchImmigSprintRecord[];
  error: null;
}

export interface FrenchImmigRegResponse {
  success: boolean;
  message: string;
  data: FrenchImmigSprintRecord | null;
  error: null;
}
