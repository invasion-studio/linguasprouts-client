import { AfterSchoolRegPayload } from "@/modules/programs/types/afterschoolReg";

export interface AfterSchoolRegListResponse {
  success: boolean;
  message: string;
  data: AfterSchoolRegPayload[];
  error: null;
}

export interface AfterSchoolRegResponse {
  success: boolean;
  message: string;
  data: AfterSchoolRegPayload | null;
  error: null;
}
