import { create } from 'zustand';

interface UserDetailsType {
    name: string;
    mulank: number;
    showSummarize: boolean;
    updateUserName: (name: string) => void;
    updateUserMulank: (date: number) => void;
    enableShowSummarize: () => void;
    disableShowSummarize: () => void;
}

const useMulankUserDetails = create<UserDetailsType>((set) => ({
  name: '',
  mulank: -1,
  showSummarize: false,
  updateUserName: (passedName: string) => set(() => ({ name: passedName })),
  updateUserMulank: (passedMulank: number) => set(() => ({ mulank: passedMulank })),
  enableShowSummarize: () => set(() => ({ showSummarize: true})),
  disableShowSummarize: () => set(() => ({ showSummarize: false})),
}));

export default useMulankUserDetails;