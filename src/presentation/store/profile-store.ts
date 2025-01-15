import {create} from 'zustand';

export interface ProfileState {
  name: string;
  email: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useProfileStore = create<ProfileState>()(set => ({
  name: 'John Doe',
  email: 'john.doe@google.com',
}));
