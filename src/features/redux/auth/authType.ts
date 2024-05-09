/**
 * Represents the authentication state, including the token and user information.
 */
export interface AuthState {
  token: string; // The authentication token
  user: any; // User information
  accessToken: string;
  isAuth: boolean;
}

/**
 * Payload for signup action containing the authentication token.
 */
export interface SignupPayload {
  token: string; // The authentication token
}

/**
 * Payload for signin action containing the user information and access token.
 */
export interface SigninPayload {
  user: any; // User information
  accessToken: string; // Access token
}

/**
 * Response received after signing up, including a message and authentication token.
 */
export interface SignupResponse {
  success: boolean;
  message: string | undefined; // Optional message
  token: string; // Authentication token
}

/**
 * Data required for signing up a new user.
 */
export interface SignupData {
  fname: string; // First name
  lname: string; // Last name
  email: string; // Email address
  password: string; // Password
  passwordConfirm: string; // Password confirmation
}

/**
 * Data required for activating a user account.
 */
export interface ActivationData {
  activationToken: string | null | undefined; // Activation token
  otp: number; // One-time password
}

/**
 * Response received after activating a user account, including a message.
 */
export interface ActivationResponse {
  success: boolean;
  message: string | undefined; // Optional message
}

/**
 * Response received after signing in, including user information and access token.
 */
export interface SigninResponse {
  user: any; // User information
  accessToken: string; // Access token
  message: string | undefined; // Optional message
}

/**
 * Data required for signing in a user.
 */
export interface SigninData {
  email: string; // Email address
  password: string; // Password
}

/**
 * Response received after signing in, including user information and access token.
 */
export interface SocailAuthResponse {
  user: any; // User information
  accessToken: string; // Access token
  message: string | undefined; // Optional message
}

/**
 * Data required for signing in a user.
 */
export interface SocailAuthData {
  name: string | null | undefined; // name
  email: string | null | undefined; // Email address
  avatar: string | null | undefined; // image
}
