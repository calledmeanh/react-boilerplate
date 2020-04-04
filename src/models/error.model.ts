class ErrorModel {
  status: number;
  data: any;

  constructor(input: ErrorModel) {
    this.status = input.status ?? 0;
    this.data = input.data ?? {};
    return this;
  }
}

export default ErrorModel;
