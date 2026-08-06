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
