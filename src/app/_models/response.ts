export interface ArrayResponse<T> {
  errorOccurred: boolean;
  errors: Array<any>;
  successResult: T[];
}

export interface SingleResponse<T> {
  errorOccurred: boolean;
  errors: Array<any>;
  successResult: T;
}
