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
