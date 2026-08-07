import { FrenchImmigSprintRegPayload } from "@/modules/programs/types/frenchImmigrationSprint";

export interface FrenchImmigRegsListResponse {
  success: boolean;
  message: string;
  data: FrenchImmigSprintRegPayload[];
  error: null;
}

export interface FrenchImmigRegResponse {
  success: boolean;
  message: string;
  data: FrenchImmigSprintRegPayload | null;
  error: null;
}
