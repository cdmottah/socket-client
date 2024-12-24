import { User } from "../user.model";

export interface postUserDTO { }
export type postUserResponse = postUserResponseSuccess | postUserResponseError;

export interface postUserResponseSuccess {
  data: User;
}

export interface postUserResponseError {

}
