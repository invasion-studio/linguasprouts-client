import { ResponsePayload } from "./types";

export default async function resolveServerAction(
  action: () => Promise<ResponsePayload<any>>,
) {
  const result = await action();
  if (!result.success) {
    return Promise.reject(new Error(result.message));
  }
  return result.data;
}
