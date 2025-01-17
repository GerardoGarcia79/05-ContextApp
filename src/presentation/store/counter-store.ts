import {create} from 'zustand';

export interface CounterState {
  count: number;

  incrementBy: (value?: number) => void;
  decrementBy: (value?: number) => void;
}

export const useCounterStore = create<CounterState>()(set => ({
  count: 0,
  incrementBy: (value = 1) => set(state => ({count: state.count + value})),
  decrementBy: (value = 1) => set(state => ({count: state.count - value})),
}));
