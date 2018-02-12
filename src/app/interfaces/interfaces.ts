export interface User {
  _id?: string,
  name: string,
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
  name: string,
  email: string,
  password: string,
  repeatPassword: string,
}
