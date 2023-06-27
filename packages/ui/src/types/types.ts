export interface AuthResponse {
  id: number,
  idCard: string,
  fullName: string,
  email: string,
  username: string,
  password: string,
  roleId: number,
  birthDate: string,
  token: string
}

export interface AuthResponseError {
  error: string
}

export interface User {
  id: number,
  idCard: string,
  fullName: string,
  email: string,
  username: string,
  roleId: number,
}