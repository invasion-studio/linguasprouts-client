export type AfterSchoolRegPayload = {
  child: {
    fullName: string;
    language: string;
    ageGroup: string;
  };
  parent: {
    fullName: string;
    relationship: string;
    email: string;
    phoneNo: string;
    homeAddress: string;
    emergencyContact: {
      name: string;
      phoneNo: string;
      homeAddress: string;
    };
  };
  schedule: { day: string; time: string }[];
  terms: {
    acceptedTerms: boolean;
    truthfulness: boolean;
    consentPersonalInfo: boolean;
    consentMedia?: boolean;
  };
};

export type ResponseMeta = {
  id: string;
  sessionUrl: string | null;
};

export interface AfterSchoolRegListResponse {
  success: boolean;
  message: string;
  data: (ResponseMeta & AfterSchoolRegPayload)[];
  error: null;
}

export interface AfterSchoolRegResponse {
  success: boolean;
  message: string;
  data: (ResponseMeta & AfterSchoolRegPayload) | null;
  error: null;
}
