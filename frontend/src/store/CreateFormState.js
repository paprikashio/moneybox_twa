import {atom} from 'recoil';
export const createFormState = atom({
    key: 'createFormState',
    default: {
        target: "",
        amount: "",
        date: new Date(),
    },
});