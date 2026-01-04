import { z } from 'zod';

export enum UserRole {
  USER = 'user',
  COACH = 'coach',
  ADMIN = 'admin',
}

export const CreateUserSchema = z.object({
  email: z.email(),
  username: z.string().min(5).max(15),
  password: z.string().min(8).max(20),
  role: z.enum(UserRole),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;

export type UserResponse = {
  id: number;
  email: string;
  username: string;
  password: string;
  role: string;
};
