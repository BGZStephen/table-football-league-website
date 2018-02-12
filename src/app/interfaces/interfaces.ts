export interface User {
  _id?: string,
  firstName: string,
  lastName?: string,
  email: string,
  password?: string,
  teams?: Array<any>,
  fixtures?: Array<any>,
  leagues?: Array<any>,
  lastSignIn?: Date,
  profileImageUrl?: string,
  statistics?: object,
  position?: object,
}

export interface RegistrationForm {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
}
