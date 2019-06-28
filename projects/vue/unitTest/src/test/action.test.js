import snion from 'sinon';
import store, { actions } from '../store';

describe('actions', () => {
  it('actions', () => {
    const commit = sinon.spy();
    const state = {};
    const spy = snion.spy(actions, 'updateMsg');
    store.dispatch('updateMsg', 'dispatch success');
    expect(spy.withArgs('dispatch success').calledOnce).toBeTruthy();
  })
})