import { User } from "../user.model";

export interface getOneUserDTO { }
export type GetOneUserResponse = GetOneUserResponseSuccess | GetOneUserResponseError;

export interface GetOneUserResponseSuccess {
  name: string;
}

export interface GetOneUserResponseError {
  error: any;
}
