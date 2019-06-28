import { mutations } from '../store';

const { setData } = mutations;

describe('mutations', () => {
  it('SETDATA', () => {
    const state = { msg: 5 }
    setData(state, 10);
    expect(state.msg).toEqual(10);
    setData(state, 'hello jest');
    expect(state.msg).toEqual('hello jest');
  })
})