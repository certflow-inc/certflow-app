export class UnAuthenticatedException extends Error {
  constructor(message: string) {
    super(message);
  }
}
