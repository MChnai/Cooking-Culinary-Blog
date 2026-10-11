export interface User {
  id: string;
  email: string;
  userName: string;
  fullName: string;
  avatarUrl?: string;
  roles: string[];
}

export interface LoginRequest {
  email: string;
  passwordHash: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: User;
}