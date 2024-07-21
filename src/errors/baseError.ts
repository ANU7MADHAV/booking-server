class BaseError extends Error {
  public name: string;
  public statusCode: number;
  public details: string;

  constructor(
    name: string,
    statusCode: number,
    description: string,
    detials: string
  ) {
    super(description);
    (this.name = name),
      (this.statusCode = statusCode),
      (this.details = detials);
  }
}

export default BaseError;
