export interface IUser {
  sessionUser: {
    _id?: any;
    fname?: string;
    lname?: string;
    email?: string;
    phone?: string;
    bio?: string;
    location?: string;
    protfilo?: string;
    avatar?: string;
    password?: string;
    role?: "user" | "instructor" | "admin";
    isVerified?: boolean;
    isSocial?: boolean;
    education?: any[];
    socialProfile?: any;
    courses?: any;
    createdAt?: Date;
    updatedAt?: Date;
  };
  accessToken: string;
}

export interface AuthState {
  token: string | null;
  user: any | null;
  accessToken: string | null;
  isAuth: boolean;
}

export interface IResponse {
  status?: boolean;
  message: string;
}

export interface ISignupResponse {
  status?: boolean;
  token: string;
  message: string;
}

export interface ISignupRequuest {
  fname: string;
  lname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IConfirmationRequest {
  activationToken: string | null;
  otp: number;
}

export interface ISigninResponse {
  status?: boolean;
  message: string;
  user: any;
  accessToken: string;
}

export interface ISigninRequuest {
  email: string;
  password: string;
}
