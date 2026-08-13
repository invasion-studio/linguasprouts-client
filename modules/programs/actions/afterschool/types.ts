import { AfterSchoolRegPayload } from "@/modules/programs/types/afterschoolReg";

type ResponseMeta = {
  id: string;
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
