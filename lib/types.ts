export interface ResponsePayload<T> {
  success: boolean;
  message: string;
  data: T | null;
  error?: any;
  meta?: any;
}
