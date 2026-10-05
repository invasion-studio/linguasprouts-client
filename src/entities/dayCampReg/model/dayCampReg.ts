export type DayCampLanguage = "French" | "Spanish";

export type DayCampRegPayload = {
  children: {
    fullName: string;
    language: DayCampLanguage;
    age: number;
  }[];
  parent: {
    fullName: string;
    relationship: string;
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

export type ResponseMeta = {
  id: string;
};

export interface DayCampRegListResponse {
  success: boolean;
  message: string;
  data: (ResponseMeta & DayCampRegPayload)[];
  error: null;
}

export interface DayCampRegResponse {
  success: boolean;
  message: string;
  data: (ResponseMeta & DayCampRegPayload) | null;
  error: null;
}
