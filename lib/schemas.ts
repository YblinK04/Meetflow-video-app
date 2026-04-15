import { z } from 'zod';

export const JoinRoomSchema = z.object({
    roomId: z
    .string()
    .min(3, "Код слишком короткий")
    .max(20, "Код слишком длинный")
    .regex(/^[a-zA-Z0-9]+$/, "Используйте только буквы и цифры"),

})

export type JoinRoomInput = z.infer<typeof JoinRoomSchema>;