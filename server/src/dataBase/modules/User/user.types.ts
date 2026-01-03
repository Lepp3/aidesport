import { z } from 'zod';

export const CreateUserSchema = z.object({
    email: z.email(),
    username: z.string().min(5).max(15),
    password: z.string().min(8).max(20),
});


export type CreateUserDto = z.infer<typeof CreateUserSchema>;

export type UserResponse = {
    id: number;
    email: string;
    username: string;
    password: string;
}
