import { AfterSchoolRegPayload } from "@/modules/programs/types/afterschoolReg";

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
