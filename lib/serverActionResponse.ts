import { ResponsePayload } from "./types";

export default function apiResponse(
  success: boolean,
  message: string,
  data: any | null = null,
): ResponsePayload<any> {
  return { success, message, data };
}
