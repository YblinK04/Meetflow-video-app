import { describe, it, expect } from 'vitest';
import { randomID } from './helpers';

describe('Хелпер randomID', () => {
  it('должен возвращать строку заданной длины', () => {
    const id = randomID(10);
    expect(id.length).toBe(10);
  });

  it('должен возвращать строку длиной 5 по умолчанию', () => {
    const id = randomID();
    expect(id.length).toBe(5);
  });

  it('должен возвращать разные значения при повторных вызовах', () => {
    const id1 = randomID(5);
    const id2 = randomID(5);
    expect(id1).not.toBe(id2);
  });
});