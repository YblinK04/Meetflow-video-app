import { describe, it, expect } from 'vitest';
import { JoinRoomSchema } from './schemas';


describe('Валидация JoinRoomSchema ', () => {
    it('должна принимать корректный roomId', () => {
        const result = JoinRoomSchema.safeParse({ roomId: 'Room123'})
        expect(result.success).toBe(true);
    });

    it('должна отклонять пустую строку', () => {
        const result = JoinRoomSchema.safeParse({ roomId: ''})
        expect(result.success).toBe(false);
    });

    it('должна отклонять спецсимволы', () => {
        const result = JoinRoomSchema.safeParse({ roomId: 'room_!!!'});
        expect(result.success).toBe(false)
    })

     it('должна отклонять слишком длинный ID', () => {
    const result = JoinRoomSchema.safeParse({ roomId: 'a'.repeat(21) });
    expect(result.success).toBe(false);
  });
})



